const Command = require("../Structures/command.js");

module.exports = new Command({
    name: "demod",
    description: "The nr. 2 prank of the server",

    async run(message, args, client) {
        if (message.member.roles.cache.some(role => role.name === 'Discord Moderator') || message.member.roles.cache.some(role => role.name === 'Admin') ){
        message.channel.send("You have been removed from the moderation team.");
    }else {
            return;
        }
    }

});