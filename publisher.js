const amqp = require("amqplib/callback_api");
amqp.connect(`amqp://localhost`,(err,connection)=>{
    if(err){
        throw err
    }
    connection.createChannel((err,channel)=>{
        if(err){
            throw err
        }
        let queueName = "TarunD";
        let message = "This is rabbitmq workshop";
        channel.assertQueue(queueName,{
            durable:false

        });
        channel.sendToQueue(queueName,Buffer.from(message));
        console.log(`Message : ${message}`)
        setTimeout(()=>{
            connection.close()
        },1000)

    })
}) 















