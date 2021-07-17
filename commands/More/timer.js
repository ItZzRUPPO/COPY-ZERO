const Discord = require("discord.js");
const ms = require ('ms')
let Timer = args[0];

  if(!args[0]){

    return message.channel.send(":x: " + "| Please Enter a time period followed by \"s or m or h\"");

  }

  if(args[0] <= 0){

    return message.channel.send(":x: " + "| Please Enter a time period followed by \"s or m or h\"");

  }

  message.channel.send(":white_check_mark: " + "<a:emoji_200:865930365306667029>""`| Timer Started For  " + `${ms(ms(Timer), {long: true})}`)

  setTimeout(function(){

    message.channel.send(message.author.toString() " + "<a:Yes:863080680496562196>""| The Timer Has FINISHED"!, it lasted: ${ms(ms(Timer), {long: true})}`)

  }, ms(Timer));

}

module.exports.help = {

    name: "timer"

}








