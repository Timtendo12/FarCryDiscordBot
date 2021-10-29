const Command = require("../Structures/command.js");
const config = require("../data/config.json")

module.exports = new Command({
    name: "ping",
    description: "shows the ping of the bot",

    async run(message, args, client) {
        if (config.AllowPing === "true"){
            if (message.channelId === config.botChannel) {
                const msg = await message.reply(`Bot ping: ${message.client.ws.ping} ms.`);

                msg.edit(
                    `Ping: ${message.client.ws.ping} ms.\nMessage Ping: ${
                        msg.createdTimestamp - message.createdTimestamp
                    } ms.`
                );


            }else {
                message.reply(`Please use this is in <#${config.botChannel}>`);
            }
        }else{
            return;
        }
    }


});