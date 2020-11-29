const { v4: uuidv4 } = require('uuid');

const restify = require('restify');
const server = restify.createServer();
server.use(restify.plugins.queryParser({ mapParams: true }));
server.use(restify.plugins.bodyParser({ mapParams: true }));
server.use(restify.plugins.acceptParser(server.acceptable));

server.get('/health', (req, res, next) => {
    res.send({
        timestamp: new Date().toISOString(),
        server: 'healthy',
    });
    return next();
});

server.get('/', function(req, res, next) {
    res.send({
        eventId: uuidv4(),
        timestamp: new Date().toISOString()
    })
    return next();
});

server.post('/', function(req, res, next) {
    const event = {
        received: new Date().toISOString(),
        data: JSON.stringify(req.body)
    };
    console.log('EVENT', event);
    res.send({
        eventId: uuidv4(),
        timestamp: new Date().toISOString()
    });
    return next();
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, function() {
    console.log('%s listening at %s', server.name, server.url);
});
