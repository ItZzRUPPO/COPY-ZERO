const { Util, MessageEmbed } = require("discord.js");

const YouTube = require("simple-youtube-api");

const ytdl = require("ytdl-core");

require("dotenv").config();

const success = "✅";

const notes = "🎶";

const stop = "⏹";

const sos = "🆘";

const skippeded = "⏭️";

const repeating = "🔁";

const resumed = "▶";

const pauseeded = "⏸";

//حط ال البفركس بتاعك

const PREFIX =  "-";

// حط اليوتيوب api

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const queue = new Map();

client.on("warn", console.warn);

client.on("error", console.error);

client.on("ready", () => {

    console.log(`[READY] ${client.user.tag} has been successfully booted up!`);

    client.user.setActivity(`MUSIC`, { type: "LISTENING" });

});

client.on("message", async message => {

            if (message.author.bot) return;

            if (!message.content.startsWith(PREFIX)) return;

            const args = message.content.split(" ");

            const searchString = args.slice(1).join(" ");

            const url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";

            const serverQueue = queue.get(message.guild.id);

            let command = message.content.toLowerCase().split(" ")[0];

            command = command.slice(PREFIX.length);

            if (command === "play" || command === "p" || command === "شغل") {

                const voiceChannel = message.member.voice.channel;

                if (!voiceChannel)

                    return message.channel.send({

                        embed: {

                            color: "RED",

                            description: "Be in a Voice Channel First!"

                        }

                    });

                const permissions = voiceChannel.permissionsFor(message.client.user);

                if (!permissions.has("CONNECT")) {

                    return message.channel.send({

                        embed: {

                            color: "RED",

                            description: "Sorry, but I need a **`CONNECT`** permission to proceed!"

                        }

                    });

                }

                if (!permissions.has("SPEAK")) {

                    return message.channel.send({

                        embed: {

                            color: "RED",

                            description: "Sorry, but I need a **`SPEAK`** permission to proceed!"

                        }

                    });

                }

                if (!url || !searchString)

                    return message.channel.send({

                        embed: {

                            color: "RED",

                            description: "Please input link/title to play music"

                        }

                    });

                if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {

                    const playlist = await youtube.getPlaylist(url);

                    const videos = await playlist.getVideos();

                    for (const video of Object.values(videos)) {

                        const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop

                        await handleVideo(video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop

                    }

                    return message.channel.send({

                        embed: {

                            color: "GREEN",

                            description: `${success}  **|**  Playlist: **\`${playlist.title}\`** has been added to the queue`

                        }

                    });

                } else {

                    try {

                        var video = await youtube.getVideo(url);

                    } catch (error) {

                        try {

                            var videos = await youtube.searchVideos(searchString, 10);

                            var video = await youtube.getVideoByID(videos[0].id);

                            if (!video)

                                return message.channel.send({

                                    embed: {

                                        color: "RED",

                                        description: `${sos}  **|**  I could not obtain any search results`

                                    }

                                });

                        } catch (err) {

                            console.error(err);

                            return message.channel.send({

                                embed: {

                                    color: "RED",

                                    description: `${sos}  **|**  I could not obtain any search results`

                                }

                            });

                        }

                    }

                    return handleVideo(video, message, voiceChannel);

                }

            }

            if (command === "search" || command === "sc") {

                const voiceChannel = message.member.voice.channel;

                if (!voiceChannel)

                    return message.channel.send({

                        embed: {

                            color: "RED",

                            description: "I'm sorry, but you need to be in a voice channel to play a music!"

                        }

                    });

                const permissions = voiceChannel.permissionsFor(message.client.user);

                if (!permissions.has("CONNECT")) {

                    return message.channel.send({

                        embed: {

                            color: "RED",

                            description: "Sorry, but I need a **`CONNECT`** permission to proceed!"

                        }

                    });

                }

                if (!permissions.has("SPEAK")) {

                    return message.channel.send({

                        embed: {

                            color: "RED",

                            description: "Sorry, but I need a **`SPEAK`** permission to proceed!"

                        }

                    });

                }

                if (!url || !searchString)

                    return message.channel.send({

                        embed: {

                            color: "RED",

                            description: "Please input link/title to search music"

                        }

                    });

                if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {

                    const playlist = await youtube.getPlaylist(url);

                    const videos = await playlist.getVideos();

                    for (const video of Object.values(videos)) {

                        const video2 = await youtube.getVideoByID(video.id);

                        await handleVideo(video2, message, voiceChannel, true);

                    }

                    return message.channel.send({

                        embed: {

                            color: "GREEN",

                            description: `${success}  **|**  Playlist: **\`${playlist.title}\`** has been added to the queue`

                        }

                    });

                } else {

                    try {

                        var video = await youtube.getVideo(url);

                    } catch (error) {

                        try {

                            var videos = await youtube.searchVideos(searchString, 10);

                            let index = 0;

                            let embedPlay = new MessageEmbed()

                                .setColor("BLUE")

                                .setAuthor("Search results", message.author.displayAvatarURL())

                                .setDescription(

                                    `${videos

                .map(video2 => `**\`${++index}\`  |**  ${video2.title}`)

                .join("\n")}`

            )

            .setFooter(

              "Please choose one of the following 10 results, this embed will auto-deleted in 15 seconds"

            );

          message.channel.send(embedPlay).then(m =>

            m.delete({

              timeout: 15000

            })

          );

          try {

            var response = await message.channel.awaitMessages(

              message2 => message2.content > 0 && message2.content < 11,

              {

                max: 1,

                time: 15000,

                errors: ["time"]

              }

            );

          } catch (err) {

            console.error(err);

            return message.channel.send({

              embed: {

                color: "RED",

                description:

                  "The song selection time has expired in 15 seconds, the request has been canceled."

              }

            });

          }

          const videoIndex = parseInt(response.first().content);

          var video = await youtube.getVideoByID(videos[videoIndex - 1].id);

        } catch (err) {

          console.error(err);

          return message.channel.send({

            embed: {

              color: "RED",

              description: `${sos}  **|**  I could not obtain any search results`

            }

          });

        }

      }

      response.delete();

      return handleVideo(video, message, voiceChannel);

    }

  } else if (command === "skip") {

    if (!message.member.voice.channel)

      return message.channel.send({

        embed: {

          color: "RED",

          description:

            "I'm sorry, but you need to be in a voice channel to skip a music!"

        }

      });

    if (!serverQueue)

      return message.channel.send({

        embed: {

          color: "RED",

          description: "There is nothing playing that I could skip for you"

        }

      });

    serverQueue.connection.dispatcher.end(

      "[runCmd] Skip command has been used"

    );

    return message.channel.send({

      embed: {

        color: "GREEN",

        description: `${skippeded}  **|**  I skipped the song for you`

      }

    });

  } else if (command === "stop") {

    if (!message.member.voice.channel)

      return message.channel.send({

        embed: {

          color: "RED",

          description:

            "I'm sorry but you need to be in a voice channel to play music!"

        }

      });

    if (!serverQueue)

      return message.channel.send({

        embed: {

          color: "RED",

          description: "There is nothing playing that I could stop for you"

        }

      });

    serverQueue.songs = [];

    serverQueue.connection.dispatcher.end(

      "[runCmd] Stop command has been used"

    );

    return message.channel.send({

      embed: {

        color: "GREEN",

        description: `${stop}  **|**  Deleting queues and leaving voice channel...`

      }

    });

  } else if (command === "volume" || command === "vol") {

    if (!message.member.voice.channel)

      return message.channel.send({

        embed: {

          color: "RED",

          description:

            "I'm sorry, but you need to be in a voice channel to set a volume!"

        }

      });

    if (!serverQueue)

      return message.channel.send({

        embed: {

          color: "RED",

          description: "There is nothing playing"

        }

      });

    if (!args[1])

      return message.channel.send({

        embed: {

          color: "BLUE",

          description: `The current volume is: **\`${serverQueue.volume}%\`**`

        }

      });

    if (isNaN(args[1]) || args[1] > 100)

      return message.channel.send({

        embed: {

          color: "RED",

          description:

            "Volume only can be set in a range of **`1`** - **`100`**"

        }

      });

    serverQueue.volume = args[1];

    serverQueue.connection.dispatcher.setVolume(args[1] / 100);

    return message.channel.send({

      embed: {

        color: "GREEN",

        description: `I set the volume to: **\`${args[1]}%\`**`

      }

    });

  } else if (command === "nowplaying" || command === "np") {

    if (!serverQueue)

      return message.channel.send({

        embed: {

          color: "RED",

          description: "There is nothing playing"

        }

      });

    return message.channel.send({

      embed: {

        color: "BLUE",

        description: `${notes}  **|**  Now Playing: **\`${serverQueue.songs[0].title}\`**`

      }

    });

  } else if (command === "queue" || command === "q") {

    let songsss = serverQueue.songs.slice(1);

    let number = songsss.map((x, i) => `${i + 1} - ${x.title}`);

    number = chunk(number, 5);

    let index = 0;

    if (!serverQueue)

      return message.channel.send({

        embed: {

          color: "RED",

          description: "There is nothing playing"

        }

      });

    let embedQueue = new MessageEmbed()

      .setColor("BLUE")

      .setAuthor("Song queue", message.author.displayAvatarURL())

      .setDescription(number[index].join("\n"))

      .setFooter(

        `• Now Playing: ${serverQueue.songs[0].title} | Page ${index + 1} of ${

        number.length

        }`

      );

    const m = await message.channel.send(embedQueue);

    if (number.length !== 1) {

      await m.react("⬅");

      await m.react("🛑");

      await m.react("➡");

      async function awaitReaction() {

        const filter = (rect, usr) =>

          ["⬅", "🛑", "➡"].includes(rect.emoji.name) &&

          usr.id === message.author.id;

        const response = await m.awaitReactions(filter, {

          max: 1,

          time: 30000

        });

        if (!response.size) {

          return undefined;

        }

        const emoji = response.first().emoji.name;

        if (emoji === "⬅") index--;

        if (emoji === "🛑") m.delete();

        if (emoji === "➡") index++;

        if (emoji !== "🛑") {

          index = ((index % number.length) + number.length) % number.length;

          embedQueue.setDescription(number[index].join("\n"));

          embedQueue.setFooter(`Page ${index + 1} of ${number.length}`);

          await m.edit(embedQueue);

          return awaitReaction();

        }

      }

      return awaitReaction();

    }

  } else if (command === "pause") {

    if (serverQueue && serverQueue.playing) {

      serverQueue.playing = false;

      serverQueue.connection.dispatcher.pause();

      return message.channel.send({

        embed: {

          color: "GREEN",

          description: `${pauseeded}  **|**  Paused the music for you`

        }

      });

    }

    return message.channel.send({

      embed: {

        color: "RED",

        description: "There is nothing playing"

      }

    });

  } else if (command === "resume") {

    if (serverQueue && !serverQueue.playing) {

      serverQueue.playing = true;

      serverQueue.connection.dispatcher.resume();

      return message.channel.send({

        embed: {

          color: "GREEN",

          description: `${resumed}  **|**  Resumed the music for you`

        }

      });

    }

    return message.channel.send({

      embed: {

        color: "RED",

        description: "There is nothing playing"

      }

    });

  } else if (command === "loop") {

    if (serverQueue) {

      serverQueue.loop = !serverQueue.loop;

      return message.channel.send({

        embed: {

          color: "GREEN",

          description: `${repeating}  **|**  Loop is **\`${

            serverQueue.loop === true ? "enabled" : "disabled"

            }\`**`

        }

      });

    }

    return message.channel.send({

      embed: {

        color: "RED",

        description: "There is nothing playing"

      }

    });

  }

});

