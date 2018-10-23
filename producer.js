var Kafka = require('no-kafka');

var producer = new Kafka.Producer({
  connectionString: 'kafka://127.0.0.1:9093', // should match `listeners` SSL option in Kafka config
  ssl: {
    cert: '/path/to/client.crt',
    key: '/path/to/client.key'
  }
});

return producer.init().then(function(){
  return producer.send({
      topic: 'kafka-test-topic',
      partition: 0,
      message: {
          value: 'Hello from Node!'
      }
  });
})
.then(function (result) {
  /*
  [ { topic: 'kafka-test-topic', partition: 0, offset: 353 } ]
  */

  /*
  Do something after pushing message to Kafka Que
  */

  console.log(result);
});
