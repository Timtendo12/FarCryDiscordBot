const Command = require("../Structures/command.js");
const Discord = require("discord.js");
const config = require("../data/config.json");

module.exports = new Command({
    name: "ban",
    description: "Ban-hammer someone from the server",

    async run(message, args, client) {

        const user = message.mentions.members.first();
        const reason = message.content.replace(`${prefix} || ${user}`, ' ');


        if(!reason) return message.channel.send("Please give me a reason.");

        if(user){
            const member = message.guild.members.cache.get(user.id);
            const mod = message.author.tag;
            const target = message.guild.members.cache.get(member.id);
            const targetEmbed = args[2]

            const embed = new Discord.MessageEmbed()
                .setTitle(`${targetEmbed} banned!`)
                .setAuthor(`${config.botName} bot.`, `${config.botIcon}`, 'https://discord.js.org')
                .setColor('#D4AC0D')
                .setDescription(`
                reason: ${reason}
                by: ${mod}`)
                .setImage('https://media3.giphy.com/media/aai8aRbqd37xlFJbUl/giphy.gif?cid=790b7611a0e86fcc81185e305efe7a44ea9871c0d934784e&rid=giphy.gif&ct=g');

            if(member) {
                await target.ban({
                    reason: reason,
                }).then(() => {
                    message.channel.send({ embeds: [embed] });
                    //message.channel.send("https://media3.giphy.com/media/aai8aRbqd37xlFJbUl/giphy.gif?cid=790b7611a0e86fcc81185e305efe7a44ea9871c0d934784e&rid=giphy.gif&ct=g");
                })
            } else{
                message.channel.send(`FCDError: Can't find ${target}.`);
            }
        } else {
            //message.channel.send(`FCDError: Can't find ${target}.`)
        }

    }

});