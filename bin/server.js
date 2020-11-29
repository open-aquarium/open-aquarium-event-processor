const { v4: uuidv4 } = require('uuid');

const processEvent = require('../src/processEvent');

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

server.post('/', async function(req, res, next) {
    const event = req.body;
    if(event === undefined) {
        throw new Error('Invalid request');
    }
    try {
        const result = await processEvent(event);
        console.log('EVENT', result);
        res.send({
            eventId: result.header.eventId,
            timestamp: new Date().toISOString()
        });
    } catch(error) {
        console.log('ERROR', error);
        if(error.message === 'Invalid request' || error.message === 'Unknown event') {
            res.send(400, 'Bad request');
        } else {
            res.send(500, 'Internal Server Error');
        }
    }
    return next();
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, function() {
    console.log('%s listening at %s', server.name, server.url);
});
