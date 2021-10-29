const Command = require("../Structures/command.js");
const Discord = require("discord.js");
const config = require("../data/config.json");
const {MessageEmbed} = require("discord.js");

module.exports = new Command({
    name: "bet",
    description: "funny bet command",

    async run(message, args, client) {

        const noBetMessage = new MessageEmbed()
            .setTitle(`Command usage:`)
            .setColor('RED')
            .setTimestamp()
            .setDescription(`fc!bet ${config.stone}/${config.paper}/${config.scissors}`);


        // playerBet = whatever he bets.
        const playerBet = args.slice(1).join(" ")

        if(!playerBet){
            message.channel.send({embeds: [noBetMessage]});
        }else{


        //possible bets. Defined in config.
        let options = [`${config.stone}`,`${config.paper}`,`${config.scissors}`];

        let betStone = options[0]
        let betPaper = options[1]
        let betScissors = options[2]


        //embeds
        const winMessage = new MessageEmbed()
            .setTitle(`you win you sussy baka`)
            .setColor('GREEN')
            .setTimestamp()
            .setDescription(`Congrats!`);
        const loseMessage = new MessageEmbed()
            .setTitle(`YOU LOST I WON`)
            .setColor('YELLOW')
            .setTimestamp()
            .setDescription(`Better luck next time!`);
        const evenMessage = new MessageEmbed()
            .setTitle(`OH NO! EVEN!`)
            .setColor('YELLOW')
            .setTimestamp()
            .setDescription(`I'll destroy you next time!`);


        //bot bet is randomized
        const botBet = options[Math.floor(Math.random()*options.length)];



        //checks if args[1] (format: prefixArgs[0] [args1]) contains something from the array.
        if (options.some(word => args[1].includes(word))){
            message.channel.send(`${botBet}`)
            console.log(args[1]);
            //checks if player uses stone and bot uses paper

            //-----------------------------------------------------------------
            //    botBet 1 = stone | botBet 2 = paper | botBet 3 = scissors
            //-----------------------------------------------------------------

            //what to do if the player bets scissors
            if (playerBet === betStone) {
                console.log(playerBet)
                //WTD if bot bets scissors
                console.log(botBet);
                if (botBet === betScissors){
                    console.log(botBet)
                    message.channel.send({ embeds: [winMessage]})
                    //WTD if bot bets paper
                } else if (botBet === betPaper){
                    console.log(botBet)
                    message.channel.send({ embeds: [loseMessage]})
                }
            }

           //what to do if the player bets paper
           if (playerBet === betPaper){
               if (botBet === betStone){
                   message.channel.send({ embeds: [winMessage]})
               } else if (botBet === betScissors){
                   message.channel.send({ embeds: [loseMessage]})
               }
           }

           //what to do if the player bets scissors
           if (playerBet === betScissors){
               if (botBet === betStone){
                   message.channel.send({ embeds: [loseMessage]})
               } else if (botBet === betPaper){
                   message.channel.send({ embeds: [winMessage]})
               }
           }

           //Playerbet is equal to botbet
            if (playerBet === botBet){
                message.channel.send({ embeds: [evenMessage]})
            }
        }else{
            message.channel.send(`Usage command fc!bet ${config.stone}/${config.paper}/${config.scissors}`);
            console.log(`${message.author.tag} is dumb and used ${args[1]} instead of ${config.stone}, ${config.paper} or ${config.scissors}`)
            }
        }
    }
});