
const Command = require("../Structures/command.js");

const Discord = require("discord.js");
const config = require("../data/config.json");

module.exports = new Command({
    name: "info",
    description: "Lets a user see the information of this bot!",
    async run(message, args, client) {
        if (config.AllowInfo === "true") {
            if (message.channelId === config.botChannel) {
                //embed
                const embed = new Discord.MessageEmbed()
                    .setTitle(`| ${config.botName} by: @${config.botOwner} |`)
                    .setAuthor(`${config.botName} bot.`, `${config.botIcon}`, 'https://discord.js.org')
                    .setColor('#D4AC0D')
                    .setDescription(`
                    ***-={-------------}=-***
                    **- fc!info/help**
                    *Shows you this information.*
                    **- fc!chorizo**
                    *Shows you a picture of Chorizo.*
                    **- fc!petchorizo**
                    *Tell the bot he is a good boy!*
                    **- fc!ping**
                    *Shows you the connection between the bot, host*
                    *and discord server.*
                    ***-={-DM-Commands-}=-***
                    **- fc!modmail (reason)**
                    *Contact moderators for support.*
                    ***-={-------------}=-***
                    **bug/suggestion report.**
                    fc!modmail (bug)
                    `)
                    .addFields(
                        { name: 'Inline field title', value: 'Some value here', inline: true },
                    );

                message.channel.send({ embeds: [embed] })

            }else{
                message.channel.send(`Please use this command in <#${config.botChannel}>.`);
            }
        }
    }
});
