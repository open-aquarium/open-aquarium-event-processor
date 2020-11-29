# Open Aquarium - Event Processor

[![Build Status](https://travis-ci.com/open-aquarium/open-aquarium-event-processor.svg?branch=master)](https://travis-ci.com/open-aquarium/open-aquarium-event-processor)

## Demo

https://oa-event-processor-demo.herokuapp.com/

### Service health

```
$ curl https://oa-event-processor-demo.herokuapp.com/health
```

### Event receiver

```
$ curl --header "Content-Type: application/json" --request POST --data '{"payload": "abc" }' https://oa-event-processor-demo.herokuapp.com
```

#### Discovery

```
$ curl --header "Content-Type: application/json" --request POST --data '{
    "header": {
        "type": "DISCOVERY",
        "eventId": "383c44a4-adf7-4831-a4f5-f4019087e8db",
        "triggerTime": "2020-11-29T03:48:31.218Z"
    },
    "device": {
        "serialNumber": "383c44a4-adf7-4831-a4f5-f4019087e8db",
        "softwareVersion": "1.0.0",
        "hardwareVersion": "1.0.0",
        "productVersion": "1.0.0"
    }}' 
    https://oa-event-processor-demo.herokuapp.com
```

#### Periodic

```
$ curl --header "Content-Type: application/json" --request POST --data '{
    "header": {
        "type": "PERIODIC",
        "eventId": "383c44a4-adf7-4831-a4f5-f4019087e8db",
        "triggerTime": "2020-11-29T03:48:31.218Z"
    },
    "device": {
        "serialNumber": "383c44a4-adf7-4831-a4f5-f4019087e8db",
        "softwareVersion": "1.0.0",
        "hardwareVersion": "1.0.0",
        "productVersion": "1.0.0"
    },
    "roomSample": {
        "roomTemperature": 32.9,
        "relativeHumidity": 40.2
    },
    "waterSample": {
        "temperature": 28.1,
        "nitrate": 0,
        "nitrite": 0,
        "ammonia": 0,
        "potentialOfHydrogen": 7,
        "totalDissolvedSolids": 250,
        "chlorine": 0
    } }' https://oa-event-processor-demo.herokuapp.com
```
