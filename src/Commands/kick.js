const Command = require("../Structures/command.js");

module.exports = new Command({
    name: "kick",
    description: "Kick that user!",

    async run(message, args, client) {

        const user = message.mentions.members.first();
        //const reason = message.content.replace(`${user}`, ' ');
        let reason = args.slice(1).join(' ');


        if(user){
            const member = message.mentions.members.first();
            const target = message.guild.members.cache.get(member.id);

            if(member) {
                await target.kick(reason).then(() => {
                    message.channel.send("Aaand, he's gone. (kicked)")
                })
            } else{
                message.channel.send("FCDError: Can't find the specified user.");
            }
        } else {
            message.channel.send("FCDError: Can't find the specified user")
        }

    }

});