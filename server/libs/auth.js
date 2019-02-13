const jwt = require('jsonwebtoken');

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
const generateToken = function (token) {

}
const AuthLogin = function(req, res){
    const auth = req.get('Authorization');
    if(!auth || !auth.startsWith('Bearer')){
        res.sendStatus(401)
    }else{
        res.send(auth.toString());
    }
}

module.exports = {
    verifyToken,
    AuthLogin
}