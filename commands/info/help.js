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
 
<a:emoji_197:864136523410571295>︙**Info** 
\`help\`, \`ping\`, \`Server\`,
\`userinfo\`, \`invite\`, \`uptime\`
\`say\`, \`uinvite\`, \`roles\`
\`stats\`, \`listemoji\`, \`se\`,
\`weather\`,\`timer`\,\`avatar\`,

<a:banned:863095808572522547>︙**Moderation** 
\`ban\`, \`unban\`, \`kick\`,
\`mute\`, \`unmute\`, \`clear\`
\`lock\`, \`unlock\`, \`slowmode\`
\`nick\`, \`hide\`, \`unhide\` 
\`vmute\`,\`vunmute\`,\`vkick\`

<a:gifland_tatlisbeyaz:864551590354223104>︙**Fun**
\`ascii\`, \`iq\`, \`rps\`,
\`howgay\`, \`rate\`, 

<a:gifland_kedicikbeyaz:792364864089358346>︙**Gifs**
\`boy\`, \`girl\`, \`anime\`,
\`smoke\`, \`baby\`, \`love\`,
\`neon\`, 

<a:emoji_49:863080675346350080>︙**Photos** 
\`Pboy\`, \`Pgirl\`, \`Panime\`,
\`Pcartoon\`, \`Pbaby\`, \`Plove\`,
\`Psmoke\`

<a:emoji_199:864142531758260234>︙**Links**
[Server](https://discord.gg/yyJKH4NGuQ)**-**[Invite](https://discord.com/api/oauth2/authorize?client_id=830265742795866162&permissions=8&scope=bot)

  

`)
    .setFooter(`${message.author.username}`)
  //  .setImage(``)
  //  .setTimestamp();
    message.react(`✅`)
 
      return message.channel.send(embed);
    
  }
};
