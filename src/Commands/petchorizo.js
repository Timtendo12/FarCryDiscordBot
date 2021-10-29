const Command = require("../Structures/command.js");
const config = require("../data/config.json")

module.exports = new Command({
    name: "petchorizo",
    description: "Pets Chorizo, Tell him he's a good boy.",

    async run(message, args, client) {
        if (config.AllowPetChorizo === "true") {
            if (message.channelId === config.botChannel) {
                message.reply("You pet Chorizo!");
                message.channel.send("https://media2.giphy.com/media/dJvifnhTWyGg2rrP8z/giphy.gif?cid=790b76110f22a0708950797c79e88a502250a3758ec0e40f&rid=giphy.gif&ct=g");
                message.channel.send("Good boy Chorizo!");
            } else {
                message.reply(`Please use this is in <#${config.botChannel}>`);
            }
        } else {
            return;
        }
    }

});