async function handleVideo(video, message, voiceChannel, playlist = false) {

  const serverQueue = queue.get(message.guild.id);

  const song = {

    id: video.id,

    title: Util.escapeMarkdown(video.title),

    url: `https://www.youtube.com/watch?v=${video.id}`

  };

  if (!serverQueue) {

    const queueConstruct = {

      textChannel: message.channel,

      voiceChannel: voiceChannel,

      connection: null,

      songs: [],

      volume: 100,

      playing: true,

      loop: false

    };

    queue.set(message.guild.id, queueConstruct);

    queueConstruct.songs.push(song);

    try {

      var connection = await voiceChannel.join();

      queueConstruct.connection = connection;

      play(message.guild, queueConstruct.songs[0]);

    } catch (error) {

      console.error(

        `[ERROR] I could not join the voice channel, because: ${error}`

      );

      queue.delete(message.guild.id);

      return message.channel.send({

        embed: {

          color: "RED",

          description: `I could not join the voice channel, because: **\`${error}\`**`

        }

      });

    }

  } else {

    serverQueue.songs.push(song);

    if (playlist) return;

    else

      return message.channel.send({

        embed: {

          color: "GREEN",

          description: `${success}  **|**  **\`${song.title}\`** has been added to the queue`

        }

      });

  }

  return;

}

