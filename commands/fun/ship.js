const fs = require("fs");
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ship",
  aliases: [""],
  description: "Help Command!",
  usage: "o/Help | <Command Name>",
  run: async(client, message, args) => {
 
    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let Result = Math.floor(Math.random() * 101);

    let embed = new Discord.MessageEmbed()
      .setColor(Color)
      .setTitle(`Ship Machine`)
      .setDescription(`${Member.user.username}:  Is ${Result}% Ship ♥️`)
    

    message.channel.send(embed);

    //End
  }
};
