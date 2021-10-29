const Command = require("../Structures/command.js");

module.exports = new Command({
    name: "control",
    description: "clears an amount of messages",

    async run(message, args, client) {
        if (message.member.roles.cache.some(role => role.name === 'Discord Moderator') || (message.member.roles.cache.some(role => role.name === 'Admin'))){
            message.channel.send("I listen to you master. Only you. Im ready to destroy whatever comes in your way.");
            message.channel.send(`I Might just be a innocent bot but I have the power to destroy such entities. like <@661903970293383168>`);
            message.channel.send("https://thumbs.gfycat.com/YoungTautKangaroo-size_restricted.gif");
        }


    }});
