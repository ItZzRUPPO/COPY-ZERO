
const ms = require ('ms')


    if(command === "timer"){

        let Timer = args[0];

 

 

        if(!args[0]){

            return message.channel.send("Usage: prefix + timer + Duration + s|m|h")

        }

 

        if(args[0] <= 0){

            return message.channel.send("Usage: prefix + timer + Duration + s|m|h")

        

 

        message.channel.send("Time is start:"+ ms(ms(Timer), {long: true}))

        setTimeout(function(){

 

          message.channel.send(message.author.toString()+ `Time is Done,: ${ms(ms(Timer), {long: true})}`)

        }, ms(Timer));

    }

});
