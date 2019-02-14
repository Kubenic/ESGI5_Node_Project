const auth = require('./libs/auth');
module.exports = router => {

    router.get('/', (req, res) => {
        res.send('Hello World!');
    });

    router.get('/test/:id', (req, res) => {
        res.send(`test with id = ${req.params.id}`);
    });
    router.post('/user/login',auth.AuthLogin);
    router.post('/user/register',auth.AuthRegister);
    router.post('/user/example',auth.generateExampleToken);
    /*router.post('/user/login',(req,res) => {
        res.send('user login ! ')
    })*/
};

/**
 * Usage :
 *
    if (!data) {
        throw errorHandler(404);
    }
 *
 */
function errorHandler(statusCode) {
    return Object.assign(new Error(), {
        statusCode
    });
}