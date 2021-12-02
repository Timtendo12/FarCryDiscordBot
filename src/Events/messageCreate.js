
const Event = require("../Structures/Event.js");

const client = require("../Structures/client.js");

const config = require("../data/config.json");
const {MessageEmbed} = require("discord.js");

let talkedRecently = new Set();

let FC6AACoolDown = parseInt(config.FC6AACooldown);

module.exports = new Event("messageCreate", (Client, Message,) => {

    //cooldown
    //console.log("Before checking if the author is in cooldown");
    if (talkedRecently.has(Message.author.id)) {
        return;
        //Message.channel.send("Tim's Debug: Ignoring this guy. (this message wont be shown in the final product");
    } else {

        if (Message.content.toLowerCase().includes("release date")) {
            if (Message.author.bot) return;
            if (Message.channelId === config.FC6AAChannel) {
                Message.channel.send("Far Cry 6 will release on: https://yourcountdown.to/far-cry-6")
                talkedRecently.add(Message.author.id);
                setTimeout(() => {
                    talkedRecently.delete(Message.author.id);
                }, 60000);
            } else {
                return;
            }
            return;
        }
        if (Message.content.toLowerCase().includes("fc6 come out")) {
            if (Message.author.bot) return;
            if (Message.channelId === config.FC6AAChannel) {
                Message.channel.send("Far Cry 6 will release on: https://yourcountdown.to/far-cry-6")
                talkedRecently.add(Message.author.id);
                setTimeout(() => {
                    talkedRecently.delete(Message.author.id);
                }, 60000);
            } else {
                return;
            }
            return;
        }
        if (Message.content.toLowerCase().includes("far cry 6 come out")) {
            if (Message.author.bot) return;
            if (Message.channelId === config.FC6AAChannel) {
                Message.channel.send("Far Cry 6 will release on: https://yourcountdown.to/far-cry-6")
                talkedRecently.add(Message.author.id);
                setTimeout(() => {
                    talkedRecently.delete(Message.author.id);
                }, 60000);
            } else {
                return;
            }
            return;
        }
        //Pc specs\\
        if (Message.content.toLowerCase().includes("show specs")) {
            if (Message.author.bot) return;
            if (Message.channelId === config.FC6AAChannel) {
                Message.channel.send("https://news.ubisoft.com/en-us/article/1T1G9meMQsKNoB1p47Cw3q/far-cry-6-pc-specs-revealed\n" +
                    "https://imgur.com/UTiULk5")
                talkedRecently.add(Message.author.id);
                setTimeout(() => {
                    talkedRecently.delete(Message.author.id);
                }, 60000);
            } else {
                return;
            }
            return;
        }
        if (Message.content.toLowerCase().includes("fc6 pc specs")) {
            if (Message.author.bot) return;
            if (Message.channelId === config.FC6AAChannel) {
                Message.channel.send("https://news.ubisoft.com/en-us/article/1T1G9meMQsKNoB1p47Cw3q/far-cry-6-pc-specs-revealed\n" +
                    "https://imgur.com/UTiULk5")
                talkedRecently.add(Message.author.id);
                setTimeout(() => {
                    talkedRecently.delete(Message.author.id);
                }, 60000);
            } else {
                return;
            }
            return;
        }
        if (Message.content.toLowerCase().includes("far cry 6 specifications")) {
            if (Message.author.bot) return;
            if (Message.channelId === config.FC6AAChannel) {
                Message.channel.send("https://news.ubisoft.com/en-us/article/1T1G9meMQsKNoB1p47Cw3q/far-cry-6-pc-specs-revealed\n" +
                    "https://imgur.com/UTiULk5")
                talkedRecently.add(Message.author.id);
                setTimeout(() => {
                    talkedRecently.delete(Message.author.id);
                }, 60000);
            } else {
                return;
            }
            return;
        }
        //Platforms\\
        if (Message.content.toLowerCase().includes("platform")) {
            if (Message.author.bot) return;
            if (Message.channelId === config.FC6AAChannel) {
                Message.channel.send("Far Cry 6 will release on: PC, Playstation 4 & 5, XBOX one & Series X/S, Google Stadia and Amazon luna!")
                talkedRecently.add(Message.author.id);
                setTimeout(() => {
                    talkedRecently.delete(Message.author.id);
                }, 60000);
            } else {
                return;
            }
            return;
        }
        //Buy FC6\\
        if (Message.content.toLowerCase().includes("buy far cry 6")) {
            if (Message.author.bot) return;
            if (Message.channelId === config.FC6AAChannel) {
                Message.channel.send("You can pre order Far Cry 6 from the Ubisoft store, epic games store, Console store or your local gameshop!")
                talkedRecently.add(Message.author.id);
                setTimeout(() => {
                    talkedRecently.delete(Message.author.id);
                }, 60000);
            } else {
                return;
            }
            return;
        }
        if (Message.content.toLowerCase().includes("buy fc6")) {
            if (Message.author.bot) return;
            if (Message.channelId === config.FC6AAChannel) {
                Message.channel.send("You can pre order Far Cry 6 from the Ubisoft store, epic games store, Console store or your local gameshop!")
                talkedRecently.add(Message.author.id);
                setTimeout(() => {
                    talkedRecently.delete(Message.author.id);
                }, 60000);
            } else {
                return;
            }
            return;
        }
        //Pre order FC6\\
        if (Message.content.toLowerCase().includes("preorder far cry 6")) {
            if (Message.author.bot) return;
            if (Message.channelId === config.FC6AAChannel) {
                Message.channel.send("You can pre order Far Cry 6 from the Ubisoft store, epic games store, Console store or your local gameshop!")
                talkedRecently.add(Message.author.id);
                setTimeout(() => {
                    talkedRecently.delete(Message.author.id);
                }, 60000);
            } else {
                return;
            }
            return;

        }
        if (Message.content.toLowerCase().includes("preorder fc6")) {
            if (Message.author.bot) return;
            if (Message.channelId === config.FC6AAChannel) {
                Message.channel.send("You can pre order Far Cry 6 from the Ubisoft store, epic games store, Console store or your local gameshop!")
                talkedRecently.add(Message.author.id);
                setTimeout(() => {
                    talkedRecently.delete(Message.author.id);
                }, 60000);
            } else {
                return;
            }
            return;
        }
        if (Message.content.toLowerCase().includes("pre-order far cry 6")) {
            if (Message.author.bot) return;
            if (Message.channelId === config.FC6AAChannel) {
                Message.channel.send("You can pre order Far Cry 6 from the Ubisoft store, epic games store, Console store or your local gameshop!")
                talkedRecently.add(Message.author.id);
                setTimeout(() => {
                    talkedRecently.delete(Message.author.id);
                }, 60000);
            } else {
                return;
            }
            return;

        }
        if (Message.content.toLowerCase().includes("pre-order fc6")) {
            if (Message.author.bot) return;
            if (Message.channelId === config.FC6AAChannel) {
                Message.channel.send("You can pre order Far Cry 6 from the Ubisoft store, epic games store, Console store or your local gameshop!")
                talkedRecently.add(Message.author.id);
                setTimeout(() => {
                    talkedRecently.delete(Message.author.id);
                }, 60000);
            } else {
                return;
            }
            return;
        }
        //coop\\
        if (Message.content.toLowerCase().includes("play coop?")) {
            if (Message.author.bot) return;
            if (Message.channelId === config.FC6AAChannel) {
                Message.channel.send(">>> Looking for someone to play Far Cry with?\nPost your information and find others in our co-op channels.\n\n <#540456673945321492> / <#568020403792904217> / <#568020458532765696>")
                talkedRecently.add(Message.author.id);
                setTimeout(() => {
                    talkedRecently.delete(Message.author.id);
                }, 60000);
            } else {
                return;
            }
            return;
        }
        if (Message.content.toLowerCase().includes("play co-op?")) {
            if (Message.author.bot) return;
            if (Message.channelId === config.FC6AAChannel) {
                Message.channel.send(">>> Looking for someone to play Far Cry with?\nPost your information and find others in our co-op channels.\n\n <#540456673945321492> / <#568020403792904217> / <#568020458532765696>")
                talkedRecently.add(Message.author.id);
                setTimeout(() => {
                    talkedRecently.delete(Message.author.id);
                }, 60000);
            } else {
                return;
            }
            return;
        }
        if (Message.content.toLowerCase().includes("what dlc are there")) {
            if (Message.author.bot) return;
            if (Message.channelId === config.FC6AAChannel) {
                Message.channel.send("https://cdn.discordapp.com/attachments/584948865820524564/887839945341939722/image0.jpg")
                talkedRecently.add(Message.author.id);
                setTimeout(() => {
                    talkedRecently.delete(Message.author.id);
                }, 60000);
            } else {
                return;
            }
            return;
        }
        if (Message.content.toLowerCase().includes("show me the dlc")) {
            if (Message.author.bot) return;
            if (Message.channelId === config.FC6AAChannel) {
                Message.channel.send("https://cdn.discordapp.com/attachments/584948865820524564/887839945341939722/image0.jpg")
                talkedRecently.add(Message.author.id);
                setTimeout(() => {
                    talkedRecently.delete(Message.author.id);
                }, 60000);
            } else {
                return;
            }
            return;
        }
        if (Message.content.toLowerCase().includes("dlc release date")) {
            if (Message.author.bot) return;
            if (Message.channelId === config.FC6AAChannel) {
                Message.channel.send("https://cdn.discordapp.com/attachments/584948865820524564/887839945341939722/image0.jpg")
                talkedRecently.add(Message.author.id);
                setTimeout(() => {
                    talkedRecently.delete(Message.author.id);
                }, 60000);
            } else {
                return;
            }
            return;
        }
        if (Message.content.toLowerCase().includes("what DLC are there")) {
            if (Message.author.bot) return;
            if (Message.channelId === config.FC6AAChannel) {
                Message.channel.send("https://cdn.discordapp.com/attachments/584948865820524564/887839945341939722/image0.jpg")
                talkedRecently.add(Message.author.id);
                setTimeout(() => {
                    talkedRecently.delete(Message.author.id);
                }, 60000);
            } else {
                return;
            }
            return;
        }
        if (Message.content.toLowerCase().includes("show me the DLC")) {
            if (Message.author.bot) return;
            if (Message.channelId === config.FC6AAChannel) {
                Message.channel.send("https://cdn.discordapp.com/attachments/584948865820524564/887839945341939722/image0.jpg")
                talkedRecently.add(Message.author.id);
                setTimeout(() => {
                    talkedRecently.delete(Message.author.id);
                }, 60000);
            } else {
                return;
            }
            return;
        }
        //the fuck is this shit?
        if (Message.content.includes("Juan... I control you don't I ?")) {
            if (Message.author.id === config.admin_id){
                Message.channel.send("I listen to you master. Only you. Im ready to destroy whatever comes in your way.")
                Message.channel.send("https://thumbs.gfycat.com/YoungTautKangaroo-size_restricted.gif")
                talkedRecently.add(Message.author.id);
                setTimeout(() => {
                    talkedRecently.delete(Message.author.id);
                }, 60000);
            }
        }
        if (Message.content.includes(`<@&885803031868882965>`)) {
            console.log('message contains modMention');
            if (Message.author.bot)  return;
            console.log('author is bot so return');
            if (Message.member.roles.cache.some(role => role.name === 'Discord Moderator') || Message.member.roles.cache.some(role => role.name === 'Admin') ){
                console.log('author is a mod');
                return;
            } else {
                console.log('author is not a mod');
                const modMentionMessage = new MessageEmbed()
                    .setTitle(`Thank you for mentioning us.`)
                    .setColor('ORANGE')
                    .setTimestamp()
                    .setDescription(`We will be with you soon, However we prefer if you created a modmail instead.
                    To create a modmail please dm "fc!modmail (reason)" to <@${config.botID}> (this bot).`);
                Message.channel.send({embeds: [modMentionMessage]});
                console.log('message sent');
            }
        }
        if (Message.content.toLowerCase().includes("DLC release")) {
            if (Message.author.bot) return;
            if (Message.channelId === config.FC6AAChannel) {
                Message.channel.send("https://cdn.discordapp.com/attachments/584948865820524564/887839945341939722/image0.jpg")
                talkedRecently.add(Message.author.id);
                setTimeout(() => {
                    talkedRecently.delete(Message.author.id);
                }, 60000);
            } else {
                return;
            }
            return;
        }
    }
    //  setTimeout(() => {
    //   // Removes the user from the set after a minute
    //    talkedRecently.delete(Message.author.id);
    //  }, 60000); //FC6AACoolDown = parsed from VAR which gets the info from the config.json


// checks if the message starts with the prefix.
    if (!Message.content.startsWith(config.prefix)) return;

    const args = Message.content.substring(config.prefix.length).split(/ +/);

    const command = Client.commands.find(cmd => cmd.name === args[0]);

    if (!command) return Message.reply(`Hmm, ${args[0]} does not seem like a valid command. Contact <@${config.admin_id}> if you think this is a bug.`);

    command.run(Message, args, Client);
});