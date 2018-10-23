# heroku-kafka-node-client

### Installation
    npm install no-kafka

### Configuration
Get Kafka environment variables using following command.
    
    heroku config -s > .env
    
In .env file you will get following 4 variables which will be used in establishing secure connection to your Kafka cluster.

 - KAFKA_CLIENT_CERT
 - KAFKA_CLIENT_CERT_KEY
 - KAFKA_TRUSTED_CERT
 - KAFKA_PREFIX

### Sample connection example

    var producer = new Kafka.Producer({
      connectionString: 'kafka://127.0.0.1:9093', // should match `listeners` SSL option in Kafka config
      ssl: {
        cert: '-----BEGIN CERTIFICATE-----\nMIIChTCCAe4C...............',
        key: '-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBA.......'
      }
    });
    
    
