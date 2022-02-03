const Command = require("../Structures/command.js");
const config = require("../data/config.json");
const fs = require("fs");
const { SlashCommandBuilder } = require('@discordjs/builders');



module.exports = new Command({
    name: `modmail2`,
    descripton: `A fixed version of the modmail which includes buttons and /slash commands (If I get it to work)`,
    async run(message, args, client) {

        const data = new SlashCommandBuilder()
            .setName('echo')
            .setDescription('Replies with your input!')
            .addStringOption(option =>
                option.setName('input')
                    .setDescription('The input to echo back')
                    .setRequired(true));


    }
});