const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Prefix } = require("../../config.js");

module.exports = {
  name: "help",
  aliases: ["h", "Help"],
  description: "Show Help Command",
  usage: "Help",
  run: async(client, message, args) => {
 
    
    
    let embed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`Help oPoRo!`)

    .setDescription(`
 
<a:infooporo:823333203459702836>︙**Info** 
\`help\`, \`ping\`, \`Server\`,
\`userinfo\`, \`invite\`, \`uptime\`
\`say\`, \`uinvite\`, \`roles\`
\`stats\`, \`listemoji\`, \`se\`,
\`weather\`,\`timer`\,\`avatar\`

<a:modoporo:858281897096118272>︙**Moderation** 
\`ban\`, \`unban\`, \`kick\`,
\`mute\`, \`unmute\`, \`clear\`
\`lock\`, \`unlock\`, \`slowmode\`
\`nick\`, \`hide\`, \`unhide\` 
\`vmute\`,\`vunmute\`,\`vkick\`

<a:funnyoporo:803086992044589096>︙**Funny**
\`ascii\`, \`iq\`, \`rps\`,
\`howgay\`, \`rate\`, 

<a:gifoporo:854036186868088872>︙**Gifs**
\`boy\`, \`girl\`, \`anime\`,
\`animal\`, \`baby\`, \`love\`,
\`emoji\`, 

<a:photooporo:854036253778247742>︙**Photos** 
\`Pboy\`, \`Pgirl\`, \`Panime\`,
\`Pneon\`, \`Pbaby\`, \`Plove\`,
\`Psmoke\`

ZERO BOT
[Server](https://discord.gg/VWuQfQfjc9)**-**[Invite](https://discord.com/api/oauth2/authorize?client_id=814608707412295780&permissions=8&scope=bot)

  

`)
    .setFooter(`${message.author.username}`)
  //  .setImage(``)
  //  .setTimestamp();
    message.react(`✅`)
 
      return message.channel.send(embed);
    
  }
};
