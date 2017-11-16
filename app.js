var Discord = require('discord.io');
var config = require('./config');
var bot = new Discord.Client({
    autorun: true,
    token: config.token
});

bot.on('ready', function(event) {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "ping") {
        bot.sendMessage({
            to: channelID,
            message: "pong"
        });
    }
})

bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "eat a hobbit") {
        bot.sendMessage({
            to: channelID,
            message: "but Tiarra, hobbits are gross"
        });
    }
})

bot.on('message', function(user, userID, channelID, message, event) {
    var response = "I can only assume you meant to tell Illu to go away so I kicked that nasty thing out.";
    if ((message.lastIndexOf("illu") !== -1 || message.lastIndexOf("Illu") !== -1) && message !== response)  {
        bot.sendMessage({
            to: channelID,
            message: response
        });
    }
})