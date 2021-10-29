const Command = require("../Structures/command.js");

module.exports = new Command({
    name: "clear",
    description: "clears an amount of messages",

    async run(message, args, client) {
        if (message.member.roles.cache.some(role => role.name === 'Discord Moderator') || (message.member.roles.cache.some(role => role.name === 'Admin'))){

        }


    }});
