const Command = require("../Structures/command.js");
const config = require("../data/config.json");
const fs = require('fs');
const SQLite = require("better-sqlite3");
const sql = new SQLite("C:/Users/Timsl/Documents/FarCryDiscordBot/src/data/supremo.db");

module.exports = new Command({
    name: "liberate",
    description: "Liberate a outpost!",

    async run(message, args, client) {
        /*
    -----------------------------------
             MYSQL DATABASE
    ------------------------------------
*/       // Check if the table "points" exists.
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


        //Let the user think were finding a outpost for you. However we're actually generating one. After a few seconds
        //we when we have all the variables and placeholders the magic can happen.
        message.reply("Finding a outpost for you. Please wait a second.");
        setInterval(outpostLiberate, 600000);

            /*
            -----------------------------------------------
            Generates all the things needed for the outpost
            -----------------------------------------------
             */

        const log_id = (Math.random() + 1).toString(36).substring(7).toUpperCase();
        const file = `C:/Users/Timsl/Documents/FarCryDiscordBot/src/data/outpostLogs/OP${message.author.tag}_${log_id}_log.txt`

        //First I want to create a file everytime a new modmail gets created.
        fs.appendFile(`${file}`, `user: ${message.author.tag} ~ Far Cry outpost liberator made by Timtendo12#2909 VER: ${config.OutpostLiberatorVer}`, err => {
            if (err) {
                console.error(err)
                return
            }
        });

            //name generator
            let name1 = ["Pig", "Cow", "Sheep", "Horse", "Butcher", "TV Station", "Supremo", "Santa", "Yara", "Tax-Evasion Proffesionals"];
            let name2 = ["Fucker", "Station", "HQ", "Hooker", "House", "Tower", "Boat", "Hospital", "Rocket", "Zoo"];

            let wordName1 = Math.floor(Math.random() * name1.length);
            let wordName2 = Math.floor(Math.random() * name2.length);

            let outpostName = `${name1[wordName1]} ${name2[wordName2]}`
            console.log(`Outpost name = ${outpostName}`);

            //---------------------------------------------------------------------------------

            //Factions generator.

            //Factions are different buildings in the outpost were different events happens.

            const amountOfFactions = [2, 3, 4, 5, 6, 7, 8];

            //picks a random number
            let pickAmountOfFactions = Math.floor(Math.random() * factionsAmount.length);
            let factionsAmount = amountOfFactions[pickAmountOfFactions]; //-> Is the amount of factions the outpost has.

            for (let i = 0; i < factionsAmount; i++) {

            }


            function outpostLiberate() {
                console.log("weeee");
                console.log(`${outpostName}`)

            }
    }
});