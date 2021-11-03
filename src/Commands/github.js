const Command = require("../Structures/command.js");
const config = require("../data/config.json")
const {MessageEmbed} = require("discord.js");

module.exports = new Command({
    name: "github",
    description: "Shows github link",

    async run(message, args, client) {
        const embed = new MessageEmbed()
            .setTitle("Github! Im now open source!")
            .setURL("https://github.com/Timtendo12/FarCryDiscordBot")
            .setDescription("Feel free to contribute to the bot. \nIssues and requests also can be sent on github!")
            .setColor("YELLOW")
            .setAuthor(`${config.botName}`, `${config.botIcon}`, 'https://github.com/Timtendo12/FarCryDiscordBot')
            message.reply({embeds: [embed]});

    }

});