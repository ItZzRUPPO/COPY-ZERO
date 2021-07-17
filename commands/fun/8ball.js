const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "8ball",
  aliases: [""],
  description: "Help Command!",
  usage: "o/Help | <Command Name>",
  run: async(client, message, args) => {
	  var rand = ['Yes', 'No', 'Why are you even trying?', 'What do you think? NO', 'Maybe', 'Never', 'Yep'];
    let slaw = rand[Math.floor(Math.random()*rand.length)];
	  message.channel.send(slaw)
	  
  }
  }
