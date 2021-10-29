const Command = require("../Structures/command.js");
const {MessageEmbed} = require("discord.js");
const config = require("../data/config.json")
module.exports = new Command({
    name: "modmailfix",
    description: "Hopefully fixes the modmail DM issue.",
    async run(message, args, client) {
        if (message.member.roles.cache.some(role => role.name === 'Discord Moderator') || message.member.roles.cache.some(role => role.name === 'Admin') ){
            const user = message.mentions.users.first() || message.guild.members.cache.get(args[0])?.user

            //if (args[2] === user){
                if (user.roles.has(890218400155058196)){
                    const logChannel = server.channels.cache.get(config.logChannel);

                    const fixMessage = new MessageEmbed()
                    .setTitle(`DM issue fixed?`)
                    .setColor('ORANGE')
                    .setTimestamp()
                    .setDescription(`Try using the modmail now. Maybe this fixed it.`);
                    const logFixMessage = new MessageEmbed()
                        .setTitle(`Succesfully sended a message to ${user}`)
                        .setColor('GREEN')
                        .setTimestamp()
                        .setDescription(`user: ${user}
                        id: ${user.id}`);

                console.log(`send ${user} a modmail fix message.`);
                user.send({embeds: [fixMessage]})
                    logChannel.send({embeds: [logFixMessage]})
            //else, do this if user is not verified
            }else {
                    const verifyMessage = new MessageEmbed()
                        .setTitle(`User is not verified.`)
                        .setColor('ORANGE')
                        .setTimestamp()
                        .setDescription(`I wont send the user a message if they are not verified.
                        Missing role: "<@&${config.verifiedRole}>" id: 890218400155058196`);
                        message.reply({embeds: [verifyMessage]})

                }
                //else, do this if user is not defined in the second argument. (fc!modmailfix args[2]   <-- Should be the username.
            }else {
                //const userNotDefinedMessage = new MessageEmbed()
                    //.setTitle(`User is not defined.`)
                   // .setColor('RED')
                   // .setTimestamp()
                  //  .setDescription(`Usage: "fc!modmailfix (user)"`)
                //message.reply({embeds: [userNotDefinedMessage]})
            return;

            }
        //else, do this if user who uses the command is not a moderator.
        //}else{
            //return;
        //}

    }
});