var Kafka = require('no-kafka');

var consumer = new Kafka.SimpleConsumer({
  connectionString: 'kafka://127.0.0.1:9093', // should match `listeners` SSL option in Kafka config
  ssl: {
    cert: '/path/to/client.crt',
    key: '/path/to/client.key'
  }
});

// data handler function can return a Promise
var dataHandler = function (messageSet, topic, partition) {
    messageSet.forEach(function (m) {
        console.log(topic, partition, m.offset, m.message.value.toString('utf8'));
    });
};

return consumer.init().then(function () {
    // Subscribe partitons 0 and 1 in a topic:
    return consumer.subscribe('kafka-test-topic', [0, 1], dataHandler);

    // OR If you want get messages from start
    // return consumer.subscribe('kafka-test-topic', 0, {time: Kafka.EARLIEST_OFFSET}, dataHandler)
    // Please read docs for more options
});
