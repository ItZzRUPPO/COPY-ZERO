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
    .setTitle(`Zero Help`)

    .setDescription(`
 
<:emoji_213:866853582866874378> ︙**Info** 
\`help\` - \`ping\` - \`Server\` - \`id\`
\`userinfo\` - \`invite\` - \`uptime\`
\`say\` - \`uinvite\` - \`roles\` - \`se\`
\`stats\` - \`avatar\` - \`support\`
\`weather\` - \`timer\` - \`members\`

 <:HAMER:866805517975814184> ︙**Moderation** 
\`ban\` - \`unban\` - \`kick\`,
\`mute\` - \`unmute\` - \`clear\`
\`lock\` - \`unlock\` - \`slowmode\`
\`nick\` - \`hide\` - \`unhide\` 
\`vmute\` - \`vunmute\` -\`vkick\`

<:fire:866843047098187816> ︙**Fun**
\`ascii\` - \`iq\` - \`rps\`
\`howgay\` - \`rate\`

<:Cute:866821599562170398> ︙**Gifs**
\`boy\` - \`girl\` - \`anime\`
\`smoke\` - \`baby\` - \`love\`
\`neon\`

<:lovy:866841502272454717> ︙**Photos** 
\`Pboy\` - \`Pgirl\` - \`Panime\`,
\`Pcartoon\` - \`Pbaby\` - \`Plove\`,
\`Psmoke\`

<:partner:863110940257550336> ︙**Links**
[Server](https://discord.gg/yyJKH4NGuQ)**-**[Invite](https://discord.com/api/oauth2/authorize?client_id=830265742795866162&permissions=8&scope=bot)

`)  
   .setFooter(`${message.author.username}`)
//  .setImage(``)
//  .setTimestamp();   
  message.react(`✅`)
  return message.channel.send(embed);
   
     }
 };
      
    
  

