const Discord = require('discord.js');
const client = new Discord.Client();
const DiscordLevels = require('discord-levels');
const config = {
    prefix: 'The prefix',
    token: 'Your Discord bot token'
};

client.on('message', message => {
    if (message.content.startsWith(config.prefix + 'addXp')) {
        let User = message.mentions.members.first() || message.author;
        let Xp = message.content.split(' ').slice(2).join(' ');
        if (!Xp) {
            //Error: no Xp
        } else {
            DiscordLevels.addXp(User.id, Xp)
        };
    };
    if (message.content.startsWith(config.prefix + 'setXp')) {
        let User = message.mentions.members.first() || message.author;
        let Xp = message.content.split(' ').slice(2).join(' ');
        if (!Xp) {
            //Error: no Xp
        } else {
            DiscordLevels.setXp(User.id, Xp)
        };
    };
    if (message.content.startsWith(config.prefix + 'delXp')) {
        let User = message.mentions.members.first() || message.author;
        let Xp = message.content.split(' ').slice(2).join(' ');
        if (!Xp) {
            //Error: no Xp
        } else {
            DiscordLevels.removeXp(User.id, Xp)
        };
    };
    if (message.content.startsWith(config.prefix + 'addLevel')) {
        let User = message.mentions.members.first() || message.author;
        let Level = message.content.split(' ').slice(2).join(' ');
        if (!Level) {
            //Error: no Level
        } else {
            DiscordLevels.addLevel(User.id, Level)
        };
    };
    if (message.content.startsWith(config.prefix + 'setLevel')) {
        let User = message.mentions.members.first() || message.author;
        let Level = message.content.split(' ').slice(2).join(' ');
        if (!Level) {
            //Error: no Level
        } else {
            DiscordLevels.setLevel(User.id, Level)
        };
    };
    if (message.content.startsWith(config.prefix + 'delLevel')) {
        let User = message.mentions.members.first() || message.author;
        let Level = message.content.split(' ').slice(2).join(' ');
        if (!Level) {
            //Error: no Level
        } else {
            DiscordLevels.removeLevel(User.id, Level)
        };
    };
    if (message.content.startsWith(config.prefix + 'profile')) {
        let User = message.mentions.members.first() || message.author;
        let Profile = DiscordLevels.getProfile(User.id);
        message.channel.send(`Level: ${Profile.Level} | Xp: ${Profile.Xp}`)
    };
    if (message.content.startsWith(config.prefix + 'leaderboard')) {
        message.channel.send(`\`\`\`${DiscordLevels.createLeaderboard(client).content}\`\`\``);
    };
})

client.login(config.token);