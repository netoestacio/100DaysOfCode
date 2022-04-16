import express from 'express'
import routes from './routes.js'
import kafka, { KeyedMessage, Producer } from 'kafka-node'

const port = process.env.PORT || 3000
const app = express()

const Consumer = kafka.Consumer
const client = new kafka.KafkaClient()
const producer = new Producer(client)
var km = new KeyedMessage('key', 'message')
var payloads = [
  {topic: 'topic1', messages: 'hi', partition: 0},
  {topic: 'topic2', messages: ['hi','Good Morning', km] },
]

producer.on('ready', () =>{
  producer.send(payloads, (err, data) => {
      console.log(data)
  })
})
producer.on('error', (err)=> {
  console.log(err)
})


app.use((req, res, next)=> {
    req.producer = producer;
    return next();
})

app.use(routes)





