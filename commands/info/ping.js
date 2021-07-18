const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Prefix } = require("../../config.js");


    var msg = `${Date.now() - ncr.createdTimestamp}`;

    var api = `${Math.round(client.ws.ping)}`;

    if (Number(msg) > 70) states = "🟢 Good";

    if (Number(msg) > 170) states = "🟡 Not Bad";

    if (Number(msg) > 350) states = "🔴 Soo Bad";

    if (Number(api) > 70) states2 = "🟢 Good";

    if (Number(api) > 170) states2 = "🟡 Not Bad";

    if (Number(api) > 350) states2 = "🔴 Soo Bad";

    if (ncr.author.bot) return;

    ncr.channel.send(

      new MessageEmbed()

        .setColor("00e8ff")

        .setAuthor(ncr.author.username, ncr.author.avatarURL())

        .addField("**Time Taken:**", msg + " ms 📶 | " + states, true)

        .addField("**WebSocket:**", api + " ms 📶 | " + states2, true)

        .setTimestamp()

        .setFooter(`Request By ${ncr.author.tag}`)
