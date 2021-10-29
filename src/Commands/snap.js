const Command = require("../Structures/command.js");
const Discord = require("discord.js");
const config = require("../data/config.json");

module.exports = new Command({
    name: "snap",
    description: "snaps person",

    async run(message, args, client) {
        if (message.member.roles.cache.some(role => role.name === 'Discord Moderator') || (message.member.roles.cache.some(role => role.name === 'Admin'))){
            const snapped = message.mentions.members.first();
            if (!snapped){
                message.channel.send("No user defined.")
            } else {
            const embed = new Discord.MessageEmbed()
                .setTitle(`snapped`)
                .setAuthor(`${config.botName} bot.`, `${config.botIcon}`, 'https://discord.gg/farcry')
                .setColor('#D4AC0D')
                .setImage('https://c.tenor.com/TG5OF7UkLasAAAAC/thanos-infinity.gif');
            message.channel.send({embeds: [embed]});
        }}


    }});
