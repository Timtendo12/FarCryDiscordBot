const Command = require("../Structures/command.js");
const config = require("../data/config.json")

module.exports = new Command({
    name: "chorizo",
    description: "Sends a cute gif of our buddy Chorizo",

    async run(message, args, client) {
        console.log("Checking coomand");
        if (config.AllowChorizo === "true"){
            console.log("Allow Chorizo is true");
        if (message.client.channel_id === config.botChannel) {
            console.log(`The channel id is indeed { ${config.botChannel} }`);
            message.reply("https://media.giphy.com/media/jyUgP3LX3rRONTpXLo/giphy-downsized-large.gif?cid=ecf05e47lr2qm63510mdbvgyktuzlhxv5iwhd1usmr0sbzrh&rid=giphy-downsized-large.gif&ct=g");
            console.log("Sended the message");
        }else{
            console.log(`Command is not used in { ${config.botChannel} } but is used in { ${ message.channelId } instead.`);
            message.reply(`Please use this is in <#${config.botChannel}>`);
        }

    }else {
            console.log(`Command is false. Checking.. ${config.AllowChorizo}  <- Should be false`);
            return;
        }

    }

});