const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, channelLink) {
    const helpMessage = `
    CREATED BY KADIKI-TECH
╔═════════════════════╗
  *❄♧KADIKI-XMD-V1♧❄*
  ♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤
__________________________________
  ♧♧♧♧♧♧♧♤♤♤♤♤♤♤♤♤♤♤
║👑 *Developer:* KADIKITECH
║ 🧩 *Prefix:* [ . ]
|| 🗣️*User : ${user}
║ 🖥️ *Host:* linux
║ 🧠 *Commands:* 281
║ ⚙️ *Mode:* Public
║ 🧪 *Version:* 2.4.1
║ ⚡ *Ping:* 287.0386 ms
║ 📊 *Usage:* 112 MB of 2000000 GB
║ 🧬 *RAM:* [▣□□□□□] 1%

           *System Status* 
╚═════════════════════╝
_Thanks for using KADIKI-XMD multi-device bot. Keep vibe with your easy app_
------------------------------------------------------------------------------
╔═══════════════════╗
 💯 *General*: 💯
║ ❄menu ♡
║ ❄ping. 
║ ❄alive
║ ❄tts 
║ ❄owner
║ ❄joke
║ ❄quote
║ ❄fact
║ ❄weather 
║ ❄news
║ ❄attp 
║ ❄lyrics 
║ ❄8ball 
║ ❄groupinfo
║ ❄staff or .admins 
║ ❄vv
║ ❄pair or .rent
╚═══════════════════╝ 

╔═══════════════════╗
🛠️ *Group*: ❄ 
║ ❄ ban
║ ❄ promote 
║ ❄ demote 
║ ❄ mute 
║ ❄ unmute
║ ❄ delete or .del
║ ❄ kick
║ ❄ warnings 
║ ❄ warn 
║ ❄ antilink
║ ❄ antibadword
║ ❄ clear
║ ❄ tag 
║ ❄ tagall
║ ❄ chatbot
║ ❄ resetlink
╚═══════════════════╝

╔═══════════════════╗
🛠️ *Owner*:❄ 
║ ❄ mode
║ ❄ autostatus
║ ❄ clearsession
║ ❄ antidelete
║ ❄ cleartmp
║ ❄ setpp 
╚═══════════════════╝

╔═══════════════════╗
🎨 *Image/Sticker*:❄ 
║ ❄ blur 
║ ❄ simage 
║ ❄ sticker 
║ ❄ tgsticker
║ ❄ meme
║ ❄ take  
║ ❄ emojimix 
╚═══════════════════╝  

╔═══════════════════╗
🎮 *Game*:❄ 
║ ❄ tictactoe 
║ ❄ hangman
║ ❄ guess 
║ ❄ trivia
║ ❄ answer 
║ ❄ truth
║ ❄ dare
╚═══════════════════╝

╔═══════════════════╗
🤖 *AI *:
║ ❄ gpt 
║ ❄ gemini 
╚═══════════════════╝

╔═══════════════════╗
🎯 *Fun*:❄ 
║ ❄ compliment 
║ ❄ insult 
║ ❄ flirt 
║ ❄ character 
║ ❄ wasted 
║ ❄ ship 
║ ❄ simp 
║ ❄ stupid 
╚═══════════════════╝

╔═══════════════════╗
🎯 *Textmaker*:
║ ❄ metallic 
║ ❄ ice 
║ ❄ snow 
║ ❄ impressive 
║ ❄ matrix 
║ ❄ light 
║ ❄ neon 
║ ❄ devil 
║ ❄ purple 
║ ❄ thunder 
║ ❄ leaves
║ ❄ 1917 
║ ❄ arena 
║ ❄ hacker 
║ ❄ sand 
║ ❄ blackpink 
║ ❄ glitch 
║ ❄ fire 
╚═══════════════════╝

╔═══════════════════╗
🎯 *Downloader*:
║ ❄ play 
║ ❄ song 
║ ❄ instagram 
║ ❄ facebook 
║ ❄ tiktok 
║ ❄ mediafire
║ ❄ gitclone 
║ ❄ apk
║ ❄ twitter
║ ❄ video
║ ❄ tiktok
║ ❄ gdrive
╚═══════════════════╝

╔═══════════════════╗
🔗 *Github*
║ ❄ git
║ ❄ github
║ ❄ sc
║ ❄ script
║ ❄ repo
║> ♧ DON'T CLONE THE BOT ♧
╚═══════════════════╝
♤♧♤♧♤♧♤♧♤♧♤♧♤♧♤◇♡♧♡
Join our channel for updates: `;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '@newsletter',
                        newsletterName: 'KADIKI-XMD-V1',
                        serverMessageId: -1
                    }
                }
            });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '@newsletter',
                        newsletterName: 'KADIKI-XMD',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
