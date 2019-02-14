const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const EmailValidator = new RegExp(/\S+@\S+\.\S+/g);
const User = require('../models/user').User;
const verifyToken = function (token) {
    return new Promise(
        (resolve, reject) =>
            jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
                if(err || !decodedToken){
                    reject(err);
                }
                resolve(decodedToken);
            })
    )
};
const generateToken = function (payload) {
    return jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {algorithm:'HS256'}
        );
}

const generateExampleToken =  function(req,res){
    const example = generateToken({
        id: 10,
        username: "test",
        login: "test"
    })
    res.send(example);
}

const AuthCheck = function(req, res){
    const auth = req.get('Authorization');
    if(!auth || !auth.startsWith('Bearer')){
        res.sendStatus(401)
    }else{
        const tokenString = auth.replace('Bearer ', '');
        verifyToken(tokenString).then(function(decoded){
            let query = User.findOne({'login': decoded.login}).then(function(data){
                if(data){

                }else{
                    res.sendStatus(401);
                }
            }).catch(function(error){
                res.sendStatus(401);
            })
        });
    }
}
const AuthLogin = function(req, res) {
    try{
        let body = req.body;
        if(body.login){
            User.find(
                {
                    $and: [
                        {'password': bcrypt.hashSync(body.password,10)},
                        {$or: [{"email":body.login},{"login": body.login}]}
                    ]
                }
            )
            .then((data)=>{{
                let payload = {
                    firstname: data.firstname,
                    lastname: data.lastname,
                    username: data.username,
                    login: data.login
                };
                res.setHeader('Content-Type','application/json');
                res.send(generateToken(payload));
            }})
            .catch((error)=> {
                res.sendStatus(401);
            });
        }
    }catch (e) {
        res.sendStatus(401);
    }
}
const AuthRegister = function(req, res){
   try{
       let body = req.body;
       if(EmailValidator.test(body.email)){
           User.find().or([{"email":body.email},{"login": body.login}]).then((result) => {
               if(result.length === 0){
                   const newUser = new User({
                       login:body.login,
                       email:body.email,
                       username: body.username,
                       firstname: body.firstname,
                       lastname: body.lastname,
                       password: bcrypt.hashSync(body.password,10)
                   });
                   newUser.save().then((data) => {
                       let payload = {
                           firstname: data.firstname,
                           lastname: data.lastname,
                           username: data.username,
                           login: data.login
                       }
                       res.setHeader('Content-Type','application/json');
                       res.send(generateToken(payload));
                   })
               }else{
                   res.sendStatus(401);
               }
           }).catch((error) => {
               res.send(error);
           })
       }

   }catch(error){
        res.send(error);
       res.sendStatus(401);
   }
}

module.exports = {
    AuthCheck,
    AuthLogin,
    AuthRegister,
    generateToken,
    generateExampleToken,
    verifyToken
}