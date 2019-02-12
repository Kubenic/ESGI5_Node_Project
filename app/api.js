module.exports = router => {

    router.get('/', (req, res) => {
        res.send('Hello World!');
    });

    router.get('/test/:id', (req, res) => {
        res.send(`test with id = ${req.params.id}`);
    });
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