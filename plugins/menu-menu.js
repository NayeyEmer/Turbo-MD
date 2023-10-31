//CÓDIGO ADAPTADO POR https://github.com/GataNina-Li | @gata_dios & https://github.com/Undefined17 | @Azami 
  
 import fs from 'fs' 
 import fetch from 'node-fetch' 
 import { xpRange } from '../lib/levelling.js' 
 const { levelling } = '../lib/levelling.js' 
 import PhoneNumber from 'awesome-phonenumber' 
 import { promises } from 'fs' 
 import { join } from 'path' 
 const { generateWAMessageFromContent, proto } = (await import('@whiskeysockets/baileys')).default 
  
 let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => { 
 try { 
 let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {} 
 const d = new Date(new Date + 3600000); 
     const locale = 'es'; 
     const week = d.toLocaleDateString(locale, {weekday: 'long'}); 
     const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'}); 
 let name = conn.getName(m.sender) 
 let taguser = '@' + m.sender.split("@s.whatsapp.net")[0] 
 let { exp, diamond, level, role, money } = global.db.data.users[m.sender] 
 let totalreg = Object.keys(global.db.data.users).length 
     let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
 let _uptime = process.uptime() * 1000 
 let uptime = clockString(_uptime) 
  
 let pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png') 
 let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}} 
 let links = linkSity.getRandom() 
     const ftrol = { 
     key : { 
     remoteJid: 'status@broadcast', 
     participant : '0@s.whatsapp.net' 
     }, 
     message: { 
     orderMessage: { 
     itemCount : 2023, 
     status: 1, 
     surface : 1, 
     message: `${name}!`,  
     orderTitle: `▮Menu ▸`, 
     sellerJid: '0@s.whatsapp.net'  
     } 
     } 
     } 
  
 let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation' 
 let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' 
 let d3  = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
 let d4 = 'application/pdf' 
 let d5 = 'application/vnd.android.package-archive' 
 let d6 = 'application/zip' 
 let td = `${pickRandom([d1,d2,d3,d4,d5,d6])}` 
  
     const fload = { 
     key : { 
     remoteJid: 'status@broadcast', 
     participant : '0@s.whatsapp.net'  
     }, 
     message: { 
     orderMessage: { 
     itemCount : 2023, 
     status: 1, 
     surface : 1, 
     message: `${name}` + `\n🚀 Cargando ^ω^`,  
     orderTitle: `▮Menu ▸`, 
     sellerJid: '0@s.whatsapp.net'  
     } 
     } 
     } 
     await conn.reply(m.chat, '*Enviando el menu . . .*', fload, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '👋 Hola!!', body: saludo, sourceUrl: global.ig, thumbnail: await (await fetch(pp)).buffer() }}}) 
 m.react('🚀')      
 let menu = `┏━━━━━━━━━━━━━━━🕸
┃👋 𝙃𝙤𝙡𝙖, 𝙎𝙤𝙮 𝙏𝙪𝙧𝙗𝙤𝘽𝙤𝙩-𝙈𝘿.
┏━━━━━━━━━━━━━━━━🕸
┃ ✪ ⃟ 📋 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒 
┗━━━━━━━━━━━━━━━🕸
┃╭──────────────
┃├🎃 𝙽𝙾𝙼𝙱𝚁𝙴 : ${name}
┃├🦇 𝙻𝙸𝙼𝙸𝚃𝙴 : ${diamond}
┃├🕷 𝙽𝙸𝚅𝙴𝙻 : ${level}
〬┃├🕸 𝚁𝙰𝙽𝙶𝙾 : ${role}
┃├🎃 𝙴𝚇𝙿 : ${exp}
┃╰──────────────
┗━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━
┃  ✪ ⃟📑 𝐈𝐍𝐅𝐎𝐁𝐎𝐓
┗━━━━━━━━━━━━━━━🕸
┃╭──────────────
┃├🎃 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 : @crlx.emxn
┃├🦇 𝙽𝚄𝙼𝙴𝚁𝙾: wa.me/51907183648
┃├🕷 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: 00:12:11
┃├🕸 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾𝚂 : ${rtotalreg𝐝𝐞 ${totalreg}𝐮𝐬𝐮𝐚𝐫𝐢𝐨𝐬:
┃╰────────────── 
┗━━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━🕸
┃ ✪ ⃟📅 𝐇𝐎𝐘
┗━━━━━━━━━━━━━━━
┃┋🎃 𝙵𝙴𝙲𝙷𝙰 : 24 de octubre de 2023
〬┗━━━━ ≪ •❈• ≫ ━━━━━┛

┏━━━━━━━━━━━━━━━━
┃  ✪ ⃟🧾 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍
┗━━━━━━━━━━━━━━━🕸
〬┃┋ႌ〬🎃 .𝚎𝚜𝚝𝚊𝚍𝚘
┃┋ႌ〬🦇 .𝚘𝚠𝚗𝚎𝚛
〬┃┋ႌ〬🕷 .𝚐𝚛𝚘𝚞𝚙𝚕𝚒𝚜𝚝
┃┋ႌ〬🕸 .𝚍𝚘𝚗𝚊𝚛
┃┋ႌ〬🎃 .𝚐𝚛𝚞𝚙𝚘𝚜
┃┋ႌ〬🦇 .𝚒𝚗𝚏𝚘𝚋𝚘𝚝
〬┃┋ႌ〬🕷 .𝚌𝚞𝚎𝚗𝚝𝚊𝚜
〬┃┋ႌ〬🕸 .𝚛𝚎𝚙𝚘𝚛𝚝𝚎
┃┋ႌ〬🎃 .𝚓𝚘𝚒𝚗
┃┋ႌ〬🦇 .𝚋𝚘𝚝
┗━━━━ ≪ •❈• ≫ ━━━━┛

┏━━━━━━━━━━━━━━━━🕸
┃ ✪ ⃟🖥 𝐉𝐀𝐃𝐈𝐁𝐎𝐓
┗━━━━━━━━━━━━━━━
┃┋ႌ〬🎃 .𝚓𝚊𝚍𝚒𝚋𝚘𝚝 --𝚌𝚘𝚍𝚎
┃┋ႌ〬🦇 .𝚋𝚘𝚝𝚜
┃┋ႌ〬🕷 .𝚍𝚎𝚕𝚎𝚝𝚎𝚜𝚎𝚜𝚒𝚘𝚗
┃┋ႌ〬🕸 .𝚜𝚝𝚘𝚙
〬┗━━━━ ≪ •❈• ≫ ━━━━┛

┏━━━━━━━━━━━━━━━━
┃ ✪ ⃟🚀 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒
┗━━━━━━━━━━━━━━━🕸
┃┋ႌ〬🎃 .𝚙𝚕𝚊𝚢
┃┋ႌ🦇 .𝚙𝚕𝚊𝚢𝟸
┃┋ႌ〬🕷 .𝚢𝚝𝚊
┃┋ႌ〬🕸 .𝚢𝚝𝚟
┃┋ႌ〬🎃 .𝚏𝚊𝚌𝚎𝚋𝚘𝚘𝚔
┃┋ႌ〬🦇 .𝚝𝚒𝚔𝚝𝚘𝚔
┃┋ႌ〬🕷 .𝚒𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖
┃┋ႌ〬🕸 .𝚐𝚒𝚝𝚌𝚕𝚘𝚗𝚎
┃┋ႌ〬🎃 .𝚙𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝
┃┋ႌ〬🕷 .𝚒𝚖𝚊𝚐𝚎𝚗
┃┋ႌ〬🦇 .𝚖𝚎𝚍𝚒𝚊𝚏𝚒𝚛𝚎
〬〬┗━━━━  ≪ •❈• ≫ ━━━━┛

┏━━━━━━━━━━━━━━━━🕸
┃  ✪ ⃟🔎 𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒
┗━━━━━━━━━━━━━━━
┃┋ႌ〬🎃 .𝚐𝚘𝚘𝚐𝚕𝚎
┃┋ႌ〬🦇 .𝚢𝚝𝚜
〬┗━━━━ ≪ •❈• ≫ ━━━━┛

┏━━━━━━━━━━━━━━━━
┃ ✪ ⃟🛰 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒
┗━━━━━━━━━━━━━━━🕸
┃┋ႌ〬🎃 .𝚝𝚘𝚒𝚖𝚐
┃┋ႌ〬🦇 .𝚝𝚘𝚖𝚙𝟹
┃┋ႌ〬🕷 .𝚝𝚘𝚙𝚝𝚝
┃┋ႌ〬🕸 .𝚝𝚘𝚞𝚛𝚕
┃┋ႌ〬🎃 .𝚝𝚘𝚟𝚒𝚍𝚎𝚘
┃┋ႌ〬🦇 .𝚝𝚝𝚜
〬┗━━━━ ≪ •❈• ≫ ━━━━┛

┏━━━━━━━━━━━━━━━━🕸
┃ ✪ ⃟🔊 𝐀𝐔𝐃𝐈𝐎𝐒-𝐄𝐅𝐄𝐂𝐓𝐎𝐒
┗━━━━━━━━━━━━━━━
┃┋ႌ〬🎃 .𝚋𝚊𝚜𝚜
┃┋ႌ〬🦇 .𝚋𝚕𝚘𝚠𝚗
┃┋ႌ〬🕷 .𝚍𝚎𝚎𝚙
┃┋ႌ〬🕸 .𝚎𝚊𝚛𝚛𝚊𝚙𝚎
┃┋ႌ〬🎃 .𝚏𝚊𝚜
┃┋ႌ〬🦇 .𝚏𝚊𝚜𝚝
┃┋ႌ〬🕷 .𝚗𝚒𝚐𝚑𝚝𝚌𝚘𝚛𝚎
┃┋ႌ〬🕸 .𝚛𝚎𝚟𝚎𝚛𝚜𝚎
┃┋ႌ〬🎃 .𝚛𝚘𝚋𝚘𝚝
┃┋ႌ〬🦇 .𝚜𝚕𝚘𝚠
┃┋ႌ〬🕷 .𝚜𝚖𝚘𝚘𝚝𝚑
┃┋ႌ〬🕸 .𝚝𝚞𝚙𝚊𝚒
┃┋ႌ〬🎃 .𝚜𝚚𝚞𝚒𝚛𝚛𝚎𝚕
┃┋ႌ〬🦇 .𝚌𝚑𝚒𝚙𝚖𝚞𝚗𝚔
〬┗━━━━ ≪ •❈• ≫ ━━━━┛

┏━━━━━━━━━━━━━━━━
┃ ✪ ⃟🛠 𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒
┗━━━━━━━━━━━━━━━🕸
┃┋ႌ〬🎃 .𝚊𝚌𝚘𝚛𝚝𝚊𝚛
┃┋ႌ〬🦇 .𝚚𝚛
┃┋ႌ〬🕷 .𝚍𝚎𝚕𝚎𝚝𝚎
┃┋ႌ〬🕸 .𝚛𝚎𝚊𝚍𝚖𝚘𝚛𝚎
┃┋ႌ〬🎃 .𝚜𝚝𝚢𝚕𝚎𝚝𝚎𝚡𝚝
〬┗━━━━ ≪ •❈• ≫ ━━━━┛


┏━━━━━━━━━━━━━━━━🕸
┃ ✪ ⃟🎪 𝐉𝐔𝐄𝐆𝐎𝐒
┗━━━━━━━━━━━━━━━ 
┃┋ႌ〬🎃 .𝚖𝚊𝚝𝚎𝚜
┃┋ႌ〬🦇 .𝚖𝚊𝚝𝚑
┃┋ႌ〬🕷 .𝚜𝚒𝚖𝚒
┃┋ႌ〬🕸 .𝚜𝚞𝚎𝚛𝚝𝚎
┃┋ႌ〬🎃 .𝚙𝚙𝚝
┃┋ႌ〬🦇 .𝚝𝚒𝚌𝚝𝚊𝚌𝚝𝚘𝚎
┃┋ႌ〬🕷 .𝚍𝚎𝚕𝚝𝚒𝚌𝚝𝚊𝚌𝚝𝚘𝚎
┃┋ႌ〬🕸 .𝚝𝚘𝚙𝚐𝚊𝚢𝚜
┃┋ႌ〬🎃 .𝚝𝚘𝚙𝚘𝚝𝚊𝚔𝚞𝚜
┃┋ႌ〬🦇 .𝚐𝚊𝚢
┃┋ႌ〬🕷 .𝚍𝚘𝚡𝚎𝚊𝚛
┃┋ႌ〬🕸 .𝚙𝚛𝚎𝚐𝚞𝚗𝚝𝚊
┃┋ႌ〬🎃 .𝚊𝚙𝚘𝚜𝚝𝚊𝚛
┃┋ႌ〬🦇 .𝚜𝚕𝚘𝚝
┃┋ႌ〬🕷 .𝚍𝚊𝚍𝚘
┗━━━━ ≪ •❈• ≫ ━━━━┛

┏━━━━━━━━━━━━━━━━
┃ ✪ ⃟⚙️ 𝐆𝐑𝐔𝐏𝐎𝐒
┗━━━━━━━━━━━━━━━🕸
┃┋ႌ〬🎃 .𝚐𝚛𝚞𝚙𝚘
┃┋ႌ〬🦇 .𝚔𝚒𝚌𝚔
┃┋ႌ〬🕷 .𝚊𝚍𝚍
┃┋ႌ〬🕸 .𝚋𝚊𝚗𝚌𝚑𝚊𝚝
┃┋ႌ〬🎃 .𝚞𝚗𝚋𝚊𝚗𝚌𝚑𝚊𝚝
┃┋ႌ〬🦇 .𝚊𝚍𝚖𝚒𝚗𝚜
┃┋ႌ〬🕷 .𝚒𝚗𝚏𝚘𝚐𝚛𝚘𝚞𝚙
┃┋ႌ〬🕸 .𝚙𝚛𝚘𝚖𝚘𝚝𝚎
┃┋ႌ〬🎃 .𝚍𝚎𝚖𝚘𝚝𝚎
┃┋ႌ〬🦇 .𝚑𝚒𝚍𝚎𝚝𝚊𝚐
┃┋ႌ〬🕷 .𝚝𝚊𝚐𝚊𝚕𝚕
┃┋ႌ〬🕸 .𝚕𝚒𝚗𝚔
┃┋ႌ〬🎃 .𝚋𝚊𝚗𝚌𝚑𝚊𝚝
┃┋ႌ〬🦇 .𝚞𝚗𝚋𝚊𝚗𝚌𝚑𝚊𝚝
〬┗━━━━ ≪ •❈• ≫ ━━━━┛

┏━━━━━━━━━━━━━━━━
┃  ✪ ⃟✅ 𝐄𝐍𝐀𝐁𝐋𝐄/𝐃𝐈𝐒𝐀𝐁𝐋𝐄
┗━━━━━━━━━━━━━━━🕸
┃┋ႌ〬🎃 .𝚎𝚗𝚊𝚋𝚕𝚎 𝚠𝚎𝚕𝚌𝚘𝚖𝚎𝚎
┃┋ႌ〬🦇 .𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚠𝚎𝚕𝚌𝚘𝚖𝚎
┃┋ႌ〬🕷 .𝚎𝚗𝚊𝚋𝚕𝚎 𝚙𝚞𝚋𝚕𝚒𝚌
┃┋ႌ〬🕸 .𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚙𝚞𝚋𝚕𝚒𝚌
┃┋ႌ〬🎃 .𝚎𝚗𝚊𝚋𝚕𝚎 𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔
┃┋ႌ〬🦇 .𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔
┃┋ႌ〬🕷 .𝚎𝚗𝚊𝚋𝚕𝚎 𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔𝟸
┃┋ႌ〬🕸 .𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔𝟸
┃┋ႌ〬🎃 .𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝
┃┋ႌ〬🦇 .𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝
┃┋ႌ〬🕷 .𝚎𝚗𝚊𝚋𝚕𝚎 𝚊𝚞𝚝𝚘𝚛𝚎𝚊𝚍
┃┋ႌ〬🕸 .𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚊𝚞𝚝𝚘𝚛𝚎𝚊𝚍
┃┋ႌ〬🎃 .𝚎𝚗𝚊𝚋𝚕𝚎 𝚍𝚎𝚝𝚎𝚌𝚝
┃┋ႌ〬🦇 .𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚍𝚎𝚝𝚎𝚌𝚝
┃┋ႌ〬🕷 .𝚎𝚗𝚊𝚋𝚕𝚎 𝚙𝚌𝚘𝚗𝚕𝚢
┃┋ႌ〬🕸 .𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚙𝚌𝚘𝚗𝚕𝚢
┃┋ႌ〬🎃 .𝚎𝚗𝚊𝚋𝚕𝚎 𝚐𝚌𝚘𝚗𝚕𝚢
┃┋ႌ〬🦇 .𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚐𝚌𝚘𝚗𝚕𝚢
┗━━━━ ≪ •❈• ≫ ━━━━┛

┏━━━━━━━━━━━━━━━━🕸
┃ ✪ ⃟🎭 𝐑𝐏𝐆
┗━━━━━━━━━━━━━━━
┃┋ႌ〬🎃 .𝚖𝚒𝚗𝚊𝚛
┃┋ႌ〬🦇 .𝚖𝚒𝚗𝚊𝚛𝟹
┃┋ႌ〬🕷 .𝚖𝚒𝚗𝚊𝚛𝚍𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜
┃┋ႌ〬🕸 .𝚍𝚊𝚒𝚕𝚢
┃┋ႌ〬🎃 .𝚠𝚘𝚛𝚔
┃┋ႌ〬🦇 .𝚊𝚏𝚔
┃┋ႌ〬🕷 .𝚛𝚘𝚋𝚊𝚛
┃┋ႌ〬🕸 .𝚕𝚒𝚖𝚒𝚝
┃┋ႌ〬🎃 .𝚛𝚎𝚐
┃┋ႌ〬🦇 .𝚞𝚗𝚛𝚎𝚐
┃┋ႌ〬🕷 .𝚖𝚢𝚗𝚜
┃┋ႌ〬🕸 .𝚙𝚎𝚛𝚏𝚒𝚕
┃┋ႌ〬🎃 .𝚕𝚎𝚟𝚎𝚕𝚞𝚙
┗━━━━ ≪ •❈• ≫ ━━━━┛

┏━━━━━━━━━━━━━━━━
┃ ✪ ⃟🛸 𝐒𝐓𝐈𝐂𝐊𝐄𝐑
┗━━━━━━━━━━━━━━━🕸
┃┋ႌ〬🎃 .𝚜
┃┋ႌ〬🦇 .𝚠𝚖
〬┗━━━━ ≪ •❈• ≫ ━━━━┛

┏━━━━━━━━━━━━━━━━
┃ ✪ ⃟💎 𝐎𝐖𝐍𝐄𝐑
┗━━━━━━━━━━━━━━━🕸
┃┋ႌ〬🎃 .𝚞𝚙𝚍𝚊𝚝𝚎
┃┋ႌ〬🦇 .𝚛𝚎𝚜𝚝𝚊𝚛𝚝
┃┋ႌ〬🕷 .𝚊𝚞𝚝𝚘𝚊𝚍𝚖𝚒𝚗
┃┋ႌ〬🕸 .𝚕𝚎𝚊𝚟𝚎
┃┋ႌ〬🎃 .𝚜𝚊𝚕𝚒𝚛
┃┋ႌ〬🦇 .𝚜𝚙𝚊𝚖𝚠𝚊
┃┋ႌ〬🕷 .𝚜𝚎𝚝𝚙𝚛𝚎𝚏𝚒𝚡
┃┋ႌ〬🎃 .𝚜𝚎𝚝𝚋𝚘𝚝𝚗𝚊𝚖𝚎
┃┋ႌ〬🕸 .𝚌𝚕𝚎𝚊𝚛𝚝𝚙𝚖
┃┋ႌ〬🎃.𝚋𝚌
┃┋ႌ〬🦇 .𝚋𝚌𝚚𝚌
┃┋ႌ〬🕷 .𝚋𝚌𝚌
┃┋ႌ〬🕸 .𝚋𝚊𝚗𝚞𝚜𝚎𝚛
┃┋ႌ〬🎃 .𝚞𝚗𝚋𝚊𝚗𝚞𝚜𝚎𝚛
〬┗━━━━ ≪ •❈• ≫ ━━━━┛` 
 function _0x2daf() { 
     const _0x4c1076 = ['namedoc', 'social', '1017dFLzIP', '11680bWFOeX', 'sendMessage', '1FnTozH', '6qNtNxK', '445374chjKag', '2096504ySppGm', '627669MaFyqj', 'readFileSync', 'En breve se enviará el menú...', '374160lMCurS', '356228pujvOS', './storage/logos/MenuJS.jpg', '1019845zOpQQK', 'pdf', 'chat']; 
     _0x2daf = function() { 
         return _0x4c1076; 
     }; 
     return _0x2daf(); 
 } 
 const _0x110137 = _0x13bb;  
 (function(_0x14d3d7, _0x67b65e) { 
     const _0x3a56bf = { 
             _0x2e964c: 0x1b0, 
             _0x4fc539: 0x1bd, 
             _0x2a1845: 0x1b1, 
             _0x2b6724: 0x1b3, 
             _0x4293cc: 0x1b8, 
             _0x59080a: 0x1b9 
         }, 
         _0x30692c = _0x13bb, 
         _0x119b1c = _0x14d3d7(); 
     while (!![]) { 
         try { 
             const _0x181128 = parseInt(_0x30692c(0x1bb)) / 0x1 * (parseInt(_0x30692c(_0x3a56bf._0x2e964c)) / 0x2) + parseInt(_0x30692c(_0x3a56bf._0x4fc539)) / 0x3 + parseInt(_0x30692c(_0x3a56bf._0x2a1845)) / 0x4 + parseInt(_0x30692c(_0x3a56bf._0x2b6724)) / 0x5 * (parseInt(_0x30692c(0x1bc)) / 0x6) + -parseInt(_0x30692c(0x1ad)) / 0x7 + -parseInt(_0x30692c(0x1be)) / 0x8 + parseInt(_0x30692c(_0x3a56bf._0x4293cc)) / 0x9 * (-parseInt(_0x30692c(_0x3a56bf._0x59080a)) / 0xa); 
             if (_0x181128 === _0x67b65e) break; 
             else _0x119b1c['push'](_0x119b1c['shift']()); 
         } catch (_0x1caf7d) { 
             _0x119b1c['push'](_0x119b1c['shift']()); 
         } 
     } 
 }(_0x2daf, 0x235d2)); 
  
 function _0x13bb(_0x16c7de, _0x1a27b8) { 
 const _0x2dafbc = _0x2daf(); 
 return _0x13bb = function(_0x13bbaf, _0x156d41) { 
 _0x13bbaf = _0x13bbaf - 0x1ad; 
 let _0x1a2b8a = _0x2dafbc[_0x13bbaf]; 
 return _0x1a2b8a; 
 }, _0x13bb(_0x16c7de, _0x1a27b8); 
 } 
 let buttonMessage = { 
     'document': { 
         'url': md, 
     }, 
     'mimetype': td, 
     'fileName': '☰ D A S B O A R D ☰', 
     'fileLength': '99999999999999', 
     'pageCount': '999', 
     'contextInfo': { 
     'externalAdReply': { 
     'showAdAttribution': !![], 
             'mediaType': 0x1, 
             'previewType': "PHOTO", 
             'title': 'Hola!!', 
             'thumbnail': 'imagen1', 
             'renderLargerThumbnail': !![], 
             'sourceUrl': md 
         } 
     }, 
   'caption': menu['trim']() 
 } 
 await conn.sendMessage(m.chat, buttonMessage, {quoted: fkontak}) 
 } catch { 
 conn.reply(m.chat, '*⚠️ EL MENU TIENE UN ERROR PRUEBE CON EL MENU COMPLETO: (.menucompleto)*', fpoll, m) 
 }} 
 handler.tags = ['main'] 
 handler.command = /^(menu)$/i 
 handler.register = true 
 export default handler 
  
 function clockString(ms) { 
 let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) 
 let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60 
 let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60 
 return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')} 
  
 function ucapan() { 
     const time = moment.tz('America/Los_Angeled').format('HH') 
     let res = "Buenas noches 🌙" 
     if (time >= 4) { 
         res = "Buen día 🌄" 
     } 
     if (time > 10) { 
         res = "Buenas tardes ☀️" 
     } 
     if (time >= 15) { 
         res = "Buenas tardes 🌅" 
     } 
     if (time >= 18) { 
         res = "Buenas noches 🌙" 
     } 
     return res 
 } 
  
 function pickRandom(list) { 
   return list[Math.floor(Math.random() * list.length)] 
 }
