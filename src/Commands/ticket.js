//-------------------------------
//-------------Start-------------
//-------------------------------

//This ticket system is currently being rewritten, please ignore this mess. LMAO.


const PasteClient = require('pastebin-js')
const config = require("../data/config.json")
const Command = require("../Structures/command.js");
const {MessageEmbed, Permissions} = require("discord.js");
const fs = require("fs");
const botID = config.botID
const moment = require("moment")



let modmailLimit = new Set();

module.exports = new Command({
    name: "modmail",
    description: "Get help from the staff team",

    async run(message, args, client) {
        const verifyServer = client.guilds.cache.get(config.serverId);
        const member = await verifyServer.members.fetch(message.author.id)
        const modmailAuthor = message.author.id

        //if (member.roles.cache.has("890218400155058196")) {
            if (message.channel.type === 'DM') {
                if (config.turnOnModmail === "true") {

                    const reason = args.slice(1).join(" ")


                    //-------------------------------
                    //-------------Embeds------------
                    //-------------------------------


                    const stopembed = new MessageEmbed()
                        .setTitle(`Thank you for using our modmail system!`)
                        .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://github.com/Timtendo12/FarCryDiscordBot')
                        .setColor('ORANGE')
                        .setTimestamp()
                        .setDescription(`
           **User: <@${message.author.id}>**
           **Reason: \`${reason}\`**
               
           -={---------------------------------------}=-    
                 **Click 🔒 to lock the modmail.**
           
                ***For <@&${config.modRoleId}>:***
             **Click ⛔ to close and delete the modmail.**
      `);
                    const noReasonEmbed = new MessageEmbed()
                        .setTitle(`Please provide a reason.`)
                        .setColor('DARK_RED')
                        .setTimestamp()
                        .setDescription(`Usage: fc!modmail (reason)`);

                    const closeMessage = new MessageEmbed()
                        .setTitle(`Modmail is closed`)
                        .setColor('DARK_RED')
                        .setTimestamp()
                        .setDescription(`This channel will be deleted in 5 seconds.`);
                    const lockMessage = new MessageEmbed()
                        .setTitle(`Modmail is locked`)
                        .setColor('YELLOW')
                        .setTimestamp()
                        .setDescription(`This modmail has successfully been locked.`);
                    const noPermissionsMessage = new MessageEmbed()
                        .setTitle(`Cannot lock this modmail.`)
                        .setColor('YELLOW')
                        .setTimestamp()
                        .setDescription(`Uwu *papi*, i can't overwrite perwms for *hachooo* Nico nico <@&${config.modRoleId}> *niii* ohhh *I am a real sussy* **baka**. ;V;`);
                    const createdLogEmbed = new MessageEmbed()
                        .setTitle(`Modmail created`)
                        .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://github.com/Timtendo12/FarCryDiscordBot')
                        .setColor('GREEN')
                        .setTimestamp()
                        .setDescription(`
           **User: \`${message.author.tag}\`**
           **Reason: \`${reason}\`**`);
                    const closedLogEmbed = new MessageEmbed()
                        .setTitle(`Modmail closed`)
                        .setColor('RED')
                        .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://github.com/Timtendo12/FarCryDiscordBot')
                        .setTimestamp()
                        .setDescription(`
           **User: \`${message.author.tag}\`**
           **Reason: \`${reason}\`**`);
                    const modmailLimitEmbed = new MessageEmbed()
                        .setTitle(`You already have a open modmail.`)
                        .setColor('DARK_RED')
                        .setTimestamp()
                        .setDescription(`**You can only open 1 modmail at a time, Close it before opening a new one.**`);
                    const onlyModEmbed = new MessageEmbed()
                        .setTitle('Only mods and admins can close modmails.')
                        .setColor('DARK_RED')


                    //-------------------------------
                    //---------Checkpoints-----------
                    //-------------------------------

                    //checks if a reason has been provided.
                    if (!reason) return message.channel.send({embeds: [noReasonEmbed]});

                    //checks if the user already has a modmail
                    if (modmailLimit.has(message.author.id)) {
                        message.channel.send({embeds: [modmailLimitEmbed]})
                    } else {
                        if (reason.toLowerCase().includes("bug")){
                            //technical gif for the bug reports
                            message.channel.send("Bug report successfully sent. Im busy gathering resources and creating a modmail especially for you. This can take a few seconds. \nhttps://media2.giphy.com/media/95QSn2htzlBxyZfZL1/giphy.gif?cid=790b7611004566eb1c9b65abae6f83ae52b3b328bc1cabe7&rid=giphy.gif&ct=g")
                        }else {
                            //normal gifs for normal modmails.
                            message.reply("Modmail request succesfully sent. Please wait a few seconds while we prepare your very own modmail. \nhttps://c.tenor.com/6PL8EY_LUiQAAAAd/mi-gifs.gif");
                        }
                        const server = client.guilds.cache.get(config.serverId);
                        // const server = client.guilds.get(config.serverId);
                        const channel = await server.channels.create(`FCModmail: ${message.author.tag}`, {
                            type: 'GUILD_TEXT',
                            parent: `${config.modmailCaterogy}`,
                            permissionOverwrites: [
                                {
                                    id: server.id,
                                    deny: [Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY]
                                },
                                {
                                    id: message.author.id,
                                    allow: [Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY]
                                },
                                {
                                    id: client.user.id,
                                    allow: [Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY,
                                        Permissions.FLAGS.MANAGE_MESSAGES, Permissions.FLAGS.ADD_REACTIONS, Permissions.FLAGS.EMBED_LINKS,
                                        Permissions.FLAGS.MANAGE_CHANNELS]
                                },
                                {
                                    id: config.modRoleId,
                                    allow: [Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY,
                                        Permissions.FLAGS.MANAGE_MESSAGES, Permissions.FLAGS.ADD_REACTIONS, Permissions.FLAGS.EMBED_LINKS,
                                        Permissions.FLAGS.MANAGE_CHANNELS]
                                },
                            ]
                        });


                                             //--------------------------------
                                            //--To do after channel creation--
                                            //--------------------------------

                        const logChannel = server.channels.cache.get(config.logChannel);
                        const mmLogChannel = server.channels.cache.get(config.mmLogChannel);



                        const reactionMessage = await channel.send({embeds: [stopembed]})
                        //----------await channel.send(`<@${message.author.id}> & <@&${config.modRoleId}>`);

                        //checks if the reason is a bug report. If it is. lead them ubisoft support if it is not a discord bot bug report
                        if (reason.toLowerCase().includes("bug")){
                            //it's a bug report.
                            const bugEmbed = new MessageEmbed()
                                .setTitle("")
                                .setDescription(`Thank you for taking your time to report a discord bot bug. Please describe your bug using this template ***in github issue:***
                                
                            **Bug: **
                            **Channel: **
                            **Steps to reproduce: **
                            **Did the bot go offline/unreactive? ✅ Yes / ❌ No / ❓ I dont know.**
                            
                            *github link:* https://github.com/Timtendo12/FarCryDiscordBot/issues
                            
                            If you want to report a game bug please use the following link to contact Ubisoft 
                            https://discussions.ubisoft.com/category/793/player-support?lang=en-US`)
                                .setColor('ORANGE')
                                .setAuthor(`${config.botName}`, `${config.botIcon}`, 'https://github.com/Timtendo12/FarCryDiscordBot');
                                channel.send({embeds: [bugEmbed]});
                                channel.send(`<@${message.author.id}>`)
                        } else {
                        await channel.send(`<@${message.author.id}>`)}

                        //-------------------------------
                        //----------Logging--------------
                        //-------------------------------

                        // This logging system uses the pastebin API to create private and easily accessible logs
                        // for administration

                        //Generates a random ID. This will be used to easily administrate and search for logs.
                        const log_id = (Math.random() + 1).toString(36).substring(7).toUpperCase();
                        const file = `C:/Users/Timsl/Documents/FarCryDiscordBot/src/data/pblogs/FCMM${message.author.tag}_${log_id}_log.txt`

                        //First I want to create a file everytime a new modmail gets created.
                        fs.appendFile(`${file}`, `ModMailID: ${log_id}, user: ${message.author.tag} ~ Modmail logger made by: @Timtendo12#2909`, err => {
                            if (err) {
                                console.error(err)
                                return
                            }
                            channel.send(`DEV NOTE: Woohoo! I created a logfile with the id: ${log_id}`);

                            //Now the file is created I want to write/log every message sent inside the modmail.
                            //format: [time] (message.author.tag) ${MESSAGE}

                            const mmLogger = channel.createMessageCollector({maxProcessed: 15000});



                            mmLogger.on('collect', message => {
                                if (message.attachments.size > 0){
                                    message.attachments.forEach(attachment => {
                                        const ImageLink = attachment.proxyURL;
                                        fs.appendFile(`${file}`, `\n[${moment().format('LTS')}][${message.author.tag}]: [${ImageLink}][${message.content}]`, err => {
                                            if (err) {
                                                console.error(err)
                                                channel.send(`Failed to log attachment! ${message.id}, ${ImageLink}, ${message.content} by: ${message.author.id}`);
                                                return;
                                            }
                                        });
                                    });
                                }else{
                                if (message.author.bot) return;
                                console.log(`${message.content}`)
                                fs.appendFile(`${file}`, `\n[${moment().format('LTS')}][${message.author.tag}]: [${message.content}]`, err => {
                                    if (err) {
                                        console.error(err)
                                        channel.send(`Failed to log message! ${message.id}, ${message.content} by: ${message.author.id}`);
                                        return;
                                        }
                                    });
                                }
                            });
                        });



                        try {


                            await reactionMessage.react("🔒"); //lock emoji emoji
                            await reactionMessage.react("⛔"); //close modmail emoji
                            await reactionMessage.pin()
                        } catch (err) {
                            channel.send("FCDError: Error sending emojis:");
                            throw err;
                        }

                        const collector = reactionMessage.createReactionCollector(
                            (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).roles.has(config.ModRole),
                            {dispose: true, filter: true}
                        );

                        collector.on("collect", (reaction, user) => {
                            reaction.message.guild.members.fetch(user.id).then(async member => {
                                switch (reaction.emoji.name) {
                                    case "🔒":
                                        if (user.id === botID) return;
                                        if (member.roles.cache.has("795987809914585118")) {
                                            console.log(`-----------------------------------------------------------------------`);
                                            console.log(`Uwu. Papi ${message.author.tag} opened a modmail and I cant lock it.`);
                                            console.log(`please dont be angryw papi..`);
                                            console.log(`-----------------------------------------------------------------------`);
                                            channel.send({embeds: [noPermissionsMessage]})
                                        }else {
                                            channel.send({embeds: [lockMessage]})
                                            channel.permissionOverwrites.edit(message.author, {SEND_MESSAGES: false});
                                        }
                                        break;
                                    case "⛔":
                                        //what to do when the close emoji is pressed?
                                        //pastebin information
                                        //     0 = Public, anonymous
                                        //     1 = Unlisted, anonymous
                                        //     2 = Private, user
                                        //     3 = Public, user

                                        let pastebin = new PasteClient({
                                            'api_dev_key': `${config.PASTEBIN_DEV}`,
                                            'api_user_name': `${config.PASTEBIN_USER}`,
                                            'api_user_password': `${config.PASTEBIN_PASSWORD}`
                                        });

                                        if (user.id === botID) return;
                                        if (member.roles.cache.has("795987809914585118")) {
                                            reactionMessage.reactions.removeAll()
                                                .catch(error => console.error('FCDError: Failed to clear reactions:', error));
                                            logChannel.send({embeds: [closedLogEmbed]})
                                            channel.send({embeds: [closeMessage]});
                                            setTimeout(() => channel.delete(), 5000);
                                            modmailLimit.delete(message.author.id);
                                            //--------------------------------
                                            //creates a pastebin from the file
                                            //--------------------------------
                                            pastebin.createPasteFromFile({
                                                    filename: `${file}`,
                                                    title: `ModMail Transcript: ${log_id} - ${message.author.tag} [${moment().format('L')}]`,
                                                    format: 'text',
                                                    privacy: 1,
                                                    expiration: 'N'
                                                })    .then(function (data) {
                                                //-----------------------------------------------
                                                //Embed message which gets sent in the logChannel.
                                                //-----------------------------------------------
                                                const pbAPILogEmbed = new MessageEmbed()
                                                    .setTitle(`${log_id} - ${message.author.tag} [${moment().format('L')}]`)
                                                    .setURL(`${data}`)
                                                    .setColor('RED')
                                                    .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://github.com/Timtendo12/FarCryDiscordBot')
                                                    .setTimestamp()
                                                    .setDescription(`
                                                **User: \`${message.author.tag}\`**
                                                **Reason: \`${reason}\`**`);
                                                mmLogChannel.send({embeds: [pbAPILogEmbed]})
                                                console.log(data);
                                            })
                                                .fail(function (err) {
                                                    console.log(err);
                                                });

                                        } else {
                                            channel.send({embeds: [onlyModEmbed]})
                                        }
                                        break;
                                }

                            })
                        });
                        const createdModMail = new MessageEmbed()
                            .setTitle(`Modmail created!`)
                            .setColor('GREEN')
                            .setTimestamp()
                            .setDescription(`We will be right with you! Lookout for the ping. Or click -> ${channel}`);
                        message.channel.send({embeds: [createdModMail]}).then((msg) => {
                            logChannel.send({embeds: [createdLogEmbed]})
                            modmailLimit.add(message.author.id);
                        }).catch((err) => {
                            throw err;
                        })
                    }

                } else {
                    const offMessage = new MessageEmbed()
                        .setTitle(`Modmail is turned off!`)
                        .setColor('RED')
                        .setTimestamp()
                        .setDescription(`The modmail function is currently disabled.
                    **ppsst admins, Check the data file if this is not supposed to be disabled. ;)**`);
                    message.channel.send({embeds: [offMessage]});
                    console.log(`-----------------------------------------------------------------------`);
                    console.log(`!!MODMAIL IS TURNED OFF AND ${message.author.tag} TRIED TO OPEN ONE!!!!`);
                    console.log(`-----------------------------------------------------------------------`);
                }
            } else {
                const dmMessage = new MessageEmbed()
                    .setTitle(`To create a modmail.`)
                    .setColor('RED')
                    .setTimestamp()
                    .setDescription(`send "fc!modmail (reason)" to <@${config.botID}>`)
                    .setAuthor(`${config.botName}`, `${config.botIcon}`, 'https://github.com/Timtendo12/FarCryDiscordBot')
                message.reply({embeds: [dmMessage]});
            }
        }
    });
