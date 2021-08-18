const {Kafka} = require('kafkajs')

const kafka = new Kafka({brokers:['localhost:9092']})
const consumer = kafka.consumer({groupId:""+Date.now()})

consumer.connect()
consumer.subscribe({topic:'mymessage-service',fromBeginning:true})
consumer.run({
    eachMessage:async(data)=>{
        console.log(data.message.value.toString())
    }
})