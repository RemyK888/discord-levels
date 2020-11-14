[![NPM](https://nodei.co/npm/discord-levels.png)](https://nodei.co/npm/discord-levels/)

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

# 🔐 Discord-Levels

## 🔩 Installation
```
npm install discord-levels@latest
```
## ⚙ Code documentation
Require the package: `const DiscordLevels = require('discord-levels');`
 - addXp()
```javascript
DiscordLevels.addXp('Some ID', 'Some Xp') // Number without the bracketss
```

 - setXp()
```javascript
DiscordLevels.setXp('Some ID', 'Some Xp') // Number without the brackets
```

 - removeXp()
```javascript
DiscordLevels.removeXp('Some ID', 'Some Xp') // Number without the brackets
```

 - addLevel()
```javascript
DiscordLevels.addLevel('Some ID', 'Some Level') // Number without the brackets
```

 - setLevel
```javascript
DiscordLevels.setLevel('Some ID', 'Some Level') // Number without the brackets
```

 - removeLevel()
```javascript
DiscordLevels.removeLevel('Some ID', 'Some Level') // Number without the brackets
```

 - getProfile()
```javascript
DiscordLevels.getProfile('Some ID').Level // To get the user level
DiscordLevels.getProfile('Some ID').Xp // To get the user xp
```

 - createLeaderboard()
 ```javascript
 DiscordLevels.createLeaderboard().content // 'content' is required
 ```
 
## 💻 Code example (using [Discord.Js](https://www.npmjs.com/package/discord.js))
```javascript
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
```

## 🚀 Others

### Support me on [Patreon](https://www.patreon.com/remyk)

**This package is under MIT license.**

*Note: This package is not affiliated with Discord.*

If you have any problems, you can contact: `RemyK#3876`.
**Discord server:** [Server Link](https://discord.gg/ZCzxymB)


## **Made with ❤ by RemyK**