function chunk(array, chunkSize) {

  const temp = [];

  for (let i = 0; i < array.length; i += chunkSize) {

    temp.push(array.slice(i, i + chunkSize));

  }

  return temp;

}

function play(guild, song) {

  const serverQueue = queue.get(guild.id);

  if (!song) {

    serverQueue.voiceChannel.leave();

    return queue.delete(guild.id);

  }

  const dispatcher = serverQueue.connection

    .play(ytdl(song.url))

    .on("finish", () => {

      const shiffed = serverQueue.songs.shift();

      if (serverQueue.loop === true) {

        serverQueue.songs.push(shiffed);

      }

      play(guild, serverQueue.songs[0]);

    })

    .on("error", error => console.error(error));

  dispatcher.setVolume(serverQueue.volume / 100);

  serverQueue.textChannel.send({

    embed: {

      color: "BLUE",

      description: `${notes}  **|**  Start Playing: **\`${song.title}\`**`

    }

  });

}

process.on("unhandledRejection", (reason, promise) => {

  try {

    console.error(

      "Unhandled Rejection at: ",

      promise,

      "reason: ",

      reason.stack || reason

    );

  } catch {

    console.error(reason);

  }

});

process.on("uncaughtException", err => {

  console.error(`Caught exception:${err}`);

  process.exit(1);

});
