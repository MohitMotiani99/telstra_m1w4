const {Kafka}=require('kafkajs')

run().then(()=>console.log('Done'),err=>console.log(err))

module.exports=async function run(){
    const kafka = new Kafka({brokers:['localhost:9092']})

    const producer = kafka.producer();
    await producer.connect()

    await producer.send({
        topic: 'mymessage-service',
        messages: [
            {value: "Welcome to the code"}
        ]
    })
}


