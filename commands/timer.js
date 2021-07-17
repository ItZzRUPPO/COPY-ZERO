const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Prefix } = require("../../config.js");





module.exports = {
const ms = require ('ms')

client.on('message', message => {

    const args = message.content.slice(prefix.length).trim().split(/ +/g);

    const command = args.shift().toLowerCase();

 

    if(command === "timer"){

        let Timer = args[0];

 

 

        if(!args[0]){

            return message.channel.send("Usage: prefix + timer + Duration + s|m|h")

        }

 

        if(args[0] <= 0){

            return message.channel.send("Usage: prefix + timer + Duration + s|m|h")

        }

 

        message.channel.send("Time is start:"+ ms(ms(Timer), {long: true}))

        setTimeout(function(){

 

          message.channel.send(message.author.toString()+ `Time is Done,: ${ms(ms(Timer), {long: true})}`)

        }, ms(Timer));

    }

});
    


     



