const Command = require("../Structures/command.js");

module.exports = new Command({
    name: "leak",
    description: "Sends a reminder of rule 3",

    async run(message, args, client) {
        message.reply(">>> **far Cry Discord Server | Rule 3**\nDo not post any kinds of hacks or cheats for any game here. Do not discuss piracy. Do not share or discuss leaks.\n#rules-and-info");
    }

});