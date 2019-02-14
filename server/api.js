const auth = require('./libs/auth');
const Product = require('./models/product').Product;

module.exports = router => {

    router.get('/', (req, res) => {
        res.send('Hello World!');
    });

    router.get('/products', (req, res) => {
        res.setHeader('Content-Type', 'application/json');

        Product.find().then(data => {
            res.send(JSON.stringify(data));
        }).catch(error => {
            res.status(400).send(error);
        });
    });

    router.get('/product/add', (req, res) => {
        const newProduct = new Product({
            "title": 'un titre',
            "description": 'une description',
            "price": 42,
            "vote": 1000000
        });

        newProduct.save().then(data => {
            res.status(201).send(data);
        }).catch(error => {
            res.status(400).send(error);
        });
    });

    router.post('/user/login',auth.AuthLogin)
    /*router.post('/user/login',(req,res) => {
        res.send('user login ! ')
    })*/
};