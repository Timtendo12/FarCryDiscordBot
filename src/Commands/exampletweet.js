const Command = require("../Structures/command.js");
const Discord = require("discord.js");
const config = require("../data/config.json");
const {GuildChannel, MessageEmbed} = require("discord.js");

module.exports = new Command({
    name: "exampletweet",
    description: "Sends a funny picture of a frikandel because only the dutch people understand",

    async run(message, args, client) {
        const exampleTweet = new MessageEmbed()
            .setTitle(`@FarCryGame posted a new tweet!`)
            .setURL('https://twitter.com/')
            .setAuthor('@FarCryGame', 'https://pbs.twimg.com/profile_images/1286368132487995392/p-CyXKSj_400x400.jpg', 'https://twitter.com/FarCrygame')
            .setColor('AQUA')
            //.setThumbnail('https://pbs.twimg.com/profile_images/1286368132487995392/p-CyXKSj_400x400.jpg')
            .setTimestamp()
            .setImage('https://image.api.playstation.com/vulcan/img/rnd/202106/1514/zpqokvz7JoKuZ2GzsK4qDQCR.png')
            .setDescription(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum est lorem, laoreet sed diam quis, suscipit dapibus diam. Curabitur quam augue`);
            message.channel.send({embeds: [exampleTweet]});
    }
});