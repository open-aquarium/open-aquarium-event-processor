const processDiscovery = require('./processDiscovery');
const processPeriodic = require('./processPeriodic');

const processEvent = async (event) => {
    // console.log('processEvent', new Date());
    // console.log('EVENT', event);
    if(!event.header.type) {
        throw new Error('Invalid request');
    }
    if(event.header.type === 'DISCOVERY') {
        return await processDiscovery(event);
    } else if(event.header.type === 'PERIODIC') {
        return await processPeriodic(event);
    } else {
        throw new Error('Unknown event');
    }
}
module.exports = processEvent;
