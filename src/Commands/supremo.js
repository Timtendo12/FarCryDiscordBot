const Command = require("../Structures/command.js");
const config = require("../data/config.json");
const SQLite = require("better-sqlite3");
const {MessageEmbed} = require("discord.js");
const sql = new SQLite("C:/Users/Timsl/Documents/FarCryDiscordBot/src/data/supremo.db");


module.exports = new Command({
    name: "supremo",
    description: "Show the amount of supremo points a user has in a canvas image.",

    async run(message, args, client) {

        /*
     -----------------------------------
              MYSQL DATABASE
     ------------------------------------
*/


        // Check if the table "points" exists.
        const table = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'scores';").get();
        if (!table['count(*)']) {
            // If the table isn't there, create it and setup the database correctly.
            sql.prepare("CREATE TABLE scores (id TEXT PRIMARY KEY, user TEXT, guild TEXT, points INTEGER);").run();
            // Ensure that the "id" row is always unique and indexed.
            sql.prepare("CREATE UNIQUE INDEX idx_scores_id ON scores (id);").run();
            sql.pragma("synchronous = 1");
            sql.pragma("journal_mode = wal");
        }

        // And then we have two prepared statements to get and set the score data.
        client.getScore = sql.prepare("SELECT * FROM scores WHERE user = ? AND guild = ?");
        client.setScore = sql.prepare("INSERT OR REPLACE INTO scores (id, user, guild, points) VALUES (@id, @user, @guild, @points);");

        //const luser = message.mentions.members.first();
        //const choice = message.content.replace(`${args[2]}`, ' ');
        let score = client.getScore.get(message.author.id, message.guild.id);
        if (!score) {
            score = {
                id: `${message.guild.id}-${message.author.id}`,
                user: message.author.id,
                guild: message.guild.id,
                points: 0
            }
        }

        /*
                   ------------------
                         embeds
                    ------------------
         */
        //errors
        const noArgs = new MessageEmbed()
            .setTitle("Wrong usage.")
            .setDescription("usage: fc!supremo show/leaderboard")
            .setColor("RED")
            .setAuthor(`${config.botName}`, `${config.botIcon}`, 'https://www.discord.gg/farcry')
        const noPermissions = new MessageEmbed()
            .setTitle("No Permissions")
            .setDescription(`I caught ya rakker! Only ${config.botOwner} can do this!`)
            .setColor("DARK_RED")
            .setAuthor(`${config.botName}`, `${config.botIcon}`, 'https://www.discord.gg/farcry')
        //information
        const showPoints = new MessageEmbed()
            .setTitle(`Amount of points for ${message.author.tag}`)
            .setDescription(`Total Supremo Points: ${score.points}!`)
            .setColor("ORANGE")
            .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://www.discord.gg/farcry')


        let arg2 = args[1]
        let show = "show"
        let leaderboard = "leaderboard"
        let give = "give"
        
        
        if (!arg2) {
            if (!score) {
                score = {
                    id: `${message.guild.id}-${message.author.id}`,
                    user: message.author.id,
                    guild: message.guild.id,
                    points: 0
                }
            }
            message.reply({embeds: [noArgs]})
            console.log(`No arg2`);
        }
        console.log(`Checking arg2`);
        console.log(`args: arg 0 - ${args[0]} | arg 1 - ${args[1]} | arg 2 - ${args[2]} | arg 3 - ${args[3]}`);
        if (args[1] === show) {
            console.log(`arg2 should be show.`);
            console.log(`arg2 = ${arg2}`);
                if (!score) {
                    score = {
                        id: `${message.guild.id}-${message.author.id}`,
                        user: message.author.id,
                        guild: message.guild.id,
                        points: 0
                    }
                }
                //show points
            return message.channel.send({embeds: [showPoints]});
            } else if (args[1] === leaderboard) {
            message.channel.send(`Coming soon!`);
                if (!score) {
                    score = {
                        id: `${message.guild.id}-${message.author.id}`,
                        user: message.author.id,
                        guild: message.guild.id,
                        points: 0
                    }
                }
            console.log(`const top10`);
                //show leaderboard
                //const top10 = sql.prepare("SELECT "* FROM scores WHERE guild = ? ORDER BY points DESC LIMIT 10;).all(message.guild.id);

                // Now shake it and show it! (as a nice embed, too!)
            console.log(`const embed`);
            //     const leaderboard = new MessageEmbed()
            //         .setTitle("Leader board")
            //         .setAuthor(client.user.username, client.user.avatarURL())
            //         .setDescription("Our top 10 points leaders!")
            //         .setColor(0x00AE86);
            // console.log(`for (const data of top10)`);
            //     for (const data of top10) {
            //         leaderboard.addFields({
            //             name: client.users.cache.get(data.user).tag,
            //             value: `(${data.points} Supremo points)`
            //         });
            //     }
            // console.log(`sending a embed message.`);
            //     message.channel.send({embeds: [leaderboard]});

            } else if (args[1] === give) {
            console.log(`arg2 should be give.`);
            console.log(`arg2 = ${arg2}`);
                //message.channel.send(``);
                if (!score) {
                    score = {
                        id: `${message.guild.id}-${message.author.id}`,
                        user: message.author.id,
                        guild: message.guild.id,
                        points: 0
                    }
                }
                //give points.
                if (message.author.id !== config.admin_Id) return message.reply({embeds: [noPermissions]});

                const user = message.mentions.users.first() || client.users.cache.get(args[0]);
                if (!user) return message.reply("You must mention someone or give their ID!");

                const pointsToAdd = parseInt(args[3], 10);
                const pointsGivenFailed = new MessageEmbed()
                    .setTitle("Supremo points given succesfully!")
                    .setDescription("You didn't tell me how many points to give...")
                    .setColor("RED")
                if (!pointsToAdd) return message.reply({embeds: [pointsGivenFailed]});

                // Get their current points.
                let userScore = client.getScore.get(user.id, message.guild.id);

                // It's possible to give points to a user we haven't seen, so we need to initiate defaults here too!
                // DEV NOTE: Since we already initiated the defaults at the start of the args[2] check this purely acts as a safety switch. To make sure
                //we really check if the user is registered in the database.
                if (!userScore) {
                    userScore = {
                        id: `${message.guild.id}-${user.id}`,
                        user: user.id,
                        guild: message.guild.id,
                        points: 0
                    }
                }
                userScore.points += pointsToAdd;

                // And we save it!
                client.setScore.run(userScore);

                const pointsGivenSuccess = new MessageEmbed()
                    .setTitle("Supremo points given succesfully!")
                    .setDescription(`${user.tag} has received ${pointsToAdd} Supremo points and now stands at ${userScore.points} Supremo points.`)
                    .setColor("GREEN")

                return message.channel.send({embeds: [pointsGivenSuccess]});
            }
        }
});