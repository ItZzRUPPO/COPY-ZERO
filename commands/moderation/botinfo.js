const fs = require("fs");
const Discord = require("discord.js");
const { stripIndents } = require("common-tags");
const moment = require("moment-timezone");
 function duration(ms) {
    const sec = Math.floor((ms / 1000) % 60).toString();
    const min = Math.floor((ms / (1000 * 60)) % 60).toString();
    const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString();
    const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString();
    return `${days.padStart(1, "0")}-${hrs.padStart(2, "0")}-${min.padStart(
      2,
      "0"
    )}-${sec.padStart(2, "0")}`;
  }


module.exports = {
  name: "botinfo",
  aliases: [],
  description: "Pong!",
  usage: "Ping",
  run: async (client, message, args) => {

const created = moment(client.user.createdAt).format("YYYY-MM-DD");

     
       let embed = new Discord.MessageEmbed()
        .setTitle(`Info ${client.user.username}`)
        .setColor("f1c40f")
        .setThumbnail(client.user.displayAvatarURL())
        .addField(`**My Name:**`,`${client.user.tag}`)
        .addField(`**My ID**`,`${client.user.id}`)
        .addField(`**My Prefix**`,`k?`)
        .addField(`**Libary**`,`discord.js`)
        .addField(`**Discord.js Version**`,`${Discord.version}`)
        .addField(`**Created At:**`,`[**${created}**]`)
        .addField(`**Ping**`,`${Math.round(client.ws.ping)}ms`)
        .addField(`**Guilds**`,`${client.guilds.cache.size}`)
        .addField(`**Channels**`,`${client.channels.cache.size}`)
        .addField(`**Users**`,`${client.users.cache.size}`)
        .addField(`**Creator**`,`[<@856199357396156436>]`)
        .setFooter(`Requested By ${message.author.username}`)
        .setTimestamp();
       
        message.channel.send(embed);
}
}
