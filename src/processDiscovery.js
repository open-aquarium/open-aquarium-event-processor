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
});

const processDiscovery = async (event) => {
    if(event === undefined) {
        return null;
    }
    if(schema.validate(event).error) {
        return null;
    }
    return event;
}
module.exports = processDiscovery;
