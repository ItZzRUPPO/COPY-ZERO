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
 
<a:king:864136523410571295> ︙**Info** 
\`help\`, \`ping\`, \`Server\`,\`id\`
\`userinfo\`, \`invite\`, \`uptime\`
\`say\`, \`uinvite\`, \`roles\`
\`stats\`, \`se\`,\`avatar\`,
\`weather\`,\`timer\`-\`rooms\`

<a:ban:863095808572522547> ︙**Moderation** 
\`ban\`, \`unban\`, \`kick\`,
\`mute\`, \`unmute\`, \`clear\`
\`lock\`, \`unlock\`, \`slowmode\`
\`nick\`, \`hide\`, \`unhide\` 
\`vmute\`,\`vunmute\`,\`vkick\`

<a:3HyperBlob:863095794570362919> ︙**Fun**
\`ascii\`, \`iq\`, \`rps\`,
\`howgay\`, \`rate\`

<a:run:866009756124446780> ︙**Gifs**
\`boy\`, \`girl\`, \`anime\`,
\`smoke\`, \`baby\`, \`love\`,
\`neon\`

<a:hi:866009710800928788> ︙**Photos** 
\`Pboy\`, \`Pgirl\`, \`Panime\`,
\`Pcartoon\`, \`Pbaby\`, \`Plove\`,
\`Psmoke\`

<a:link:864142531758260234> ︙**Links**
[Server](https://discord.gg/yyJKH4NGuQ)**-**[Invite](https://discord.com/api/oauth2/authorize?client_id=830265742795866162&permissions=8&scope=bot)

`)  
   .setFooter(`${message.author.username}`)
//  .setImage(``)
//  .setTimestamp();   
  message.react(`✅`)
  return message.channel.send(embed);
   
     }
 };
      
    
  

