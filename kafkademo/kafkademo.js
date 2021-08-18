const {Kafka}=require('kafkajs')

const Kafka_n=new Kafka({brokers:['localhost:9092']})
const consumer = Kafka_n.consumer({groupId:""+Date.now()})
//can put any groupId there

consumer.connect()
consumer.subscribe({topic:"mymessage-service",fromBeginning:true})
consumer.run({
    eachMessage:async(data)=>{
        console.log(data.message.value.toString())
    }
})