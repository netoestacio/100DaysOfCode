import express from 'express'
import routes from './routes.js'
import pkg from 'kafkajs';
const { Kafka } = pkg;

const port = process.env.PORT || 3000
const app = express()



const kafka = new Kafka({
    clientId: 'api',
    brokers: ['localhost:9092'],
    retry: {
      initialRetryTime: 300,
      retries: 10
    },
  });

const producer = kafka.producer()
const consumer = kafka.consumer({groupId: 'test-group'})

app.use((req, res, next)=> {
    req.producer = producer;
    return next();
})

app.use(routes)

async function run () {
  await producer.connect()
  .then(producer.send());

    app.listen(port, ()=>{
        console.log(`Server running on port:${port}`)
    })
}

run().catch(console.error)

await producer.send({
    topic: 'test-topic',
    messages: [
        { value: 'Hello kafkaJS user!' },
    ],
})



