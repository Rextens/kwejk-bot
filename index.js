const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const prefix = "/"

client.on('message', msg => {
    if(msg.member.roles.cache.has('742853579236311071') && msg.content.startsWith(prefix)) {
        
        
        /*
        if(msg.content === '/CreateChannel') {
            msg.guild.channels.create('testChannel', 'bot-test').then((channel) => {
                channel.setParent('753078953228632164')
            })
            //msg.guild.channels.cache.find(c => c.name == 'bot-test' && c.type == 'category'), channel
        }
        else 
        */
        let rulerRoleId = ''

        const args = msg.content.slice(prefix.length).substr(msg.content.slice(prefix.length).indexOf(' ')+1)
        const command = msg.content.slice(prefix.length).substr(0, msg.content.slice(prefix.length).indexOf(' ')).toLowerCase()

        if(command === 'comfortzone') {
            msg.guild.roles.create({
                data: {
                    name: `Grupa - ${args} (szef)`
                }
            }).then((result) => {
                rulerRoleId = result.id;

                msg.guild.roles.create({
                    data: {
                        name: `Grupa - ${args}`
                    }

                }).then((memberRoleId) => {
                    console.log(rulerRoleId)

                    msg.guild.channels.create(args, {
                        type: 'category'
                    }).then((createdChannel) => {
                        createdChannel.overwritePermissions([{
                            id: '698869347103539260',
                            allow: [],
                            deny: ['VIEW_CHANNEL', 'CONNECT', 'ADD_REACTIONS', 'USE_EXTERNAL_EMOJIS', 'SEND_MESSAGES']
                        }, {
                            id: rulerRoleId.toString(),
                            allow: ['MANAGE_CHANNELS', 'MANAGE_MESSAGES', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'CONNECT', 'SPEAK', 'STREAM', 'MUTE_MEMBERS', 'MOVE_MEMBERS', 'PRIORITY_SPEAKER', 'DEAFEN_MEMBERS'],
                            deny: ['ADD_REACTIONS', 'USE_EXTERNAL_EMOJIS']
                        }, {
                            id: memberRoleId.id,
                            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'CONNECT', 'SPEAK', 'STREAM'],
                            deny: ['ADD_REACTIONS', 'USE_EXTERNAL_EMOJIS']
                        }, {
                            id: '715732097779761173',
                            allow: ['VIEW_CHANNEL', 'CONNECT', 'SPEAK', 'STREAM', 'MANAGE_MESSAGES', 'MENTION_EVERYONE'],
                            deny: []
                        }]).catch()
                    }).catch()
                }).catch()
            }).catch()
        }
    }
});

const token = process.env.token;
client.login(token);