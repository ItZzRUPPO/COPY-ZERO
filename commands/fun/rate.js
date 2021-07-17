const fs = require("fs");
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "rate",
  aliases: [""],
  description: "Help Command!",
  usage: "o/Help | <Command Name>",
  run: async(client, message, args) => {

    
    let Content = args.join(" ");

    if (!Content)
      return message.channel.send(`Please give me something to rate!`);

    let embed = new Discord.MessageEmbed()
      .setColor("")
      .setTitle(`I Rate`)
      .setDescription(`${Math.floor(Math.random() * 11)}/10 To ${Content}`)
      

    message.channel.send(embed);

    
  }
};
