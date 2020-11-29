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
