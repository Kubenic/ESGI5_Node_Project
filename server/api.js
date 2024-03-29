const auth = require('./libs/auth');
const Product = require('./models/product').Product;

module.exports = router => {

    router.get('/', (req, res) => {
        res.send('');
    });

    router.get('/products', (req, res) => {
        res.setHeader('Content-Type', 'application/json');

        Product.find().then(data => {
            res.send(JSON.stringify(data));
        }).catch(error => {
            res.status(400).send(error);
        });
    });

    router.post('/product/add', (req, res) => {

        const newProduct = new Product({
            "title": req.body.title,
            "description": req.body.description,
            "price": req.body.price,
            "vote": req.body.vote
        });

        newProduct.save().then(data => {
            res.status(201).send(data);
        }).catch(error => {
            res.status(400).send(error);
        });
    });

    router.post('/user/login',auth.AuthLogin);
    router.post('/user/register',auth.AuthRegister);
    router.post('/user/example',auth.generateExampleToken);
    router.get('/user',auth.AuthCheck);
};