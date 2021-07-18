const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Prefix } = require("../../config.js");



const { MessageEmbed } = require("discord.js");

const { Prefix } = require("../../config.js");

module.exports = {

  name: "ping",

  aliases: ["p"],

  description: "Pong!",

  usage: "Ping",

  run: async (client, message, args) => {

    

    const embed = new MessageEmbed()

      .setColor("WHITE")

      .setDescription(`My Ping is - ${client.ws.ping}`)

    message.channel.send(embed);

    

  }

};
    
