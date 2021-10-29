const Command = require("../Structures/command.js");
const config = require("../data/config.json")

//roles
const adminRole = config.AdminRole
const modRole = config.ModRole

module.exports = new Command({
    name: "mod",
    description: "The nr. 1 prank of the server",

    async run(message, args, client) {
        if (message.member.roles.cache.some(role => role.name === 'Discord Moderator') || message.member.roles.cache.some(role => role.name === 'Admin') ){
        message.channel.send("You just got mod. Mute someone.");
    }else{
            return;
        }
    }


});