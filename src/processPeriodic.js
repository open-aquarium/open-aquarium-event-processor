const Joi = require('joi');

const schema = Joi.object({
    header: Joi.object({
        type: Joi.string()
            .alphanum()
            .min(1)
            .max(255)
            .required(),
        eventId: Joi.string()
            .guid({ version: [ 'uuidv4' ] })
            .required(),
        triggerTime: Joi.string()
            .isoDate()
            .required(),
    }),
    device: Joi.object({
        serialNumber: Joi.string()
            .guid({ version: [ 'uuidv4' ] })
            .required(),
        softwareVersion: Joi.string()
            .min(1)
            .max(255)
            .required(),
        hardwareVersion: Joi.string()
            .min(1)
            .max(255)
            .required(),
        productVersion: Joi.string()
            .min(1)
            .max(255)
            .required(),
    }),
    roomSample: Joi.object({
        roomTemperature: Joi.number()
            .min(-100)
            .max(100)
            .required(),
        relativeHumidity: Joi.number()
            .min(0)
            .max(100)
            .required(),
    }),
    waterSample: Joi.object({
        temperature: Joi.number()
            .required(),
        nitrate: Joi.number()
            .required(),
        nitrite: Joi.number()
            .required(),
        ammonia: Joi.number()
            .required(),
        potentialOfHydrogen: Joi.number()
            .required(),
        totalDissolvedSolids: Joi.number()
            .required(),
        chlorine: Joi.number()
            .required(),
    }),
});

const processPeriodic = async (event) => {
    if(event === undefined) {
        return null;
    }
    if(schema.validate(event).error) {
        return null;
    }
    return event;
}
module.exports = processPeriodic;
