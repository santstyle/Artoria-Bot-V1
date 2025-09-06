const settings = require('../settings');

async function menuCommand(sock, chatId, message) {
    const menuMessage = `
👑 *${settings.botName || 'Artoria Bot V1'}*  
Version: ${settings.version || '1.0.0'}  
Owner: ${settings.botOwner || 'SantStyle'}  

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📖 *About Bot*  
Artoria Bot adalah bot WhatsApp multifungsi untuk membantu aktivitas grup & personal.  
Nama "Artoria" diambil dari karakter *Artoria Pendragon* dari seri Fate.  

Untuk menghubungi owner bisa gunakan command *.owner*  
atau langsung chat *SantStyle* jika ada di grup yang sama.  

Berikut menu command yang tersedia di *Artoria Bot V1*:  
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💠 🔒 *OWNER*
• .mode
• .autostatus
• .clearsession
• .antidelete
• .cleartmp
• .update
• .autoreact
• .bc
• .setpp <reply image>
• .autotyping <on/off>
• .autoread <on/off>

💠 🗺️ *LANGUAGE*
• .setlang id
• .setlang en

💠 🌐 *GENERAL*
• .help
• .menu
• .ping
• .alive
• .owner
• .joke
• .quote
• .fact
• .news
• .groupinfo
• .staff
• .attp <text>
• .weather <city>
• .tts <text>
• .lyrics <song_title>
• .trt <text> <lang>
• .ss <link>

💠 👮 *ADMIN*
• .antitag <on/off>
• .welcome <on/off>
• .goodbye <on/off>
• .ban @user
• .promote @user
• .demote @user
• .mute <minutes>
• .kick @user
• .warnings @user
• .warn @user
• .tag <message>
• .unmute
• .delete
• .antilink
• .antibadword
• .clear
• .tagall
• .chatbot
• .resetlink

💠 🎨 *IMAGE/STICKER*
• .blur <image>
• .simage <sticker>
• .sticker <image>
• .tgsticker <link>
• .take <setwm>
• .crop <image>
• .removebg
• .remini
• .meme

💠 🎮 *GAME*
• .hangman
• .trivia
• .truth
• .dare

💠 🤖 *AI*
• .gpt <question>
• .gemini <question>
• .imagine <prompt>
• .flux <prompt>

💠 📥 *DOWNLOADER*
• .play <song_name>
• .song <song_name>
• .instagram <link>
• .video <song_name>
• .facebook <link>
• .tiktok <link>
• .ytmp4 <link>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚡ Powered & Modified By SantStyle
`;

    try {
        await sock.sendMessage(chatId, { text: menuMessage }, { quoted: message });
    } catch (error) {
        console.error('Error in menu command:', error);
        await sock.sendMessage(chatId, { text: menuMessage });
    }
}

module.exports = menuCommand;
