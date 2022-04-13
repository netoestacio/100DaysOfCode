import express from 'express'
import { Kafka } from 'kafkajs'
import routes from './routes.js'

const port = process.env.PORT || 3000
const app = express()

app.use(routes)

const kafka = new Kafka({
    clientId: 'api',
    brokers: ['kafka1:9092', 'kafka2:9092']
})

// const producer = kafka.producer()
// const consumer = kafka.consumer({groupId: 'test-group'})

async function run () {
  //  await producer.connect()

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



