const Command = require("../Structures/command.js");
const config = require("../data/config.json");

module.exports = new Command({
    name: "frikandel",
    description: "Sends a funny picture of a frikandel because only the dutch people understand",

    async run(message, args, client) {
        if (config.AllowFrikandel === "true"){
        if (message.channelId === config.botChannel){
        message.reply("https://i.imgur.com/jmztfFy.png");
    }else{
            message.reply(`Please use this is in <#${config.botChannel}>`);
        }
        }else{
            return;
        }
    }

});