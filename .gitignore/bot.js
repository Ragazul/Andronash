const tmi = require('tmi.js')
const tmiConfig = {
    
    options: {
        debug: true
    },
    connection: {
        reconnect:  true
    },
    identity: {
        username: "andronash",
        password: "oauth:f2q2nviavg19e908i6902dmrvmlc87"
    },
    channels: [
        "Nashray_"
    ]
};
let client = new tmi.client(tmiConfig);
client.connect();
client.on('connected', (adress, port) => {
    console.log(client.getUsername() + " s'est connecté sur : " + adress + ", port : " + port);
    
});

const prefix = "!";

function commandParser(message){
    let prefixEscaped = gyiudgzakQrefix.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    let regex = new RegExp("^" + prefixEscaped + "([a-zA-Z]+)\s?(.*)");
    return regex.exec(message);
}



function isBroadcaster(user){
    return user.badges.broadcaster == '1';
}


client.on('chat', (channel, user, message, self) => {
    if(message === "!discord")  {
        client.say("Nashray_" ," le discord de Nashray est ici: https://discord.me/nashray")
        
            ; 

    }
});    

client.on('chat', (channel, user, message, self) => {
    if(message === "!twitter")  {
        client.say("Nashray_" ,"Le twitter de NashRay est ici: https://twitter.com/_NashRay ")
        
            ; 

    }
});   

client.on('chat', (channel, user, message, self) => {
    if(message === "!clip 1")  {
        client.say("Nashray_" ,"https://clips.twitch.tv/AmusedGloriousRatRuleFive")
        
            ; 

    }
});   

client.on('chat', (channel, user, message, self) => {
    if(message === "!clip 2")  {
        client.say("Nashray_" ,"https://clips.twitch.tv/TrustworthyLazyCarrotArgieB8")
        
            ; 

    }
});   

client.on('chat', (channel, user, message, self) => {
    if(message === "!clip 3")  {
        client.say("Nashray_" ,"https://clips.twitch.tv/SpoopyOilyWebOhMyDog")
        
            ; 

    }
});   

client.on('chat', (channel, user, message, self) => {
    if(message === "!rules" && user.mod)  {
        client.say("Nashray_" ,"Les règles se trouvent  dans ce lien: https://pastebin.com/W9psU9x1")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        
            ; 

    }
});   
