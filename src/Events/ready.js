const Event = require("../Structures/Event.js");
const client = require("../Structures/client.js");
const config = require("../data/config.json");
const {MessageEmbed} = require("discord.js");
const fs = require('fs');
const SQLite = require("better-sqlite3");
const sql = new SQLite("C:/Users/Timsl/Documents/FarCryDiscordBot/src/data/supremo.db");

module.exports = new Event("ready", (client) => {
    //logs logged in message
    console.log(`[Logged in as ${client.user.tag}]`);
    //set bots status
    client.user.setActivity('Far Cry 6', { type: "PLAYING" });
    //last login log.
    console.log("Bot is online! Ready to take down some enemies!");

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



    function askMathQuestion() {
        /*
    ----------------------------------------
                Math Questions
    ----------------------------------------
     */

    //format: (number1) (operator) (number2) = (answer)
    let number1;
    let number2;
    let operator;
    let answer;

    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12 ,13, 14, 15, 16, 17, 18, 19, 20];
    let operators = ['+', '-', '*'];

    number1 = Math.floor(Math.random() * numbers.length);
    number2 = Math.floor(Math.random() * numbers.length);
    operator = Math.floor(Math.random() * operators.length);

    let mathQuestion = eval(`answer = ${number1} ${operators[operator]} ${number2}`)
    //answer = ${number1} ${operators[operator]} ${number2};

    console.log(`${number1} ${operators[operator]} ${number2}`);
    console.log(`Answer = ${mathQuestion}`);

    const botChannel = client.channels.cache.get(`${config.botChannel}`);

    const randomMath = new MessageEmbed()
        .setColor("ORANGE")
        .setTitle("Random math question!")
        .setDescription(`
        Answer this question ASAP to win some juicy Supremo-Points!
        \`${number1} ${operators[operator]} ${number2}\``);

    const rightAnswer = new MessageEmbed()
        .setColor("GREEN")
        //.setTitle(`${user} has the right answer!`)
        .setDescription("Here is some Supremo-Points!")



        botChannel.send({embeds: [randomMath]});
        const mmLogger = botChannel.createMessageCollector({maxProcessed: 15000});

        mmLogger.on('collect', message => {
            let score = client.getScore.get(message.author.id, message.guild.id);

            if (message.author.bot) return;
            if (message.channelId === config.botChannel) {
                if (message.content.toLowerCase().includes(`${eval(`answer = ${number1}
                ${operators[operator]}
                ${number2}`)}`)) {
                    mmLogger.stop();
                    mmLogger.on('end', message => {
                        botChannel.send("Great Answer! That's right!");
                    });
                    botChannel.send("Great Answer! That's right!");
                    if (!score) {
                        score = {
                            id: `${message.guild.id}-${message.author.id}`,
                            user: message.author.id,
                            guild: message.guild.id,
                            points: 0
                        }
                    }
                    // Increment the score
                    score.points++;

                    // This looks super simple because it's calling upon the prepared statement!
                    client.setScore.run(score);
                }
            } else {
                mmLogger.stop();
                mmLogger.on('end', collected => {
                    botChannel.send("Oh no! That was the wrong answer. Better luck next time!");
                });
                botChannel.send("Oh no! That was the wrong answer. Better luck next time!");
            }
        })
    }
    // 10 minute loop.
    setInterval(askMathQuestion, 600000);

    //askMathQuestion(); //this will execute it immediately the first time at start.



});