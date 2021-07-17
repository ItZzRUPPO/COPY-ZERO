const fs = require("fs");
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "respect",
  aliases: ["resp"],
  description: "Help Command!",
  usage: "o/Help | <Command Name>",
  run: async(client, message, args) => {

    let embed = new Discord.MessageEmbed()
      .setColor("")
      .setFooter(`Press F to pay respect`)
      .setDescription(`${message.member} has paid their respect${args.length ? ` to ${args.join(' ')}.` : ''}`)
    
message.channel.send(embed);
    await message.delete().catch(() => null);

    return message.react("Ⓕ")
  }
};
