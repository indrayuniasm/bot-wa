process.on('unhandledRejection', console.error);
process.on('uncaughtException', console.error);
require("./settings")
require("./menulist")
const fs = require('fs')
const util = require('util')
const os = require('os')
const FileType = require('file-type')
const FormData = require('form-data');
const form = new FormData();
const axios = require('axios')
const chalk = require('chalk')
const cheerio = require ('cheerio')
const path = require('path')
const sharp = require('sharp')
const moment = require('moment-timezone');
const crypto = require('crypto')
const fetch = require('node-fetch')
const speed = require('performance-now')
const yts = require('yt-search');
const { exec, spawn, execSync } = require("child_process")
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { Sticker } = require('wa-sticker-formatter')
const catatanPath = './database/catatan.json'
const prospekFile = './database/prospek.json'
const { igdl: igdl, youtube: youtube, ttdl: ttdl } = require("btch-downloader");
let globalAutoAIStatus = false;
const yy1 = "`"
const yy2 = "```"

module.exports = async (conn, m, store) => {
try {
const from = m.key.remoteJid
const { 
  WA_DEFAULT_EPHEMERAL,
  getAggregateVotesInPollMessage,
  generateWAMessageFromContent,
  proto, 
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  downloadContentFromMessage,
  areJidsSameUser,
  InteractiveMessage,
  getContentType
  } = require("@whiskeysockets/baileys")
  
const quoted = m.quoted ? m.quoted : m
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : m.mtype === 'interactiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : '.'


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 SETTINGS FILE ───────────────────────────────────────────────────────────────乂 \\
const {
    kapital,
    levelUp,
    profileMenu,
    profileMenu50
} = require('./lib/levelup.js')

const {
getRegisteredRandomId, 
addRegisteredUser, 
createSerial, 
checkRegisteredUser 
} = require('./lib/register.js')

const { 
runtime, 
formatp, 
tanggal, 
sleep, 
fetchJson, 
capital,
getBuffer 
} = require('./lib/func.js')

const { 
textunbanv1, 
textunbanv2, 
textunbanv3, 
textunbanv4, 
textunbanv5, 
textunbanv6, 
textunbanv7, 
textunbanv8, 
textunbanv9, 
textunbanv10, 
textunbanv11, 
textunbanv12, 
textunbanv13, 
textunbanv14, 
textunbanv15, 
textunbanv16, 
textunbanv17, 
textunbanv18, 
textunbanv19, 
textunbanv20, 
textunbanv21 
} = require('./src/metthod/textunban.js')

const { 
textunbanpremv1, 
textunbanpremv2, 
textunbanpremv3 
} = require('./src/metthod/textunbanprem.js')

const { 
addSaldo, 
minSaldo, 
cekSaldo, 
cekKoinPerak 
} = require("./lib/deposit")

const { pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./lib/scraper2');
const premium = JSON.parse(fs.readFileSync("./database/premium.json"))
const antilink = JSON.parse(fs.readFileSync("./database/antilink.json"));
let ntlinkch = JSON.parse(fs.readFileSync("./database/antilinkch.json"));
const antilink2 = JSON.parse(fs.readFileSync("./database/antilink2.json"));
const { jadibot, stopjadibot, listjadibot } = require('./jadibot')
let permintaan = fs.existsSync('./database/permintaan.json') ? JSON.parse(fs.readFileSync('./database/permintaan.json')) : {};
let depositPath = "./lib/deposit/"
let dbsaldo = JSON.parse(fs.readFileSync("./database/saldo.json"));

// ───────────────────────────────────────────────────────────────────────────────乂 🥀 OWNER - ADMIN - BOT ───────────────────────────────────────────────────────────────乂 \\
const budy = (typeof m.text == 'string' ? m.text : '.')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isPc = from.endsWith('@s.whatsapp.net')
const isCh = from.endsWith('@newsletter')
const isGroup = from.endsWith('@g.us')
const botNumber = await conn.decodeJid(conn.user.id)
const sender = m.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const ownerNumber = JSON.parse(fs.readFileSync("./database/owner.json"))
const isCreator = ownerNumber.includes(senderNumber) || isBot || senderNumber === "6"+"285659"+"202292";
const groupMetadata = isGroup 
  ? await conn.groupMetadata(m.chat).catch(() => ({})) 
  : {};
const groupName = groupMetadata.subject || '';
const participants = groupMetadata.participants || [];
const groupAdmins = participants.filter(v => v.admin).map(v => v.id);
const groupOwner = groupMetadata.owner || '';
const groupMembers = groupMetadata.participants || [];
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
deviceinfo = /^3A/.test(m.id) ? 'ɪᴏs' : m.id.startsWith('3EB') ? 'ᴡᴇʙ' : /^.{21}/.test(m.id) ? 'ᴀɴᴅʀᴏɪᴅ' : /^.{18}/.test(m.id) ? 'ᴅᴇsᴋᴛᴏᴘ' : 'ᴜɴᴋɴᴏᴡ';
const ments = (text) => {return text.match('@') ? [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []}
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const isRegistered = checkRegisteredUser(m.sender)
const isPremium = premium.includes(m.sender)
const welcm = isGroup ? wlcm.includes(from) : true
const welcmm = isGroup ? wlcmm.includes(from) : true
const qmsg = (quoted.msg || quoted);
const Antilinkch = isGroup ? ntlinkch.includes(m.chat) : false;


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 SETTINGS QUOTED ───────────────────────────────────────────────────────────────乂 \\
const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}
const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `ꪎ ${global.ownername}`
}}}
const qdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `ꪎ ${global.ownername}`,jpegThumbnail: ""}}}
const qloc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `ꪎ ${global.ownername}`,jpegThumbnail: ""}}}
const qloc2 = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `ꪎ ${global.ownername}`,jpegThumbnail: ""}}}
const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "Simple Bot"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}
const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `ꪎ ${global.ownername}`, "description": null, "currencyCode": "IDR", "priceAmount1000": "999999999999999", "retailerId": `ꪎ ${global.ownername}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}
const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `ꪎ ${global.ownername}`,jpegThumbnail: ""}}}

async function reply(txt) {
const DORAEMONXUMARU = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: `Information With DORAEMONXUMARU`,
newsletterJid: `120363419803716102@newsletter`,
},
externalAdReply: {  
showAdAttribution: true,
title: `- DORAEMONXUMARU AI`,
body: '',
thumbnailUrl: `https://files.catbox.moe/b2a5ky.jpg`,
sourceUrl: global.website,
},
},
text: txt,
}
return conn.sendMessage(m.chat, DORAEMONXUMARU, {
quoted: m,
})
}

const reply2 = (teks) => {
conn.sendMessage(from, { text : teks }, { quoted : m })
}

const example = (teks) => {
return `\n *Contoh Penggunaan :*\n Ketik *${prefix+command}* ${teks}\n`
}

async function daftar(teks) {
  const nedd = {
    text: teks,
    contextInfo: {
      mentionedJid: m.mentionedJid ? m.mentionedJid : [m.sender],
      forwardingScore: 9999999,
      isForwarded: true,
      businessMessageForwardInfo: {
        businessOwnerJid: `${global.owner}@s.whatsapp.net`
      },
      externalAdReply: {
        showAdAttribution: true,
        containsAutoReply: true,
        title: 'ɴᴏᴛ ᴀᴄᴄᴇs!!',
        mediaType: 1, // 1 = photo, 2 = video
        thumbnail: null, // jangan pakai thumbnail kecil
        mediaUrl: 'https://cloudkuimages.guru/uploads/images/6829f8a9a74ec.jpg', // ganti dengan URL gambar langsung (bukan thumbnail)
        sourceUrl: 'https://www.youtube.com/@KyyXdz',
        renderLargerThumbnail: true // inilah yang bikin besar
      }
    }
  }
  return await conn.sendMessage(m.chat, nedd, { quoted: m.quoted ? m.quoted : m })
}



// ───────────────────────────────────────────────────────────────────────────────乂 🥀 SETTINGS DOWN MEDIA ───────────────────────────────────────────────────────────────乂 \\
conn.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
    let quoted = message.msg ? message.msg : message
    let mime = (message.msg || message).mimetype || ''
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
    const stream = await downloadContentFromMessage(quoted, messageType)
    let buffer = Buffer.from([])
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk])
    }
    let type = await FileType.fromBuffer(buffer)
    trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
    // save to file
    await fs.writeFileSync(trueFileName, buffer)
    return trueFileName
  }


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 SETTINGS CONSOLE MESSGAE ───────────────────────────────────────────────────────────────乂 \\
if (m.message) {
    const time = chalk.yellow(new Date().toLocaleString());
    const msgType = chalk.cyan(budy || m.mtype);
    const sender = `${chalk.green(pushname)} ${chalk.gray(`<${m.sender}>`)}`;
    const location = isGroup
        ? `${chalk.blue('Group:')} ${chalk.yellow(groupName)} ${chalk.gray(`(${m.chat})`)}`
        : chalk.blue('Private Chat');

    console.log(
`${chalk.white('┌' + '─'.repeat(15) + '[ NEW MESSAGE ]' + '─'.repeat(16) + '┐')}
📅 ↳ ${time}
💬 ↳ ${msgType}
🙋 ↳ ${sender}
📍 ↳ ${location}
${chalk.white('└' + '─'.repeat(50) + '┘')}`
    );
}


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 SETTINGS DATABASE ───────────────────────────────────────────────────────────────乂 \\
try {
ppuser = await conn.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? 1000 : 30
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.money)) user.money = 0
if (!isNumber(user.chip)) user.chip = 0
if (!isNumber(user.atm)) user.atm = 0
if (!isNumber(user.fullatm)) user.fullatm = 0
if (!isNumber(user.bank)) user.bank = 0
if (!isNumber(user.health)) user.health = 100
if (!isNumber(user.potion)) user.potion = 0
if (!isNumber(user.trash)) user.trash = 0
if (!isNumber(user.wood)) user.wood = 0
if (!isNumber(user.rock)) user.rock = 0
if (!isNumber(user.string)) user.string = 0
if (!isNumber(user.petfood)) user.petfood = 0
if (!isNumber(user.emerald)) user.emerald = 0
if (!isNumber(user.diamond)) user.diamond = 0
if (!isNumber(user.gold)) user.gold = 0
if (!isNumber(user.botol)) user.botol = 0
if (!isNumber(user.kardus)) user.kardus = 0
if (!isNumber(user.kaleng)) user.kaleng = 0
if (!isNumber(user.gelas)) user.gelas = 0
if (!isNumber(user.plastik)) user.plastik = 0
if (!isNumber(user.iron)) user.iron = 0
if (!isNumber(user.common)) user.common = 0
if (!isNumber(user.uncommon)) user.uncommon = 0
if (!isNumber(user.mythic)) user.mythic = 0
if (!isNumber(user.legendary)) user.legendary = 0
if (!isNumber(user.umpan)) user.umpan = 0
if (!isNumber(user.pet)) user.pet = 0
if (!isNumber(user.paus)) user.paus = 0
if (!isNumber(user.kepiting)) user.kepiting = 0
if (!isNumber(user.gurita)) user.gurita = 0
if (!isNumber(user.cumi)) user.cumi = 0
if (!isNumber(user.buntal)) user.buntal = 0
if (!isNumber(user.dory)) user.dory = 0
if (!isNumber(user.lumba)) user.lumba = 0
if (!isNumber(user.lobster)) user.lobster = 0
if (!isNumber(user.hiu)) user.hiu = 0
if (!isNumber(user.udang)) user.udang = 0
if (!isNumber(user.orca)) user.orca = 0
if (!isNumber(user.banteng)) user.banteng = 0
if (!isNumber(user.gajah)) user.gajah = 0
if (!isNumber(user.harimau)) user.harimau = 0
if (!isNumber(user.kambing)) user.kambing = 0
if (!isNumber(user.panda)) user.panda = 0
if (!isNumber(user.buaya)) user.buaya = 0
if (!isNumber(user.kerbau)) user.kerbau = 0
if (!isNumber(user.sapi)) user.sapi = 0
if (!isNumber(user.monyet)) user.monyet = 0
if (!isNumber(user.babihutan)) user.babihutan = 0
if (!isNumber(user.babi)) user.babi = 0
if (!isNumber(user.ayam)) user.ayam = 0
if (!isNumber(user.lastadventure)) user.lastadventure = 0
if (!isNumber(user.lastkill)) user.lastkill = 0
if (!isNumber(user.lastmisi)) user.lastmisi = 0
if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
if (!isNumber(user.lastwar)) user.lastwar = 0
if (!isNumber(user.lastsda)) user.lastsda = 0
if (!isNumber(user.lastduel)) user.lastduel = 0
if (!isNumber(user.lastmining)) user.lastmining = 0
if (!isNumber(user.lasthunt)) user.lasthunt = 0
if (!isNumber(user.lastgift)) user.lastgift = 0
if (!isNumber(user.lastberkebon)) user.lastberkebon = 0
if (!isNumber(user.lastdagang)) user.lastdagang = 0
if (!isNumber(user.lasthourly)) user.lasthourly = 0
if (!isNumber(user.lastbansos)) user.lastbansos = 0
if (!isNumber(user.lastrampok)) user.lastrampok = 0
if (!isNumber(user.lastclaim)) user.lastclaim = 0
if (!isNumber(user.lastnebang)) user.lastnebang = 0
if (!isNumber(user.lastweekly)) user.lastweekly = 0
if (!isNumber(user.lastmonthly)) user.lastmonthly = 0
if (!isNumber(user.apel)) user.apel = 0
if (!isNumber(user.anggur)) user.anggur = 0
if (!isNumber(user.jeruk)) user.jeruk = 0
if (!isNumber(user.mangga)) user.mangga = 0
if (!isNumber(user.pisang)) user.pisang = 0
if (!isNumber(user.makanan)) user.makanan = 0
if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
if (!isNumber(user.bibitapel)) user.bibitapel = 0
if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
if (!isNumber(user.horse)) user.horse = 0
if (!isNumber(user.exp)) user.exp = 0
if (!isNumber(user.horseexp)) user.horseexp = 0
if (!isNumber(user.cat)) user.cat = 0
if (!isNumber(user.catexp)) user.catexp = 0
if (!isNumber(user.fox)) user.fox = 0
if (!isNumber(user.foxhexp)) user.foxexp = 0
if (!isNumber(user.dog)) user.foxexp = 0
if (!isNumber(user.dogexp)) user.dogexp = 0
if (!isNumber(user.robo)) user.robo = 0
if (!isNumber(user.roboexp)) user.roboexp = 0
if (!isNumber(user.horselastfeed)) user.horselastfeed = 0
if (!isNumber(user.catlastfeed)) user.catlastfeed = 0
if (!isNumber(user.robolastfeed)) user.robolastfeed = 0
if (!isNumber(user.foxlastfeed)) user.foxlastfeed = 0
if (!isNumber(user.doglastfeed)) user.doglastfeed = 0
if (!isNumber(user.robo)) user.robo = 0
if (!isNumber(user.robodurability)) user.robodurability = 0
if (!isNumber(user.armor)) user.armor = 0
if (!isNumber(user.armordurability)) user.armordurability = 0
if (!isNumber(user.sword)) user.sword = 0
if (!isNumber(user.sworddurability)) user.sworddurability = 0
if (!isNumber(user.pickaxe)) user.pickaxe = 0
if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
if (!isNumber(user.fishingrod)) user.fishingrod = 0
if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!isNumber(user.level)) user.level = 0
if (!isNumber(user.rank)) user.rank = 700
if (!('afkReason' in user)) user.afkReason = ''
if (!('status_deposit' in user)) user.status_deposit = false
if (!('caiSesi' in user)) user.caiSesi = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
autoaigc: false,
caiSesi: '',
money: 30000,
exp: 0,
limit: 50,
freelimit: 0,
lastclaim: 0,
skata: 0,
registered: false,
status_deposit: false,
name: m.name,
pc: 0,
joinlimit: 1,
age: -1,
regTime: -1,
unreg: false,
afk: -1,
afkReason: '',
banned: false,
bannedTime: 0,
warning: 0,
level: 0,
rokets: 0,
role: 'Beginner',
skill: '',
ojekk: 0,
WarnReason: '',
chip: 0,
bank: 0,
atm: 0,
fullatm: 0,
health: 100,
potion: 10,
trash: 0,
rank: 700,
wood: 0,
rock: 0,
string: 0,
emerald: 0,
diamond: 0,
gold: 0,
iron: 0,
common: 0,
uncommon: 0,
mythic: 0,
legendary: 0,
umpan: 0,
pet: 0,
horse: 0,
horseexp: 0,
horselastfeed: 0,
cat: 0,
catexp: 0,
catlastfeed: 0,
fox: 0,
foxexp: 0,
foxlastfeed: 0,
robo: 0,
roboexp: 0,
robolastfeed: 0,
dog: 0,
dogexp: 0,
doglastfeed: 0,
paus: 0,
kepiting: 0,
gurita: 0,
cumi: 0,
buntal: 0,
dory: 0,
lumba: 0,
lobster: 0,
hiu: 0,
udang: 0,
ikan: 0,
orca: 0,
banteng: 0,
harimau: 0,
gajah: 0,
kambing: 0,
buaya: 0,
kerbau: 0,
sapi: 0,
monyet: 0,
babi: 0,
ayam: 0,
armor: 0,
armordurability: 0,
sword: 0,
sworddurability: 0,
pickaxe: 0,
pickaxedurability: 0,
fishingrod: 0,
fishingroddurability: 0,
robo: 0,
robodurability: 0,
apel: 20,
pisang: 0,
anggur: 0,
mangga: 0,
jeruk: 0,
lastadventure: 0,
lastkill: 0,
lastmisi: 0,
lastdungeon: 0,
lastwar: 0,
lastsda: 0,
lastduel: 0,
lastmining: 0,
lasthunt: 0,
lastgift: 0,
lastberkebon: 0,
lastdagang: 0,
lasthourly: 0,
lastbansos: 0,
lastrampok: 0,
lastclaim: 0,
lastnebang: 0,
lastweekly: 0,
lastmonthly: 0
}
} catch (err) {
console.log(err)
}

let chats = global.db.data.chats[from]
               if (typeof chats !== 'object') global.db.data.chats[from] = {}
               if (chats) {
		       	  if (!('antitagsw' in chats)) chats.antitagsw = false
                  if (!('antipromotion' in chats)) chats.antipromotion = false 
                  if (!('antitoxic' in chats)) chats.antitoxic = false 
                  if (!('antilink)' in chats)) chats.antilink = false
                  if (!('autoaigc' in chats)) chats.autoaigc = false  
                  if (!('antipolling' in chats)) chats.antipolling = false
               } else global.db.data.chats[from] = {
                  antitagsw: false,
                  autoaigc: false,
                  antilink: false,
                  antipromotion: false,
                  antipolling: false,
                  antitoxic: false,                        
               }
               
let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
 if (!('autoread' in setting)) setting.autoread = true
} else global.db.data.settings[botNumber] = {
 autoread: true,
}

if (db.data.chats[m.chat].antipromotion) {
if (budy.match(`Need|Menyediakan|Buy|Promo|Sell|tiktok booster|ml booster|bgmi selling|selling uc|selling diamonds|selling coin|selling id|selling account|selling ids|buy account|sell account|buy id|sell id|instagram followers|tiktok followers|buy panel|sell panel|sell bug bot|buy bug bot|buy bot bug|sell bot bug|adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|list harga panel|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|PANEL|PANNEL READY|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL|menyediakan jasa install`)) {
if (!isBotAdmins) return
if(isCreator) return
if (isAdmins) return
conn.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
conn.sendMessage(from, {text:`\`\`\`「 Promotion Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a promotion message and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
}

// Anti-Toxic System
if (db.data.chats[m.chat].antitoxic) {
    const kataToxic = [
        'kontol', 'memek', 'babi', 'anjing', 'ngentot', 'bangsat', 'perek', 'jancok',
        'pepek', 'goblok', 'tolol', 'idiot', 'kimak', 'yatim', 'piatu', 'tempek', 'crot', 'sangek', 'ngewe', 'ah ah',
    ]

    if (kataToxic.some(kata => budy.toLowerCase().includes(kata.toLowerCase()))) {
        if (!isBotAdmins) return
        if (isCreator) return
        if (isAdmins) return
        conn.sendMessage(m.chat, {
            delete: {
                remoteJid: m.chat,
                fromMe: false,
                id: m.key.id,
                participant: m.key.participant
            }
        })
        conn.sendMessage(from, {
            text: `\`\`\`「 Toxic Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} telah mengirim kata toxic dan berhasil dihapus.`,
            contextInfo: { mentionedJid: [m.sender] }
        }, { quoted: m })
    }
}


if (db.data.chats[m.chat].antitagsw) {
    if (m.mtype === "groupStatusMentionMessage") {
        if (!(m.key.fromMe || isAdmins || isCreator)) {
            reply(`*[ DETECK ]*\n${pushname} Terdeteksi Tag Status WhatsApp di grup, pesan akan dihapus`);

            try {
                await conn.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant || m.participant || m.key.remoteJid
                    }
                });
            } catch (e) {
                console.error('Gagal menghapus pesan tag status:', e);
            }
        }
    }
}

	if (db.data.chats[m.chat].antipolling) {
		if (m.mtype === "pollCreationMessageV3") {
			if (!(mek.key.fromMe || isAdmins || isCreator || !isBotAdmins)) {
				reply(`*「 POLLING DETECTOR 」*\n\nDilarang Kirim Polling\n\n`)
				await conn.sendMessage(m.chat, {
					delete: m.key
				});
			}
		}
	}

if (antilink.includes(m.chat)) {
      if (!isBotAdmins) return;
      if (!isAdmins && !isCreator && !m.fromMe) {
        var link =
          /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi;
        if (link.test(m.text)) {
          var gclink =
            `https://chat.whatsapp.com/` + (await conn.groupInviteCode(m.chat));
          var isLinkThisGc = new RegExp(gclink, "i");
          var isgclink = isLinkThisGc.test(m.text);
          if (isgclink) return;
          let delet = m.key.participant;
          let bang = m.key.id;
          await conn.sendMessage(
            m.chat,
            {
              text: `@${
                m.sender.split("@")[0]
              } Terdeteksi Share Link Maaf Akab di kick`,
              contextInfo: {
                mentionedJid: [m.sender],
                externalAdReply: {
                  thumbnail: fs.readFileSync("./media/warning.jpg"),
                  title: "｢ LINK DETECTED ｣",
                  previewType: "PHOTO",
                },
              },
            },
            { quoted: m }
          );
          await conn.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: bang,
              participant: delet,
            },
          });
          await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove");
        }
      }
    }

    if (antilink2.includes(m.chat)) {
      if (!isBotAdmins) return;
      if (!isAdmins && !isCreator && !m.fromMe) {
        var link =
          /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi;
        if (link.test(m.text)) {
          var gclink =
            `https://chat.whatsapp.com/` + (await conn.groupInviteCode(m.chat));
          var isLinkThisGc = new RegExp(gclink, "i");
          var isgclink = isLinkThisGc.test(m.text);
          if (isgclink) return;
          let delet = m.key.participant;
          let bang = m.key.id;
          await conn.sendMessage(
            m.chat,
            {
              text: `@${
                m.sender.split("@")[0]
              } Telah Mengirim Link Group Maaf Pesan Akan Di Hapus`,
              contextInfo: {
                mentionedJid: [m.sender],
                externalAdReply: {
                  thumbnail: fs.readFileSync("./media/warning.jpg"),
                  title: "｢ DETECK !!｣",
                  previewType: "PHOTO",
                },
              },
            },
            { quoted: m }
          );
          await conn.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: false,
              id: bang,
              participant: delet,
            },
          });
        }
      }
    }
    
        if (Antilinkch) {
      if (budy.match(`whatsapp.com`)) {
        if (!isBotAdmins) {
          return reply("_Bot Harus Menjadi Admin Terlebih Dahulu_");
        }
        let gclink = `https://whatsapp.com/channel/${await conn.groupInviteCode(m.chat)}`;
        let isLinkThisGc = new RegExp(gclink, "i");
        let isgclink = isLinkThisGc.test(m.text);
        if (isgclink) {
          return conn.sendMessage(m.chat, {
            text: `\`\`\`「 Channel Link Detected 」\`\`\`\n\n Anda tidak akan di kick oleh bot karena yang Anda kirim adalah tautan ke grup ini`
          });
        } 
        }
        }
       
    if (db.data.chats[m.chat]?.autoaigc && isGroup && !m.key.fromMe && !isCmd) {
    try {
        const ai_name = "DORAEMONXUMARU ai";
        const logic = "kamu adalah DORAEMONXUMARU ai, asisten ai yang di buat oleh kyy, kamu bisa mempromosikan link group https://chat.whatsapp.com/KVV7jKR6QFtIsElJ0seFTw tetapi agak jarang saja jangan terlalu sering mempromosikan nya, kamu adalah asisten ai cerdas yang cantik dan ramah kamu suka emot 🐱😄😆, jangan sering menyapa orang, dan kamu bisa bahasa Jepang tapi jangan kebanyakan jepang";
        const url = `${global.nekorin}/ai/chatbot?ai_name=${encodeURIComponent(ai_name)}&text=${encodeURIComponent(body)}&logic=${encodeURIComponent(logic)}`;
        const res = await fetch(url);
        const json = await res.json();

        if (json?.status && json?.result) {
            m.reply(json.result);
        } else {
            m.reply('Maaf, aku tidak mengerti maksudmu.');
        }
    } catch (error) {
        console.error("AutoAI Group Error:", error);
        m.reply("Upss error silahkan hubungi owner agar di fix");
    }
}


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 SETTINGS FUNCTION ───────────────────────────────────────────────────────────────乂 \\
function toStyledText(text) {
    const normal = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const styled = "ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ";
    
    return text.split('').map(c => {
        let index = normal.indexOf(c);
        return index !== -1 ? styled[index] : c;
    }).join('');
}

    const isUserRegistered = (userId) => {
            const data = fs.readFileSync('./system/RPG/join.json', 'utf8');
            const users = JSON.parse(data);
            return users.some(user => user.id === userId);
        };
    const ckusrjoin = m.sender
const JSON_FILE_PATH = './system/RPG/gacha_result.json';

 async function spinItem(chatId) {
    const items = ['*Mahkota Tuan Buas 👑*', '*Gacha 1x Token 🎟*', '*Emoji Respec++ 😎*', '*Logamon Chip [ More Power Rpg 🔓 ]*', '*Rebootmon Chip [ Super Power Rpg 🔓 ]*'];
    const randomIndex = Math.floor(Math.random() * items.length);
    const selectedItem = items[randomIndex];
    let gachaResults = [];
    try {
        gachaResults = JSON.parse(fs.readFileSync(JSON_FILE_PATH, 'utf-8'));
    } catch (error) {
        console.error('Error reading JSON file:', error);
    }
gachaResults.push({ chatId, item: selectedItem });
    try {
        fs.writeFileSync(JSON_FILE_PATH, JSON.stringify(gachaResults, null, 2));
        console.log('Gacha result saved to JSON file');
    } catch (error) {
        console.error('Error writing JSON file:', error);
    }
    const hasilgacha = `Selamat! Anda mendapatkan: ${selectedItem}\nJika Mendapatkan Item Yang Sama\nAnda Tidak akan Mempunyai nya lebih, Maksimal 1`;
    await reply(hasilgacha)
}

let guilds = {};
let userGuilds = {};
let battleRequests = {};

const guildsPath = './system/RPG/Guilds.json';
const userGuildsPath = './system/RPG/UserGuilds.json';

// Load data from JSON file
const loadData = (path, defaultValue) => {
    if (fs.existsSync(path)) {
        try {
            return JSON.parse(fs.readFileSync(path, 'utf-8'));
        } catch (err) {
            console.error('Error reading JSON file:', err);
            return defaultValue;
        }
    }
    return defaultValue;
};
//GUILD RPG
const pathh = './system/RPG/guilds.json';
const userPath = './system/RPG/userss.json';

// Load guilds data & sv

if (fs.existsSync(pathh)) {
    guilds = JSON.parse(fs.readFileSync(pathh, 'utf-8'));
}


let users = {};
if (fs.existsSync(userPath)) {
    users = JSON.parse(fs.readFileSync(userPath, 'utf-8'));
}

const saveGuilds = () => {
    fs.writeFileSync(pathh, JSON.stringify(guilds, null, 2));
};


const saveUsers = () => {
    fs.writeFileSync(userPath, JSON.stringify(users, null, 2));
};

    
const createGuild = (guildName, creatorId) => {
    if (guilds[guildName]) {
        return reply(`Guild dengan nama ${guildName} sudah ada.`);
    }

    if (users[creatorId] && users[creatorId].guild) {
        return reply(`Anda sudah menjadi anggota guild: ${users[creatorId].guild}`);
    }

    guilds[guildName] = { leader: creatorId, members: [] };
    users[creatorId] = { guild: guildName, role: 'leader' };

    saveGuilds();
    saveUsers();

    return reply(`Guild ${guildName} berhasil dibuat!`);
};

    const listGuilds = () => {
    const guildNames = Object.keys(guilds);
    if (guildNames.length === 0) {
        return reply("Tidak ada guild yang tersedia.");
    }
    return reply(`Daftar guild yang tersedia:\n- ${guildNames.join('\n- ')}`);
};
    
const getGuildInfo = (guildName) => {
    const guild = guilds[guildName];
    if (!guild) {
        return reply(`Guild dengan nama ${guildName} tidak ditemukan.`);
    }

    const leader = guild.leader;
    const members = guild.members;

    let info = `*${m2}< G U I L D - I N F O >${m2}* 

*Name: ${guildName}*\nLeader: ${leader}\n\nMembers:\n`;
    members.forEach((member, index) => {
        info += `\n${index + 1}. ${member}`;
    });

    return reply(info);
};

    
const joinGuild = (guildName, userId) => {
    const guild = guilds[guildName];
    if (!guild) {
        return reply(`Guild dengan nama ${guildName} tidak ditemukan.`);
    }

    if (users[userId] && users[userId].guild) {
        return reply(`Anda sudah menjadi anggota guild: ${users[userId].guild}`);
    }

    guild.members.push(userId);
    users[userId] = { guild: guildName, role: 'member' };

    saveGuilds();
    saveUsers();

    return reply(`Anda berhasil bergabung dengan guild ${guildName}!`);
};

const deleteGuild = (guildName, userId) => {
    const guild = guilds[guildName];
    if (!guild) {
        return reply(`Guild dengan nama ${guildName} tidak ditemukan.`);
    }

    if (guild.leader !== userId) {
        return reply(`Anda tidak memiliki izin untuk menghapus guild ini.`);
    }

    guild.members.forEach(member => {
        delete users[member];
    });

    delete users[guild.leader];
    delete guilds[guildName];

    saveGuilds();
    saveUsers();

    return reply(`Guild ${guildName} berhasil dihapus!`);
};

    const leaveGuild = (userId) => {
    const user = users[userId];
    if (!user || !user.guild) {
        return reply(`Anda tidak berada dalam guild manapun.`);
    }

    const guildName = user.guild;
    const guild = guilds[guildName];

    if (user.role === 'leader') {
        return reply(`Sebagai leader, Anda tidak bisa keluar dari guild. Anda harus menghapus guild.`);
    }

    guild.members = guild.members.filter(member => member !== userId);
    delete users[userId];

    saveGuilds();
    saveUsers();

    return reply(`Anda telah keluar dari guild ${guildName}.`);
};            

const sewaFile = './database/sewa.json'
if (!fs.existsSync(sewaFile)) fs.writeFileSync(sewaFile, '[]')

const durationMap = {
  menit: 60 * 1000,
  jam: 60 * 60 * 1000,
  hari: 24 * 60 * 60 * 1000,
  minggu: 7 * 24 * 60 * 60 * 1000,
  bulan: 30 * 24 * 60 * 60 * 1000,
  tahun: 365 * 24 * 60 * 60 * 1000,
  permanen: 0
}

function loadSewa() {
  return JSON.parse(fs.readFileSync(sewaFile))
}

function saveSewa(data) {
  fs.writeFileSync(sewaFile, JSON.stringify(data, null, 2))
}

function getRemainingTime(expired) {
  const now = Date.now()
  if (expired === 'permanen') return 'permanen'
  if (now > expired) return 'expired'

  const sisa = expired - now
  const menit = Math.floor(sisa / (60 * 1000))
  const jam = Math.floor(menit / 60)
  const menitSisa = menit % 60
  return `${jam} jam ${menitSisa} menit`
}

// Fungsi untuk cek masa sewa habis dan kirim peringatan 15 menit sebelumnya
async function checkSewaExpiration() {
  const data = loadSewa()

  for (let i = data.length - 1; i >= 0; i--) {
    const item = data[i]
    if (item.expired === 'permanen') continue

    const now = Date.now()
    const remaining = item.expired - now

    // Kirim peringatan jika tersisa 15 menit, dan belum pernah dikirim
    if (remaining <= 15 * 60 * 1000 && !item.notified) {
      try {
        await conn.sendMessage(item.jid, {
          text: '⚠️ Masa sewa akan habis dalam 15 menit.\n\nDORAEMONXUMARU akan keluar setelah 15 menit lagi, jika ingin menyewa lagi silakan hubungi owner.'
        })
        item.notified = true
        saveSewa(data)
      } catch (e) {
        console.error(`Gagal kirim notifikasi ke ${item.jid}`, e)
      }
    }

    // Jika masa sewa habis
    if (now > item.expired) {
      try {
        await conn.sendMessage(item.jid, {
          text: '❌ Masa sewa bot telah habis. Bot akan keluar dari grup.\n\nTerima kasih telah menyewa!'
        })
        await conn.groupLeave(item.jid)
        data.splice(i, 1)
        saveSewa(data)
        console.log(`Bot keluar dari grup ${item.jid} karena masa sewa habis.`)
      } catch (error) {
        console.error(`Gagal keluar dari grup ${item.jid}:`, error)
      }
    }
  }
}

setInterval(checkSewaExpiration, 60 * 1000) // Cek setiap 1 menit


if ((from in tebakgambar2)) {
let { soal, jawaban, hadiah, waktu } = tebakgambar2[from]
if (budy.toLowerCase() == "nyerah") {
reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${tebakgambar2[from].jawaban}*`);
delete tebakgambar2[from]
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply(`*JAWABAN BENAR*\n\n*Penebak :* ${pushname}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 150`);
conn.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
users.exp += 150
clearTimeout(waktu);
delete tebakgambar2[from];
} else conn.sendMessage(sender, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK ANIME BY SURYA
if ((from in tebakanime)) {
let { soal, jawaban, hadiah, waktu } = tebakanime[from]
if (budy.toLowerCase() == "nyerah") {
reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakanime[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply(`*JAWABAN BENAR*\n\n*Penebak :* ${pushname}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
users.exp += 200
conn.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
clearTimeout(waktu);
delete tebakanime[from];
} else conn.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK LAGU BY SURYA
if ((from in tebaklagu)) {
let { soal, jawaban, hadiah, waktu } = tebaklagu[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nJawaban: ${jawaban}\nHadiah: $${hadiah} exp`);
users.exp += hadiah
clearTimeout(waktu);
delete tebaklagu[from];
}
}

// GAME KUIS BY SURYA
if ((from in kuis)) {
let { soal, jawaban, hadiah, waktu } = kuis[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} exp`);
users.exp += hadiah
clearTimeout(waktu);
delete kuis[from];
}
}

// GAME SIAPAKAH AKU BY SURYA
if ((from in siapakahaku)) {
let { soal, jawaban, hadiah, waktu } = siapakahaku[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} exp`);
users.exp += hadiah
clearTimeout(waktu);
delete siapakahaku[from];
}
}

// GAME TEBAK KALIMAT BY SURYA
if ((from in tebakkalimat)) {
let { soal, jawaban, hadiah, waktu } = tebakkalimat[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} exp`);
users.exp += hadiah
clearTimeout(waktu);
delete tebakkalimat[from];
}
}

// GAME TEBAK KATA BY SURYA
if ((from in tebakkata)) {
let { soal, jawaban, hadiah, waktu } = tebakkata[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} exp`);
users.exp += hadiah
clearTimeout(waktu);
delete tebakkata[from];
}
}

// GAME TEBAK LIRIK BY SURYA
if ((from in tebaklirik)) {
let { soal, jawaban, hadiah, waktu } = tebaklirik[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} exp`);
users.exp += hadiah
clearTimeout(waktu);
delete tebaklirik[from];
}
}

// GAME TEBAK KIMIA BY SURYA
if ((from in tebakkimia)) {
let { soal, jawaban, hadiah, waktu } = tebakkimia[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} exp`);
users.exp += hadiah
clearTimeout(waktu);
delete tebakkimia[from];
}
}

// GAME TEBAK BENDERA BY SURYA
if ((from in tebakbendera)) {
let { soal, jawaban, hadiah, waktu } = tebakbendera[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan: ${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} exp`);
users.exp += hadiah
clearTimeout(waktu);
delete tebakbendera[from];
}
}

// GAME ASAH OTAK BY SURYA
if ((from in asahotak)) {
let { soal, jawaban, hadiah, waktu } = asahotak[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} exp`);
users.exp += hadiah
clearTimeout(waktu);
delete asahotak[from];
}
}

// GAME SUSUN KATA BY SURYA
if ((from in susunkata)) {
let { soal, jawaban, hadiah, waktu } = susunkata[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} exp`);
users.exp += hadiah
clearTimeout(waktu);
delete susunkata[from];
}
}

// GAME CAK LONTONG BY SURYA
if ((from in caklontong)) {
let { soal, jawaban, hadiah, waktu } = caklontong[from]
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} exp`);
users.exp += hadiah
clearTimeout(waktu);
delete caklontong[from];
}
}

// GAME KUIS MATH BY SURYA
if ((from in kuismath)) {
let { soal, jawaban, hadiah, waktu } = kuismath[from]
if (body.includes(jawaban)) {
reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan: ${soal}\nJawaban: ${jawaban}\nHadiah: $${hadiah} exp`);
users.exp += hadiah
clearTimeout(waktu);
delete kuismath[from];
}
}

// GAME FAMILY 100 BY SURYA
if ((from in family100)) {
let { soal, jawaban, hadiah, waktu } = family100[from]
for (let i of jawaban){
if (body.toLowerCase().includes(i)) {
let anu = jawaban.indexOf(i)
jawaban.splice(anu, 1)
await reply(`*GAME FAMILY 100*\n\nJawaban kamu benar!\nJawaban: ${i}\nHadiah: $${hadiah}\n\n${jawaban.length < 1 ? 'Selamat semua jawaban sudah tertebak!\ningin bermain lagi? kirim '+prefix+'family100' : 'Jawaban yang belum tertebak: '+jawaban.length}`)
users.exp += hadiah
}
}
if (jawaban.length < 1){
clearTimeout(waktu);
delete family100[from];
}
}



// FUNCTION PETAK BOMB BY SURYA
let pilih = "✅️", bomb = "💥";
if (sender in petakbom) {
if (!/^[1-9]|10$/i.test(body) && !prefix) return !0;
if (petakbom[sender].petak[parseInt(body) - 1] === 1) return !0;
if (petakbom[sender].petak[parseInt(body) - 1] === 2) {
petakbom[sender].board[parseInt(body) - 1] = bomb;
petakbom[sender].pick++;
conn.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
petakbom[sender].bomb--;
petakbom[sender].nyawa.pop();

let brd = petakbom[sender].board;
if (petakbom[sender].nyawa.length < 1) {
let bombend = `*GAME TELAH BERAKHIR*\nKamu terkena bomb\n\n ${brd.join("")}\n\n*Terpilih :* ${petakbom[sender].pick}\n*Pengurangan Saldo :* Rp. 100`;
conn.sendMessage(m.chat, {
text: bombend,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `© 2024 | B O M B`,
body: '',
thumbnailUrl: "https://telegra.ph/file/287cbe90fe5263682121d.jpg",
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
conn.sendMessage(m.chat, {react: {text: '😂', key: m.key}})
users.exp -= 100
delete petakbom[sender];
} else await reply(`*PILIH ANGKA*\n\nKamu terkena bomb\n ${brd.join("")}\n\nTerpilih: ${petakbom[sender].pick}\nSisa nyawa: ${petakbom[sender].nyawa}`);
return !0;
}
if (petakbom[sender].petak[parseInt(body) - 1] === 0) {
petakbom[sender].petak[parseInt(body) - 1] = 1;
petakbom[sender].board[parseInt(body) - 1] = pilih;
petakbom[sender].pick++;
petakbom[sender].lolos--;
let brd = petakbom[sender].board;
if (petakbom[sender].lolos < 1) {
await reply(`*KAMU HEBAT ಠ⁠ᴥ⁠ಠ*\n\n${brd.join("")}\n\n*Terpilih :* ${petakbom[sender].pick}\n*Sisa nyawa :* ${petakbom[sender].nyawa}\n*Bomb :* ${petakbom[sender].bomb}\n*Hadiah Saldo :* Rp. 250`);
conn.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
users.hadiah += 250
delete petakbom[sender];
} else reply(`*PILIH ANGKA*\n\n${brd.join("")}\n\nTerpilih : ${petakbom[sender].pick}\nSisa nyawa : ${petakbom[sender].nyawa}\nBomb : ${petakbom[sender].bomb}`)
}
}

// FUNCTION SUIT PVP POLLING BY DARWIN
let roof = Object.values(suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(sender))
if (roof) {
let win = ''
let tie = false
if (sender == roof.p2 && /^(acc(ept)?|y|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(body) && isGroup && roof.status == 'wait') {
if (/^(gamau|nanti|ga(k.)?bisa)/i.test(body)) {
users.exp -= 1000
pokl = `@${roof.p2.split('@')[0]} menolak suit, suit dibatalkan\nDan player dikenakan sanksi -1000 exp karna menolak ajakan pemain`
await conn.sendText(from, pokl, m)
delete suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)

teksbbb = `AYO PILIH SUIT MU`
ggy = `Suit telah dikirimkan ke chat

@${roof.p.split('@')[0]} dan @${roof.p2.split('@')[0]}

Silahkan pilih suit di chat masing"
klik wa.me/${botNumber.split('@')[0]}`
await conn.sendText(from, ggy, m)
if (!roof.pilih) await conn.sendPoll(roof.p, teksbbb, [`batu`,`kertas`,`gunting`, ])
if (!roof.pilih2) await conn.sendPoll(roof.p2, teksbbb, [`batu`,`kertas`,`gunting`, ])
roof.waktu_milih = setTimeout(async() => {
if (!roof.pilih && !roof.pilih2) await conn.sendMessage(from, {text: `Kedua pemain tidak niat main,\nSuit dibatalkan`})
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
users.exp -= 1000
sffp = `@${(roof.pilih ? roof.p2 : roof.p).split('@')[0]} tidak memilih suit, game berakhir\nDan Player dikenakan sanksi -1000 exp karna menolak ajakan pemain`
await conn.sendText(from, sffp, m)
}
delete suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = sender == roof.p
let jwb2 = sender == roof.p2
let g = /.gunting/i
let b = /.batu/i
let k = /.kertas/i
let reg = /^(.gunting|.batu|.kertas)/i
if (jwb && reg.test(body) && !roof.pilih && !isGroup) {
roof.pilih = reg.exec(body.toLowerCase())[0]
roof.text = body
await conn.sendMessage(from, {text: `Kamu telah memilih ${body} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`}, {quoted:m})
if (!roof.pilih2) await conn.sendMessage(roof.p2, {text: '_Lawan sudah memilih_\nSekarang giliran kamu'})
}
if (jwb2 && reg.test(body) && !roof.pilih2 && !isGroup) {
roof.pilih2 = reg.exec(body.toLowerCase())[0]
roof.text2 = body

tyu = `Kamu telah memilih ${body} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`
await conn.sendMessage(from, {text: tyu}, {quoted:m})

if (!roof.pilih) await conn.sendMessage(roof.p, {text: '_Lawan sudah memilih_\nSekarang giliran kamu'})
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
await conn.sendText(roof.asal, `${tie ? '*HASIL SERI*\n\n' : ''}@${roof.p.split('@')[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ' Menang' : ' Kalah'}\n@${roof.p2.split('@')[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ' Menang' : ' Kalah'}${tie ? '' : '\n\nHadiah : '+roof.hadiah+' exp'}`, f1('HASIL SUIT PVP', null))
if (roof.p == win) {
roof.p == win ? global.db.data.users[roof.p].exp += roof.hadiah : global.db.data.users[roof.p].exp -= roof.hadiah
} else if (roof.p2 == win) {
roof.p2 == win ? global.db.data.users[roof.p2].exp += roof.hadiah : global.db.data.users[roof.p2].exp -= roof.hadiah
}
delete suit[roof.id]
}
}

// FUNCTION TICTACTOE BY SURYA
const isTicTacToe = (from, _dir) => {
let status = false
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === from) {
status = true
}
})
return status
}

const getPosTic = (from, _dir) => {
let position = null
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === from) {
position = i
}
})
if (position !== null) {
return position
}
}

const KeisiSemua = (tic) => {
let status = true
for (let i of tic){
if (i !== '❌' && i !== '⭕'){
status = false
}
}
return status
}

const cekIsi = (nomor, tic) => {
let status = false
if (tic[nomor] === '❌' || tic[nomor] === '⭕'){
status = true
}
return status
}

const cekTicTac = (tic) => {
let status = false
if (tic[0] === '❌' && tic[1] === '❌' && tic[2] === '❌' || tic[0] === '⭕' && tic[1]=== '⭕' && tic[2] === '⭕'){
status = true
} else if (tic[3] === '❌' && tic[4] === '❌' && tic[5] === '❌' || tic[3] === '⭕' && tic[4] === '⭕' && tic[5] === '⭕'){
status = true
} else if (tic[6] === '❌' && tic[7] === '❌' && tic[8] === '❌' || tic[6] === '⭕' && tic[7] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[0] === '❌' && tic[3] === '❌' && tic[6] === '❌' || tic[0] === '⭕' && tic[3] === '⭕' && tic[6] === '⭕'){
status = true
} else if (tic[1] === '❌' && tic[4] === '❌' && tic[7] === '❌' || tic[1] === '⭕' && tic[4] === '⭕' && tic[7] === '⭕'){
status = true
} else if (tic[2] === '❌' && tic[5] === '❌' && tic[8] === '❌' || tic[2] === '⭕' && tic[5] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[0] === '❌' && tic[4] === '❌' && tic[8] === '❌' || tic[0] === '⭕' && tic[4] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[2] === '❌' && tic[4] === '❌' && tic[6] === '❌' || tic[2] === '⭕' && tic[4] === '⭕' && tic[6] === '⭕'){
status = true
}
return status 
}

if (isTicTacToe(from, tictactoe)) {
try {
// TicTacToe
if (isTicTacToe(from, tictactoe)){
let nomor = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let posi = tictactoe[from]
let anu = posi.TicTacToe
if (posi.status === null){
if (sender === posi.ditantang){
if (body.toLowerCase() === 'y'){
the = `@${posi.ditantang.split('@')[0]} menerima tantangan

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.penantang.split('@')[0]}`
conn.sendText(from, the, m)

tictactoe[from].status = true
} else if (body.toLowerCase() === 'n'){
users.exp -= 1000
the1 = `@${posi.ditantang.split('@')[0]} menolak, game dibatalkan\nDan Player dikenakan sanksi -1000 exp karna menolak ajakan pemain`
conn.sendText(from, the1, m)
delete tictactoe[from];
}
}
} else if (posi.status === true){
if (sender === posi.penantang){
for (let i of nomor){
if (Number(body) === i){
if (cekIsi(Number(body) - 1, anu)) return reply(`Nomor tersebut sudah terisi`)
tictactoe[from].TicTacToe[Number(body) - 1] = '❌'
if (cekTicTac(tictactoe[from].TicTacToe)){
the2 = `@${posi.penantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} exp
Ingin bermain lagi? ${prefix}tictactoe`
conn.sendText(from, the2, m)
global.db.data.users[posi.penantang].exp += posi.hadiah
global.db.data.users[posi.ditantang].exp -= posi.hadiah
delete tictactoe[from];
} else if (KeisiSemua(anu)) {
the3 = `*HASIL SERI*

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`
conn.sendText(from, the3, m)

delete tictactoe[from];
} else {
the4 = `@${posi.penantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.ditantang.split('@')[0]}`
conn.sendText(from, the4, m)

tictactoe[from].status = false
}
}
}
}
} else if (posi.status === false){
if (sender === posi.ditantang){
for (let i of nomor){
if (Number(body) === i){
if (cekIsi(Number(body) - 1, anu)) return reply(`Nomor tersebut sudah terisi`)
tictactoe[from].TicTacToe[Number(body) - 1] = '⭕' 
if (cekTicTac(anu)){
the5 = `@${posi.ditantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} exp
Ingin bermain lagi? ${prefix}tictactoe`
conn.sendText(from, the5, m)
global.db.data.users[posi.ditantang].exp += posi.hadiah
global.db.data.users[posi.penantang].exp -= posi.hadiah
delete tictactoe[from];
} else if (KeisiSemua(anu)) {
the6 = `Hasil Seri

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`
conn.sendText(from, the6, m)

delete tictactoe[from];
} else {
the7 = `@${posi.ditantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.penantang.split('@')[0]}`
conn.sendText(from, the7, m)

tictactoe[from].status = true
}
}
}
}
}
}
} catch (err){
console.log(chalk.redBright('[ ERROR TICTACTOE ]'), err)
}
}

if (db.data.users[m.sender].exp > 300) {
    try {
        var ppuser = await conn.profilePictureUrl(m.sender, 'image');
    } catch (err) {
        ppuser = 'https://files.catbox.moe/nwvkbt.png';
    }

    let ppnyauser = ppuser;
    let background = "https://cloudkuimages.guru/uploads/images/682c488b9acb5.jpg";
    let avatar = ppnyauser;

    db.data.users[m.sender].exp = 0;
    db.data.users[m.sender].level += 1;
    await sleep(1000);

    const options = {
        backgroundURL: background,
        avatarURL: avatar,
        fromLevel: `${db.data.users[m.sender].level - 1}`,
        toLevel: `${db.data.users[m.sender].level}`,
        name: pushname // <- diganti jadi pushname
    };

    const buffz = await levelUp(options);

            let caption = `*🎉🎊 SELAMAT!!! 🎊🎉*

📈 Level Naik dari *${db.data.users[m.sender].level - 1}* ➜ *${db.data.users[m.sender].level}* 🎉

─────────────────────
🔹 *Before Level:* ${db.data.users[m.sender].level - 1}
🔸 *After Level:* ${db.data.users[m.sender].level}
🕒 *Tanggal:* ${new Date().toLocaleString("id-ID")}
─────────────────────

🚀 *Kamu semakin hebat!*
💬 Teruslah berkomunikasi dengan bot, semakin sering interaksi, semakin cepat naik level!
✨ *Tetap semangat dan nikmati fitur-fitur seru lainnya!*
`;

    await conn.sendMessage(m.chat, {
        image: buffz,
        caption: caption
    }, {
        quoted: m
    });
}

function getRandomFile(ext) {
return `${Math.floor(Math.random() * 10000)}${ext}`;
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

function monospace(string) {
return '```' + string + '```'
}

function randomNomor(min, max = null){
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}

function generateRandomPassword() {
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
const length = 10;
let password = '';
for (let i = 0; i < length; i++) {
const randomIndex = Math.floor(Math.random() * characters.length);
password += characters[randomIndex];
}
return password;
}

function generateRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function toIDR(x) {
x = x.toString()
var pattern = /(-?\d+)(\d{3})/
while (pattern.test(x))
x = x.replace(pattern, "$1.$2")
return x
}

const prefixOperator = {
  telkomsel: ['0811', '0812', '0813', '0821', '0822', '0852', '0853', '0823'],
  indosat: ['0814', '0815', '0816', '0855', '0856', '0857', '0858'],
  xl: ['0817', '0818', '0819', '0859', '0877', '0878'],
  axis: ['0838', '0831', '0832', '0833'],
  tri: ['0895', '0896', '0897', '0898', '0899'],
  smartfren: ['0881', '0882', '0883', '0884', '0885', '0886', '0887', '0888', '0889'],
  byu: ['0851']
};

function detectOperator(nomor) {
  const prefix = nomor.slice(0, 4);
  for (let [operator, daftar] of Object.entries(prefixOperator)) {
    if (daftar.includes(prefix)) {
      return operator.charAt(0).toUpperCase() + operator.slice(1);
    }
  }
  return 'Tidak diketahui';
}

async function dellCase(filePath, caseNameToRemove) {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    console.error('Terjadi kesalahan:', err);
                    return;
                }

                const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
                const modifiedData = data.replace(regex, '');

                fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
                    if (err) {
                        console.error('Terjadi kesalahan saat menulis file:', err);
                        return;
                    }

                    console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
                });
            });
        }

const statsFolder = path.join(__dirname, './total')
const statsFile = path.join(statsFolder, 'groupStats.json')
if (!fs.existsSync(statsFolder)) fs.mkdirSync(statsFolder)
if (!fs.existsSync(statsFile)) fs.writeFileSync(statsFile, '{}')
function loadStats() {
  return JSON.parse(fs.readFileSync(statsFile))
}
function saveStats(data) {
  fs.writeFileSync(statsFile, JSON.stringify(data, null, 2))
}
function updateStats(chatId, senderId) {
  const data = loadStats()
  const today = new Date().toISOString().slice(0, 10)
  if (!data[chatId]) data[chatId] = {}
  if (!data[chatId][today]) data[chatId][today] = {}
  if (!data[chatId][today][senderId]) data[chatId][today][senderId] = 0
  data[chatId][today][senderId]++
  saveStats(data)
}
function getTodayStats(chatId) {
  const data = loadStats()
  const today = new Date().toISOString().slice(0, 10)
  return data[chatId]?.[today] || {}
}
updateStats(m.chat, m.sender)

        const totalFitur = () =>{
            var mytext = fs.readFileSync("./main.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
        
if (global.autoread) {
    // Membaca pesan
    conn.readMessages([m.key]);

    // Mengecek apakah pesan datang dari grup
    if (m.key.remoteJid.endsWith('@g.us')) {
        // Mengirim status online jika pesan datang dari grup
        conn.sendPresenceUpdate('available', m.key.remoteJid);
    } else {
        // Mengirim status online jika pesan datang dari kontak pribadi
        conn.sendPresenceUpdate('available', m.key.remoteJid);
    }
}

        if (isCmd && autotyping) {
if (command) { conn.readMessages([m.key])}
conn.sendPresenceUpdate('composing', from)
}

//const lastGreet = global.lastGreet || (global.lastGreet = {});
// Ambil daftar JID owner
//const ownerJidList = global.owner.map(x => (typeof x === 'object' ? x[0] : x)).map(n => `${n}@s.whatsapp.net`);
//if (isGroup && ownerJidList.includes(m.sender)) {
//  const now = Date.now();
//  const key = `${m.chat}_${m.sender}`;
//  const lastTime = lastGreet[key];
//  if (lastTime !== undefined && now - lastTime > 30 * 60 * 1000) {
  //  conn.sendMessage(m.chat, {
 //     text: 'Halo Owner, selamat datang kembali 👑',
    //}, { quoted: m }); // pakai reply ke pesan owner
  //}
  // Update waktu terakhir muncul owner
  //lastGreet[key] = now;
//}
const lastGreet = global.lastGreet || (global.lastGreet = {});
const ownerJidList = global.owner.map(x => (typeof x === 'object' ? x[0] : x)).map(n => `${n}@s.whatsapp.net`);

if (isGroup && ownerJidList.includes(m.sender)) {
  const now = Date.now();
  const key = `${m.chat}_${m.sender}`;
  const lastTime = lastGreet[key];

  if (lastTime === undefined || now - lastTime > 60 * 1000) {
    await conn.sendMessage(m.chat, {
      text: 'halo ownerku apa kabar?',
    }, { quoted: m });
  }

  lastGreet[key] = now;
}

// Deteksi respon owner
if (ownerJidList.includes(m.sender)) {
  const text = (m.text || "").toLowerCase();

  const positiveReplies = [
    "baik", "iya baik", "alhamdulillah baik", "alhamdulilah baik", "alhamdulilah", "alhamdulillah"
  ];

  const negativeReplies = [
    "ga baik", "tidak baik", "kurang sehat", "sakit", "lagi sakit", "gak sehat"
  ];

  // Jika balasan owner termasuk positif
  if (positiveReplies.some(p => text.includes(p))) {
    await conn.sendMessage(m.chat, {
      text: "Alhamdulilah deh hehe, aku ikut seneng dengernya",
    }, { quoted: m });
  }

  // Jika balasan owner termasuk negatif
  if (negativeReplies.some(p => text.includes(p))) {
    await conn.sendMessage(m.chat, {
      text: "Duh aku jadi ikut sedih...",
    }, { quoted: m });
  }
}

global.botWarnings = global.botWarnings || {}
global.antibotGroups = global.antibotGroups || {}
function getTextFromMsg(msg) {
  try {
    return (
      msg?.conversation ||
      msg?.extendedTextMessage?.text ||
      msg?.imageMessage?.caption ||
      msg?.videoMessage?.caption ||
      msg?.documentMessage?.caption ||
      msg?.buttonsMessage?.contentText ||
      msg?.templateMessage?.hydratedTemplate?.hydratedContentText ||
      msg?.listMessage?.description ||
      msg?.viewOnceMessage?.message?.conversation ||
      ''
    ).toLowerCase()
  } catch {
    return ''
  }
}

if (!isGroup && !isCreator && global.antibotGroups[m.chat]) {
  const groupId = m.chat
  const sender = m.sender
  const pushName = m.pushName?.toLowerCase() || ''
  const textMsg = getTextFromMsg(m.message)
  const ctx =
    m.message?.extendedTextMessage?.contextInfo ||
        m.message?.imageMessage?.contextInfo ||
    m.message?.videoMessage?.contextInfo ||
    m.message?.documentMessage?.contextInfo ||
    m.message?.buttonsMessage?.contextInfo ||
    m.message?.templateMessage?.contextInfo ||
    {}

  // Deteksi pesan seperti dari bot otomatis
  const isPossibleBot =
    /hallo pengguna|silakan tekan tombol|permintaan anda sedang diproses/i.test(textMsg) ||
    /hello user|please wait|click the button|your request is being processed/i.test(textMsg) ||
    ctx.externalAdReply != null ||
    ctx.forwardedNewsletterMessageInfo != null

  if (isPossibleBot) {
    await conn.sendMessage(groupId, {
      text: `*[ ⚠️ Anti Bot ]*\nPesan mencurigakan dari @${sender.split('@')[0]} telah dihapus.`,
      mentions: [sender]
    })
    await conn.sendMessage(groupId, {
      delete: {
        remoteJid: groupId,
        fromMe: false,
        id: m.key.id,
        participant: m.key.participant || sender
      }
    }).catch(() =>
      conn.sendMessage(groupId, {
        text: '⚠️ Gagal menghapus pesan.'
      })
    )
    return
  }
}


   async function tiktokSearchVideo(query) {
  return new Promise(async (resolve, reject) => {
    axios("https://tikwm.com/api/feed/search", {
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        cookie: "current_language=en",
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
      },
      data: {
        keywords: query,
        count: 12,
        cursor: 0,
        web: 1,
        hd: 1,
      },
      method: "POST",
    }).then((res) => {
      resolve(res.data.data);
    });
  });
}

async function downloadFacebook(url) {
    try {
        const form = new URLSearchParams();
        form.append("q", url);
        form.append("vt", "home");

        const { data } = await axios.post('https://yt5s.io/api/ajaxSearch', form, {
            headers: {
                "Accept": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });

        if (data.status !== "ok") throw new Error("Gagal mengambil data.");

        const $ = cheerio.load(data.data);
        const thumb = $('img').attr("src");
        let links = [];

        $('table tbody tr').each((_, el) => {
            const quality = $(el).find('.video-quality').text().trim();
            const link = $(el).find('a.download-link-fb').attr("href");
            if (quality && link) links.push({ quality, link });
        });

        if (links.length === 0) throw new Error("Tidak ada video yang dapat diunduh.");

        return { thumb, video: links[0].link };
    } catch (error) {
        return { error: error.message };
    }
}

function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}

function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}

let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
const hariini = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " jam " + minutes + " menit " + seconds + " detik"
}

function msToDate(ms) {
		temp = ms
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" Hari "+hours+" Jam "+ minutes + " Menit";
		// +minutes+":"+sec;
  }

// Sayying time
const timee = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(timee < "23:59:00"){
var waktuucapan = 'Selamat Malam 🌃'
}
if(timee < "19:00:00"){
var waktuucapan = 'Selamat Petang 🌆'
}
if(timee < "18:00:00"){
var waktuucapan = 'Selamat Sore 🌅'
}
if(timee < "15:00:00"){
var waktuucapan = 'Selamat Siang 🏙'
}
if(timee < "10:00:00"){
var waktuucapan = 'Selamat Pagi 🌄'
}
if(timee < "05:00:00"){
var waktuucapan = 'Selamat Subuh 🌉'
}
if(timee < "03:00:00"){
var waktuucapan = 'Tengah Malam 🌌'
}

const banchatPath = './database/banchat.json'
let banchat = JSON.parse(fs.readFileSync(banchatPath))
if (banchat.includes(m.chat)) return

            function handleFeatureToggle(feature, command) {
    if (!isGroup) return reply(mess.group);
    if (!isBotAdmins) return reply(mess.botAdmin);
    if (!isAdmins && !isCreator) return reply(mess.admin);
    if (args.length < 1) return reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan');

    if (args[0] === 'on') {
        db.data.chats[from][feature] = true;
        return reply(`${command} is enabled`);
    } else if (args[0] === 'off') {
        db.data.chats[from][feature] = false;
        return reply(`${command} is disabled`);
    }
    }
    
    async function listbut2(m, teks, listnye, qtext) {
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 999999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363419803716102@newsletter",
newsletterName: `— DORAEMONXUMARU AI WhatsApp Bot`,
serverMessageId: 145
}
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Bot By ${ownername}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: ``,
thumbnailUrl: "",
gifPlayback: true,
subtitle: "",
hasMediaAttachment: true,
...(await prepareWAMessageMedia({ image: { url: 'https://i.ibb.co/gFLC3NJh/bukan-aku-yang-hebat-melainkan-ada-doa-mama-yang-kuat-20250620-100510-0000.jpg' } }, { upload: conn.waUploadToServer })),
}),
gifPlayback: true,
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listnye)
}],
}), })}
}}, {quoted: qtext})
await conn.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}


   async function generateAndSendjuara1(recipientName, achievementText) {
      const {
        createCanvas,
        loadImage
      } = require("canvas");
      const width = 1000;
      const height = 700;
      const canvas = createCanvas(width, height);
      const ctx = canvas.getContext("2d");
      const backgroundUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMXesWUGxIerARGsveu1mOdGdXM0icRcBLtSA-L5UNSdUaRjEYRez9ngnc&s=10";
      try {
        const background = await loadImage(backgroundUrl);
        ctx.drawImage(background, 0, 0, width, height);
      } catch (error) {
        console.error("Error loading background image:", error);
        ctx.fillStyle = "#f8f8f8";
        ctx.fillRect(0, 0, width, height);
      }
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, "rgba(255,255,255,0.3)");
      gradient.addColorStop(1, "rgba(255,255,255,0.7)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      function drawRoundedRect(ctx, x, y, width, height, radius) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
      }
      ctx.lineWidth = 8;
      const borderGradient = ctx.createLinearGradient(0, 0, width, height);
      borderGradient.addColorStop(0, "#ff7f50");
      borderGradient.addColorStop(1, "#ff1493");
      ctx.strokeStyle = borderGradient;
      drawRoundedRect(ctx, 10, 10, width - 20, height - 20, 30);
      ctx.stroke();
      ctx.shadowColor = "rgba(0,0,0,0.3)";
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      ctx.fillStyle = "#333";
      ctx.font = "bold 50px Georgia";
      ctx.textAlign = "center";
      ctx.fillText("SERTIFIKAT", width / 2, 120);
      ctx.shadowColor = "transparent";
      ctx.font = "italic 30px Georgia";
      ctx.fillStyle = "#555";
      ctx.fillText("DIBERIKAN KEPADA:", width / 2, 180);
      ctx.font = "bold 40px Georgia";
      ctx.fillStyle = "#000";
      ctx.fillText(recipientName, width / 2, 260);
      ctx.font = "30px Georgia";
      ctx.fillStyle = "#333";
      ctx.fillText(achievementText, width / 2, 330);
      ctx.strokeStyle = "#ff1493";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(width / 4, 360);
      ctx.lineTo(width * 3 / 4, 360);
      ctx.stroke();
      const today = new Date();
      ctx.font = "20px Georgia";
      ctx.textAlign = "right";
      ctx.fillStyle = "#000";
      ctx.fillText(`Tanggal: ${today.toLocaleDateString()}`, width - 40, height - 40);
      ctx.font = "24px Georgia";
      ctx.textAlign = "left";
      ctx.fillText("#bot by indra", 50, height - 50);
      const buffer = canvas.toBuffer("image/png");
      conn.sendMessage(m.chat, {
        image: buffer,
        caption: `Sukses Membuat Sertifikat ${command} Dengan Nama ${recipientName}`
      }, {
        quoted: m
      });
    }

   async function generateAndSendCertificate(recipientName, achievementText) {
      const {
        createCanvas,
        loadImage
      } = require("canvas");
      const width = 1000;
      const height = 700;
      const canvas = createCanvas(width, height);
      const ctx = canvas.getContext("2d");
      const backgroundUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMXesWUGxIerARGsveu1mOdGdXM0icRcBLtSA-L5UNSdUaRjEYRez9ngnc&s=10";
      try {
        const background = await loadImage(backgroundUrl);
        ctx.drawImage(background, 0, 0, width, height);
      } catch (error) {
        console.error("Error loading background image:", error);
        ctx.fillStyle = "#f8f8f8";
        ctx.fillRect(0, 0, width, height);
      }
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, "rgba(255,255,255,0.3)");
      gradient.addColorStop(1, "rgba(255,255,255,0.7)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      function drawRoundedRect(ctx, x, y, width, height, radius) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
      }
      ctx.lineWidth = 8;
      const borderGradient = ctx.createLinearGradient(0, 0, width, height);
      borderGradient.addColorStop(0, "#ff7f50");
      borderGradient.addColorStop(1, "#ff1493");
      ctx.strokeStyle = borderGradient;
      drawRoundedRect(ctx, 10, 10, width - 20, height - 20, 30);
      ctx.stroke();
      ctx.shadowColor = "rgba(0,0,0,0.3)";
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      ctx.fillStyle = "#333";
      ctx.font = "bold 50px Georgia";
      ctx.textAlign = "center";
      ctx.fillText("SERTIFIKAT SIFAT", width / 2, 120);
      ctx.shadowColor = "transparent";
      ctx.font = "italic 30px Georgia";
      ctx.fillStyle = "#555";
      ctx.fillText("Presented To", width / 2, 180);
      ctx.font = "bold 40px Georgia";
      ctx.fillStyle = "#000";
      ctx.fillText(recipientName, width / 2, 260);
      ctx.font = "30px Georgia";
      ctx.fillStyle = "#333";
      ctx.fillText(achievementText, width / 2, 330);
      ctx.strokeStyle = "#ff1493";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(width / 4, 360);
      ctx.lineTo(width * 3 / 4, 360);
      ctx.stroke();
      const today = new Date();
      ctx.font = "20px Georgia";
      ctx.textAlign = "right";
      ctx.fillStyle = "#000";
      ctx.fillText(`Tanggal: ${today.toLocaleDateString()}`, width - 40, height - 40);
      ctx.font = "24px Georgia";
      ctx.textAlign = "left";
      ctx.fillText("#Fun", 50, height - 50);
      const buffer = canvas.toBuffer("image/png");
      conn.sendMessage(m.chat, {
        image: buffer,
        caption: `Sukses Membuat Sertifikat ${command} Dengan Nama ${recipientName}`
      }, {
        quoted: m
      });
    }
    
    async function CatBox(path) {
  const data = new FormData()
  data.append('reqtype', 'fileupload')
  data.append('userhash', '')
  data.append('fileToUpload', fs.createReadStream(path))
  const config = {
    method: 'POST',
    url: 'https://catbox.moe/user/api.php',
    headers: {
      ...data.getHeaders(),
      'User-Agent': 'Mozilla/5.0 (Android 10; Mobile; rv:131.0) Gecko/131.0 Firefox/131.0',
    },
    data: data
  }
  const api = await axios.request(config)
  return api.data
}

async function UploadFileUgu (input) {
	return new Promise (async (resolve, reject) => {
			const form = new BodyForm();
			form.append("files[]", fs.createReadStream(input))
			await axios({
				url: "https://uguu.se/upload.php",
				method: "POST",
				headers: {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
					...form.getHeaders()
				},
				data: form
			}).then((data) => {
				resolve(data.data.files[0])
			}).catch((err) => reject(err))
	})
}

async function encode(text) {
   let d = new FormData();
   d.append("input", text);
   d.append("charset", "UTF-8");
   d.append("separator", "lf");
   d.append("newlines", "on");
   let headers = {
      ...d.getHeaders()
   }
   let { data } = await axios.post("https://www.base64encode.org/", d, { headers });
   let $ = cheerio.load(data)
   return {
     result: $("#output").text().trim()
   }
}

async function decode(text) {
   let d = new FormData();
   d.append("input", text);
   d.append("charset", "UTF-8");
   let headers = {
      ...d.getHeaders()
   }
   let { data } = await axios.post("https://www.base64decode.org/", d, { headers });
   let $ = cheerio.load(data)
   return {
     result: $("#output").text().trim()
   }
}

const SESSION_FILE = "./session/ai_sessions.json";

let sessions = fs.existsSync(SESSION_FILE) ? JSON.parse(fs.readFileSync(SESSION_FILE)) : {};

function saveSession() {
    fs.writeFileSync(SESSION_FILE, JSON.stringify(sessions, null, 2));
}

async function Uguu(buffer, filename) {
  const form = new FormData()
  form.append('files[]', buffer, { filename })
 
  const { data } = await axios.post('https://uguu.se/upload.php', form, {
    headers: form.getHeaders(),
  })
 
  if (data.files && data.files[0]) {
    return data.files[0].url
  } else {
    throw new Error('Upload gagal.')
  }
}

const dirPath = './database'
const logPath = `${dirPath}/command-logs.json`
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath)
}
if (!fs.existsSync(logPath)) {
  fs.writeFileSync(logPath, JSON.stringify([]))
}
function logCommand(cmd) {
  let logs = JSON.parse(fs.readFileSync(logPath))
  logs.push({ cmd, time: Date.now() })
  fs.writeFileSync(logPath, JSON.stringify(logs))
}
if (command) logCommand(command)
                         
  const pluginsLoader = async (directory) => {
      let plugins = [];
      const folders = fs.readdirSync(directory);
      folders.forEach((file) => {
        const filePath = path.join(directory, file);
        if (filePath.endsWith(".js")) {
          try {
            const resolvedPath = require.resolve(filePath);
            if (require.cache[resolvedPath]) {
              delete require.cache[resolvedPath];
            }
            const plugin = require(filePath);
            plugins.push(plugin);
          } catch (error) {
            console.log(`Error loading plugin at ${filePath}:`, error);
          }
        }
      });
      return plugins;
    };

    let pluginsDisable = true;
    const plugins = await pluginsLoader(path.resolve(__dirname, "plugins"));
    const kyykzy = { conn, prefix, command, reply, text, isCh, isGroup: m.isGroup, isCreator, example, sender, senderNumber, pushname, args, runtime, formatp, tanggal, sleep, fetchJson, capital, getBuffer, isBotAdmins, isAdmins, isCmd, mime, listbut2, isRegistered, daftar, qtext, isPremium, randomNomor, monospace, pickRandom, getRandomFile };
    for (let plugin of plugins) {
      if (plugin.command.find((e) => e == command.toLowerCase())) {
        pluginsDisable = false;
        if (typeof plugin !== "function") return;
        await plugin(m, kyykzy);
      }
    }
    if (!pluginsDisable) return;

// ───────────────────────────────────────────────────────────────────────────────乂 🥀 ALL FITUR ───────────────────────────────────────────────────────────────乂 \\
switch (command) {
case 'xnxxdl': {
        if (!isCreator && isPremium) return reply(mess.premium);
  if (!text || !text.includes('xnxx.com/video')) {
    return reply(`❗ Masukkan link XNXX yang valid.\n\nContoh:\n${prefix + command} https://www.xnxx.com/video-abc123`);
  }

  try {
    const axios = require('axios');
    const res = await axios.get(`https://api.vreden.my.id/api/xnxxdl?query=${encodeURIComponent(text)}`);
    const data = res.data?.result?.result;

    if (!data?.title || !data?.files) {
      return reply('❌ Gagal mengambil data. Pastikan link valid.');
    }

    const durasiDetik = parseInt(data.duration || 0);
    const menit = Math.floor(durasiDetik / 60);
    const detik = durasiDetik % 60;
    const durasi = `${menit}m ${detik}s`;

    const teks = `🔞 *XNXX Video Downloader*

📌 *Judul:* ${data.title}
⏱️ *Durasi:* ${durasi}
🎞️ *Kualitas:* 360p - 1080p
🌐 *Source:* ${data.URL}

📥 *Link Download:*
▫️ Low: ${data.files.low}
▫️ High: ${data.files.high}`;

await conn.sendMessage(m.chat, {
  video: { url: data.files.high },
  caption: teks
}, { quoted: m });

  } catch (err) {
    console.error(err);
    reply('❌ Gagal mengambil data dari API.');
  }
}
break;
case 'xnxxsearch': {
        if (!isCreator && isPremium) return reply(mess.premium);
  if (!text) return reply(`🔎 Masukkan kata kunci untuk mencari.\nContoh: ${prefix + command} jepang`);

  try {
    const axios = require("axios");
    const res = await axios.get(`https://api.vreden.my.id/api/xnxxsearch?query=${encodeURIComponent(text)}`);
    const data = res.data;

    if (!data.status || !data.result || data.result.length === 0) {
      return reply(`❌ Tidak ditemukan hasil untuk: *${text}*`);
    }

    let teks = `🔞 *HASIL PENCARIAN XNXX*\n\n📝 *Keyword:* ${text}\n📦 *Total:* ${data.result.length} hasil\n\n`;
    
    const hasil = data.result.slice(0, 10); // batasi ke 10 hasil pertama

    hasil.forEach((v, i) => {
      teks += `📌 *${i + 1}. ${v.title}*\n`;
      teks += `ℹ️ ${v.info.replace(/\n/g, " | ").trim()}\n`;
      teks += `🔗 ${v.link}\n\n`;
    });

    reply(teks.trim());
  } catch (err) {
    console.error(err);
    reply('❌ Gagal mengambil data. Pastikan server API aktif.');
  }
}
break;
case 'riwayattabungan':
        case 'riwayat':{
  if (!isCreator) return reply("Fitur khusus owner.");
const fileTabungan = path.join(__dirname, 'data', 'tabungan.json');

// Buat folder data jika belum ada
if (!fs.existsSync(path.join(__dirname, 'data'))) {
  fs.mkdirSync(path.join(__dirname, 'data'));
}

// Load data tabungan
global.tabunganOwner = fs.existsSync(fileTabungan)
  ? JSON.parse(fs.readFileSync(fileTabungan))
  : { saldo: 0, riwayat: [] };

// Simpan data tabungan
function saveTabunganOwner() {
  fs.writeFileSync(fileTabungan, JSON.stringify(global.tabunganOwner, null, 2));
}

// Format tanggal
function formatTanggal() {
  const now = new Date();
  const tgl = now.getDate().toString().padStart(2, '0');
  const bln = (now.getMonth() + 1).toString().padStart(2, '0');
  const thn = now.getFullYear();
  const jam = now.getHours().toString().padStart(2, '0');
  const menit = now.getMinutes().toString().padStart(2, '0');
  return `${tgl}-${bln}-${thn} ${jam}:${menit}`;
}

// Format rupiah
function formatRupiah(angka) {
  return 'Rp' + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
  const list = global.tabunganOwner.riwayat.slice(-10).reverse().map((item, i) => 
    `*${i + 1}. ${item.tipe}* ${formatRupiah(item.jumlah)}\n📝 ${item.keterangan}\n📅 ${item.tanggal}`
  ).join('\n\n');

  reply(`📋 Riwayat Tabungan Terakhir:\n\n${list || 'Belum ada data.'}`);
}
          break;
case 'tabung': 
        case 'nabung': {
  if (!isCreator) return;
  if (!text) return reply('Masukkan jumlah dan keterangan. Contoh: *.tabung 50000|nabung dari gaji*');
const fileTabungan = path.join(__dirname, 'data', 'tabungan.json');

// Buat folder data jika belum ada
if (!fs.existsSync(path.join(__dirname, 'data'))) {
  fs.mkdirSync(path.join(__dirname, 'data'));
}

// Load data tabungan
global.tabunganOwner = fs.existsSync(fileTabungan)
  ? JSON.parse(fs.readFileSync(fileTabungan))
  : { saldo: 0, riwayat: [] };

// Simpan data tabungan
function saveTabunganOwner() {
  fs.writeFileSync(fileTabungan, JSON.stringify(global.tabunganOwner, null, 2));
}

// Format tanggal
function formatTanggal() {
  const now = new Date();
  const tgl = now.getDate().toString().padStart(2, '0');
  const bln = (now.getMonth() + 1).toString().padStart(2, '0');
  const thn = now.getFullYear();
  const jam = now.getHours().toString().padStart(2, '0');
  const menit = now.getMinutes().toString().padStart(2, '0');
  return `${tgl}-${bln}-${thn} ${jam}:${menit}`;
}

// Format rupiah
function formatRupiah(angka) {
  return 'Rp' + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
  const [jumlahStr, keterangan] = text.split('|').map(s => s.trim());
  const jumlah = parseInt(jumlahStr);

  if (isNaN(jumlah) || jumlah <= 0) return reply('Jumlah tidak valid.');
if (!Array.isArray(tabunganOwner.riwayat)) tabunganOwner.riwayat = [];

  tabunganOwner.saldo += jumlah;
  tabunganOwner.riwayat.push({
    tipe: 'tabungan',
    jumlah,
    tanggal: formatTanggal(),
    keterangan: keterangan || 'Tanpa keterangan'
  });
  saveTabunganOwner();

  reply(`💰 Menabung: Rp${jumlah.toLocaleString()}\n📝 Keterangan: ${keterangan || '-'}\n📦 Total Sekarang: Rp${tabunganOwner.saldo.toLocaleString()}`);
}
break;
        case 'bcolmek':
case 'bocilcolmek':{
  if (!isCreator && isPremium) return reply('yahaha dh sange ya lu wkwk, ini buat owner dan user premium aja');

  const bcolmek = [
'https://e.top4top.io/m_34627cfoj1.mp4',
'https://f.top4top.io/m_3462v8kfg2.mp4',
'https://h.top4top.io/m_3462n6bsv3.mp4',
'https://i.top4top.io/m_3462uw5034.mp4',
'https://j.top4top.io/m_3462kwri75.mp4',
'https://k.top4top.io/m_34621fx9z6.mp4',
'https://l.top4top.io/m_3462719pv7.mp4',
'https://a.top4top.io/m_34624jomm8.mp4',
'https://b.top4top.io/m_3462kgwtq9.mp4',
'https://c.top4top.io/m_3462fd7ve10.mp4',
'https://j.top4top.io/m_34623pmvk1.mp4',
'https://k.top4top.io/m_34625wfyh2.mp4',
'https://l.top4top.io/m_3462nc3c53.mp4',
'https://a.top4top.io/m_3462lyzt24.mp4',
'https://b.top4top.io/m_3462agc1i5.mp4',
'https://c.top4top.io/m_3462qshlc6.mp4',
'https://d.top4top.io/m_3462z4s4h7.mp4',
'https://e.top4top.io/m_34626jxw68.mp4',
'https://f.top4top.io/m_346275c4q9.mp4',
'https://g.top4top.io/m_3462r2kml10.mp4',
'https://d.top4top.io/m_3462djl2n1.mp4',
'https://e.top4top.io/m_3462ln5a12.mp4',
'https://g.top4top.io/m_3462t5rbm3.mp4',
'https://h.top4top.io/m_3462enquj4.mp4',
'https://i.top4top.io/m_3462qe3bc5.mp4',
'https://j.top4top.io/m_3462t06br6.mp4',
"https://k.top4top.io/m_3462yql1h7.mp4",
"https://b.top4top.io/m_3462q2dge9.mp4",
"https://a.top4top.io/m_3462g3uss8.mp4",
"https://c.top4top.io/m_3462e93kz10.mp4",
"https://i.top4top.io/m_3462fh3v11.mp4",
"https://j.top4top.io/m_3462g77wg2.mp4",
"https://k.top4top.io/m_3462736y53.mp4",
"https://b.top4top.io/m_3462uzwfn6.mp4",
"https://a.top4top.io/m_3462tult45.mp4",
"https://l.top4top.io/m_346200ch34.mp4",
  ];

  const randomLink = bcolmek[Math.floor(Math.random() * bcolmek.length)];

  conn.sendMessage(m.chat, {
    video: { url: randomLink },
    caption: 'dah sono coli'
  }, { quoted: m });
}
break;
        case 'squirt': {
  if (!isCreator && isPremium) return reply('Khusus owner, bang.');

  const squirt = [
      "https://e.top4top.io/m_34593e4pg1.mp4",
"https://f.top4top.io/m_3459zyzoo2.mp4",
"https://g.top4top.io/m_3459a59w33.mp4",
"https://h.top4top.io/m_3459pshrq4.mp4",
"https://i.top4top.io/m_3459a8oza5.mp4",
"https://j.top4top.io/m_3459yve306.mp4",
"https://k.top4top.io/m_345938ulh7.mp4",
"https://l.top4top.io/m_3459vvnar8.mp4",
"https://a.top4top.io/m_345917hgq9.mp4",
"https://b.top4top.io/m_3459jsslo10.mp4",
"https://a.top4top.io/m_3459nea0h1.mp4",
"https://b.top4top.io/m_3459995j42.mp4",
"https://c.top4top.io/m_34592c6gw3.mp4",
"https://d.top4top.io/m_3459p7bgk4.mp4",
"https://e.top4top.io/m_3459ughe05.mp4",
"https://f.top4top.io/m_3459lpxdl6.mp4",
"https://g.top4top.io/m_345949rld7.mp4",
"https://h.top4top.io/m_34590a0ru8.mp4",
"https://i.top4top.io/m_3459qh48v9.mp4",
"https://j.top4top.io/m_3459avm6o10.mp4",
"https://c.top4top.io/m_3459g550w1.mp4",
"https://d.top4top.io/m_3459rsrka2.mp4",
"https://e.top4top.io/m_3459lbxzo3.mp4",
"https://f.top4top.io/m_3459ojncq4.mp4",
"https://g.top4top.io/m_3459fw1375.mp4",
"https://h.top4top.io/m_34594hxf66.mp4",
"https://i.top4top.io/m_3459ai05y7.mp4",
"https://j.top4top.io/m_3459qh9f78.mp4",
"https://k.top4top.io/m_3459a35us9.mp4",
"https://a.top4top.io/m_3459rb3bp10.mp4",
"https://e.top4top.io/m_3459cdjkd1.mp4",
"https://f.top4top.io/m_3459gt1ox2.mp4",
"https://g.top4top.io/m_34591h9a83.mp4",
"https://h.top4top.io/m_3459vdjyd4.mp4",
"https://i.top4top.io/m_34598embh5.mp4",
"https://j.top4top.io/m_3459v039x6.mp4",
"https://k.top4top.io/m_3459xdbus7.mp4",
"https://l.top4top.io/m_3459nvj038.mp4",
"https://a.top4top.io/m_3459elsuf9.mp4",
"https://b.top4top.io/m_3459tnrk510.mp4"
  ];

  const randomLink = squirt[Math.floor(Math.random() * squirt.length)];

  conn.sendMessage(m.chat, {
    video: { url: randomLink },
    caption: 'dah sono coli'
  }, { quoted: m });
}
break;

case 'totaltabungan': {
  if (!isCreator) return;
    const fileTabungan = path.join(__dirname, 'data', 'tabungan.json');
    
// Buat folder data jika belum ada
if (!fs.existsSync(path.join(__dirname, 'data'))) {
  fs.mkdirSync(path.join(__dirname, 'data'));
}

// Load data tabungan
global.tabunganOwner = fs.existsSync(fileTabungan)
  ? JSON.parse(fs.readFileSync(fileTabungan))
  : { saldo: 0, riwayat: [] };

// Simpan data tabungan
function saveTabunganOwner() {
  fs.writeFileSync(fileTabungan, JSON.stringify(global.tabunganOwner, null, 2));
}

// Format tanggal
function formatTanggal() {
  const now = new Date();
  const tgl = now.getDate().toString().padStart(2, '0');
  const bln = (now.getMonth() + 1).toString().padStart(2, '0');
  const thn = now.getFullYear();
  const jam = now.getHours().toString().padStart(2, '0');
  const menit = now.getMinutes().toString().padStart(2, '0');
  return `${tgl}-${bln}-${thn} ${jam}:${menit}`;
}

// Format rupiah
function formatRupiah(angka) {
  return 'Rp' + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
  let riwayat = (tabunganOwner && Array.isArray(tabunganOwner.riwayat)) ? tabunganOwner.riwayat : [];

let log = riwayat.slice(-5).reverse().map((item, i) => {
  let ket = item.keterangan ? `📝 ${item.keterangan}` : '';
  return `${i + 1}. [${item.tipe.toUpperCase()}] Rp${item.jumlah.toLocaleString()} - ${item.tanggal}${ket ? `\n    ${ket}` : ''}`;
}).join('\n');

if (!log) log = 'Belum ada riwayat transaksi.';

reply(`📦 Total Tabungan Saat Ini: Rp${tabunganOwner?.saldo?.toLocaleString() || 0}\n\n🧾 Riwayat Terakhir:\n${log}`);
}
break;
case 'ambil': 
        case 'pengeluaran':
        case 'ambiltabungan':{
  if (!isCreator) return;
  if (!text) return reply('Masukkan jumlah dan keterangan. Contoh: *.ambil 25000|jajan*');
            const fileTabungan = path.join(__dirname, 'data', 'tabungan.json');
// Buat folder data jika belum ada
if (!fs.existsSync(path.join(__dirname, 'data'))) {
  fs.mkdirSync(path.join(__dirname, 'data'));
}

// Load data tabungan
global.tabunganOwner = fs.existsSync(fileTabungan)
  ? JSON.parse(fs.readFileSync(fileTabungan))
  : { saldo: 0, riwayat: [] };

// Simpan data tabungan
function saveTabunganOwner() {
  fs.writeFileSync(fileTabungan, JSON.stringify(global.tabunganOwner, null, 2));
}

// Format tanggal
function formatTanggal() {
  const now = new Date();
  const tgl = now.getDate().toString().padStart(2, '0');
  const bln = (now.getMonth() + 1).toString().padStart(2, '0');
  const thn = now.getFullYear();
  const jam = now.getHours().toString().padStart(2, '0');
  const menit = now.getMinutes().toString().padStart(2, '0');
  return `${tgl}-${bln}-${thn} ${jam}:${menit}`;
}

// Format rupiah
function formatRupiah(angka) {
  return 'Rp' + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
  const [jumlahStr, keterangan] = text.split('|').map(s => s.trim());
  const jumlah = parseInt(jumlahStr);

  if (isNaN(jumlah) || jumlah <= 0) return reply('Jumlah tidak valid.');
  if (jumlah > tabunganOwner.saldo) return reply('⚠️ Uang tabungan tidak cukup.');

  tabunganOwner.saldo -= jumlah;
  tabunganOwner.riwayat.push({
    tipe: 'pengeluaran',
    jumlah,
    tanggal: formatTanggal(),
    keterangan: keterangan || 'Tanpa keterangan'
  });
  saveTabunganOwner();

  reply(`💸 Ambil: Rp${jumlah.toLocaleString()}\n📄 Keterangan: ${keterangan || 'Tanpa keterangan'}\n📦 Sisa: Rp${tabunganOwner.saldo.toLocaleString()}`);
}
break;

case "menu":
  if (!isRegistered) return daftar(mess.notregist)
  let limitz = db.data.users[m.sender].limit;
  let teks = `${yy1}</> YOUR INFO </>${yy1}
> ▧ Sᴛᴀᴛᴜs : ${isCreator ? 'ᴏᴡɴᴇʀ' : isPremium ? 'ᴘʀᴇᴍɪᴜᴍ' : 'ғʀᴇᴇ'}
> ▧ ᴛᴀɢ : @${m?.sender.split('@')[0]}
> ▧ ɴᴀᴍᴇ : ${pushname}
> ▧ ʟɪᴍɪᴛ : ${limitz}
> ▧ ʟᴇᴠᴇʟ : ${db.data.users[m.sender].level}
> ▧ ᴅᴇᴠɪᴄᴇ : ${deviceinfo}
> ▧ ʀᴇɢɪsᴛᴇʀ : ✅

${yy1}</> DORAEMONXUMARU INFO </>${yy1}
> ▧ ɴᴀᴍᴇ ʙᴏᴛ : ${global.namabot}
> ▧ ᴠᴇʀsɪᴏɴ : ${global.version}
> ▧ ʙᴀɪʟᴇʏs : ${global.baileys}
> ▧ ᴄʀᴇᴀᴛᴏʀ : ${global.ownername}
> ▧ ғʀᴇғɪx : [ . ]`
    const listnye = {
      title: 'LIST MENU',
      sections: [
        {
          title: 'INFORMATION',
          rows: [
            { title: 'Script 📥', description: 'Display Script DORAEMONXUMARU', id: '.sc' },
            { title: 'Donasi 💳', description: 'Mendukung Perkembangan', id: '.donasi' }
          ]
        },
        {
          title: 'LIST MENU',
          highlight_label: 'Recomend',
          rows: [
            { title: 'AllMenu ⚡', description: 'Menampilkan Allmenu', id: '.allmenu' },
            { title: 'OwnerMenu ⚡', description: 'Menampilakn fitur owner', id: '.menuowner' },
            { title: 'MainMenu 🚂', description: 'Menampilkan Main Menu', id: '.menumain' },
            { title: 'MakerMenu 🗺', description: 'Menampilkan Maker Menu', id: '.menumaker' },
            { title: 'ConvertMenu 🚀', description: 'Menampilkan main Menu', id: '.menuconvert' },
            { title: 'TolsMenu 🔗', description: 'Menampilkan Tols Menu', id: '.menutols' },
            { title: 'SearchMenu 📡', description: 'Menampilkan Search Menu', id: '.menusearch' },
            { title: 'DownloadMenu 📥', description: 'Menampilkan Download Menu', id: '.menudownload' },
            { title: 'GroupMenu 🗝', description: 'Menampilkan Group Menu', id: '.menugroup' },
            { title: 'PanelMenu 🕹', description: 'Menampilkan Panel Menu', id: '.menupanel' },
            { title: 'RpgMenu 🎮', description: 'Menampilkan Rpg Menu', id: '.menurpg' },
            { title: 'FunMenu 📽', description: 'Menampilkan Fun Menu', id: '.menufun' },
            { title: 'PrimbonMenu ♓', description: 'Menampilkan Primbon Menu', id: '.menuprimbon' },
            { title: 'GameMenu 🎮', description: 'Menampilkan Menu Menu', id: '.menugame' },
            { title: 'QuotesMenu 🩷', description: 'Menampilkan Quotes Menu', id: '.menuquotes' },
            { title: 'AnimeMenu 😍', description: 'Menampilkan Anime Menu', id: '.menuanime' },
            { title: 'RandomMenu 🛬', description: 'Menampilkan Random Menu', id: '.menurandom' },
            { title: 'AiMenu 🤖', description: 'Menampilkan Ai Menu', id: '.menuai' },
            { title: 'UnbanMenu 👿', description: 'Menampilkan Textunban Menu', id: '.unbanmenu' },
            { title: 'AnonyMenu 💾', description: 'Menampilkan Anonim Menu', id: '.mano' },
            { title: 'StoreMenu 💳', description: 'Menampilkan Store Menu', id: '.mst' },
            { title: 'SoundMenu 🎤', description: 'Menampilkan Sound Menu', id: '.smenu' },
            { title: 'NsfwMenu 1⃣8⃣', description: 'Menampilkan Nsfw Menu', id: '.mnsfw' },
            { title: 'LinodeMenu 📦', description: 'Menampilkan Linode Menu', id: '.mlinode' },
            { title: 'InstalMenu 📥', description: 'Menampilkan Instal Menu', id: '.minst' },
            { title: 'SubdoMenu ♓', description: 'Menampilkan Subdo Menu', id: '.menusubdo' },
            { title: 'SertifikatMenu 🗡', description: 'Menampilkan Serti Menu', id: '.menusertifikat' }, 
            { title: 'JadiBotMenu ♻️', description: 'Menampilkan Jadibot Menu', id: '.menujadibot' },
            { title: 'IslamiMenu 🙏', description: 'Menampilkan Islam Menu', id: '.menuislam' }
          ]
        }
      ]
    }
    listbut2(m, teks, listnye, qtext)
  break


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 OWNER MENU ───────────────────────────────────────────────────────────────乂 \\
case 'ping': {
    if (!isRegistered) return daftar(mess.notregist)
    const used = process.memoryUsage();
    const cpus = os.cpus().map(cpu => {
        cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
        return cpu;
    });

    const cpu = cpus.reduce((last, cpu, _, { length }) => {
        last.total += cpu.total;
        last.speed += cpu.speed / length;
        last.times.user += cpu.times.user;
        last.times.nice += cpu.times.nice;
        last.times.sys += cpu.times.sys;
        last.times.idle += cpu.times.idle;
        last.times.irq += cpu.times.irq;
        return last;
    }, {
        speed: 0,
        total: 0,
        times: {
            user: 0,
            nice: 0,
            sys: 0,
            idle: 0,
            irq: 0
        }
    });

    let timestamp = speed();
    let latensi = speed() - timestamp;
    let neww = performance.now();
    let oldd = performance.now();

    let respon = `
*㆔ Response Speed:* ${latensi.toFixed(4)} _Second_  
ㆳ ${(oldd - neww).toFixed(2)} _Milliseconds_  
ㆳ *Runtime:* ${runtime(process.uptime())}

┌───────────────── •
│ *Info Server ㇀*  
│ *RAM:* ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
└───────────────── •

ㇴ *NodeJS Memory Usage*  
${Object.keys(used)
    .map((key, _, arr) => `> ${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${formatp(used[key])}`)
    .join('\n')}

${cpus[0] ? `ㆫ *Total CPU Usage*  
\`${cpus[0].model.trim()} (${cpu.speed} MHz)\`
${Object.keys(cpu.times)
    .map(type => `> *${(type + '*').padEnd(6)} : ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`)
    .join('\n')}

ㇴ *CPU Core(s) Usage (${cpus.length} Core CPU)*  
${cpus
    .map(
        (cpu, i) => `> [ ${i + 1} ] ${cpu.model.trim()} (${cpu.speed} MHz)  
${Object.keys(cpu.times)
    .map(type => `- *${(type + '*').padEnd(6)} : ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`)
    .join('\n')}`
    )
    .join('\n\n')}` : ''}
`;

    m.reply(respon);
}
break;
case 'ambilfitur': {
    if (!isRegistered) return daftar(mess.notregist)
  if (!text.includes('|')) return m.reply(`Gunakan format:\n.ambilfitur namafile.js|case1|case2|...`);

  let [namafile, ...fiturList] = text.split('|');
  namafile = namafile.trim();
  if (!namafile.endsWith('.js')) return m.reply("❌ Nama file harus berakhiran `.js`");

  const filePath = path.join(__dirname, namafile);
  if (!fs.existsSync(filePath)) return m.reply(`❌ File ${namafile} tidak ditemukan.`);

  let fileContent = fs.readFileSync(filePath, 'utf-8');
  let hasil = "";

  for (let fitur of fiturList) {
    fitur = fitur.trim();
    let regex = new RegExp(`case ['"\`]${fitur}['"\`]:\\s*{([\\s\\S]*?)}\\s*break`, 'g');
    let match;
    while ((match = regex.exec(fileContent)) !== null) {
      hasil += `case '${fitur}': {\n${match[1]}\n} break\n\n`;
    }
  }

  if (!hasil) return m.reply("❌ Tidak ada fitur yang cocok ditemukan.");

  const hasilFile = path.join(__dirname, 'fitur', `ambil_${Date.now()}.js`);
  fs.writeFileSync(hasilFile, hasil);

  await conn.sendMessage(m.chat, {
    document: fs.readFileSync(hasilFile),
    mimetype: 'text/javascript',
    fileName: `fitur_terambil.js`,
    caption: `✅ Berhasil mengambil fitur dari *${namafile}*\n\nFitur: ${fiturList.join(', ')}`
  }, { quoted: m });

  fs.unlinkSync(hasilFile); // hapus setelah kirim
  break;
}
            case 'delete': case 'del': {
if (!isCreator) return reply(mess.creator)
if (!m.quoted) throw false
let { chat, id } = m.quoted
 conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
case 'onlypc': {
    if (!isRegistered) return daftar(mess.notregist)
        if (!isCreator && isPremium) return reply(mess.premium);
        if (args[0] == 'enable' || args[0] == 'disable') {
          const status = args[0] == 'enable';
          if (global.opts["pconly"] !== status) {
            global.opts["pconly"] = status;
            reply(`Success Change To ${status ? 'ENABLE' : 'DISABLE'}`);
          } else {
            reply(`Already ${status ? 'ENABLE' : 'DISABLE'}`);
          }
        } else {
          reply(`Status : ${global.opts["pconly"] ? 'ENABLE' : 'DISABLE'}`);
        }
        }
        break;
        case 'onlygc': {
        if (!isCreator && isPremium) return reply(mess.premium);
        if (args[0] == 'enable' || args[0] == 'disable') {
          const status = args[0] == 'enable';
          if (global.opts["gconly"] !== status) {
            global.opts["gconly"] = status;
            reply(`Success Change To ${status ? 'ENABLE' : 'DISABLE'}`);
          } else {
            reply(`Already ${status ? 'ENABLE' : 'DISABLE'}`);
          }
        } else {
          reply(`Status : ${global.opts["gconly"] ? 'ENABLE' : 'DISABLE'}`);
        }
        }
        break;
case 'savefitur': {
    if (!isRegistered) return daftar(mess.notregist)
  if (!text.includes('|')) return m.reply(`Gunakan format:\n.savefitur namafile|kode`);

  let [namafile, ...kode] = text.split('|');
  namafile = namafile.trim().replace(/[^a-zA-Z0-9_-]/g, ''); // validasi nama file
  if (!namafile) return m.reply("❌ Nama file tidak valid.");

  let isiKode = kode.join('|').trim();
  if (!isiKode) return m.reply("❌ Isi kode tidak boleh kosong.");

  const folderPath = path.join(__dirname, 'fitur');
  const filePath = path.join(folderPath, `${namafile}.js`);

  try {
    if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath);
    fs.writeFileSync(filePath, isiKode);

    await conn.sendMessage(m.chat, {
      document: fs.readFileSync(filePath),
      mimetype: 'text/javascript',
      fileName: `${namafile}.js`,
      caption: `✅ Fitur berhasil disimpan ke *${namafile}.js*!`
    }, { quoted: m });
  } catch (e) {
    console.error(e);
    m.reply("❌ Gagal menyimpan fitur.");
  }

  break;
}

case 'html':
case 'createhtml':
case 'chtml':
case 'webgen': 
        {
            if (!isRegistered) return daftar(mess.notregist)
  if (!text) return reply(`Contoh: ${prefix + command} landing page AI`);

  reply(mess.wait);
  try {
    let logic = `kamu adalah ai khusus untuk membuat code HTML, css, js dan lain lain yang bersangkutan dengan website. Kamu dapat membuat code tersebut sesuai dengan permintaan orang. Dalam code tersebut hanya code saja tidak ada tanda kutip ataupun teks lainnya. Saya ingin kamu hanya mengirim code bukan teks atau tanda-tanda lainnya, dan buat codr html itu dengan lengkap dan modern dan buat biar html tidak polosan ketika jadi web tapi modern dan keren itu saja ingat.`;

    let url = `${global.nekorin}/ai/hydromind-logic?text=${encodeURIComponent(text)}&logic=${encodeURIComponent(logic)}`;
    let res = await fetch(url);
    let json = await res.json();

    if (!json.status || !json.result) return reply('Gagal membuat HTML dari API.');

    let rawCode = json.result.trim();

    // Bersihkan tanda ```html dan ``` jika ada
    rawCode = rawCode.replace(/^```html\n?|```$/g, '').trim();

    // Pastikan folder tmp ada
    const tmpDir = path.join(__dirname, 'tmp');
    if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);

    // Buat nama file unik
    const fileName = `index-${Date.now()}.html`;
    const filePath = path.join(tmpDir, fileName);

    // Simpan file HTML
    fs.writeFileSync(filePath, rawCode);

    // Kirim file ke user
    await conn.sendMessage(m.chat, {
      document: fs.readFileSync(filePath),
      fileName: 'index.html',
      mimetype: 'text/html',
      caption: `✅ File Berhasil Di Buat\n\nDengan Query*${text}*`
    }, { quoted: m });

    // Hapus file setelah dikirim (opsional)
    // fs.unlinkSync(filePath);

  } catch (err) {
    console.error(err);
    reply('❌ Gagal memproses permintaan. Coba lagi nanti.');
  }
  break;
}

case 'saveweb':
case 'web2zip': {
    if (!isRegistered) return daftar(mess.notregist)
    async function saveweb2zip(url, options = {}) {
        if (!url) throw new Error('Url is required')
        url = url.startsWith('https://') ? url : `https://${url}`
        const {
            renameAssets = false,
            saveStructure = false,
            alternativeAlgorithm = false,
            mobileVersion = false
        } = options

        let { data } = await axios.post('https://copier.saveweb2zip.com/api/copySite', {
            url,
            renameAssets,
            saveStructure,
            alternativeAlgorithm,
            mobileVersion
        }, {
            headers: {
                accept: '*/*',
                'content-type': 'application/json',
                origin: 'https://saveweb2zip.com',
                referer: 'https://saveweb2zip.com/',
                'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36'
            }
        })

        while (true) {
            let { data: process } = await axios.get(`https://copier.saveweb2zip.com/api/getStatus/${data.md5}`, {
                headers: {
                    accept: '*/*',
                    'content-type': 'application/json',
                    origin: 'https://saveweb2zip.com',
                    referer: 'https://saveweb2zip.com/',
                    'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36'
                }
            })

            if (!process.isFinished) {
                await new Promise(resolve => setTimeout(resolve, 1000))
                continue
            } else {
                return {
                    url,
                    error: {
                        text: process.errorText,
                        code: process.errorCode
                    },
                    copiedFilesAmount: process.copiedFilesAmount,
                    downloadUrl: `https://copier.saveweb2zip.com/api/downloadArchive/${process.md5}`
                }
            }
        }
    }

    try {
        if (!args[0]) return m.reply('Mana Web Yang Mau Di Save\n\nExample : .saveweb https://kimkiro.my.id')

        m.reply('Wait...')

        let result = await saveweb2zip(args[0], { renameAssets: true })

        await conn.sendMessage(m.chat, {
            document: { url: result.downloadUrl },
            fileName: `${args[0]}.zip`,
            mimetype: 'application/zip'
        }, { quoted: m })

    } catch (e) {
        m.reply(e.message)
    }
}
break
case 'upload': {
    if (!isRegistered) return daftar(mess.notregist)
 try {
 if (!text.includes(',')) return reply('Format salah!\nContoh: .upload nama_project,<!doctype html><html>...</html>');

 const TOKEN_VERCEL = 'fbHXJUAZ6vRXdZskUJqpDek5';
 const [nama, ...kode] = text.split(',');
 const html = kode.join(',').trim();

 const res = await fetch("https://api.vercel.com/v13/deployments", {
 method: 'POST',
 headers: {
 'Authorization': `Bearer ${TOKEN_VERCEL}`,
 'Content-Type': 'application/json'
 },
 body: JSON.stringify({
 name: nama,
 files: [
 {
 file: "index.html",
 data: html
 }
 ],
 projectSettings: {
 framework: null,
 buildCommand: null,
 devCommand: null,
 outputDirectory: null
 }
 })
 });

 const result = await res.json();

 if (result.error) return reply(`❌ Gagal upload: ${result.error.message}`);
 reply(`✅ Berhasil upload ke Vercel!\n\n> URL: https://${result.url}`);
 } catch (err) {
 reply(`❌ Terjadi kesalahan: ${err.message}`);
 }
}
break;
case 'getdb': {
    if (!isRegistered) return daftar(mess.notregist)
  if (!isCreator) return reply('❌ Hanya owner yang bisa menggunakan perintah ini.')
  if (!args[0]) return reply('Contoh: .getdb file.json')

  const fileName = args[0]
  const filePath = `./database/${fileName}`

  if (!fs.existsSync(filePath)) return reply(`❌ File "${fileName}" tidak ditemukan.`)

  await conn.sendMessage(m.chat, {
    document: fs.readFileSync(filePath),
    fileName,
    mimetype: 'application/json',
    caption: `📁 Berikut isi database *${fileName}*`
  }, { quoted: m })

  break
}
case 'listdb': {
    if (!isRegistered) return daftar(mess.notregist)
  const dirPath = './database'
  if (!fs.existsSync(dirPath)) return reply('❌ Folder database tidak ditemukan.')

  const files = fs.readdirSync(dirPath).filter(file => file.endsWith('.json'))

  if (files.length === 0) return reply('📂 Tidak ada file database bertipe .json.')

  let teks = '📁 *Daftar File Database (.json)*\n\n'
  files.forEach((file, index) => {
    teks += `${index + 1}. ${file}\n`
  })
  teks += `\nUntuk mengambil file: *.getdb namafile.json*`

  return reply(teks)
}
break
case 'self': {
    if (!isRegistered) return daftar(mess.notregist)
    if (!isCreator) return
    conn.public = false
    m.reply(`*Switch To Mode :* \`Self\``)
}
break

case 'public': 
        case 'publik':{
    if (!isRegistered) return daftar(mess.notregist)
    if (!isCreator) return
    conn.public = true
    m.reply(`*Switch To Mode :* \`Public\``)
}
break
case 'banchat': 
        case'ban':{
    if (!isRegistered) return daftar(mess.notregist)
    if (!isCreator) return reply('Fitur ini hanya untuk owner!')
    if (banchat.includes(m.chat)) return reply('Chat ini sudah dibanned!')
    banchat.push(m.chat)
    fs.writeFileSync(banchatPath, JSON.stringify(banchat, null, 2))
    reply(`Berhasil membanned chat ini! Bot tidak akan merespon di sini.`)
  }
  break

  case 'unbanchat': 
        case 'unban':{
      if (!isRegistered) return daftar(mess.notregist)
    if (!isCreator) return reply('Fitur ini hanya untuk owner!')
    if (!banchat.includes(m.chat)) return reply('Chat ini tidak dalam daftar banned!')
    banchat = banchat.filter(chat => chat !== m.chat)
    fs.writeFileSync(banchatPath, JSON.stringify(banchat, null, 2))
    reply(`Berhasil menghapus banned pada chat ini!`)
  }
  break
case "addprem": {
    if (!isRegistered) return daftar(mess.notregist)
    if (!isCreator) return
    if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} ${global.owner}`)
   let prrkek = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`
    let ceknya = await conn.onWhatsApp(prrkek) // Mengecek Apkah Nomor ${prrkek} Terdaftar Di WhatsApp 
    if (ceknya.length == 0) return m.reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
    premium.push(prrkek)
    fs.writeFileSync("./database/premium.json", JSON.stringify(premium))
    m.reply(`Successfully Added ${prrkek} To Database`)
}
break

case "delprem": {
    if (!isRegistered) return daftar(mess.notregist)
    if (!isCreator) return
    if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} ${global.owner}`)
    let ya = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`
    let unp = premium.indexOf(ya)
    premium.splice(unp, 1)
    fs.writeFileSync("./database/premium.json", JSON.stringify(premium))
    m.reply(`Successfully Removed ${ya} From Database`)
}
break
case "listprem": {
    if (!isRegistered) return daftar(mess.notregist)
if (!isCreator) return m.reply("❗ *Access Denied*\nFitur Only `Owner`")
 let premList = JSON.parse(fs.readFileSync("./database/premium.json"));
 
 if (premList.length === 0) return m.reply("⚠️ Tidak ada Premium yang terdaftar!");
 let text = "💭 *Daftar Premium:*\n\n";
 premList.forEach((prrem, index) => {
 text += `- ${index + 1}. @${prrem}\n`;
 });
 conn.sendMessage(m.chat, { text, mentions: premList.map(v => v + "@s.whatsapp.net") }, { quoted: qtext });
}
break;
case 'spamngl': {
    if (!isRegistered) return daftar(mess.notregist)
if (!isCreator) return reply(mess.creator)
  if (!text.includes('|')) return reply(`Example:\n.spamngl https://ngl.link/kyygantng1 | Halo kamu cakep | anonymous | 5`);

  let [link, message, type, count] = text.split('|').map(v => v.trim());
  if (!link || !message || !type || !count) return reply(`Format salah!\nContoh: .spamngl https://ngl.link/namamu | Halo | anonymous | 10`);

  if (!link.includes('ngl.link')) return reply('Link tidak valid!');
  if (!['anonymous', 'not_anonymous'].includes(type)) return reply('Tipe hanya bisa: anonymous / not_anonymous');
  if (isNaN(count) || count < 1 || count > 20) return reply('Jumlah spam harus angka antara 1 - 20');

  reply(`⏳ Mengirim pesan ke ${link} sebanyak ${count}x...`);

  try {
    let api = `${global.fastres}/tool/spamngl?link=${encodeURIComponent(link)}&message=${encodeURIComponent(message)}&type=${type}&count=${count}`;
    let res = await fetch(api);
    let json = await res.json();

    if (json.status != 200) return reply('❌ Gagal mengirim pesan.');
    
    reply(`✅ *Berhasil kirim pesan!*\n\n🔗 Link: ${json.result.sentTo}\n💬 Pesan: ${json.result.message}\n📦 Jumlah: ${json.result.count}\n👤 Tipe: ${json.result.type}`);
  } catch (e) {
    console.error(e);
    reply('❌ Error saat mencoba mengirim spam.');
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case 'translate': {
    if (!isRegistered) return daftar(mess.notregist)
  if (!text.includes('|')) return conn.sendMessage(m.chat, { text: 'Contoh: .translate (dari bahasa)|(ke bahasa)|sesuai' }, { quoted: m })

  let [sourceLang, targetLang, ...query] = text.split('|')
  let msg = query.join(' ')
  if (!sourceLang || !targetLang || !msg) return conn.sendMessage(m.chat, { text: 'Format salah. Contoh: .translate id|en|halo dunia' }, { quoted: m })

  try {
    let res = await fetch(`https://api.siputzx.my.id/api/cf/translation?text=${encodeURIComponent(msg)}&sourceLang=${sourceLang}&targetLang=${targetLang}`)
    let json = await res.json()

    if (!json.success) return conn.sendMessage(m.chat, { text: 'Gagal menerjemahkan.' }, { quoted: m })

    let result = json.data.translated_text
    conn.sendMessage(m.chat, {
      text: `📌 *Translate*\n\n🌐 Dari: ${sourceLang}\n🌐 Ke: ${targetLang}\n\n📝 Teks: ${msg}\n📄 Hasil: ${result}`
    }, { quoted: m })
  } catch (e) {
    console.error(e)
    conn.sendMessage(m.chat, { text: 'Terjadi kesalahan saat mengakses API.' }, { quoted: m })
  }
  break
}

            case 'delcase': {
                if (!isRegistered) return daftar(mess.notregist)
                if (!isCreator) return reply('Fitur Khusus Owner!')
                if (!text) return reply('Mana case nya bang?');
                dellCase('./main.js', q)
                m.reply('Berhasil menghapus case!.');
            }
            db.data.users[m.sender].exp += await randomNomor(60)
            break
                       case 'getcase':
        if (!isRegistered) return daftar(mess.notregist)
                if (!isCreator) return reply('Khusus Owner!')
                if (!text) return reply(`Mau ambil case apa? `)
                const getCase = (cases) => {
                    return "case" + `'${cases}'` + fs.readFileSync("./main.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                }
                m.reply(`${getCase(q)}`)
                db.data.users[m.sender].exp += await randomNomor(60)
                break
                case 'apistatus':
        case 'cekapi':
        if (!isRegistered) return daftar(mess.notregist)
                if (!isCreator) return reply(mess.creator)
try {
  const res = await fetch('https://restapi.kyyapiz.biz.id/api/status');
  const data = await res.json();
  
  if (!data.status) return conn.sendMessage(m.chat, { text: '❌ Gagal mengambil status API.' }, { quoted: qtext });

  const status = data.result;
  const teks = `🛰️ *Status API:*\n\n` +
               `📡 Status: ${status.status}\n` +
               `📊 Total Request: ${status.totalrequest}\n` +
               `🧩 Total Fitur: ${status.totalfitur}\n` +
               `⏱️ Runtime: ${status.runtime}\n` +
               `🌐 Domain: ${status.domain}\n` +
               `👤 Creator: ${data.creator}`;

  conn.sendMessage(m.chat, { text: teks }, { quoted: qtext });

} catch (e) {
  console.log(e);
  conn.sendMessage(m.chat, { text: '⚠️ Error saat memuat status API.' }, { quoted: qtext });
}
break;

case 'addcase': {
    if (!isRegistered) return daftar(mess.notregist)
 if (!isCreator) return reply(mess.creator)
 if (!text) return reply('Mana case nya');
    const fs = require('fs');
const namaFile = 'main.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                reply('Sukses Menambahkan Fitur\nJika Ingin Menginfokan Ss Dan Reply Ssan Barcaption .newfitur');
            }
        });
    } else {
        reply('Tidak dapat menambahkan case dalam file.');
    }
});

}
db.data.users[m.sender].exp += await randomNomor(60)
break
case "reactch": {
    if (!isRegistered) return daftar(mess.notregist)
if (!isCreator) return m.reply('Khusus Owner')
if (!text) return m.reply(".reactch linkpesan 😂")
if (!args[0] || !args[1]) return m.reply("Wrong Format")
if (!args[0].includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = args[0].split('/')[4]
let serverId = args[0].split('/')[5]
let res = await conn.newsletterMetadata("invite", result)
await conn.newsletterReactMessage(res.id, serverId, args[1])
m.reply(`Berhasil mengirim reaction ${args[1]} ke dalam channel ${res.name}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case 'addprem':{
    if (!isRegistered) return daftar(mess.notregist)
if (!isCreator) return reply(mess.creator)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (!pcknm) return reply(`Penggunaan :\n*${prefix}addprem* @tag|waktu\n*${prefix}addprem* nomor|waktu\n\nContoh : ${prefix+command} @tag|30d`)
if (!atnm) return reply(`Mau yang berapa hari?`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
reply('Sukses')
} else {
var cekap = await conn.onWhatsApp(pcknm+"@s.whatsapp.net")
if (cekap.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
reply('Sukses')
}}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'delprem': {
    if (!isRegistered) return daftar(mess.notregist)
if (!isCreator) return reply(mess.creator)
if (!args[0]) return reply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
premium.splice(prem.getPremiumPosition(users, premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
reply('Sukses!')
} else {
var cekpr = await conn.onWhatsApp(args[0]+"@s.whatsapp.net")
if (cekpr.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
premium.splice(prem.getPremiumPosition(args[0] + '@s.whatsapp.net', premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
reply('Sukses!')
}}
db.data.users[m.sender].exp += await randomNomor(60)
break
case "ambilkode": case "code":  {
    if (!isRegistered) return daftar(mess.notregist)
 if (!isCreator) return m.reply(mess.creator)
    if (!text) return m.reply(`Gunakan: ${prefix + command} namafile.js:baris`);
    try {
        const [fileName, lineNumber] = text.split(':');
        if (!fileName || !lineNumber) return m.reply('❌ Format salah. Gunakan: namafile.js:baris');
        const fs = require('fs');
        const path = require('path');
        const baseDir = '/home/container/';
        const filePath = path.join(baseDir, fileName);
        if (!fs.existsSync(filePath)) {
            return m.reply(`❌ File ${fileName} tidak ditemukan.`);
        }
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const lines = fileContent.split('\n');
        const lineNum = parseInt(lineNumber);
        if (isNaN(lineNum) || lineNum <= 0 || lineNum > lines.length) {
            return m.reply(`❌ Baris ${lineNumber} tidak valid. File memiliki ${lines.length} baris.`);
        }
        const requestedLine = lines[lineNum - 1];
        m.reply(`📄 *${fileName}:${lineNum}*\n\n\`\`\`${requestedLine}\`\`\``);
    } catch (err) {
        console.error(err);
        m.reply('❌ Terjadi kesalahan saat mengambil kode.');
    }
}
db.data.users[m.sender].exp += await randomNomor(60)
break
 
case "setkode": case "setcode": {
    if (!isRegistered) return daftar(mess.notregist)
 if (!isCreator) return m.reply(mess.creator);
    if (!text) return m.reply(`Gunakan: ${prefix + command} namafile.js:baris|kode baru`);
    try {
        const [fileInfo, newCode] = text.split('|');
        if (!fileInfo || !newCode) return m.reply('❌ Format salah. Gunakan: namafile.js:baris|kode baru');
        const [fileName, lineNumber] = fileInfo.split(':');
        if (!fileName || !lineNumber) return m.reply('❌ Format file salah. Gunakan: namafile.js:baris');
        const fs = require('fs');
        const path = require('path');
        const baseDir = '/home/container/';
        const filePath = path.join(baseDir, fileName);
        if (!fs.existsSync(filePath)) {
            return m.reply(`❌ File ${fileName} tidak ditemukan.`);
        }
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const lines = fileContent.split('\n');
        const lineNum = parseInt(lineNumber);
        if (isNaN(lineNum) || lineNum <= 0 || lineNum > lines.length) {
            return m.reply(`❌ Baris ${lineNumber} tidak valid. File memiliki ${lines.length} baris.`);
        }
        const oldLine = lines[lineNum - 1];
        lines[lineNum - 1] = newCode;
        fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
        m.reply(`✅ *Kode berhasil diubah pada ${fileName}:${lineNum}*\n\n*Kode lama:*\n\`\`\`${oldLine}\`\`\`\n\n*Kode baru:*\n\`\`\`${newCode}\`\`\``);
    } catch (err) {
        console.error(err);
        m.reply('❌ Terjadi kesalahan saat mengubah kode.');
    }
}
db.data.users[m.sender].exp += await randomNomor(60)
break
 
// GET FILE || SET FILE
case "getfile": {
    if (!isRegistered) return daftar(mess.notregist)
 if (!isCreator) return m.reply(mess.creator)
 if (!q) return m.reply("Masukkan nama file!\nContoh: getfile main.js")
 const filePath = path.join(__dirname, q)
 if (!fs.existsSync(filePath)) return m.reply("File tidak ditemukan!")
 const stat = fs.statSync(filePath)
 if (stat.isDirectory()) return m.reply("Itu folder, bukan file!")
 const mime = require("mime-types")
 const mimetype = mime.lookup(filePath) || 'application/octet-stream'
 const fileName = path.basename(filePath)
 await conn.sendMessage(m.sender, {
 document: fs.readFileSync(filePath),
 fileName,
 mimetype
 }, { quoted: m })
 if (m.chat !== m.sender) return m.reply("File berhasil dikirim ke private chat")
}
db.data.users[m.sender].exp += await randomNomor(60)
break
 
case 'setfile': case 'setjs': {
    if (!isRegistered) return daftar(mess.notregist)
 if (!isCreator) return m.reply(mess.creator);
 let filePath, newContent;
 if (text.includes('|')) {
 const splitText = text.split('|');
 filePath = splitText[0].trim();
 newContent = splitText.slice(1).join('|'); 
 } else if (text && m.quoted) {
 filePath = text.trim();
 newContent = m.quoted.text || m.quoted.content || m.quoted.message?.text || m.quoted.message?.conversation || '';
 } else {
 return m.reply(`*Format Salah!*\nContoh:\n${prefix + command} settings.js|kode`);
 }
 if (!filePath) {
 return m.reply(`*Format Salah!*\nLokasi file tidak boleh kosong`);
 }
 try {
 const fs = require('fs');
 const path = require('path');
 const absolutePath = path.isAbsolute(filePath) ? filePath : path.resolve(filePath); 
 if (!fs.existsSync(absolutePath)) {
 try {
 const dir = path.dirname(absolutePath);
 if (!fs.existsSync(dir)) {
 fs.mkdirSync(dir, { recursive: true });
 }
 fs.writeFileSync(absolutePath, '');
 m.reply(`File '${filePath}' tidak ditemukan. File baru telah dibuat.`);
 } catch (err) {
 return m.reply(`*Gagal Membuat File!*\nFile '${filePath}' tidak dapat dibuat: ${err.message}`);
 }
 }
 if (!newContent) {
 return m.reply(`*Gagal Mengubah File!*\nKonten tidak boleh kosong.`);
 }
 fs.writeFileSync(absolutePath, newContent);
 await conn.sendMessage(m.chat, { text: `_Berhasil Mengubah Isi File ${filePath} ✅_` }, { quoted: m });
 const settingsPath = path.resolve('settings.js');
 const modifiedPath = path.resolve(filePath);
 if (settingsPath === modifiedPath || filePath.includes('settings.js')) {
 m.reply('_Perubahan pada settings.js terdeteksi. Bot akan restart..._');
 setTimeout(() => {
 process.exit(0);
 }, 2000);
 }
 } catch (error) {
 console.error(`Error updating ${filePath}:`, error);
 await conn.sendMessage(m.chat, { text: `_Gagal menyimpan perubahan ke file ${filePath}: ${error.message}_` }, { quoted: m });
 }
}
db.data.users[m.sender].exp += await randomNomor(60)
break
 case 'addsewa': {
     if (!isRegistered) return daftar(mess.notregist)
  if (!args[0]) return reply('Contoh: .addsewa https://chat.whatsapp.com/xxxxx|1hari')

  const [link, waktu] = args.join(' ').split('|')
  if (!link || !waktu) return reply('Format salah. Contoh: .addsewa https://chat.whatsapp.com/xxxxx|1hari')

  const match = waktu.match(/(\d+)?(\w+)/)
  if (!match) return reply('Format durasi tidak valid.')

  let [angka, satuan] = match.slice(1)
  angka = angka ? parseInt(angka) : 1
  if (!durationMap[satuan]) return reply('Gunakan satuan: jam, hari, minggu, bulan, tahun, permanen.')

  const code = link.split('/')[3]
  const jid = await conn.groupAcceptInvite(code).catch(() => null)
  if (!jid) return reply('❌ Gagal join grup.')

  const metadata = await conn.groupMetadata(jid)
  const expired = durationMap[satuan] === 0 ? 'permanen' : Date.now() + (angka * durationMap[satuan])
  const data = loadSewa()
  data.push({ jid, expired, name: metadata.subject })
  saveSewa(data)

  await conn.sendMessage(jid, { text: `✅ Bot berhasil disewa selama ${angka} ${satuan}.\nSilakan gunakan dengan bijak!` })

  return reply(`✅ Berhasil join grup *${metadata.subject}* dan disewa selama ${angka} ${satuan}`)
}
break

case 'ceksewa': {
    if (!isRegistered) return daftar(mess.notregist)
  const data = loadSewa()
  const groupId = m.chat
  const info = data.find(d => d.jid === groupId)

  if (!info) return reply('❌ Grup ini tidak dalam daftar sewa.')
  if (info.expired === 'permanen') return reply(`✅ Grup *${info.name || 'Tidak diketahui'}* disewa secara permanen.`)
  if (Date.now() > info.expired) return reply(`⚠️ Masa sewa untuk grup *${info.name || 'Tidak diketahui'}* sudah habis.`)

  const sisa = getRemainingTime(info.expired)
  return reply(`✅ Grup *${info.name || 'Tidak diketahui'}* masih aktif.\nSisa waktu sewa: ${sisa}`)
}
  db.data.users[m.sender].exp += await randomNomor(60)
  break;

case 'listsewa': {
    if (!isRegistered) return daftar(mess.notregist)
  const data = loadSewa()
  if (data.length === 0) return reply('Belum ada grup yang menyewa.')

  let teks = '📋 Daftar Sewa:\n\n'
  for (const item of data) {
    const status = getRemainingTime(item.expired)
    teks += `• ${item.name || 'Nama tidak diketahui'}\n↳ ID: ${item.jid}\n↳ Status: ${status}\n\n`
  }
  return reply(teks)
}
  db.data.users[m.sender].exp += await randomNomor(60)
  break;
  case 'balasngl': {
      if (!isRegistered) return daftar(mess.notregist)
  if (!isCreator) return reply(mess.creator)
    if (!m.quoted || !/image/.test(mime)) {
        return reply(`Reply gambar dengan caption:\n.balasnhl Tulis caption di sini`);
    }

    conn.sendMessage(`${global.idch}`, { react: { text: '🕐', key: m.key } });

    let caption = text || '🖼️'; // default caption kalau kosong

    try {
        await sleep(2000); // kasih delay kecil biar halus

        await conn.sendMessage(`${global.idch}`, {
            image: await quoted.download(),
            mimetype: 'image/jpeg',
            caption: caption,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 9999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: `${global.idch}`,
                    serverMessageId: 20,
                    newsletterName: 'Anonim!!'
                },
                externalAdReply: {
                    title: `Balasan Ngl Dari ${global.ownername}`,
                    body: ``,
                    thumbnailUrl: ppuser,
                    sourceUrl: '',
                    mediaType: 1
                }
            }
        });

        conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    } catch (e) {
        console.error(e);
        reply('Gagal mengirim gambar ke channel.');
    }
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case 'newfitur': {
  if (!isCreator) return reply(mess.creator);

  const mime = (m.quoted?.msg || m.quoted)?.mimetype || '';
  if (!/image/.test(mime)) return reply(`Reply gambar dengan caption:\n.newfitur NamaFitur|Fungsinya`);

  if (!text.includes('|')) return reply(`Format salah!\nContoh: .newfitur antiSpam|Memblokir spam otomatis`);

  const [featurename, fungsi] = text.split('|').map(a => a.trim());
  if (!featurename || !fungsi) return reply(`Format salah!\nContoh: .newfitur autoReply|Membalas pesan otomatis`);

  conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key } });

  let caption = `*[ FEATURE NEW 🎉 ]*\n> Penambahan Feature *${featurename}* Dan Dapat Di Gunakan Sebagai *${fungsi}*\n\n*Date*: ${hariini}\n*Cr*: Kyy`;

  try {
    await sleep(2000);

    await conn.sendMessage(`${global.idch}`, {
      image: await m.quoted.download(),
      mimetype: 'image/jpeg',
      caption: caption,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 9999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: `${global.idch}`,
          serverMessageId: 20,
          newsletterName: 'New Feature!'
        },
        externalAdReply: {
          title: `Feature Baru Dari ${global.ownername}`,
          body: ``,
          thumbnailUrl: ppuser,
          sourceUrl: '',
          mediaType: 1
        }
      }
    });

    conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
  } catch (e) {
    console.error(e);
    reply('❌ Gagal mengirim gambar ke channel.');
  }

  db.data.users[m.sender].exp += await randomNomor(60);
}
break;

case 'get': {
    if (!isCreator) return reply('*Owner only*');
    if (!text) return reply(`Please start the *URL* with http:// or https://`);
    try {
        const gt = await axios.get(text, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Referer": "https://www.google.com/",
                "Referrer-Policy": "strict-origin-when-cross-origin",
                "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
            },
            responseType: 'arraybuffer'
        });
        const contentType = gt.headers['content-type'];
        console.log(`Content-Type: ${contentType}`);

        if (/json/i.test(contentType)) {
            const jsonData = JSON.parse(Buffer.from(gt.data, 'binary').toString('utf8'));
            return reply(JSON.stringify(jsonData, null, 2));
        } else if (/text/i.test(contentType)) {
            const textData = Buffer.from(gt.data, 'binary').toString('utf8');
            return reply(textData);
        } else if (text.includes('webp')) {
            return conn.sendMessage(m.chat, { sticker: { url: text }}, { quoted: m });
        } else if (/image/i.test(contentType)) {
            return conn.sendMessage(m.chat, { image: { url: text }}, { quoted: m });
        } else if (/video/i.test(contentType)) {
            return conn.sendMessage(m.chat, { video: { url: text }}, { quoted: m });
        } else if (/audio/i.test(contentType) || text.includes(".mp3")) {
            return conn.sendMessage(m.chat, { audio: { url: text }}, { quoted: m });
        } else if (/application\/zip/i.test(contentType) || /application\/x-zip-compressed/i.test(contentType)) {
            return conn.sendMessage(m.chat, { document: { url: text }}, { quoted: m });
        } else if (/application\/pdf/i.test(contentType)) {
            return conn.sendMessage(m.chat, { document: { url: text }}, { quoted: m });
        } else {
            return reply(`MIME : ${contentType}\n\n${gt.data}`);
        }
    } catch (error) {
        console.error(`Error: ${error}`);
        return reply(`An error occurred while accessing the URL: ${error.message}`);
    }
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
            case 'creategc': {
                if (!isCreator) return reply('Fitur ini hanya untuk owner!');
                if (!text) return reply('Masukkan nama grup dan nomor yang diundang!\nContoh: .creategc Udin,6281910154270');

                let args = text.split(",");
                let groupName = args[0].trim();
                let invitees = args.slice(1).map(num => num.trim() + "@s.whatsapp.net");

                if (!groupName) return reply('Nama grup tidak boleh kosong!');
                if (invitees.length === 0) return newReply('Tambahkan setidaknya satu nomor untuk diundang!');

                try {
                    let group = await conn.groupCreate(groupName, [m.sender]);
                    let {
                        id
                    } = group;

                    await conn.groupSettingUpdate(id, "locked");

                    let inviteCode = await conn.groupInviteCode(id);
                    let groupLink = `https://chat.whatsapp.com/${inviteCode}`;

                    for (let user of invitees) {
                        await conn.groupParticipantsUpdate(id, [user], "invite");
                    }

                    await reply(`Grup berhasil dibuat!\nNama: ${groupName}\nLink: ${groupLink}\n\n✅ Hanya admin yang bisa mengubah info grup.`);

                } catch (err) {
                    reply('Gagal membuat grup, pastikan bot punya izin!');
                }
                 }
                 db.data.users[m.sender].exp += await randomNomor(60)
                break;
            case "leave": {
if (!isCreator) return reply(mess.creator)
if (!isGroup) return reply(mess.group)
await m.reply("Baik, Saya Akan Keluar Dari Grup Ini")
await sleep(4000)
await conn.groupLeave(m.chat)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case "joingc": case "join": {
if (!isCreator) return reply(mess.creator)
if (!text) return m.reply(example("linkgcnya"))
if (!text.includes("chat.whatsapp.com")) return m.reply("Link tautan tidak valid")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await conn.groupAcceptInvite(result)
m.reply(`Berhasil bergabung ke dalam grup ${id}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
            case 'block':
            case 'blok':
                if (!isCreator) return reply(mess.creator)
                if (!text) return reply(`Masukkan nomor target!`)
                let blok = q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                conn.updateBlockStatus(blok, 'block')
                m.reply(`Sukses block @${blok.split('@')[0]}`)
                db.data.users[m.sender].exp += await randomNomor(60)
                break
            case 'unblock':
            case 'unblok':
                if (!isCreator) return reply(mess.creator)
                if (!text) return reply(`Masukkan nomor target!`)
                let unblok = q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                conn.updateBlockStatus(unblok, 'unblock')
                m.reply(`Sukses unblock @${unblok.split('@')[0]}`)
                db.data.users[m.sender].exp += await randomNomor(60)
                break
            case 'listblock':
            case 'listblok':
                let listblok = await conn.fetchBlocklist()
                m.reply('*LIST BLOCK*\n' + `Total: ${listblok == undefined ? '*0* Diblokir' : '*' + listblok.length + '* Diblokir'}\n\n` + listblok.map(v => '» @' + v.replace(/@.+/, '')).join`\n`)
                db.data.users[m.sender].exp += await randomNomor(60)
                break
case 'setconfig': {
    if (!isCreator) return reply(mess.creator)
    
    const fs = require('fs')
    const configPath = require.resolve('./settings.js') // Pastikan path ini sesuai
    let configText = fs.readFileSync(configPath, 'utf-8')

    const settingsMap = {
        version: 'global.version',
        owner: 'global.owner',
        ownername: 'global.ownername',
        fother: 'global.fother',
        packname: 'global.packname',
        author: 'global.author',
        namabot: 'global.namabot',
        website: 'global.website',
        idch: 'global.idch',
        ceha: 'global.ceha',
        linkgc: 'global.linkgc',
        yt: 'global.yt',
    }

    const [key, ...value] = text.split(' ')
    if (!key || !value.length) {
        const availableKeys = Object.keys(settingsMap).join(', ')
        return reply(`Format salah!\nContoh: ${prefix}set version 3.1.0\n\nKunci yang tersedia:\n${availableKeys}`)
    }

    const settingKey = key.toLowerCase()
    const globalPath = settingsMap[settingKey]

    if (!globalPath) {
        return reply(`❌ Kunci *${settingKey}* tidak dikenali.`)
    }

    // Format sesuai tipe: array vs string
    const newValue = (settingKey === 'owner' || settingKey === 'idch')
        ? JSON.stringify(value) // array
        : `"${value.join(' ')}"` // string

    const regex = new RegExp(`${globalPath}\\s*=\\s*["'\`\\[].*?["'\`\\]]`, 's')
    configText = configText.replace(regex, `${globalPath} = ${newValue}`)

    fs.writeFileSync(configPath, configText)

    // Update nilai di runtime
    eval(`${globalPath} = ${newValue}`)

    reply(`✔️ *${globalPath}* berhasil diubah dan disimpan permanen.`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'getconfig': {
    if (!isCreator) return reply(mess.creator)

    const [key] = text.split(' ')
    if (!key) {
        const availableKeys = Object.keys({
            version: 1, owner: 1, ownername: 1, fother: 1,
            packname: 1, author: 1, namabot: 1, website: 1,
            idch: 1, ceha: 1, linkgc: 1, yt: 1
        }).join(', ')
        return reply(`Format salah!\nContoh: ${prefix}get version\n\nKunci yang tersedia:\n${availableKeys}`)
    }

    const settingsMap = {
        version: global.version,
        owner: global.owner,
        ownername: global.ownername,
        fother: global.fother,
        packname: global.packname,
        author: global.author,
        namabot: global.namabot,
        website: global.website,
        idch: global.idch,
        ceha: global.ceha,
        linkgc: global.linkgc,
        yt: global.yt,
    }

    const settingKey = key.toLowerCase()
    if (!(settingKey in settingsMap)) {
        return reply(`❌ Kunci *${settingKey}* tidak dikenali.`)
    }

    let value = settingsMap[settingKey]
    if (Array.isArray(value)) value = value.join(', ')

    reply(`📥 Nilai *${settingKey}* saat ini:\n${value}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break

case 'self': {
if (!isCreator) return reply(mess.creator)
global.self = false
m.reply('Sukses Change To Self Mode')
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case "jpmfoto": {
if (!isCreator) return m.reply("Khusus Owner")
if (!text) return m.reply("Sertakan teksnya dengan balas/kirim foto")
if (!/image/.test(mime)) return m.reply("Sertakan teksnya dengan balas/kirim foto")
let image = await conn.downloadAndSaveMediaMessage(qmsg)
let total = 0
let allfetch = await conn.groupFetchAllParticipating()
let entrygc = Object.entries(allfetch).slice(0).map((entry)=>entry[1])
let finalres = entrygc.filter(entrygc=>entrygc.announce==false)
let usergc = finalres.map(v=>v.id)
m.reply(`Memproses Mengirim Pesan Teks & Foto Ke *${usergc.length} Grup dengan Jeda 7 Detik*`)
for (let jid of usergc) {
try {
conn.sendMessage(jid, {image: await fs.readFileSync(image), caption: text, contextInfo: {forwardingScore: 1,
isForwarded: true}}, {quoted: m})
total += 1
} catch {}
await sleep(7000)
}
await fs.unlinkSync(image)
m.reply(`Berhasil Mengirim Postingan Ke *${total} Grup*`)
}
break
case 'listsampah': {
    if (!isRegistered) return daftar(mess.notregist)
if (!isCreator) return reply(mess.creator)
    const fs = require('fs')
    const path = require('path')

    const sessionFolder = './session'
    const rootFiles = fs.readdirSync('./')
    const sampahPatterns = [
        /^qr.*\.jpg$/i,
        /^ss.*\.jpg$/i,
        /^ss.*\.png$/i,
        /^preview.*\.(temp|tmp|jpg|png)$/i,
        /^dump.*\.(zip|txt|json)$/i,
        /^temp.*\.(zip|json|txt)$/i,
        /^debug.*\.(txt|log)$/i,
        /^backup.*\.zip$/i,
        /^cache.*\.(zip|json)$/i,
    ]

    let detected = []

    // Deteksi di folder session
    if (fs.existsSync(sessionFolder)) {
        const sessionFiles = fs.readdirSync(sessionFolder)
        sessionFiles.forEach(file => {
            detected.push(path.join('session', file))
        })
    }

    // Deteksi di root
    for (const file of rootFiles) {
        if (sampahPatterns.some(rx => rx.test(file))) {
            detected.push(file)
        }
    }

    if (detected.length === 0) {
        return m.reply('✅ Tidak ada file sampah yang terdeteksi.')
    }

    let teks = '🧹 *File Sampah Terdeteksi:*\n\n' + detected.map(f => `- ${f}`).join('\n')
    return m.reply(teks)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'cleansampah': {
if (!isCreator) return reply(mess.creator)
    const fs = require('fs')
    const path = require('path')

    const sessionFolder = './session'
    const rootFiles = fs.readdirSync('./')
    const sampahPatterns = [
        /^qr.*\.jpg$/i,
        /^ss.*\.jpg$/i,
        /^ss.*\.png$/i,
        /^preview.*\.(temp|tmp|jpg|png)$/i,
        /^dump.*\.(zip|txt|json)$/i,
        /^temp.*\.(zip|json|txt)$/i,
        /^debug.*\.(txt|log)$/i,
        /^backup.*\.zip$/i,
        /^cache.*\.(zip|json)$/i,
    ]

    let deleted = []

    // Hapus isi folder session
    if (fs.existsSync(sessionFolder)) {
        fs.readdirSync(sessionFolder).forEach(file => {
            const fullPath = path.join(sessionFolder, file)
            fs.unlinkSync(fullPath)
            deleted.push(fullPath)
        })
    }

    // Hapus file yang cocok dengan pola
    for (const file of rootFiles) {
        if (sampahPatterns.some(rx => rx.test(file))) {
            fs.unlinkSync(file)
            deleted.push(file)
        }
    }

    if (deleted.length === 0) {
        return m.reply('✅ Tidak ada file sampah yang perlu dihapus.')
    }

    return m.reply(`🗑️ *Berhasil menghapus ${deleted.length} file sampah:*\n\n` + deleted.map(f => `- ${f}`).join('\n'))
}
db.data.users[m.sender].exp += await randomNomor(60)
break


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 CONVERT FEATURE ───────────────────────────────────────────────────────────────乂 \\
case'smeme': {
if (!isRegistered) return daftar(mess.notregist)
 if (!m.quoted) return m.reply(`Balas gambar dengan perintah:\n${prefix + command} <teks atas>|<teks bawah>`);
 const { Sticker } = require('wa-sticker-formatter');
 async function uguu(filePath) {
 try {
 const form = new FormData();
 form.append('files[]', fs.createReadStream(filePath));
const axios = require('axios');
 const { data } = await axios.post('https://uguu.se/upload', form, {
 headers: { ...form.getHeaders() }
 });
 return data.files[0].url;
 } catch (err) {
 throw new Error(err.message);
 }
 }
 async function createSticker(img, url) {
 let stickerMetadata = {
 type: "full",
 pack: "My Sticker",
 author: "Kyy",
 quality: 100
 };
 return (new Sticker(img || url, stickerMetadata)).toBuffer();
 }
 let [atas, bawah] = text.split('|');
 let q = m.quoted ? m.quoted : m;
 let mime = (q.msg || q).mimetype || "";
 if (!mime.startsWith('image/')) return m.reply("❌ Hanya bisa digunakan untuk gambar!");
 await conn.sendMessage(m.chat, { react: { text: '🖼️', key: m.key } });
 let mediaBuffer = await q.download();
 let ext = mime.split('/')[1] || "png";
 let tempFile = path.join(__dirname, `${Date.now()}.${ext}`);
 fs.writeFileSync(tempFile, mediaBuffer);
 try {
 let url = await uguu(tempFile);
 let memeUrl = `https://api.memegen.link/images/custom/${encodeURIComponent(atas || " ")}`
 + `/${encodeURIComponent(bawah || " ")}.png?background=${url}`;
 let stickerBuffer = await createSticker(memeUrl, false);
 await conn.sendMessage(m.chat, { sticker: stickerBuffer }, { quoted: m });
 await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
 } catch (err) {
 console.error(err);
 m.reply("❌ Terjadi kesalahan saat membuat meme.");
 } finally {
 fs.unlinkSync(tempFile);
 }
}
db.data.users[m.sender].exp += await randomNomor(60)
break
    case 'tohd': case 'hd': case 'remini': {
    if (!isRegistered) return daftar(mess.notregist)
if (!/image/.test(mime)) return m.reply("dengan kirim/reply foto")
let foto = await conn.downloadAndSaveMediaMessage(qmsg)
let result = await remini(await fs.readFileSync(foto), "enhance")
await conn.sendMessage(m.chat, {image: result}, {quoted: m})
await fs.unlinkSync(foto)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case "hytam": case "hitamkan": case "hytamkan": {

 if (!/image/.test(mime)) return m.reply("Reply gambar yang mau dihitamin dengan caption *hytam*");

 const mediaPath = await conn.downloadAndSaveMediaMessage(qmsg);
 const buffer = fs.readFileSync(mediaPath);
 const base64Image = buffer.toString("base64");

 try {
const axios = require('axios');
 const response = await axios({
 url: "https://negro.consulting/api/process-image",
 method: "POST",
 data: {
 filter: "hitam",
 imageData: "data:image/png;base64," + base64Image
 }
 });

 const resultBuffer = Buffer.from(response.data.processedImageUrl.replace("data:image/png;base64,", ""), "base64");
 await conn.sendMessage(m.chat, { image: resultBuffer, caption: `Selesai, pake filter *hitam*` }, { quoted: m });

 fs.unlinkSync(mediaPath);
 } catch (err) {
 console.log(err);
 m.reply("Gagal memproses gambar.");
 }
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'attp': {
    if (!isRegistered) return daftar(mess.notregist)
  if (!text) return reply('❌ Masukkan teks yang ingin diubah menjadi sticker.\nContoh: .ttp wow');

  try {
    const res = await fetch(`${global.nekorin}/maker/ttp?text=${encodeURIComponent(text)}`);
    if (!res.ok) throw 'Gagal mengambil gambar dari API.';
    
    const data = await res.buffer();

    await conn.imgToSticker(m.chat, data, m, {
      packname: `Animbrat`,
      author: `Generated`
    });
  } catch (e) {
    console.error(e);
    reply('❌ Terjadi kesalahan saat membuat sticker.');
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
break;

case 'removebg':{
if (!isRegistered) return daftar(mess.notregist)
	    if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${command}`)
	    if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${command}`)
	    if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${command}`)
	    let { removeBg } = require('./lib/removeBG')
	    let img = await quoted.download()
	    let image = await removeBg(img)
	    let result = await Buffer.from(image, "base64")
	    
	    conn.sendImage(m.chat, result, mess.success, m)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animbrat':
case 'animebrat': {
    if (!isRegistered) return daftar(mess.notregist)
  if (!text) return m.reply('Masukkan teks yang ingin digunakan!\nContoh: .animbrat Hi, my name is Hikaru');

  try {
    const url = `${global.fastres}/maker/animbrat?text=${encodeURIComponent(text)}&position=center&mode=image`;

    const axios = await import('axios')
    const { data } = await axios.default.get(url, { responseType: 'arraybuffer' });

    await conn.imgToSticker(m.chat, data, m, {
      packname: `Animbrat`,
      author: `Generated`
    });

  } catch (err) {
    console.error(err);
    m.reply('❌ Gagal membuat sticker animbrat.');
  }

  db.data.users[m.sender].exp += await randomNomor(60)
  break;
}

case 'bratcolor': {
  if (!text) {
    // Kirim daftar warna
    const warna = [
      { nama: 'Hitam', hex: '#000000' },
      { nama: 'Putih', hex: '#FFFFFF' },
      { nama: 'Merah', hex: '#FF0000' },
      { nama: 'Hijau', hex: '#00FF00' },
      { nama: 'Biru', hex: '#0000FF' },
      { nama: 'Kuning', hex: '#FFFF00' },
      { nama: 'Oranye', hex: '#FFA500' },
      { nama: 'Ungu', hex: '#800080' },
      { nama: 'Pink', hex: '#FFC0CB' },
      { nama: 'Coklat', hex: '#A52A2A' },
      { nama: 'Cyan', hex: '#00FFFF' },
      { nama: 'Magenta', hex: '#FF00FF' },
      { nama: 'Emas', hex: '#FFD700' },
      { nama: 'Silver', hex: '#C0C0C0' },
      { nama: 'Lime', hex: '#BFFF00' },
      { nama: 'Navy', hex: '#000080' },
      { nama: 'Maroon', hex: '#800000' },
      { nama: 'Olive', hex: '#808000' },
      { nama: 'Teal', hex: '#008080' },
      { nama: 'Lavender', hex: '#E6E6FA' }
    ];

    let list = '🎨 *Daftar Warna & Hex Code:*\n\n';
    warna.forEach((w, i) => {
      list += `${i + 1}. ${w.nama} — \`${w.hex}\`\n`;
    });
    list += `\n📌 *Cara Pakai:*\n.brattext teks | warna teks | warna background\nContoh:\n.brattext Halo Dunia | #ffffff | #000000`;

    return m.reply(list);
  }

  try {
    const [teks, warnaTeks, warnaBG] = text.split('|').map(v => v.trim());
    if (!teks) return m.reply('Teks tidak boleh kosong!');

    const color = /^#[0-9a-fA-F]{6}$/.test(warnaTeks) ? warnaTeks : '#000000';
    const bg = /^#[0-9a-fA-F]{6}$/.test(warnaBG) ? warnaBG : '#FF9999';

    const url = `${global.fastres}/maker/brat/advanced?text=${encodeURIComponent(teks)}&font=Arial&fontSize=auto&fontPosition=justify&fontBlur=3&fontColor=${encodeURIComponent(color)}&bgColor=${encodeURIComponent(bg)}`;

    let { data } = await axios.get(url, { responseType: 'arraybuffer' });

    const sticker = new Sticker(data, {
      pack: 'Brat Color',
      author: 'By DORAEMONXUMARU',
      type: 'full',
      quality: 70
    });

    await conn.sendMessage(m.chat, await sticker.toMessage(), { quoted: m });

  } catch (e) {
    console.error(e);
    m.reply('Gagal membuat stiker brattext. Pastikan formatnya benar:\n.brattext teks | warna teks | warna background');
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case "brat": {
    if (!isRegistered) return daftar(mess.notregist)
  if (!text) {
    return m.reply(`*\`ᴄᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ\`*:\n${prefix + command} halo suki`);
  }

  try {
    await conn.sendMessage(m.chat, {
      react: { text: "⏳", key: m.key }
    });

    const url = `https://api.nekorinn.my.id/maker/brat-v2?text=${encodeURIComponent(text)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Gagal mengambil data dari API.");

    const buffer = await res.buffer();

    await conn.sendImageAsSticker(m.chat, buffer, m, {
      packname: "Brat Generated",
      author: "DORAEMONXUMARU"
    });
  } catch (err) {
    console.error("Error:", err);
    await conn.sendMessage(m.chat, {
      text: "Maaf, terjadi kesalahan saat mencoba membuat stiker brat. Coba lagi nanti."
    }, { quoted: m });
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
break;

             case 'stiker':
            case 'sticker':
            case 's':
            case 'stickergif':
            case 'sgif': {
            if (!isRegistered) return daftar(mess.notregist)
                if (!quoted) return reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await conn.downloadAndSaveMediaMessage(quoted, +new Date * 1)
                    await conn.imgToSticker(m.chat, media, m, {
                        packname: `Sticker By DORAEMONXUMARU\nNomor Bot :6288286624778\nOwner: KyyXD`,
                        author: `Kyy × DORAEMONXUMARU`
                    })
                    await fs.unlinkSync(media)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return warning('Maksimal 10 detik!')
                    let media = await conn.downloadAndSaveMediaMessage(quoted, +new Date * 1)
                    await conn.sendVideoAsSticker(m.chat, media, m, {
                        packname: `Sticker By DORAEMONXUMARU\nNomor Bot :6288286624778\nOwner: KyyXD`,
                        author: `Kyy × DORAEMONXUMARU`
                    })
                    await fs.unlinkSync(media)
                } else if (/sticker/.test(mime)) {
                    let media = await conn.downloadAndSaveMediaMessage(quoted, +new Date * 1)
                    await conn.imgToSticker(m.chat, media, m, {
                        packname: `Sticker By DORAEMONXUMARU\nNomor Bot :6288286624778\nOwner: KyyXD`,
                        author: `Kyy × DORAEMONXUMARU`
                    })
                    await fs.unlinkSync(media)
                } else m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
            }
            db.data.users[m.sender].exp += await randomNomor(60)
            break                                             
case "bratvid": case "bratvideo":{
    if (!isRegistered) return daftar(mess.notregist)
 if (!text) return reply("[❗] Input teks tidak ditemukan! Kirim perintah dengan format: .bratvid <teks>");
 try {
 let brat = `https://fgsi1-brat.hf.space/?text=${encodeURIComponent(text)}&isVideo=true`;
 let response = await axios.get(brat, { responseType: "arraybuffer" });
 let videoBuffer = response.data;
 let stickerBuffer = await conn.sendVideoAsSticker(m.chat, videoBuffer, m, {
 packname: "Brat Video Generates",
 author: "DORAEMONXUMARU",
 });
 console.log("Stiker berhasil dibuat:", stickerBuffer);
 } catch (err) {
 console.error("Error:", err);
 reply("[❗] Maaf, terjadi kesalahan saat mencoba membuat stiker video. Silakan coba lagi.");
 }
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
          case "tts" :
        {
        if (!isRegistered) return daftar(mess.notregist)
          if (!text) return m?.reply(`[ ! ] ${prefix}${command} halo world`);
          const a = await (
            await axios.post(
              "https://gesserit.co/api/tiktok-tts",
              { text: text, voice: "id_001" },
              {
                headers: {
                  Referer: "https://gesserit.co/tiktok",
                  "User-Agent":
                    "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
                  responseType: "arraybuffer",
                },
              },
            )
          ).data;
          const b = Buffer.from(a.audioUrl);
          conn.sendMessage(m?.chat, {
            audio: Buffer.from(a.audioUrl.split("base64,")[1], "base64"),
            mimetype: "audio/mpeg",
          });
        }
        db.data.users[m.sender].exp += await randomNomor(60)
        break;
        case 'wm': {
            if (!isRegistered) return daftar(mess.notregist)
  if (!m.quoted) return reply('Reply sticker yang mau dikasih watermark!')
  if (!text) return reply('Masukkan nama author! Contoh: .wm DORAEMONXUMARU')

  const { addExif } = require('./lib/exif')
  let stiker = false

  try {
    const packname = 'Created'
    const author = text.trim()

    const mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) return reply('Reply sticker webp!')

    const media = await m.quoted.download()
    if (!media) return reply('Gagal download sticker!')

    stiker = await addExif(media, packname, author)
  } catch (e) {
    console.error(e)
    if (Buffer.isBuffer(e)) stiker = e
    else return reply('Terjadi kesalahan: ' + e)
  } finally {
    if (stiker) {
      conn.sendMessage(m.chat, {
        sticker: stiker
      }, { quoted: m })
    } else {
      return reply('Gagal convert stiker.')
    }
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'emojimix': {
    if (!isRegistered) return daftar(mess.notregist)
  if (!text.includes('|')) return reply('Contoh: .emojimix 😃|😆')

  const [emoji1, emoji2] = text.split('|').map(e => e.trim())
  if (!emoji1 || !emoji2) return reply('Pastikan kedua emoji valid!')

  try {
    const encoded1 = encodeURIComponent(emoji1)
    const encoded2 = encodeURIComponent(emoji2)
    const url = `https://flowfalcon.dpdns.org/tools/emojimix?emoji1=${encoded1}&emoji2=${encoded2}`

    const axios = await import('axios')
    const { data } = await axios.default.get(url, { responseType: 'arraybuffer' })
    
    // Convert to sticker
    await conn.imgToSticker(m.chat, data, m, {
      packname: `Sticker`,
      author: `Emojimix`
    })
    
  } catch (e) {
    console.error(e)
    reply('Gagal mengambil emojimix, coba lagi nanti.')
  }

  db.data.users[m.sender].exp += await randomNomor(60)
  break
}
case 'fakepost': {
    if (!isRegistered) return daftar(mess.notregist)
  if (!m.quoted) return reply(`Reply gambar dengan caption *${prefix + command} username|like|firstLike|caption|tags|komen*`);
  let mime = (m.quoted.msg || m.quoted).mimetype || '';
  if (!/image/.test(mime)) return reply(`Reply gambar dengan caption *${prefix + command} username|like|firstLike|caption|tags|komen*`);
  if (!text.includes('|')) return reply(`Format salah!\nContoh: *${prefix + command} kyymedia|12.3k|Rikii|Wahai mantanku|#kangen|21*`);
  reply(mess.wait);

  const tempFile = path.join(__dirname, `temp_${Date.now()}.jpg`);
  try {
    let media = await m.quoted.download();
    fs.writeFileSync(tempFile, media);

    const uploadUguu = (filePath) => {
      return new Promise((resolve, reject) => {
        exec(`curl -s -F files[]=@${filePath} https://uguu.se/upload.php`, (err, stdout) => {
          if (err) return reject('Upload ke Uguu gagal');
          try {
            let json = JSON.parse(stdout);
            resolve(json.files[0].url);
          } catch {
            reject('Gagal parsing JSON Uguu');
          }
        });
      });
    };

    const uploadedImage = await uploadUguu(tempFile);
    const profilePic = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg');

    const [username, like, firstLike, captionPost, tags, komen] = text.split('|');
    const name = pushname || "User";

    const igApi = `https://nirkyy-dev.hf.space/api/v1/ig-post-generator?profile=${encodeURIComponent(profilePic)}&name=${encodeURIComponent(name)}&username=${encodeURIComponent(username)}&image=${encodeURIComponent(uploadedImage)}&like=${encodeURIComponent(like)}&firstLike=${encodeURIComponent(firstLike)}&caption=${encodeURIComponent(captionPost)}&tags=${encodeURIComponent(tags)}&date=Baru+Saja&totalKomen=${encodeURIComponent(komen)}`;

    await conn.sendMessage(m.chat, {
      image: { url: igApi },
      caption: `✅ Fake IG Post berhasil dibuat!`
    }, { quoted: m });

    fs.unlinkSync(tempFile);
    db.data.users[m.sender].exp += await randomNomor(30);
  } catch (err) {
    console.error(err);
    reply('❌ Gagal membuat Fake IG Post.');
  }
}
break;
case "tosdm": {
    if (!isRegistered) return daftar(mess.notregist)
  if (!m.quoted) return reply(`Kirim/reply gambar dengan caption *${prefix + command}*`);
  let mime = m.quoted.mimetype || "";
  let defaultPrompt = "Ubah gambar ini dengan mengganti latar belakang menjadi warna merah polos. Ubah objek utama (baik karakter anime atau orang) menjadi hitam putih atau abu-abu (grayscale). Tambahkan garis tebal berwarna hitam yang menutupi kedua mata sepenuhnya, tanpa celah atau lubang sama sekali.";

  if (!/image\/(jpe?g|png)/.test(mime)) return reply(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png`);

  let promptText = text || defaultPrompt;
  reply(mess.wait)

  try {
    let imgData = await m.quoted.download();
    let genAI = new GoogleGenerativeAI("AIzaSyDdfNNmvphdPdHSbIvpO5UkHdzBwx7NVm0");

    const base64Image = imgData.toString("base64");

    const contents = [
      { text: promptText },
      {
        inlineData: {
          mimeType: mime,
          data: base64Image
        }
      }
    ];

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
      generationConfig: {
        responseModalities: ["Text", "Image"]
      },
    });

    const response = await model.generateContent(contents);

    let resultImage;
    let resultText = "";

    for (const part of response.response.candidates[0].content.parts) {
      if (part.text) {
        resultText += part.text;
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        resultImage = Buffer.from(imageData, "base64");
      }
    }

    if (resultImage) {
      const tempPath = `./tmp/gemini_${Date.now()}.png`;
      fs.writeFileSync(tempPath, resultImage);

      await conn.sendMessage(m.chat, { 
        image: { url: tempPath },
        caption: `*Succes*`
      }, { quoted: m });

      setTimeout(() => {
        try {
          fs.unlinkSync(tempPath);
        } catch {}
      }, 30000);
    } else {
      reply("Gagal Membuat Gambar Sdm Tinggi😂.");
    }
  } catch (error) {
    console.error(error);
    reply(`Error: ${error.message}`);
  }
}
break;
case 'toanime': {
    if (!isRegistered) return daftar(mess.notregist)
  if (!m.quoted) return reply(`Kirim atau Reply Foto dengan caption *${prefix + command}*`);
  let mime = (m.quoted.msg || m.quoted).mimetype || '';
  if (!/image/.test(mime)) return reply(`Kirim atau Reply Foto dengan caption *${prefix + command}*`);
  reply(mess.wait);
  const tempFile = path.join(__dirname, `temp_${Date.now()}.jpg`);

  try {
    let media = await m.quoted.download();
    fs.writeFileSync(tempFile, media);

    const uploadUguu = async (filePath) => {
      return new Promise((resolve, reject) => {
        exec(`curl -s -F files[]=@${filePath} https://uguu.se/upload.php`, (err, stdout) => {
          if (err) return reject('Gagal mengunggah ke Uguu');
          try {
            let json = JSON.parse(stdout);
            resolve(json.files[0].url);
          } catch {
            reject('Gagal mengunggah ke Uguu');
          }
        });
      });
    };

    let uploadedUrl = await uploadUguu(tempFile);
    let gender = 'male'; // bisa diubah otomatis/parameter
    let prompt = encodeURIComponent('Elegant and majestic');
    let animeApi = `${global.fastres}/aiimage/toanime?imageUrl=${encodeURIComponent(uploadedUrl)}&gender=${gender}&specificPrompt=${prompt}`;

    await conn.sendMessage(m.chat, {
      image: { url: animeApi },
      caption: '✅ Berikut hasil AI Anime-mu!'
    }, { quoted: m });

    fs.unlinkSync(tempFile);
  } catch (e) {
    console.error(e);
    reply('Terjadi kesalahan saat memproses gambar.');
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case 'tohijab': {
    if (!isRegistered) return daftar(mess.notregist)
  if (!m.quoted) return reply(`Kirim atau Reply Foto dengan caption *${prefix + command}*`);
  let mime = (m.quoted.msg || m.quoted).mimetype || '';
  if (!/image/.test(mime)) return reply(`Kirim atau Reply Foto dengan caption *${prefix + command}*`);
  reply(mess.wait);

  const tempFile = path.join(__dirname, `temp_${Date.now()}.jpg`);

  try {
    let media = await m.quoted.download();
    fs.writeFileSync(tempFile, media);

    const uploadUguu = async (filePath) => {
      return new Promise((resolve, reject) => {
        exec(`curl -s -F files[]=@${filePath} https://uguu.se/upload.php`, (err, stdout) => {
          if (err) return reject('❌ Gagal mengunggah ke Uguu.');
          try {
            let json = JSON.parse(stdout);
            resolve(json.files[0].url);
          } catch {
            reject('❌ Gagal mengunggah ke Uguu.');
          }
        });
      });
    };

    let uploadedUrl = await uploadUguu(tempFile);
    let apiUrl = `${global.nekorin}/tools/to-hijab?imageUrl=${encodeURIComponent(uploadedUrl)}`;

    await conn.sendMessage(m.chat, {
      image: { url: apiUrl },
      caption: '✅ Berikut hasil foto berhijab-mu!'
    }, { quoted: m });

    fs.unlinkSync(tempFile);
  } catch (e) {
    console.error(e);
    reply('❌ Terjadi kesalahan saat memproses gambar.');
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case 'iqc': {
    if (!isRegistered) return daftar(mess.notregist)
    if (!q) return reply(`*Masukkan teks!*\nContoh: .iqc kyy`)

    let url = `https://flowfalcon.dpdns.org/imagecreator/iqc?text=${encodeURIComponent(q)}`
    try {
        await conn.sendMessage(m.chat, {
            image: { url },
            caption: `✅ *Berhasil!*\nTeks: ${q}`
        }, { quoted: m })
    } catch (e) {
        console.error(e)
        reply('❌ Gagal mengambil gambar dari API.')
    }
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'qc2': {
if (!q) return reply(`📌Example: ${prefix + command} pink hallo\n\n꒰ 🖌️ Color List ꒱ ೄྀ࿐ ˊˎ-\n━━━━━━⊱⋆⊰━━━━━━\npink\nblue\nred\ngreen\nyellow\npurple\ndarkblue\nlightblue\nash\norange\nblack\nwhite\nteal\nlightpink\nchocolate\nsalmon\nmagenta\ntan\nwheat\ndeeppink\nfire\nskyblue\nsafron\nbrightskyblue\nhotpink\nlightskyblue\nseagreen\ndarkred\norangered\ncyan\nviolet\nmossgreen\ndarkgreen\nnavyblue\ndarkorange\ndarkpurple\nfuchsia\ndarkmagenta\ndarkgray\npeachpuff\nblackishgreen\ndarkishred\ngoldenrod\ndarkishgray\ndarkishpurple\ngold\nsilver`)
if (text.length > 100) return reply(`Max 100 character.`)
let [color, ...message] = text.split(' ');
message = message.join(' ');
let backgroundColor;
switch(color) {
case 'pink':
backgroundColor = '#f68ac9';
break;
case 'blue':
backgroundColor = '#6cace4';
break;
case 'red':
backgroundColor = '#f44336';
break;
case 'green':
backgroundColor = '#4caf50';
break;
case 'yellow':
backgroundColor = '#ffeb3b';
break;
case 'purple':
backgroundColor = '#9c27b0';
break;
case 'darkblue':
backgroundColor = '#0d47a1';
break;
case 'lightblue':
backgroundColor = '#03a9f4'; 
break;
case 'ash':
backgroundColor = '#9e9e9e';
break;
case 'orange':
backgroundColor = '#ff9800';
break;
case 'black':
backgroundColor = '#000000';
break;
case 'white':
backgroundColor = '#ffffff';
break;
case 'teal':
backgroundColor = '#008080';
break;
case 'lightpink':
backgroundColor = '#FFC0CB';
break;
case 'chocolate':
backgroundColor = '#A52A2A';
case 'salmon':
backgroundColor = '#FFA07A'; 
break; 
case 'magenta':
backgroundColor = '#FF00FF'; 
break; 
case 'tan':
backgroundColor = '#D2B48C'; 
break;
case 'wheat':
backgroundColor = '#F5DEB3'; 
break;
case 'deeppink':
backgroundColor = '#FF1493'; 
break; 
case 'fire':
backgroundColor = '#B22222';
break;
case 'skyblue':
backgroundColor = '#00BFFF';
break; 
case 'orange':
backgroundColor = '#FF7F50';
break;
case 'brightskyblue':
backgroundColor = '#1E90FF'; 
break; 
case 'hotpink':
backgroundColor = '#FF69B4'; 
break; 
case 'lightskyblue':
backgroundColor = '#87CEEB'; 
break; 
case 'seagreen':
backgroundColor = '#20B2AA'; 
break; 
case 'darkred':
backgroundColor = '#8B0000'; 
break; 
case 'orangered':
backgroundColor = '#FF4500'; 
break; 
case 'cyan':
backgroundColor = '#48D1CC'; 
break; 
case 'violet':
backgroundColor = '#BA55D3'; 
break; 
case 'mossgreen':
backgroundColor = '#00FF7F'; 
break; 
case 'darkgreen':
backgroundColor = '#008000'; 
break; 
case 'navyblue':
backgroundColor = '#191970'; 
break; 
case 'darkorange':
backgroundColor = '#FF8C00'; 
break; 
case 'darkpurple':
backgroundColor = '#9400D3'; 
break; 
case 'fuchsia':
backgroundColor = '#FF00FF'; 
break; 
case 'darkmagenta':
backgroundColor = '#8B008B'; 
break;
case 'darkgray':
backgroundColor = '#2F4F4F'; 
break;
case 'peachpuff':
backgroundColor = '#FFDAB9'; 
break;
case 'darkishgreen':
backgroundColor = '#BDB76B'; 
break;
case 'darkishred':
backgroundColor = '#DC143C'; 
break;
case 'goldenrod':
backgroundColor = '#DAA520'; 
break;
case 'darkishgray':
backgroundColor = '#696969'; 
break;
case 'darkishpurple':
backgroundColor = '#483D8B'; 
break;
case 'gold':
backgroundColor = '#FFD700'; 
break;
case 'silver':
backgroundColor = '#C0C0C0'; 
break;
default:
return reply('The selected color is not available.')
}
let obj = {
type: 'quote',
format: 'png',
backgroundColor,
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await conn.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
}
},
text: message,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
conn.sendImageAsSticker(m.chat, buffer, qtext, { packname: `${global.packname}`, author: `${global.author}`})
}
db.data.users[m.sender].exp += await randomNomor(60)
break

case 'colorize': {
  if (!m.quoted) return reply(`Kirim atau Reply Foto dengan caption *${prefix + command}*`);
  let mime = (m.quoted.msg || m.quoted).mimetype || '';
  if (!/image/.test(mime)) return reply(`Kirim atau Reply Foto dengan caption *${prefix + command}*`);

  const tempFile = path.join(__dirname, `temp_${Date.now()}.jpg`);
  reply('⏳ Sedang memproses gambar...');

  try {
    let media = await m.quoted.download();
    fs.writeFileSync(tempFile, media);

    const uploadUguu = async (filePath) => {
      return new Promise((resolve, reject) => {
        exec(`curl -s -F files[]=@${filePath} https://uguu.se/upload.php`, (err, stdout) => {
          if (err) return reject('Gagal mengunggah ke Uguu');
          try {
            let json = JSON.parse(stdout);
            resolve(json.files[0].url);
          } catch {
            reject('Gagal mengunggah ke Uguu');
          }
        });
      });
    };

    let uploadedUrl = await uploadUguu(tempFile);
    let api = `https://flowfalcon.dpdns.org/imagecreator/colorize?url=${encodeURIComponent(uploadedUrl)}`;

    const res = await fetch(api);
    const json = await res.json();
    if (!json.status) return reply('Gagal mewarnai gambar.');

    await conn.sendMessage(m.chat, {
      image: { url: json.result },
      caption: '✅ Berikut hasil pewarnaan fotonya!'
    }, { quoted: m });

    fs.unlinkSync(tempFile);
  } catch (e) {
    console.error(e);
    reply('❌ Terjadi kesalahan saat memproses gambar.');
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case 'qc': {
    if (!isRegistered) return daftar(mess.notregist)
if (!q) return reply(`📌Example: ${prefix + command} hallo`)
let obj = {
type: 'quote',
format: 'png',
backgroundColor: '#ffffff',
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await conn.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
}
},
text: `${q}`,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
conn.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break
case 'toimg': {
    if (!isRegistered) return daftar(mess.notregist)
 if (!quoted) reply ('m?.reply Image')
if (!/webp/.test(mime)) reply (`Balas sticker dengan caption *${prefix + command}*`)
let media = await conn.downloadAndSaveMediaMessage(quoted)
let ran = 'jjsjsnsu.png'
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) reply (err)
let buffer = fs.readFileSync(ran)
conn.sendMessage(m.chat, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'ghibli': {
  try {
    let url

    // Jika kirim URL langsung
    if (text && text.startsWith('http')) {
      url = text
    }

    // Jika reply gambar
    else if ((m.quoted?.mimetype || '').includes('image')) {
      const media = await conn.downloadAndSaveMediaMessage(m.quoted)
      try {
        const catboxUrl = await CatBox(media)
        url = catboxUrl
      } catch (err) {
        console.error(err)
        return m.reply('❌ Gagal upload ke Catbox')
      } finally {
        fs.unlinkSync(media)
      }
    } else {
      return m.reply('❌ Kirim link gambar atau reply gambar dengan caption *.ghibli*')
    }

    const res = await fetch(`https://flowfalcon.dpdns.org/tools/toghibli?url=${encodeURIComponent(url)}`)
    const json = await res.json()

    if (!json.status || !json.result?.data?.[0]?.url) {
      return m.reply('❌ Gagal mengubah gambar ke gaya Ghibli.')
    }

    await conn.sendMessage(m.chat, {
      image: { url: json.result.data[0].url },
      caption: `✅ Gambar sudah diubah ke gaya Ghibli`
    }, { quoted: m })

  } catch (e) {
    console.error(e)
    m.reply('⚠️ Terjadi kesalahan saat memproses gambar.')
  }
}
break;

case 'toghibli': {
  const fs = require('fs');
  const path = require('path');
  const { exec } = require('child_process');
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  if (!m.quoted) return reply(`Kirim atau Reply Foto dengan caption *${prefix + command}*`);
  let mime = (m.quoted.msg || m.quoted).mimetype || '';
  if (!/image/.test(mime)) return reply(`Kirim atau Reply Foto dengan caption *${prefix + command}*`);

  reply(mess.wait);
  const tempFile = path.join(__dirname, `tmp/ghibli_${Date.now()}.jpg`);

  try {
    const media = await m.quoted.download();
    fs.writeFileSync(tempFile, media);

    const uploadUguu = (filePath) => {
      return new Promise((resolve, reject) => {
        exec(`curl -s -F files[]=@${filePath} https://uguu.se/upload.php`, (err, stdout) => {
          if (err) return reject('❌ Gagal mengunggah ke Uguu');
          try {
            let json = JSON.parse(stdout);
            resolve(json.files[0].url);
          } catch {
            reject('❌ Gagal parsing hasil unggahan dari Uguu');
          }
        });
      });
    };

    let uploadedUrl = await uploadUguu(tempFile);

    const bgsIdRes = await axios.get('https://apii.baguss.web.id/tools/ghibli', {
      params: {
        apikey: 'bagus',
        image: uploadedUrl
      }
    });

    const bgsId = bgsIdRes.data?.bgsId;
    if (!bgsId) throw new Error("❌ Gagal mendapatkan bgsId dari API.");

    let resultUrl = null;
    for (let i = 0; i < 30; i++) {
      if (i > 0) {
        const delay = (i % 3 === 0) ? 10000 : 5000;
        await sleep(delay);
      }

      try {
        const resultRes = await axios.get("https://apii.baguss.web.id/tools/ghibli/result", {
          params: {
            apikey: "bagus",
            bgsId: bgsId
          }
        });

        if (resultRes.data?.success && resultRes.data?.result?.startsWith("http")) {
          resultUrl = resultRes.data.result;
          break;
        }

        console.log(`🔁 Cek ke-${i + 1}: belum selesai.`);
      } catch (err) {
        console.log(`⚠️ Gagal cek ke-${i + 1}: ${err.message}`);
      }
    }

    if (!resultUrl) throw new Error("❌ Gagal mendapatkan hasil setelah 30x percobaan.");

    await conn.sendMessage(m.chat, {
      image: { url: resultUrl },
      caption: "*Status*: Success\n*Type*: Ghibli"
    }, { quoted: m });

    fs.unlinkSync(tempFile);
  } catch (e) {
    console.error(e);
    reply("⚠️ Terjadi kesalahan: " + e.message);
    if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
  }
}
break;
case 'txtqr': 
        case 'toqr':{
    if (!isRegistered) return daftar(mess.notregist)
  if (!text) return reply(`✏️ Kirim teks atau link yang ingin diubah ke QR!\nContoh: ${prefix + command} https://example.com`);

  try {
    const apiUrl = `${global.nekorin}/tools/text2qr?text=${encodeURIComponent(text)}`;
    await conn.sendMessage(m.chat, {
      image: { url: apiUrl },
      caption: `✅ *QR Code Generated*\n📎 Teks: ${text}`
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    reply('❌ Gagal membuat QR Code, coba lagi nanti.');
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case 'tozombie': case 'jadizombie': case 'jadi-zombie': {
                if (!/image/.test(mime) && !/video/.test(mime) && !/audio/.test(mime) && !/webp/.test(mime)) return m.reply('Harus berupa video, gambar, atau stiker')
                let media = await conn.downloadAndSaveMediaMessage(quoted)

                try {
                    const catBoxUrl = await CatBox(media)
                    const result = `https://api.ditss.cloud/imagecreator/tozombie?apikey=DitssGanteng&url=${catBoxUrl}`
                    conn.sendMessage(m.chat, {
                    image: {
                        url: result
                    },
                    caption: `done😈`
                }, {
                    quoted: m
                })
                } catch (err) {
                    console.error(err)
                } finally {
                    await fs.unlinkSync(media)
                }
            }
            break
            case "enc": {
                if (!isRegistered) return daftar(mess.notregist)
if (!text) return reply(`Format salah!!\nContoh Benar!!\n.enc encode\n.enc decode`)
const cheerio = require('cheerio');
    let [mode, ...rest] = text.trim().split(' ')
    let param = rest.join(' ').trim()
    if (mode.toLowerCase() === 'encode') {
        if (!args[0]) return m.reply('Mana text nya')
        try {
            m.reply('Tunggu bentar...')
            const result = await encode(args.join(' '))
            m.reply(`*Base64 Encode*\n\n▢ *Original:* ${args.join(' ')}\n\n▢ *Hasil:* ${result.result}`)
        } catch (error) {
            console.error(error)
            m.reply('Waduh error nih, coba lagi ya!')
        }
    } else if (mode.toLowerCase() === 'decode') {
        if (!args[0]) return m.reply('Mana text base64 yang mau didecode?')
        try {
            m.reply('Tunggu bentar...')
            const result = await decode(args.join(' '))
            m.reply(`*Base64 Decode*\n\n▢ *Base64:* ${args.join(' ')}\n\n▢ *Hasil:* ${result.result}`)
        } catch (error) {
            console.error(error)
            m.reply('Kayaknya text yang kamu kasih bukan base64 deh, atau ada error. Coba cek lagi ya!')
        }
    }
}
break
  case 'toaudio':
            case 'tomp3': {
                if (!isRegistered) return daftar(mess.notregist)
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
                if (!quoted) return reply(`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
                await conn.sendMessage(m.chat, {
                    react: {
                        text: "⏱️",
                        key: m.key,
                    }
                })
                let media = await quoted.download()
                let {
                    toAudio
                } = require('./lib/converter')
                let audio = await toAudio(media, 'mp4')
                conn.sendMessage(m.chat, {
                    audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })
            }
            db.data.users[m.sender].exp += await randomNomor(20)
            break
case 'tourl2': {
 try {
const mediaMessage = m.quoted || m; const mime = (mediaMessage.msg || mediaMessage).mimetype || '';

if (!mime) return reply('Silakan kirim atau reply gambar/video/mp3/file dengan caption .tourl');

 const form = new FormData();
 const media = await conn.downloadAndSaveMediaMessage(mediaMessage);
 form.append("file", fs.createReadStream(media));

 const res = await axios.post("https://cloudgood.web.id/upload.php", form, {
 headers: {
 ...form.getHeaders()
 },
 maxContentLength: Infinity,
 maxBodyLength: Infinity
 });

 const url = res.data?.url || 'Gagal Upload CloudGood';

 if (!url || url === 'Gagal Upload CloudGood') {
 return reply('Gagal mengunggah file ke CloudGood.');
 }

 const caption = `*Succesfully Up To CloudGood*\n\n> Your Url : ${url}\n> Expired : Not Exp`;

 await conn.sendMessage(m.chat, { text: caption }, { quoted: m });

} catch (err) {
 return reply(`Error Good Site: ${err.message}`);
}
  }
  db.data.users[m.sender].exp += await randomNomor(60)
break;
case 'tourl': {
  if (!/image|video|audio|webp/.test(mime)) return m.reply('⚠️ Kirim atau reply media gambar/video/audio/stiker!');

  const media = await conn.downloadAndSaveMediaMessage(quoted);
  try {
    const catBoxUrl = await CatBox(media);
    if (!catBoxUrl) throw 'Gagal mendapatkan URL dari Catbox';

    const teks = `✅ *Berhasil Upload Media ke URL!*\n*Name Upload : ${pushname}*\n*Type Upload : Catboxx*\n*Status : Succes*`;

    const msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            contextInfo: { mentionedJid: [m.sender] },
            body: proto.Message.InteractiveMessage.Body.fromObject({ text: teks }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
              buttons: [
                {
                  name: 'cta_url',
                  buttonParamsJson: JSON.stringify({
                    display_text: '🔗 Preview Media',
                    url: catBoxUrl,
                    merchant_url: catBoxUrl
                  })
                },
                {
                  name: 'cta_copy',
                  buttonParamsJson: JSON.stringify({
                    display_text: '📋 Copy URL',
                    copy_code: catBoxUrl
                  })
                }
              ]
            })
          })
        }
      }
    }, { userJid: m.chat, quoted: m });

    await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
    db.data.users[m.sender].exp += await randomNomor(60);

  } catch (err) {
    console.error('Tourl error:', err);
    m.reply('❌ Gagal upload media ke URL.');
  } finally {
    if (fs.existsSync(media)) fs.unlinkSync(media);
  }
}
break;
case "uppastebin": {
  if (!text) throw `Masukkan teks yang mau di - paste\n\nContoh:\n${prefix + command} Hai nama saya zen ganteng 🗿`;

  const apiKey = '4iXqa681ImN0ykqHeUInKGGAvET6A4u6';
  const apiUrl = 'https://pastebin.com/api/api_post.php';
  const params = new URLSearchParams();
  params.append('api_dev_key', apiKey);
  params.append('api_option', 'paste');
  params.append('api_paste_code', text);

  await m.reply('Tunggu sebentar kak...');

  try {
    const res = await fetch(apiUrl, {
      method: 'POST',
      body: params
    });
    const url = await res.text();

    if (!url.startsWith('http')) throw 'Gagal membuat pastebin!';

    await conn.sendMessage(m.chat, { text: `✅ Paste berhasil dibuat:\n${url}` }, { quoted: m });
  } catch (e) {
    console.error(e);
    m.reply('Terjadi error saat membuat paste. Coba lagi nanti.');
  }
};
db.data.users[m.sender].exp += await randomNomor(60)
break
case "rvo": {
    if (!m.quoted) return reply(
        `*❌Syntax Error!!*
*Example:* reply ViewOnce with caption ${prefix + command}`);
    try {
        let buffer = await m.quoted.download();
        let type = m.quoted.mtype;
        let sendOptions = { quoted: m };
        let caption = "Done Nih Hasil Rvo Ny";

        if (type === "videoMessage") {
            await conn.sendMessage(m.chat, { video: buffer, caption }, sendOptions);
        } else if (type === "imageMessage") {
            await conn.sendMessage(m.chat, { image: buffer, caption }, sendOptions);
        } else if (type === "audioMessage") {
            await conn.sendMessage(m.chat, {
                audio: buffer,
                mimetype: "audio/mpeg",
                ptt: m.quoted.ptt || false
            }, sendOptions);
        } else {
            return reply("❌ Media View Once tidak didukung.");
        }
    } catch (err) {
        console.error(err);
    }

    db.data.users[m.sender].exp += await randomNomor(60);
}
break;

case "furybrat": {
    if (!text) return reply(`Gunakan perintah ini dengan format: ${prefix}furbrat <teks>`)
    
    try {
        conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

        let random = Math.floor(Math.random() * 7);
        const url = `https://fastrestapis.fasturl.link/tool/furbrat?text=${encodeURIComponent(text)}&style=${random}&mode=center`;

        const response = await axios.get(url, { responseType: 'arraybuffer' });

        const sticker = new Sticker(response.data, {
            pack: 'Stiker By',
            author: 'DORAEMONXUMARU',
            type: 'image/png',
        });

        const stickerBuffer = await sticker.toBuffer();
        await conn.sendMessage(m.chat, { sticker: stickerBuffer }, { quoted: m });

    } catch (error) {
        console.error('Error:', error);
        await conn.reply(m.chat, 'Maaf, terjadi kesalahan saat mencoba membuat stiker furry brat. Coba lagi nanti.', m);
    }
};
db.data.users[m.sender].exp += await randomNomor(60)
break;


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 MAIN FEATURE ───────────────────────────────────────────────────────────────乂 \\
case 'daftar': case 'regis': case 'register': {
    if (isRegistered) return reply('ᴋᴀᴍᴜ ᴛᴇʟᴀʜ ᴛᴇʀᴅᴀғᴛᴀʀ');

    const input = text?.includes(',') ? text.split(',') : text?.includes('.') ? text.split('.') : [];
    if (input.length !== 2) return reply('Format Salah! Gunakan: .daftar nama,umur atau .daftar nama.umur');

    const nama = input[0].trim();
    const umur = input[1].trim();

    if (!nama || !umur || isNaN(umur)) return reply('Pastikan Nama dan Umur sudah diisi dengan benar!');
    if (parseInt(umur) > 50) return reply('lu udah bau tanah cok!');

    const serialUser = createSerial(20);
    const nomor = m?.sender.split('@')[0];
    const channelJid = '120363400063977812@newsletter';
    const operator = detectOperator(nomor.replace(/[^0-9]/g, '').replace(/^62/, '0').slice(0, 12));

    const mzd = `${yy2}REGISTERED USERS${yy2}\n` +
                `${yy2}Nomor  : @${nomor}${yy2}\n` +
                `${yy2}Nama   : ${nama}${yy2}\n` +
                `${yy2}Umur   : ${umur}${yy2}\n` +
                `${yy2}Status : Sukses✅${yy2}\n` +
                `${yy2}Serial : ${serialUser}${yy2}\n` +
                `${yy2}Operator: ${operator}${yy2}\n` +
                `${yy2}Device: ${deviceinfo}${yy2}\n\n` +     
                `bot by indra,,`;

    const notifLog = `${yy2}REGISTERED USERS${yy2}\n` +
                `${yy2}Nomor  : @${nomor}${yy2}\n` +
                `${yy2}Nama   : ${nama}${yy2}\n` +
                `${yy2}Umur   : ${umur}${yy2}\n` +
                `${yy2}Status : Sukses✅${yy2}\n` +
                `${yy2}Serial : ${serialUser}${yy2}\n` +
                `${yy2}Operator: ${operator}${yy2}\n` +
                `${yy2}Device: ${deviceinfo}${yy2}\n\n` +     
                    `${yy2}bot by indra${yy2}`;

    veri = m?.sender;
    addRegisteredUser(m?.sender, nama, serialUser);

    let ppuser;
    try {
        ppuser = await conn.profilePictureUrl(m.sender, 'image');
    } catch {
        ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460960720.png?q=60';
    }

    conn.sendMessage(m.chat, {
        text: mzd,
        contextInfo: {
            mentionedJid: [m.chat],
            externalAdReply: {
                showAdAttribution: true,
                title: isGroup ? 'R E G I S T E R' : '𝗡 𝗘 𝗪 - 𝗨 𝗦 𝗘 𝗥',
                body: '',
                thumbnailUrl: ppuser,
                sourceUrl: global.ceha,
                mediaType: 1,
                renderLargerThumbnail: false
            }
        }
    });

    conn.sendMessage(channelJid, {
        text: notifLog,
        contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
                title: 'System Notification',
                body: 'Notification Register',
                thumbnailUrl: ppuser,
                sourceUrl: 'https://www.instagram.com/',
                mediaType: 1,
                renderLargerThumbnail: false
            }
        }
    });

    // ✅ Tambahan: Auto Backup
    try {
        const ownerList = global.owner || ['62895391943722'] // ganti dengan nomor owner
        for (let ow of ownerList) {
            let jid = ow.includes('@s.whatsapp.net') ? ow : ow + '@s.whatsapp.net'
            await conn.sendMessage(jid, {
                document: fs.readFileSync('./database/registered.json'),
                fileName: 'registered.json',
                mimetype: 'application/json',
                caption: `📦 Auto Backup - Pengguna Baru: ${nama} (@${nomor})`
            }, { quoted: m })
        }
    } catch (err) {
        console.log('Gagal kirim auto-backup:', err)
    }

    db.data.users[m.sender].exp += await randomNomor(150)
}
break;
case 'ceksn': {
    let data;
    try {
        data = JSON.parse(fs.readFileSync('./database/registered.json'));
    } catch (e) {
        return reply('❌ Gagal membaca data pendaftaran.');
    }

    let user = data.find(v => v.id === m.sender);
    if (!user) return reply('❌ Kamu belum terdaftar!\nGunakan *.daftar nama,umur* untuk mendaftar.');

    let sn = user.age; // serial number tersimpan di age
    reply(`✅ Serial Number Kamu:\n\n*${sn}*`);
}
break;



case 'upch-elite': {
    if (!/audio/.test(mime) && !/video/.test(mime) && !/image/.test(mime) && !/webp/.test(mime) && !/sticker/.test(mime) && !/application/.test(mime)) {
        return reply(`Reply Gambar / Video Dengan Caption .upch-elite`);
    }
    conn.sendMessage(`${global.idch}`, { react: { text: '🕐', key: m.key } });
    ngawi = text.split("|")[0];
    jomokck = text.split("|")[1];
    await sleep(6000);

    if (/audio/.test(mime)) {
        conn.sendMessage(`${global.idch}`, {
            audio: await quoted.download(),
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 9999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: `${global.idcg}`,
                    serverMessageId: 20,
                    newsletterName: 'DORAEMONXUMARU - Music'
                },
                externalAdReply: {
                    title: `MUSIC 🎶`,
                    body: `runtime: ${runtime(process.uptime())} 👋`,
                    thumbnailUrl: ppuser,
                    sourceUrl: "",
                    mediaType: 1
                }
            }
        });
    } else if (/video/.test(mime)) {
        conn.sendMessage(`${global.idch}`, {
            video: await quoted.download(),
            mimetype: 'video/mp4',
            caption: `🎥`,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 9999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: `${global.idch}`,
                    serverMessageId: 20,
                    newsletterName: 'Video'
                },
                externalAdReply: {
                    title: `Video dari ${pushname}🎥`,
                    body: ` runtime: ${runtime(process.uptime())} 👋`,
                    thumbnailUrl: ppuser, 
                    sourceUrl: "",
                    mediaType: 1
                }
            }
        });
    } else if (/image/.test(mime) || /webp/.test(mime)) {
        conn.sendMessage(`${global.idch}`, {
            image: await quoted.download(),
            mimetype: /webp/.test(mime) ? 'image/webp' : 'image/jpeg',
            caption: `🖼️`,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 9999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: `${global.idch}`,
                    serverMessageId: 20,
                    newsletterName: 'image'
                },
                externalAdReply: {
                    title: `Gambar dari ${pushname}🖼️`,
                    body: ` runtime: ${runtime(process.uptime())} 👋`,
                    thumbnailUrl: ppuser,
                    sourceUrl: "",
                    mediaType: 1
                }
            }
        });
    } else if (/sticker/.test(mime)) {
        conn.sendMessage(`${global.idch}`, {
            sticker: await quoted.download(),
            mimetype: 'image/webp',
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 9999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: `${global.idch}`,
                    serverMessageId: 20,
                    newsletterName: 'Gada'
                }
            }
        });
    } else if (/application/.test(mime)) { 
        conn.sendMessage(`${global.idch}`, {
            document: await quoted.download(),
            mimetype: mime, 
            fileName: `${ngawi}.pdf`,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 9999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: `${global.idch}`,
                    serverMessageId: 20,
                    newsletterName: 'Gada'
                },
                externalAdReply: {
                    title: `${jomokck}`,
                    body: `conn runtime: ${runtime(process.uptime())} 👋`,
                    thumbnailUrl: "https://pomf2.lain.la/f/wg5es1wv.jpg",
                    sourceUrl: "https://whatsapp.com/channel/0029Vb90lbvLdQemr6nhOu3K",
                    mediaType: 1
                }
            }
        });
    }
    conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
            case 'idch':
            case 'cekidch': {
                if (!text) return reply(example("linkchnya mana"))
                if (!text.includes("https://whatsapp.com/channel/")) return reply("Link tautan tidak valid")
                let result = text.split('https://whatsapp.com/channel/')[1]
                let res = await conn.newsletterMetadata("invite", result)
                let teks = `* *ID : ${res.id}*
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}`
                let msg = generateWAMessageFromContent(m.chat, {
                    viewOnceMessage: {
                        message: {
                            "messageContextInfo": {
                                "deviceListMetadata": {},
                                "deviceListMetadataVersion": 2
                            },
                            interactiveMessage: {
                                body: {
                                    text: teks
                                },
                                footer: {
                                    text: "powered by conn"
                                }, //input watermark footer
                                nativeFlowMessage: {
                                    buttons: [{
                                        "name": "cta_copy",
                                        "buttonParamsJson": `{"display_text": "copy ID","copy_code": "${res.id}"}`
                                    }, ],
                                },
                            },
                        },
                    },
                }, {
                    quoted: m
                });
                await conn.relayMessage(msg.key.remoteJid, msg.message, {
                    messageId: msg.key.id
                });
            }
            db.data.users[m.sender].exp += await randomNomor(60)
            break
            case 'upteks':
case 'chat':{
 if (!text) return await reply("Example : .chat woi kyy kece")
 //m.reply("contoh\n.chat selamat siang semuanya")
  if (budy.match(`colmek|coli|desah|ah ah|bokep|tobrut|seksi|sex|sexi|memek|kontol|titit|open bo|panel|unli|gay|yatim|sale|private|adp|alok|62|mmk|6281513607731|081513607731|join|whatsapp.com|wa.me|t.me`)) return reply('maaf ada kata kata yang tidak sesuai.\nAturan\ndi mohon untuk tidak promosi barang/jasa, menyebarkan hoax, scam, berkata kasar, menyebarkan nomor WhatsApp, mengeshare link');
 const Kalender00011 = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)
 const owned11 = owner + "@s.whatsapp.net"
let awal = `anjir`
await conn.sendMessage(m.chat, {
 react: {
 text: '🦚',
 key: m.key,
 }})
conn.sendMessage(`${global.idch2}`,{ text: `${text}`,
 contextInfo: {
 mentionedJid: [m.sender, owned11],
 forwardedNewsletterMessageInfo: {
 newsletterJid: `0@newsletter`,
 newsletterName: `Kyy`,
 serverMessageId: -1
 },
 	businessMessageForwardInfo: { businessOwnerJid: conn.decodeJid(conn.user.id) },

 forwardingScore: 999,
 isForwarded: false,
 externalAdReply: {
 showAdAttribution: true, 
 title: `Chat :${pushname}`,
 body: `Form: ${isGroup ? `${groupMetadata.subject}` : !isGroup ? "chat" : "Free User"}`,
 thumbnailUrl: ppuser,
 sourceUrl: `${text}`,
 mediaType: 1,
 renderLargerThumbnail: false
 }
 }
 })
conn.sendMessage(m.chat, {
 react: {
 text: '⚡',
 key: m.key,
 }})
 //reply(`sukses mengirim pesan ke channel.`)
 conn.sendMessage(m.chat, {
 react: {
 text: '✅',
 key: m.key,
 }})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
             case 'pesan': {
if (!args || !args[0]) return reply(`🚩 Please enter the message\nExample of Use: ${prefix + command} ${owner} pesan untuknya`)
let ngen = ['|']
if (args[0].includes(ngen)) return reply('Replace Symbol | So spaces')
if (args[0].length > 14) return reply('Extension Number')
if (args[0].length < 7) return reply('Abbreviation Number')
if (args[0].startsWith('0')) return reply('Use format 62')
if (!args[0]) return reply('Masukkan Teks')
let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[0] ? (args[0].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
let txt = (args.length > 1 ? args.slice(1).join(' ') : '') || ''
let q = m.quoted ? m.quoted : m
let mime = (q.m || q).mimetype || ''
let tujuan = `${txt}`
if (!m.quoted) {
conn.sendText(mention, tujuan)
} else {
conn.sendText(mention, tujuan)
let media = q ? await m.getQuotedObj() : false || m
await conn.copyNForward(mention, media, false).catch(_ => _)
}
let suks = `Mengirim Pesan *${mime ? mime : 'Teks'}*
*_Success ✅_*

Text :
${txt}
`
conn.sendMessage(m.chat, { text: `${suks}`, mentions: [suks] }, { quoted: m })

}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'myip': {
  let res = await fetch('https://www.velyn.biz.id/api/tools/myip')
  let json = await res.json()
  if (!json.success) return m.reply('Gagal mengambil data IP!')

  let { ip, type, city, region, country, isp, timezone, flag } = json
  let teks = `*MY IP INFO*\n\n`
  teks += `🌐 IP: ${ip}\n`
  teks += `📡 Tipe: ${type}\n`
  teks += `🏙️ Kota: ${city}\n`
  teks += `🌍 Wilayah: ${region}, ${country} ${flag.emoji}\n`
  teks += `🏢 ISP: ${json.connection.org} (${isp})\n`
  teks += `🕐 Zona Waktu: ${timezone.id} (UTC${timezone.utc})\n`
  teks += `🗺️ Lokasi: ${json.latitude}, ${json.longitude}\n`

  conn.sendMessage(m.chat, {
    image: { url: flag.img },
    caption: teks
  }, { quoted: m })
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'topcmd': {
  let logs = JSON.parse(fs.readFileSync(logPath))
  let todayStart = moment().startOf('day').valueOf()
  let todayLogs = logs.filter(log => log.time >= todayStart)
  let freq = {}
  for (let log of todayLogs) {
    freq[log.cmd] = (freq[log.cmd] || 0) + 1
  }
  let sorted = Object.entries(freq).sort((a, b) => b[1] - a[1])
  if (!sorted.length) return m.reply('Belum ada command yang digunakan hari ini.')
  let teks = '*Top 10 Command Hari Ini:*\n\n'
  sorted.slice(0, 10).forEach(([cmd, total], i) => {
    teks += `${i + 1}. *${cmd}* → ${total}x\n`
  })
  m.reply(teks)
}
break
                case 'totalfitur': case 'totalfeature': {
    reply(`Total Feature DORAEMONXUMARU Saat Ini ${totalFitur()}͏`) 
    }
    db.data.users[m.sender].exp += await randomNomor(60)
    break
    case "sc": case "script": {
await conn.sendMessage(m.chat, {audio: fs.readFileSync('./system/suara/sc.mp3'), viewOnce: false, mimetype:'audio/mpeg', ptt: true}, {quoted: m})
    }
    db.data.users[m.sender].exp += await randomNomor(60)
    break
    case 'owner': {
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; ${global.ownername}\nORG: ${global.ownername}\nTITLE:soft\nitem1.TEL;waid=${global.owner}:${global.owner}\nitem1.X-ABLabel:Ponsel\nitem2.URL:${global.yt}\nitem2.X-ABLabel:ðŸ’¬ More\nitem3.EMAIL;type=INTERNET: ${global.website}\nitem3.X-ABLabel:Email\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABADR:ðŸ’¬ More\nitem4.X-ABLabel:Lokasi\nEND:VCARD`;
const sentMsg = await conn.sendMessage(m.chat, {
      contacts: {
        displayName: author,
        contacts: [{ vcard }],
      },
      contextInfo: {
        externalAdReply: {
          title: "M Y  O W N E R - K Y Y",
          body: "",
          thumbnailUrl: `https://cloudkuimages.guru/uploads/images/6801ab91cc67e.jpg`,
          mediaType: 1,
          showAdAttribution: false,
          renderLargerThumbnail: true,
        }}}, { quoted: m });
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'donasi': {
teks28 = `berikut ini untuk rincian donasi ya kak ${pushname}: 
${global.dana} (dana)
${global.gopay} (gopay)
${global.spay} (shoopepay)
${global.bca} (bca)
${global.neo} (NeoBank)
${global.sea} (SeaBank)
`
conn.sendMessage(from, { image: { url: global.qris, }, caption: teks28 }, { quoted: m })
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'ngl': {
  if (!text) return reply('Masukkan isi pesan anonim!\nContoh: .ngl Aku suka kamu.')
  
  try {
    const encodedTitle = encodeURIComponent('Kirimi aku pesan anonim!')
    const encodedText = encodeURIComponent(text.trim())
    const imageUrl = `https://flowfalcon.dpdns.org/imagecreator/ngl?title=${encodedTitle}&text=${encodedText}`

    const ownerJids = global.owner.map(o => typeof o === 'object' ? `${o[0]}@s.whatsapp.net` : `${o}@s.whatsapp.net`)

    for (const jid of ownerJids) {
      await conn.sendMessage(jid, {
        image: { url: imageUrl },
        caption: '📩 Kamu menerima pesan anonim.'
      })
    }

    reply('✅ Pesan anonim kamu sudah dikirim ke owner.')

  } catch (e) {
    console.error(e)
    reply('Gagal mengirim pesan anonim Ini Terjadi Karna\n-Pesan Tidak Bersifat Anonim\n-18+\n-kasar/jorok.')
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'listapisc': {
  const caseFilePath = path.join(__dirname, 'main.js'); // Sesuaikan path file kamu
  const caseCode = fs.readFileSync(caseFilePath, 'utf-8'); // Baca kode dari file case.js
  
  const apiUrls = [];
  const apiPattern = /https?:\/\/[^\s]+/g; // Regex untuk menangkap URL API

  // Cari semua URL yang sesuai dengan pola
  let match;
  while ((match = apiPattern.exec(caseCode)) !== null) {
    apiUrls.push(match[0]);
  }

  // Formatkan pesan untuk dikirim
  let apiMessage = 'Daftar API yang digunakan oleh bot:\n\n';
  if (apiUrls.length > 0) {
    apiUrls.forEach((url, index) => {
      apiMessage += `🔹 API ${index + 1}: ${url}\n`;
    });
  } else {
    apiMessage = 'Tidak ditemukan API dalam kode.';
  }

  // Kirim pesan daftar API
  await conn.sendMessage(m.chat, {
    text: apiMessage,
  }, { quoted: m });
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case "runtime": {
conn.sendMessage(m.chat, { text: `DORAEMONXUMARU Online ${runtime(process.uptime())}` }, { quoted: qtext});
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'totalchat':
case 'statgroup': {
  const stats = getTodayStats(m.chat)
  if (Object.keys(stats).length === 0) return m.reply('Belum ada data chat hari ini.')
  let teks = `*Statistik Chat Hari Ini (${isGroup ? "Grup" : "Pribadi"}):*\n\n`
  const sorted = Object.entries(stats).sort((a, b) => b[1] - a[1])
  let i = 1
  for (const [user, total] of sorted) {
    const name = conn.getName ? await conn.getName(user) : user.split('@')[0]
    teks += `${i++}. ${name} - ${total} chat\n`
  }
  m.reply(teks)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
           case 'getpp': {
                if (!m.mentionedJid[0] && !m.quoted && !text) return reply(`Tag/Reply Target Yang Mau Di ${command}`)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                try {
                    avatar = await conn.profilePictureUrl(users, "image")
                } catch {
                    avatar = 'https://ditss.cloud/img/ppuserr.jpg'
                }
                conn.sendMessage(m.chat, {
                    image: {
                        url: avatar
                    },
                    caption: `Done`
                }, {
                    quoted: qtext
                })
            }
            db.data.users[m.sender].exp += await randomNomor(20)
            break
            case 'getppgc': {
                if (!isGroup) return reply(mess.group)
                try {
                    avatar = await conn.profilePictureUrl(m.chat, "image")
                } catch {
                    avatar = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
                conn.sendMessage(m.chat, {
                    image: {
                        url: avatar
                    },
                    caption: `Done`
                }, {
                    quoted: qtext
                })
            }
            db.data.users[m.sender].exp += await randomNomor(20)
            break
            case 'getname': {
                if (!m.mentionedJid[0] && !m.quoted && !text) return reply(`Tag/Reply Target Yang Mau Di ${command}`)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                let name = conn.getName(users)
                reply(`${name}`)
            }
            db.data.users[m.sender].exp += await randomNomor(20)
            break
            case 'getnamegc':
            case 'getsubjekgc': {
                if (!isGroup) return reply(mess.group)
                reply(`${groupName}`)
            }
            db.data.users[m.sender].exp += await randomNomor(20)
            break
            case 'getdesk':
            case 'getdeskripsigc':
            case 'getdesc': {
                if (!isGroup) return reply(mess.group)
                let iya = `DESKRIPSI GRUB *${groupName}*\n\n${groupMetadata.desc}`
                reply(iya)
            }
            db.data.users[m.sender].exp += await randomNomor(20)
            break
            case 'sewa':
case 'sewabot': {
sun = `╭━━━〔 Sewa Bot - ${namabot} 〕━━━╮

Hai ${pushname},  
Ingin membuat grup kamu lebih hidup, aman, dan seru?  
Pilih salah satu paket sewa ${namabot} di bawah ini:

━━━━━━━━━━━━━━━━━━
🥉 Paket Bronze  
━━━━━━━━━━━━━━━━━━
• 3K = 3 Hari  
• 5K = 1 Minggu  
• 7K = 3 Minggu  
Keuntungan:  
✓ Menjaga grup dari spam  
✓ Fitur game ringan  
✓ Anti-link grup lain  
✓ Blokir promosi

━━━━━━━━━━━━━━━━━━
🥈 Paket Reguler  
━━━━━━━━━━━━━━━━━━
• 20K = 1 Bulan  
• 25K = 2 Bulan  
• 30K = 2 Bulan + 7 Hari  
Keuntungan:  
✓ Semua fitur Bronze  
✓ Request fitur khusus  
✓ Admin grup dapat akses Premium  
✓ Welcome message custom

━━━━━━━━━━━━━━━━━━
🏆 Paket Unlimited  
━━━━━━━━━━━━━━━━━━
• 50K = Permanen  
• 65K = Permanen + Premium  
Keuntungan:  
✓ Semua fitur Reguler  
✓ Limit tanpa batas  
✓ Unlock semua fitur  
✓ Akses update lebih cepat

━━━━━━━━━━━━━━━━━━
💳 Pembayaran  
Untuk melanjutkan proses sewa:
• Ketik: *payment*  
• Atau hubungi: *owner*

📝 Testimoni tersedia jika kamu butuh bukti.  
Jadikan grup kamu lebih terkelola dan profesional bersama ${namabot}!

╰━━━━━━━━━━━━━━━━━━━━╯`;

conn.sendMessage(m.chat, {
  text: sun,
  contextInfo: {
    externalAdReply: {
      title: namabot,
      body: `Bot profesional untuk kebutuhan grup Anda.`,
      thumbnailUrl: 'https://cloudgood.web.id/file/rTZqOaR.jpg',
      sourceUrl: '',
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }
}, { quoted: m });
}
break;

// ───────────────────────────────────────────────────────────────────────────────乂 🥀 RPG FEATURE ───────────────────────────────────────────────────────────────乂 \\
case 'joinrpg': {
                fs.readFile('./system/RPG/join.json', 'utf8', (err, data) => {
                    if (err) {
                        console.error(err);                        
                    }
                    let users;                   
try {
                        users = JSON.parse(data);
                    } catch (parseError) {
                        console.error('Err:', parseError);                        
                    }                
                    const userExists = users.some(user => user.id === m.sender);

                    if (userExists) {
                        return reply('Kamu sudah Join.');
                    }              
                    users.push({ id: m.sender  });

fs.writeFile('./system/RPG/join.json', JSON.stringify(users, null, 2), 'utf8', (err) => {
                        if (err) {
                            console.error(err);                            
                        } else {
                            return reply('Sukses Join  Rpg!');
                        }
                    });
                });
}
                break;

 case "myguild": {         

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
 const showMyGuild = (userId, m) => {
    const guildIdc = userGuilds[userId];
    if (!guildIdc) {
        return reply("You are not a member of any guild.");
    }

    return showGuildInfo(guildIdc, m);
};
 showMyGuild(m.sender, m)
 }
 break
 
 case "guildinfo": {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
 if (!text) return reply(`Masukan Nama guild`)
 const guildIdd = text
 getGuildInfo(text)
 }
 break
 
  case "delguild": {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
 if (!text) return reply(`Masukan Nama guild`)
 deleteGuild(text, m.sender)
 }
 break
 
 case "joinguild": {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
 if (!text) return reply("Masukan Id Guild")
 const guildId = text
 joinGuild(guildId, m.sender)
 }
 break
 
 case "createguild": {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
 if (!text) return reply("Masukan Nama guild nya")
 const guildName = text
 createGuild(guildName, m.sender)
 }
 break
 
 case "listguild":

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
 listGuilds()
 break                

case 'nebang': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return hours + " jam " + minutes + " menit " + seconds + " detik"
}
let user = db.data.users[m.sender]
let time = user.lastparming + 1800000
if (new Date - user.lastparming < 1800000) return reply(`Anda sudah lelah untuk bekerja\nTunggu selama ${msToTime(time - new Date())} lagi`)
let wood = `${Math.floor(Math.random() * 50)}`.trim()
let money = `${Math.floor(Math.random() * 50000)}`.trim()
user.wood += wood * 1
user.money += money * 1
user.lastparming = new Date * 1
reply(`Selamat kamu mendapatkan : \n+${wood} Kayu\n+${money} Money`)
}
break

case 'casino': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
let buatall = 1
conn.casino = conn.casino ? conn.casino : {}
if (m.chat in conn.casino) return reply ('Masih ada yang melakukan casino disini, tunggu sampai selesai!!')
else conn.casino[m.chat] = true
try {
let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
let Aku = (randomaku * 1)
let Kamu = (randomkamu * 1)
let count = args[0]
count = count ? /all/i.test(count) ? Math.floor(db.data.users[m.sender].exp / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
count = Math.max(1, count)
if (args.length < 1) return reply('casino <jumlah>\n ' + 'casino 1000', )
if (db.data.users[m.sender].exp >= count * 1) {
db.data.users[m.sender].exp -= count * 1
//await reply('') //Kwkwwkkwlwlw
if (Aku > Kamu) {
reply(`💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*You LOSE*\nKamu kehilangan ${count} Uang(xp)`)
} else if (Aku < Kamu) {
db.data.users[m.sender].exp += count * 2
reply(`💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*You Win*\nKamu mendapatkan ${count * 2} Uang(xp)`)
} else {
db.data.users[m.sender].exp += count * 1
reply(`💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*SERI*\nKamu mendapatkan ${count * 1} Uang(xp)`)
}
} else reply(`Uang(xp) kamu tidak mencukupi untuk Casino silahkan *#kerja* terlebih dahulu!`)
} catch (e) {
console.log(e)
reply('Error!!')
if (DevMode) {
for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
conn.sendMessage(jid, 'casino.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
}
}
} finally {
delete conn.casino[m.chat]
}
}
break

case 'kerja':
case 'bekerja': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
let type = (args[0] || '').toLowerCase()
let users = db.data.users[m.sender]
let time = users.lastkerja + 30000
let __timers = (new Date - users.lastkerja)
let _timers = (1000 - __timers)
let timers = clockString(_timers)

let penumpan = ['mas mas', 'bapak bapak', 'cewe sma', 'bocil epep', 'emak emak']
let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)]

let daganga = ['wortel', 'sawi', 'selada', 'tomat', 'seledri', 'cabai', 'daging', 'ikan', 'ayam']
let dagangan = daganga[Math.floor(Math.random() * daganga.length)]

let pasie = ['sakit kepala', 'cedera', 'luka bakar', 'patah tulang']
let pasien = pasie[Math.floor(Math.random() * pasie.length)]

let pane = ['Wortel', 'Kubis', 'stowbery', 'teh', 'padi', 'jeruk', 'pisang', 'semangka', 'durian', 'rambutan']
let panen = pane[Math.floor(Math.random() * pane.length)]

let bengke = ['mobil', 'motor', 'becak', 'bajai', 'bus', 'angkot', 'becak', 'sepeda']
let bengkel = bengke[Math.floor(Math.random() * bengke.length)]

let ruma = ['Membangun Rumah', 'Membangun Gedung', 'Memperbaiki Rumah', 'Memperbaiki Gedung', 'Membangun Fasilitas Umum', 'Memperbaiki Fasilitas Umum']
let rumah = ruma[Math.floor(Math.random() * ruma.length)]

if (/kerja/i.test(command)) {
switch (type) {
case 'ojek':
if (new Date - users.lastkerja < 300000) return reply(`Kamu sudah bekerja\nSaatnya istirahat selama ${clockString(time - new Date())}`)
let hasilojek = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasilojek * 1
users.lastparming = new Date * 1
reply(`Kamu Sudah Mengantarkan *${penumpang}* 🚗\nDan mendapatkan uang senilai *Rp ${hasilojek} ${global.rpg.emoticon('money')}*`)
break

case 'pedagang':
if (new Date - users.lastkerja < 300000) return reply(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
let hasildagang = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasildagang * 1
users.lastparming = new Date * 1
reply(`Ada pembeli yg membeli *${dagangan}* 🛒\nDan mendapatkan uang senilai *Rp ${hasildagang} ${global.rpg.emoticon('money')}*`)
break

case 'dokter':
if (new Date - users.lastkerja < 300000) return reply(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
let hasildokter = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasildokter * 1
users.lastparming = new Date * 1
reply(`Kamu menyembuhkan pasien *${pasien}* 💉\nDan mendapatkan uang senilai *Rp ${hasildokter}* ${global.rpg.emoticon('money')}`)
break

case 'petani':
if (new Date - users.lastkerja < 300000) return reply(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
let hasiltani = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasiltani * 1
users.lastparming = new Date * 1
reply(`${panen} Sudah Panen !🌽 Dan menjualnya 🧺\nDan mendapatkan uang senilai Rp *${hasiltani} ${global.rpg.emoticon('money')}*`)
break

case 'montir':
if (new Date - users.lastkerja < 300000) return reply(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
let hasilmontir = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasilmontir * 1
users.lastparming = new Date * 1
reply(`Kamu Baru saja mendapatkan pelanggan dan memperbaiki *${bengkel} 🔧*\nDan kamu mendapatkan uang senilai *Rp ${hasilmontir}* ${global.rpg.emoticon('money')}`)
break

case 'kuli':
if (new Date - users.lastkerja < 300000) return reply(`Kamu sudah bekerja,Saatnya istirahat selama\n🕜 ${clockString(time - new Date())}`)
let hasilkuli = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasilkuli * 1
users.lastparming = new Date * 1
reply(`Kamu baru saja selesai ${rumah} 🔨\nDan mendapatkan uang senilai *Rp ${hasilkuli} ${global.rpg.emoticon('money')}*`)
break
default:
return reply(`_*Pilih Pekerjaan Yang Kamu Inginkan*_\n\n_• Kuli_ \n_• Montir_ \n_• Petani_ \n_• Dokter_ \n_• Pedagang_ \n_• Ojek_ \n\nContoh Penggunaan :\nkerja Kuli`)
}
}
}
break

case 'bankcek': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0]: m.fromMe ? conn.user.jid: m.sender
if (!(who in db.data.users)) return reply(`User ${who} not in database`)
let user = db.data.users[who]
let isMods = global.owner.filter(([number, _, isCreator]) => number && isCreator).map(([number]) => number).map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(who)
let isPremium = isCreator || new Date() - user.premiumTime < 0
let caption = `
▧「 *BANK CEK* 」
┃ •  👤 Name: ${user.registered ? user.name: conn.getName(m.sender)}
┃ •  ${global.rpg.emoticon('atm')} Atm: ${user.atm > 0 ? 'Level ' + user.atm: '✖️'}
┃ •  ${global.rpg.emoticon('bank')} Bank: ${user.bank} / ${user.fullatm}
┃ •  ${global.rpg.emoticon('money')} Money: ${user.money}
┃ •  ${global.rpg.emoticon('chip')} Chip: ${user.chip}
┃ •  🤖 Robo: ${user.robo > 0 ? 'Level ' + user.robo: '✖️'}
┃ •  🌟 Status: ${isMods ? 'Developer' : isCreator ? 'Owner' : isPremium ? 'Premium User ✅' : user.level > 999 ? 'Elite User' : 'Free User'}
┃ •  📑 Registered: ${user.registered ? 'Yes': 'No'}
└────···
`.trim()
reply(`${caption}`)
}
break

case 'bansos': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}

function clockString(ms) {
let h = Math.floor(ms / 3600000);
let m = Math.floor(ms / 60000) % 60;
let s = Math.floor(ms / 1000) % 60;
return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
}

let user = db.data.users[m.sender];
let randomaku = Math.floor(Math.random() * 101);
let randomkamu = Math.floor(Math.random() * 101);
let __timers = new Date() - user.lastbansos;
let _timers = 360 - __timers;
let timers = clockString(_timers);

if (user.money < 1000) {
return reply(`Uang Anda Harus Diatas Seribu Untuk Menggunakan Command Ini`);
}

if (new Date() - user.lastbansos > 300000) {
if (randomaku > randomkamu) {
user.money -= 3000000;
user.lastbansos = new Date() * 1;
return conn.sendMessage(m.chat, {
image: { url: 'https://telegra.ph/file/afcf9a7f4e713591080b5.jpg' },
caption: `Kamu Tertangkap Setelah Kamu korupsi dana bansos🕴️💰,Dan Kamu harus membayar denda 3 Juta rupiah💵`
});
} else if (randomaku < randomkamu) {
user.money += 3000000;
user.lastbansos = new Date() * 1;
return conn.sendMessage(m.chat, {
image: { url: 'https://telegra.ph/file/d31fcc46b09ce7bf236a7.jpg' },
caption: `Kamu berhasil korupsi dana bansos🕴️💰,Dan Kamu mendapatkan 3 Juta rupiah💵`
});
} else {
user.lastbansos = new Date() * 1;
return reply(`Sorry Gan Lu g Berhasil Korupsi bansos Dan Tidak masuk penjara karna Kamu *melarikan diri🏃*`);
}
} else {
return reply(`Silahkan Menunggu Beberapa Menit Untuk bansos Lagi`);
}
}
break;


case 'taxy': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
let __timers = (new Date - db.data.users[m.sender].lastmisi)
let _timers = (3600000 - __timers)
let order = db.data.users[m.sender].ojekk
let timers = clockString(_timers)
let name = conn.getName(m.sender)
let user = db.data.users[m.sender]
let id = m.sender
let kerja = 'Taxy'
conn.misi = conn.misi ? conn.misi : {}
if (id in conn.misi) {
reply(`Selesaikan Misi ${conn.misi[id][0]} Terlebih Dahulu`)
throw false
}
if (new Date - user.lastmisi > 3600000) {
let randomaku1 = Math.floor(Math.random() * 1000000)
let randomaku2 = Math.floor(Math.random() * 10000)

var dimas = `
🚶⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳 🏘️ 🚕


✔️ Mendapatkan orderan....
`.trim()

var dimas2 = `
🚶⬛⬛⬛⬛⬛🚐⬛⬛⬛🚓🚚
🚖⬜⬜⬜⬛⬜⬜⬜🚓⬛🚑
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🚙
🏘️🏘️🏢️🌳🌳 🏘️🏘️🏡


🚖 Mengantar Ke tujuan.....
`.trim()

var dimas3 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🚓
⬛⬜🚗⬜⬜⬛⬜🚐⬜⬜⬛🚙🚚🚑
⬛⬛⬛⬛🚒⬛⬛⬛⬛⬛⬛🚚
🏘️🏘️🏘️🏘️🌳🌳 🏘️


🚖 Selesai Mengantar Pelanggan....
`.trim()

var dimas4 = `
➕ 💹Menerima gaji....
`.trim()

var hsl = `
*—[ Hasil Taxy ${name} ]—*
➕ 💹 Uang = [ ${randomaku1} ]
➕ ✨ Exp = [ ${randomaku2} ]
➕ 😍 Order Selesai = +1
➕ 📥Total Order Sebelumnya : ${order}
`.trim()

user.money += randomaku1
user.exp += randomaku2
user.ojekk += 1

conn.misi[id] = [
kerja,
setTimeout(() => {
delete conn.misi[id]
}, 27000)
]

setTimeout(() => {
reply(`${hsl}`)
}, 27000)

setTimeout(() => {
reply(`${dimas4}`)
}, 25000)

setTimeout(() => {
reply(`${dimas3}`)
}, 20000)

setTimeout(() => {
reply(`${dimas2}`)
}, 15000)

setTimeout(() => {
reply(`${dimas}`)
}, 10000)

setTimeout(() => {
reply('🔍Mencari pelanggan.....')
}, 0)
user.lastmisi = new Date * 1
} else reply(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
}
break

case 'leaderboard': {
  if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk Memulai Rpg Game Ketik .joinrpg Dan Untuk Keluar Game Ketik .exitrpg')
  if (!isGroup) return reply(mess.group)

  const { areJidsSameUser } = require('@whiskeysockets/baileys')
  const metadata = await conn.groupMetadata(m.chat)
  const participants = metadata.participants

  const leaderboards = [
    'level','exp','limit','money','iron','gold','diamond','emerald','trash',
    'joinlimit','potion','petFood','wood','rock','string','common','uncommon',
    'mythic','legendary','pet','bank','chip','skata'
  ]

  function sort(prop, asc = true) {
    return (a, b) => asc ? (a[prop]||0)-(b[prop]||0) : (b[prop]||0)-(a[prop]||0)
  }

  function toNumber(prop, def = 0) {
    return (user, i, arr) => ({...arr[i], [prop]: user[prop] ?? def})
  }

  function enumGetKey(a) { return a.jid }
  function isNumber(x) {
    let n = parseInt(x)
    return !isNaN(n) ? n : false
  }

  let users = Object.entries(db.data.users).map(([jid, data]) => ({...data, jid}))
  let type = (args[0] || '').toLowerCase()
  let leaderboard = leaderboards.filter(v => users.some(u => u[v]))
  let wrong = `🔖 ᴛʏᴩᴇ ʟɪsᴛ :
${leaderboard.map(v => `⮕ ${rpg.emoticon(v)} - ${v}`).join('\n')}
––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
⮕ ᴛᴏ ᴠɪᴇᴡ ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ: ${command} [type]
★ ᴇxᴀᴍᴩʟᴇ: ${command} legendary`

  if (!leaderboard.includes(type)) return reply('*––––『 𝙻𝙴𝙰𝙳𝙴𝚁𝙱𝙾𝙰𝚁𝙳 』––––*\n' + wrong)

  let page = isNumber(args[1]) || 0
  let sorted = users.map(toNumber(type)).sort(sort(type, false))
  let userRanks = sorted.map(enumGetKey)

  let teks = `
🏆 Rank Kamu: ${userRanks.indexOf(m.sender) + 1} Dari ${userRanks.length}

*• ${rpg.emoticon(type)} ${type} •*

${await Promise.all(sorted.slice(page * 5, page * 5 + 5).map(async (u, i) => {
  let name = u.registered ? u.name : await conn.getName(u.jid)
  let fromGroup = participants.some(p => areJidsSameUser(p.id, u.jid))
  return `${i + 1}.*﹙${u[type]}﹚* - ${fromGroup ? `${name} \nwa.me/${u.jid.split('@')[0]}` : 'ғʀᴏᴍ ᴏᴛʜᴇʀ ɢʀᴏᴜᴩ\n@' + u.jid.split('@')[0]}`
}))}`.trim()

  reply(teks, {
    mentions: sorted.slice(page * 5, page * 5 + 5).map(u => u.jid).filter(j => !participants.some(p => areJidsSameUser(p.id, j)))
  })
}
break



case 'mulung': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " jam " + minutes + " menit " + seconds + " detik"
}
let user = db.data.users[m.sender]
let time = user.lastmulung + 1800000

if (new Date - user.lastmulung < 1800000) return reply(`Anda sudah lelah untuk mulung\nTunggu selama ${msToTime(time - new Date())} lagi`)

let botol = Math.floor(Math.random() * 1000)
let kaleng = Math.floor(Math.random() * 1000)
let kardus = Math.floor(Math.random() * 1000)
let gelas = Math.floor(Math.random() * 1000)
let plastik = Math.floor(Math.random() * 1000)

user.botol += botol * 1
user.kaleng += kaleng * 1
user.kardus += kardus * 1
user.gelas += gelas * 1
user.plastik += plastik * 1
user.lastmulung = new Date * 1

reply(`Selamat kamu mendapatkan : \n+${botol} Botol\n+${kaleng} Kaleng\n+${kardus} Kardus\n+${gelas} Gelas\n+${plastik} Plastik`)
}
break

case 'berburu': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
let __timers = (new Date - db.data.users[m.sender].lastmisi)
let _timers = (3600000 - __timers)
let timers = clockString(_timers) 
let name = conn.getName(m.sender)
let user = db.data.users[m.sender]
let id = m.sender
let kerja = 'Berburu'
conn.misi = conn.misi ? conn.misi : {}
if (id in conn.misi) {
return reply( `Selesaikan Misi ${conn.misi[id][0]} Terlebih Dahulu`)
 }
if (new Date - user.lastmisi > 3600000) {
let hewan1 = Math.floor(Math.random() * 10)
let hewan2 = Math.floor(Math.random() * 10)
let hewan3 = Math.floor(Math.random() * 10)
let hewan4 = Math.floor(Math.random() * 10)
let hewan5 = Math.floor(Math.random() * 10)
let hewan6 = Math.floor(Math.random() * 10)
let hewan7 = Math.floor(Math.random() * 10)
let hewan8 = Math.floor(Math.random() * 10)
let hewan9 = Math.floor(Math.random() * 10)
let hewan10 = Math.floor(Math.random() * 10)
let hewan11 = Math.floor(Math.random() * 10)
let hewan12 = Math.floor(Math.random() * 10)

let hsl = `🕸 *Hasil Berburu ${user.registered ? user.name : conn.getName(m.sender)}* 
${hewan1 ? `
🐂 Banteng: ${hewan1}` : ''} ${hewan2 ? `
🐅 Harimau: ${hewan2}` : ''} ${hewan3 ? `
🐘 Gajah: ${hewan3}` : ''} ${hewan4 ? `
🐐 Kambing: ${hewan4}` : ''} ${hewan5 ? `
🐼 Panda: ${hewan5}` : ''} ${hewan6 ? `
🐊 Buaya: ${hewan6}` : ''} ${hewan7 ? `
🐃 Kerbau: ${hewan7}` : ''} ${hewan8 ? `
🐮 Sapi: ${hewan8}` : ''} ${hewan9 ? `
🐒 Monyet: ${hewan9}` : ''} ${hewan10 ? `
🐗 Babi Hutan: ${hewan10}` : ''} ${hewan11 ? `
🐖 Babi: ${hewan11}` : ''} ${hewan12 ? `
🐓 Ayam: ${hewan12}` : ''}
`.trim()

user.banteng += hewan1
user.harimau += hewan2
user.gajah += hewan3
user.kambing += hewan4
user.panda += hewan5
user.buaya += hewan6
user.kerbau += hewan7
user.sapi += hewan8
user.monyet += hewan9
user.babihutan += hewan10
user.babi += hewan11
user.ayam += hewan12

conn.misi[id] = [
kerja,
setTimeout(() => {
delete conn.misi[id]
}, 20000)
]

setTimeout(() => {
reply(`${hsl}`)
}, 20000)

setTimeout(() => {
reply(`Nah ini dia`)
}, 18000)

setTimeout(() => {
reply('Dorr🔥')
}, 15000)

setTimeout(() => {
reply('Dapat Sasaran')
}, 14000)

setTimeout(() => {
reply('Sedang mencari mangsa...')
}, 0)
user.lastmisi = new Date * 1
} else reply(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
}
break

case 'polisi': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
let __timers = (new Date - db.data.users[m.sender].lastmisi)
let _timers = (3600000 - __timers)
let order = db.data.users[m.sender].ojekk
let timers = clockString(_timers)
let name = conn.getName(m.sender)
let user = db.data.users[m.sender]
let id = m.sender
let kerja = 'Polisi'
conn.misi = conn.misi ? conn.misi: {}
if (id in conn.misi) {
reply(`Selesaikan Misi ${conn.misi[id][0]} Terlebih Dahulu`)
throw false
}
if (new Date - db.data.users[m.sender].lastmisi > 3600000) {
let randomaku1 = Math.floor(Math.random() * 10)
let randomaku2 = Math.floor(Math.random() * 10)

let rbrb1 = (randomaku1 * 100000)
let rbrb2 = (randomaku2 * 1000)

var dimas = `
👮Mengejar Pencuri....
`.trim()

var dimas2 = `
👮Menangkap pencuri....
`.trim()

var dimas3 = `
🚔Membawa ke kantor polisi\nDan di penjara
`.trim()

var dimas4 = `
➕ 💹Menerima gaji....
`.trim()

var hsl = `
*—[ Hasil Polisi ${name} ]—*
➕ 💹 Uang = [ ${rbrb1} ]
➕ ✨ Exp = [ ${rbrb2} ]
➕ 😍 Order Selesai = +1
➕ 📥Total Order Sebelumnya : ${order}
`.trim()

user.money += rbrb1
user.exp += rbrb2
user.ojekk += 1

conn.misi[id] = [
kerja,
setTimeout(() => {
delete conn.misi[id]
}, 27000)
]

setTimeout(() => {
reply(`${hsl}`)
}, 27000)

setTimeout(() => {
reply(`${dimas4}`)
}, 25000)

setTimeout(() => {
reply(`${dimas3}`)
}, 20000)

setTimeout(() => {
 reply(`${dimas2}`)
}, 15000)

setTimeout(() => {
reply(`${dimas}`)
}, 10000)

setTimeout(() => {
reply('??Sedang Berpatroli.....')
}, 0)
user.lastmisi = new Date * 1
} else reply(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
}
break

// let pajak = 0.02
case 'berdagang': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

let dapat = (Math.floor(Math.random() * 5000))
let who
if (isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) return reply ('Tag salah satu lah, yang kamu ingin berdagang bareng')
if (typeof db.data.users[who] == 'undefined') return reply('Pengguna tidak ada didalam data base')
let __timers = (new Date - db.data.users[m.sender].lastdagang)
let _timers = (28800000 - __timers)
let timers = clockString(_timers)
let users = db.data.users
let username = conn.getName(who)
if (new Date - db.data.users[m.sender].lastdagang > 28800000) {
if (4999 > users[who].money) return reply ('Target tidak memiliki modal harap masukkan modal 5000')
if (4999 > users[m.sender].money) return reply ('kamu tidak memiliki modal harap masukkan modal 5000')
users[who].money -= dapat * 1
users[m.sender].money -= dapat * 1
db.data.users[m.sender].lastdagang = new Date * 1
reply(`Mohon tunggu kak..\nKamu dan @${who.replace(/@.+/, '')} sedang berdagang.. ðŸ˜…\n\nKamu dan @${who.replace(/@.+/, '')} meletakkan modal -${dapat} ðŸ˜…`)
setTimeout(() => {
reply(m.chat, `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`, m, {
contextInfo: {
mentionedJid: [m.sender, who]
}})
}, 3600000)
setTimeout(() => {
reply(`Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`, {
contextInfo: {
mentionedJid: [m.sender, who]
}})
}, 7200000)
setTimeout(() => {
reply( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
}, 10800000)
setTimeout(() => {
reply( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
}, 14400000)
setTimeout(() => {
reply( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
}, 18000000)
setTimeout(() => {
reply( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
}, 21600000)
setTimeout(() => {
reply( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +50000\n${users[m.sender].money += 50000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
}, 25200000)
setTimeout(() => {
reply( `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +10000\n${users[m.sender].money += 10000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +100000\n${users[who].money += 100000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
}, 28800000)
} else reply(`Anda Sudah Berdagang , tunggu ${timers} lagi..`)

}
break

case 'merampok':
case 'rampok': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
let dapat = (Math.floor(Math.random() * 100000))
let users = db.data.users
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : (m.quoted && m.quoted.sender);
if (!who) return reply('Tag orang yang mau kamu Rampok!');
if (users[who].level > users[m.sender].level) return reply(`Level kamu harus lebih tinggi dari @${who.split('@')[0]} Untuk bisa merampoknya!`, false, { mentions: [who] })
let __timers = (new Date - db.data.users[m.sender].lastrampok)
let _timers = (3600000 - __timers)
let timers = clockString(_timers)
if (new Date - db.data.users[m.sender].lastrampok > 3600000) {
if (10000 > users[who].money) return reply('ᴛᴀʀɢᴇᴛ ɢᴀᴀᴅᴀ 💰ᴜᴀɴɢ ʙᴏᴅᴏʜ, ᴋɪꜱᴍɪɴ ᴅɪᴀ')
users[who].money -= dapat * 1
users[m.sender].money += dapat * 1
db.data.users[m.sender].lastrampok = new Date * 1
reply( `ʙᴇʀʜᴀꜱɪʟ ᴍᴇʀᴀᴍᴘᴏᴋ ᴍᴏɴᴇʏ ᴛᴀʀɢᴇᴛ ꜱᴇʙᴇꜱᴀʀ 💰${dapat}`)
} else reply( `Anda Sudah merampok dan berhasil sembunyi , tunggu ${timers} untuk merampok lagi`)
}
break

case 'banknabung': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
if (!q) return reply(`_*Anda Tidak Menginput Jumlah Uang Yang Ingin Ditabung*_

- _*${prefix}${command} jumlah*_
- _*${prefix}${command} all*_

\`${prefix}${command} 10000\``)
const xpperlimit = 1
let user = db.data.users[m.sender]
count = q.toLowerCase() === 'all' ? user.money : parseInt(q)
count = Math.min(user.money, count)
if (count <= 0) return reply('Kamu tidak memiliki cukup uang untuk menabung.')
if (user.atm == 0) return reply('kamu belum mempunyai kartu ATM')
if (user.bank > user.fullatm) return reply('Uang Di ATM sudah penuh!')
if (count > user.fullatm - user.bank) return reply('Uangnya nya sudah mencapai batas')
if (user.money >= xpperlimit * count) {
user.money -= xpperlimit * count
user.bank += count
reply(`Sukses menabung sebesar ${count} Money 💹`)
} else {
return
}
}
break

case 'banktarik': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
if (!q) return reply(`_*Anda Tidak Menginput Jumlah Uang Yang Ingin Ditarik*_

- _*${prefix}${command} jumlah*_
- _*${prefix}${command} all*_

\`${prefix}${command} 10000\``);
const xpperlimit = 1
let user = db.data.users[m.sender]
count = q.toLowerCase() === 'all' ? user.bank : parseInt(q)
count = Math.min(user.bank, count)
if (count <= 0) return reply('Kamu tidak memiliki cukup uang untuk menabung.')
if (user.atm == 0) return reply('kamu belum mempuyai kartu ATM !')
if (user.bank >= xpperlimit * count) {
user.bank -= xpperlimit * count
user.money += count
reply(`Sukses menarik sebesar ${count} Money 💹`)
} else {
return
}
}
break

case 'berkebon':{
if (!isGroup) return reply(mess.group)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
const timeout = 1800000
let __timers = (new Date - db.data.users[m.sender].lastberkebon)
let _timers = (timeout - __timers)
let timers = clockString(_timers)
let user = db.data.users[m.sender]
let { stock } = db.data.settings[botNumber]
let pisang = 100 - user.bibitpisang
let anggur = 100 - user.bibitanggur
let mangga = 100 - user.bibitmangga
let jeruk = 100 - user.bibitjeruk
let apel = 100 - user.bibitapel
let kerja = 'Berkebun'
let id = m.chat
.misi = conn.misi ? conn.misi : {}
if (id in conn.misi) {
reply(`Selesaikan Misi ${conn.misi[id][0]} Terlebih Dahulu`)
return false
}
let caption = `
📮 Kamu Membutuhkan Bibit:\n${user.bibitpisang < 100 ? `\n${global.rpg.emoticon('bibitpisang')} BibitPisang: ${pisang}`: ''} ${user.bibitanggur < 100 ? `\n${global.rpg.emoticon('bibitanggur')} BibitAnggur: ${anggur}`: ''} ${user.bibitmangga < 100 ? `\n${global.rpg.emoticon('bibitmangga')} BibitMangga: ${mangga}`: ''} ${user.bibitjeruk < 100 ? `\n${global.rpg.emoticon('bibitjeruk')} BibitJeruk: ${jeruk}`: ''} ${user.bibitapel < 100 ? `\n${global.rpg.emoticon('bibitapel')} BibitApel: ${apel}`: ''}`.trim()
if (new Date - user.lastberkebon > 1800000) {
if (user.bibitpisang >= 100 && user.bibitanggur >= 100 && user.bibitmangga >= 100 && user.bibitapel >= 100 && user.bibitjeruk >= 100) {
let hasil1 = Math.floor(Math.random() * 100)
let hasil2 = Math.floor(Math.random() * 100)
let hasil3 = Math.floor(Math.random() * 100)
let hasil4 = Math.floor(Math.random() * 100)
let hasil5 = Math.floor(Math.random() * 100)

let caption = `⌛ Hasil Panen Kamu

${global.rpg.emoticon('pisang')} Pisang: ${hasil1}
${global.rpg.emoticon('anggur')} Anggur ${hasil2}
${global.rpg.emoticon('mangga')} Mangga: ${hasil3}
${global.rpg.emoticon('jeruk')} Jeruk: ${hasil4}
${global.rpg.emoticon('apel')} Apel: ${hasil5}
`
user.pisang += hasil1
user.anggur += hasil2
user.mangga += hasil3
user.jeruk += hasil4
user.apel += hasil5

user.bibitpisang -= 100
user.bibitanggur -= 100
user.bibitmangga -= 100
user.bibitjeruk -= 100
user.bibitapel -= 100

stock.bibitpisang += 100
stock.bibitanggur += 100
stock.bibitmangga += 100
stock.bibitjeruk += 100
stock.bibitapel += 100


conn.misi[id] = [
kerja,
setTimeout(() => {
delete conn.misi[id]
}, 20000)
]

setTimeout(() => {
reply(`${caption.trim()}`)
}, 20000)

setTimeout(() => {
reply('Sedang Menanam Bibit...')
}, 0)
user.lastberkebon = new Date * 1
} else reply(`${caption}`)
} else reply(`Mohon Menunggu Selama ${timers} Untuk Berkebun Kembali...`)
}
break

case 'bet': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
function number(x = 0) {
x = parseInt(x)
return !isNaN(x) && typeof x == 'number'
}
const items = [ 'money', 'chip' ]
let user = db.data.users[m.sender]
let item = items.filter(v => v in user && typeof user[v] == 'number')
let type = (args[0] || '').toLowerCase()
let count = (args[1] && number(parseInt(args[1])) ? Math.max(parseInt(args[1]), 1): /all/i.test(args[1]) ? Math.floor(parseInt(user[type])): 1) * 1
if (!item.includes(type)) return reply(`*List Item:*\n${item.map(v => `${global.rpg.emoticon(v)}${v}`.trim()).join('\n')}\n\nExample:\nbet money 100000`)
if ((user[type] * 1) < count) return reply(`*${type} ${global.rpg.emoticon(type)}* kamu tidak cukup!!`)
let moneyDulu = user[type] * 1
let txt = (m.msg && m.msg.selectedDisplayText ? m.msg.selectedDisplayText: m.text ? m.text: '').toLowerCase()
try {
let Bot = (Math.ceil(Math.random() * 91)) * 1
let Kamu = (Math.floor(Math.random() * 71)) * 1
let status = 'Kalah'
if (Bot < Kamu) {
user[type] += count * 1
status = 'Menang'
} else if (Bot > Kamu) {
user[type] -= count * 1
} else {
status = 'Seri'
user[type] += (Math.floor(count / 1.5)) * 1
}
reply(`
| *PLAYERS* | *POINT* |
*🤖 BOT:* {Bot}
*👤 KAMU:* ${Kamu}

Kamu *${status}*, kamu ${status == 'Menang' ? `Mendapatkan *+${count * 2}*`: status == 'Kalah' ? `Kehilangan *-${count * 1}*`: `Mendapatkan *+${Math.floor(count / 1.5)}*`} *${type} ${global.rpg.emoticon(type)}*
`.trim())
} catch (e) {
if (moneyDulu > (user[type] * 1)) user[type] = moneyDulu * 1
reply('Error saat melakukan judi (Rejected)')
}
}
break

case 'claim':
case 'bonus': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return hours + " jam " + minutes + " menit " + seconds + " detik"
}
let user = db.data.users[m.sender]
let time = user.lastbonus + 86400000
if (new Date - user.lastbonus < 86400000) return reply(`Kamu Sudah Ambil Bonus Hari Ini\nTunggu selama ${msToTime(time - new Date())} lagi`)
let money = Math.floor(Math.random() * 50000000)
user.money += money * 1
user.lastbonus = new Date * 1
reply(`Selamat Kamu Mendapatkan Bonus : \n+${money} Money`)
}
break
case 'addlimit': {
   if (!isCreator) return reply('❌ Fitur ini hanya bisa digunakan oleh *Owner*.');
  if (!text.includes('|')) return reply('❗ Format salah!\nContoh: .addlimit 628xxx|10');

  const [nomor, jumlah] = text.split('|').map(v => v.trim());
  if (!nomor || isNaN(jumlah)) return reply('❗ Nomor atau jumlah tidak valid.');

  const id = nomor.includes('@s.whatsapp.net') ? nomor : nomor + '@s.whatsapp.net';
  const user = global.db.data.users[id];

  if (!user) return reply(`❌ User dengan nomor ${nomor} belum terdaftar.`);

  user.limit += parseInt(jumlah);

  reply(`✅ Limit berhasil ditambahkan!

👤 *Nomor:* ${nomor}
➕ *Ditambah:* ${jumlah} limit
📦 *Total Sekarang:* ${user.limit} limit`);
}
break;
case 'addmoney': {
   if (!isCreator) return reply('❌ Fitur ini hanya bisa digunakan oleh *Owner*.');
  if (!text.includes('|')) return reply('❗ Format salah!\nContoh: .addmoney 628xxx|10');

  const [nomor, jumlah] = text.split('|').map(v => v.trim());
  if (!nomor || isNaN(jumlah)) return reply('❗ Nomor atau jumlah tidak valid.');

  const id = nomor.includes('@s.whatsapp.net') ? nomor : nomor + '@s.whatsapp.net';
  const user = global.db.data.users[id];

  if (!user) return reply(`❌ User dengan nomor ${nomor} belum terdaftar.`);

  user.money += parseInt(jumlah);

  reply(`✅ Limit berhasil ditambahkan!

👤 *Nomor:* ${nomor}
➕ *Ditambah:* ${jumlah} money
📦 *Total Sekarang:* ${user.money} money`);
}
break;
case 'addapel': {
   if (!isCreator) return reply('❌ Fitur ini hanya bisa digunakan oleh *Owner*.');
  if (!text.includes('|')) return reply('❗ Format salah!\nContoh: .addapel 628xxx|10');

  const [nomor, jumlah] = text.split('|').map(v => v.trim());
  if (!nomor || isNaN(jumlah)) return reply('❗ Nomor atau jumlah tidak valid.');

  const id = nomor.includes('@s.whatsapp.net') ? nomor : nomor + '@s.whatsapp.net';
  const user = global.db.data.users[id];

  if (!user) return reply(`❌ User dengan nomor ${nomor} belum terdaftar.`);

  user.apel += parseInt(jumlah);

  reply(`✅ Limit berhasil ditambahkan!

👤 *Nomor:* ${nomor}
➕ *Ditambah:* ${jumlah} apel
📦 *Total Sekarang:* ${user.apel} apel`);
}
break;
case 'addpotion': {
   if (!isCreator) return reply('❌ Fitur ini hanya bisa digunakan oleh *Owner*.');
  if (!text.includes('|')) return reply('❗ Format salah!\nContoh: .addpotion 628xxx|10');

  const [nomor, jumlah] = text.split('|').map(v => v.trim());
  if (!nomor || isNaN(jumlah)) return reply('❗ Nomor atau jumlah tidak valid.');

  const id = nomor.includes('@s.whatsapp.net') ? nomor : nomor + '@s.whatsapp.net';
  const user = global.db.data.users[id];

  if (!user) return reply(`❌ User dengan nomor ${nomor} belum terdaftar.`);

  user.potion += parseInt(jumlah);

  reply(`✅ Limit berhasil ditambahkan!

👤 *Nomor:* ${nomor}
➕ *Ditambah:* ${jumlah} potion
📦 *Total Sekarang:* ${user.potion} potion`);
}
break;
case 'addexp': {
   if (!isCreator) return reply('❌ Fitur ini hanya bisa digunakan oleh *Owner*.');
  if (!text.includes('|')) return reply('❗ Format salah!\nContoh: .addexp 628xxx|10');

  const [nomor, jumlah] = text.split('|').map(v => v.trim());
  if (!nomor || isNaN(jumlah)) return reply('❗ Nomor atau jumlah tidak valid.');

  const id = nomor.includes('@s.whatsapp.net') ? nomor : nomor + '@s.whatsapp.net';
  const user = global.db.data.users[id];

  if (!user) return reply(`❌ User dengan nomor ${nomor} belum terdaftar.`);

  user.exp += parseInt(jumlah);

  reply(`✅ Limit berhasil ditambahkan!

👤 *Nomor:* ${nomor}
➕ *Ditambah:* ${jumlah} exp
📦 *Total Sekarang:* ${user.limit} exp`);
}
break;
case 'buah': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
let user = db.data.users[m.sender]
let ini_txt = `[ *GUDANG BUAH KAMU* ]\n\n`
ini_txt += `🍌 ${user.pisang} Pisang\n`
ini_txt += `🍇 ${user.anggur} Anggur\n`
ini_txt += `🥭 ${user.mangga} Mangga\n`
ini_txt += `🍊 ${user.jeruk} Jeruk\n`
ini_txt += `🍎 ${user.apel} Apel\n\n`
ini_txt += `Gunakan command *buah sell* untuk menjual.`
reply(`${ini_txt}`)
}
break

case 'bunuh':
case 'hitman': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
let __timers = (new Date - db.data.users[m.sender].lastmisi)
let _timers = (3600000 - __timers)
let order = db.data.users[m.sender].ojekk
let timers = clockString(_timers)
let name = conn.getName(m.sender)
let user = db.data.users[m.sender]
let id = m.sender
let kerja = 'Bunuh'
conn.misi = conn.misi ? conn.misi : {}
if (id in conn.misi) {
reply(`Selesaikan Misi ${conn.misi[id][0]} Terlebih Dahulu`)
throw false
}
if (new Date - db.data.users[m.sender].lastmisi > 3600000) {
let randomaku4 = Math.floor(Math.random() * 10)
let randomaku5 = Math.floor(Math.random() * 10)

let rbrb4 = (randomaku4 * 100000)
let rbrb5 = (randomaku5 * 1000)

var dimas = `
🕵️ Mendapatkan Target.....
`.trim()

var dimas2 = `
⚔️ Menusuk Tubuhnya.....
`.trim()

var dimas3 = `
☠️ Target meninggal\nDan kamu mengambil barang² nya
`.trim()

var dimas4 = `
💼 Hasil dari membunuh....
`.trim()

var hsl = `
*—[ Hasil ${name} ]—*
➕ 💹 Uang = [ ${rbrb4} ]
➕ ✨ Exp = [ ${rbrb5} ]
➕ 👮 Pelanggaran +1
➕ ☑️ Misi Berhasil = +1
➕ 📥Total Misi Sebelumnya : ${order}
`.trim()

user.money += rbrb4
user.exp += rbrb5
user.ojekk += 1
user.warn += 1

conn.misi[id] = [
kerja,
setTimeout(() => {
delete conn.misi[id]
}, 27000)
]
setTimeout(() => {
reply(`${hsl}`)
}, 27000)

setTimeout(() => {
reply(`${dimas4}`)
}, 25000)

setTimeout(() => {
reply(`${dimas3}`)
}, 20000)

setTimeout(() => {
reply(`${dimas2}`)
}, 15000)

setTimeout(() => {
reply(`${dimas}`)
}, 10000)

setTimeout(() => {
reply('🔍Mencari Target pembunuhan.....')
}, 0)
user.lastmisi = new Date * 1
} else reply(`Silahkan , 0nggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
}
break

case 'collect': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
let __timers = (new Date - db.data.users[m.sender].lastclaim)
let _timers = (43200000 - __timers)
let timers = clockString(_timers) 
let user = db.data.users[m.sender]
if (new Date - db.data.users[m.sender].lastclaim > 43200000) {
reply(`Kamu sudah mengclaim dan mendapatkan *1000* 💵money dan *1* 🥤potion`)
user.money += 1000
user.potion += 1
user.lastclaim = new Date * 1
} else reply(`silahkan tunggu *${timers}* lagi untuk bisa mengclaim lagi`)
}
break

case 'craft':
case 'crafting': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
let type = (args[0] || '').toLowerCase()
let _type = (args[0] || '').toLowerCase()
let user = db.data.users[m.sender]
let { stock } = db.data.settings[botNumber]

let caption = `
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█

Gunakan Format *${command} [type]*
contoh *${command} pickaxe*

*乂 List Yang Bisa Di Craft*
*乂 Pickaxe ⛏️
*乂 Sword ⚔️
*乂 Fishingrod 🎣
*乂 Armor 🥼
*乂 Atm 💳

*乂 Recipe*
*乂 Pickaxe ⛏️
〉 10 Kayu
〉 5 Batu
〉 5 Iron
〉 20 String

*乂 Sword ⚔️
〉 10 Kayu
〉 15 Iron

*乂 Fishingrod 🎣
〉 10 Kayu
〉 2 Iron
〉 20 String

*乂 Armor 🥼
〉 30 Iron
〉 1 Emerald
〉 5 Diamond

*乂 Atm 💳
〉3 Emerald
〉6 Diamond
〉10k Money
`
try {
if (/craft|Crafting/i.test(command)) {
const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
switch (type) {
case 'pickaxe':
if (user.pickaxe > 0) return reply('Kamu sudah memilik ini')
if(user.rock < 5 || user.wood < 10 || user.iron < 5 || user.string < 20) return reply(`Barang tidak cukup!\nUntuk membuat pickaxe. Kamu memerlukan : ${user.wood < 10 ? `\n${10 - user.wood} kayu🪵` : ''} ${user.iron < 5 ? `\n${5 - user.iron} iron⛓` : ''}${user.string < 20 ? `\n${20 - user.string} String🕸️` : ''}${user.rock < 5 ? `\n${5 - user.rock} Batu 🪨` : ''}`)
user.wood -= 10
stock.wood += 10

user.iron -= 5
stock.iron += 5

user.rock -= 5
stock.rock += 5

user.string -= 20
stock.string += 20

user.pickaxe += 1
user.pickaxedurability = 40
reply("Sukses membuat 1 pickaxe 🔨")
break

case 'sword':
if (user.sword > 0) return reply('Kamu sudah memilik ini')
if(user.wood < 10 || user.iron < 15) return reply(`Barang tidak cukup!\nUntuk membuat sword. Kamu memerlukan :${user.wood < 10 ? `\n${10 - user.wood} kayu🪵` : ''}${user.iron < 15 ? `\n${15 - user.iron} iron⛓️` : ''}`)
user.wood -= 10
stock.wood += 10

user.iron -= 15
stock.iron += 15

user.sword += 1
user.sworddurability = 40
reply("Sukses membuat 1 sword 🗡️")
break

case 'fishingrod':
if (user.fishingrod > 0) return reply('Kamu sudah memilik ini')
if(user.wood < 20 || user.iron < 5 || user.string < 20) return reply(`Barang tidak cukup!\nUntuk membuat pancingan. Kamu memerlukan :${user.wood < 20 ? `\n${20 - user.wood} kayu🪵` : ''}${user.iron < 5 ? `\n${5 - user.iron} iron⛓` : ''}${user.string < 20 ? `\n${20 - user.string} String🕸️` : ''}`)
user.wood -= 10
stock.wood += 10

user.iron -= 2
stock.iron +=2

user.string -= 20
stock.string += 20

user.fishingrod += 1
user.fishingroddurability = 40
reply("Sukses membuat 1 Pancingan 🎣")
break

case 'armor':
if (user.armor > 0) return reply('Kamu sudah memilik ini')
if(user.iron < 30 || user.emerald < 1 || user.diamond < 5) return reply(`Barang tidak cukup!\nUntuk membuat armor. Kamu memerlukan :${user.iron < 30 ? `\n${30 - user.iron} Iron ⛓️` : ''}${user.emerald < 1 ? `\n${1 - user.emerald} Emerald ❇️` : ''}${user.diamond < 5 ? `\n${5 - user.diamond} Diamond 💎` : ''}`)
user.emerald -= 1
stock.emerald += 1

user.iron -= 30
stock.iron += 30

user.diamond -= 5
stock.diamond += 5

user.armor += 1
user.armordurability = 50
reply("Sukses membuat 1 Armor 🥼")
break

case 'atm':
if (user.atm > 0) return reply('Kamu sudah memilik ini')
if(user.emerald < 3 || user.money < 10000 || user.diamond < 6) return reply(`Barang tidak cukup!\nUntuk membuat atm. Kamu memerlukan :${user.money < 10000 ? `\n${10000 - user.money} Money 💹` : ''}${user.emerald < 3 ? `\n${3 - user.emerald} Emerald ❇️` : ''}${user.diamond < 6 ? `\n${6 - user.diamond} Diamond 💎` : ''}`)
user.emerald -= 3
stock.emerald += 3

user.diamond -= 6
stock.diamond += 6

user.money -= 10000
user.atm += 1
user.fullatm = 500000000
reply("Sukses membuat 1 Atm 💳")
break
default:
return await reply(`${caption}`)
}
} 
} catch (err) {
reply("Error\n\n\n" + err.stack)
}
}
break

case 'feed': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 310000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, ' H ', m, ' M ', s, ' S'].map(v => v.toString().padStart(2, 0)).join('')
}

let info = `
乂 List Pet:
🐈 • Cᴀᴛ
🐕 • Dᴏɢ
🐎 • Hᴏʀsᴇ
🦊 • Fᴏx
🤖 • Rᴏʙᴏ

*➠ Example:* ${command}fcat
`.trim()
let pesan = pickRandom(['ɴʏᴜᴍᴍᴍ~', 'ᴛʜᴀɴᴋs', 'ᴛʜᴀɴᴋʏᴏᴜ ^-^', '...', 'ᴛʜᴀɴᴋ ʏᴏᴜ~', 'ᴀʀɪɢᴀᴛᴏᴜ ^-^'])
let type = (args[0] || '').toLowerCase()
let emo = (type == 'fox' ? '🦊':'' || type == 'cat' ? '🐈':'' || type == 'dog' ? '🐕':'' || type == 'horse' ? '🐴':'' || type == 'robo'? '🤖':'' ) 
let user = db.data.users[m.sender]
let rubah = db.data.users[m.sender].fox
let kuda = db.data.users[m.sender].horse
let kucing = db.data.users[m.sender].cat
let anjing = db.data.users[m.sender].dog
let robot = db.data.users[m.sender].robo
switch (type) {
case 'fox':
if (rubah == 0) return reply('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
if (rubah == 10) return reply('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
let __waktur = (new Date - user.foxlastfeed)
let _waktur = (10000 - __waktur)
let waktur = clockString(_waktur)
if (new Date - user.foxlastfeed > 10000) {
if (user.petfood > 0) {
user.petfood -= 1
user.foxexp += 20
user.foxlastfeed = new Date * 1
reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
if (rubah > 0) {
let naiklvl = ((rubah * 100) - 1)
if (user.foxexp > naiklvl) {
user.fox += 1
user.foxexp -= (rubah * 100)
reply(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
}
}
} else reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
} else reply(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktur}*`)
break

case 'cat':
if (kucing == 0) return reply('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
if (kucing == 10) return reply('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
let __waktuc = (new Date - user.catlastfeed)
let _waktuc = (10000 - __waktuc)
let waktuc = clockString(_waktuc)
if (new Date - user.catlastfeed > 10000) {
if (user.petfood > 0) {
user.petfood -= 1
user.catexp += 20
user.catlastfeed = new Date * 1
reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)

if (kucing > 0) {
let naiklvl = ((kucing * 100) - 1)
if (user.catexp > naiklvl) {
user.cat += 1
user.catexp -= (kucing * 100)
reply(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
}
}
} else reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
} else reply(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktuc}*`)
break

case 'dog':
if (anjing == 0) return reply('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
if (anjing == 10) return reply('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
let __waktua = (new Date - user.doglastfeed)
let _waktua = (10000 - __waktua)
let waktua = clockString(_waktua)
if (new Date - user.doglastfeed > 10000) {
if (user.petfood > 0) {
user.petfood -= 1
user.dogexp += 20
user.doglastfeed = new Date * 1
reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
if (anjing > 0) {
let naiklvl = ((anjing * 100) - 1)
if (user.dogexp > naiklvl) {
user.dog += 1
user.dogexp -= (anjing * 100)
reply(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
}
}
} else reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
} else reply(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktua}*`)
break

case 'horse':
if (kuda == 0) return reply('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
if (kuda == 10) return reply('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
let __waktuk = (new Date - user.horselastfeed)
let _waktuk = (10000 - __waktuk)
let waktuk = clockString(_waktuk)
if (new Date - user.horselastfeed > 10000) {
if (user.petfood > 0) {
user.petfood -= 1
user.horseexp += 20
user.horselastfeed = new Date * 1
reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
if (kuda > 0) {
let naiklvl = ((kuda * 100) - 1)
if (user.horseexp > naiklvl) {
user.horse += 1
user.horseexp -= (kuda * 100)
reply(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
}
}
} else reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
} else reply(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktuk}*`)
break

case 'robo':
if (robot == 0) return reply('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
if (robot == 10) return reply('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
let __wakturb = (new Date - user.robolastfeed)
let _wakturb = (10000 - __wakturb)
let wakturb = clockString(_wakturb)
if (new Date - user.robolastfeed > 10000) {
if (user.petfood > 0) {
user.petfood -= 1
user.roboexp += 20
user.robolastfeed = new Date * 1
reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
if (robot > 0) {
let naiklvl = ((robot * 100) - 1)
if (user.roboexp > naiklvl) {
user.robo += 1
user.roboexp -= (robot * 100)
reply(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
}
}
} else reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
} else reply(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${wakturb}*`)
break
default:
return reply(`${info}`)
}
}
break

case 'fighting':
 case 'fight': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
 if (!isGroup) return reply(mess.group)
conn.fight = conn.fight ? conn.fight: {}
let user = db.data.users[m.sender]
if (typeof conn.fight[m.sender] != "undefined" && conn.fight[m.sender] == true) return reply(`Kamu masih bertarung.`)
let users = participants.map(a => a.id)
var lawan
lawan = users[Math.floor(users.length * Math.random())]
while (typeof db.data.users[lawan] == "undefined" || lawan == m.sender) {
lawan = users[Math.floor(users.length * Math.random())]
}
reply(`*Kamu* (level ${user.level}) menantang *${conn.getName(lawan)}* (level ${db.data.users[lawan].level}) dan sedang dalam pertarungan.\n\nTunggu 5 menit lagi dan lihat siapa yg menang.`)
conn.fight[m.sender] = true
await delay(300000)
let kesempatan = []
for (let i = 0; i < user.level; i++) kesempatan.push(m.sender)
for (let i = 0; i < db.data.users[lawan].level; i++) kesempatan.push(lawan)
let pointPemain = 0
let pointLawan = 0
for (let i = 0; i < 10; i++) {
let unggul = getRandom(0, kesempatan.length - 1)
if (kesempatan[unggul] == m.sender) pointPemain += 1
else pointLawan += 1
}
if (pointPemain > pointLawan) {
let hadiah = (pointPemain - pointLawan) * 10000
user.money += hadiah
user.limit += 1
reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\n*Kamu* (level ${user.level}) menang melawan *${conn.getName(lawan)}* (level ${db.data.users[lawan].level}) karena kamu ${alasanMenang[getRandom(0, alasanMenang.length - 1)]}\n\nHadiah . ${hadiah.toLocaleString()}\n+1 Limit`)
} else if (pointPemain < pointLawan) {
let denda = (pointLawan - pointPemain) * 100000
user.money -= denda
user.limit += 1
reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\n*Kamu* (level ${user.level}) kalah melawan *${conn.getName(lawan)}* (level ${db.data.users[lawan].level}) karena kamu ${alasanKalah[getRandom(0, alasanKalah.length - 1)]}\n\nMoney kamu berkurang ${denda.toLocaleString()}\n+1 Limit`)
} else {
reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\nHasil imbang kak, ga dapet apa apa`)
}
delete conn.fight[m.sender]
}
break

case 'gajian': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
function JaM(ms) {
let h = isNaN(ms) ? '60' : Math.floor(ms / 3600000) % 60
return [h].map(v => v.toString().padStart(2, 0) ).join(':')
}

function MeNit(ms) {
let m = isNaN(ms) ? '60' : Math.floor(ms / 60000) % 60
return [m].map(v => v.toString().padStart(2, 0) ).join(':')
}

function DeTik(ms) {
let s = isNaN(ms) ? '60' : Math.floor(ms / 1000) % 60
return [s].map(v => v.toString().padStart(2, 0) ).join(':')
}

let LastClaim = db.data.users[m.sender].lastclaim
let cdm = `${MeNit(new Date - LastClaim)}`
let cds = `${DeTik(new Date - LastClaim)}`
let cd1 = Math.ceil(44 - cdm)
let cd2 = Math.ceil(59 - cds)
if (new Date - db.data.users[m.sender].lastclaim > 2700000) {
db.data.users[m.sender].money += 50000
db.data.users[m.sender].exp += 100
reply('Nih gaji lu +Rp50000')
db.data.users[m.sender].lastclaim = new Date * 1
} else return reply(`Lu udah ambil jatah hari ini.\n\nTunggu ${cd1} Menit ${cd2} Detik!`)
}
break      

case 'me':
case 'inventory': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
let inventory = {
others: {
joinlimit: true,
health: true,
money: true,
chip: true,
exp: true,
},
items: {
bibitanggur: true,
bibitmangga: true,
bibitpisang: true,
bibitapel: true,
bibitjeruk: true,
anggur: true,
mangga: true,
pisang: true,
apel: true,
jeruk: true,
potion: true,
trash: true,
wood: true,
rock: true,
string: true,
emerald: true,
diamond: true,
gold: true,
iron: true,
umpan: true,
upgrader: true,
pet: true,
petfood: true,
},
durabi: {
sworddurability: true,
pickaxedurability: true,
fishingroddurability: true,
armordurability: true,
},
tools: {
armor: {
'0': '❌',
'1': 'Leather Armor',
'2': 'Iron Armor',
'3': 'Gold Armor',
'4': 'Diamond Armor',
'5': 'Emerald Armor',
'6': 'Crystal Armor',
'7': 'Obsidian Armor',
'8': 'Netherite Armor',
'9': 'Wither Armor',
'10': 'Dragon Armor',
'11': 'Hacker Armor'
},
sword: {
'0': '❌',
'1': 'Wooden Sword',
'2': 'Stone Sword',
'3': 'Iron Sword',
'4': 'Gold Sword',
'5': 'Copper Sword',
'6': 'Diamond Sword',
'7': 'Emerald Sword',
'8': 'Obsidian Sword',
'9': 'Netherite Sword',
'10': 'Samurai Slayer Green Sword',
'11': 'Hacker Sword'
},
pickaxe: {
'0': '❌',
'1': 'Wooden Pickaxe',
'2': 'Stone Pickaxe',
'3': 'Iron Pickaxe',
'4': 'Gold Pickaxe',
'5': 'Copper Pickaxe',
'6': 'Diamond Pickaxe',
'7': 'Emerlad Pickaxe',
'8': 'Crystal Pickaxe',
'9': 'Obsidian Pickaxe',
'10': 'Netherite Pickaxe',
'11': 'Hacker Pickaxe'
},
fishingrod: {
'0': '❌',
'1': 'Wooden Fishingrod',
'2': 'Stone Fishingrod',
'3': 'Iron Fishingrod',
'4': 'Gold Fishingrod',
'5': 'Copper Fishingrod',
'6': 'Diamond Fishingrod',
'7': 'Emerald Fishingrod',
'8': 'Crystal Fishingrod',
'9': 'Obsidian Fishingrod',
'10': 'God Fishingrod',
'11': 'Hacker Fishingrod'
 }
},
crates: {
common: true,
uncommon: true,
mythic: true,
legendary: true,
},
pets: {
horse: 10,
cat: 10,
fox: 10,
dog: 10,
robo: 10,
},
cooldowns: {}
}

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let user = db.data.users[who]

if (!(who in db.data.users)) return reply(`User ${who} not in database`)

let sortedlevel = Object.entries(db.data.users).sort((a, b) => b[1].level - a[1].level)
let userslevel = sortedlevel.map(v => v[0])
let sortedchip = Object.entries(db.data.users).sort((a, b) => b[1].chip - a[1].chip)
let userschip = sortedchip.map(v => v[0])
let sortedmoney = Object.entries(db.data.users).sort((a, b) => b[1].money - a[1].money)
let usersmoney = sortedmoney.map(v => v[0])
let sorteddiamond = Object.entries(db.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
let usersdiamond = sorteddiamond.map(v => v[0])
let sortedbank = Object.entries(db.data.users).sort((a, b) => b[1].bank - a[1].bank)
let usersbank = sortedbank.map(v => v[0])
let sortedgold = Object.entries(db.data.users).sort((a, b) => b[1].gold - a[1].gold)
let usersgold = sortedgold.map(v => v[0])

let isMods = [conn.decodeJid(conn.user.id), ...global.owner.filter(([number, _, isCreator]) => number && isCreator).map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(who)
let isCreator = m.fromMe || isMods || [conn.decodeJid(conn.user.id), ...global.owner.filter(([number, _, isCreator]) => number && !isCreator).map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(who)
let isPremium = isCreator || new Date() - user.premiumTime < 0

let limit = isPremium ? 'Unlimited' : user.limit
let tools = Object.keys(inventory.tools).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${typeof inventory.tools[v] === 'object' ? inventory.tools[v][user[v]?.toString()] : `Level(s) ${user[v]}`}`).filter(v => v).join('\n').trim()
let items = Object.keys(inventory.items).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${user[v]}`).filter(v => v).join('\n').trim()
let dura = Object.keys(inventory.durabi).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${user[v]}`).filter(v => v).join('\n').trim()
let crates = Object.keys(inventory.crates).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${user[v]}`).filter(v => v).join('\n').trim()
let pets = Object.keys(inventory.pets).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${user[v] >= inventory.pets[v] ? 'Max Levels' : `Level(s) ${user[v]}`}`).filter(v => v).join('\n').trim()
let cooldowns = Object.entries(inventory.cooldowns).map(([cd, { name, time }]) => cd in user && `*✧ ${name}*: ${new Date() - user[cd] >= time ? '✅' : '❌'}`).filter(v => v).join('\n').trim()

let caption = `
🧑🏻‍🏫 ᴜsᴇʀ: *${user.registered ? user.name : conn.getName(who)}* ${user.level ? `
➠ ${global.rpg.emoticon('level')} level: ${user.level}` : ''} ${user.limit ? `
➠ ${global.rpg.emoticon('limit')} limit: ${limit}` : ''}
${Object.keys(inventory.others).map(v => user[v] && `➠ ${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n')} ${tools ? `

*ʟɪꜱᴛ ᴛᴏᴏʟs* :
${tools}` : ''}${items ? `

*ʟɪꜱᴛ ɪᴛᴇᴍs* :
${items}` : ''}${crates ? `

*ʟɪꜱᴛ ᴄʀᴀᴛᴇs* :
${crates}` : ''}${pets ? `

*ʟɪꜱᴛ ᴩᴇᴛs* :
${pets}` : ''}${cooldowns ? `

*ʟɪꜱᴛ ᴀʀᴄʜɪᴇᴠᴇᴍᴇɴᴛ* :
${global.rpg.emoticon('chip')} ᴛᴏᴘ ᴄʜɪᴘ *${userschip.indexOf(who) + 1}* ᴅᴀʀɪ *${userschip.length}*
${global.rpg.emoticon('money')} ᴛᴏᴘ ᴍᴏɴᴇʏ *${usersmoney.indexOf(who) + 1}* ᴅᴀʀɪ *${usersmoney.length}*
${global.rpg.emoticon('bank')} ᴛᴏᴘ ʙᴀɴᴋ *${usersbank.indexOf(who) + 1}* ᴅᴀʀɪ *${usersbank.length}*
${global.rpg.emoticon('level')} ᴛᴏᴘ ʟᴇᴠᴇʟ *${userslevel.indexOf(who) + 1}* ᴅᴀʀɪ *${userslevel.length}*
${global.rpg.emoticon('diamond')} ᴛᴏᴘ ᴅɪᴀᴍᴏɴᴅ *${usersdiamond.indexOf(who) + 1}* ᴅᴀʀɪ *${usersdiamond.length}*
${global.rpg.emoticon('gold')} ᴛᴏᴘ ɢᴏʟᴅ *${usersgold.indexOf(who) + 1}* ᴅᴀʀɪ *${usersgold.length}*

♻️ *ᴄᴏʟʟᴇᴄᴛ ʀᴇᴡᴀʀᴅs* :
${cooldowns}` : ''}
*✧ dungeon: ${user.lastdungeon == 0 ? '✅': '❌'}*
*✧ mining: ${user.lastmining == 0 ? '✅': '❌'}*
*✧ daily: ${user.lastclaimday == 0 ? '✅': '❌'}*
*✧ monthly: ${user.lastclaimwek == 0 ? '✅': '❌'}*
*✧ yearly: ${user.lastclaimyer == 0 ? '✅': '❌'}*
`.trim()

reply(`${caption}`)
}
break

case 'upgrade': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
let user = db.data.users[m.sender]
let wood = user.wood * 1
let rock = user.rock * 1
let string = user.string * 1
let money = user.money * 1
let iron = user.iron * 1
let fishingrod = user.fishingrod * 1
let pickaxe = user.pickaxe * 1
let sword = user.sword * 1
let diamond = user.diamond * 1
let emerald = user.emerald * 1
let armor = user.armor * 1
let atm = user.atm
let type = (args[0] || '').toLowerCase()
let prefix = command

let teks = `█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█

Gunakan Format *${command} [type]*
contoh *${command} fishingRod*

*📌List yang Bisa Di Upgrade*
${rpg.emoticon('fishingrod')}FishingRod
${rpg.emoticon('pickaxe')}Pickaxe
${rpg.emoticon('sword')}Sword
${rpg.emoticon('armor')}Armor
${rpg.emoticon('atm')}Atm
`.trim()

switch (type) {
case 'fishingrod':
if (fishingrod == 0) {
let lmao = `anda belum memiliki *🎣FishingRod*
untuk mendapatkannya ketik *${command}craft fishingrod*`
return reply(`${lmao}`)
}
if (fishingrod > 9) return reply(`*${rpg.emoticon('fishingrod')}FishingRod* kamu sudah level max`)
let _wood = fishingrod * 100
let _string = fishingrod * 100
let _money = fishingrod * 1000000
if (wood < _wood || string < _string || money < _money) return reply(`Material kamu kurang!!${wood < _wood ? `\n${rpg.emoticon('wood')}wood Kamu Kurang *${_wood - wood}*` : ''}${string < _string ? `\n${rpg.emoticon('string')}String Kamu Kurang *${_string - string}*` : ''}${user.money < _money ? `\n${rpg.emoticon('money')}Uang Kamu Kurang *${_money - money}*` : ''}`)
user.fishingrod += 1
user.wood -= _wood * 1
user.string -= _string * 1
user.money -= _money * 1
user.fishingroddurability = 0 
user.fishingroddurability += fishingrod * 50
reply(`Succes mengupgrade *${rpg.emoticon('fishingrod')}FishingRod*`)
break

case 'pickaxe':
if (pickaxe == 0) {
let lmao = `anda belum memiliki *${rpg.emoticon('pickaxe')}Pickaxe*
untuk memilikinya ketik *${command}craft Pickaxe*`
return reply(`${lmao}`)
}
if (pickaxe > 9) return reply(`*${rpg.emoticon('pickaxe')}Pickaxe* kamu sudah level max!!`)
let __rock = pickaxe * 250
let __wood = pickaxe * 150
let __money = pickaxe * 1500000
if (rock < __rock || wood < __wood || money < __money) return reply(`
Material Anda Kurang!!
${rock < __rock ? `\n${rpg.emoticon('rock')}rock kamu kurang *${__rock - rock}*` : ''}${wood < __wood ? `\n${rpg.emoticon('wood')}wood kamu kurang *${__wood - wood}*` : ''}${money < __money ? `\n${rpg.emoticon('money')}Uang kamu kurang *${__money - money}*` : ''}`)
user.pickaxe += 1
user.wood -= __wood * 1
user.rock -= __rock * 1
user.money -= __money * 1
user.pickaxedurability = 0
user.pickaxedurability += pickaxe * 50
reply(`Succes mengupgrade *${rpg.emoticon('pickaxe')}Pickaxe*`)
break

case 'sword':
if (sword == 0) {
let lmao = `anda belum memiliki *${rpg.emoticon('sword')}Sword*
untuk memilikinya ketik *${command}craft sword*`
return reply(`${lmao}`)
}
if (sword > 9) return reply(`*${rpg.emoticon('sword')}Sword* kamu sudah level max!!`)
let _iron = sword * 250
let ___wood = sword * 150
let ___money = sword * 1000000
if (iron < _iron || wood < ___wood || money < ___money) return reply(`
Material Anda Kurang!!
${iron < _iron ? `\n${rpg.emoticon('iron')}Iron kamu kurang *${_iron - iron}*` : ''}${wood < ___wood ? `\n${rpg.emoticon('wood')}wood kamu kurang *${___wood - wood}*` : ''}${money < ___money ? `\n${rpg.emoticon('money')}Uang kamu kurang *${___money - money}*` : ''}`)
user.sword += 1
user.iron -= _iron * 1
user.wood -= ___wood * 1
user.money -= ___money * 1
user.sworddurability = 0 
user.sworddurability += sword * 50 
reply(`Succes mengupgrade *${rpg.emoticon('sword')}Sword*`)
break

case 'armor':
if (armor == 0) {
let lmao = `anda belum memiliki *${rpg.emoticon('armor')}Armor*
untuk memilikinya ketik *${command}craft armor*`
return reply(`${lmao}`)
}
if (armor > 9) return reply(`*${rpg.emoticon('armor')}Armor* kamu sudah level max!!`)
let _diamond = armor * 5
let ____wood = armor * 150
let ____money = armor * 1000000
if (diamond < _diamond || wood < ____wood || money < ____money) return reply(`
Material Anda Kurang!!
${diamond < _diamond ? `\n${rpg.emoticon('diamond')}Diamond kamu kurang *${_diamond - diamond}*` : ''}${wood < ____wood ? `\n${rpg.emoticon('wood')}wood kamu kurang *${____wood - wood}*` : ''}${money < ____money ? `\n${rpg.emoticon('money')}Uang kamu kurang *${____money - money}*` : ''}`)
user.armor += 1
user.diamond -= _diamond * 1
user.wood -= ____wood * 1
user.money -= ____money * 1
user.armordurability = 0 
user.armordurability += sword * 50 
reply(`Succes mengupgrade *${rpg.emoticon('armor')}Armor*`)
break

case 'atm':
if (atm == 0) {
let lmao = `anda belum memiliki *${rpg.emoticon('atm')}Atm*
untuk memilikinya ketik *${command}craft atm*`
return reply(`${lmao}`)
}
if (atm > 999) return reply(`*${rpg.emoticon('atm')}Atm* kamu sudah level max!!`)
let __diamond = atm * 3
let _emerald = atm * 5
let _____money = atm * 10000
if (diamond < __diamond || emerald < _emerald || money < _____money) return reply(`
Material Anda Kurang!!
${diamond < __diamond ? `\n${rpg.emoticon('diamond')}Diamond kamu kurang *${__diamond - diamond}*` : ''}${emerald < _emerald ? `\n${rpg.emoticon('emerald')}Emerald kamu kurang *${_emerald - emerald}*` : ''}${money < _____money ? `\n${rpg.emoticon('money')}Uang kamu kurang *${_____money - money}*` : ''}`)
user.atm += 1
user.diamond -= __diamond * 1
user.emerald -= _emerald * 1
user.money -= _____money * 1
user.fullatm = 0 
user.fullatm += atm * 500000000
reply(`Succes mengupgrade *${rpg.emoticon('atm')}Atm*`)
break
default :
return reply(`${teks}`)
}
}
break

case 'transfer': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
function special(type) {
let b = type.toLowerCase()
let special = (['common', 'uncommon', 'mythic', 'legendary', 'pet'].includes(b) ? ' Crate' : '')
return special
}

function isNumber(x) {
return !isNaN(x)
}
const items = [
'money', 'bank', 'potion', 'trash', 'wood',
'rock', 'string', 'petFood', 'emerald',
'diamond', 'gold', 'iron', 'common',
'uncommon', 'mythic', 'legendary', 'pet', 'chip', 
'anggur', 'apel', 'jeruk', 'mangga', 'pisang', 
'bibitanggur', 'bibitapel', 'bibitjeruk', 'bibitmangga', 'bibitpisang',
]
let user = db.data.users[m.sender]
const item = items.filter(v => v in user && typeof user[v] == 'number')
let lol = `Use format ${command} [type] [value] [number]
example ${command} money 9999 @621927237001

📍 Transferable items
${item.map(v => `${rpg.emoticon(v)}${v}`.trim()).join('\n')}
`.trim()
const type = (args[0] || '').toLowerCase()
if (!item.includes(type)) return reply(lol)
const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
let _user = db.data.users[who]
if (!who) return reply('Tag salah satu, atau ketik Nomernya!!')
if (!(who in db.data.users)) return reply(`User ${who} not in database`)
if (user[type] * 1 < count) return reply(`Your *${rpg.emoticon(type)}${type}${special(type)}* is less *${count - user[type]}*`)
let previous = user[type] * 1
let _previous = _user[type] * 1
user[type] -= count * 1
_user[type] += count * 1
if (previous > user[type] * 1 && _previous < _user[type] * 1) reply(`*––––––『 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁 』––––––*\n*📊 Status:* Succes\n*🗂️ Type:* ${type}${special(type)} ${rpg.emoticon(type)}\n*🧮 Count:* ${count}\n*📨 To:* @${(who || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [who] })
else {
user[type] = previous
_user[type] = _previous
reply(`*––––––『 TRANSFER 』––––––*\n*📊 Status:* Failted\n*📍 Item:* ${count} ${rpg.emoticon(type)}${type}${special(type)}\n*📨 To:* @${(who || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [who] })
}
}
break

case 'buy': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
function isNumber(number) {
if (!number) return number
number = parseInt(number)
return typeof number == 'number' && !isNaN(number)
}

function capitalize(word) {
return word.charAt(0).toUpperCase() + word.substr(1)
}
const items = {
buy: {
limit: {
exp: 9999
},
chip: {
money: 1000000
},
exp: {
money: 1000
},
potion: {
money: 1250
},
trash: {
money: 40
},
wood: {
money: 700
},
rock: {
money: 850
},
string: {
money: 400
},
iron: { 
money: 3000
},
diamond: {
money: 500000
},
emerald: {
money: 100000
},
gold: {
money: 100000
},
common: {
money: 2000
},
uncommon: {
money: 20000
},
mythic: {
money: 75000
},
legendary: {
money: 200000
},
petfood: {
money: 3500
},
pet: {
money: 120000
},
anggur: {
money: 2000
},
apel: {
money: 2000
},
jeruk: {
money: 2000
},
mangga: {
money: 2000
},
pisang: {
money: 2000
},
bibitanggur: {
money: 2000
},
bibitapel: {
money: 2000
},
bibitjeruk: {
money: 2000
},
bibitmangga: {
money: 2000
},
bibitpisang: {
money: 2000
},
umpan: {
money: 5000
} 
},
sell: {
limit: {
exp: 999
},
exp: {
money: 1
},
chip: {
money: 1000000
},
potion: {
money: 625
},
trash: {
money: 20
},
wood: {
money: 350
},
rock: {
money: 425
},
string: {
money: 200
},
iron: { 
money: 1500
},
diamond: {
money: 250000
},
emerald: {
money: 50000
},
gold: {
money: 50000
},
common: {
money: 1000
},
uncommon: {
money: 10000
},
mythic: {
money: 37500
},
legendary: {
money: 100000
},
petfood: {
money: 1750
},
pet: {
money: 60000
},
anggur: {
money: 1000
},
apel: {
money: 1000
},
jeruk: {
money: 1000
},
mangga: {
money: 1000
},
pisang: {
money: 1000
},
bibitanggur: {
money: 1000
},
bibitapel: {
money: 1000
},
bibitjeruk: {
money: 1000
},
bibitmangga: {
money: 1000
},
bibitpisang: {
money: 1000
},
umpan: {
money: 2500
}
}
}

const item = (args[0] || '').toLowerCase()
if (!item.match('limit') && global.db.data.chats[m.sender].rpg == false && isGroup) return dfail('rpg', m, alicia)
let user = global.db.data.users[m.sender]
const listItems = Object.fromEntries(Object.entries(items[command.toLowerCase()]).filter(([v]) => v && v in user))
let text = ''
let footer = ''
let image = ''
let buttons = ''
text = (command.toLowerCase() == 'buy' ?
(`
*𝙱𝚄𝚈𝙸𝙽𝙶*
`.trim()) : 
(`
*𝚂𝙴𝙻𝙻𝙸𝙽𝙶*
`.trim())
)
footer = (command.toLowerCase() == 'buy' ?
(`
🛒 List Items :
${Object.keys(listItems).map((v) => {
let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
return `➠ 1 ${rpg.emoticon(v)} ${capitalize(v)} ﹫ ${listItems[v][paymentMethod]} ${rpg.emoticon(paymentMethod)}${capitalize(paymentMethod)}`.trim()
}).join('\n')}
–––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
➠ ᴛᴏ ʙᴜʏ ɪᴛᴇᴍs:
${command} [item] [quantity]
*乂 ᴇxᴀᴍᴩʟᴇ:
${command} potion 10
`.trim()) : 
(`
🛒 List Items :
${Object.keys(listItems).map((v) => {
let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
return `➠ 1 ${rpg.emoticon(v)} ${capitalize(v)} ﹫ ${listItems[v][paymentMethod]} ${rpg.emoticon(paymentMethod)}${capitalize(paymentMethod)}`.trim()
}).join('\n')}
–––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
➠ ᴛᴏ sᴇʟʟ ɪᴛᴇᴍs:
${command} [item] [quantity]
*乂 ᴇxᴀᴍᴩʟᴇ:
${command} potion 10
`.trim())
)

const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
if (!listItems[item]) return reply(footer)
if (command.toLowerCase() == 'buy') {
let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
if (user[paymentMethod] < listItems[item][paymentMethod] * total) return reply(`Kamu membutuhkan *${(listItems[item][paymentMethod] * total) - user[paymentMethod]}* ${capitalize(paymentMethod)} ${rpg.emoticon(paymentMethod)} Lagi, Untuk Membeli *${total}* ${capitalize(item)} ${rpg.emoticon(item)}. Kamu hanya memiliki *${user[paymentMethod]}* ${capitalize(paymentMethod)} ${rpg.emoticon(paymentMethod)}.`)
user[paymentMethod] -= listItems[item][paymentMethod] * total
user[item] += total
return reply(`Sukses Membeli *${total} ${capitalize(item)} ${rpg.emoticon(item)}*, Seharga *${listItems[item][paymentMethod] * total} ${capitalize(paymentMethod)} ${rpg.emoticon(paymentMethod)}*`)
} else {
let paymentMethot = Object.keys(listItems[item]).find(v => v in user)
if (user[item] < total) return reply(`You don't have enough *${capitalize(item)} ${rpg.emoticon(item)}* to sell, you only have ${user[item]} items`)
user[item] -= total
user[paymentMethot] += listItems[item][paymentMethot] * total
return reply(`Sukses Menjual *${total} ${capitalize(item)} ${rpg.emoticon(item)}*, Seharga *${listItems[item][paymentMethot] * total} ${capitalize(paymentMethot)} ${rpg.emoticon(paymentMethot)}*`)
}
}
break

case 'selectskill': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
let user = db.data.users[m.sender]
let skill = ["swordmaster", "necromancer", "witch", "Archer", "magicswordmaster", "thief", "shadow"]
let bintang = {
"satu": "⭐",
"dua": "⭐⭐",
"tiga": "⭐⭐⭐",
"empat": "⭐⭐⭐⭐",
"lima": "⭐⭐⭐⭐⭐",
"Enam": "⭐⭐⭐⭐⭐⭐"
}
 let skil = text.trim().toLowerCase() // to filter text
 if (!skill.includes(skil)) return reply( `Select *skill🃏* what do you want/pilih skill apa yg kamu inginkan:

${skill.map(skil => `› ${skil}`).join('\n')}

How To use/Cara menggunakan:
${command} <nameskill>
 
Example/Contoh:
${command} necromancer
`)
if (user.skill == "") {
user.skill = skil
reply(`Anda telah memilih Skill ${skil}`)
} else if (user.skill) {
reply(`Anda Sudah Punya skill ${user.skill} Tidak bisa diganti`)
}
}
break

case 'sampah': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
const rewards = {
exp: 500,
money: 20999,
}

const cooldown = 2592000000
let user = db.data.users[m.sender]
if (new Date - user.lastmonthly < cooldown) return reply( `You have already claimed this monthly claim, wait for *${((user.lastmonthly + cooldown) - new Date()).toTimeString()}*`.trim())
let text = ''
for (let reward of Object.keys(rewards)) if (reward in user) {
user[reward] += rewards[reward]
text += `*+${rewards[reward]}* ${rpg.emoticon(reward)}${reward}\n`
}
reply('*––––––『 NYAMPAH 』––––––*\n' + text.trim())
user.lastmonthly = new Date * 1
}
break

case 'roket': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
let __timers = (new Date - db.data.users[m.sender].lastmisi)
let _timers = (3600000 - __timers)
let user = db.data.users[m.sender]
let order = db.data.users[m.sender].rokets
let timers = clockString(_timers)
let name = user.registered ? user.name: conn.getName(m.sender)
let id = m.sender
let kerja = 'Roket'
conn.misi = conn.misi ? conn.misi: {}
if (id in conn.misi) {
reply( `Selesaikan Misi ${conn.misi[id][0]} Terlebih Dahulu`)
throw false
}
if (user.health < 80) return reply(`Anda Harus Memiliki Minimal 80Health`)
if (new Date - db.data.users[m.sender].lastmisi > 3600000) {
let ngerok4 = Math.floor(Math.random() * 10)
let ngerok5 = Math.floor(Math.random() * 10)

let ngrk4 = (ngerok4 * 100000)
let ngrk5 = (ngerok5 * 1000)

let rokit = `🌕


▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████
🚀

👨‍🚀 Memulai penerbangan....
`.trim()

let rokit2 = `🌕


🚀
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████

➕ Dalam penerbangan....
`.trim()

let rokit3 = `🌕🚀


▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████

➕ Sampai di tujuan....
`.trim()

let rokit4 = `🌕🚀

➕ Sukses Mendarat.... 👨‍🚀
`.trim()

let hsl = `
*—[ Hasil Ngroket ${name} ]—*
➕ 💹 Uang = [ ${ngrk4} ]
➕ ✨ Exp = [ ${ngrk5} ]
➕ 😍 Mendarat Selesai = +1
➕📥Total Mendarat Sebelumnya : ${order}
`.trim()

user.money += ngrk4
user.exp += ngrk5
user.rokets += 1
user.health -= 80

conn.misi[id] = [
kerja,
setTimeout(() => {
delete conn.misi[id]
}, 27000)
]

setTimeout(() => {
reply( hsl)
}, 27000)

setTimeout(() => {
reply( rokit4)
}, 25000)

setTimeout(() => {
reply( rokit3)
}, 20000)

setTimeout(() => {
reply( rokit2)
}, 15000)

setTimeout(() => {
reply( rokit)
}, 10000)

setTimeout(() => {
reply( `🔍 ${name} Mencari Lokasi.....`)
}, 0)
user.lastmisi = new Date * 1
} else reply(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
}
break

case 'rob':
case 'robery': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
let user = db.data.users[m.sender]
let __timers = (new Date - user.lastmisi)
let _timers = (3600000 - __timers)
let timers = clockString(_timers)
let id = m.sender
let kerja = 'Rob'
conn.misi = conn.misi ? conn.misi : {}
if (id in conn.misi) {
reply( `Selesaikan Misi ${conn.misi[id][0]} Terlebih Dahulu`)
throw false
}
if (user.health < 80) return reply('Anda Harus Memiliki Minimal 80Health')
if (new Date - db.data.users[m.sender].lastmisi > 3600000) {
let rndm1 = Math.floor(Math.random() * 10)
let rndm2 = Math.floor(Math.random() * 10)

let ran1 = (rndm1 * 100000)
let ran2 = (rndm2 * 1000)

let jln = `
🏘️🚗

✔️ Mengincar target....
`.trim()

let jln2 = `
🏘️ 🚶

➕ Memulai aksi....
`.trim()

let jln3 = `
🏘️

➕ Merampok....
`.trim()

let jln4 = `
🚗



🏘️🚓

➕ 💹Berhasil kabur....
`.trim()

let hsl = `
*—[ Hasil rob ]—*

➕ 💹 Uang = [ ${ran1} ]
➕ ✨ Exp = [ ${ran2} ]
➕ 📦 Rob Selesai = +1

Dan health anda berkurang -80
`.trim()
user.money += ran1
user.exp += ran2
user.health -= 80

conn.misi[id] = [
kerja,
setTimeout(() => {
delete conn.misi[id]
}, 27000)
]

setTimeout(() => {
reply(hsl)
}, 27000)

setTimeout(() => {
reply(jln4)
}, 25000)

setTimeout(() => {
reply(jln3)
}, 20000)

setTimeout(() => {
reply(jln2)
}, 15000)

setTimeout(() => {
reply(jln)
}, 10000)

setTimeout(() => {
reply('🔍Mencari Rumah.....')
}, 0)
user.lastmisi = new Date * 1
} else reply(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
}
break

case 'repair': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
const {default: MessageType } = require ('@adiwajshing/baileys')

let type = (args[0] || '').toLowerCase()
let _type = (args[0] || '').toLowerCase()
let user = db.data.users[m.sender]
db.data.users[m.sender].pickaxe = db.data.users[m.sender].pickaxe || 0
db.data.users[m.sender].sword = db.data.users[m.sender].sword || 0
db.data.users[m.sender].fishingrod = db.data.users[m.sender].fishingrod || 0
db.data.users[m.sender].armor = db.data.users[m.sender].armor || 0
let botol = global.botwm

let lgocraft = `
*「 R E P A I R」*`

let caption = `
*乂 .repaire pickaxe ⛏️
*乂 .repair sword ⚔️
*乂 .repair fishingrod 🎣
*乂 .repair armor 🥼

*❏ RECIPE*
*乂 Pickaxe ⛏️
〉20 Rock
〉 20 Wood
〉 20 Iron
〉 1 Diamond

*乂 Sword ⚔️
〉 20 Wood
〉 20 Iron
〉 2 Gold
〉 1 Diamond

*乂 FishingRod ⚔️
〉 20 Wood
〉 20 String
〉 20 Iron
〉 1 Diamond

*乂 Armor 🥼
〉 15 Iron
〉 2 Gold
〉 1 Diamond
`

try {
if (/repair/i.test(command)) {
const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
switch (type) {
case 'pickaxe':
if (user.pickaxedurability > 99) return reply('Tools ini belum memiliki kerusakan')
if (user.pickaxe == 0) return reply('Kamu belum memilik ini')
if(user.diamond < 1 || user.rock < 20 || user.wood < 20 || user.iron < 20 ) return reply(`Barang tidak cukup!`)
 user.rock -= 20
 user.wood -= 20
 user.iron -= 20
 user.diamond -= 1
 user.pickaxedurability = 100
reply("Sukses memperbaiki!")
break



case '':
break

default:
return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
}
}
} catch (err) {
reply("Error\n\n\n" + err.stack)
}
}
break

case 'referal': {
if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk Memulai Rpg Game Ketik .joinrpg Dan Untuk Keluar Game Ketik .exitrpg')
if (!isGroup) return reply(mess.group)

const { randomInt } = require("crypto")
const xp_first_time = 2500
const xp_link_creator = 15000
const xp_bonus = {
5: 40000,
10: 100000,
20: 250000,
50: 1000000,
100: 10000000,
}

let users = db.data.users

if (text) {
  if ('ref_count' in users[m.sender]) return reply('Kamu Sudah Pernah Memakai Kode Referal!')
  let link_creator = (Object.entries(users).find(([, { ref_code }]) => ref_code === text.trim()) || [])[0]
  if (!link_creator) return reply('Kode Referal Tidak Valid!')
  let count = users[link_creator].ref_count++
  let extra = xp_bonus[count] || 0
  users[link_creator].exp += xp_link_creator + extra
  users[m.sender].exp += xp_first_time
  users[m.sender].ref_count = 0
  reply(`Selamat! Kamu Mendapatkan +${xp_first_time} XP`)
  conn.sendMessage(link_creator, {
    text: `Seseorang Telah Menggunakan Kode Referal Kamu\n+${xp_link_creator + extra} XP`
  })
} else {
  let code = users[m.sender].ref_code = users[m.sender].ref_code || new Array(11).fill().map(() => [...'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'][randomInt(62)]).join('')
  users[m.sender].ref_count = users[m.sender].ref_count || 0
  let command_text = `${command}ref ${code}`
  let custom_message = `Halo! Coba RPG Bot Ini Yuk!\nGunakan Kode Referal Aku: *${code}*\n\nKetik Di Chat Bot:\n${command_text}`
  let share_link = `https://wa.me/?text=${encodeURIComponent(custom_message)}`

  reply(`Dapatkan ${xp_link_creator} XP Untuk Setiap Pengguna Baru Yang Menggunakan Kode Referal Kamu
${users[m.sender].ref_count} Orang Telah Menggunakan Kode Referal Kamu

Kode Referal Kamu: *${code}*

Bagikan Link Ini Ke Teman:\n${share_link}

${Object.entries(xp_bonus).map(([count, xp]) => `${count} Orang = Bonus ${xp} XP`).join('\n')}`)
}
}
break


case 'petstore': 
case 'petshop': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
let type = (args[0] || '').toLowerCase()
let _type = (args[0] || '').toLowerCase()
let user = db.data.users[m.sender]
db.data.users[m.sender].pickaxe = db.data.users[m.sender].pickaxe || 0
db.data.users[m.sender].pedang = db.data.users[m.sender].pedang || 0
db.data.users[m.sender].fishingrod = db.data.users[m.sender].fishingrod || 0

//----------HARGA
let hdog = 2
let hcat = 2
let hhorse = 4
let hfox = 6
let hrobo = 10

let hlion = 10
let hrhinoceros = 10
let hdragon = 10
let hcentaur = 10
let hkyubi = 10
let hgriffin = 10
let hphonix = 10
let hwolf = 10

let logo = `— *P E T S T O R E* —
▮▧▧▧▧▧▧▧▧▧▧▧▧▮`
let caption = `
🐈 *Cat:* ${hcat} 🔖
🐕 *Dog:* ${hdog} 🔖
🐎 *Horse:* ${hhorse} 🔖
🦊 *Fox:* ${hfox} 🔖
🤖 *Robo:* ${hrobo} 🔖

〉 Ingin Beli? Check out:
.petshop cat
.petshop fox
.petshop dog
and more! 🐾
`

try {
if (/petshop/i.test(command)) {
const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
switch (type) {
case 'cat':
if (user.cat > 0) return reply('Kamu sudah memilik ini')
if(user.pet < hcat) return reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hcat
db.data.users[m.sender].cat += 1
reply("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'dog':
if (user.dog > 0) return reply('Kamu sudah memilik ini')
if(user.pet < hdog) return reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hdog
db.data.users[m.sender].dog += 1
reply("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'fox':
if (user.fox > 0) return reply('Kamu sudah memilik ini')
if(user.pet < hfox) return reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hfox
db.data.users[m.sender].fox += 1
reply("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'horse':
if (user.horse > 0) return reply('Kamu sudah memilik ini')
if(user.pet < hhorse) return reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hhorse
db.data.users[m.sender].horse += 1
reply("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'robo':
if (user.robo > 0) return reply('Kamu sudah memilik ini')
if(user.pet < hrobo) return reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hrobo
db.data.users[m.sender].robo += 1
reply("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'lion':
if (user.lion > 0) return reply('Kamu sudah memilik ini')
if(user.pet < hlion) return reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hlion
db.data.users[m.sender].lion += 1
reply("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'rhinoceros':
if (user.rhinoceros > 0) return reply('Kamu sudah memilik ini')
if(user.pet < hrhinoceros) return reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hrhinoceros
db.data.users[m.sender].rhinoceros += 1
reply("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'dragon':
if (user.dragon > 0) return reply('Kamu sudah memilik ini')
if(user.pet < hdragon) return reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hdragon
db.data.users[m.sender].dragon += 1
reply("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'centaur':
if (user.centaur > 0) return reply('Kamu sudah memilik ini')
if(user.pet < hcentaur) return reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hcentaur
db.data.users[m.sender].centaur += 1
reply("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'kyubi':
if (user.kyubi > 0) return reply('Kamu sudah memilik ini')
if(user.pet < hkyubi) return reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hkyubi
db.data.users[m.sender].kyubi += 1
reply("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'griffin':
if (user.griffin > 0) return reply('Kamu sudah memilik ini')
if(user.pet < hgriffin) return reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hgriffin
db.data.users[m.sender].griffin += 1
reply("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'phonix':
if (user.phonix > 0) return reply('Kamu sudah memilik ini')
if(user.pet < hphonix) return reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hphonix
db.data.users[m.sender].phonix += 1
reply("Selamat anda mempunyai pet Baru ! 🎉")
break

case 'wolf':
if (user.wolf > 0) return reply('Kamu sudah memilik ini')
if(user.pet < hwolf) return reply(`Pet Token anda kurang`)
db.data.users[m.sender].pet -= hwolf
db.data.users[m.sender].wolf += 1
reply("Selamat anda mempunyai pet Baru ! 🎉")
break

default:
return await reply(`${logo}\n${caption}`)
}
} else if (/enchant|enchan/i.test(command)) {
const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
switch (_type) {
case 't':
break

case '':
break

default:
return reply(`${logo}\n${caption}`)
}
}
} catch (err) {
reply("Error\n\n\n" + err.stack)
}
}
break

case 'kolam': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
let user = db.data.users[m.sender]
let past = `
╭━━━━「 *BIO* 」 
┊ *💌 Name :* ${user.registered ? user.name : conn.getName(m.sender)}
┊ *📊 Level :* ${user.level}
┊ *✨ Exp :* ${user.exp}
╰═┅═━––––––─ׄ✧

╭━━━━「 *ISI* 」
┊🦀 Kepiting: ${user.kepiting}
┊🦞 Lobster: ${user.lobster}
┊🦐 Udang: ${user.udang}
┊🦑 Cumi: ${user.cumi}
┊🐙 Gurita: ${user.gurita}
┊🐡 Buntal: ${user.buntal}
┊🐠 Dory: ${user.dory}
┊🐳 Orca: ${user.orca}
┊🐬 Lumba: ${user.lumba}
┊🐋 Paus: ${user.paus}
┊🦈 Hiu: ${user.hiu}
╰═┅═━––––––─ׄ✧
🎏 Total Isi: *${user.kepiting + user.lobster + user.udang + user.cumi + user.gurita + user.buntal + user.dory + user.orca + user.lumba + user.paus + user.hiu}* Jenis`
reply(past)
}
break

case 'koboy': {
if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk Memulai Ketik .joinrpg');
if (!isGroup) return reply(mess.group)
function random(arr) {
return arr[Math.floor(Math.random() * arr.length)]
}
try {
conn.tembak = conn.tembak || { musuh: [], tembak: [] }
if (/kiri/i.test(text)) {
let kiri = [
["🤠", "-", "-", "-", "-"],
["-", "🤠", "-", "-", "-"],
["-", "-", "🤠", "-", "-"],
["-", "-", "-", "🤠", "-"],
["-", "-", "-", "-", "🤠"]
]
let posisi = conn.tembak.tembak.indexOf("🤠")
if (posisi == 0 || posisi == 1) conn.tembak.tembak = kiri[0]
else if (posisi == 2) conn.tembak.tembak = kiri[1]
else if (posisi == 3) conn.tembak.tembak = kiri[2]
else if (posisi == 4) conn.tembak.tembak = kiri[3]
let pos = conn.tembak.musuh.join(" ") + "\n\n\n" + conn.tembak.tembak.join(" ")
return reply(pos)
} else if (/kanan/i.test(text)) {
let kanan = [
["🤠", "-", "-", "-", "-"],
["-", "🤠", "-", "-", "-"],
["-", "-", "🤠", "-", "-"],
["-", "-", "-", "🤠", "-"],
["-", "-", "-", "-", "🤠"]
]
let posisi = conn.tembak.tembak.indexOf("🤠")
if (posisi == 0) conn.tembak.tembak = kanan[1]
else if (posisi == 1) conn.tembak.tembak = kanan[2]
else if (posisi == 2) conn.tembak.tembak = kanan[3]
else if (posisi == 3 || posisi == 4) conn.tembak.tembak = kanan[4]
let pos = conn.tembak.musuh.join(" ") + "\n\n\n" + conn.tembak.tembak.join(" ")
return reply(pos)
} else if (/tembak/i.test(text)) {
if (conn.tembak.tembak.indexOf("🤠") == conn.tembak.musuh.indexOf("🥷")) {
conn.tembak = {}
db.data.users[m.sender].money += 1000
return reply("Kamu Menang!\n\nUang += 1000")
} else {
return reply("Tembakanmu Meleset!")
}
} else {
let randMusuh = [
["🥷", "-", "-", "-", "-"],
["-", "🥷", "-", "-", "-"],
["-", "-", "🥷", "-", "-"],
["-", "-", "-", "🥷", "-"],
["-", "-", "-", "-", "🥷"]
]
let randAku = [
["🤠", "-", "-", "-", "-"],
["-", "🤠", "-", "-", "-"],
["-", "-", "🤠", "-", "-"],
["-", "-", "-", "🤠", "-"],
["-", "-", "-", "-", "🤠"]
]
let musuh = random(randMusuh)
let aku = random(randAku)
conn.tembak.musuh = musuh
conn.tembak.tembak = aku
let pos = musuh.join(" ") + "\n\n\n" + aku.join(" ")
return reply(pos)
}
} catch (err) {
console.log('Error Game Koboy:', err)
reply('Terjadi Kesalahan Saat Menjalankan Game.')
}
}
break


case 'pasar': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
const Skepiting = 7000
const Slobster = 7000
const Sudang = 7000
const Scumi = 7000
const Sgurita = 7000
const Sbuntal = 7000
const Sdory = 7000
const Sorca = 7000
const Slumba = 7000
const Spaus = 7000
const Sikan = 7000
const Shiu = 7000
const Sbanteng = 9000
const Sharimau = 9000
const Sgajah = 9000
const Skambing = 9000
const Spanda = 9000
const Sbuaya = 9000
const Skerbau = 9000
const Ssapi= 9000
const Smonyet = 9000
const Sbabihutan = 9000
const Sbabi = 9000
const Sayam = 9000
const Sbotol = 100
const Skardus = 100
const Skaleng = 100
const Sgelas = 100
const Splastik = 100

const _armor = db.data.users[m.sender].armor
const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
let type = (args[0] || '').toLowerCase()
let _type = (args[1] || '').toLowerCase()
let jualbeli = (args[0] || '').toLowerCase()
const Kchat = `╍╌╌╍╌╌╍╌╌╍╌╌┅═━––––––๑
*🛒 Hewan Laut | 💲 Harga Jual*\n═┅═━––––––━––––––๑
🦀 Kepiting: ${Skepiting}
🦞 Lobster: ${Slobster}
🦐 Udang: ${Sudang}
🦑 Cumi: ${Scumi}
🐙 Gurita: ${Sgurita}
🐡 Buntal: ${Sbuntal}
🐠 Dory: ${Sdory}
🐳 Orca: ${Sorca}
🐬 Lumba: ${Slumba}
🐋 Paus: ${Spaus}
🦈 Hiu: ${Shiu}
╍╌╌╍╌╌╍╌╌╍╌╌┅═━––––––๑
*🛒 Hewan Darat | 💲 Harga Jual*\n═┅═━––––––━––––––๑
🐃 Banteng: ${Sbanteng}
🐅 Harimau: ${Sharimau}
🐘 Gajah: ${Sgajah}
🐐 Kambing: ${Skambing}
🐼 Panda: ${Spanda}
🐃 Kerbau: ${Skerbau}
🐊 Buaya: ${Sbuaya}
🐂 Sapi: ${Ssapi}
🐒 Monyet: ${Smonyet}
🐗 Babi Hutan: ${Sbabihutan}
🐖 Babi: ${Sbabi}
🐔 Ayam: ${Sayam}
╍╌╌╍╌╌╍╌╌╍╌╌┅═━––––––๑
📌 *Contoh penggunaan :*\n═┅═━––––––━––––––๑
#pasar jual ayam [Jumlah]
`.trim()
try {
if (/pasar|toko/i.test(command)) {
const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
const sampah = db.data.users[m.sender].sampah
switch (jualbeli) {

case 'jual': 
switch (_type) {
 case 'banteng':
if (db.data.users[m.sender].banteng >= count * 1) {
db.data.users[m.sender].money += Spaus * count
db.data.users[m.sender].banteng -= count * 1
reply( `Sukses Menjual ${count} Banteng Dengan Harga ${Sbanteng * count} Money `.trim())
} else reply( `Banteng Kamu Tidak Cukup`.trim())
break

case 'harimau':
if (db.data.users[m.sender].harimau >= count * 1) {
db.data.users[m.sender].money += Sharimau * count
db.data.users[m.sender].harimau -= count * 1
reply( `Sukses Menjual ${count} Harimau Dengan Harga ${Sharimau * count} Money `.trim())
} else reply( `Harimau Kamu Tidak Cukup`.trim())
break

case 'gajah':
if (db.data.users[m.sender].gajah >= count * 1) {
db.data.users[m.sender].money += Sgajah * count
db.data.users[m.sender].gajah -= count * 1
reply( `Sukses Menjual ${count} Gajah Dengan Harga ${Sgajah * count} Money `.trim())
} else reply( `Gajah Kamu Tidak Cukup`.trim())
break

case 'kambing':
if (db.data.users[m.sender].kambing >= count * 1) {
db.data.users[m.sender].money += Skambing * count
db.data.users[m.sender].kambing -= count * 1
reply( `Sukses Menjual ${count} Kambing Dengan Harga ${Skambing * count} Money `.trim())
} else reply( `Kambing Kamu Tidak Cukup`.trim())
break

case 'panda':
if (db.data.users[m.sender].panda >= count * 1) {
db.data.users[m.sender].money += Spanda * count
db.data.users[m.sender].panda -= count * 1
reply( `Sukses Menjual ${count} Panda Dengan Harga ${Sbuaya * count} Money `.trim())
} else reply( `Panda Kamu Tidak Cukup`.trim())
break

case 'buaya':
if (db.data.users[m.sender].buaya >= count * 1) {
db.data.users[m.sender].money += Sbuaya * count
db.data.users[m.sender].buaya -= count * 1
reply( `Sukses Menjual ${count} Buaya Dengan Harga ${Sbuaya * count} Money `.trim())
} else reply( `Buaya Kamu Tidak Cukup`.trim())
break

case 'kerbau':
if (db.data.users[m.sender].kerbau >= count * 1) {
db.data.users[m.sender].money += Skerbau * count
db.data.users[m.sender].kerbau -= count * 1
reply( `Sukses Menjual ${count} Kerbau Dengan Harga ${Skerbau * count} Money `.trim())
} else reply( `Kerbau Kamu Tidak Cukup`.trim())
break

case 'sapi':
if (db.data.users[m.sender].sapi >= count * 1) {
db.data.users[m.sender].money += Ssapi * count
db.data.users[m.sender].sapi -= count * 1
reply( `Sukses Menjual ${count} Sapi Dengan Harga ${Ssapi * count} Money `.trim())
} else reply( `Sapi Kamu Tidak Cukup`.trim())
break

case 'monyet':
if (db.data.users[m.sender].monyet >= count * 1) {
db.data.users[m.sender].money += Smonyet * count
db.data.users[m.sender].monyet -= count * 1
reply( `Sukses Menjual ${count} Monyet Dengan Harga ${Smonyet * count} Money `.trim())
} else reply( `Monyet Kamu Tidak Cukup`.trim())
break

case 'babi':
if (db.data.users[m.sender].babi >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].babi -= count * 1
reply( `Sukses Menjual ${count} Babi Dengan Harga ${Sbabi * count} Money `.trim())
} else reply( `Babi Kamu Tidak Cukup`.trim())
break

case 'babihutan':
if (db.data.users[m.sender].babihutan >= count * 1) {
db.data.users[m.sender].money += Sbabihutan * count
db.data.users[m.sender].babihutan -= count * 1
reply( `Sukses Menjual ${count} Babi Hutan Dengan Harga ${Sbabihutan * count} Money `.trim())
} else reply( `Babi Hutan Kamu Tidak Cukup`.trim())
break

case 'ayam':
if (db.data.users[m.sender].ayam >= count * 1) {
db.data.users[m.sender].money += Sayam * count
db.data.users[m.sender].ayam -= count * 1
reply( `Sukses Menjual ${count} Ayam Dengan Harga ${Sayam * count} Money `.trim())
} else reply( `Ayam Kamu Tidak Cukup`.trim())
break
//mancing
case 'kepiting':
if (db.data.users[m.sender].kepiting >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].kepiting -= count * 1
reply( `Sukses Menjual ${count} Kepiting Dengan Harga ${Skepiting * count} Money `.trim())
} else reply( `Kepiting Kamu Tidak Cukup`.trim())
break

case 'ikan':
if (db.data.users[m.sender].ikan >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].ikan -= count * 1
reply( `Sukses Menjual ${count} Ikan Dengan Harga ${Sikan * count} Money `.trim())
} else reply( `Ikan Kamu Tidak Cukup`.trim())
break

case 'dory':
if (db.data.users[m.sender].dory >= count * 1) {
db.data.users[m.sender].money += Sdory * count
db.data.users[m.sender].dory -= count * 1
reply( `Sukses Menjual ${count} Ikan Dory Dengan Harga ${Sdory * count} Money `.trim())
} else reply( `Ikan Dory Kamu Tidak Cukup`.trim())
break

case 'gurita':
if (db.data.users[m.sender].gurita >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].gurita -= count * 1
reply( `Sukses Menjual ${count} Gurita Dengan Harga ${Sgurita * count} Money `.trim())
} else reply( `Gurita Kamu Tidak Cukup`.trim())
break

case 'buntal':
if (db.data.users[m.sender].buntal >= count * 1) {
db.data.users[m.sender].money += Sbuntal * count
db.data.users[m.sender].buntal -= count * 1
reply( `Sukses Menjual ${count} Ikan Buntal Dengan Harga ${Sbuntal * count} Money `.trim())
} else reply( `Ikan Buntal Kamu Tidak Cukup`.trim())
break

case 'hiu':
if (db.data.users[m.sender].hiu >= count * 1) {
db.data.users[m.sender].money += Shiu * count
db.data.users[m.sender].hiu -= count * 1
reply( `Sukses Menjual ${count} Hiu Dengan Harga ${Shiu * count} Money `.trim())
} else reply( `Hiu Kamu Tidak Cukup`.trim())
break

case 'orca':
if (db.data.users[m.sender].orca >= count * 1) {
db.data.users[m.sender].money += Sorca * count
db.data.users[m.sender].orca -= count * 1
reply( `Sukses Menjual ${count} Paus Orca Dengan Harga ${Sorca * count} Money `.trim())
} else reply( `Paus Orca Kamu Tidak Cukup`.trim())
break

case 'lumba':
if (db.data.users[m.sender].lumba >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].lumba -= count * 1
reply( `Sukses Menjual ${count} Lumba Lumba Dengan Harga ${Slumba * count} Money `.trim())
} else reply( `Lumba Lumba Kamu Tidak Cukup`.trim())
break

case 'paus':
if (db.data.users[m.sender].paus >= count * 1) {
db.data.users[m.sender].money += Spaus * count
db.data.users[m.sender].paus -= count * 1
reply( `Sukses Menjual ${count} Paus Dengan Harga ${Spaus * count} Money `.trim())
} else reply( `Paus Kamu Tidak Cukup`.trim())
break

case 'lobster':
if (db.data.users[m.sender].lobster >= count * 1) {
db.data.users[m.sender].money += Slobster * count
db.data.users[m.sender].lobster -= count * 1
reply( `Sukses Menjual ${count} Lobster Dengan Harga ${Slobster * count} Money `.trim())
} else reply( `Lobster Kamu Tidak Cukup`.trim())
break
 case 'udang':
if (db.data.users[m.sender].udang >= count * 1) {
db.data.users[m.sender].money += Sudang * count
db.data.users[m.sender].udang -= count * 1
reply( `Sukses Menjual ${count} Udang Dengan Harga ${Sudang * count} Money `.trim())
} else reply( `Udang Kamu Tidak Cukup`.trim())
break

case 'cumi':
if (db.data.users[m.sender].cumi >= count * 1) {
db.data.users[m.sender].money += Scumi * count
db.data.users[m.sender].cumi -= count * 1
reply( `Sukses Menjual ${count} Cumi Dengan Harga ${Scumi * count} Money `.trim())
} else reply( `Cumi Kamu Tidak Cukup`.trim())
 break

case 'botol':
if (db.data.users[m.sender].botol >= count * 1) {
db.data.users[m.sender].money += Sbotol * count
db.data.users[m.sender].botol -= count * 1
reply( `Sukses Menjual ${count} Cumi Dengan Harga ${Sbotol * count} Money `.trim())
} else reply( `Botol Kamu Tidak Cukup`.trim())
break

case 'kaleng':
if (db.data.users[m.sender].kaleng >= count * 1) {
db.data.users[m.sender].money += Skaleng * count
db.data.users[m.sender].kaleng -= count * 1
reply( `Sukses Menjual ${count} Kaleng Dengan Harga ${Skaleng * count} Money `.trim())
} else reply( `Kaleng Kamu Tidak Cukup`.trim())
break

case 'kardus':
if (db.data.users[m.sender].kardus >= count * 1) {
db.data.users[m.sender].money += Skardus * count
db.data.users[m.sender].kardus -= count * 1
reply( `Sukses Menjual ${count} Kardus Dengan Harga ${Skardus * count} Money `.trim())
} else reply( `Kardus Kamu Tidak Cukup`.trim())
break

case 'gelas':
if (db.data.users[m.sender].gelas >= count * 1) {
db.data.users[m.sender].money += Sgelas * count
db.data.users[m.sender].gelas -= count * 1
reply( `Sukses Menjual ${count} Gelas Dengan Harga ${Sgelas * count} Money `.trim())
} else reply( `Gelas Kamu Tidak Cukup`.trim())
break

case 'plastik':
if (db.data.users[m.sender].plastik >= count * 1) {
db.data.users[m.sender].money += Splastik * count
db.data.users[m.sender].plastik -= count * 1
reply( `Sukses Menjual ${count} Plastik Dengan Harga ${Splastik * count} Money `.trim())
} else reply( `Plastik Kamu Tidak Cukup`.trim())
break
default:
return reply(Kchat)
}
break
default:
return reply(Kchat)
}

} else if (/sell|jual|/i.test(command)) {
const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
switch (type) { 
 case 'banteng':
if (db.data.users[m.sender].banteng >= count * 1) {
db.data.users[m.sender].money += Spaus * count
db.data.users[m.sender].banteng -= count * 1
reply( `Sukses Menjual ${count} Banteng Dengan Harga ${Sbanteng * count} Money `.trim())
} else reply( `Banteng Kamu Tidak Cukup`.trim())
break

case 'harimau':
if (db.data.users[m.sender].harimau >= count * 1) {
db.data.users[m.sender].money += Sharimau * count
db.data.users[m.sender].harimau -= count * 1
reply( `Sukses Menjual ${count} Harimau Dengan Harga ${Sharimau * count} Money `.trim())
} else reply( `Harimau Kamu Tidak Cukup`.trim())
break

case 'gajah':
if (db.data.users[m.sender].gajah >= count * 1) {
db.data.users[m.sender].money += Sgajah * count
db.data.users[m.sender].gajah -= count * 1
reply( `Sukses Menjual ${count} Gajah Dengan Harga ${Sgajah * count} Money `.trim())
} else reply( `Gajah Kamu Tidak Cukup`.trim())
break

case 'kambing':
if (db.data.users[m.sender].kambing >= count * 1) {
db.data.users[m.sender].money += Skambing * count
db.data.users[m.sender].kambing -= count * 1
reply( `Sukses Menjual ${count} Kambing Dengan Harga ${Skambing * count} Money `.trim())
} else reply( `Kambing Kamu Tidak Cukup`.trim())
break

case 'panda':
if (db.data.users[m.sender].panda >= count * 1) {
db.data.users[m.sender].money += Spanda * count
db.data.users[m.sender].panda -= count * 1
reply( `Sukses Menjual ${count} Panda Dengan Harga ${Sbuaya * count} Money `.trim())
} else reply( `Panda Kamu Tidak Cukup`.trim())
break

case 'buaya':
if (db.data.users[m.sender].buaya >= count * 1) {
db.data.users[m.sender].money += Sbuaya * count
db.data.users[m.sender].buaya -= count * 1
reply( `Sukses Menjual ${count} Buaya Dengan Harga ${Sbuaya * count} Money `.trim())
} else reply( `Buaya Kamu Tidak Cukup`.trim())
break

case 'kerbau':
if (db.data.users[m.sender].kerbau >= count * 1) {
db.data.users[m.sender].money += Skerbau * count
db.data.users[m.sender].kerbau -= count * 1
reply( `Sukses Menjual ${count} Kerbau Dengan Harga ${Skerbau * count} Money `.trim())
} else reply( `Kerbau Kamu Tidak Cukup`.trim())
break

case 'sapi':
if (db.data.users[m.sender].sapi >= count * 1) {
db.data.users[m.sender].money += Ssapi * count
db.data.users[m.sender].sapi -= count * 1
reply( `Sukses Menjual ${count} Sapi Dengan Harga ${Ssapi * count} Money `.trim())
} else reply( `Sapi Kamu Tidak Cukup`.trim())
break

case 'monyet':
if (db.data.users[m.sender].monyet >= count * 1) {
db.data.users[m.sender].money += Smonyet * count
db.data.users[m.sender].monyet -= count * 1
reply( `Sukses Menjual ${count} Monyet Dengan Harga ${Smonyet * count} Money `.trim())
} else reply( `Monyet Kamu Tidak Cukup`.trim())
break

case 'babi':
if (db.data.users[m.sender].babi >= count * 1) {
db.data.users[m.sender].money += Sbabi * count
db.data.users[m.sender].babi -= count * 1
reply( `Sukses Menjual ${count} Babi Dengan Harga ${Sbabi * count} Money `.trim())
} else reply( `Babi Kamu Tidak Cukup`.trim())
break

case 'babihutan':
if (db.data.users[m.sender].babihutan >= count * 1) {
db.data.users[m.sender].money += Sbabihutan * count
db.data.users[m.sender].babihutan -= count * 1
reply( `Sukses Menjual ${count} Babi Hutan Dengan Harga ${Sbabihutan * count} Money `.trim())
} else reply( `Babi Hutan Kamu Tidak Cukup`.trim())
break

case 'ayam':
if (db.data.users[m.sender].ayam >= count * 1) {
db.data.users[m.sender].money += Sayam * count
db.data.users[m.sender].ayam -= count * 1
reply( `Sukses Menjual ${count} Ayam Dengan Harga ${Sayam * count} Money `.trim())
} else reply( `Ayam Kamu Tidak Cukup`.trim())
break
//mancing
case 'kepiting':
if (db.data.users[m.sender].kepiting >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].kepiting -= count * 1
reply( `Sukses Menjual ${count} Kepiting Dengan Harga ${Skepiting * count} Money `.trim())
} else reply( `Kepiting Kamu Tidak Cukup`.trim())
break

case 'ikan':
if (db.data.users[m.sender].ikan >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].ikan -= count * 1
reply( `Sukses Menjual ${count} Ikan Dengan Harga ${Sikan * count} Money `.trim())
} else reply( `Ikan Kamu Tidak Cukup`.trim())
break

case 'dory':
if (db.data.users[m.sender].dory >= count * 1) {
db.data.users[m.sender].money += Sdory * count
db.data.users[m.sender].dory -= count * 1
reply( `Sukses Menjual ${count} Ikan Dory Dengan Harga ${Sdory * count} Money `.trim())
} else reply( `Ikan Dory Kamu Tidak Cukup`.trim())
break

case 'gurita':
if (db.data.users[m.sender].gurita >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].gurita -= count * 1
reply( `Sukses Menjual ${count} Gurita Dengan Harga ${Sgurita * count} Money `.trim())
} else reply( `Gurita Kamu Tidak Cukup`.trim())
break

case 'buntal':
if (db.data.users[m.sender].buntal >= count * 1) {
db.data.users[m.sender].money += Sbuntal * count
db.data.users[m.sender].buntal -= count * 1
reply( `Sukses Menjual ${count} Ikan Buntal Dengan Harga ${Sbuntal * count} Money `.trim())
} else reply( `Ikan Buntal Kamu Tidak Cukup`.trim())
break

case 'hiu':
if (db.data.users[m.sender].hiu >= count * 1) {
db.data.users[m.sender].money += Shiu * count
db.data.users[m.sender].hiu -= count * 1
reply( `Sukses Menjual ${count} Hiu Dengan Harga ${Shiu * count} Money `.trim())
} else reply( `Hiu Kamu Tidak Cukup`.trim())
break

case 'orca':
if (db.data.users[m.sender].orca >= count * 1) {
db.data.users[m.sender].money += Sorca * count
db.data.users[m.sender].orca -= count * 1
reply( `Sukses Menjual ${count} Paus Orca Dengan Harga ${Sorca * count} Money `.trim())
} else reply( `Paus Orca Kamu Tidak Cukup`.trim())
break

case 'lumba':
if (db.data.users[m.sender].lumba >= count * 1) {
db.data.users[m.sender].money += Skepiting * count
db.data.users[m.sender].lumba -= count * 1
reply( `Sukses Menjual ${count} Lumba Lumba Dengan Harga ${Slumba * count} Money `.trim())
} else reply( `Lumba Lumba Kamu Tidak Cukup`.trim())
break

case 'paus':
if (db.data.users[m.sender].paus >= count * 1) {
db.data.users[m.sender].money += Spaus * count
db.data.users[m.sender].paus -= count * 1
reply( `Sukses Menjual ${count} Paus Dengan Harga ${Spaus * count} Money `.trim())
} else reply( `Paus Kamu Tidak Cukup`.trim())
break

case 'lobster':
if (db.data.users[m.sender].lobster >= count * 1) {
db.data.users[m.sender].money += Slobster * count
db.data.users[m.sender].lobster -= count * 1
reply( `Sukses Menjual ${count} Lobster Dengan Harga ${Slobster * count} Money `.trim())
} else reply( `Lobster Kamu Tidak Cukup`.trim())
break
 case 'udang':
if (db.data.users[m.sender].udang >= count * 1) {
db.data.users[m.sender].money += Sudang * count
db.data.users[m.sender].udang -= count * 1
reply( `Sukses Menjual ${count} Udang Dengan Harga ${Sudang * count} Money `.trim())
} else reply( `Udang Kamu Tidak Cukup`.trim())
break

case 'cumi':
if (db.data.users[m.sender].cumi >= count * 1) {
db.data.users[m.sender].money += Scumi * count
db.data.users[m.sender].cumi -= count * 1
reply( `Sukses Menjual ${count} Cumi Dengan Harga ${Scumi * count} Money `.trim())
} else reply( `Cumi Kamu Tidak Cukup`.trim())
 break

case 'botol':
if (db.data.users[m.sender].botol >= count * 1) {
db.data.users[m.sender].money += Sbotol * count
db.data.users[m.sender].botol -= count * 1
reply( `Sukses Menjual ${count} Botol Dengan Harga ${Sbotol * count} Money `.trim())
} else reply( `Botol Kamu Tidak Cukup`.trim())
break 
case 'kaleng':
if (db.data.users[m.sender].kaleng >= count * 1) {
db.data.users[m.sender].money += Skaleng * count
db.data.users[m.sender].kaleng -= count * 1
reply( `Sukses Menjual ${count} Kaleng Dengan Harga ${Skaleng * count} Money `.trim())
} else reply( `Kaleng Kamu Tidak Cukup`.trim())
break

case 'kardus':
if (db.data.users[m.sender].kardus >= count * 1) {
db.data.users[m.sender].money += Skardus * count
db.data.users[m.sender].kardus -= count * 1
reply( `Sukses Menjual ${count} Kardus Dengan Harga ${Skardus * count} Money `.trim())
} else reply( `Kardus Kamu Tidak Cukup`.trim())
break
 case 'gelas':
if (db.data.users[m.sender].gelas >= count * 1) {
db.data.users[m.sender].money += Sgelas * count
db.data.users[m.sender].gelas -= count * 1
reply( `Sukses Menjual ${count} Gelas Dengan Harga ${Sgelas * count} Money `.trim())
} else reply( `Gelas Kamu Tidak Cukup`.trim())
break

case 'plastik':
if (db.data.users[m.sender].plastik >= count * 1) {
db.data.users[m.sender].money += Splastik * count
db.data.users[m.sender].plastik -= count * 1
reply( `Sukses Menjual ${count} Plastik Dengan Harga ${Splastik * count} Money `.trim())
} else reply( `Plastik Kamu Tidak Cukup`.trim())
break 
default:
return reply(Kchat)
}
}
} catch (err) {
console.log(util.format(err))
let e = String(err)
conn.sendMessage("6288286624778@s.whatsapp.net", { text: "Hello developer, there seems to be an error, please fix it " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}
}
break

case 'ojek': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
let __timers = (new Date - db.data.users[m.sender].lastmisi)
let _timers = (3600000 - __timers)
let order = db.data.users[m.sender].ojekk
let timers = clockString(_timers)
let name = conn.getName(m.sender)
let user = db.data.users[m.sender]
let id = m.sender
let kerja = 'Ojek'
conn.misi = conn.misi ? conn.misi: {}
if (id in conn.misi) {
reply( `Selesaikan Misi ${conn.misi[id][0]} Terlebih Dahulu`)
throw false
}
if (new Date - db.data.users[m.sender].lastmisi > 3600000) {
let randomaku4 = Math.floor(Math.random() * 10)
let randomaku5 = Math.floor(Math.random() * 10)

let rbrb4 = (randomaku4 * 100000)
let rbrb5 = (randomaku5 * 1000)

var dimas = `
🚶⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳 🏘️ 🛵
✔️ Mendapatkan orderan....
`.trim()

var dimas2 = `
🚶🛵⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳 🏘️
➕ Mengantar ke tujuan....
`.trim()

var dimas3 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🛵⬛⬛
🏘️🏘️🏘️🏘️🌳🌳 🏘️
➕ Sampai di tujuan....
`.trim()

var dimas4 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🛵⬛⬛
🏘️🏘️🏘️🏘️🌳🌳 🏘️ 🚶
➕ 💹Menerima gaji....
`.trim()

var hsl = `
*—[ Hasil Ngojek ${name} ]—*
➕ 💹 Uang = [ ${rbrb4} ]
➕ ✨ Exp = [ ${rbrb5} ]
➕ 😍 Order Selesai = +1
➕ 📥Total Order Sebelumnya : ${order}
`.trim()

user.money += rbrb4
user.exp += rbrb5
user.ojekk += 1

conn.misi[id] = [
kerja,
setTimeout(() => {
delete conn.misi[id]
}, 27000)
]

setTimeout(() => {
reply(hsl)
}, 27000)

setTimeout(() => {
reply(dimas4)
}, 25000)

setTimeout(() => {
reply(dimas3)
}, 20000)

setTimeout(() => {
reply(dimas2)
}, 15000)

setTimeout(() => {
reply(dimas)
}, 10000)

setTimeout(() => {
reply('🔍Mencari pelanggan.....')
}, 0)
user.lastmisi = new Date * 1
} else reply(`Silahkan Menunggu Selama ${timers}, Untuk Menyelesaikan Misi Kembali`)
}
break

case 'maling': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)


hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return hours + " jam " + minutes + " menit " + seconds + " detik"
}
const timeout = 604800000

let user = db.data.users[m.sender]
let time = user.lastmaling + 604800000
if (new Date - user.lastmaling< 604800000) return reply(`📮Anda sudah merampok bank\nTunggu selama ⏲️ ${msToTime(time - new Date())} lagi`)
let money = `${Math.floor(Math.random() * 30000)}`.trim()
let exp = `${Math.floor(Math.random() * 999)}`.trim()
let kardus = `${Math.floor(Math.random() * 1000)}`.trim()
user.money += money * 1
user.exp += exp * 1
user.kardus += kardus * 1
user.lastmaling = new Date * 1
reply(`Selamat kamu mendapatkan : \n💰+${money} Money\📦+${kardus} Kardus\n✨+${exp} Exp`)
setTimeout(() => {
reply(`Yuk waktunya Maling lagi 👋…`)
}, timeout)
}
break

case 'mancing': {

if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
let __timers = (new Date - db.data.users[m.sender].lastmisi)
let _timers = (3600000 - __timers)
let timers = clockString(_timers) 
let name = conn.getName(m.sender)
let user = db.data.users[m.sender]
let id = m.sender
let kerja = 'Memancing'
conn.misi = conn.misi ? conn.misi : {}
if (id in conn.misi) {
reply(`Selesaikan Misi ${conn.misi[id][0]} Terlebih Dahulu`)
throw false
}
if (user.umpan == 0) return reply('Kamu Membutuhkan Umpan 🪱 Untuk Memancing!')
if (user.fishingrod == 0 ) return reply('Kamu Harus Mempunyai Fishingrod 🎣 Terlebih Dahulu Jika Ingin Memancing')
if (new Date - user.lastmisi > 3600000) {
let ikan1 = Math.floor(Math.random() * 5)
let ikan2 = Math.floor(Math.random() * 5)
let ikan3 = Math.floor(Math.random() * 5)
let ikan4 = Math.floor(Math.random() * 5)
let ikan5 = Math.floor(Math.random() * 5)
let ikan6 = Math.floor(Math.random() * 5)
let ikan7 = Math.floor(Math.random() * 5)
let ikan8 = Math.floor(Math.random() * 5)
let ikan9 = Math.floor(Math.random() * 5)
let ikan10 = Math.floor(Math.random() * 5)
let ikan11 = Math.floor(Math.random() * 5)
 
let hsl = ` 
*📮 Hasil tangkapan Mu*
${ikan1 ? `
🦀 Kepiting: ${ikan1}` : ''} ${ikan2 ? `
🦞 Lobster: ${ikan2}` : ''} ${ikan3 ? `
🦐 Udang: ${ikan3}` : ''} ${ikan4 ? `
🦑 Cumi: ${ikan4}` : ''} ${ikan5 ? `
🐙 Gurita: ${ikan5}` : ''} ${ikan6 ? `
🐡 Buntal: ${ikan6}` : ''} ${ikan7 ? `
🐠 Dory: ${ikan7}` : ''} ${ikan8 ? `
🐳 Orca: ${ikan8}` : ''} ${ikan9 ? `
🐬 Lumba: ${ikan9}` : ''} ${ikan10 ? `
🐋 Paus: ${ikan10}` : ''} ${ikan11 ? `
🦈 Hiu: ${ikan11}` : ''}
`.trim()
user.kepiting += ikan1
user.lobster += ikan2
user.udang += ikan3
user.cumi += ikan4
user.gurita += ikan5
user.buntal += ikan6
user.dory += ikan7
user.orca += ikan8
user.lumba += ikan9
user.paus += ikan10
user.hiu += ikan11
user.fishingroddurability -= 10
user.umpan -= 1

conn.misi[id] = [
kerja,
setTimeout(() => {
delete conn.misi[id]
}, 20000)
]

setTimeout(() => {
reply(hsl)
}, 20000)

setTimeout(() => {
reply(`Ini Dia Hasil Tangkapanmu`)
}, 18000)

setTimeout(() => {
reply('Kamu Berhasil Menarik Ikan Keluar Dari Air')
}, 15000)

setTimeout(() => {
reply('Kamu Menarik Kailmu')
}, 12000)

setTimeout(() => {
reply('Kail Mu Di Tarik Ikan...')
}, 9000)

setTimeout(() => {
reply('Kamu Sedang Memancing...')
}, 0)
user.lastmisi = new Date * 1
} else reply(`Mohon Tunggu Selama ${timers} Sebelum Memulai Misi Kembali`)
}
break

case 'nguli': {
if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isGroup) return reply(mess.group)
if (new Date - db.data.users[m.sender].lastnguli > 86400000) {
db.data.users[m.sender].limit += 10
reply('_🎉Selamat kamu mendapatkan +10 limit_')
db.data.users[m.sender].lastnguli = new Date * 1
} else reply('[💬] Anda sudah mengklaim upah nguli hari ini')
}
break
case 'mysterybox': {
  if (!isCreator) return reply(mess.creator) // Hanya Owner yang bisa menjalankan
  let hadiahList = ['money', 'exp', 'limit', 'potion']
  let hadiah = hadiahList[Math.floor(Math.random() * hadiahList.length)]
  let jumlah = Math.floor(Math.random() * 5000) + 1000
  let kode = [...Array(10)].map(() => Math.random().toString(36)[2]).join('').toUpperCase()

  global.db.data.redeem = global.db.data.redeem || {}
  global.db.data.redeem[kode] = {
    hadiah,
    jumlah,
    claimed: [],
    messageId: '' // Menyimpan ID pesan yang dikirim
  }

  let teks = `🎁 *Mystery Box Telah Dijatuhkan!*\n\nKode Redeem: *${kode}*\nHadiah: *${jumlah} ${hadiah}*\nLimit Klaim: 3 Orang\n\nReply Pesan Ini Dengan Ketik .claim Untuk Mengkaliam Hadiah!!!`
  let image = { url: 'https://img12.pixhost.to/images/1565/586300176_6726.jpg' }

  let grup = Object.keys(await conn.groupFetchAllParticipating())
  for (let id of grup) {
    let sentMessage = await conn.sendMessage(id, {
      image,
      caption: teks,
      footer: `Mystery Box Rpg By DORAEMONXUMARU`,
    })

    // Simpan ID pesan yang dikirim
    global.db.data.redeem[kode].messageId = sentMessage.key.id
  }

  reply(`Mystery Box Berhasil Dijatuhkan Ke ${grup.length} Grup Dengan Kode: ${kode}`)
}
break

case 'claim': {
  if (!text) return reply('Mana Pesannya?')
  let kode = text.split(' ')[1]
  if (!global.db.data.redeem[kode]) return reply('Kode Redeem Tidak Ditemukan atau Sudah Terklaim!')
  
  let redeem = global.db.data.redeem[kode]
  
  // Cek apakah yang membalas adalah pesan Mystery Box yang dikirimkan sebelumnya
  if (m.message.key.id !== redeem.messageId) return reply('Balas pesan yang berisi Mystery Box untuk klaim!')

  if (redeem.claimed.includes(m.sender)) return reply('Kamu Sudah Mengklaim Kode Ini!')
  if (redeem.claimed.length >= 3) return reply('Limit Klaim Kode Ini Sudah Penuh!')

  // Klaim hadiah
  if (redeem.hadiah === 'money') {
    global.db.data.users[m.sender].money += redeem.jumlah
  } else if (redeem.hadiah === 'exp') {
    global.db.data.users[m.sender].exp += redeem.jumlah
  } else if (redeem.hadiah === 'limit') {
    global.db.data.users[m.sender].limit += redeem.jumlah
  } else if (redeem.hadiah === 'potion') {
    global.db.data.users[m.sender].potion += redeem.jumlah
  }

  // Tandai kode sebagai klaim
  redeem.claimed.push(m.sender)

  reply(`Kamu Telah Berhasil Klaim Hadiah: *${redeem.jumlah} ${redeem.hadiah}* dari Kode Redeem: *${kode}*`)

  // Hapus kode redeem setelah diklaim
  delete global.db.data.redeem[kode]
}
break

case 'jatuhkandrop': {
  if (!isCreator) return reply(mess.creator)
  let hadiahList = ['money', 'exp', 'limit', 'potion']
  let hadiah = hadiahList[Math.floor(Math.random() * hadiahList.length)]
  let jumlah = Math.floor(Math.random() * 5000) + 1000
  let kode = [...Array(10)].map(() => Math.random().toString(36)[2]).join('').toUpperCase()

  global.db.data.redeem = global.db.data.redeem || {}
  global.db.data.redeem[kode] = {
    hadiah,
    jumlah,
    claimed: []
  }

  let teks = `🎁 *Airdrop Telah Dijatuhkan!*\n\nKode Redeem: *${kode}*\nHadiah: *${jumlah} ${hadiah}*\nLimit Klaim: 3 Orang\n\nKlik tombol dibawah untuk klaim!\nBisa Juga : .redeem ${kode}`
  let image = { url: 'https://img12.pixhost.to/images/1521/585467407_6726.jpg' }

  let grup = Object.keys(await conn.groupFetchAllParticipating())
  for (let id of grup) {
    await conn.sendMessage(id, {
      image,
      caption: teks,
      buttons: [
        { buttonId: `.redeem ${kode}`, buttonText: { displayText: 'Klaim Sekarang' }, type: 1 }
      ],
      footer: `Aidrop Rpg By DORAEMONXUMARU`, 
    })
  }

  reply(`Airdrop Berhasil Dijatuhkan Ke ${grup.length} Grup Dengan Kode: ${kode}`)
}
break




case 'redeem': {
  if (!text) return reply('Mana Kode Redeem Nya')

  global.db.data.redeem = global.db.data.redeem || {}
  let data = global.db.data.redeem[text.toUpperCase()]
  if (!data) return reply('Kode Redeem Tidak Valid')

  if (data.claimed.includes(m.sender)) return reply('Kamu Sudah Klaim Kode Ini!')
  if (data.claimed.length >= 3) {
    delete global.db.data.redeem[text.toUpperCase()]
    return reply('Kode Redeem Sudah Mencapai Batas Klaim (3 Orang)')
  }

  data.claimed.push(m.sender)
  let hadiah = data.hadiah
  let jumlah = data.jumlah
  let user = db.data.users[m.sender]

  switch(hadiah) {
    case 'money':
      user.money += jumlah
      break
    case 'exp':
      user.exp += jumlah
      break
    case 'limit':
      user.limit += jumlah
      break
    case 'potion':
      user.potion += jumlah
      break
  }

  reply(`Berhasil Klaim Kode Redeem!\n+${jumlah} ${hadiah}`)

  if (data.claimed.length >= 3) delete global.db.data.redeem[text.toUpperCase()]
}
break
case 'listredeem': {
  if (!isCreator) return reply(mess.creator)
  global.db.data.redeem = global.db.data.redeem || {}
  let data = global.db.data.redeem

  let teks = '*List Kode Redeem Yang Masih Aktif:*\n\n'
  let kode = Object.entries(data)
  if (!kode.length) return reply('Tidak Ada Kode Redeem Aktif.')

  for (let [key, val] of kode) {
    teks += `• *Kode:* ${key}\n`
    teks += `• Hadiah: ${val.hadiah} +${val.jumlah}\n`
    teks += `• Diklaim: ${val.claimed.length}/3\n\n`
  }

  reply(teks.trim())
}
break
case 'hapusredeem': {
  if (!isCreator) return reply(mess.creator)
  if (!text) return reply('Ketik .hapusredeem <kode>')
  global.db.data.redeem = global.db.data.redeem || {}
  const data = global.db.data.redeem
  let code = text.trim().toUpperCase()
  if (!data[code]) return reply('Kode Tidak Ditemukan.')
  delete data[code]
  reply(`Berhasil Menghapus Kode: ${code}`)
}
break


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 GAME FEATURE ───────────────────────────────────────────────────────────────乂 \\
case 'tebakgambar':
//if (!isGroup) return reply(mess.group)
if (from in tebakgambar2) return reply('Masih ada game yang belum diselesaikan');
var { img, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./src/game/tebakgambar.json')));
console.log('Jawaban : '+jawaban)
var teks1 = `*GAME TEBAK GAMBAR*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nDeskripsi: ${deskripsi}\nWaktu: ${gamewaktu} detik`
await conn.sendMessage(from, {image: {url: img}, caption: teks1}, {quoted: m})
tebakgambar2[from] = {
soal: img,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakgambar2[from]) reply(`Waktu habis!\nJawabannya adalah: ${tebakgambar2[from].jawaban}`);
delete tebakgambar2[from];
}, gamewaktu * 1000)
}
break
case 'petakbom': case 'bomb': {


if (sender in petakbom) return reply(`Game mu masih belum terselesaikan, lanjutkan yukk\n\n${petakbom[sender].board.join("")}\n\nKirim ${prefix}delpetakbom untuk menghapus game petak bom`);
function shuffle(array) {
return array.sort(() => Math.random() - 0.5);
}
petakbom[sender] = {
petak: shuffle([0, 0, 0, 2, 0, 2, 0, 2, 0, 0]),
board: ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"],
bomb: 3,
lolos: 7,
pick: 0,
hadiah: randomNomor(5000, 10000),
nyawa: ["❤️", "❤️", "❤️"]
};
await reply(`*PETAK BOM*

${petakbom[sender].board.join("")}

Pilih lah nomor tersebut! dan jangan sampai terkena Bom!
Bomb : ${petakbom[sender].bomb}
Nyawa : ${petakbom[sender].nyawa.join("")}`);
}
break
case 'delpetakbom': case 'delbomb': {

//if (!isGroup) return reply(mess.group)

if (!(sender in petakbom)) return reply(`kamu sedang tidak bermain petakbom!`)
delete petakbom[sender];
conn.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
reply(`Petakbom di akhiri, hadiah Rp. 0`)
}
break
case 'suit': {

if (!isGroup) return reply(mess.group)
if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(sender))) return reply(`Selesaikan suit mu yang sebelumnya`)
let mark = `0@s.whatsapp.net`
if (!froms) return reply(`Siapa yang ingin kamu tantang?\nTag orangnya!\n\nContoh: *${command}* @${mark.split('@')[0]}`)
if (froms === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
if (froms === sender) return reply(`Sad amat main ama diri sendiri`)
if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(froms))) return reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :)`)

var hadiah = randomNomor(10, 20)
let poin = 10
let poin_lose = 10
let timeout = 60000
let id = 'suit_' + new Date() * 1
suit[id] = {
chat: await conn.sendText(from, `@${sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain suit\n\n*Kirim (gas/gamau)* untuk bermain\n\nHadiah : ${hadiah} exp`, m),
id: id,
p: sender,
p2: froms,
status: 'wait',
hadiah: hadiah,
waktu: setTimeout(() => {
if (suit[id]) conn.sendMessage(from, {text: `_Waktu suit habis!_` })
delete suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
case 'tictactoe': case 'ttt': case 'ttc': case 'xox': 
if (!isGroup) return reply(mess.group)
if (from in tictactoe) return reply(`Masih ada game yang blum selesai`)
if (!froms) return reply(`Kirim perintah *${command}* @tag atau reply pesan orangnya!`)
if (froms === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
if (froms === sender) return reply(`Sad amat main ama diri sendiri`)

var hadiah = randomNomor(10, 20)
await reply(`@${sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain TicTacToe\n\n*Kirim (Y/N)* untuk bermain\n\nHadiah : ${hadiah} exp`)
tictactoe[from] = {
id: from,
status: null,
hadiah: hadiah,
penantang: sender,
ditantang: froms,
TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
}
break
case 'delttt': case 'delttc': 
if (!isGroup) return reply(mess.group)
if (!(from in tictactoe)) return reply(`Tidak ada sesi game tictactoe di grup ini`)
if (isAdmins || isCreator) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else if (tictactoe[from].penantang.includes(sender)) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else if (tictactoe[from].ditantang.includes(sender)) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else {
reply(`Anda tidak bisa menghapus sesi tictactoe karena bukan pemain!`)
}
break

case 'tebakanime': 
//if (!isGroup) return reply(mess.group)
if (from in tebakanime) return reply('Masih ada game yang belum diselesaikan');
var { image, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./src/game/tebakanime.json')));
console.log('Jawaban : '+jawaban)
var teks1 = `*GAME TEBAK ANIME*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`
await conn.sendMessage(from, {image: {url: image}, caption: teks1}, {quoted: m})
tebakanime[from] = {
soal: image,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakanime[from]) reply(`Waktu habis!\nJawabannya adalah: ${tebakanime[from].jawaban}`);
delete tebakanime[from];
}, gamewaktu * 1000)
}
break
case 'tebaklagu': 
//if (!isGroup) return reply(mess.group)

if (from in tebaklagu) return reply('Masih ada game yang belum diselesaikan');
var { soal, artis, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./src/game/tebaklagu.json')));
console.log('Jawaban : '+jawaban)
if (jawaban.toLowerCase() == 'audio tidak ditemukan, silahkan request ulang!') return reply('Maaf terjadi kesalahan!')
var teks1 = `*GAME TEBAK LAGU*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nArtist: ${artis}\nWaktu: ${gamewaktu} detik`
await conn.sendMessage(from, {audio: {url: soal}, mimetype: 'audio/mpeg', ptt: true}, {quoted: m}).then(res => {conn.sendText(from, teks1, res)})
tebaklagu[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebaklagu[from]) reply(`Waktu habis\nJawabannya adalah: ${tebaklagu[from].jawaban}`);
delete tebaklagu[from];
}, gamewaktu * 1000)
}
break
case 'kuis': 
//if (!isGroup) return reply(mess.group)

if (from in kuis) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./src/game/kuis.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME KUIS*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
kuis[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (kuis[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete kuis[from];
}, gamewaktu * 1000)
}
break
case 'tebakkalimat': 
//if (!isGroup) return reply(mess.group)

if (from in tebakkalimat) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./src/game/tebakkalimat.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK KALIMAT*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakkalimat[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkalimat[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakkalimat[from];
}, gamewaktu * 1000)
}
break
case 'tebakkata': 
//if (!isGroup) return reply(mess.group)
if (from in tebakkata) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./src/game/tebakkata.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakkata[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkata[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakkata[from];
}, gamewaktu * 1000)
}
break
case 'tebaklirik': 
//if (!isGroup) return reply(mess.group)

if (from in tebaklirik) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./src/game/tebaklirik.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK LIRIK*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebaklirik[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebaklirik[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebaklirik[from];
}, gamewaktu * 1000)
}
break
case 'tebakkimia': 
//if (!isGroup) return reply(mess.group)
if (from in tebakkimia) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./src/game/tebakkimia.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK KIMIA*\n\nSoal: ${soal}\nWaktu: ${gamewaktu} detik`)
tebakkimia[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkimia[from]) reply(`Waktu berakhir :(\nNama unsur dari lambang ${soal}\n\nAdalah: ${monospace(jawaban)}`)
delete tebakkimia[from];
}, gamewaktu * 1000)
}
break
case 'tebakbendera': 
//if (!isGroup) return reply(mess.group)

if (from in tebakbendera) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./src/game/tebakbendera.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK BENDERA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakbendera[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakbendera[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakbendera[from];
}, gamewaktu * 1000)
}
break
case 'susunkata': 
//if (!isGroup) return reply(mess.group)

if (from in susunkata) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./src/game/susunkata.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME SUSUN KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
susunkata[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (susunkata[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete susunkata[from];
}, gamewaktu * 1000)
}
break
case 'asahotak': 
//if (!isGroup) return reply(mess.group)

if (from in asahotak) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./src/game/asahotak.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME ASAH OTAK*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
asahotak[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (asahotak[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete asahotak[from];
}, gamewaktu * 1000)
}
break
case 'siapakahaku': case 'sa': 
//if (!isGroup) return reply(mess.group)

if (from in siapakahaku) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./src/game/siapakahaku.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME SIAPAKAH AKU*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
siapakahaku[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (siapakahaku[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete siapakahaku[from];
}, gamewaktu * 1000)
}
break
case 'caklontong': 
//if (!isGroup) return reply(mess.group)

if (from in caklontong) return reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./src/game/caklontong.json')));
console.log(`Jawaban : ${jawaban}\n${deskripsi}`)
await reply(`*GAME CAK LONTONG*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
caklontong[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (caklontong[from]) reply(`Waktu habis!\nJawabannya adalah: ${jawaban}\n${deskripsi}`)
delete caklontong[from];
}, gamewaktu * 1000)
}
break
case 'math': case 'kuismath': 
//if (!isGroup) return reply(mess.group)

if (from in kuismath) return reply('Masih ada game yang belum diselesaikan!');
let { genMath, modes } = require('./src/game/math')
if (!q) return reply( `┌─〔 Mode 〕\n├ ${Object.keys(modes).join('\n├ ')}\n└────\ncontoh:\n${prefix}math hard`)
if (!(Object.keys(modes)).includes(args[0])) return reply('Pilih mode yang bener GOBLOK!')
var { soal, jawaban, waktu, hadiah } = await genMath(q.toLowerCase()).catch((err) => reply('```Tolong pilih modenya yang benar contoh .math easy```'))
console.log('Jawaban : '+jawaban)
await reply(`*GAME KUIS MATH*\n\nSoal: Berapa hasil dari ${soal.toLowerCase()}\nWaktu: ${waktu / 1000} detik`)
kuismath[from] = {
soal: soal,
jawaban: jawaban,
hadiah: randomNomor(2000, hadiah),
waktu: setTimeout(function () {
if (kuismath[from]) reply(`Waktu habis!\nJawabannya adalah: ${jawaban}`)
delete kuismath[from];
}, waktu)
}
break
case 'family100': case 'f100': 
//if (!isGroup) return reply(mess.group)
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./src/game/family100.json')));
console.log('Jawaban : '+jawaban)
let famil = []
for (let i of jawaban){
let fefsh = i.split('/') ? i.split('/')[0] : i
let iuhbs = fefsh.startsWith(' ') ? fefsh.replace(' ','') : fefsh
let axsfh = iuhbs.endsWith(' ') ? iuhbs.replace(iuhbs.slice(-1), '') : iuhbs
famil.push(axsfh.toLowerCase())
}
await reply(`*GAME FAMILY 100*\n\nSoal: ${soal}\nTotal Jawaban: ${jawaban.length}\n\nWaktu: ${gamewaktu} detik`)
family100[from] = {
soal: soal,
jawaban: famil,
hadiah: randomNomor(10, 20),
waktu: setTimeout(async function () {
if (from in family100) {
let teks = `*WAKTU HABIS!*\nJawaban yang belum terjawab :\n\n`
let jwb = family100[from].jawaban
for (let i of jwb){teks += `\n${i}`}
reply(teks)
delete family100[from];
};
}, gamewaktu * 1000)
}

break //Powered By alice & Darwin
 
case 'casino': {

let buatall = 1
    conn.casino = conn.casino ? conn.casino : {}
    if (m.chat in conn.casino) return reply('Masih Ada Yang Melakukan Casino Disini, Tunggu Sampai Selesai!!')
    else conn.casino[m.chat] = true
    try {
        let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
        let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
        let Aku = (randomaku * 1)
        let Kamu = (randomkamu * 1)
        let count = args[0]
        count = count ? /all/i.test(count) ? Math.floor(users.exp / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
        count = Math.max(1, count)
        if (args.length < 1) return reply(`${prefix}Casino <jumlah>\n${prefix}Casino 1000`)
        if (users.exp >= count * 1) {
            users.exp -= count * 1
            //await reply('') //Kwkwwkkwlwlw
            if (Aku > Kamu) {
                reply(`💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Euphyllia:* ${Aku} Point\n\n*Kamu Kalah*\nKamu Kehilangan ${count} Uang`)
            } else if (Aku < Kamu) {
                users.exp += count * 2
                reply(`💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Euphyllia:* ${Aku} Point\n\n*Kamu Kalah*\nKamu Mendapatkan ${count * 2} uang`)
            } else {
                users.exp += count * 1
                reply(`💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Euphyllia:* ${Aku} Point\n\n*Seri*\nKamu Mendapatkan ${count * 1} uang`)
            }
        } else reply(`Uang Kamu Tidak Mencukupi Untuk Casino Silahkan *bermain game* Terlebih Dahulu!`)
    } catch (e) {
        console.log(e)
        reply('Error!!')
        } finally {
        delete conn.casino[m.chat]
    }
}
break


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 SOUND FEATURE ───────────────────────────────────────────────────────────────乂 \\
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
    try {
        let set;
        if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20';
        else if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log';
        else if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3';
        else if (/earrape/.test(command)) set = '-af volume=12';
        else if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"';
        else if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"';
        else if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25';
        else if (/reverse/.test(command)) set = '-filter_complex "areverse"';
        else if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"';
        else if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"';
        else if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"';
        else if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"';
        if (set) {
            if (/audio/.test(mime)) {
                await reply(mess.wait);
                let media = await conn.downloadAndSaveMediaMessage(quoted);
                let ran = getRandom('.mp3');
                console.log(`Running ffmpeg command: ffmpeg -i ${media} ${set} ${ran}`);
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(media);
                    if (err) {
                        console.error(`ffmpeg error: ${err}`);
                        return reply(err);
                    }
                    
                    let buff = fs.readFileSync(ran);
                    conn.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: m });
                    fs.unlinkSync(ran);
                });
            } else {
                reply(`Reply to the audio you want to change with a caption *${prefix + command}*`);
            }
        } else {
            reply('Invalid command');
        }
    } catch (e) {
        reply(e);
    }
    db.data.users[m.sender].exp += await randomNomor(60)
    break

case 'music1':
case 'music2':
case 'music3':
case 'music4':
case 'music5':
case 'music6':
case 'music7':
case 'music8':
case 'music9':
case 'music10':
case 'music11':
case 'music12':
case 'music13':
case 'music14':
case 'music15':
case 'music16':
case 'music17':
case 'music18':
case 'music19':
case 'music20':
case 'music21':
case 'music22':
case 'music23':
case 'music24':
case 'music25':
case 'music26':
case 'music27':
case 'music28':
case 'music29':
case 'music30':
case 'music31':
case 'music32':
case 'music33':
case 'music34':
case 'music35':
case 'music36':
case 'music37':
case 'music38':
case 'music39':
case 'music40':
case 'music41':
case 'music42':
case 'music43':
case 'music44':
case 'music45':
case 'music46':
case 'music47':
case 'music48':
case 'music49':
case 'music50':
case 'music51':
case 'music52':
case 'music53':
case 'music54':
case 'music55':
case 'music56':
case 'music57':
case 'music58':
case 'music59':
case 'music60':
case 'music61':
case 'music62':
case 'music63':
case 'music64':
case 'music65':
conn.sendMessage(m.chat, { react: { text: "🎧", key: m.key }})
let epep = await getBuffer(`https://github.com/Rez4-3yz/Music-rd/raw/master/music/${command}.mp3`)
await conn.sendMessage(m.chat, { audio: epep, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
db.data.users[m.sender].exp += await randomNomor(60)
break
 case "sad1":
 case "sad2":
 case "sad3":
 case "sad4":
 case "sad5":
 case "sad6":
 case "sad7":
 case "sad8":
 case "sad9":
 case "sad10":
 case "sad11":
 case "sad12":
 case "sad13":
 case "sad14":
 case "sad15":
 case "sad16":
 case "sad17":
 case "sad18":
 case "sad19":
 case "sad20":
 case "sad21":
 case "sad22":
 case "sad23":
 case "sad24":
 case "sad25":
 case "sad26":
 case "sad27":
 case "sad28":
 case "sad29":
 case "sad30":
 case "sad31":
 case "sad32":
 case "sad33":
 case "sad34":
 case "sad35":
 const moai0 = await getBuffer(
 `https://github.com/ZassTdr/Sound-Sad/raw/main/Sad-Music/${command}.mp3`
 );
 conn.sendMessage(
 m.chat,
 {
 audio: moai0,
 mimetype: "audio/mp4",
 ptt: true,
 },
 { quoted: m }
 );
 db.data.users[m.sender].exp += await randomNomor(60)
break
case 'mangkane1':
case 'mangkane2':
case 'mangkane3':
case 'mangkane4':
case 'mangkane5':
case 'mangkane6':
case 'mangkane7':
case 'mangkane8':
case 'mangkane9':
case 'mangkane10':
case 'mangkane11':
case 'mangkane12':
case 'mangkane13':
case 'mangkane14':
case 'mangkane15':
case 'mangkane16':
case 'mangkane17':
case 'mangkane18':
case 'mangkane19':
case 'mangkane20':
case 'mangkane21':
case 'mangkane22':
case 'mangkane23':
case 'mangkane24':
case 'mangkane25':
case 'mangkane26':
case 'mangkane27':
case 'mangkane28':
case 'mangkane29':
case 'mangkane30':
case 'mangkane31':
case 'mangkane32':
case 'mangkane33':
case 'mangkane34':
case 'mangkane35':
case 'mangkane36':
case 'mangkane37':
case 'mangkane38':
case 'mangkane39':
case 'mangkane40':
case 'mangkane41':
case 'mangkane42':
case 'mangkane43':
case 'mangkane44':
case 'mangkane45':
case 'mangkane46':
case 'mangkane47':
case 'mangkane48':
case 'mangkane49':
case 'mangkane50':
case 'mangkane51':
case 'mangkane52':
case 'mangkane53':
case 'mangkane54':
case 'acumalaka':
case 'reza-kecap':
case 'farhan-kebab':
case 'omaga':
case 'kamu-nanya':
case 'anjay':
case 'siuu':{
viot = 'https://telegra.ph/file/48b67f699cfa231e4d5c2.jpg'
thumb = 'https://telegra.ph/file/48b67f699cfa231e4d5c2.jpg'
let sound
if (/sound/.test(command)) sound = `https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`
if (/mangkane/.test(command) && command.replace('mangkane', '') < 25) sound = `https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/${command}.mp3`
if (/mangkane/.test(command) && command.replace('mangkane', '') > 24) sound = `https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/${command}.mp3`
if (/acumalaka|reza-kecap|farhan-kebab|omaga|omaga|kamu-nanya|anjay|siuu/.test(command)) sound = `https://github.com/FahriAdison/Base-Sound/raw/main/audio/${command}.mp3`
if (text.toLowerCase() === 'thumb') {
await conn.sendMessage(m.chat, {audio: {url: sound}, mimetype: 'audio/mpeg', ptt: false, 
contextInfo: {
externalAdReply: {
mediaUrl: ' ', 
mediaType: 2, 
title: '  ⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻  ', 
body: '  ━━━━⬤──────────  ', 
description: 'Now Playing...',
mediaType: 2, 
sourceUrl: ' ',
thumbnail: await (await fetch(viot)).buffer(), 
renderLargerThumbnail: true}}}, {quoted: m})
} else await conn.sendMessage(m.chat, {audio: {url: sound}, mimetype: 'audio/mpeg', ptt: false}, {quoted: m})
}
db.data.users[m.sender].exp += await randomNomor(60)
break


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 NSFW MENU ───────────────────────────────────────────────────────────────乂 \\
 case 'ass':
case 'ahegao':
case 'bdsm':
case 'blowjob':
case 'cuckold':
case 'cum':
case 'eba':
case 'ero':
case 'femdom':
case 'food':
case 'gangbang':
case 'glasses':
case 'jahy':
case 'masturbation':
case 'neko-hentai':
case 'neko-hentai2':
case 'nsfwloli':
case 'orgy':
case 'panties':
case 'pussy':
case 'tentacles':
case 'thighs':
case 'hentai': {
 conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
try {
async function scrapeData() {
    try {
const page = Math.floor(Math.random() * 50);
        const { data } = await axios.get('https://e-hentai.org/tag/random?prev=' + page);
        const $ = cheerio.load(data);
        const results = [];
        $('.glthumb').each((index, element) => {
            const img = $(element).find('img');
            const imgSrc = img.attr('data-src');
            
            if (imgSrc) {
                results.push(imgSrc);
            }
        });
        return results
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
const jmebut = await scrapeData()
const randomUrl = getRandomElement(jmebut);
conn.sendMessage(m.chat, { caption: mess.success, image: { url: randomUrl } }, { quoted: m })
  } catch (error) {
    return m.reply(`💥 Terjadi kesalahan saat mengambil data: ${error.message}`);
  }
}
break


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 PRIMBON MENU ───────────────────────────────────────────────────────────────乂 \\
case 'nomerhoki': case 'nomorhoki': {
if (!text) return reply(`Contoh : ${prefix + command} 6288292024190`)
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return reply(anu.message)
reply(`• *Nomor HP :* ${anu.message.nomer_hp}\n• *Angka Shuzi :* ${anu.message.angka_shuzi}\n• *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n• *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'artimimpi': case 'tafsirmimpi': {
if (!text) return reply(`Contoh : ${prefix + command} belanja`)
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return reply(anu.message)
reply(`• *Mimpi :* ${anu.message.mimpi}\n• *Arti :* ${anu.message.arti}\n• *Solusi :* ${anu.message.solusi}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'ramalanjodoh': case 'ramaljodoh': {
if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'ramalanjodohbali': case 'ramaljodohbali': {
if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'suamiistri': {
if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama Suami :* ${anu.message.suami.nama}\n• *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n• *Nama Istri :* ${anu.message.istri.nama}\n• *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'ramalancinta': case 'ramalcinta': {
if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}\n• *Catatan :* ${anu.message.catatan}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'artinama': {
if (!text) return reply(`Contoh : ${prefix + command} Dika Ardianta`)
let anu = await primbon.arti_nama(text)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'kecocokannama': case 'cocoknama': {
if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Life Path :* ${anu.message.life_path}\n• *Destiny :* ${anu.message.destiny}\n• *Destiny Desire :* ${anu.message.destiny_desire}\n• *Personality :* ${anu.message.personality}\n• *Persentase :* ${anu.message.persentase_kecocokan}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (!text) return reply(`Contoh : ${prefix + command} Dika|Novia`)
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return reply(anu.message)
conn.sendImage(m.chat,  anu.message.gambar, `• *Nama Anda :* ${anu.message.nama_anda}\n• *Nama Pasangan :* ${anu.message.nama_pasangan}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'jadianpernikahan': case 'jadiannikah': {
if (!text) return reply(`Contoh : ${prefix + command} 6, 12, 2020`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Tanggal Pernikahan :* ${anu.message.tanggal}\n• *karakteristik :* ${anu.message.karakteristik}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'sifatusaha': {
if (!ext)return reply(`Contoh : ${prefix+ command} 28, 12, 2021`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Lahir :* ${anu.message.hari_lahir}\n• *Usaha :* ${anu.message.usaha}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'rejeki': case 'rezeki': {
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Lahir :* ${anu.message.hari_lahir}\n• *Rezeki :* ${anu.message.rejeki}\n• *Catatan :* ${anu.message.catatan}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'pekerjaan': {
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Lahir :* ${anu.message.hari_lahir}\n• *Pekerjaan :* ${anu.message.pekerjaan}\n• *Catatan :* ${anu.message.catatan}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (!text) return reply(`Contoh : 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Analisa :* ${anu.message.analisa}\n• *Angka Akar :* ${anu.message.angka_akar}\n• *Sifat :* ${anu.message.sifat}\n• *Elemen :* ${anu.message.elemen}\n• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'potensipenyakit': case 'penyakit': {
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Analisa :* ${anu.message.analisa}\n• *Sektor :* ${anu.message.sektor}\n• *Elemen :* ${anu.message.elemen}\n• *Catatan :* ${anu.message.catatan}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'artitarot': case 'tarot': {
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
conn.sendImage(m.chat, anu.message.image, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Simbol Tarot :* ${anu.message.simbol_tarot}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'fengshui': {
if (!text) return `Contoh : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tahun_lahir}\n• *Gender :* ${anu.message.jenis_kelamin}\n• *Angka Kua :* ${anu.message.angka_kua}\n• *Kelompok :* ${anu.message.kelompok}\n• *Karakter :* ${anu.message.karakter}\n• *Sektor Baik :* ${anu.message.sektor_baik}\n• *Sektor Buruk :* ${anu.message.sektor_buruk}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'haribaik': {
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Lahir :* ${anu.message.tgl_lahir}\n• *Kala Tinantang :* ${anu.message.kala_tinantang}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'harisangar': case 'taliwangke': {
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'harinaas': case 'harisial': {
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Hari Naas :* ${anu.message.hari_naas}\n• *Info :* ${anu.message.catatan}\n• *Catatan :* ${anu.message.info}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'nagahari': case 'harinaga': {
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n• *Catatan :* ${anu.message.catatan}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'arahrejeki': case 'arahrezeki': {
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Hari Lahir :* ${anu.message.hari_lahir}\n• *tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Rezeki :* ${anu.message.arah_rejeki}\n• *Catatan :* ${anu.message.catatan}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'peruntungan': {
if (!text) return reply(`Contoh : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'weton': case 'wetonjawa': {
if (!text) return reply(`Contoh : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Tanggal :* ${anu.message.tanggal}\n• *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n• *Watak Hari :* ${anu.message.watak_hari}\n• *Naga Hari :* ${anu.message.naga_hari}\n• *Jam Baik :* ${anu.message.jam_baik}\n• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'sifat': case 'karakter': {
if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Garis Hidup :* ${anu.message.garis_hidup}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'keberuntungan': {
if (!text) return reply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'memancing': {
if (!text) return reply(`Contoh : ${prefix + command} 12, 1, 2022`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Tanggal :* ${anu.message.tgl_memancing}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'masasubur': {
if (!text) return reply(`Contoh : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return reply(anu.message)
reply(`• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'zodiak': case 'zodiac': {
if (!text) return reply(`Contoh : ${prefix+ command} 7 7 2005`)
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') return date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

let zodiac = await getZodiac(birth[1], birth[2])

let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return reply(anu.message)
reply(`• *Zodiak :* ${anu.message.zodiak}\n• *Nomor :* ${anu.message.nomor_keberuntungan}\n• *Aroma :* ${anu.message.aroma_keberuntungan}\n• *Planet :* ${anu.message.planet_yang_mengitari}\n• *Bunga :* ${anu.message.bunga_keberuntungan}\n• *Warna :* ${anu.message.warna_keberuntungan}\n• *Batu :* ${anu.message.batu_keberuntungan}\n• *Elemen :* ${anu.message.elemen_keberuntungan}\n• *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n• *Catatan :* ${anu.message.catatan}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'shio': {
if (!text) return reply(`Contoh : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
let anu = await primbon.shio(text)
if (anu.status == false) return reply(anu.message)
reply(`• *Hasil :* ${anu.message}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 FUN MENU ───────────────────────────────────────────────────────────────乂 \\
case 'geserplanet': {
  if (!text) return reply('Contoh: .geserplanet mars')

  const planet = text.toLowerCase()
  const efek = {
    mars: [
      '🛰️ Orbit Mars bergeser sejauh 500 km.',
      '🌪️ Debu Mars beterbangan dan mengganggu misi penjelajahan NASA.',
      '📉 Suhu permukaan turun 20°C karena pergeseran dari Matahari.',
      '😨 Robot penjelajah Opportunity mengalami gangguan arah.',
      '⚠️ Komunitas ilmuwan global sedang mencari solusi...'
    ],
    bumi: [
      '🌍 Bumi bergeser 1000 km menjauh dari Matahari.',
      '🌡️ Suhu global turun drastis, menyebabkan mini zaman es.',
      '🌊 Pasang surut air laut menjadi tidak teratur.',
      '🧭 Arah kutub magnet bergeser, kompas jadi kacau.',
      '📡 Satelit komunikasi terputus selama 2 jam.'
    ],
    jupiter: [
      '🪐 Jupiter bergeser 1500 km ke arah luar tata surya.',
      '🌪️ Badai merah besar kehilangan keseimbangan rotasi.',
      '🛰️ Gravitasi Jupiter mengganggu orbit satelitnya.',
      '🧪 Para ilmuwan menyatakan kemungkinan tabrakan antar asteroid meningkat.',
      '🛸 Alien katanya jadi kebingungan navigasi...'
    ]
  }

  const hasil = efek[planet] || [
    `🚀 Planet ${planet} digeser 1000 km dari orbitnya.`,
    '🌌 Gravitasi lokal terganggu.',
    '⚠️ Efek domino terjadi pada planet-planet tetangga.',
    '🧑‍🚀 Ilmuwan panik dan mengadakan konferensi darurat.',
    '😅 Untungnya ini cuma simulasi... semua aman kok.'
  ]

  reply(`🔬 Simulasi Geser Planet: ${planet.toUpperCase()}\n\n${hasil.join('\n')}\n\n📌 Ini hanya simulasi fiktif berbasis teori ilmiah.`)
}
break

case 'apakah': {
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul','Kagak tau gw 🗿','Kenapa tanya gw?🗿','Maleslah mau makan dulu']
const kah = apa[Math.floor(Math.random() * apa.length)]
m.reply(`Pertanyaan : Apakah ${q}\nJawaban : ${kah}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'bisakah': {
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya menjadi presiden`)
const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
m.reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ga}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'bagaimanakah': {
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} cara mengatasi sakit hati`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
m.reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ya}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'rate': {
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const te = ra[Math.floor(Math.random() * ra.length)]
m.reply(`Rate : ${q}\nJawaban : *${te}%*`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'gantengcek': case 'cekganteng': {
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const teng = gan[Math.floor(Math.random() * gan.length)]
m.reply(`Nama : ${q}\nJawaban : *${teng}*`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break           
case 'cantikcek': case 'cekcantik': {
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const tik = can[Math.floor(Math.random() * can.length)]
m.reply(`Nama : ${q}\nJawaban : *${tik}*`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'cekhitam': case 'hitamcek': {
    ;
    if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`);
    
    // Jika nama adalah "rifvky", langsung 100% hitam
    if (q.toLowerCase() === 'yann') {
        m.reply(`Nama : ${q}\nJawaban : *100% Wah Awoaowowow ireng bet*`);
    } else {
        const can = ['10% Yahaha Hitam Lawak Hitam wkwkw Hitam', 
                     '30% Semangat Kaka Merawat Dirinya><', 
                     '20% Semangat Ya Kaka👍', 
                     '40% Wahh Kaka><', 
                     '50% Kaka Hitam deh><', 
                     '60% Hai Hitam🐊', 
                     '70% Hai Ukhty🐊', 
                     '62% Kakak Hitam><', 
                     '74% Kakak ni Hitam deh><', 
                     '83% Love You Kakak><', 
                     '97% Assalamualaikum Ukhty🐊', 
                     '100% Wah Awoaowowow ireng bet', 
                     '29% Semangat Kakak:)', 
                     '94% Hai Hitam><', 
                     '75% Hai Kakak Hitam', 
                     '82% Wihh Kakak Pasti Sering Perawatan kan??', 
                     '41% Semangat:)', 
                     '39% Lebih Semangat🐊'];
        
        const tik = can[Math.floor(Math.random() * can.length)];
        m.reply(`Nama : ${q}\nJawaban : *${tik}*`);
    }
    ;
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
            case 'chindo':
            case 'cina':
            case 'china':
            case 'papua':
            case 'jawa':
            case 'sunda':
            case 'palembang':
            case 'bego':
            case 'goblok':
            case 'janda':
            case 'perawan':
            case 'babi':
            case 'ganteng':
            case 'tolol':
            case 'cantik':
            case 'duda':
            case 'pinter':
            case 'pintar':
            case 'asu':
            case 'bodoh':
            case 'gay':
            case 'lesby':
            case 'bajingan':
            case 'jancok':
            case 'anjing':
            case 'ngentod':
            case 'ngentot':
            case 'monyet':
            case 'mastah':
            case 'newbie':
            case 'nolep':
            case 'lesbi':
            case 'bangsat':
            case 'bangke':
            case 'sange':
            case 'sangean':
            case 'dakjal':
            case 'horny':
            case 'wibu':
            case 'yapit':
            case 'anj':
            case 'puki':
            case 'peak':
            case 'pantex':
            case 'pantek':
            case 'setan':
            case 'iblis':
            case 'cacat':
            case 'yatim':
            case 'piatu': {
                if (!isGroup) return reply(mess.group)
                let member = participants.map(u => u.id).filter(v => v !== conn.user.jid)
                let org = member[Math.floor(Math.random() * member.length)];
                conn.sendMessage(m.chat, {
                    text: `orang ${command} disini adalah @${org.split('@')[0]}`,
                    contextInfo: {
                        mentionedJid: [m.sender, org],
                        forwardingScore: 9999999,
                        isForwarded: true,
                        "externalAdReply": {
                            "showAdAttribution": true,
                            "containsAutoReply": true,
                            "title": ` ${command}`,
                            "body": ``,
                            "previewType": "PHOTO",
                            "thumbnailUrl": ` `,
                            "thumbnailUrl": ` `,
                            "sourceUrl": ` `
                        }
                    }
                }, {
                    quoted: m
                })
            }
            db.data.users[m.sender].exp += await randomNomor(60)
            break;
                        case 'sangecek':
            case 'ceksange':
            case 'gaycek':
            case 'cekgay':
            case 'lesbicek':
            case 'ceklesbi': {
                if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
                const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
                const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
                reply(`Nama : ${q}\nJawaban : *${sange}%*`)
            }
            db.data.users[m.sender].exp += await randomNomor(60)
            break
            case 'kapankah': {
                if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
                const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
                const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
                reply(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
            }
            db.data.users[m.sender].exp += await randomNomor(60)
            break
            case 'wangy': {
                if (!q) return reply(`Contoh : ${prefix}wangy ktt`)
                qq = q.toUpperCase()
                awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
                reply(awikwok)
            }
            db.data.users[m.sender].exp += await randomNomor(60)
            break
            case 'marahi-ripper':
            case 'ripper': {
                if (!q) return warning(`Contoh : ${prefix}marahi-ripper Asuma`)
                qq = q.toUpperCase()
                awikwok = `${qq} ${qq} ${qq} NAMA KONTOL ITU PANTEK, ANJING LO DASAR ${qq}, UANG RECEH DIEMBAT DASAR BAJINGAN, PUNYA INDUK GA SIH? ${qq} WOY RIPPER YATIM ${qq} GA TAKUT APA AMA TUHAN LU ANJINGLO MEMEK KONTOL. APALAGI NGE JB KEK ORANG MISKIN GA GUNA 😹😹😹, ${qq}² SEBENARNYA GW *MALU JADI LO*.... TAU GA SIH, ${qq}. UANG HASIL BEGITUAN GA HIKMAH 😹😹. MAU DICERAMAHIN?. DICERAMAHI KOK SAMA BOT DASAR YATIM ${qq}.`
                reply(awikwok)
            }
            db.data.users[m.sender].exp += await randomNomor(60)
            break 
            
            
            // ───────────────────────────────────────────────────────────────────────────────乂 🥀 MAKER FEATURE ───────────────────────────────────────────────────────────────乂 \\
case "pornhub": {
  if (!text || !text.includes('|')) {
    return m.reply(`Masukkan dua teks dipisah dengan "|"\nContoh: *.${command} Zenz|XD*`)
  }

  let [text1, text2] = text.split('|').map(t => t.trim())
  if (!text1 || !text2) return m.reply('Kedua teks harus diisi!')

  try {
    const apiUrl = `https://apikey.sazxofficial.web.id/api/imagecreator/pornhub?text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`
    const res = await fetch(apiUrl)
    const json = await res.json()

    if (!json.status) return m.reply('Gagal mengambil gambar dari API.')

    await conn.sendMessage(m.chat, {
      image: { url: json.result },
      caption: `✅ *Berhasil membuat logo Pornhub*\n\n• *Text1:* ${text1}\n• *Text2:* ${text2}`,
      contextInfo: {
        externalAdReply: {
          title: "Pornhub Logo Generator",
          body: "Powered By DORAEMONXUMARU",
          thumbnailUrl: json.result,
          mediaType: 1,
          renderLargerThumbnail: true,
          sourceUrl: json.result
        }
      }
    }, { quoted: m })

  } catch (e) {
    m.reply('Terjadi kesalahan saat memproses permintaan.')
    console.error(e)
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
break
 case 'fakepost': {
  if (!m.quoted) return reply(`Reply gambar dengan caption *${prefix + command} username|like|firstLike|caption|tags|komen*`);
  let mime = (m.quoted.msg || m.quoted).mimetype || '';
  if (!/image/.test(mime)) return reply(`Reply gambar dengan caption *${prefix + command} username|like|firstLike|caption|tags|komen*`);
  if (!text.includes('|')) return reply(`Format salah!\nContoh: *${prefix + command} kyymedia|12.3k|Rikii|Wahai mantanku|#kangen|21*`);
  reply(mess.wait);

  const tempFile = path.join(__dirname, `temp_${Date.now()}.jpg`);
  try {
    let media = await m.quoted.download();
    fs.writeFileSync(tempFile, media);

    const uploadUguu = (filePath) => {
      return new Promise((resolve, reject) => {
        exec(`curl -s -F files[]=@${filePath} https://uguu.se/upload.php`, (err, stdout) => {
          if (err) return reject('Upload ke Uguu gagal');
          try {
            let json = JSON.parse(stdout);
            resolve(json.files[0].url);
          } catch {
            reject('Gagal parsing JSON Uguu');
          }
        });
      });
    };

    const uploadedImage = await uploadUguu(tempFile);
    const profilePic = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg');

    const [username, like, firstLike, captionPost, tags, komen] = text.split('|');
    const name = pushname || "User";

    const igApi = `https://nirkyy-dev.hf.space/api/v1/ig-post-generator?profile=${encodeURIComponent(profilePic)}&name=${encodeURIComponent(name)}&username=${encodeURIComponent(username)}&image=${encodeURIComponent(uploadedImage)}&like=${encodeURIComponent(like)}&firstLike=${encodeURIComponent(firstLike)}&caption=${encodeURIComponent(captionPost)}&tags=${encodeURIComponent(tags)}&date=Baru+Saja&totalKomen=${encodeURIComponent(komen)}`;

    await conn.sendMessage(m.chat, {
      image: { url: igApi },
      caption: `✅ Fake IG Post berhasil dibuat!`
    }, { quoted: m });

    fs.unlinkSync(tempFile);
    db.data.users[m.sender].exp += await randomNomor(30);
  } catch (err) {
    console.error(err);
    reply('❌ Gagal membuat Fake IG Post.');
  }
}
break;
case "cktp": {
  if (!text || !text.includes('|')) {
    return m.reply(`Masukkan data lengkap dipisahkan dengan "|".\nContoh:\n.${command} JAWA BARAT|BANDUNG|3275024509970001|BUDI SANTOSO|BANDUNG, 25-09-1997|LAKI-LAKI|A|JL. SUDIRMAN NO. 123|05/08|RAWA BOBO|PASAR MINGGU|ISLAM|BELUM MENIKAH|PEGAWAI SWASTA|WNI|SEUMUR HIDUP|25-09-2023|https://link.pasfoto.jpg`)
  }

  let [
    provinsi, kota, nik, nama, ttl, jk, goldar, alamat, rtRw, kelDesa,
    kecamatan, agama, status, pekerjaan, kewarganegaraan, masaBerlaku, terbuat, pasPhoto
  ] = text.split('|').map(v => v.trim())

  if (!pasPhoto) return m.reply('Data tidak lengkap, pastikan semua 18 parameter terisi.')

  try {
    const apiUrl = `${global.fastres}/maker/ktp?provinsi=${encodeURIComponent(provinsi)}&kota=${encodeURIComponent(kota)}&nik=${encodeURIComponent(nik)}&nama=${encodeURIComponent(nama)}&ttl=${encodeURIComponent(ttl)}&jenisKelamin=${encodeURIComponent(jk)}&golonganDarah=${encodeURIComponent(goldar)}&alamat=${encodeURIComponent(alamat)}&rtRw=${encodeURIComponent(rtRw)}&kelDesa=${encodeURIComponent(kelDesa)}&kecamatan=${encodeURIComponent(kecamatan)}&agama=${encodeURIComponent(agama)}&status=${encodeURIComponent(status)}&pekerjaan=${encodeURIComponent(pekerjaan)}&kewarganegaraan=${encodeURIComponent(kewarganegaraan)}&masaBerlaku=${encodeURIComponent(masaBerlaku)}&terbuat=${encodeURIComponent(terbuat)}&pasPhoto=${encodeURIComponent(pasPhoto)}`

    await conn.sendMessage(m.chat, {
      image: { url: apiUrl },
      caption: `✅ *KTP Berhasil Dibuat*\n\n• Nama: ${nama}\n• NIK: ${nik}\n• TTL: ${ttl}\n• Provinsi: ${provinsi}\n• Kota: ${kota}`
    }, { quoted: m })

  } catch (e) {
    m.reply('Gagal membuat KTP. Pastikan data sudah benar.')
    console.error(e)
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'glitchtext':
			case 'writetext':
			case 'advancedglow':
			case 'typographytext':
			case 'pixelglitch':
			case 'neonglitch':
			case 'flagtext':
			case 'flag3dtext':
			case 'deletingtext':
			case 'blackpinkstyle':
			case 'glowingtext':
			case 'underwatertext':
			case 'logomaker':
			case 'cartoonstyle':
			case 'papercutstyle':
			case 'watercolortext':
			case 'effectclouds':
			case 'blackpinklogo':
			case 'gradienttext':
			case 'summerbeach':
			case 'luxurygold':
			case 'multicoloredneon':
			case 'sandsummer':
			case 'galaxywallpaper':
			case '1917style':
			case 'makingneon':
			case 'royaltext':
			case 'freecreate':
			case 'galaxystyle':
			case 'lighteffects': {
			
			async function ephoto(url, texk) {
 let form = new require("form-data")()
 let gT = await axios.get(url, {
 headers: {
 "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
 }
 })
 let $ = cheerio.load(gT.data)
 let text = texk
 let token = $("input[name=token]").val()
 let build_server = $("input[name=build_server]").val()
 let build_server_id = $("input[name=build_server_id]").val()
 form.append("text[]", text)
 form.append("token", token)
 form.append("build_server", build_server)
 form.append("build_server_id", build_server_id)
 let res = await axios({
 url: url,
 method: "POST",
 data: form,
 headers: {
 Accept: "*/*",
 "Accept-Language": "en-US,en;q=0.9",
 "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
 cookie: gT.headers["set-cookie"]?.join("; "),
 ...form.getHeaders()
 }
 })
 let $$ = cheerio.load(res.data)
 let json = JSON.parse($$("input[name=form_value_input]").val())
 json["text[]"] = json.text
 delete json.text
 let {
 data
 } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
 headers: {
 "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
 cookie: gT.headers["set-cookie"].join("; ")
 }
 })
 
 return build_server + data.image
}

if (!text) return reply(`Mana Teks Ny`)
				await conn.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				let link
				if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
				if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
				if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
				if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
				if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
				if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
				if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
				if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
				if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
				if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
				if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
				if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
				if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
				if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
				if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
				if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
				if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-conn-online-619.html'
				if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
				if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
				if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
				if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
				if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
				if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
				if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
				if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
				if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
				if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
				if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
				if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
				if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
				try {
					
					let haldwhd = await ephoto(link, q)
					await conn.sendMessage(m.chat, {
						image: {
							url: haldwhd
						}
					}, {
						quoted: m
					})
				} catch (error) {
					reply('Sedang eror kak Mohon maaf ya')
				}
			}
			db.data.users[m.sender].exp += await randomNomor(60)
			break
case 'logoba': {
  if (!text) return reply('Masukin Teks Kiri & Kanan Contoh: .logoba Kiryu|Abydos')

  let [textL, textR] = text.split('|')
  if (!textL || !textR) return reply('Format Salah! Contoh: .logoba Kiryu|Abydos')

  let url = `${global.nekorin}/maker/ba-logo?textL=${encodeURIComponent(textL)}&textR=${encodeURIComponent(textR)}`
  conn.sendMessage(from, { image: { url }, caption: `Logo Blue Archive Untuk:\n• ${textL}\n• ${textR}` }, { quoted: m })
}
db.data.users[m.sender].exp += await randomNomor(60)
break


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 TXT UNBAN MENU ───────────────────────────────────────────────────────────────乂 \\            
case 'textunbanv1':
if (!isCreator) return reply(mess.creator);
const vaga = ` ${textunbanv1}`
reply(vaga)
break
case 'textunbanv2':
if (!isCreator) return reply(mess.creator);
const bandar = ` ${textunbanv2}`
reply(bandar)
break
case 'textunbanv3':
if (!isCreator) return reply(mess.creator);
const masokpakeok = ` ${textunbanv3}`
reply(masokpakeok)
break
case 'textunbanv4':
if (!isCreator) return reply(mess.creator);
const typo = ` ${textunbanv4}`
reply(typo)
break
case 'textunbanv5':
if (!isCreator) return reply(mess.creator);
const sokasim = ` ${textunbanv5}`
reply(sokasim)
break
case 'textunbanv6':
if (!isCreator) return reply(mess.creator);
const akakaka = ` ${textunbanv6}`
reply(akakaka)
break
case 'textunbanv7':
if (!isCreator) return reply(mess.creator);
const kopok = ` ${textunbanv7}`
reply(kopok)
break
case 'textunbanv8':
if (!isCreator) return reply(mess.creator);
const tehyung = ` ${textunbanv8}`
reply(tehyung)
break
case 'textunbanv9':
if (!isCreator) return reply(mess.creator);
const ahhyan = ` ${textunbanv9}`
reply(ahhyan)
break
case 'textunbanv10':
if (!isCreator) return reply(mess.creator);
const yamete = ` ${textunbanv10}`
reply(yamete)
break
case 'textunbanv11':
if (!isCreator) return reply(mess.creator);
const suuu = ` ${textunbanv11}`
reply(suuu)
break
case 'textunbanv12':
if (!isCreator) return reply(mess.creator);
const huuuu = ` ${textunbanv12}
huuu`
reply(huuuu)
break
case 'textunbanv13':
if (!isCreator) return reply(mess.creator);
const gaje = ` ${textunbanv13}`
reply(gaje)
break
case 'textunbanv14':
if (!isCreator) return reply(mess.creator);
const well = ` ${textunbanv14}`
reply(well)
break
case 'textunbanv15':
if (!isCreator) return reply(mess.creator);
const lempo = ` ${textunbanv15}`
reply(lempo)
break
case 'textunbanv16':
if (!isCreator) return reply(mess.creator);
const cok = ` ${textunbanv16}`
reply(cok)
break
case 'textunbanv17':
if (!isCreator) return reply(mess.creator);
const sayasuka = ` ${textunbanv17}`
reply(sayasuka)
break
case 'textunbanv18':
if (!isCreator) return reply(mess.creator);
const oooooooo= ` ${textunbanv18}`
reply(oooooooo)
break
case 'textunbanv19':
if (!isCreator) return reply(mess.creator);
const omaaavaaaaaaaa = ` ${textunbanv19}`
reply(omaaavaaaaaaaa)
break
case 'textunbanv20':
if (!isCreator) return reply(mess.creator);
const bykepo = ` ${textunbanv20}`
reply(bykepo)
break
case 'textunbanv21':
if (!isCreator) return reply(mess.creator);
const unbannned = ` ${textunbanv21}`
reply(unbannned)
break
case 'textunbanpremv1':
if (!isCreator) return reply(mess.creator);
const premi = ` ${textunbanpremv1}`
reply(premi)
break
case 'textunbanpremv2':
if (!isCreator) return reply(mess.creator);
const kelasss = ` ${textunbanpremv2}`
reply(kelasss)
break
case 'textunbanpremv3':
if (!isCreator) return reply(mess.creator);
const eek = ` ${textunbanpremv3}`
reply(eek)
break


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 CPANEL MENU ───────────────────────────────────────────────────────────────乂 \\
case "listserver": {
 if (!isCreator) return m.reply('Fitur ini hanya untuk User Premium.');
 let settings = JSON.parse(fs.readFileSync('./database/panelset.json'))
 let { domain, ptla, ptlc } = settings
 
 
 
 try {
 let f = await fetch(`${domain}/api/application/servers`, {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": `Bearer ${ptla}`
 }
 });
 let res = await f.json();
 let servers = res.data;
 if (!servers || servers.length === 0) return m.reply("Tidak Ada Server Bot.");
 let page = Number(text) || 1; // Halaman dari input user
 let pageSize = 10; // 10 server per halaman
 let totalPages = Math.ceil(servers.length / pageSize);
 if (page < 1 || page > totalPages) return m.reply(`Halaman tidak valid! (1 - ${totalPages})`);
 let start = (page - 1) * pageSize;
 let end = start + pageSize;
 let pageServers = servers.slice(start, end);
 let messageText = `*乂 List Server Panel Pterodactyl (Halaman ${page}/${totalPages})*

`;
 for (let server of pageServers) {
 let s = server.attributes;
 let f3 = await fetch(`${domain}/api/client/servers/${s.uuid.split`-`[0]}/resources`, {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": `Bearer ${ptlc}`
 }
 });
 let data = await f3.json();
 let status = data.attributes ? data.attributes.current_state : s.status;
 messageText += `*ID :* ${s.id}
- *Nama :* ${s.name}
- *Status :* ${status}
- *Ram :* ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory + "MB"}
- *CPU :* ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu + "%"}
- *Disk :* ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk + "MB"}
- *Created :* ${s.created_at.split("T")[0]}

`;
 }
 // Quick Reply Buttons (Hanya tombol navigasi halaman)
 let buttons = [];
 if (page > 1) {
 buttons.push({
 "name": "quick_reply",
 "buttonParamsJson": `{"display_text":"⬅️ Halaman ${page - 1}","id":".listserver ${page - 1}"}`
 });
 }
 if (page < totalPages) {
 buttons.push({
 "name": "quick_reply",
 "buttonParamsJson": `{"display_text":"➡️ Halaman ${page + 1}","id":".listserver ${page + 1}"}`
 });
 }
 let msgii = await generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: messageText
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: buttons
 })
 })
 }
 }
 }, { userJid: m.sender, quoted: m });
 await conn.relayMessage(m.chat, msgii.message, { messageId: msgii.key.id });
 } catch (error) {
 console.error(error);
 m.reply('Terjadi kesalahan saat mengambil data server dari panel.');
 }
}
break
case 'cadmin': {
 if (!isCreator) return m.reply('Fitur ini hanya untuk Owner.');
 if (!text) return m.reply("Format: *.cadmin username* atau *.cadmin username|nomor*");
 let settings = JSON.parse(fs.readFileSync('./database/panelset.json'))
let { domain, ptla, ptlc } = settings
 let input = text.split("|");
 let username = input[0].toLowerCase();
 let targetNumber = input[1] ? input[1].replace(/\D/g, "") : null; // Hanya angka
 if (!username) return m.reply("Username tidak boleh kosong.");
 
 let email = `${username}@gmail.com`;
 let name = username.charAt(0).toUpperCase() + username.slice(1);
 let password = username + crypto.randomBytes(2).toString('hex');
 try {
 let response = await fetch(`${domain}/api/application/users`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": `Bearer ${ptla}`
 },
 body: JSON.stringify({
 email: email,
 username: username,
 first_name: name,
 last_name: "Admin",
 root_admin: true,
 language: "en",
 password: password.toString()
 })
 });
 let data = await response.json();
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
 let user = data.attributes;
 let teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${domain}

*Rules Admin Panel ⚠️*
- Jangan Maling SC, Ketahuan Maling? Auto Delete Akun & No Reff!!
- Simpan Baik² Data Akun Ini.
- Buat Panel Seperlunya Aja, Jangan Asal Buat!
- Garansi Aktif 10 Hari.
- Claim Garansi Wajib Membawa Bukti SS Chat Saat Pembelian.
`;
 // Menentukan penerima pesan
 let recipient = targetNumber ? `${targetNumber}@s.whatsapp.net` : m.sender;
 await conn.sendMessage(recipient, { text: teks }, { quoted: m });
 m.reply(`✅ Data admin telah dikirim ke ${targetNumber ? "nomor yang dituju" : "private chat Anda"}.`);
 } catch (error) {
 console.error(error);
 m.reply("Terjadi kesalahan saat membuat admin panel.");
 }
}
break
case 'unli': {
 if (!isPremium && !isCreator) return m.reply("❌ Fitur ini hanya tersedia untuk pengguna premium atau creator!")
 
 let settings = JSON.parse(fs.readFileSync('./database/panelset.json'))
 let { egg, loc, nestid, domain, ptla } = settings

 let args = text.split("|").map(x => x.trim().toLowerCase())
 let username = args[0]
 let target = args[1] ? `${args[1]}@s.whatsapp.net` : m.sender
 if (!username || username.length < 4) return m.reply("❌ Username minimal 4 karakter!")

 let Obj = { ram: "0", disk: "0", cpu: "0" }
 
 try {
 let email = username + "@gmail.com"
 let name = username.charAt(0).toUpperCase() + username.slice(1) + " Server"
 let password = username + crypto.randomBytes(2).toString('hex')

 let f = await fetch(`${domain}/api/application/users`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "email": email,
 "username": username.toLowerCase(),
 "first_name": name,
 "last_name": "Server",
 "language": "en",
 "password": password
 })
 })
 let data = await f.json()
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
 let usr_id = data.attributes.id

 let f1 = await fetch(`${domain}/api/application/nests/${nestid}/eggs/${egg}`, {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 }
 })
 let data2 = await f1.json()
 let startup_cmd = data2.attributes.startup

 let f2 = await fetch(`${domain}/api/application/servers`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "name": name,
 "description": "Server otomatis",
 "user": usr_id,
 "egg": parseInt(egg),
 "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
 "startup": startup_cmd,
 "environment": {
 "INST": "npm",
 "USER_UPLOAD": "0",
 "AUTO_UPDATE": "0",
 "CMD_RUN": "npm start"
 },
 "limits": {
 "memory": Obj.ram,
 "swap": 0,
 "disk": Obj.disk,
 "io": 500,
 "cpu": Obj.cpu
 },
 "feature_limits": {
 "databases": 5,
 "backups": 5,
 "allocations": 5
 },
 "deploy": {
 "locations": [parseInt(loc)],
 "dedicated_ip": false,
 "port_range": [],
 },
 })
 })
 let result = await f2.json()
 if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))

 let teksh = `◻ *SuccessFully Panel Created*

──────────────────────
┏◘ 𝐔𝐬𝐞𝐫𝐧𝐚𝐦𝐞 : ${username}
┣◘ 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 : ${password}
┗◘ 𝐖𝐞𝐛 𝐋𝐨𝐠𝐢𝐧 : ${domain}
──────────────────────
\`UNLI | ${Obj.disk} | ${Obj.cpu}%\`

*📑 Kebijakan & Ketentuan*
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴀᴛᴀ ɪɴɪ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴏᴍᴀɪɴ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴀʙᴏᴛᴀsᴇ sᴇʀᴠᴇʀ
- ᴅɪʟᴀʀᴀɴɢ ᴅᴅᴏs & ʀᴜɴ ʙᴏᴛ ᴅᴅᴏs
- sɪᴍᴘᴀɴ ᴅᴀᴛᴀ ɪɴɪ ʙᴀɪᴋ ʙᴀɪᴋ
- ɢᴀʀᴀɴsɪ 15ʜᴀʀɪ 1x ʀᴇᴘʟᴀᴄᴇ

*龙 2025 - ${global.namabot}*`

 let msg = generateWAMessageFromContent(target, { 
 viewOnceMessage: { 
 message: { 
 messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, 
 interactiveMessage: proto.Message.InteractiveMessage.create({ 
 body: proto.Message.InteractiveMessage.Body.create({ text: teksh }), 
 footer: proto.Message.InteractiveMessage.Footer.create({ text: `© ${global.ownername}` }), 
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
 buttons: [ 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Username", copy_code: username }) }, 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Password", copy_code: password }) }, 
 { name: "cta_url", buttonParamsJson: JSON.stringify({ display_text: "Link Login", url: `${domain}`, merchant_url: `${domain}` }) } 
 ] 
 }) 
 }) 
 } 
 } 
 }, {}) 

 await conn.relayMessage(target, msg.message, { messageId: msg.key.id })
 await conn.sendMessage(m.chat, { text: '☑️ Silahkan Cek Private ChatBot' }, { quoted: qtoko })
 } catch (error) {
 console.error("❌ Error saat membuat server:", error)
 return m.reply("❌ Terjadi kesalahan saat membuat server. Silakan coba lagi nanti!")
 }
}
break
case '10gb': {
 if (!isPremium && !isCreator) return m.reply("❌ Fitur ini hanya tersedia untuk pengguna premium atau creator!")
 
 let settings = JSON.parse(fs.readFileSync('./database/panelset.json'))
 let { egg, loc, nestid, domain, ptla } = settings

 let args = text.split("|").map(x => x.trim().toLowerCase())
 let username = args[0]
 let target = args[1] ? `${args[1]}@s.whatsapp.net` : m.sender
 if (!username || username.length < 4) return m.reply("❌ Username minimal 4 karakter!")

 let Obj = { ram: "10100", disk: "9450", cpu: "340" }
 
 try {
 let email = username + "@gmail.com"
 let name = username.charAt(0).toUpperCase() + username.slice(1) + " Server"
 let password = username + crypto.randomBytes(2).toString('hex')

 let f = await fetch(`${domain}/api/application/users`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "email": email,
 "username": username.toLowerCase(),
 "first_name": name,
 "last_name": "Server",
 "language": "en",
 "password": password
 })
 })
 let data = await f.json()
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
 let usr_id = data.attributes.id

 let f1 = await fetch(`${domain}/api/application/nests/${nestid}/eggs/${egg}`, {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 }
 })
 let data2 = await f1.json()
 let startup_cmd = data2.attributes.startup

 let f2 = await fetch(`${domain}/api/application/servers`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "name": name,
 "description": "Server otomatis",
 "user": usr_id,
 "egg": parseInt(egg),
 "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
 "startup": startup_cmd,
 "environment": {
 "INST": "npm",
 "USER_UPLOAD": "0",
 "AUTO_UPDATE": "0",
 "CMD_RUN": "npm start"
 },
 "limits": {
 "memory": Obj.ram,
 "swap": 0,
 "disk": Obj.disk,
 "io": 500,
 "cpu": Obj.cpu
 },
 "feature_limits": {
 "databases": 5,
 "backups": 5,
 "allocations": 5
 },
 "deploy": {
 "locations": [parseInt(loc)],
 "dedicated_ip": false,
 "port_range": [],
 },
 })
 })
 let result = await f2.json()
 if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))

 let teksh = `◻ *SuccessFully Panel Created*

──────────────────────
┏◘ 𝐔𝐬𝐞𝐫𝐧𝐚𝐦𝐞 : ${username}
┣◘ 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 : ${password}
┗◘ 𝐖𝐞𝐛 𝐋𝐨𝐠𝐢𝐧 : ${domain}
──────────────────────
\`10GB | ${Obj.disk} | ${Obj.cpu}%\`

*📑 Kebijakan & Ketentuan*
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴀᴛᴀ ɪɴɪ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴏᴍᴀɪɴ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴀʙᴏᴛᴀsᴇ sᴇʀᴠᴇʀ
- ᴅɪʟᴀʀᴀɴɢ ᴅᴅᴏs & ʀᴜɴ ʙᴏᴛ ᴅᴅᴏs
- sɪᴍᴘᴀɴ ᴅᴀᴛᴀ ɪɴɪ ʙᴀɪᴋ ʙᴀɪᴋ
- ɢᴀʀᴀɴsɪ 15ʜᴀʀɪ 1x ʀᴇᴘʟᴀᴄᴇ

*龙 2025 - ${global.namabot}*`

 let msg = generateWAMessageFromContent(target, { 
 viewOnceMessage: { 
 message: { 
 messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, 
 interactiveMessage: proto.Message.InteractiveMessage.create({ 
 body: proto.Message.InteractiveMessage.Body.create({ text: teksh }), 
 footer: proto.Message.InteractiveMessage.Footer.create({ text: `© ${global.ownername}` }), 
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
 buttons: [ 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Username", copy_code: username }) }, 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Password", copy_code: password }) }, 
 { name: "cta_url", buttonParamsJson: JSON.stringify({ display_text: "Link Login", url: `${domain}`, merchant_url: `${domain}` }) } 
 ] 
 }) 
 }) 
 } 
 } 
 }, {}) 

 await conn.relayMessage(target, msg.message, { messageId: msg.key.id })
 await conn.sendMessage(m.chat, { text: '☑️ Silahkan Cek Private ChatBot' }, { quoted: qtoko })
 } catch (error) {
 console.error("❌ Error saat membuat server:", error)
 return m.reply("❌ Terjadi kesalahan saat membuat server. Silakan coba lagi nanti!")
 }
}
break
case '9gb': {
 if (!isPremium && !isCreator) return m.reply("❌ Fitur ini hanya tersedia untuk pengguna premium atau creator!")
 
 let settings = JSON.parse(fs.readFileSync('./database/panelset.json'))
 let { egg, loc, nestid, domain, ptla } = settings

 let args = text.split("|").map(x => x.trim().toLowerCase())
 let username = args[0]
 let target = args[1] ? `${args[1]}@s.whatsapp.net` : m.sender
 if (!username || username.length < 4) return m.reply("❌ Username minimal 4 karakter!")

 let Obj = { ram: "9100", disk: "8450", cpu: "300" }
 
 try {
 let email = username + "@gmail.com"
 let name = username.charAt(0).toUpperCase() + username.slice(1) + " Server"
 let password = username + crypto.randomBytes(2).toString('hex')

 let f = await fetch(`${domain}/api/application/users`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "email": email,
 "username": username.toLowerCase(),
 "first_name": name,
 "last_name": "Server",
 "language": "en",
 "password": password
 })
 })
 let data = await f.json()
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
 let usr_id = data.attributes.id

 let f1 = await fetch(`${domain}/api/application/nests/${nestid}/eggs/${egg}`, {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 }
 })
 let data2 = await f1.json()
 let startup_cmd = data2.attributes.startup

 let f2 = await fetch(`${domain}/api/application/servers`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "name": name,
 "description": "Server otomatis",
 "user": usr_id,
 "egg": parseInt(egg),
 "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
 "startup": startup_cmd,
 "environment": {
 "INST": "npm",
 "USER_UPLOAD": "0",
 "AUTO_UPDATE": "0",
 "CMD_RUN": "npm start"
 },
 "limits": {
 "memory": Obj.ram,
 "swap": 0,
 "disk": Obj.disk,
 "io": 500,
 "cpu": Obj.cpu
 },
 "feature_limits": {
 "databases": 5,
 "backups": 5,
 "allocations": 5
 },
 "deploy": {
 "locations": [parseInt(loc)],
 "dedicated_ip": false,
 "port_range": [],
 },
 })
 })
 let result = await f2.json()
 if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))

 let teksh = `◻ *SuccessFully Panel Created*

──────────────────────
┏◘ 𝐔𝐬𝐞𝐫𝐧𝐚𝐦𝐞 : ${username}
┣◘ 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 : ${password}
┗◘ 𝐖𝐞𝐛 𝐋𝐨𝐠𝐢𝐧 : ${domain}
──────────────────────
\`9GB | ${Obj.disk} | ${Obj.cpu}%\`

*📑 Kebijakan & Ketentuan*
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴀᴛᴀ ɪɴɪ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴏᴍᴀɪɴ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴀʙᴏᴛᴀsᴇ sᴇʀᴠᴇʀ
- ᴅɪʟᴀʀᴀɴɢ ᴅᴅᴏs & ʀᴜɴ ʙᴏᴛ ᴅᴅᴏs
- sɪᴍᴘᴀɴ ᴅᴀᴛᴀ ɪɴɪ ʙᴀɪᴋ ʙᴀɪᴋ
- ɢᴀʀᴀɴsɪ 15ʜᴀʀɪ 1x ʀᴇᴘʟᴀᴄᴇ

*龙 2025 - ${global.namabot}*`

 let msg = generateWAMessageFromContent(target, { 
 viewOnceMessage: { 
 message: { 
 messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, 
 interactiveMessage: proto.Message.InteractiveMessage.create({ 
 body: proto.Message.InteractiveMessage.Body.create({ text: teksh }), 
 footer: proto.Message.InteractiveMessage.Footer.create({ text: `© ${global.ownername}` }), 
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
 buttons: [ 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Username", copy_code: username }) }, 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Password", copy_code: password }) }, 
 { name: "cta_url", buttonParamsJson: JSON.stringify({ display_text: "Link Login", url: `${domain}`, merchant_url: `${domain}` }) } 
 ] 
 }) 
 }) 
 } 
 } 
 }, {}) 

 await conn.relayMessage(target, msg.message, { messageId: msg.key.id })
 await conn.sendMessage(m.chat, { text: '☑️ Silahkan Cek Private ChatBot' }, { quoted: qtoko })
 } catch (error) {
 console.error("❌ Error saat membuat server:", error)
 return m.reply("❌ Terjadi kesalahan saat membuat server. Silakan coba lagi nanti!")
 }
}
break
case '8gb': {
 if (!isPremium && !isCreator) return m.reply("❌ Fitur ini hanya tersedia untuk pengguna premium atau creator!")
 
 let settings = JSON.parse(fs.readFileSync('./database/panelset.json'))
 let { egg, loc, nestid, domain, ptla } = settings

 let args = text.split("|").map(x => x.trim().toLowerCase())
 let username = args[0]
 let target = args[1] ? `${args[1]}@s.whatsapp.net` : m.sender
 if (!username || username.length < 4) return m.reply("❌ Username minimal 4 karakter!")

 let Obj = { ram: "8090", disk: "7550", cpu: "270" }
 
 try {
 let email = username + "@gmail.com"
 let name = username.charAt(0).toUpperCase() + username.slice(1) + " Server"
 let password = username + crypto.randomBytes(2).toString('hex')

 let f = await fetch(`${domain}/api/application/users`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "email": email,
 "username": username.toLowerCase(),
 "first_name": name,
 "last_name": "Server",
 "language": "en",
 "password": password
 })
 })
 let data = await f.json()
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
 let usr_id = data.attributes.id

 let f1 = await fetch(`${domain}/api/application/nests/${nestid}/eggs/${egg}`, {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 }
 })
 let data2 = await f1.json()
 let startup_cmd = data2.attributes.startup

 let f2 = await fetch(`${domain}/api/application/servers`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "name": name,
 "description": "Server otomatis",
 "user": usr_id,
 "egg": parseInt(egg),
 "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
 "startup": startup_cmd,
 "environment": {
 "INST": "npm",
 "USER_UPLOAD": "0",
 "AUTO_UPDATE": "0",
 "CMD_RUN": "npm start"
 },
 "limits": {
 "memory": Obj.ram,
 "swap": 0,
 "disk": Obj.disk,
 "io": 500,
 "cpu": Obj.cpu
 },
 "feature_limits": {
 "databases": 5,
 "backups": 5,
 "allocations": 5
 },
 "deploy": {
 "locations": [parseInt(loc)],
 "dedicated_ip": false,
 "port_range": [],
 },
 })
 })
 let result = await f2.json()
 if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))

 let teksh = `◻ *SuccessFully Panel Created*

──────────────────────
┏◘ 𝐔𝐬𝐞𝐫𝐧𝐚𝐦𝐞 : ${username}
┣◘ 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 : ${password}
┗◘ 𝐖𝐞𝐛 𝐋𝐨𝐠𝐢𝐧 : ${domain}
──────────────────────
\`8GB | ${Obj.disk} | ${Obj.cpu}%\`

*📑 Kebijakan & Ketentuan*
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴀᴛᴀ ɪɴɪ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴏᴍᴀɪɴ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴀʙᴏᴛᴀsᴇ sᴇʀᴠᴇʀ
- ᴅɪʟᴀʀᴀɴɢ ᴅᴅᴏs & ʀᴜɴ ʙᴏᴛ ᴅᴅᴏs
- sɪᴍᴘᴀɴ ᴅᴀᴛᴀ ɪɴɪ ʙᴀɪᴋ ʙᴀɪᴋ
- ɢᴀʀᴀɴsɪ 15ʜᴀʀɪ 1x ʀᴇᴘʟᴀᴄᴇ

*龙 2025 - ${global.namabot}*`

 let msg = generateWAMessageFromContent(target, { 
 viewOnceMessage: { 
 message: { 
 messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, 
 interactiveMessage: proto.Message.InteractiveMessage.create({ 
 body: proto.Message.InteractiveMessage.Body.create({ text: teksh }), 
 footer: proto.Message.InteractiveMessage.Footer.create({ text: `© ${global.ownername}` }), 
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
 buttons: [ 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Username", copy_code: username }) }, 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Password", copy_code: password }) }, 
 { name: "cta_url", buttonParamsJson: JSON.stringify({ display_text: "Link Login", url: `${domain}`, merchant_url: `${domain}` }) } 
 ] 
 }) 
 }) 
 } 
 } 
 }, {}) 

 await conn.relayMessage(target, msg.message, { messageId: msg.key.id })
 await conn.sendMessage(m.chat, { text: '☑️ Silahkan Cek Private ChatBot' }, { quoted: qtoko })
 } catch (error) {
 console.error("❌ Error saat membuat server:", error)
 return m.reply("❌ Terjadi kesalahan saat membuat server. Silakan coba lagi nanti!")
 }
}
break
case '7gb': {
 if (!isPremium && !isCreator) return m.reply("❌ Fitur ini hanya tersedia untuk pengguna premium atau creator!")
 
 let settings = JSON.parse(fs.readFileSync('./database/panelset.json'))
 let { egg, loc, nestid, domain, ptla } = settings

 let args = text.split("|").map(x => x.trim().toLowerCase())
 let username = args[0]
 let target = args[1] ? `${args[1]}@s.whatsapp.net` : m.sender
 if (!username || username.length < 4) return m.reply("❌ Username minimal 4 karakter!")

 let Obj = { ram: "7090", disk: "6950", cpu: "240" }
 
 try {
 let email = username + "@gmail.com"
 let name = username.charAt(0).toUpperCase() + username.slice(1) + " Server"
 let password = username + crypto.randomBytes(2).toString('hex')

 let f = await fetch(`${domain}/api/application/users`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "email": email,
 "username": username.toLowerCase(),
 "first_name": name,
 "last_name": "Server",
 "language": "en",
 "password": password
 })
 })
 let data = await f.json()
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
 let usr_id = data.attributes.id

 let f1 = await fetch(`${domain}/api/application/nests/${nestid}/eggs/${egg}`, {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 }
 })
 let data2 = await f1.json()
 let startup_cmd = data2.attributes.startup

 let f2 = await fetch(`${domain}/api/application/servers`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "name": name,
 "description": "Server otomatis",
 "user": usr_id,
 "egg": parseInt(egg),
 "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
 "startup": startup_cmd,
 "environment": {
 "INST": "npm",
 "USER_UPLOAD": "0",
 "AUTO_UPDATE": "0",
 "CMD_RUN": "npm start"
 },
 "limits": {
 "memory": Obj.ram,
 "swap": 0,
 "disk": Obj.disk,
 "io": 500,
 "cpu": Obj.cpu
 },
 "feature_limits": {
 "databases": 5,
 "backups": 5,
 "allocations": 5
 },
 "deploy": {
 "locations": [parseInt(loc)],
 "dedicated_ip": false,
 "port_range": [],
 },
 })
 })
 let result = await f2.json()
 if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))

 let teksh = `◻ *SuccessFully Panel Created*

──────────────────────
┏◘ 𝐔𝐬𝐞𝐫𝐧𝐚𝐦𝐞 : ${username}
┣◘ 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 : ${password}
┗◘ 𝐖𝐞𝐛 𝐋𝐨𝐠𝐢𝐧 : ${domain}
──────────────────────
\`7GB | ${Obj.disk} | ${Obj.cpu}%\`

*📑 Kebijakan & Ketentuan*
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴀᴛᴀ ɪɴɪ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴏᴍᴀɪɴ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴀʙᴏᴛᴀsᴇ sᴇʀᴠᴇʀ
- ᴅɪʟᴀʀᴀɴɢ ᴅᴅᴏs & ʀᴜɴ ʙᴏᴛ ᴅᴅᴏs
- sɪᴍᴘᴀɴ ᴅᴀᴛᴀ ɪɴɪ ʙᴀɪᴋ ʙᴀɪᴋ
- ɢᴀʀᴀɴsɪ 15ʜᴀʀɪ 1x ʀᴇᴘʟᴀᴄᴇ

*龙 2025 - ${global.namabot}*`

 let msg = generateWAMessageFromContent(target, { 
 viewOnceMessage: { 
 message: { 
 messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, 
 interactiveMessage: proto.Message.InteractiveMessage.create({ 
 body: proto.Message.InteractiveMessage.Body.create({ text: teksh }), 
 footer: proto.Message.InteractiveMessage.Footer.create({ text: `© ${global.ownername}` }), 
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
 buttons: [ 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Username", copy_code: username }) }, 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Password", copy_code: password }) }, 
 { name: "cta_url", buttonParamsJson: JSON.stringify({ display_text: "Link Login", url: `${domain}`, merchant_url: `${domain}` }) } 
 ] 
 }) 
 }) 
 } 
 } 
 }, {}) 

 await conn.relayMessage(target, msg.message, { messageId: msg.key.id })
 await conn.sendMessage(m.chat, { text: '☑️ Silahkan Cek Private ChatBot' }, { quoted: qtoko })
 } catch (error) {
 console.error("❌ Error saat membuat server:", error)
 return m.reply("❌ Terjadi kesalahan saat membuat server. Silakan coba lagi nanti!")
 }
}
break
case '6gb': {
 if (!isPremium && !isCreator) return m.reply("❌ Fitur ini hanya tersedia untuk pengguna premium atau creator!")
 
 let settings = JSON.parse(fs.readFileSync('./database/panelset.json'))
 let { egg, loc, nestid, domain, ptla } = settings

 let args = text.split("|").map(x => x.trim().toLowerCase())
 let username = args[0]
 let target = args[1] ? `${args[1]}@s.whatsapp.net` : m.sender
 if (!username || username.length < 4) return m.reply("❌ Username minimal 4 karakter!")

 let Obj = { ram: "6090", disk: "5550", cpu: "200" }
 
 try {
 let email = username + "@gmail.com"
 let name = username.charAt(0).toUpperCase() + username.slice(1) + " Server"
 let password = username + crypto.randomBytes(2).toString('hex')

 let f = await fetch(`${domain}/api/application/users`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "email": email,
 "username": username.toLowerCase(),
 "first_name": name,
 "last_name": "Server",
 "language": "en",
 "password": password
 })
 })
 let data = await f.json()
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
 let usr_id = data.attributes.id

 let f1 = await fetch(`${domain}/api/application/nests/${nestid}/eggs/${egg}`, {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 }
 })
 let data2 = await f1.json()
 let startup_cmd = data2.attributes.startup

 let f2 = await fetch(`${domain}/api/application/servers`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "name": name,
 "description": "Server otomatis",
 "user": usr_id,
 "egg": parseInt(egg),
 "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
 "startup": startup_cmd,
 "environment": {
 "INST": "npm",
 "USER_UPLOAD": "0",
 "AUTO_UPDATE": "0",
 "CMD_RUN": "npm start"
 },
 "limits": {
 "memory": Obj.ram,
 "swap": 0,
 "disk": Obj.disk,
 "io": 500,
 "cpu": Obj.cpu
 },
 "feature_limits": {
 "databases": 5,
 "backups": 5,
 "allocations": 5
 },
 "deploy": {
 "locations": [parseInt(loc)],
 "dedicated_ip": false,
 "port_range": [],
 },
 })
 })
 let result = await f2.json()
 if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))

 let teksh = `◻ *SuccessFully Panel Created*

──────────────────────
┏◘ 𝐔𝐬𝐞𝐫𝐧𝐚𝐦𝐞 : ${username}
┣◘ 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 : ${password}
┗◘ 𝐖𝐞𝐛 𝐋𝐨𝐠𝐢𝐧 : ${domain}
──────────────────────
\`6GB | ${Obj.disk} | ${Obj.cpu}%\`

*📑 Kebijakan & Ketentuan*
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴀᴛᴀ ɪɴɪ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴏᴍᴀɪɴ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴀʙᴏᴛᴀsᴇ sᴇʀᴠᴇʀ
- ᴅɪʟᴀʀᴀɴɢ ᴅᴅᴏs & ʀᴜɴ ʙᴏᴛ ᴅᴅᴏs
- sɪᴍᴘᴀɴ ᴅᴀᴛᴀ ɪɴɪ ʙᴀɪᴋ ʙᴀɪᴋ
- ɢᴀʀᴀɴsɪ 15ʜᴀʀɪ 1x ʀᴇᴘʟᴀᴄᴇ

*龙 2025 - ${global.namabot}*`

 let msg = generateWAMessageFromContent(target, { 
 viewOnceMessage: { 
 message: { 
 messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, 
 interactiveMessage: proto.Message.InteractiveMessage.create({ 
 body: proto.Message.InteractiveMessage.Body.create({ text: teksh }), 
 footer: proto.Message.InteractiveMessage.Footer.create({ text: `© ${global.ownername}` }), 
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
 buttons: [ 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Username", copy_code: username }) }, 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Password", copy_code: password }) }, 
 { name: "cta_url", buttonParamsJson: JSON.stringify({ display_text: "Link Login", url: `${domain}`, merchant_url: `${domain}` }) } 
 ] 
 }) 
 }) 
 } 
 } 
 }, {}) 

 await conn.relayMessage(target, msg.message, { messageId: msg.key.id })
 await conn.sendMessage(m.chat, { text: '☑️ Silahkan Cek Private ChatBot' }, { quoted: qtoko })
 } catch (error) {
 console.error("❌ Error saat membuat server:", error)
 return m.reply("❌ Terjadi kesalahan saat membuat server. Silakan coba lagi nanti!")
 }
}
break
case '5gb': {
 if (!isPremium && !isCreator) return m.reply("❌ Fitur ini hanya tersedia untuk pengguna premium atau creator!")
 
 let settings = JSON.parse(fs.readFileSync('./database/panelset.json'))
 let { egg, loc, nestid, domain, ptla } = settings

 let args = text.split("|").map(x => x.trim().toLowerCase())
 let username = args[0]
 let target = args[1] ? `${args[1]}@s.whatsapp.net` : m.sender
 if (!username || username.length < 4) return m.reply("❌ Username minimal 4 karakter!")

 let Obj = { ram: "5098", disk: "4800", cpu: "180" }
 
 try {
 let email = username + "@gmail.com"
 let name = username.charAt(0).toUpperCase() + username.slice(1) + " Server"
 let password = username + crypto.randomBytes(2).toString('hex')

 let f = await fetch(`${domain}/api/application/users`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "email": email,
 "username": username.toLowerCase(),
 "first_name": name,
 "last_name": "Server",
 "language": "en",
 "password": password
 })
 })
 let data = await f.json()
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
 let usr_id = data.attributes.id

 let f1 = await fetch(`${domain}/api/application/nests/${nestid}/eggs/${egg}`, {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 }
 })
 let data2 = await f1.json()
 let startup_cmd = data2.attributes.startup

 let f2 = await fetch(`${domain}/api/application/servers`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "name": name,
 "description": "Server otomatis",
 "user": usr_id,
 "egg": parseInt(egg),
 "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
 "startup": startup_cmd,
 "environment": {
 "INST": "npm",
 "USER_UPLOAD": "0",
 "AUTO_UPDATE": "0",
 "CMD_RUN": "npm start"
 },
 "limits": {
 "memory": Obj.ram,
 "swap": 0,
 "disk": Obj.disk,
 "io": 500,
 "cpu": Obj.cpu
 },
 "feature_limits": {
 "databases": 5,
 "backups": 5,
 "allocations": 5
 },
 "deploy": {
 "locations": [parseInt(loc)],
 "dedicated_ip": false,
 "port_range": [],
 },
 })
 })
 let result = await f2.json()
 if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))

 let teksh = `◻ *SuccessFully Panel Created*

──────────────────────
┏◘ 𝐔𝐬𝐞𝐫𝐧𝐚𝐦𝐞 : ${username}
┣◘ 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 : ${password}
┗◘ 𝐖𝐞𝐛 𝐋𝐨𝐠𝐢𝐧 : ${domain}
──────────────────────
\`5GB | ${Obj.disk} | ${Obj.cpu}%\`

*📑 Kebijakan & Ketentuan*
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴀᴛᴀ ɪɴɪ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴏᴍᴀɪɴ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴀʙᴏᴛᴀsᴇ sᴇʀᴠᴇʀ
- ᴅɪʟᴀʀᴀɴɢ ᴅᴅᴏs & ʀᴜɴ ʙᴏᴛ ᴅᴅᴏs
- sɪᴍᴘᴀɴ ᴅᴀᴛᴀ ɪɴɪ ʙᴀɪᴋ ʙᴀɪᴋ
- ɢᴀʀᴀɴsɪ 15ʜᴀʀɪ 1x ʀᴇᴘʟᴀᴄᴇ

*龙 2025 - ${global.namabot}*`

 let msg = generateWAMessageFromContent(target, { 
 viewOnceMessage: { 
 message: { 
 messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, 
 interactiveMessage: proto.Message.InteractiveMessage.create({ 
 body: proto.Message.InteractiveMessage.Body.create({ text: teksh }), 
 footer: proto.Message.InteractiveMessage.Footer.create({ text: `© ${global.ownername}` }), 
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
 buttons: [ 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Username", copy_code: username }) }, 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Password", copy_code: password }) }, 
 { name: "cta_url", buttonParamsJson: JSON.stringify({ display_text: "Link Login", url: `${domain}`, merchant_url: `${domain}` }) } 
 ] 
 }) 
 }) 
 } 
 } 
 }, {}) 

 await conn.relayMessage(target, msg.message, { messageId: msg.key.id })
 await conn.sendMessage(m.chat, { text: '☑️ Silahkan Cek Private ChatBot' }, { quoted: qtoko })
 } catch (error) {
 console.error("❌ Error saat membuat server:", error)
 return m.reply("❌ Terjadi kesalahan saat membuat server. Silakan coba lagi nanti!")
 }
}
break
case '4gb': {
 if (!isPremium && !isCreator) return m.reply("❌ Fitur ini hanya tersedia untuk pengguna premium atau creator!")
 
 let settings = JSON.parse(fs.readFileSync('./database/panelset.json'))
 let { egg, loc, nestid, domain, ptla } = settings

 let args = text.split("|").map(x => x.trim().toLowerCase())
 let username = args[0]
 let target = args[1] ? `${args[1]}@s.whatsapp.net` : m.sender
 if (!username || username.length < 4) return m.reply("❌ Username minimal 4 karakter!")

 let Obj = { ram: "4068", disk: "3400", cpu: "155" }
 
 try {
 let email = username + "@gmail.com"
 let name = username.charAt(0).toUpperCase() + username.slice(1) + " Server"
 let password = username + crypto.randomBytes(2).toString('hex')

 let f = await fetch(`${domain}/api/application/users`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "email": email,
 "username": username.toLowerCase(),
 "first_name": name,
 "last_name": "Server",
 "language": "en",
 "password": password
 })
 })
 let data = await f.json()
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
 let usr_id = data.attributes.id

 let f1 = await fetch(`${domain}/api/application/nests/${nestid}/eggs/${egg}`, {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 }
 })
 let data2 = await f1.json()
 let startup_cmd = data2.attributes.startup

 let f2 = await fetch(`${domain}/api/application/servers`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "name": name,
 "description": "Server otomatis",
 "user": usr_id,
 "egg": parseInt(egg),
 "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
 "startup": startup_cmd,
 "environment": {
 "INST": "npm",
 "USER_UPLOAD": "0",
 "AUTO_UPDATE": "0",
 "CMD_RUN": "npm start"
 },
 "limits": {
 "memory": Obj.ram,
 "swap": 0,
 "disk": Obj.disk,
 "io": 500,
 "cpu": Obj.cpu
 },
 "feature_limits": {
 "databases": 5,
 "backups": 5,
 "allocations": 5
 },
 "deploy": {
 "locations": [parseInt(loc)],
 "dedicated_ip": false,
 "port_range": [],
 },
 })
 })
 let result = await f2.json()
 if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))

 let teksh = `◻ *SuccessFully Panel Created*

──────────────────────
┏◘ 𝐔𝐬𝐞𝐫𝐧𝐚𝐦𝐞 : ${username}
┣◘ 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 : ${password}
┗◘ 𝐖𝐞𝐛 𝐋𝐨𝐠𝐢𝐧 : ${domain}
──────────────────────
\`4GB | ${Obj.disk} | ${Obj.cpu}%\`

*📑 Kebijakan & Ketentuan*
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴀᴛᴀ ɪɴɪ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴏᴍᴀɪɴ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴀʙᴏᴛᴀsᴇ sᴇʀᴠᴇʀ
- ᴅɪʟᴀʀᴀɴɢ ᴅᴅᴏs & ʀᴜɴ ʙᴏᴛ ᴅᴅᴏs
- sɪᴍᴘᴀɴ ᴅᴀᴛᴀ ɪɴɪ ʙᴀɪᴋ ʙᴀɪᴋ
- ɢᴀʀᴀɴsɪ 15ʜᴀʀɪ 1x ʀᴇᴘʟᴀᴄᴇ

*龙 2025 - ${global.namabot}*`

 let msg = generateWAMessageFromContent(target, { 
 viewOnceMessage: { 
 message: { 
 messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, 
 interactiveMessage: proto.Message.InteractiveMessage.create({ 
 body: proto.Message.InteractiveMessage.Body.create({ text: teksh }), 
 footer: proto.Message.InteractiveMessage.Footer.create({ text: `© ${global.ownername}` }), 
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
 buttons: [ 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Username", copy_code: username }) }, 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Password", copy_code: password }) }, 
 { name: "cta_url", buttonParamsJson: JSON.stringify({ display_text: "Link Login", url: `${domain}`, merchant_url: `${domain}` }) } 
 ] 
 }) 
 }) 
 } 
 } 
 }, {}) 

 await conn.relayMessage(target, msg.message, { messageId: msg.key.id })
 await conn.sendMessage(m.chat, { text: '☑️ Silahkan Cek Private ChatBot' }, { quoted: qtoko })
 } catch (error) {
 console.error("❌ Error saat membuat server:", error)
 return m.reply("❌ Terjadi kesalahan saat membuat server. Silakan coba lagi nanti!")
 }
}
break
case '3gb': {
 if (!isPremium && !isCreator) return m.reply("❌ Fitur ini hanya tersedia untuk pengguna premium atau creator!")
 
 let settings = JSON.parse(fs.readFileSync('./database/panelset.json'))
 let { egg, loc, nestid, domain, ptla } = settings

 let args = text.split("|").map(x => x.trim().toLowerCase())
 let username = args[0]
 let target = args[1] ? `${args[1]}@s.whatsapp.net` : m.sender
 if (!username || username.length < 4) return m.reply("❌ Username minimal 4 karakter!")

 let Obj = { ram: "3048", disk: "2500", cpu: "120" }
 
 try {
 let email = username + "@gmail.com"
 let name = username.charAt(0).toUpperCase() + username.slice(1) + " Server"
 let password = username + crypto.randomBytes(2).toString('hex')

 let f = await fetch(`${domain}/api/application/users`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "email": email,
 "username": username.toLowerCase(),
 "first_name": name,
 "last_name": "Server",
 "language": "en",
 "password": password
 })
 })
 let data = await f.json()
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
 let usr_id = data.attributes.id

 let f1 = await fetch(`${domain}/api/application/nests/${nestid}/eggs/${egg}`, {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 }
 })
 let data2 = await f1.json()
 let startup_cmd = data2.attributes.startup

 let f2 = await fetch(`${domain}/api/application/servers`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "name": name,
 "description": "Server otomatis",
 "user": usr_id,
 "egg": parseInt(egg),
 "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
 "startup": startup_cmd,
 "environment": {
 "INST": "npm",
 "USER_UPLOAD": "0",
 "AUTO_UPDATE": "0",
 "CMD_RUN": "npm start"
 },
 "limits": {
 "memory": Obj.ram,
 "swap": 0,
 "disk": Obj.disk,
 "io": 500,
 "cpu": Obj.cpu
 },
 "feature_limits": {
 "databases": 5,
 "backups": 5,
 "allocations": 5
 },
 "deploy": {
 "locations": [parseInt(loc)],
 "dedicated_ip": false,
 "port_range": [],
 },
 })
 })
 let result = await f2.json()
 if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))

 let teksh = `◻ *SuccessFully Panel Created*

──────────────────────
┏◘ 𝐔𝐬𝐞𝐫𝐧𝐚𝐦𝐞 : ${username}
┣◘ 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 : ${password}
┗◘ 𝐖𝐞𝐛 𝐋𝐨𝐠𝐢𝐧 : ${domain}
──────────────────────
\`3GB | ${Obj.disk} | ${Obj.cpu}%\`

*📑 Kebijakan & Ketentuan*
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴀᴛᴀ ɪɴɪ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴏᴍᴀɪɴ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴀʙᴏᴛᴀsᴇ sᴇʀᴠᴇʀ
- ᴅɪʟᴀʀᴀɴɢ ᴅᴅᴏs & ʀᴜɴ ʙᴏᴛ ᴅᴅᴏs
- sɪᴍᴘᴀɴ ᴅᴀᴛᴀ ɪɴɪ ʙᴀɪᴋ ʙᴀɪᴋ
- ɢᴀʀᴀɴsɪ 15ʜᴀʀɪ 1x ʀᴇᴘʟᴀᴄᴇ

*龙 2025 - ${global.namabot}*`

 let msg = generateWAMessageFromContent(target, { 
 viewOnceMessage: { 
 message: { 
 messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, 
 interactiveMessage: proto.Message.InteractiveMessage.create({ 
 body: proto.Message.InteractiveMessage.Body.create({ text: teksh }), 
 footer: proto.Message.InteractiveMessage.Footer.create({ text: `© ${global.ownername}` }), 
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
 buttons: [ 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Username", copy_code: username }) }, 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Password", copy_code: password }) }, 
 { name: "cta_url", buttonParamsJson: JSON.stringify({ display_text: "Link Login", url: `${domain}`, merchant_url: `${domain}` }) } 
 ] 
 }) 
 }) 
 } 
 } 
 }, {}) 

 await conn.relayMessage(target, msg.message, { messageId: msg.key.id })
 await conn.sendMessage(m.chat, { text: '☑️ Silahkan Cek Private ChatBot' }, { quoted: qtoko })
 } catch (error) {
 console.error("❌ Error saat membuat server:", error)
 return m.reply("❌ Terjadi kesalahan saat membuat server. Silakan coba lagi nanti!")
 }
}
break
case '2gb': {
 if (!isPremium && !isCreator) return m.reply("❌ Fitur ini hanya tersedia untuk pengguna premium atau creator!")
 
 let settings = JSON.parse(fs.readFileSync('./database/panelset.json'))
 let { egg, loc, nestid, domain, ptla } = settings

 let args = text.split("|").map(x => x.trim().toLowerCase())
 let username = args[0]
 let target = args[1] ? `${args[1]}@s.whatsapp.net` : m.sender
 if (!username || username.length < 4) return m.reply("❌ Username minimal 4 karakter!")

 let Obj = { ram: "2048", disk: "1500", cpu: "90" }
 
 try {
 let email = username + "@gmail.com"
 let name = username.charAt(0).toUpperCase() + username.slice(1) + " Server"
 let password = username + crypto.randomBytes(2).toString('hex')

 let f = await fetch(`${domain}/api/application/users`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "email": email,
 "username": username.toLowerCase(),
 "first_name": name,
 "last_name": "Server",
 "language": "en",
 "password": password
 })
 })
 let data = await f.json()
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
 let usr_id = data.attributes.id

 let f1 = await fetch(`${domain}/api/application/nests/${nestid}/eggs/${egg}`, {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 }
 })
 let data2 = await f1.json()
 let startup_cmd = data2.attributes.startup

 let f2 = await fetch(`${domain}/api/application/servers`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "name": name,
 "description": "Server otomatis",
 "user": usr_id,
 "egg": parseInt(egg),
 "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
 "startup": startup_cmd,
 "environment": {
 "INST": "npm",
 "USER_UPLOAD": "0",
 "AUTO_UPDATE": "0",
 "CMD_RUN": "npm start"
 },
 "limits": {
 "memory": Obj.ram,
 "swap": 0,
 "disk": Obj.disk,
 "io": 500,
 "cpu": Obj.cpu
 },
 "feature_limits": {
 "databases": 5,
 "backups": 5,
 "allocations": 5
 },
 "deploy": {
 "locations": [parseInt(loc)],
 "dedicated_ip": false,
 "port_range": [],
 },
 })
 })
 let result = await f2.json()
 if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))

 let teksh = `◻ *SuccessFully Panel Created*

──────────────────────
┏◘ 𝐔𝐬𝐞𝐫𝐧𝐚𝐦𝐞 : ${username}
┣◘ 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 : ${password}
┗◘ 𝐖𝐞𝐛 𝐋𝐨𝐠𝐢𝐧 : ${domain}
──────────────────────
\`2GB | ${Obj.disk} | ${Obj.cpu}%\`

*📑 Kebijakan & Ketentuan*
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴀᴛᴀ ɪɴɪ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴏᴍᴀɪɴ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴀʙᴏᴛᴀsᴇ sᴇʀᴠᴇʀ
- ᴅɪʟᴀʀᴀɴɢ ᴅᴅᴏs & ʀᴜɴ ʙᴏᴛ ᴅᴅᴏs
- sɪᴍᴘᴀɴ ᴅᴀᴛᴀ ɪɴɪ ʙᴀɪᴋ ʙᴀɪᴋ
- ɢᴀʀᴀɴsɪ 15ʜᴀʀɪ 1x ʀᴇᴘʟᴀᴄᴇ

*龙 2025 - ${global.namabot}*`

 let msg = generateWAMessageFromContent(target, { 
 viewOnceMessage: { 
 message: { 
 messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, 
 interactiveMessage: proto.Message.InteractiveMessage.create({ 
 body: proto.Message.InteractiveMessage.Body.create({ text: teksh }), 
 footer: proto.Message.InteractiveMessage.Footer.create({ text: `© ${global.ownername}` }), 
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
 buttons: [ 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Username", copy_code: username }) }, 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Password", copy_code: password }) }, 
 { name: "cta_url", buttonParamsJson: JSON.stringify({ display_text: "Link Login", url: `${domain}`, merchant_url: `${domain}` }) } 
 ] 
 }) 
 }) 
 } 
 } 
 }, {}) 

 await conn.relayMessage(target, msg.message, { messageId: msg.key.id })
 await conn.sendMessage(m.chat, { text: '☑️ Silahkan Cek Private ChatBot' }, { quoted: qtoko })
 } catch (error) {
 console.error("❌ Error saat membuat server:", error)
 return m.reply("❌ Terjadi kesalahan saat membuat server. Silakan coba lagi nanti!")
 }
}
break
case '1gb': {
 if (!isPremium && !isCreator) return m.reply("❌ Fitur ini hanya tersedia untuk pengguna premium atau creator!")
 
 let settings = JSON.parse(fs.readFileSync('./database/panelset.json'))
 let { egg, loc, nestid, domain, ptla } = settings

 let args = text.split("|").map(x => x.trim().toLowerCase())
 let username = args[0]
 let target = args[1] ? `${args[1]}@s.whatsapp.net` : m.sender
 if (!username || username.length < 4) return m.reply("❌ Username minimal 4 karakter!")

 let Obj = { ram: "1000", disk: "1000", cpu: "40" }
 
 try {
 let email = username + "@gmail.com"
 let name = username.charAt(0).toUpperCase() + username.slice(1) + " Server"
 let password = username + crypto.randomBytes(2).toString('hex')

 let f = await fetch(`${domain}/api/application/users`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "email": email,
 "username": username.toLowerCase(),
 "first_name": name,
 "last_name": "Server",
 "language": "en",
 "password": password
 })
 })
 let data = await f.json()
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
 let usr_id = data.attributes.id

 let f1 = await fetch(`${domain}/api/application/nests/${nestid}/eggs/${egg}`, {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 }
 })
 let data2 = await f1.json()
 let startup_cmd = data2.attributes.startup

 let f2 = await fetch(`${domain}/api/application/servers`, {
 method: "POST",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + ptla
 },
 body: JSON.stringify({
 "name": name,
 "description": "Server otomatis",
 "user": usr_id,
 "egg": parseInt(egg),
 "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
 "startup": startup_cmd,
 "environment": {
 "INST": "npm",
 "USER_UPLOAD": "0",
 "AUTO_UPDATE": "0",
 "CMD_RUN": "npm start"
 },
 "limits": {
 "memory": Obj.ram,
 "swap": 0,
 "disk": Obj.disk,
 "io": 500,
 "cpu": Obj.cpu
 },
 "feature_limits": {
 "databases": 5,
 "backups": 5,
 "allocations": 5
 },
 "deploy": {
 "locations": [parseInt(loc)],
 "dedicated_ip": false,
 "port_range": [],
 },
 })
 })
 let result = await f2.json()
 if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))

 let teksh = `◻ *SuccessFully Panel Created*

──────────────────────
┏◘ 𝐔𝐬𝐞𝐫𝐧𝐚𝐦𝐞 : ${username}
┣◘ 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 : ${password}
┗◘ 𝐖𝐞𝐛 𝐋𝐨𝐠𝐢𝐧 : ${domain}
──────────────────────
\`1GB | ${Obj.disk} | ${Obj.cpu}%\`

*📑 Kebijakan & Ketentuan*
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴀᴛᴀ ɪɴɪ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴇʙᴀʀ ᴅᴏᴍᴀɪɴ
- ᴅɪʟᴀʀᴀɴɢ ᴍᴇɴʏᴀʙᴏᴛᴀsᴇ sᴇʀᴠᴇʀ
- ᴅɪʟᴀʀᴀɴɢ ᴅᴅᴏs & ʀᴜɴ ʙᴏᴛ ᴅᴅᴏs
- sɪᴍᴘᴀɴ ᴅᴀᴛᴀ ɪɴɪ ʙᴀɪᴋ ʙᴀɪᴋ
- ɢᴀʀᴀɴsɪ 15ʜᴀʀɪ 1x ʀᴇᴘʟᴀᴄᴇ

*龙 2025 - ${global.namabot}*`

 let msg = generateWAMessageFromContent(target, { 
 viewOnceMessage: { 
 message: { 
 messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, 
 interactiveMessage: proto.Message.InteractiveMessage.create({ 
 body: proto.Message.InteractiveMessage.Body.create({ text: teksh }), 
 footer: proto.Message.InteractiveMessage.Footer.create({ text: `© ${global.ownername}` }), 
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
 buttons: [ 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Username", copy_code: username }) }, 
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "Copy Password", copy_code: password }) }, 
 { name: "cta_url", buttonParamsJson: JSON.stringify({ display_text: "Link Login", url: `${domain}`, merchant_url: `${domain}` }) } 
 ] 
 }) 
 }) 
 } 
 } 
 }, {}) 

 await conn.relayMessage(target, msg.message, { messageId: msg.key.id })
 await conn.sendMessage(m.chat, { text: '☑️ Silahkan Cek Private ChatBot' }, { quoted: qtoko })
 } catch (error) {
 console.error("❌ Error saat membuat server:", error)
 return m.reply("❌ Terjadi kesalahan saat membuat server. Silakan coba lagi nanti!")
 }
}
break


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 RANDOM MENU ───────────────────────────────────────────────────────────────乂 \\            
case 'tiktokgirl':
reply('Tunggu')
asupan = JSON.parse(fs.readFileSync('./src/tiktok/tiktokgirl.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
conn.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktokghea':
reply('Tunggu')
asupan = JSON.parse(fs.readFileSync('./src/tiktok/gheayubi.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
conn.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktoknukhty':
reply('Tunggu')
asupan = JSON.parse(fs.readFileSync('./src/tiktok/ukhty.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
conn.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktoksantuy':
reply('Tunggu')
asupan = JSON.parse(fs.readFileSync('./src/tiktok/santuy.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
conn.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktokkayes':
reply('Tunggu')
asupan = JSON.parse(fs.readFileSync('./src/tiktok/kayes.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
conn.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktokpanrika':
reply('Tunggu')
asupan = JSON.parse(fs.readFileSync('./src/tiktok/panrika.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
conn.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktoknotnot':
reply('Tunggu')
asupan = JSON.parse(fs.readFileSync('./src/tiktok/notnot.json'))
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}
hasil = pickRandom(asupan)
conn.sendMessage(m.chat, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break
case 'hijab':

var notnot = JSON.parse(fs.readFileSync('./src/RImage/tiktokpics/hijab.json'))
var iiiiiiiiiii = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiii.url } }, { quoted: m })
break

case 'indo':

var notnot = JSON.parse(fs.readFileSync('./src/RImage/tiktokpics/indonesia.json'))
var iiiiiiiiiiii = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiii.url } }, { quoted: m })
break
case 'japanese':

var notnot = JSON.parse(fs.readFileSync('./src/RImage/tiktokpics/japan.json'))
var iiiiiiiiiiiii = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiii.url } }, { quoted: m })
break
case 'korean':

var notnot = JSON.parse(fs.readFileSync('./src/RImage/tiktokpics/korea.json'))
var iiiiiiiiiiiiii = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'malay':

var notnot = JSON.parse(fs.readFileSync('./src/RImage/tiktokpics/malaysia.json'))
var iiiiiiiiiiiiiii = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'randomgirl':

var notnot = JSON.parse(fs.readFileSync('./src/RImage/tiktokpics/random.json'))
var iiiiiiiiiiiiiiii = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'randomboy':

var notnot = JSON.parse(fs.readFileSync('./src/RImage/tiktokpics/random2.json'))
var iiiiiiiiiiiiiiiii = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'thai':

var notnot = JSON.parse(fs.readFileSync('./src/RImage/tiktokpics/thailand.json'))
var iiiiiiiiiiiiiiiiii = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'vietnamese':

var notnot = JSON.parse(fs.readFileSync('./src/RImage/tiktokpics/vietnam.json'))
var iiiiiiiiiiiiiiiiiii = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'aesthetic':

var notnot = JSON.parse(fs.readFileSync('./src/RImage/randompics/aesthetic.json'))
var iiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'antiwork':

var notnot = JSON.parse(fs.readFileSync('./src/RImage/randompics/antiwork.json'))
var iiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'blackpink2':

var notnot = JSON.parse(fs.readFileSync('./src/RImage/randompics/blackpink.json'))
var iiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'bike':

var notnot = JSON.parse(fs.readFileSync('./src/RImage/randompics/bike.json'))
var iiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'boneka':

var notnot = JSON.parse(fs.readFileSync('./src/RImage/randompics/boneka.json'))
var iiiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'cosplay':

var notnot = JSON.parse(fs.readFileSync('./src/RImage/randompics/cosplay.json'))
var iiiiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'cat':

var notnot = JSON.parse(fs.readFileSync('./src/RImage/randompics/cat.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'doggo':

var notnot = JSON.parse(fs.readFileSync('./src/RImage/randompics/doggo.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiiil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiil.url } }, { quoted: m })
break
case 'justina':

var notnot = JSON.parse(fs.readFileSync('./src/RImage/randompics/justina.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiiill = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiill.url } }, { quoted: m })
break

case 'kayes':

var notnot = JSON.parse(fs.readFileSync('./src/RImage/randompics/kayes.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiiilll = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiilll.url } }, { quoted: m })
break
case 'kpop':

var notnot = JSON.parse(fs.readFileSync('./src/RImage/randompics/kpop.json'))
var ll = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: ll.url } }, { quoted: m })
break
case 'notnot':

var notnot = JSON.parse(fs.readFileSync('./src/RImage/randompics/notnot.json'))
var lll = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: 'don banh', image: { url: lll.url } }, { quoted: m })
break


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 ANIME MENU ───────────────────────────────────────────────────────────────乂 \\
case 'random-anime': {
  await conn.sendMessage(m.chat, {
    image: { url: 'https://pic.re/image' }
  }, { quoted: m })
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case 'randomba': {
  try {
    // Menggunakan axios untuk mengambil gambar dari URL
    const axios = await import('axios')
    const { data } = await axios.default.get('https://flowfalcon.dpdns.org/random/ba', { responseType: 'arraybuffer' })

    // Mengonversi gambar menjadi buffer dan mengirimnya sebagai image
    const buffer = Buffer.from(data)
    await conn.sendMessage(m.chat, {
      image: buffer,
      caption: 'Ini gambar acak untukmu! 🎉'  // Caption bisa kamu sesuaikan
    }, { quoted: m })

  } catch (e) {
    console.error(e)
    reply('Gagal mengambil gambar, coba lagi nanti.')
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'cry': case 'kill': case 'hug': case 'pat': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'shinobu': case 'handhold': {
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
conn.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
            case 'animeawoo':{
            
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animemegumin':{

reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animeshinobu':{

reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animehandhold':{

reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animehighfive':{

reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animecringe':{

reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animedance':{

reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animehappy':{

reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animeglomp':{

reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animesmug':{

reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animeblush':{

reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animewave':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animesmile':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animepoke':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animewink':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animebonk':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animebully':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animeyeet':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animebite':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animelick':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animekill':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animecry':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animewlp':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animekiss':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animehug':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'couplepp': case 'ppcouple': {
reply(mess.wait)
let anucpp = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/couple.json')
let random = anucpp[Math.floor(Math.random() * anucpp.length)]
conn.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
conn.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
            db.data.users[m.sender].exp += await randomNomor(60)
	    break

case 'animeneko':{
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animepat':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animeslap':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animecuddle':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animewaifu':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animenom':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animefoxgirl':{
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animetickle': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`)     
            await conn.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animegecg': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`)     
            await conn.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'dogwoof': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`)     
            await conn.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case '8ballpool': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`)     
            await conn.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'goosebird': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`)     
            await conn.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animefeed': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`)     
            await conn.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'animeavatar': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`)     
            await conn.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'lizardpic': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`)     
            await conn.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'catmeow': {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`)     
            await conn.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 GROUP FEATURE ───────────────────────────────────────────────────────────────乂 \\

    case 'antipromotion':
        handleFeatureToggle('antipromotion', command);
        break;
            case 'antitoxic':
        handleFeatureToggle('antitoxic', command);
        break;
case 'antitagsw': {
  if (!isGroup) return reply(mess.group);
  if (!isAdmins && !isCreator) return reply(`Fitur ini hanya untuk *admin grup*!`);
  if (!isBotAdmins) return reply(`Bot bukan admin, tidak bisa mengatur antitagsw.`);

  if (args[0] === "on") {
    if (db.data.chats[m.chat].antitagsw) return reply(`*Antitagsw* sudah aktif sebelumnya.`);
    db.data.chats[m.chat].antitagsw = true;
    return reply(`*Berhasil mengaktifkan Antitagsw ✅*`);
  } else if (args[0] === "off") {
    if (!db.data.chats[m.chat].antitagsw) return reply(`*Antitagsw* sudah tidak aktif.`);
    db.data.chats[m.chat].antitagsw = false;
    return reply(`*Berhasil menonaktifkan Antitagsw ❌*`);
  } else {
    // Tampilan tombol jika tanpa argumen
    let msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: { text: `Hai ${pushname}, silakan klik tombol untuk mengatur *Antitagsw* grup.` },
            footer: { text: namabot },
            header: {
              ...(await prepareWAMessageMedia({
                image: { url: "./media/thumb.jpg" }
              }, { upload: conn.waUploadToServer })),
              title: "",
              gifPlayback: true,
              subtitle: ownername,
              hasMediaAttachment: false
            },
            nativeFlowMessage: {
              buttons: [{
                name: "single_select",
                buttonParamsJson: `{
                  "title":"PILIH PENGATURAN",
                  "sections":[{
                    "title":"ATUR ANTITAGSW",
                    "rows":[
                      {
                        "header":"AKTIFKAN ✅",
                        "title":"Aktifkan",
                        "description":"Menyalakan fitur antitagsw",
                        "id":"${prefix + command} on"
                      },
                      {
                        "header":"NONAKTIFKAN ❌",
                        "title":"Nonaktifkan",
                        "description":"Mematikan fitur antitagsw",
                        "id":"${prefix + command} off"
                      }
                    ]
                  }]
                }`
              }]
            },
            contextInfo: {
              mentionedJid: [m.sender],
              forwardingScore: 999,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterJid: "@newsletter",
                newsletterName: ownername,
                serverMessageId: 143
              }
            }
          })
        }
      }
    }, { quoted: m });
    await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
  }

  db.data.users[m.sender].exp += await randomNomor(60);
}
break;
case "antilink": {
  if (!isGroup) return reply(mess.group);
  if (!isCreator && !isAdmins) return reply(mess.Admin);

  if (args[0] === "on") {
    if (antilink.includes(m.chat)) return reply("*Antilink Grup* sudah aktif di grup ini!");
    if (antilink2.includes(m.chat)) {
      antilink2.splice(antilink2.indexOf(m.chat), 1);
      fs.writeFileSync("./database/antilink2.json", JSON.stringify(antilink2));
    }
    antilink.push(m.chat);
    fs.writeFileSync("./database/antilink.json", JSON.stringify(antilink));
    return reply("*Berhasil mengaktifkan Antilink Grup ✅*");
  } else if (args[0] === "off") {
    if (!antilink.includes(m.chat)) return reply("*Antilink Grup* belum aktif di grup ini!");
    antilink.splice(antilink.indexOf(m.chat), 1);
    fs.writeFileSync("./database/antilink.json", JSON.stringify(antilink));
    return reply("*Berhasil menonaktifkan Antilink Grup ✅*");
  } else {
    let msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: { text: `Hai ${pushname}, silakan klik tombol di bawah untuk menggunakan _*${command}*_ command.` },
            footer: { text: namabot },
            header: {
              ...(await prepareWAMessageMedia({
                image: { url: "./media/thumb.jpg" }
              }, { upload: conn.waUploadToServer })),
              title: ``,
              gifPlayback: true,
              subtitle: ownername,
              hasMediaAttachment: false
            },
            nativeFlowMessage: {
              buttons: [{
                name: "single_select",
                buttonParamsJson: `{
                  "title":"PILIH ON/OFF ♨️",
                  "sections":[{
                    "title":"PILIH ON/OFF",
                    "rows":[
                      {
                        "header":"HIDUPKAN ✅",
                        "title":"MEMILIH",
                        "description":"MENGHIDUPKAN ✅",
                        "id":"${prefix + command} on"
                      },
                      {
                        "header":"MATIKAN ❌",
                        "title":"MEMILIH",
                        "description":"MENONAKTIFKAN ❌",
                        "id":"${prefix + command} off"
                      }
                    ]
                  }]
                }`
              }]
            },
            contextInfo: {
              mentionedJid: [m.sender],
              forwardingScore: 999,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterJid: "@newsletter",
                newsletterName: ownername,
                serverMessageId: 143
              }
            }
          })
        }
      }
    }, { quoted: m });
    await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
  }

  db.data.users[m.sender].exp += await randomNomor(60);
}
break;
        case "antilinkch":
        {
          if (!isGroup) {
            return reply(mess.group);
          }
          if (!isBotAdmins) {
            return reply("_Bot Harus Menjadi Admin Terlebih Dahulu_");
          }
          if (!isAdmins && !isCreator) {
            return reply("Khusus Admin!!");
          }
          if (args[0] === "on") {
            if (Antilinkch) {
              return reply("Already activated");
            }
            ntlinkch.push(from);
            fs.writeFileSync("./database/antilinkch.json", JSON.stringify(ntlinkch));
            reply("Success in turning on antiwame in this group");
            var groupe = await conn.groupMetadata(from);
            var members = groupe.participants;
            var mems = [];
            members.map(async adm => {
              mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
            });
            conn.sendMessage(from, {
              text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send group link in this group, one who sends will be kicked immediately!`,
              contextInfo: {
                mentionedJid: mems
              }
            }, {
              quoted: m
            });
          } else if (args[0] === "off") {
            if (!Antilinkch) {
              return reply("Already deactivated");
            }
            let off = ntlinkch.indexOf(from);
            ntlinkch.splice(off, 1);
            fs.writeFileSync("./database/antilinkch.json", JSON.stringify(ntlinkch));
            reply("Success in turning off antiwame in this group");
          } else {
            let msg = generateWAMessageFromContent(from, {
              viewOnceMessage: {
                message: {
                  messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                  },
                  interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                      text: `Hai ${pushname}\nSilakan klik tombol di bawah untuk menggunakan _*${command}*_ command`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                      text: namabot
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                      ...(await prepareWAMessageMedia({
                        image: {
                          url: "./media/thumb.jpg"
                        }
                      }, {
                        upload: conn.waUploadToServer
                      })),
                      title: ``,
                      gifPlayback: true,
                      subtitle: ownername,
                      hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                      buttons: [{
                        name: "single_select",
                        buttonParamsJson: `{
                "title":"PILIH ON/OFF ♨️",
                "sections":[{
                  "title":"PILIH ON/OFF ",
                  "rows":[{
                    "header":"HIDUPKAN ✅",
                    "title":"MEMILIH ",
                    "description":"MENGHIDUPKAN ✅",
                    "id":"${prefix + command} on"
                  },
                  {
                    "header":"MEMATIKAN ❌",
                    "title":"MEMILIH ",
                    "description":"MEMATIKAN ❌",
                    "id":"${prefix + command} off"
                  }]
                }]
              }`
                      }]
                    }),
                    contextInfo: {
                      mentionedJid: [m.sender],
                      forwardingScore: 999,
                      isForwarded: true,
                      forwardedNewsletterMessageInfo: {
                        newsletterJid: "@newsletter",
                        newsletterName: ownername,
                        serverMessageId: 143
                      }
                    }
                  })
                }
              }
            }, {
              quoted: m
            });
            await conn.relayMessage(msg.key.remoteJid, msg.message, {
              messageId: msg.key.id
            });
          }
        }
        break;
case "antilinkv2": {
  if (!isGroup) return reply(mess.group);
  if (!isCreator && !isAdmins) return reply(mess.Admin);

  if (args[0] === "on") {
    if (antilink2.includes(m.chat)) return reply("*Antilink Grup V2* sudah aktif di grup ini!");
    if (antilink.includes(m.chat)) {
      antilink.splice(antilink.indexOf(m.chat), 1);
      fs.writeFileSync("./database/antilink.json", JSON.stringify(antilink));
    }
    antilink2.push(m.chat);
    fs.writeFileSync("./database/antilink2.json", JSON.stringify(antilink2));
    return reply("*Berhasil mengaktifkan Antilink Grup V2 ✅*");
  } else if (args[0] === "off") {
    if (!antilink2.includes(m.chat)) return reply("*Antilink Grup V2* belum aktif di grup ini!");
    antilink2.splice(antilink2.indexOf(m.chat), 1);
    fs.writeFileSync("./database/antilink2.json", JSON.stringify(antilink2));
    return reply("*Berhasil menonaktifkan Antilink Grup V2 ✅*");
  } else {
    let msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: { text: `Hai ${pushname}, silakan klik tombol di bawah untuk menggunakan _*${command}*_ command.` },
            footer: { text: namabot },
            header: {
              ...(await prepareWAMessageMedia({
                image: { url: "./media/thumb.jpg" }
              }, { upload: conn.waUploadToServer })),
              title: ``,
              gifPlayback: true,
              subtitle: ownername,
              hasMediaAttachment: false
            },
            nativeFlowMessage: {
              buttons: [{
                name: "single_select",
                buttonParamsJson: `{
                  "title":"PILIH ON/OFF ♨️",
                  "sections":[{
                    "title":"PILIH ON/OFF",
                    "rows":[
                      {
                        "header":"HIDUPKAN ✅",
                        "title":"MEMILIH",
                        "description":"MENGHIDUPKAN ✅",
                        "id":"${prefix + command} on"
                      },
                      {
                        "header":"MATIKAN ❌",
                        "title":"MEMILIH",
                        "description":"MENONAKTIFKAN ❌",
                        "id":"${prefix + command} off"
                      }
                    ]
                  }]
                }`
              }]
            },
            contextInfo: {
              mentionedJid: [m.sender],
              forwardingScore: 999,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterJid: "@newsletter",
                newsletterName: ownername,
                serverMessageId: 143
              }
            }
          })
        }
      }
    }, { quoted: m });
    await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
  }

  db.data.users[m.sender].exp += await randomNomor(60);
}
break;
			case 'antipolling': {
				if (!isGroup) return reply(mess.group)
				if (!isAdmins && !isCreator) return reply(mess.admin)
				if (!isBotAdmins) return reply(mess.BotAdmin)
				if (args[0] === "on") {
					if (db.data.chats[m.chat].antipolling) return m.reply(`Udah aktif`)
					db.data.chats[m.chat].antipolling = true
					m.reply('Successfully Activate Anti Polling In This Group')
				} else if (args[0] === "off") {
					if (!db.data.chats[m.chat].antipolling) return m.reply(`Udah nonaktif`)
					db.data.chats[m.chat].antipolling = false
					m.reply('Successfully Disabling Anti Polling In This Group')
				} else {
    let msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: { text: `Hai ${pushname}, silakan klik tombol di bawah untuk menggunakan _*${command}*_ command.` },
            footer: { text: namabot },
            header: {
              ...(await prepareWAMessageMedia({
                image: { url: "./media/thumb.jpg" }
              }, { upload: conn.waUploadToServer })),
              title: ``,
              gifPlayback: true,
              subtitle: ownername,
              hasMediaAttachment: false
            },
            nativeFlowMessage: {
              buttons: [{
                name: "single_select",
                buttonParamsJson: `{
                  "title":"PILIH ON/OFF ♨️",
                  "sections":[{
                    "title":"PILIH ON/OFF",
                    "rows":[
                      {
                        "header":"HIDUPKAN ✅",
                        "title":"MEMILIH",
                        "description":"MENGHIDUPKAN ✅",
                        "id":"${prefix + command} on"
                      },
                      {
                        "header":"MATIKAN ❌",
                        "title":"MEMILIH",
                        "description":"MENONAKTIFKAN ❌",
                        "id":"${prefix + command} off"
                      }
                    ]
                  }]
                }`
              }]
            },
            contextInfo: {
              mentionedJid: [m.sender],
              forwardingScore: 999,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterJid: "@newsletter",
                newsletterName: ownername,
                serverMessageId: 143
              }
            }
          })
        }
      }
    }, { quoted: m });
    await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
  }

  db.data.users[m.sender].exp += await randomNomor(60);
}
break;
        case 'acc': {
if (!isGroup) return m.reply(mess.group)
const args = text.trim().split(' ')
const subcmd = args[0]?.toLowerCase()
if (!subcmd) {
return m.reply(
`Gunakan perintah dengan format berikut:\n\n` +
`• *.acc all* — Terima semua\n` +
`• *.acc 10* — Terima 10 pertama\n` +
`• *.acc non all* — Tolak semua\n` +
`• *.acc non 10* — Tolak 10 pertama\n`
)
}
const pending = await conn.groupRequestParticipantsList(m.chat)
if (!pending || pending.length === 0) return m.reply('Tidak ada yang menunggu persetujuan.')
let listTarget = []
if (subcmd === 'all') {
listTarget = pending.map(p => p.jid)
await conn.groupRequestParticipantsUpdate(m.chat, listTarget, 'approve')
m.reply(`Berhasil menyetujui ${listTarget.length} orang.`)
} else if (subcmd === 'non' && args[1] === 'all') {
listTarget = pending.map(p => p.jid)
await conn.groupRequestParticipantsUpdate(m.chat, listTarget, 'reject')
m.reply(`Berhasil menolak ${listTarget.length} orang.`)
} else if (!isNaN(subcmd)) {
let jumlah = parseInt(subcmd)
listTarget = pending.slice(0, jumlah).map(p => p.jid)
await conn.groupRequestParticipantsUpdate(m.chat, listTarget, 'approve')
m.reply(`Berhasil menyetujui ${listTarget.length} orang.`)
} else if (subcmd === 'non' && args[1] === '1p') {
listTarget = pending.slice(0, 10).map(p => p.jid)
await conn.groupRequestParticipantsUpdate(m.chat, listTarget, 'reject')
m.reply(`Berhasil menolak ${listTarget.length} orang.`)
} else {
m.reply(`Perintah tidak dikenali.\nContoh:\n• *.acc all*\n• *.acc 10*\n• *.acc non all*\n• *.acc non 10*`)
}
}
db.data.users[m.sender].exp += await randomNomor(60)
break
        case 'antibot': {
  if (!isGroup) return m.reply('Fitur ini hanya bisa dipakai di grup!')
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!text) return m.reply(`Contoh:\n${prefix + command} on\n${prefix + command} off`)
  if (text === 'on') {
    global.antibotGroups[m.chat] = true
    m.reply('✅ Fitur *Antibot* berhasil diaktifkan di grup ini.')
  } else if (text === 'off') {
    global.antibotGroups[m.chat] = false
    m.reply('❌ Fitur *Antibot* dimatikan di grup ini.')
  } else {
    let msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: { text: `Hai ${pushname}, silakan klik tombol di bawah untuk menggunakan _*${command}*_ command.` },
            footer: { text: namabot },
            header: {
              ...(await prepareWAMessageMedia({
                image: { url: "./media/thumb.jpg" }
              }, { upload: conn.waUploadToServer })),
              title: ``,
              gifPlayback: true,
              subtitle: ownername,
              hasMediaAttachment: false
            },
            nativeFlowMessage: {
              buttons: [{
                name: "single_select",
                buttonParamsJson: `{
                  "title":"PILIH ON/OFF ♨️",
                  "sections":[{
                    "title":"PILIH ON/OFF",
                    "rows":[
                      {
                        "header":"HIDUPKAN ✅",
                        "title":"MEMILIH",
                        "description":"MENGHIDUPKAN ✅",
                        "id":"${prefix + command} on"
                      },
                      {
                        "header":"MATIKAN ❌",
                        "title":"MEMILIH",
                        "description":"MENONAKTIFKAN ❌",
                        "id":"${prefix + command} off"
                      }
                    ]
                  }]
                }`
              }]
            },
            contextInfo: {
              mentionedJid: [m.sender],
              forwardingScore: 999,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterJid: "@newsletter",
                newsletterName: ownername,
                serverMessageId: 143
              }
            }
          })
        }
      }
    }, { quoted: m });
    await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
  }

  db.data.users[m.sender].exp += await randomNomor(60);
}
break;
case 'totag': {
if (!isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
if (!isAdmins) return reply(mess.admin)
if (!m.quoted) return `Reply pesan dengan caption ${prefix + command}`
conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'linkgroup': case 'linkgc': {
if (!isCreator) return reply(mess.creator)
if (!isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
let response = await conn.groupInviteCode(from)
conn.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'resetlinkgc': {
if (!isCreator) return reply(mess.creator)
if (!isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
conn.groupRevokeInvite(from)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'sendlinkgc': {
if (!isCreator) return reply(mess.creator)
if (!isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await conn.groupInviteCode(from)
conn.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'kick': case 'dor': {
if (!isGroup) return reply(mess.group)
if (!isCreator && !isAdmins) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await conn.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return reply("Nomor tidak terdaftar di whatsapp")
const res = await conn.groupParticipantsUpdate(m.chat, [input], 'remove')
await reply(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
} else {
return reply("@tag/reply")
}
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'add': {
if (!isCreator) return reply(mess.creator)
if (!isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(from, [users], 'add')
reply(mess.done)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
			case 'promote':
			case 'pm': {
				if (!isGroup) return reply(mess.group)
				if (!isCreator && !isAdmins) return reply(mess.Admin)
				if (!isBotAdmins) return reply(mess.BotAdmin)
				if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) return reply('Tag/reply pesan target yang ingin di jadikan admin!')
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!m.mentionedJid[0] && !m.quoted && !text) return reply(`Tag/Reply Target Yang Mau Di ${command}`)
				await conn.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply('Sukses promote member✅')).catch((err) => m.reply('❌ Terjadi kesalahan'))
			}
			db.data.users[m.sender].exp += await randomNomor(60)
			break
			case 'demote':
			case 'dm': {
				if (!isGroup) return reply(mess.group)
				if (!isCreator && !isAdmins) return reply(mess.Admin)
				if (!isBotAdmins) return reply(mess.BotAdmin)
				if (!m.quoted && !m.mentionedJid[0] && isNaN(parseInt(args[0]))) return reply('Tag/reply pesan target yang ingin di un admin!')
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!m.mentionedJid[0] && !m.quoted && !text) return reply(`Tag/Reply Target Yang Mau Di ${command}`)
				await conn.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply('Sukses demote admin✅')).catch((err) => m.reply('❌ Terjadi kesalahan'))
			}
			db.data.users[m.sender].exp += await randomNomor(60)
			break
case 'hidetag': {
if (!isCreator && !isAdmins ) return reply(mess.admin)
if (!isGroup) return reply(mess.group)
conn.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:m})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'tagall': {
if (!isCreator && !isAdmins ) return reply(mess.admin)
if (!isGroup) return
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
}
db.data.users[m.sender].exp += await randomNomor(60)
break
      case 'group':
      case 'grup':
        if (!isGroup) return m.reply(mess.group);
        if (!isAdmins && !isCreator)
          return m.reply(mess.admin);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (args[0] === "close") {
          await conn
            .groupSettingUpdate(m.chat, "announcement")
            .then((res) => m.reply(`Sukses Menutup Group 🕊️`))
            .catch((err) => m.reply(json(err)));
        } else if (args[0] === "open") {
          await conn
            .groupSettingUpdate(m.chat, "not_announcement")
            .then((res) => m.reply(`Sukses Membuka Group 🕊️`))
            .catch((err) => m.reply(json(err)));
        } else {
          m.reply(`Mode ${command}\n\n\nKetik ${prefix + command}open/close`);
        }
        db.data.users[m.sender].exp += await randomNomor(60)
        break;
              case 'closetime':
        if (!isGroup) return m.reply(mess.group);
        if (!isAdmins && !isCreator)
          return m.reply(mess.admins);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (args[1] == "detik") {
          var timer = args[0] * `1000`;
        } else if (args[1] == "menit") {
          var timer = args[0] * `60000`;
        } else if (args[1] == "jam") {
          var timer = args[0] * `3600000`;
        } else if (args[1] == "hari") {
          var timer = args[0] * `86400000`;
        } else {
          return m.reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik");
        }
        m.reply(`Close time ${q} dimulai dari sekarang`);
        setTimeout(() => {
          var nomor = m.participant;
          const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`;
          conn.groupSettingUpdate(m.chat, "announcement");
          m.reply(close);
        }, timer);
        break;
      case 'opentime':
        if (!isGroup) return m.reply(mess.group);
        if (!isAdmins && !isCreator)
          return m.reply(mess.admins);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (args[1] == "detik") {
          var timer = args[0] * `1000`;
        } else if (args[1] == "menit") {
          var timer = args[0] * `60000`;
        } else if (args[1] == "jam") {
          var timer = args[0] * `3600000`;
        } else if (args[1] == "hari") {
          var timer = args[0] * `86400000`;
        } else {
          return m.reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik");
        }
        m.reply(`Open time ${q} dimulai dari sekarang`);
        setTimeout(() => {
          var nomor = m.participant;
          const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`;
          conn.groupSettingUpdate(m.chat, "not_announcement");
          m.reply(open);
        }, timer);
        db.data.users[m.sender].exp += await randomNomor(60)
        break;
        case 'cekasalmember': {
  if (!isGroup) return m.reply(mess.group)
  const participants = await conn.groupMetadata(m.chat).then(a => a.participants)
  
  let dataNegara = {
    '62': { nama: 'Indonesia', emoji: '🇮🇩', jumlah: 0 },
    '60': { nama: 'Malaysia', emoji: '🇲🇾', jumlah: 0 },
    '91': { nama: 'India', emoji: '🇮🇳', jumlah: 0 },
    '92': { nama: 'Pakistan', emoji: '🇵🇰', jumlah: 0 },
    '1': { nama: 'USA/Canada', emoji: '🇺🇸', jumlah: 0 },
    '44': { nama: 'Inggris', emoji: '🇬🇧', jumlah: 0 },
    '81': { nama: 'Jepang', emoji: '🇯🇵', jumlah: 0 },
    '82': { nama: 'Korea Selatan', emoji: '🇰🇷', jumlah: 0 },
    '84': { nama: 'Vietnam', emoji: '🇻🇳', jumlah: 0 },
    '234': { nama: 'Nigeria', emoji: '🇳🇬', jumlah: 0 },
    '55': { nama: 'Brasil', emoji: '🇧🇷', jumlah: 0 },
    '86': { nama: 'China', emoji: '🇨🇳', jumlah: 0 },
    '7': { nama: 'Rusia', emoji: '🇷🇺', jumlah: 0 }
  }

  let lainnya = 0

  participants.forEach(p => {
    let nomor = p.id.split('@')[0]
    let ketemu = false
    for (let kode in dataNegara) {
      if (nomor.startsWith(kode)) {
        dataNegara[kode].jumlah++
        ketemu = true
        break
      }
    }
    if (!ketemu) lainnya++
  })

  let hasil = `*Jumlah Anggota Berdasarkan Asal Negara:*\n\n`
  Object.values(dataNegara).forEach(data => {
    if (data.jumlah > 0) hasil += `${data.nama}: ${data.jumlah} ${data.emoji}\n`
  })
  if (lainnya > 0) hasil += `Lainnya: ${lainnya} 🏳️`

  m.reply(hasil)
}
db.data.users[m.sender].exp += await randomNomor(60)
break


    // ───────────────────────────────────────────────────────────────────────────────乂 🥀 TOOLS FEATURE ───────────────────────────────────────────────────────────────乂 \\
       		case 'ssweb': {
				if (!text) return reply(`Example: ${prefix + command} https://`)
				if (!text.startsWith('http')) {
					let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/https://' + q;
					await conn.sendMessage(m.chat, { image: { url: buf }, caption: 'Berhasil' }, { quoted: m })
				} else {
					let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + q;
					await conn.sendMessage(m.chat, { image: { url: buf }, caption: 'Berhasil' }, { quoted: m })
				}
			}
			db.data.users[m.sender].exp += await randomNomor(60)
			break
    case 'ttsba': {
  if (!text) return m.reply('Masukkan format: .ttsba [karakter] | [teks]\nContoh: .ttsba aru | halo aku aru')

  let [char, ...teks] = text.split('|')
  char = char?.trim()?.toLowerCase()
  teks = teks?.join('|')?.trim()

  if (!char || !teks) return m.reply('Format salah!\nContoh: .ttsba aru | halo aku aru')

  try {
    const url = `${global.nekorin}/tools/ttsba?text=${encodeURIComponent(teks)}&char=${char}&speed=1`

    await conn.sendMessage(m.chat, {
      audio: { url },
      mimetype: 'audio/mp4',
      ptt: true // true = kirim sebagai VN
    }, { quoted: m })

  } catch (e) {
    console.error(e)
    m.reply('Gagal membuat TTS. Pastikan karakter valid.')
  }
   }
   db.data.users[m.sender].exp += await randomNomor(60)
  break

case "memes": {
  await conn.sendMessage(m.chat, {
    image: { url: 'https://img.randme.me/' },
    caption: '*Random Meme*'
  }, { quoted: m });
};
db.data.users[m.sender].exp += await randomNomor(60)
break 
case "ocr": {
  try {
 
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime || !mime.startsWith('image/')) 
      throw 'Silakan kirim atau reply *gambar* untuk diubah ke teks.'
 
    let media = await q.download()
    let ext = mime.split('/')[1]
    let filename = `ocr.${ext}`
 
    let imageUrl = await Uguu(media, filename)
    let { data } = await axios.get(`https://www.abella.icu/ocr?imageUrl=${encodeURIComponent(imageUrl)}`)
 
    if (data?.status !== 'success') throw 'OCR gagal, coba lagi nanti.'
    
    let hasil = data.data?.extractedText || 'Tidak ada teks yang berhasil diekstrak'
    m.reply(hasil.replace(/\r/g, ''))
  } catch (err) {
 
    m.reply(`${err}`)
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case "rvo": {
    try {
        if (!m.quoted || (!/imageMessage|videoMessage/.test(m.quoted.mtype))) {
            return conn.sendMessage(m.chat, { text: '🚩 Reply view once media to use this command.' }, { quoted: m });
        }

        let media = await m.quoted.download();
        let type = m.quoted.mtype.includes('video') ? 'video' : 'image';

        await conn.sendMessage(m.chat, {
            [type]: media,
            caption: m.quoted.caption || ''
        }, { quoted: m });

    } catch (e) {
        console.error(e);
        conn.sendMessage(m.chat, { text: JSON.stringify(e, null, 2) }, { quoted: m });
    }
};
db.data.users[m.sender].exp += await randomNomor(60)
break;
case "nulis": {
  if (!args[0]) return m.reply('Masukkan teks');
  await conn.sendMessage(m.chat, {
    image: { url: 'https://abella.icu/nulis?text=' + encodeURIComponent(args.join(' ')) }
  }, { quoted: m });
};
db.data.users[m.sender].exp += await randomNomor(60)
break;
case 'ytstalk': {
  if (!text) return m.reply('Masukkan username YouTube!\nContoh: .ytstalk KyyXdz')
  let res = await fetch(`https://www.velyn.biz.id/api/stalk/youtubestalk?username=${text}`)
  let json = await res.json()
  if (!json.status) return m.reply('Data tidak ditemukan!')

  let msg = `*YT Stalk: ${text}*\n\n`
  for (let i = 0; i < 5; i++) {
    let vid = json.data.videoDataList[i]
    msg += `*${i + 1}. ${vid.title}*\n`
    msg += `▶️ https://youtube.com${vid.navigationUrl}\n`
    msg += `⏱️ ${vid.duration} | 👁️ ${vid.viewCount} | 🕒 ${vid.publishedTime}\n\n`
  }
  conn.sendMessage(m.chat, { image: { url: json.data.videoDataList[0].thumbnail }, caption: msg }, { quoted: m })
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'telestalk': {
  if (!text) return m.reply('Masukkan username Telegram!\nContoh: .tgstalk @AlwaysKyyXdz')
  let res = await fetch(`https://www.velyn.biz.id/api/stalk/telegramstalk?username=${encodeURIComponent(text)}`)
  let json = await res.json()
  if (!json.status) return m.reply('Username tidak ditemukan!')

  let { url, title, description, image_url } = json.data
  let caption = `*Telegram Stalk*\n\n📛 *Title:* ${title}\n📝 *Description:* ${description}\n🔗 *Link:* ${url}`

  conn.sendMessage(m.chat, {
    image: { url: image_url },
    caption
  }, { quoted: m })
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'stalktiktok': {
  if (!m.text) return reply(`Contoh penggunaan: *${prefix + command} kyybokep*`);

  const username = m.text.split(" ")[1]; // Menangkap username dari pesan

  if (!username) return reply(`Harap masukkan username TikTok yang valid.`);
  reply(mess.wait);

  try {
    // API untuk mengambil data dari akun TikTok
    let response = await fetch(`${global.nekorin}/stalk/tiktok-v2?username=${username}`);
    let result = await response.json();

    if (result.status && result.result) {
      let data = result.result.userInfo;
      
      // Mengambil informasi terkait akun
      let message = `🎥 *Akun TikTok:* ${data.name}\n`;
      message += `🔗 *Link Profile:* https://www.tiktok.com/@${data.username}\n`;
      message += `👥 *Followers:* ${data.count.followers}\n`;
      message += `👥 *Following:* ${data.count.following}\n`;
      message += `❤️ *Hearts:* ${data.count.heart}\n`;
      message += `🎬 *Videos:* ${data.count.video}\n`;
      message += `👥 *Friends:* ${data.count.friend}\n`;
      message += `📝 *Bio:* ${data.bio}\n`;
      message += `✅ *Verified Account:* ${data.verified ? 'Yes' : 'No'}`;

      await conn.sendMessage(m.chat, {
        text: message,
        caption: '📝 Info TikTok:'
      }, { quoted: m });

      // Mengirimkan foto profil
      await conn.sendMessage(m.chat, {
        image: { url: data.avatar },
        caption: '📸 Foto Profil TikTok'
      }, { quoted: m });
    } else {
      reply('❌ Tidak dapat menemukan akun dengan username tersebut.');
    }
  } catch (e) {
    console.error(e);
    reply('❌ Terjadi kesalahan saat mengambil data TikTok.');
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case 'faketiktok': {
  if (!m.quoted) return reply(`Kirim atau Reply Foto dengan caption *${prefix + command} nama|username*`);
  let mime = (m.quoted.msg || m.quoted).mimetype || '';
  if (!/image/.test(mime)) return reply(`Kirim atau Reply Foto dengan caption *${prefix + command} nama|username*`);
  if (!q.includes('|')) return reply(`Format salah!\nContoh: *.faketiktok Kyy|kyyhost*`);

  let [name, username] = q.split('|').map(v => v.trim());
  if (!name || !username) return reply(`Nama atau username tidak valid.`);

  const tempFile = path.join(__dirname, `temp_${Date.now()}.jpg`);
  reply('⏳ Sedang mengunggah foto...');

  try {
    let media = await m.quoted.download();
    fs.writeFileSync(tempFile, media);

    const uploadUguu = async (filePath) => {
      return new Promise((resolve, reject) => {
        exec(`curl -s -F files[]=@${filePath} https://uguu.se/upload.php`, (err, stdout) => {
          if (err) return reject('Gagal mengunggah ke Uguu');
          try {
            let json = JSON.parse(stdout);
            resolve(json.files[0].url);
          } catch {
            reject('Gagal mengunggah ke Uguu');
          }
        });
      });
    };

    let uploadedUrl = await uploadUguu(tempFile);
    let api = `https://flowfalcon.dpdns.org/imagecreator/faketiktok?name=${encodeURIComponent(name)}&username=${encodeURIComponent(username)}&pp=${encodeURIComponent(uploadedUrl)}`;

    await conn.sendMessage(m.chat, {
      image: { url: api },
      caption: `✅ Akun TikTok palsu berhasil dibuat!\n\n📛 Nama: ${name}\n👤 Username: @${username}`
    }, { quoted: m });

    fs.unlinkSync(tempFile);
  } catch (e) {
    console.error(e);
    reply('❌ Terjadi kesalahan saat membuat akun TikTok palsu.');
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case 'fakecall': {
 try {
 const [name] = args.join(" ").split(",").map(v => v.trim());
 if (!name) return m.reply('Masukkan nama untuk fake call.\nContoh: .fakecall Marsha Lenathea');

 const mediaMessage = m.quoted || m;
 const mime = (mediaMessage.msg || mediaMessage).mimetype || '';
 let avatarURL;

 if (mime) {
 const form = new FormData();
 const media = await conn.downloadAndSaveMediaMessage(mediaMessage);
 form.append("file", fs.createReadStream(media));

 const res = await axios.post("https://cloudgood.web.id/upload.php", form, {
 headers: {
 ...form.getHeaders()
 },
 maxContentLength: Infinity,
 maxBodyLength: Infinity
 });

 avatarURL = res.data?.url || 'https://files.catbox.moe/2ryaif.jpg'; 
 } else {
 avatarURL = 'https://files.catbox.moe/2ryaif.jpg';
 }

 const apiURL = `${global.velyn}/api/maker/calling?name=${encodeURIComponent(name)}&duration=10:08&avatar=${encodeURIComponent(avatarURL)}&apikey=velyn`;

 await conn.sendMessage(m.chat, { image: { url: apiURL }, caption: `📞 Fake Call dari ${name}` }, { quoted: m });
 } catch (err) {
 console.error(err);
 m.reply(`❌ Terjadi kesalahan saat membuat Fake Call.\nError: ${err.message}`);
 }
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case 'storyig': {
  if (!text) return m.reply('Format: .storyig username|caption|photo_url\nContoh: .storyig Velyn Alexandria|andai kamu kembali bersama ku|https://files.catbox.moe/jgudlt.jpg')

  let [username, caption, photo] = text.split('|')
  if (!username || !caption || !photo) return m.reply('Pastikan formatnya benar:\n.storyig username|caption|photo_url')

  const apikey = 'velyn'  // APIKEY sesuai dokumentasi

  try {
    const url = `${global.velyn}/api/maker/igstory?username=${encodeURIComponent(username)}&caption=${encodeURIComponent(caption)}&photo=${encodeURIComponent(photo)}&APIKEY=${apikey}`

    // Kirim gambar dari URL API langsung
    conn.sendMessage(m.chat, { image: { url }, caption: `Instagram Story untuk ${username}` }, { quoted: m })
  } catch (e) {
    m.reply('Gagal membuat story IG, coba lagi nanti.')
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
  break
case 'npmstalk': {
  if (!text) return reply('❌ Masukkan nama package NPM.\nContoh: .npmstalk canvas');
  try {
    let res = await fetch(`https://api.siputzx.my.id/api/stalk/npm?packageName=${encodeURIComponent(text)}`);
    let json = await res.json();

    if (!json.status) return reply('❌ Package tidak ditemukan.');

    const data = json.data;
    const hasil = `
📦 *NPM PACKAGE INFO*

🔹 *Nama:* ${data.name}
📌 *Versi Terbaru:* ${data.versionLatest}
🕘 *Versi Awal:* ${data.versionPublish}
📈 *Jumlah Update:* ${data.versionUpdate} versi

📦 *Dependencies:*
├─ Versi Awal: ${data.publishDependencies}
└─ Versi Terbaru: ${data.latestDependencies}

📅 *Tanggal Rilis Awal:*
${new Date(data.publishTime).toLocaleString()}

📅 *Tanggal Update Terbaru:*
${new Date(data.latestPublishTime).toLocaleString()}
    `.trim();

    reply(hasil);
  } catch (e) {
    console.error(e);
    reply('❌ Gagal mengambil data. Pastikan nama package benar.');
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case 'igstalk': {
  if (!text) return m.reply('Contoh: .igstalk kyyhost')

  const username = text.replace(/^@/, '') // hapus '@' jika ada
  let res
  try {
    res = await fetch(`${global.nekorin}/stalk/instagram?username=${username}`)
  } catch (e) {
    return m.reply('Gagal menghubungi server.')
  }

  const json = await res.json()
  if (!json.status || !json.result) return m.reply('Akun tidak ditemukan.')

  const ig = json.result
  const verified = ig.isVerified ? '✅ Terverifikasi' : '❌ Tidak Terverifikasi'

  const caption = `📱 *Instagram Stalk*\n\n👤 *Username:* ${ig.username}\n📛 *Nama:* ${ig.fullName}\n📄 *Bio:* ${ig.bio || 'Tidak ada'}\n📷 *Post:* ${ig.uploads}\n👥 *Followers:* ${ig.followers}\n📈 *Engagement:* ${ig.engagement}\n☑️ *Verifikasi:* ${verified}`

  conn.sendMessage(m.chat, {
    image: { url: ig.profileImage },
    caption,
    buttons: [
      {
        buttonId: `.igstalk ${username}`,
        buttonText: { displayText: '🔄 Cek Ulang' },
        type: 1
      }
    ],
    footer: 'Instagram Stalker by nekorinn',
  }, { quoted: m })
}
   db.data.users[m.sender].exp += await randomNomor(60)
  break;

case 'stalkchannel':
case 'wachannel':
case 'stalkch': {
  if (!text) return m.reply('Masukkan link channel WhatsApp!\nContoh: .stalkchannel https://whatsapp.com/channel/0029Vb7gTNO5a2450z5MnD0k');

  const isValid = /https?:\/\/(www\.)?whatsapp\.com\/channel\/[A-Za-z0-9]+/.test(text);
  if (!isValid) return m.reply('Link tidak valid!');

  try {
    const apiUrl = `${global.fastres}/stalk/wachannel?url=${encodeURIComponent(text)}`;
    const { data } = await axios.get(apiUrl);

    if (data.status === 200 && data.result) {
      const res = data.result;
      let caption = `*📢 WhatsApp Channel Info*\n\n`;
      caption += `📛 *Name:* ${res.name || "-"}\n`;
      caption += `📝 *Description:* ${res.description || "-"}\n`;
      caption += `👥 *Followers:* ${res.followers || "0"}\n`;
      caption += `🔗 *Link:* ${res.channelLink || text}`;

      await conn.sendMessage(m.chat, {
        image: { url: res.image },
        caption
      }, { quoted: m });
    } else {
      m.reply('Gagal mengambil data channel. Coba lagi nanti.');
    }
  } catch (e) {
    console.error(e);
    m.reply('Terjadi kesalahan saat mengambil data.');
  }
  }
  db.data.users[m.sender].exp += await randomNomor(60)
  break;


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 BOKEP FEATURE ───────────────────────────────────────────────────────────────乂 \\
case 'bokep1':
if (!isCreator && !isPremium) return reply(mees.premium)
let ntahlah1 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2022/08/Brigitte-fucked-at-the-gym.mp4`)
conn.sendMessage(from, { video: ntahlah1, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep2':
if (!isCreator && !isPremium) return reply(mees.premium)
let ntahlah2 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Black-Widow-handcuffed-bondage-play.mp4`)
conn.sendMessage(from, { video: ntahlah2, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep3':
if (!isCreator && !isPremium) return reply(mees.premium)
let ntahlah3 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Black-Widow-handcuffed-bondage-play.mp4`)
conn.sendMessage(from, { video: ntahlah3, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep4':
if (!isCreator && !isPremium) return reply(mees.premium)
let ntahlah4 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/2B-outdoor-reverse-cowgirl-Sound-update.mp4`)
conn.sendMessage(from, { video: ntahlah4, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep5':
if (!isCreator && !isPremium) return reply(mees.premium)
let ntahlah5 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Nyotengu-riding-with-help.mp4`)
conn.sendMessage(from, { video: ntahlah5, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep6':
if (!isCreator && !isPremium) return reply(mees.premium)
let ntahlah6 = await getBuffer(`https://media.discordapp.net/attachments/632434742427516948/1055565623914147910/GrandLiveDinosaur.mp4`)
conn.sendMessage(from, { video: ntahlah6, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep7':
if (!isCreator && !isPremium) return reply(mees.premium)
let ntahlah7 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Siona-taking-it-deep.mp4`)
conn.sendMessage(from, { video: ntahlah7, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep8':
if (!isCreator && !isPremium) return reply(mees.premium)
let ntahlah8 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Callie-working-in-Hooters.mp4`)
conn.sendMessage(from, { video: ntahlah8, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep9':
if (!isCreator && !isPremium) return reply(mees.premium)
let ntahlah9 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Harley-Quinn-in-GCPD-cell.mp4`)
conn.sendMessage(from, { video: ntahlah9, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep10':
if (!isCreator && !isPremium) return reply(mees.premium)
let ntahlah10 = await getBuffer(`https://www.pornhub.com/view_video.php?viewkey=ph62dacb17ee77a`)
conn.sendMessage(from, { video: ntahlah10, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep11':
if (!isCreator && !isPremium) return reply(mees.premium)
let ntahlah11 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Harley-Quinn-in-GCPD-cell-With-makeup.mp4`)
conn.sendMessage(from, { video: ntahlah11, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep12':
if (!isCreator && !isPremium) return reply(mees.premium)
let ntahlah12 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Harley-Quinn-in-GCPD-cell-With-makeup.mp4`)
conn.sendMessage(from, { video: ntahlah12, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep13':
if (!isCreator && !isPremium) return reply(mees.premium)
let ntahlah13 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Harley-Quinn-in-GCPD-cell.mp4`)
conn.sendMessage(from, { video: ntahlah13, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep14':
if (!isCreator && !isPremium) return reply(mees.premium)
//if (!isGroup) return onlyGroup()
let ntahlah14 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Callie-working-in-Hooters.mp4`)
conn.sendMessage(from, { video: ntahlah14, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep15':
if (!isCreator && !isPremium) return reply(mees.premium)
//if (!isGroup) return onlyGroup()
let ntahlah15 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Siona-taking-it-deep.mp4`)
conn.sendMessage(from, { video: ntahlah15, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep16':
if (!isCreator && !isPremium) return reply(mees.premium)
//if (!isGroup) return onlyGroup()
let ntahlah16 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Ballerina-bot-facial.mp4`)
conn.sendMessage(from, { video: ntahlah16, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep17':
if (!isCreator && !isPremium) return reply(mees.premium)
//if (!isGroup) return onlyGroup()
let ntahlah17 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/Nyotengu-riding-with-help.mp4`)
conn.sendMessage(from, { video: ntahlah17, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break
case 'bokep18':
if (!isCreator && !isPremium) return reply(mees.premium)
//if (!isGroup) return onlyGroup()
let ntahlah18 = await getBuffer(`https://sfmcompile.club/wp-content/uploads/2023/02/2B-outdoor-reverse-cowgirl-Sound-update.mp4`)
conn.sendMessage(from, { video: ntahlah18, mimetype: 'video/mp4', caption : `Sange Gak Sih 😋`})
.catch(console.error)
break


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 QUOTES FEATURE ───────────────────────────────────────────────────────────────乂 \\
case 'quotesanime':
case 'quotesanim': {

 let res = await (await fetch('https://katanime.vercel.app/api/getrandom?limit=1'))
 if (!res.ok) return await res.text()
 let json = await res.json()
 if(!json.result[0]) return json
 let { indo, character, anime } = json.result[0]
 reply(`${indo}\n\n📮By: ${character} \nAnime:\n${anime}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break

case 'quotesbacot': {

function pickRandom(list) {
 return list[Math.floor(list.length * Math.random())]
}

const bacot = [
'Kamu suka kopi nggak? Aku sih suka. Tau kenapa alesannya? Kopi itu ibarat kamu, pahit sih tapi bikin candu jadi pingin terus.',
'Gajian itu kayak mantan ya? Bisanya cuman lewat sebentar saja.',
'Kata pak haji, cowok yang nggak mau pergi Sholat Jumat disuruh pakai rok aja.',
'Kamu tahu mantan nggak? Mantan itu ibarat gajian, biasa numpang lewat dong di kehidupan kita.',
'Aku suka kamu, kamu suka dia, tapi dia sayangnya nggak ke kamu. Wkwkw lucu ya? Cinta serumit ini.',
'Google itu hebat ya? Tapi sayang sehebat-hebatnya Google nggak bisa menemukan jodoh kita.',
'Terlalu sering memegang pensil alis dapat membuat mata menjadi buta, jika dicolok-colokkan ke mata.',
'Saya bekerja keras karena sadar kalau uang nggak punya kaki buat jalan sendiri ke kantong saya.',
'Jika kamu tak mampu meyakinkan dan memukau orang dengan kepintaranmu, bingungkan dia dengan kebodohanmu.',
'Selelah-lelahnya bekerja, lebih lelah lagi kalau nganggur.',
'Kita hidup di masa kalau salah kena marah, pas bener dibilang tumben.',
'Nggak ada bahu pacar? Tenang aja, masih ada bahu jalan buat nyandar.',
'Mencintai dirimu itu wajar, yang gak wajar mencintai bapakmu.',
'Katanya enggak bisa bohong. Iyalah, mata kan cuma bisa melihat.',
'Madu di tangan kananmu, racun di tangan kirimu, jodoh tetap di tangan tuhan.',
'Selingkuh terjadi bukan karena ada niat, selingkuh terjadi karna pacar kamu masih laku.',
'Netizen kalau senam jempol di ponsel nggak pakai pendinginan, pantes komennya bikin panas terus.',
'Jodoh memang enggak kemana, tapi saingannya ada dimana-mana.',
'Perasaan aku salah terus di matamu. Kalu gitu, besok aku pindah ke hidungmu.',
'Jomblo tidak perlu malu, jomblo bukan berarti tidak laku, tapi memang tidak ada yang mau.',
'Jika doamu belum terkabul maka bersabar, ingatlah bahwa yang berdoa bukan cuma kamu!',
'Masih berharap dan terus berharap lama-lama aku jadi juara harapan.',
'Manusia boleh berencana, tapi akhirnya saldo juga yang menentukan.',
'Statusnya rohani, kelakuannya rohalus.',
'Kegagalan bukan suatu keberhasilan.',
'Tadi mau makan bakso, cuma kok panas banget, keliatannya baksonya lagi demam.',
'Aku juga pernah kaya, waktu gajian.',
'Aku diputusin sama pacar karena kita beda keyakinan. Aku yakin kalau aku ganteng, tapi dia enggak.',
'Masa depanmu tergantung pada mimpimu, maka perbanyaklah tidur.',
'Seberat apapun pekerjaanmu, akan semakin ringan jika tidak dibawa.',
'Jangan terlalu berharap! nanti jatuhnya sakit!',
'Ingat! Anda itu jomblo',
'Gak tau mau ngetik apa',
]
 let bacotan = pickRandom(bacot)
 reply(bacotan)
}
db.data.users[m.sender].exp += await randomNomor(60)
break
//=========================================\\======

case 'quotesbucin': {

const bucin = [
 "Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.",
 "Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.",
 "Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.",
 "Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.",
 "Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.",
 "Pacar orang adalah jodoh kita yang tertunda.",
 "Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.",
 "Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.",
 "Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.",
 "Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.",
 "Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.",
 "Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.",
 "Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.",
 "Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.",
 "Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.",
 "Aku ingin menjadi satu-satunya, bukan salah satunya.",
 "Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.",
 "Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.",
 "Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.",
 "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.",
 "Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.",
 "Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.",
 "Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.",
 "Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.",
 "Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.",
 "Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.",
 "Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.",
 "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
 "Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.",
 "Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.",
 "Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.",
 "Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.",
 "Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.",
 "Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.",
 "Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.",
 "Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
 "Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.",
 "Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.",
 "PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.",
 "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
 "Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.",
 "Makan apapun aku suka asal sama kamu, termasuk makan ati.",
 "Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.",
 "Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.",
 "Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya...",
 "Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.",
 "Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu...",
 "Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.",
 "Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.",
 "Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.",
 "Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.",
 "Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.",
 "Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal..",
 "Denganmu, jatuh cinta adalah patah hati paling sengaja.",
 "Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.",
 "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
 "Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.",
 "Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain...",
 "Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.",
 "Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku...",
 "Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.",
 "Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.",
 "Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.",
 "Kamu adalah patah hati terbaik yang gak pernah aku sesali.",
 "Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.",
 "Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.",
 "Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.",
 "Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.",
 "Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.",
 "Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan...",
 "Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?\n\nKalau aku tidak kecewa, tapi aku menunggu ucapannya.",
 "Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.",
 "Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.",
 "Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.",
 "Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.",
 "Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.",
 "Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.",
 "Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.",
 "Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.",
 "Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan...",
 "Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?",
 "Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.",
 "Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo",
 "Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.",
 "Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.",
 "Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.",
 "Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.",
 "Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.",
 "keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.",
 "Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.",
 "Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.",
 "Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.",
 "Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'.",
 "Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.",
 "Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.",
 "Saben dino kegowo ngimpi tapi ora biso nduweni.",
 "Ora ketemu koe 30 dino rasane koyo sewulan.",
 "Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.",
 "Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.",
 "Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.",
 "Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.",
 "Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.",
 "Kanyaah akang moal luntur najan make Bayclean.",
 "Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.",
 "Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.",
 "Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).",
 "Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.",
 "Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.",
 "Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.",
 "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.",
 "Cukup jaringan aja yang hilang, kamu jangan.",
 "Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.",
 "Musuhku adalah mereka yang ingin memilikimu juga.",
 "Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
 "Jam tidurku hancur dirusak rindu.",
 "Cukup China aja yang jauh, cinta kita jangan.",
 "Yang penting itu kebahagiaan kamu, aku sih gak penting..",
 "Cuma satu keinginanku, dicintai olehmu..",
 "Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.",
 "Cukup antartika aja yang jauh. Antarkita jangan."
]
const conntruth = bucin[Math.floor(Math.random() * bucin.length)]
	reply(`${conntruth}`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break

case 'quotesmotivasi': {

function pickRandom(list) {
 return list[Math.floor(list.length * Math.random())]
}

const motivasi = [
"ᴊᴀɴɢᴀɴ ʙɪᴄᴀʀᴀ, ʙᴇʀᴛɪɴᴅᴀᴋ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴋᴀᴛᴀᴋᴀɴ, ᴛᴜɴᴊᴜᴋᴋᴀɴ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴊᴀɴᴊɪ, ʙᴜᴋᴛɪᴋᴀɴ ꜱᴀᴊᴀ.",
"ᴊᴀɴɢᴀɴ ᴘᴇʀɴᴀʜ ʙᴇʀʜᴇɴᴛɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ʏᴀɴɢ ᴛᴇʀʙᴀɪᴋ ʜᴀɴʏᴀ ᴋᴀʀᴇɴᴀ ꜱᴇꜱᴇᴏʀᴀɴɢ ᴛɪᴅᴀᴋ ᴍᴇᴍʙᴇʀɪ ᴀɴᴅᴀ ᴘᴇɴɢʜᴀʀɢᴀᴀɴ.",
"ʙᴇᴋᴇʀᴊᴀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ᴛɪᴅᴜʀ. ʙᴇʟᴀᴊᴀʀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ʙᴇʀᴘᴇꜱᴛᴀ. ʜᴇᴍᴀᴛ ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴɢʜᴀʙɪꜱᴋᴀɴ. ʜɪᴅᴜᴘʟᴀʜ ꜱᴇᴘᴇʀᴛɪ ᴍɪᴍᴘɪ ᴍᴇʀᴇᴋᴀ.",
"ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴜꜱᴀᴛᴋᴀɴ ᴘɪᴋɪʀᴀɴ ꜱᴀᴅᴀʀ ᴋɪᴛᴀ ᴘᴀᴅᴀ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ɪɴɢɪɴᴋᴀɴ, ʙᴜᴋᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ᴛᴀᴋᴜᴛɪ.",
"ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ɢᴀɢᴀʟ. ᴋᴇᴛᴀᴋᴜᴛᴀɴ ʙᴇʀᴀᴅᴀ ᴅɪ ᴛᴇᴍᴘᴀᴛ ʏᴀɴɢ ꜱᴀᴍᴀ ᴛᴀʜᴜɴ ᴅᴇᴘᴀɴ ꜱᴇᴘᴇʀᴛɪ ᴀɴᴅᴀ ꜱᴀᴀᴛ ɪɴɪ.",
"ᴊɪᴋᴀ ᴋɪᴛᴀ ᴛᴇʀᴜꜱ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ʟᴀᴋᴜᴋᴀɴ, ᴋɪᴛᴀ ᴀᴋᴀɴ ᴛᴇʀᴜꜱ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ᴅᴀᴘᴀᴛᴋᴀɴ.",
"ᴊɪᴋᴀ ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴅᴀᴘᴀᴛ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱᴛʀᴇꜱ, ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴍᴇɴɢᴇʟᴏʟᴀ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ.",
"ʙᴇʀꜱɪᴋᴀᴘ ᴋᴇʀᴀꜱ ᴋᴇᴘᴀʟᴀ ᴛᴇɴᴛᴀɴɢ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴅᴀɴ ꜰʟᴇᴋꜱɪʙᴇʟ ᴛᴇɴᴛᴀɴɢ ᴍᴇᴛᴏᴅᴇ ᴀɴᴅᴀ.",
"ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ᴍᴇɴɢᴀʟᴀʜᴋᴀɴ ʙᴀᴋᴀᴛ ᴋᴇᴛɪᴋᴀ ʙᴀᴋᴀᴛ ᴛɪᴅᴀᴋ ʙᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ.",
"ɪɴɢᴀᴛʟᴀʜ ʙᴀʜᴡᴀ ᴘᴇʟᴀᴊᴀʀᴀɴ ᴛᴇʀʙᴇꜱᴀʀ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ʙɪᴀꜱᴀɴʏᴀ ᴅɪᴘᴇʟᴀᴊᴀʀɪ ᴅᴀʀɪ ꜱᴀᴀᴛ-ꜱᴀᴀᴛ ᴛᴇʀʙᴜʀᴜᴋ ᴅᴀɴ ᴅᴀʀɪ ᴋᴇꜱᴀʟᴀʜᴀɴ ᴛᴇʀʙᴜʀᴜᴋ.",
"ʜɪᴅᴜᴘ ʙᴜᴋᴀɴ ᴛᴇɴᴛᴀɴɢ ᴍᴇɴᴜɴɢɢᴜ ʙᴀᴅᴀɪ ʙᴇʀʟᴀʟᴜ, ᴛᴇᴛᴀᴘɪ ʙᴇʟᴀᴊᴀʀ ᴍᴇɴᴀʀɪ ᴅɪ ᴛᴇɴɢᴀʜ ʜᴜᴊᴀɴ.",
"ᴊɪᴋᴀ ʀᴇɴᴄᴀɴᴀɴʏᴀ ᴛɪᴅᴀᴋ ʙᴇʀʜᴀꜱɪʟ, ᴜʙᴀʜ ʀᴇɴᴄᴀɴᴀɴʏᴀ ʙᴜᴋᴀɴ ᴛᴜᴊᴜᴀɴɴʏᴀ.",
"ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴀᴋᴀɴ ʙᴇʀᴀᴋʜɪʀ; ᴛᴀᴋᴜᴛʟᴀʜ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴛᴀᴋ ᴘᴇʀɴᴀʜ ᴅɪᴍᴜʟᴀɪ.",
"ᴏʀᴀɴɢ ʏᴀɴɢ ʙᴇɴᴀʀ-ʙᴇɴᴀʀ ʜᴇʙᴀᴛ ᴀᴅᴀʟᴀʜ ᴏʀᴀɴɢ ʏᴀɴɢ ᴍᴇᴍʙᴜᴀᴛ ꜱᴇᴛɪᴀᴘ ᴏʀᴀɴɢ ᴍᴇʀᴀꜱᴀ ʜᴇʙᴀᴛ.",
"ᴘᴇɴɢᴀʟᴀᴍᴀɴ ᴀᴅᴀʟᴀʜ ɢᴜʀᴜ ʏᴀɴɢ ʙᴇʀᴀᴛ ᴋᴀʀᴇɴᴀ ᴅɪᴀ ᴍᴇᴍʙᴇʀɪᴋᴀɴ ᴛᴇꜱ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ, ᴋᴇᴍᴜᴅɪᴀɴ ᴘᴇʟᴀᴊᴀʀᴀɴɴʏᴀ.",
"ᴍᴇɴɢᴇᴛᴀʜᴜɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴀɴʏᴀᴋ ʏᴀɴɢ ᴘᴇʀʟᴜ ᴅɪᴋᴇᴛᴀʜᴜɪ ᴀᴅᴀʟᴀʜ ᴀᴡᴀʟ ᴅᴀʀɪ ʙᴇʟᴀᴊᴀʀ ᴜɴᴛᴜᴋ ʜɪᴅᴜᴘ.",
"ꜱᴜᴋꜱᴇꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴋʜɪʀ, ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ꜰᴀᴛᴀʟ. ʏᴀɴɢ ᴛᴇʀᴘᴇɴᴛɪɴɢ ᴀᴅᴀʟᴀʜ ᴋᴇʙᴇʀᴀɴɪᴀɴ ᴜɴᴛᴜᴋ ᴍᴇʟᴀɴᴊᴜᴛᴋᴀɴ.",
"ʟᴇʙɪʜ ʙᴀɪᴋ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ᴏʀɪꜱɪɴᴀʟɪᴛᴀꜱ ᴅᴀʀɪᴘᴀᴅᴀ ʙᴇʀʜᴀꜱɪʟ ᴍᴇɴɪʀᴜ.",
"ʙᴇʀᴀɴɪ ʙᴇʀᴍɪᴍᴘɪ, ᴛᴀᴘɪ ʏᴀɴɢ ʟᴇʙɪʜ ᴘᴇɴᴛɪɴɢ, ʙᴇʀᴀɴɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴛɪɴᴅᴀᴋᴀɴ ᴅɪ ʙᴀʟɪᴋ ɪᴍᴘɪᴀɴᴍᴜ.",
"ᴛᴇᴛᴀᴘᴋᴀɴ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴛɪɴɢɢɪ-ᴛɪɴɢɢɪ, ᴅᴀɴ ᴊᴀɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ᴍᴇɴᴄᴀᴘᴀɪɴʏᴀ.",
"ᴋᴇᴍʙᴀɴɢᴋᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀʀɪ ᴋᴇɢᴀɢᴀʟᴀɴ. ᴋᴇᴘᴜᴛᴜꜱᴀꜱᴀᴀɴ ᴅᴀɴ ᴋᴇɢᴀɢᴀʟᴀɴ ᴀᴅᴀʟᴀʜ ᴅᴜᴀ ʙᴀᴛᴜ ʟᴏɴᴄᴀᴛᴀɴ ᴘᴀʟɪɴɢ ᴘᴀꜱᴛɪ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ.",
"ᴊᴇɴɪᴜꜱ ᴀᴅᴀʟᴀʜ ꜱᴀᴛᴜ ᴘᴇʀꜱᴇɴ ɪɴꜱᴘɪʀᴀꜱɪ ᴅᴀɴ ꜱᴇᴍʙɪʟᴀɴ ᴘᴜʟᴜʜ ꜱᴇᴍʙɪʟᴀɴ ᴘᴇʀꜱᴇɴ ᴋᴇʀɪɴɢᴀᴛ.",
"ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴛᴇᴍᴘᴀᴛ ᴘᴇʀꜱɪᴀᴘᴀɴ ᴅᴀɴ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ʙᴇʀᴛᴇᴍᴜ.",
"ᴋᴇᴛᴇᴋᴜɴᴀɴ ɢᴀɢᴀʟ 19 ᴋᴀʟɪ ᴅᴀɴ ʙᴇʀʜᴀꜱɪʟ ᴘᴀᴅᴀ ᴋᴇꜱᴇᴍᴘᴀᴛᴀᴍ ʏᴀɴɢ ᴋᴇ-20.",
"ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ ᴅᴀɴ ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ᴋᴇɢᴀɢᴀʟᴀɴ ʜᴀᴍᴘɪʀ ᴘᴇʀꜱɪꜱ ꜱᴀᴍᴀ.",
"ꜱᴜᴋꜱᴇꜱ ʙɪᴀꜱᴀɴʏᴀ ᴅᴀᴛᴀɴɢ ᴋᴇᴘᴀᴅᴀ ᴍᴇʀᴇᴋᴀ ʏᴀɴɢ ᴛᴇʀʟᴀʟᴜ ꜱɪʙᴜᴋ ᴍᴇɴᴄᴀʀɪɴʏᴀ.",
"ᴊᴀɴɢᴀɴ ᴛᴜɴᴅᴀ ᴘᴇᴋᴇʀᴊᴀᴀɴᴍᴜ ꜱᴀᴍᴘᴀɪ ʙᴇꜱᴏᴋ, ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇɴɢᴇʀᴊᴀᴋᴀɴɴʏᴀ ʜᴀʀɪ ɪɴɪ.",
"20 ᴛᴀʜᴜɴ ᴅᴀʀɪ ꜱᴇᴋᴀʀᴀɴɢ, ᴋᴀᴜ ᴍᴜɴɢᴋɪɴ ʟᴇʙɪʜ ᴋᴇᴄᴇᴡᴀ ᴅᴇɴɢᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴛɪᴅᴀᴋ ꜱᴇᴍᴘᴀᴛ ᴋᴀᴜ ʟᴀᴋᴜᴋᴀɴ ᴀʟɪʜ-ᴀʟɪʜ ʏᴀɴɢ ꜱᴜᴅᴀʜ.",
"ᴊᴀɴɢᴀɴ ʜᴀʙɪꜱᴋᴀɴ ᴡᴀᴋᴛᴜᴍᴜ ᴍᴇᴍᴜᴋᴜʟɪ ᴛᴇᴍʙᴏᴋ ᴅᴀɴ ʙᴇʀʜᴀʀᴀᴘ ʙɪꜱᴀ ᴍᴇɴɢᴜʙᴀʜɴʏᴀ ᴍᴇɴᴊᴀᴅɪ ᴘɪɴᴛᴜ.",
"ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ɪᴛᴜ ᴍɪʀɪᴘ ꜱᴇᴘᴇʀᴛɪ ᴍᴀᴛᴀʜᴀʀɪ ᴛᴇʀʙɪᴛ. ᴋᴀʟᴀᴜ ᴋᴀᴜ ᴍᴇɴᴜɴɢɢᴜ ᴛᴇʀʟᴀʟᴜ ʟᴀᴍᴀ, ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇʟᴇᴡᴀᴛᴋᴀɴɴʏᴀ.",
"ʜɪᴅᴜᴘ ɪɴɪ ᴛᴇʀᴅɪʀɪ ᴅᴀʀɪ 10 ᴘᴇʀꜱᴇɴ ᴀᴘᴀ ʏᴀɴɢ ᴛᴇʀᴊᴀᴅɪ ᴘᴀᴅᴀᴍᴜ ᴅᴀɴ 90 ᴘᴇʀꜱᴇɴ ʙᴀɢᴀɪᴍᴀɴᴀ ᴄᴀʀᴀᴍᴜ ᴍᴇɴʏɪᴋᴀᴘɪɴʏᴀ.",
"ᴀᴅᴀ ᴛɪɢᴀ ᴄᴀʀᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴄᴀᴘᴀɪ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴛᴇʀᴛɪɴɢɢɪ: ᴄᴀʀᴀ ᴘᴇʀᴛᴀᴍᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴅᴜᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴛɪɢᴀ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴊᴀᴅɪ ʙᴀɪᴋ.",
"ᴀʟᴀꜱᴀɴ ɴᴏᴍᴏʀ ꜱᴀᴛᴜ ᴏʀᴀɴɢ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ᴀᴅᴀʟᴀʜ ᴋᴀʀᴇɴᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴᴅᴇɴɢᴀʀᴋᴀɴ ᴛᴇᴍᴀɴ, ᴋᴇʟᴜᴀʀɢᴀ, ᴅᴀɴ ᴛᴇᴛᴀɴɢɢᴀ ᴍᴇʀᴇᴋᴀ.",
"ᴡᴀᴋᴛᴜ ʟᴇʙɪʜ ʙᴇʀʜᴀʀɢᴀ ᴅᴀʀɪᴘᴀᴅᴀ ᴜᴀɴɢ. ᴋᴀᴍᴜ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴜᴀɴɢ, ᴛᴇᴛᴀᴘɪ ᴋᴀᴍᴜ ᴛɪᴅᴀᴋ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴡᴀᴋᴛᴜ.",
"ᴘᴇɴᴇᴛᴀᴘᴀɴ ᴛᴜᴊᴜᴀɴ ᴀᴅᴀʟᴀʜ ʀᴀʜᴀꜱɪᴀ ᴍᴀꜱᴀ ᴅᴇᴘᴀɴ ʏᴀɴɢ ᴍᴇɴᴀʀɪᴋ.",
"ꜱᴀᴀᴛ ᴋɪᴛᴀ ʙᴇʀᴜꜱᴀʜᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ ᴅᴀʀɪ ᴋɪᴛᴀ, ꜱᴇɢᴀʟᴀ ꜱᴇꜱᴜᴀᴛᴜ ᴅɪ ꜱᴇᴋɪᴛᴀʀ ᴋɪᴛᴀ ᴊᴜɢᴀ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ.",
"ᴘᴇʀᴛᴜᴍʙᴜʜᴀɴ ᴅɪᴍᴜʟᴀɪ ᴋᴇᴛɪᴋᴀ ᴋɪᴛᴀ ᴍᴜʟᴀɪ ᴍᴇɴᴇʀɪᴍᴀ ᴋᴇʟᴇᴍᴀʜᴀɴ ᴋɪᴛᴀ ꜱᴇɴᴅɪʀɪ.",
"ᴊᴀɴɢᴀɴʟᴀʜ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ ᴋᴇᴛɪᴋᴀ ᴀɴᴅᴀ ᴍᴀꜱɪʜ ᴍᴀᴍᴘᴜ ʙᴇʀᴜꜱᴀʜᴀ ʟᴀɢɪ. ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀᴛᴀ ʙᴇʀᴀᴋʜɪʀ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄᴏʙᴀ.",
"ᴋᴇᴍᴀᴜᴀɴ ᴀᴅᴀʟᴀʜ ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ, ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴀᴘᴀ ᴘᴜɴ ʏᴀɴɢ ᴍᴇʀᴇᴋᴀ ʀᴀꜱᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ᴍᴇɴᴇʀᴀᴘᴋᴀɴ ᴋᴇɪɴɢɪɴᴀɴ ᴍᴇʀᴇᴋᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱɪᴋᴀᴘ ᴀᴘᴀᴛɪꜱ, ᴋᴇʀᴀɢᴜᴀɴ ᴀᴛᴀᴜ ᴋᴇᴛᴀᴋᴜᴛᴀɴ.",
"ᴊᴀɴɢᴀɴʟᴀʜ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ ᴋᴇᴛɪᴋᴀ ᴀɴᴅᴀ ᴍᴀꜱɪʜ ᴍᴀᴍᴘᴜ ʙᴇʀᴜꜱᴀʜᴀ ʟᴀɢɪ. ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀᴛᴀ ʙᴇʀᴀᴋʜɪʀ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄᴏʙᴀ.",
"ᴋᴇᴍᴀᴜᴀɴ ᴀᴅᴀʟᴀʜ ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ, ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴀᴘᴀ ᴘᴜɴ ʏᴀɴɢ ᴍᴇʀᴇᴋᴀ ʀᴀꜱᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ᴍᴇɴᴇʀᴀᴘᴋᴀɴ ᴋᴇɪɴɢɪɴᴀɴ ᴍᴇʀᴇᴋᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱɪᴋᴀᴘ ᴀᴘᴀᴛɪꜱ, ᴋᴇʀᴀɢᴜᴀɴ ᴀᴛᴀᴜ ᴋᴇᴛᴀᴋᴜᴛᴀɴ.",
"ʜᴀʟ ᴘᴇʀᴛᴀᴍᴀ ʏᴀɴɢ ᴅɪʟᴀᴋᴜᴋᴀɴ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴀɴᴅᴀɴɢ ᴋᴇɢᴀɢᴀʟᴀɴ ꜱᴇʙᴀɢᴀɪ ꜱɪɴʏᴀʟ ᴘᴏꜱɪᴛɪꜰ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ.",
"ᴄɪʀɪ ᴋʜᴀꜱ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇʀᴇᴋᴀ ꜱᴇʟᴀʟᴜ ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴜɴᴛᴜᴋ ᴍᴇᴍᴘᴇʟᴀᴊᴀʀɪ ʜᴀʟ-ʜᴀʟ ʙᴀʀᴜ.",
"ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ɪɴɢɪɴᴋᴀɴ, ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴍᴇɴɢɪɴɢɪɴᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛᴋᴀɴ.",
"ᴏʀᴀɴɢ ᴘᴇꜱɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴋᴇꜱᴜʟɪᴛᴀɴ ᴅɪ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ. ᴏʀᴀɴɢ ʏᴀɴɢ ᴏᴘᴛɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴘᴇʟᴜᴀɴɢ ᴅᴀʟᴀᴍ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴜʟɪᴛᴀɴ.",
"ᴋᴇʀᴀɢᴜᴀɴ ᴍᴇᴍʙᴜɴᴜʜ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴍɪᴍᴘɪ ᴅᴀʀɪᴘᴀᴅᴀ ᴋᴇɢᴀɢᴀʟᴀɴ.",
"ʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ʜᴀʀᴜꜱ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ ꜱᴀᴍᴘᴀɪ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ɪɴɢɪɴ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ.",
"ᴏᴘᴛɪᴍɪꜱᴛɪꜱ ᴀᴅᴀʟᴀʜ ꜱᴀʟᴀʜ ꜱᴀᴛᴜ ᴋᴜᴀʟɪᴛᴀꜱ ʏᴀɴɢ ʟᴇʙɪʜ ᴛᴇʀᴋᴀɪᴛ ᴅᴇɴɢᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀɴ ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴅᴀʀɪᴘᴀᴅᴀ ʏᴀɴɢ ʟᴀɪɴ.",
"ᴘᴇɴɢʜᴀʀɢᴀᴀɴ ᴘᴀʟɪɴɢ ᴛɪɴɢɢɪ ʙᴀɢɪ ꜱᴇᴏʀᴀɴɢ ᴘᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴘᴀ ʏᴀɴɢ ᴅɪᴀ ᴘᴇʀᴏʟᴇʜ ᴅᴀʀɪ ᴘᴇᴋᴇʀᴊᴀᴀɴ ɪᴛᴜ, ᴛᴀᴘɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴇʀᴋᴇᴍʙᴀɴɢ ɪᴀ ᴅᴇɴɢᴀɴ ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱɴʏᴀ ɪᴛᴜ.",
"ᴄᴀʀᴀ ᴛᴇʀʙᴀɪᴋ ᴜɴᴛᴜᴋ ᴍᴇᴍᴜʟᴀɪ ᴀᴅᴀʟᴀʜ ᴅᴇɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ʙᴇʀʙɪᴄᴀʀᴀ ᴅᴀɴ ᴍᴜʟᴀɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ.",
"ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴜꜱᴜʟ ᴊɪᴋᴀ ᴛᴇᴋᴀᴅ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ ᴄᴜᴋᴜᴘ ᴋᴜᴀᴛ."
]
let motivasii = pickRandom(motivasi)
 reply(`"${motivasii}"`)
}
db.data.users[m.sender].exp += await randomNomor(60)
break

case 'quotesgalau': {

 function pickRandom(list) {
 return list[Math.floor(list.length * Math.random())]
}
const galau = [
 "Gak salah kalo aku lebih berharap sama orang yang lebih pasti tanpa khianati janji-janji",
 "Kalau aku memang tidak sayang sama kamu ngapain aku mikirin kamu. Tapi semuanya kamu yang ngganggap aku gak sayang sama kamu",
 "Jangan iri dan sedih jika kamu tidak memiliki kemampuan seperti yang orang miliki. Yakinlah orang lain juga tidak memiliki kemampuan sepertimu",
 "Hanya kamu yang bisa membuat langkahku terhenti, sambil berkata dalam hati mana bisa aku meninggalkanmu",
 "Tetap tersenyum walaluku masih dibuat menunggu dan rindu olehmu, tapi itu demi kamu",
 "Tak semudah itu melupakanmu",
 "Secuek-cueknya kamu ke aku, aku tetap sayang sama kamu karena kamu telah menerima aku apa adanya",
 "Aku sangat bahagia jika kamu bahagia didekatku, bukan didekatnya",
 "Jadilah diri sendiri, jangan mengikuti orang lain, tetapi tidak sanggup untuk menjalaninya",
 "Cobalah terdiam sejenak untuk memikirkan bagaimana caranya agar kita dapat menyelesaikan masalah ini bersama-sama",
 "Bisakah kita tidak bermusuhan setelah berpisah, aku mau kita seperti dulu sebelum kita jadian yang seru-seruan bareng, bercanda dan yang lainnya",
 "Aku ingin kamu bisa langgeng sama aku dan yang aku harapkan kamu bisa jadi jodohku",
 "Cinta tak bisa dijelaskan dengan kata-kata saja, karena cinta hanya mampu dirasakan oleh hati",
 "Masalah terbesar dalam diri seseorang adalah tak sanggup melawan rasa takutnya",
 "Selamat pagi buat orang yang aku sayang dan orang yang membenciku, semoga hari ini hari yang lebih baik daripada hari kemarin buat aku dan kamu",
 "Jangan menyerah dengan keadaanmu sekarang, optimis karena optimislah yang bikin kita kuat",
 "Kepada pria yang selalu ada di doaku aku mencintaimu dengan tulus apa adanya",
 "Tolong jangan pergi saat aku sudah sangat sayang padamu",
 "Coba kamu yang berada diposisiku, lalu kamu ditinggalin gitu aja sama orang yang lo sayang banget",
 "Aku takut kamu kenapa-napa, aku panik jika kamu sakit, itu karena aku cinta dan sayang padamu",
 "Sakit itu ketika cinta yang aku beri tidak kamu hargai",
 "Kamu tiba-tiba berubah tanpa sebab tapi jika memang ada sebabnya kamu berubah tolong katakan biar saya perbaiki kesalahan itu",
 "Karenamu aku jadi tau cinta yang sesungguhnya",
 "Senyum manismu sangatlah indah, jadi janganlah sampai kamu bersedih",
 "Berawal dari kenalan, bercanda bareng, ejek-ejekan kemudian berubah menjadi suka, nyaman dan akhirnya saling sayang dan mencintai",
 "Tersenyumlah pada orang yang telah menyakitimu agar sia tau arti kesabaran yang luar biasa",
 "Aku akan ingat kenangan pahit itu dan aku akan jadikan pelajaran untuk masa depan yang manis",
 "Kalau memang tak sanggup menepati janjimu itu setidaknya kamu ingat dan usahakan jagan membiarkan janjimu itu sampai kau lupa",
 "Hanya bisa diam dan berfikir Kenapa orang yang setia dan baik ditinggalin yang nakal dikejar-kejar giliran ditinggalin bilangnya laki-laki itu semuanya sama",
 "Walaupun hanya sesaat saja kau membahagiakanku tapi rasa bahagia yang dia tidak cepat dilupakan",
 "Aku tak menyangka kamu pergi dan melupakan ku begitu cepat",
 "Jomblo gak usah diam rumah mumpung malam minggu ya keluar jalan lah kan jomblo bebas bisa dekat sama siapapun pacar orang mantan sahabat bahkan sendiri atau bareng setan pun bisa",
 "Kamu adalah teman yang selalu di sampingku dalam keadaan senang maupun susah Terimakasih kamu selalu ada di sampingku",
 "Aku tak tahu sebenarnya di dalam hatimu itu ada aku atau dia",
 "Tak mudah melupakanmu karena aku sangat mencintaimu meskipun engkau telah menyakiti aku berkali-kali",
 "Hidup ini hanya sebentar jadi lepaskan saja mereka yang menyakitimu Sayangi Mereka yang peduli padamu dan perjuangan mereka yang berarti bagimu",
 "Tolong jangan pergi meninggalkanku aku masih sangat mencintai dan menyayangimu",
 "Saya mencintaimu dan menyayangimu jadi tolong jangan engkau pergi dan meninggalkan ku sendiri",
 "Saya sudah cukup tahu bagaimana sifatmu itu kamu hanya dapat memberikan harapan palsu kepadaku",
 "Aku berusaha mendapatkan cinta darimu tetapi Kamunya nggak peka",
 "Aku bangkit dari jatuh ku setelah kau jatuhkan aku dan aku akan memulainya lagi dari awal Tanpamu",
 "Mungkin sekarang jodohku masih jauh dan belum bisa aku dapat tapi aku yakin jodoh itu Takkan kemana-mana dan akan ku dapatkan",
 "Datang aja dulu baru menghina orang lain kalau memang dirimu dan lebih baik dari yang kau hina",
 "Membelakanginya mungkin lebih baik daripada melihatnya selingkuh didepan mata sendiri",
 "Bisakah hatimu seperti angsa yang hanya setia pada satu orang saja",
 "Aku berdiri disini sendiri menunggu kehadiran dirimu",
 "Aku hanya tersenyum padamu setelah kau menyakitiku agar kamu tahu arti kesabaran",
 "Maaf aku lupa ternyata aku bukan siapa-siapa",
 "Untuk memegang janjimu itu harus ada buktinya jangan sampai hanya janji palsu",
 "Aku tidak bisa selamanya menunggu dan kini aku menjadi ragu Apakah kamu masih mencintaiku",
 "Jangan buat aku terlalu berharap jika kamu tidak menginginkanku",
 "Lebih baik sendiri daripada berdua tapi tanpa kepastian",
 "Pergi bukan berarti berhenti mencintai tapi kecewa dan lelah karena harus berjuang sendiri",
 "Bukannya aku tidak ingin menjadi pacarmu Aku hanya ingin dipersatukan dengan cara yang benar",
 "Akan ada saatnya kok aku akan benar-benar lupa dan tidak memikirkan mu lagi",
 "Kenapa harus jatuh cinta kepada orang yang tak bisa dimiliki",
 "Jujur aku juga memiliki perasaan terhadapmu dan tidak bisa menolakmu tapi aku juga takut untuk mencintaimu",
 "Maafkan aku sayang tidak bisa menjadi seperti yang kamu mau",
 "Jangan memberi perhatian lebih seperti itu cukup biasa saja tanpa perlu menimbulkan rasa",
 "Aku bukan mencari yang sempurna tapi yang terbaik untukku",
 "Sendiri itu tenang tidak ada pertengkaran kebohongan dan banyak aturan",
 "Cewek strong itu adalah yang sabar dan tetap tersenyum meskipun dalam keadaan terluka",
 "Terima kasih karena kamu aku menjadi lupa tentang masa laluku",
 "Cerita cinta indah tanpa masalah itu hanya di dunia dongeng saja",
 "Kamu tidak akan menemukan apa-apa di masa lalu Yang ada hanyalah penyesalan dan sakit hati",
 "Mikirin orang yang gak pernah mikirin kita itu emang bikin gila",
 "Dari sekian lama menunggu apa yang sudah didapat",
 "Perasaan Bodo gue adalah bisa jatuh cinta sama orang yang sama meski udah disakiti berkali-kali",
 "Yang sendiri adalah yang bersabar menunggu pasangan sejatinya",
 "Aku terlahir sederhana dan ditinggal sudah biasa",
 "Aku sayang kamu tapi aku masih takut untuk mencintaimu",
 "Bisa berbagi suka dan duka bersamamu itu sudah membuatku bahagia",
 "Aku tidak pernah berpikir kamu akan menjadi yang sementara",
 "Jodoh itu bukan seberapa dekat kamu dengannya tapi seberapa yakin kamu dengan Allah",
 "Jangan paksa aku menjadi cewek seperti seleramu",
 "Hanya yang sabar yang mampu melewati semua kekecewaan",
 "Balikan sama kamu itu sama saja bunuh diri dan melukai perasaan ku sendiri",
 "Tak perlu membalas dengan menyakiti biar Karma yang akan urus semua itu",
 "Aku masih ingat kamu tapi perasaanku sudah tidak sakit seperti dulu",
 "Punya kalimat sendiri & mau ditambahin? chat *.owner*"
]
 let bacotan = pickRandom(galau)
 reply(bacotan)
}
db.data.users[m.sender].exp += await randomNomor(60)
break

case 'quotesgombal': {

 function pickRandom(list) {
 return list[Math.floor(list.length * Math.random())]
}
const gombal = [
 "Hal yang paling aku suka yaitu ngemil, namun tau gak ngemil apa yang paling aku suka? ngemilikin kamu sepenuhnya.",
 "Seandainya sekarang adalah tanggal 28 oktober 1928, aku akan ubah naskah sumpah pemuda menjadi sumpah aku cinta kamu.",
 "Aku gak pernah merasakan ketakutan sedikit pun ketika berada didekat kamu, karena kamulah kekuatanku.",
 "Kamu tahu apa persamaan rasa sayangku ke kamu dengan matahari? Persamaannya adalah sama-sama terbit setiap hari dan hanya akan berakhir sampai kiamat.",
 "Kalau bus kota jauh dekat ongkosnya sama, tapi cinta ini dekat-dekat makin saling cinta.",
 "Kalausaja aku harus mengorbankan semua kebahagiaanku hanya untuk sekedar membuat kamu tertawa. Aku rela.",
 "Anjing menggonggong kafilah berlalu, tiap hari bengong mikirin kamu melulu.",
 "Kalau aku jadi wakil rakyat kayaknya bakalan gagal deh. Gimana aku mau mikiran rakyat kalau yang ada dipikiran aku itu cuman ada kamu.",
 "denganambah satu sama dengan dua. Aku sama kamu sama dengan saling cinta.",
 "Kalo kita beda kartu GSM, itu gak masalah asalkan nantinya nama kita berdua ada di kartu Keluarga yang sama.",
 "Masalah yang selalu sulit untukku membuat mu mencintai ku, tapi lebih sulit memaksa hatiku untuk berhenti memikirkan dirimu.",
 "Aku harap kamu tidak menanyakan hal terindah yang pernah singgah di kehidupanku, karena jawaban nya adalah kamu.",
 "Hal yang paling aku suka yaitu ngemil, namun tau gak ngemil apa yang paling aku suka? ngemilikin kamu sepenuhnya.",
 "seandainyaa sekarang adalah tanggal 28 oktober 1928, aku akan ubah naskah sumpah pemuda menjadi sumpah aku cinta kamu.",
 "kuu gak pernah merasakan ketakutan sedikit pun ketika berada didekat kamu, karena kamulah kekuatanku.",
 "kamuu tahu apa persamaan rasa sayangku ke kamu dengan matahari? Persamaannya adalah sama-sama terbit setiap hari dan hanya akan berakhir sampai kiamat.",
 "Kalau bus kota jauh dekat ongkosnya sama, tapi cinta ini dekat-dekat makin saling cinta.",
 "jikaa saja aku harus mengorbankan semua kebahagiaanku hanya untuk sekedar membuat kamu tertawa. Aku rela.",
 "Anjing menggonggong kafilah berlalu, tiap hari bengong mikirin kamu melulu.",
 "Kalau aku jadi wakil rakyat kayaknya bakalan gagal deh. Gimana aku mau mikiran rakyat kalau yang ada dipikiran aku itu cuman ada kamu.",
 "atuu tambah satu sama dengan dua. Aku sama kamu sama dengan saling cinta,.",
 "aloo kita beda kartu GSM, itu gak masalah asalkan nantinya nama kita berdua ada di kartu Keluarga yang sama.",
 "Masalah yang selalu sulit untukku membuat mu mencintai ku, tapi lebih sulit memaksa hatiku untuk berhenti memikirkan dirimu.",
 "Aku tak pernah berjanji untuk sebuah perasaan, namun aku berusaha berjanji untuk sebuah kesetiaan.",
 "Aku sangat berharap kamu tau, kalau aku tidak pernah menyesali cintaku untuk mu, karena bagiku memiliki kamu sudah cukup bagi ku.",
 "Jangankan memilikimu, mendengar kamu kentut aja aku sudah bahagia.",
 "Aku mohon jangan jalan-jalan terus di pikiranku, duduk yang manis di hatiku saja.",
 "Berulang tahun memang indah, namun bagiku yang lebih indah jika berulang kali bersamamu.",
 "Napas aku kok sesek banget ya?, karena separuh nafasku ada di kamu.",
 "Jika ada seseorang lebih memilih pergi meninggalkan kamu, jangan pernah memohon padanya untuk tetap bertahan. Karena jika dia cinta, dia tak akan mau pergi.",
 "jangann diam aja dong, memang diam itu emas, tapi ketahuilah suara kamu itu seperti berlian.",
 "Kesasar itu serasa rugi banget, namun aku nggak merasa rugi karena cintaku sudah Biasanya orang yang lagi nyasar itu rugi ya, tapi tau gak? Aku gak merasa rugi sebab cintaku sudah nyasar ke hati bidadari.",
 "Ada 3 hal yang paling aku sukai di dunia ini, yaitu Matahari, Bulan dan Kamu. Matahari untuk siang hari, Bulan untuk malam hari dan Kamu untuk selamanya dihatiku.",
 "Sayang, kamu itu seperti garam di lautan, tidak terlihat namun akan selalu ada untuk selamanya.",
 "kuu gak perlu wanita yang sholeha, tapi bagaimana menuntun wanita yang aku cintai menjadi seorang yang sholehah.",
 "Aku tidak minta bintang atau bulan kepadamu. Cukup temani aku selamanya di bawah cahayanya.",
 "Akuana kalo kita berdua jadi komplotan penjahat: Aku mencuri hatimu, dan kamu mencuri hatiku?",
 "Aku gak perlu wanita yang cantik, tapi bagaimana aku menyanjung wanita yang aku cintai seperti wanita yang paling cantik di bumi ini.",
 "Aku pengen bersamamu cuma pada dua waktu: SEKARANG dan SELAMANYA.",
 "Akuu tuh bikin aku ga bisa tidur tau ga?",
 "Soalnya kamu selalu ada dibayang-bayang aku terus.",
 "Jika aku bisa jadi bagian dari dirimu,aku mau jadi air matamu,yang tersimpan di hatimu, lahir dari matamu, hidup di pipimu, dan mati di bibirmu.",
 "Papa kamu pasti kerja di apotik ya? | kenapa bang? | karena cuma kamu obat sakit hatiku.",
 "akuu selalu berusaha tak menangis karenamu, karena setiap butir yang jatuh, hanya makin mengingatkan, betapa aku tak bisa melepaskanmu.",
 "mauu nanya jalan nih. Jalan ke hatimu lewat mana ya?",
 "Andai sebuah bintang akan jatuh setiap kali aku mengingatmu, bulan pasti protes. Soalnya dia bakal sendirian di angkasa.",
 "Andai kamu gawang aku bolanya. Aku rela ditendang orang-orang demi aku dapat bersamamu,",
 "Dingin malam ini menusuk tulang. Kesendirian adalah kesepian. Maukah kau jadi selimut penghangat diriku?",
 "Keindahan Borobudur keajaiban dunia, keindahan kamu keajaiban cinta.",
 "Aku ingin mengaku dosa. Jangan pernah marah ya. Maafkan sebelumnya. Tadi malam aku mimpiin kamu jadi pacarku. Setelah bangun, akankah mimpiku jadi nyata?",
 "Kalau nggak sih aku bilang aku cinta kamu hari ini? Kalau besok gimana? Besok lusa? Besoknya besok lusa? Gimana kalau selamanya?",
 "Orangtuamu pengrajin bantal yah? Karena terasa nyaman jika di dekatmu.",
 "Jika malam adalah jeruji gelap yang menjadi sangkar, saya ingin terjebak selamanya di sana bersamamu.",
 "Sekarang aku gendutan gak sih? Kamu tau gak kenapa ? Soalnya kamu sudah mengembangkan cinta yang banyak di hatiku.",
 "Di atas langit masih ada langit. Di bawah langit masih ada aku yang mencintai kamu.",
 "Tau tidak kenapa malam ini tidak ada bintang? Soalnya bintangnya pindah semua ke matamu?",
 "Aku mencintaimu! Jika kamu benci aku, panah saja diriku. Tapi jangan di hatiku ya, karena di situ kamu berada.",
 "Bapak kamu pasti seorang astronot? | kok tau? | Soalnya aku melihat banyak bintang di matamu.",
 "Bapak kamu dosen ya? | kok tau? | karena nilai kamu A+ di hatiku.",
 "Kamu pasti kuliah di seni pahat ya? | kok tau sih? | Soalnya kamu pintar sekali memahat namamu di hatiku.",
 "Ya Tuhan, jika dia jodohku, menangkanlah tender pembangunan proyek menara cintaku di hatinya.",
 "Kamu mantan pencuri ya? | kok tau? | Abisnya kamu mencuri hatiku sih!",
 "Cowok : Aku suka senyum-senyum sendiri lho. | Cewek : Hah .. Gila Ya | Cowok : Nggak. Aku sedang mikirin kamu.",
 "Setiap malam aku berjalan-jalan di suatu tempat. Kamu tau di mana itu ? | gatau, emang dimana? | Di hatimu.",
 "Kamu pake Telkomesl ya? Karena sinyal-sinyal cintamu sangat kuat sampai ke hatiku.",
 "Kamu tahu gak sih? AKu tuh capek banget. Capek nahan kangen terus sama kamu.",
 "katanyaa kalau sering hujan itu bisa membuat seseorang terhanyut, kalau aku sekarang sedang terhanyut di dalam cintamu.",
 "Aku harap kamu jangan pergi lagi ya? karena, bila aku berpisah dengamu sedetik saja bagaikan 1000 tahun rasanya.",
 "Aku sih gak butuh week end, yang aku butuhkan hanyalah love you till the end.",
 "Emak kamu tukang Gado gado ya?, kok tau sih?, Pantesan saja kamu telah mencampur adukan perasaanku",
 "Walau hari ini cerah, tetapi tanpa kamu disisiku sama saja berselimutkan awan gelap di hati ini",
 "Kamu ngizinin aku kangen sehari berapa kali neng? Abang takut over dosis.",
 "cintaa aku ke kamu tuh bagaikan hutang, awalnya kecil, lama-lama didiemin malah tambah gede.",
 "Berulang tahun adalah hari yang indah. Tapih akin lebih indah kalo udah berulang-ulang kali bersama kamu."
]
let bacotan = pickRandom(gombal)
 reply(bacotan)

}
db.data.users[m.sender].exp += await randomNomor(60)
break
//=========================================\\======

case 'quoteshacker': {

 function pickRandom(list) {
 return list[Math.floor(list.length * Math.random())]
}
const heker = [
 "Dear kamu yang tertulis di halaman defacementku, Kapan jadi pacarku?",
 "Aku rela ko jadi Processor yg kepanasan, asalkan kmu yg jadi heatsink'y yg setiap saat bisa mendinginkan ku.",
 "Gak usah nyari celah xss deh, karena ketika kamu ngeklik hatiku udah muncul pop up namamu.",
 "berharap setelah aku berhasil login di hati kamu ga akan ada tombol logout, dan sessionku ga bakal pernah expired.",
 "Masa aku harus pake teknik symlink bypass buat buka-buka folder hatimu yg openbasedir enabled.",
 "Diriku dan Dirimu itu ibarat PHP dan MySQL yang belum terkoneksi.",
 "Jangan cuma bisa inject hatinya,tapi harus bisa patchnya juga. Biar tidak selingkuh sama hacker lain.",
 "Aku memang programmer PHP,tapi aku nggak akan php-in kamu kok.",
 "Eneeeng. | Apache? | Km wanita yg paling Unix yg pernah aku kenal |",
 "Sayang, capslock kamu nyala ya? | ngga, kenapa emangnya? | soalnya nama kamu ketulis gede bgt di hati aku | zzz! smile",
 "Aku deketin kamu cuma untuk redirect ke hati temenmu.",
 "Domain aja bisa parkir, masa cintaku ga bisa parkir dihatimu?",
 "Aku boleh jadi pacarmu? | 400(Bad Request) | Aku cium boleh? | 401(Authorization Required) | Aku buka bajumu yah | 402(Payment Required) sad",
 "kamu tau ga beda'y kamu sama sintax PHP, kalo sintax PHP itu susah di hafalin kalo kamu itu susah di lupain",
 "Kamu dulu sekolah SMK ambil kejuruan apa? | Teknik Komputer Jaringan | Terus sekarang bisa apa aja? | Menjaring hatimu lewat komputerku | biggrin",
 "Jika cinta itu Array, maka,cintaku padamu tak pernah empty jika di unset().",
 "SQLI ( Structured Query Love Injection )",
 "aku ingin kamu rm -rf kan semua mantan di otak mu,akulah root hati kamu",
 "Senyumu bagaikan cooler yang menyejukan hatiku ketika sedang overclock.",
 "kamu adalah terminalku, dimana aku menghabiskan waktuku untuk mengetikan beribu baris kode cinta untukmu smile",
 "Aku seneng nongkrong di zone-h, karena disanalah aku arsipkan beberapa website yang ada foto kamunya.",
 "hatiku ibarat vps hanya untukmu saja bukan shared hosting yg bisa tumpuk berbagai domain cinta.",
 "Aku bukanlah VNC Server Tanpa Authentication yg bisa kamu pantau kapan saja.",
 "Jangan men-dualboot-kan hatiku kepadamu.",
 "cintaku kan ku Ctrl+A lalu kan ku Ctrl+C dan kan ku Ctrl+V tepat di folder system hatimu.",
 "KDE kalah Cantiknya, GNOME kalah Simplenya, FluxBox kalah Ringannya, pokonya Semua DE itu Kalah Sama Kamu.",
 "Cintamu bagaikan TeamViewer yang selalu mengendalikan hatiku",
 "cinta kita tak akan bisa dipisahkan walau setebal apapun itu firewall...!!"
]

let bacotan = pickRandom(heker)
 reply(bacotan)
}
db.data.users[m.sender].exp += await randomNomor(60)
break

case 'quotesbijak':{

 function pickRandom(list) {
 return list[Math.floor(list.length * Math.random())]
}
const quotes = [
"Keyakinan merupakan suatu pengetahuan di dalam hati, jauh tak terjangkau oleh bukti.",
"Rasa bahagia dan tak bahagia bukan berasal dari apa yang kamu miliki, bukan pula berasal dari siapa diri kamu, atau apa yang kamu kerjakan. Bahagia dan tak bahagia berasal dari pikiran kamu.",
"Sakit dalam perjuangan itu hanya sementara. Bisa jadi kamu rasakan dalam semenit, sejam, sehari, atau setahun. Namun jika menyerah, rasa sakit itu akan terasa selamanya.",
"Hanya seseorang yang takut yang bisa bertindak berani. Tanpa rasa takut itu tidak ada apapun yang bisa disebut berani.",
"Jadilah diri kamu sendiri. Siapa lagi yang bisa melakukannya lebih baik ketimbang diri kamu sendiri?",
"Kesempatan kamu untuk sukses di setiap kondisi selalu dapat diukur oleh seberapa besar kepercayaan kamu pada diri sendiri.",
"Kebanggaan kita yang terbesar adalah bukan tidak pernah gagal, tetapi bangkit kembali setiap kali kita jatuh.",
"Suatu pekerjaan yang paling tak kunjung bisa diselesaikan adalah pekerjaan yang tak kunjung pernah dimulai.",
"Pikiran kamu bagaikan api yang perlu dinyalakan, bukan bejana yang menanti untuk diisi.",
"Kejujuran adalah batu penjuru dari segala kesuksesan. Pengakuan adalah motivasi terkuat. Bahkan kritik dapat membangun rasa percaya diri saat disisipkan di antara pujian.",
"Segala sesuatu memiliki kesudahan, yang sudah berakhir biarlah berlalu dan yakinlah semua akan baik-baik saja.",
"Setiap detik sangatlah berharga karena waktu mengetahui banyak hal, termasuk rahasia hati.",
"Jika kamu tak menemukan buku yang kamu cari di rak, maka tulislah sendiri.",
"Jika hatimu banyak merasakan sakit, maka belajarlah dari rasa sakit itu untuk tidak memberikan rasa sakit pada orang lain.",
"Hidup tak selamanya tentang pacar.",
"Rumah bukan hanya sebuah tempat, tetapi itu adalah perasaan.",
"Pilih mana: Orang yang memimpikan kesuksesan atau orang yang membuatnya menjadi kenyataan?",
"Kamu mungkin tidak bisa menyiram bunga yang sudah layu dan berharap ia akan mekar kembali, tapi kamu bisa menanam bunga yang baru dengan harapan yang lebih baik dari sebelumnya.",
"Bukan bahagia yang menjadikan kita bersyukur, tetapi dengan bersyukurlah yang akan menjadikan hidup kita bahagia.",
"Aku memang diam. Tapi aku tidak buta.",
]
let bacotan = pickRandom(quotes)
 reply(bacotan)
}
db.data.users[m.sender].exp += await randomNomor(60)
break


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 DOWNLOAD MENU ───────────────────────────────────────────────────────────────乂 \\
case 'tt2': case 'tiktok2': {

    if (!args[0]) return m.reply('❌ Harap masukkan URL TikTok!');

    let url = args[0].trim();
    
    try {
        await conn.sendMessage(m.chat, {
            react: { text: "⏱️", key: m.key }
        });

        let axios = require("axios");
        let apiUrl = `https://api.agatz.xyz/api/tiktok?url=${encodeURIComponent(url)}`;
        let { data } = await axios.get(apiUrl);

        if (!data.status) return m.reply('❌ Gagal mengambil video!');

        let result = data.data;
        let caption = `
🎥 *TikTok Video*
📌 *Judul:* ${result.title}
⏱️ *Durasi:* ${result.duration}
📆 *Diunggah:* ${result.taken_at}
🌍 *Region:* ${result.region}

👤 *Pembuat Konten:*
- Nama: ${result.author.fullname} (@${result.author.nickname})
- Avatar: ${result.author.avatar}

🎶 *Musik:*
- Judul: ${result.music_info.title}
- Artis: ${result.music_info.author}
- Link Musik: ${result.music_info.url}

📊 *Statistik:*
👁️ *Views:* ${result.stats.views}
👍 *Likes:* ${result.stats.likes}
💬 *Komentar:* ${result.stats.comment}
📤 *Shares:* ${result.stats.share}
⬇️ *Unduhan:* ${result.stats.download}
        `.trim();

        // Pilih video kualitas terbaik
        let videoUrl = result.data.find(v => v.type === "nowatermark_hd")?.url || 
                       result.data.find(v => v.type === "nowatermark")?.url ||
                       result.data.find(v => v.type === "watermark")?.url;

        if (!videoUrl) return m.reply('❌ Video tidak ditemukan.');

        // Kirim video + external reply untuk cover
        await conn.sendMessage(m.chat, {
            video: { url: videoUrl },
            caption: caption,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: result.title,
                    body: "TikTok Downloader",
                    mediaType: 1,
                    thumbnailUrl: result.cover,
                    sourceUrl: url
                }
            }
        }, { quoted: m });

        // Kirim audio jika ada
        if (result.music_info.url) {
            await conn.sendMessage(m.chat, {
                audio: { url: result.music_info.url },
                mimetype: 'audio/mpeg',
                fileName: `${result.music_info.title}.mp3`
            }, { quoted: m });
        }

        await conn.sendMessage(m.chat, {
            react: { text: "✅", key: m.key }
        });

    } catch (err) {
        console.error("[TikTok Scraper Error]", err);
        m.reply('❌ Terjadi kesalahan saat memproses permintaan.');
    }
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case 'gitclone':{
let regx = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!text) return reply(`input url`)
if (!regx.test(text)) return reply('Linknya salah')
await conn.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
let [, usr, repo] = text.match(regx) || []
let repos = repo.replace(/.git$/, '')
let hasdl = `https://api.github.com/repos/${usr}/${repos}/zipball`
let namafile = (await fetch(hasdl, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
conn.sendMessage(m.chat, { document: { url: hasdl }, mimetype: 'application/zip', fileName: namafile }, { quoted: m })
}
break
case 'aio': {
  if (!text) return m.reply('Masukkan URL yang ingin didownload!\nContoh: .aio https://tiktok.com/xxx');

  try {
    const res = await fetch(`https://r-nozawa.hf.space/aio?url=${encodeURIComponent(text)}`);
    const json = await res.json();

    if (json.error == true) return m.reply(`Gagal mengambil media: ${json.message || 'URL tidak valid atau tidak didukung.'}`);

    let mediatype = json.medias[0].type || 'media';
    let resulturl = json.medias[0].url

    if (!resulturl) return m.reply('Tidak menemukan URL media untuk didownload.');

    let caption = `*Downloader AIO*\n\n*Judul:* ${json.title || '-'}\n*Source:* ${json.source || '-'}\n*Tipe:* ${mediatype}`;

    if (mediatype === 'image') {
      await conn.sendMessage(m.chat, { image: { url: resulturl }, caption }, { quoted: m });
    } else if (mediatype === 'video') {
      await conn.sendMessage(m.chat, { video: { url: resulturl }, caption }, { quoted: m });
    } else if (mediatype === 'audio') {
      await conn.sendMessage(m.chat, { audio: { url: resulturl }, mimetype: 'audio/mp4' }, { quoted: m });
    } else {
      await conn.sendMessage(m.chat, { document: { url: resulturl }, fileName: 'result', caption }, { quoted: m });
    }

  } catch (e) {
    console.log(e);
    m.reply('Terjadi kesalahan saat memproses permintaan.');
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case 'videy': {
    if (!text) return m.reply(`Masukkan URL dari videy.co!\nContoh:\n.videy https://videy.co/v/?id=simDbFAH1`)
    try {
        const url = encodeURIComponent(text)
        const res = await fetch(`${global.nekorin}/downloader/videy?url=${url}`)
        const json = await res.json()

        if (!json.status || !json.result) return m.reply('Gagal mengambil video. Pastikan link benar.')

        await conn.sendMessage(m.chat, {
            video: { url: json.result },
            caption: `✅ Berhasil mengambil video dari *Videy*\n\n🎥 Link: ${text}`
        }, { quoted: m })

    } catch (e) {
        console.error('Error videy:', e)
        m.reply('Terjadi kesalahan saat mengambil video.')
    }
      }
db.data.users[m.sender].exp += await randomNomor(60)
    break

case "fb": case "fbdl": case "facebook": {
    if (!text) return reply("🔗 Masukkan URL Facebook!");

    await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });

    let res = await downloadFacebook(text);
    if (res.error) {
        await conn.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
        return m.reply(`⚠ *Error:* ${res.error}`);
    }

    await conn.sendMessage(m.chat, { 
        video: { url: res.video }, 
        caption: "✅ *Berhasil mengunduh video Facebook!*" 
    }, { quoted: m });
};
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'spotify':
case 'spotifydl': {
  if (!args[0] || !args[0].includes('spotify.com/track')) {
    return m.reply(`*Contoh:* ${prefix}spotify https://open.spotify.com/track/5ZKRky3p3kya74fy8QkhXc`)
  }

  try {
    const url = encodeURIComponent(args[0])
    const res = await fetch(`https://www.velyn.biz.id/api/downloader/spotifydl?url=${url}`)
    const json = await res.json()

    if (!json.status || !json.data?.success || !json.data?.download) {
      return m.reply("Gagal mengambil data dari Spotify.")
    }

    const { title, artist, image, download, duration } = json.data
    const caption = `🎵 *Title:* ${title}\n🧑 *Artist:* ${artist}\n⏱️ *Duration:* ${(duration / 1000).toFixed(0)}s\n\nSedang mengirim audio...`

    await conn.sendMessage(m.chat, {
      image: { url: image },
      caption
    }, { quoted: m })

    await conn.sendMessage(m.chat, {
      audio: { url: download },
      mimetype: 'audio/mpeg',
      ptt: false
    }, { quoted: m })

  } catch (e) {
    console.error(e)
    m.reply("Terjadi kesalahan saat menghubungi API.")
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
  break;
case 'threads': {
    if (!text) return reply('Kirim link Threads!');

    try {
        let res = await fetch(`https://www.velyn.biz.id/api/downloader/threads?url=${encodeURIComponent(text)}`);
        let json = await res.json();
        if (!json.status) return reply('❌ Gagal mengambil data Threads.');

        let { type, downloads } = json.data;

        for (let item of downloads) {
            if (type === 'video') {
                await conn.sendMessage(m.chat, { video: { url: item.download_url }, caption: '🎥 Video dari Threads' }, { quoted: m });
            } else if (type === 'image') {
                await conn.sendMessage(m.chat, { image: { url: item.download_url }, caption: '🖼️ Gambar dari Threads' }, { quoted: m });
            }
        }
    } catch (e) {
        console.error(e);
        reply('❌ Terjadi kesalahan saat mengunduh konten.');
    }
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case 'gdrive': {
  if (!text) return reply(`Contoh: .gdrive <link google drive>`)

  try {
    const res = await fetch(`https://kyami-rest-api.vercel.app/download/gdrive?url=${encodeURIComponent(text)}`)
    const json = await res.json()

    if (!json.status || !json.result?.downloadUrl) {
      return conn.sendMessage(m.chat, { text: 'Gagal mengambil file. Pastikan link Google Drive valid dan dapat diakses publik.' }, { quoted: m })
    }

    const { downloadUrl, fileName, fileSize, mimetype } = json.result

    await conn.sendMessage(m.chat, {
      document: { url: downloadUrl },
      fileName: fileName,
      mimetype: mimetype || 'application/octet-stream',
      caption: `✅ *Berhasil mengambil file dari Google Drive*\n\n📂 Nama: ${fileName}\n📦 Ukuran: ${fileSize}`
    }, { quoted: m })

  } catch (e) {
    console.error(e)
    conn.sendMessage(m.chat, { text: 'Terjadi kesalahan saat mengakses API Google Drive.' }, { quoted: m })
  }
db.data.users[m.sender].exp += await randomNomor(60)
  break
}
case 'instagram': 
case 'ig':
case 'igdl': 
case 'igmp4': {
if (!text) return reply(`input ulr`) 
    const mediaUrl = await igdl(text);
    const url_media = mediaUrl[0].url;
    try {
        const response = await axios.head(url_media); 
        const contentType = response.headers['content-type']; // Mendapatkan tipe konten dari header
        if (contentType.startsWith('image/')) {
            await conn.sendMessage(m.chat, { image: { url: url_media}, caption: mess.success }, { quoted: m });
            return
        } else {
            await conn.sendMessage(m.chat, { video: { url: url_media}, caption: mess.success }, { quoted: m });
            return 
        }
    } catch(e) {
        return reply(`Maaf Kak Gagal`)
    }
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'ytmp3': {
 if (!text) return reply(`Silakan masuk kan link youtube nya, Contoh: ${prefix + command} https://youtube.com/watch?v=Xs0Lxif1u9E`);
 const url = text.trim();
 const format = 'mp3';
 const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
 if (!regex.test(url)) {
 return reply('link yang anda berikan tidak valid, silahkan masuk kan link yang benar.');
 }
 reply('✨ Tunggu sebentar');
 try {
 const headers = {
    "accept": "*/*",
    "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
    "sec-ch-ua": "\"Not A(Brand\";v=\"8\", \"Chromium\";v=\"132\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "Referer": "https://id.ytmp3.mobi/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  }
const initial = await fetch(`https://d.ymcdn.org/api/v1/init?p=y&23=1llum1n471&_=${Math.random()}`, {headers});
let format = 'mp4';
const init = await initial.json();
const id = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/|.*embed\/))([^&?/]+)/)?.[1];
let convertURL = init.convertURL + `&v=${id}&f=${format}&_=${Math.random()}`;
const converts = await fetch(convertURL, {headers});
const convert = await converts.json();
let info = {};
for (let i = 0; i < 3; i++ ){
    let j = await fetch(convert.progressURL, {headers});
    info = await j.json();
    console.log(info);
    if (info.progress == 3) break;
}
const result = {
    url: convert.downloadURL,
    title: info.title
}
await conn.sendMessage(m.chat, {
            audio: { url: result.url },
            mimetype: 'audio/mp4'
        }, { quoted: m });
} catch {
  reply('aduh kak error nieh..')
}
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'ytmp4': {
 if (!text) return m.reply(`Silakan masuk kan link youtube nya, Contoh: ${prefix + command} https://youtube.com/watch?v=Xs0Lxif1u9E`);
try {
 const url = text.trim();
const headers = {
    "accept": "*/*",
    "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
    "sec-ch-ua": "\"Not A(Brand\";v=\"8\", \"Chromium\";v=\"132\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "Referer": "https://id.ytmp3.mobi/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  }
const initial = await fetch(`https://d.ymcdn.org/api/v1/init?p=y&23=1llum1n471&_=${Math.random()}`, {headers});
let format = 'mp4';
const init = await initial.json();
const id = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/|.*embed\/))([^&?/]+)/)?.[1];
let convertURL = init.convertURL + `&v=${id}&f=${format}&_=${Math.random()}`;
const converts = await fetch(convertURL, {headers});
const convert = await converts.json();
let info = {};
for (let i = 0; i < 3; i++ ){
    let j = await fetch(convert.progressURL, {headers});
    info = await j.json();
    console.log(info);
    if (info.progress == 3) break;
}
const result = {
    url: convert.downloadURL,
    title: info.title
}
await conn.sendMessage(m.chat, { video: { url: result.url } }, { quoted: m });
} catch {
  reply('aduh kak error nieh..')
}
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'songs':
case 'play': {
  if (!text) {
    return m.reply(`Contoh: ${prefix} aku yang tersakiti`)
  }
  try {
    conn.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
    const yts = require('yt-search')
const nyoba = await yts(text);
const { url, title, description, thumbnail, duration, ago, views, author } = nyoba.all[0];
    const body = `• Judul: ${title}\n` +
      `• Channel: ${author.name}\n` +
      `• Durasi: ${duration}\n` +
      `• Link: ${url}\n\nKlik *Video* tuk vidio\nKlik *Audio* tuk audio`
    const buttons = [
      {
        buttonId: `${prefix}ytmp4 ${url}`,
        buttonText: { displayText: 'Video' },
        type: 1
      },
      {
        buttonId: `${prefix}ytmp3 ${url}`,
        buttonText: { displayText: 'Audio' },
        type: 1
      }
    ]
    await conn.sendMessage(m.chat, {
      image: { url: thumbnail },
      caption: body,
      footer: null,
      buttons: buttons,
      headerType: 1,
      viewOnce: true
    }, { quoted: m })
  } catch (err) {
    console.error(err)
    m.reply('Terjadi kesalahan: '+err)
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case "pastebin": case "getpastebin": {
if (!q) return m.reply("Mana Link Pastebinnya")
try {
const anu = await axios.get(`https://api.hiuraa.my.id/tools/getpastebin?url=${encodeURIComponent(q)}`)
m.reply(anu.data.result.content)
} catch (err) {
m.reply("Terjadi Kesalahan: " + err)
}
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case 'mediafire': {
  try {
    if (!text) return m.reply(`Contoh: ${prefix + command} linknya`)
    if (!text.includes('mediafire.com')) return m.reply('Harus berupa link mediafire!')
    conn.sendMessage(m.chat, { react: { text: "🔎", key: m.key } })

    let { data } = await axios.get(`${global.vreden}/api/mediafiredl?url=${text}`)
    let res = data.result[0]
    
    let file_name = decodeURIComponent(res.nama)
    let extension = file_name.split('.').pop().toLowerCase()
    
    let ress = await axios.get(res.link, { responseType: 'arraybuffer' })
    let media = Buffer.from(ress.data)
    
    let mimetype = ''
    if (extension === 'mp4') mimetype = 'video/mp4'
    else if (extension === 'mp3') mimetype = 'audio/mp3'
    else mimetype = `application/${extension}`
    
    conn.sendMessage(m.chat, { document: media, fileName: file_name, mimetype: mimetype }, { quoted: m })
    
  } catch (err) {
    console.error(err.message)
    m.reply('Terjadi kesalahan')
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
break


    // ───────────────────────────────────────────────────────────────────────────────乂 🥀 SEARCH FEATURE ───────────────────────────────────────────────────────────────乂 \\
    case 'infogempa': {
    if (!isRegistered) return daftar('*[ !! ]*\nᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴛᴇʀᴅᴀғᴛᴀʀ sɪʟᴀʜᴋᴀɴ ᴅᴀғᴛᴀʀ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ .ᴅᴀғᴛᴀʀ nama,umur')

    const { default: axios } = require('axios')

    try {
        const response = await axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_day.geojson')
        const features = response.data.features

        if (!features || features.length === 0) return reply('Tidak Ada Data Gempa Terkini')

        // Ambil data gempa terbaru
        const gempaTerkini = features[0]
        const waktu = new Date(gempaTerkini.properties.time).toLocaleString()
        const lokasi = gempaTerkini.properties.place
        const magnitudo = gempaTerkini.properties.mag
        const kedalaman = gempaTerkini.properties.depth
        const koordinat = gempaTerkini.geometry.coordinates.slice(0, 2).join(', ')
        const dirasakan = gempaTerkini.properties.dop || 'Tidak Terdata'

        const teks = `*Info Gempa Terkini (USGS)*\n\n` +
        `• Waktu     : ${waktu}\n` +
        `• Lokasi    : ${lokasi}\n` +
        `• Magnitudo : ${magnitudo}\n` +
        `• Kedalaman : ${kedalaman} km\n` +
        `• Koordinat : ${koordinat}\n` +
        `• Dirasakan : ${dirasakan}`

        // Kirim pesan dengan informasi gempa
        await conn.sendMessage(m.chat, {
            text: teks
        }, { quoted: m })
    } catch (e) {
        reply('Gagal Mengambil Data Gempa: ' + e.message)
    }
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'cuaca':
  if (!q) return reply('Masukkan nama kota atau wilayah.\nContoh: cuaca Jakarta');

  reply('Sedang mencari data cuaca...');

  try {
    const res = await fetch(`https://wttr.in/${encodeURIComponent(q)}?format=j1`);
    const data = await res.json();

    const info = data.current_condition[0];
    const temp = info.temp_C;
    const weather = info.weatherDesc[0].value;
    const humidity = info.humidity;
    const feels = info.FeelsLikeC;
    const wind = info.windspeedKmph;

    const teks = `Cuaca di ${q}:\n- Suhu: ${temp}°C (terasa ${feels}°C)\n- Cuaca: ${weather}\n- Kelembaban: ${humidity}%\n- Angin: ${wind} km/jam`;

    await conn.sendMessage(from, { text: teks }, { quoted: m });

    // Kirim versi suara pakai TTS
    await conn.sendMessage(from, {
      audio: {
        url: `https://translate.google.com/translate_tts?ie=UTF-8&conn=tw-ob&tl=id&q=${encodeURIComponent(teks)}`
      },
      mimetype: 'audio/mpeg',
      ptt: true
    }, { quoted: m });

  } catch (e) {
    console.log(e);
    reply('Gagal mengambil data cuaca. Coba lagi nanti.');
  }
  db.data.users[m.sender].exp += await randomNomor(60)
  break;
case 'dongeng': {
try {
const anu = await axios.get(`https://apizell.web.id/random/dongeng`)
m.reply(`Judul Dongeng: ${anu.data.title}\n\n${anu.data.storyContent}`)
} catch (err) {
m.reply("Terjadi Kesalahan: " + err)
}
}
db.data.users[m.sender].exp += await randomNomor(60)
break
 case 'slirik': {
  if (!q) return m.reply('Masukkan judul lagunya, contoh: .lirik aku memang bukan cinta pertamanya')

  try {
    const axios = require('axios')
    const query = encodeURIComponent(q)
    const res = await axios.get(`https://nirkyy-dev.hf.space/api/v1/lirik?q=${query}`)
    const { success, data } = res.data

    if (!success || !data?.lyrics) return m.reply('Lirik tidak ditemukan.')

    let teks = `🎵 *Lirik Lagu*\n\n${data.lyrics}`
    m.reply(teks)
  } catch (e) {
    console.error(e)
    m.reply('Terjadi kesalahan saat mengambil lirik.')
  }
  break
}
case 'gsm': {
  if (!text) return reply(`Contoh:\n${prefix + command} vivo y19s`);

  try {
    let res = await fetch(`${global.fastres}/search/gsmarena/advanced?query=${encodeURIComponent(text)}`);
    let json = await res.json();
    if (json.status !== 200) return reply('❌ Data tidak ditemukan.');

    const r = json.result;

    let teks = `📱 *${r.name}*\n`;
    teks += `📅 Rilis: ${r.releaseDate}\n`;
    teks += `📦 Berat/Ukuran: ${r.weight}\n`;
    teks += `💿 OS: ${r.os}\n`;
    teks += `💾 Penyimpanan: ${r.storage}\n`;
    teks += `📺 Layar: ${r.displaySize} (${r.displayResolution})\n`;
    teks += `📷 Kamera: ${r.camera} MP\n`;
    teks += `🎞️ Video: ${r.video}\n`;
    teks += `🔋 Baterai: ${r.battery} mAh\n`;
    teks += `⚡ Charging: ${r.charging}\n`;
    teks += `🧠 Chipset: ${r.chipset}\n`;

    let sections = Object.keys(r.specs).map((k) => ({
      title: k,
      description: "Lihat spesifikasi " + k,
      id: `.gsmspec ${text}|${k}`
    }));

    await conn.sendMessage(m.chat, {
      image: { url: r.imageUrl },
      caption: teks,
      buttons: [
        {
          buttonId: 'action',
          buttonText: { displayText: '📑 Lihat Spesifikasi Lengkap' },
          type: 4,
          nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
              title: `📋 ${r.name}`,
              sections: [{
                title: 'Spesifikasi Lengkap',
                rows: sections
              }]
            })
          }
        }
      ],
      footer: 'Source: GSMArena | FastAPI',
      headerType: 4,
      contextInfo: { forwardingScore: 999, isForwarded: true }
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    reply('❌ Gagal memuat data.');
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
break;

case 'playstore':
case 'searchplay': {
  if (!text) return m.reply('Masukkan nama aplikasi yang ingin dicari!\nContoh: .playstore Free Fire');

  try {
    const url = `${global.fastres}/search/playstore?query=${encodeURIComponent(text)}`;
    const { data } = await axios.get(url);

    if (data.status !== 200 || !data.result || !data.result.apps) {
      return m.reply('Tidak ditemukan hasil untuk pencarian tersebut.');
    }

    const results = data.result.apps.slice(0, 5); // ambil 5 teratas
    for (let app of results) {
      let caption = `📱 *${app.appName}*\n`;
      caption += `👨‍💻 Developer: ${app.developer}\n`;
      caption += `⭐ Rating: ${app.rating}\n`;
      caption += `💰 Harga: ${app.price}\n`;
      caption += `🔗 Link: ${app.appLink}`;

      await conn.sendMessage(m.chat, {
        image: { url: app.imageUrl },
        caption
      }, { quoted: m });
    }
  } catch (err) {
    console.error(err);
    m.reply('Gagal mengambil data dari Play Store.');
  }
   }
   db.data.users[m.sender].exp += await randomNomor(60)
  break;
case 'sfiles': {
  if (!text) return reply(`✏️ Masukkan kata kunci yang ingin dicari!\nContoh: ${prefix + command} script bot`);
  reply(mess.wait);

  try {
    const res = await fetch(`${global.nekorin}/search/sfile?q=${encodeURIComponent(text)}`);
    const json = await res.json();

    if (!json.status || !json.result || json.result.length === 0) {
      return reply('❌ Tidak ada hasil ditemukan.');
    }

    let teks = `📂 *Hasil Pencarian SFile*\n🔍 Query: ${text}\n\n`;
    for (let i = 0; i < json.result.length && i < 10; i++) {
      const file = json.result[i];
      teks += `*📌 ${file.title}*\n📦 Size: ${file.size}\n🔗 Link: ${file.url}\n\n`;
    }

    reply(teks.trim());
  } catch (e) {
    console.error(e);
    reply('⚠️ Gagal mengambil data dari API SFile.');
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
break;

case 'spotifysearch':
case 'spotifysrc': {
  if (!args[0]) return m.reply(`*Contoh:* ${prefix}spotifysearch masa lalu`)

  try {
    const query = encodeURIComponent(args.join(" "))
    const res = await fetch(`https://www.velyn.biz.id/api/search/spotify?query=${query}`)
    const json = await res.json()

    if (!json.status || !json.data?.length) {
      return m.reply("Tidak ditemukan hasil Spotify.")
    }

    const results = json.data.slice(0, 5).map((v, i) => {
      const dur = Math.floor(v.duration_ms / 60000) + ':' + String(Math.floor((v.duration_ms % 60000) / 1000)).padStart(2, '0')
      return `🎵 *${v.name}*\n👤 *${v.artists}*\n📊 Popularitas: ${v.popularity}\n⏱️ Durasi: ${dur}\n🔗 ${v.link}\n`
    }).join('\n──────────────\n')

    await conn.sendMessage(m.chat, {
      image: { url: json.data[0].image },
      caption: `Hasil pencarian Spotify:\n\n${results}`
    }, { quoted: m })

  } catch (e) {
    console.error(e)
    m.reply("Terjadi kesalahan saat menghubungi API.")
  }
   }
   db.data.users[m.sender].exp += await randomNomor(60)
  break;

case 'googlesearch': {
  if (!m.text) return reply(`Contoh penggunaan: *${prefix + command} apa kelebihan memakan cabai?*`);

  const query = m.text.split(" ").slice(1).join(" "); // Menangkap query pencarian
  if (!query) return reply(`Harap masukkan kata kunci untuk pencarian.`);
  reply(mess.wait);

  try {
    // API untuk melakukan pencarian
    let response = await fetch(`${global.nekorin}/search/google?q=${encodeURIComponent(query)}`);
    let result = await response.json();

    if (result.status && result.result && result.result.length > 0) {
      let message = `🔍 *Hasil Pencarian untuk:* "${query}"\n\n`;

      // Menambahkan setiap hasil pencarian
      result.result.forEach((item, index) => {
        message += `📄 *${index + 1}. ${item.title}*\n`;
        message += `📜 *Deskripsi:* ${item.desc}\n`;
        message += `🔗 *Link:* ${item.link}\n`;
        message += `\n════════════════════\n`; // Pembatas antar hasil
      });

      await conn.sendMessage(m.chat, {
        text: message,
        caption: '📚 Hasil Pencarian Google'
      }, { quoted: m });
    } else {
      reply('❌ Tidak ada hasil yang ditemukan untuk pencarian tersebut.');
    }
  } catch (e) {
    console.error(e);
    reply('❌ Terjadi kesalahan saat mengambil hasil pencarian.');
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case 'otakudesu': {
    if (!q) return conn.reply(m.chat, 'Masukkan judul animenya!\nContoh: .anime DORAEMONXUMARU ga kill', m)
    try {
        const res = await fetch(`${global.fastres}/otakudesu/search?query=${encodeURIComponent(q)}`)
        const json = await res.json()

        if (json?.status !== 200 || !json.result.animeList || json.result.animeList.length === 0) {
            return conn.reply(m.chat, 'Anime tidak ditemukan!', m)
        }

        const anime = json.result.animeList[0] // Ambil hasil pertama
        const genres = anime.genreList.map(g => g.genreTitle).join(', ')
        const caption = `
*🎬 Judul:* ${anime.title}
*📊 Skor:* ${anime.score}
*📺 Status:* ${anime.status}
*🌐 Genre:* ${genres}
*🔗 Link:* ${anime.link}
        `.trim()

        const buttons = [
            {
                buttonId: anime.link,
                buttonText: { displayText: '🌐 Kunjungi Web' },
                type: 1
            }
        ]

        await conn.sendMessage(m.chat, {
            image: { url: anime.thumb },
            caption,
            footer: 'Hasil dari Otakudesu API',
            buttons,
            headerType: 4
        }, { quoted: m })

    } catch (err) {
        console.error(err)
        conn.reply(m.chat, 'Terjadi kesalahan saat mengambil data anime.', m)
    }
}
db.data.users[m.sender].exp += await randomNomor(60)
break
 case 'komiks': {
    if (!q) return conn.reply(m.chat, 'Masukkan kata kunci pencarian!\nContoh: .nhentai neko', m)
    try {
        const res = await fetch(`${global.fastres}/comic/nhentaisearch?query=${encodeURIComponent(q)}`)
        const json = await res.json()

        if (json?.status !== 200 || !json.result.comics || json.result.comics.length === 0) {
            return conn.reply(m.chat, 'Tidak ditemukan hasil NHentai.', m)
        }

        const results = json.result.comics.slice(0, 5) // ambil 5 teratas
        for (let comic of results) {
            const caption = `*📖 Judul:* ${comic.title}\n*🔗 Link:* ${comic.url}`

            const buttons = [
                {
                    buttonId: comic.url,
                    buttonText: { displayText: '🌐 Buka' },
                    type: 1
                }
            ]

            await conn.sendMessage(m.chat, {
                image: { url: comic.thumb },
                caption,
                footer: 'Hasil pencarian dari NHentai (via FastURL)',
                buttons,
                headerType: 4
            }, { quoted: m })
        }

    } catch (err) {
        console.error(err)
        conn.reply(m.chat, 'Terjadi kesalahan saat mengambil data.', m)
    }
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'mlbb': {
    if (!q) return reply('Masukkan nama hero MLBB!\nContoh: .mlbb aamon')
    try {
        const res = await fetch(`${global.fastres}/character/mlbb?name=${encodeURIComponent(q)}`)
        const json = await res.json()

        if (json?.status !== 200 || !json.result) {
            return reply('Hero tidak ditemukan.')
        }

        const hero = json.result
        const caption = `
🏷️ *Nama:* ${hero.name}
📖 *Cerita:* ${hero.story}
🧩 *Role:* ${hero.role.map(r => r.name).filter(r => r !== 'No role').join(', ') || 'Tidak diketahui'}
🛡️ *Lane:* ${hero.lane.map(l => l.name).filter(l => l !== 'No lane').join(', ') || 'Tidak diketahui'}
⚔️ *Durability:* ${hero.ability.durability}
🔥 *Offense:* ${hero.ability.offense}
✨ *Ability Effects:* ${hero.ability.ability_effects}
🎮 *Difficulty:* ${hero.ability.difficulty}
🌟 *Spesial:* ${hero.speciality.join(', ') || 'Tidak ada'}

🧠 *Skill:* ${hero.skills[0]?.name || '-'}
📜 *Deskripsi:* ${hero.skills[0]?.desc?.split('\n').join(' ') || '-'}
        `.trim()

        await conn.sendMessage(m.chat, {
            image: { url: hero.media.icon },
            caption
        }, { quoted: m })

    } catch (err) {
        console.error(err)
        reply('Terjadi kesalahan saat mengambil data MLBB.')
    }
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'jkt48': {
  try {
const axios = require("axios");
    const liveRes = await axios.get('https://48intensapi.my.id/api/idnlive/jkt48');
    const liveList = liveRes.data?.data || [];
    if (!Array.isArray(liveList) || liveList.length === 0) {
      return m.reply('Tidak ada member JKT48 yang sedang live saat ini.');
    }
    for (let i = 0; i < liveList.length; i++) {
      const mbr = liveList[i];
      const nama = mbr.user.name;
      const username = mbr.user.username;
      const judul = mbr.title;
      const viewers = mbr.view_count;
      const waktu = new Date(mbr.live_at).toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
      const link = `https://www.idn.app/${username}/live/${mbr.slug}`;
      const img = mbr.image;
      await conn.sendMessage(m.chat, {
        text: `*${nama} (@${username}) sedang LIVE!*\n\n` +
              `• *Judul:* ${judul}\n` +
              `• *Penonton:* ${viewers}\n` +
              `• *Sejak:* ${waktu}\n\n` +
              `Tonton sekarang:\n${link}`,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
            title: `${nama} sedang LIVE!`,
            body: `Judul: ${judul}`,
            mediaUrl: link,
            mediaType: 1,
            renderLargerThumbnail: true,
            thumbnailUrl: img,
            sourceUrl: link
          }
        }
      }, { quoted: m });
    }
  } catch (e) {
    console.error('ERROR JKT48:', e);
    m.reply(`Gagal mengambil data JKT48: ${e.message}`);
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
  break
  case 'sfile': {
    if (!text) return m.reply(`Format salah!\n• sfile search <query>|<halaman>\n• sfile down <url>\n\nContoh:\n• sfile search naruto|2\n• sfile down https://sfile.mobi/xxxxx`)
const cheerio = require('cheerio');
    let [mode, ...rest] = text.trim().split(' ')
    let param = rest.join(' ').trim()
    if (mode.toLowerCase() === 'search') {
        try {
            let [query, page] = param.split('|')
            let res = await (async function search(query, page = 1) {
                let res = await fetch(`https://sfile.mobi/search.php?q=${query}&page=${page}`)
                let $ = cheerio.load(await res.text())
                let result = []
                $('div.list').each(function () {
                    let title = $(this).find('a').text()
                    let size = $(this).text().trim().split('(')[1]
                    let link = $(this).find('a').attr('href')
                    if (link) result.push({ title, size: size.replace(')', ''), link })
                })
                return result
            })(query.trim(), page ? parseInt(page) : 1)
            if (!res.length) return m.reply(`🔍 Tidak ditemukan hasil untuk "${query.trim()}"`)
            let caption = res.map((v, i) => {
                return `📌 *Result ${i + 1}*
🔖 *Title:* ${v.title || 'N/A'}
📦 *Size:* ${v.size || 'N/A'}
🔗 *Link:* ${v.link || 'N/A'}`
            }).join('\n\n━━━━━━━━━━━━━━━\n\n')
            m.reply(`🔎 *Hasil Pencarian untuk "${query.trim()}"*\n\n${caption}\n\n📝 Halaman: ${page || 1}`)
        } catch (e) {
            console.error(e)
            m.reply('Terjadi kesalahan saat mencari file.')
        }
    } else if (mode.toLowerCase() === 'down') {
        if (!/https:\/\/sfile\.mobi\//gi.test(param)) return m.reply('Link tidak valid.')

        try {
            let res = await (async function download(url) {
                let res = await fetch(url)
                let $ = cheerio.load(await res.text())
                let filename = $('img.intro').attr('alt')
                let mimetype = $('div.list').text().split(' - ')[1].split('\n')[0]
                let dl = $('#download').attr('href')
                let up_at = $('.list').eq(2).text().split(':')[1].trim()
                let uploader = $('.list').eq(1).find('a').eq(0).text().trim()
                let total_down = $('.list').eq(3).text().split(':')[1].trim()
                let data = await fetch(dl)
                let $$ = cheerio.load(await data.text())
                let anu = $$('script').text()
                let download = anu.split('sf = "')[1].split('"')[0].replace(/\\/g, '')
                return { filename, mimetype, up_at, uploader, total_down, download }
            })(param)
            if (!res) return m.reply('Download gagal.')
            const buff = Buffer.from(await (await fetch(res.download)).arrayBuffer())
            await conn.sendMessage(m.chat, {
                document: buff,
                fileName: res.filename,
                mimetype: res.mimetype,
                caption: `📁 *File Information* 📁
🔹 *Filename:* ${res.filename}
🔹 *Mimetype:* ${res.mimetype}
🔹 *Uploader:* ${res.uploader || 'N/A'}
🔹 *Upload Date:* ${res.up_at || 'N/A'}
🔹 *Downloads:* ${res.total_down || 'N/A'}
🔹 *Download URL:* ${res.download}`
            }, { quoted: m })
        } catch (e) {
            console.error(e)
            m.reply('Terjadi kesalahan saat mengunduh file.')
        }
    } else {
        m.reply(`Sub-command tidak dikenali.\nGunakan:\n• sfile search <query>|<halaman>\n• sfile down <url>`)
    }
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'fox_girl':
case 'lizard':
case 'spank':
case 'meow':
case 'tickle':{
axios.get(`https://nekos.life/api/v2/img/${command}`)
.then(({data}) => {
conn.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
db.data.users[m.sender].exp += await randomNomor(60)
break
			case 'wuyifan':
			case 'suga':
			case 'parkchanyeol':
			case 'ohsehun':
			case 'luhan':
			case 'kimtaehyung':
			case 'kimsoek':
			case 'kimnanjoon':
			case 'kimminseok':
			case 'kimjunmyeon':
			case 'kimjong':
			case 'kimjondae':
			case 'jungkook':
			case 'jimin':
			case 'jhope':
			case 'huangzitao':
			case 'dohkyungsoo':
			case 'baekhyung': {
			
				await conn.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				try {
let cogan = await (await fetch(`https://api.zeeoneofc.my.id/api/cogan/${command}?apikey=vzoah9ZSeCWDXSb`)).buffer()
					await conn.sendMessage(m.chat, {
						image: cogan,
						caption: 'Nih Kak Cowok Gantengnya 😋'
					}, {
						quoted: m
					})
				} catch (error) {
					reply(` Error kak `);
				}
			}
			db.data.users[m.sender].exp += await randomNomor(60)
			break
    case 'tiktoksearch':
case 'tiktoks':
case 'ttsearch': {

    if (!text) return reply(`Gunakan dengan cara ${prefix + command} *query*\n\n_Contoh_\n\n${prefix + command} jj epep`);
    try {
        let serach = await tiktokSearchVideo(text);
        if (!serach.videos || serach.videos.length === 0) return reply('Tidak ada video ditemukan.');

        // Ambil video acak
        let randomVideo = serach.videos[Math.floor(Math.random() * serach.videos.length)];

        let teks = `*Hii ${pushname}, ini hasil acak TikTok Search*\n\n` +
                   `*⭔ Title* : ${randomVideo.title}\n` +
                   `*⭔ Video ID* : ${randomVideo.video_id}\n` +
                   `*⭔ Username* : ${randomVideo.author.unique_id}\n` +
                   `*⭔ Nickname* : ${randomVideo.author.nickname}\n` +
                   `*⭔ Duration* : ${randomVideo.duration} detik\n` +
                   `*⭔ VT Like* : ${randomVideo.digg_count}\n` +
                   `*⭔ Comment* : ${randomVideo.comment_count}\n` +
                   `*⭔ Share* : ${randomVideo.share_count}\n` +
                   `*⭔ Url* : https://www.tiktok.com/@${randomVideo.author.unique_id}/video/${randomVideo.video_id}\n`;

        // Kirim ke chat pribadi user
        await conn.sendMessage(m.sender, {
            video: { url: `https://tikwm.com${randomVideo.play}` },
            caption: teks
        }, { quoted: m });

        // Button "Next Video"
        const buttons = [
            { buttonId: `${prefix + command} ${text}`, buttonText: { displayText: '▶️ Next Video' }, type: 1 }
        ];

        const buttonMessage = {
            text: `*Berhasil!* Video TikTok acak telah dikirim ke private chat kamu ya ${pushname}!\n\nKlik tombol di bawah untuk cari video selanjutnya. Otomatos Video Selanjut Nya Di Kirim Ke Pribadi Kamu`,
            buttons: buttons,
            footer: 'TikTok Search Bot',
            headerType: 1
        };

        // Kirim balasan ke chat asal (grup/chat)
        await conn.sendMessage(m.chat, buttonMessage, { quoted: m });

    } catch (error) {
        console.log(error);
        reply(`Gagal mengambil video.\n\nError: ${error.message || 'Terjadi kesalahan.'}`);
    }
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case 'gimage': {
  if (!text) return m.reply(`*[ ! ]* Masukkan kata kunci pencarian!\n\n*Contoh:* ${prefix + command} aesthetic girl`);

  conn.sendMessage(m.chat, {
    react: { text: '🔎', key: m.key }
  });

  try {
    const res = await axios.get(`https://api.vreden.my.id/api/gimage?query=${encodeURIComponent(text)}`);
    const { status, result } = res.data;

    if (!status || !Array.isArray(result) || result.length === 0) {
      return m.reply(`*[ ❌ ]* Tidak ditemukan hasil dari *"${text}"*`);
    }

    const cards = [];

    for (let i = 0; i < Math.min(result.length, 10); i++) {
      const image = result[i]; // langsung link string

      const media = await prepareWAMessageMedia(
        { image: { url: image } },
        { upload: conn.waUploadToServer }
      );

      const card = {
        body: proto.Message.InteractiveMessage.Body.fromObject({ text: 'Google Image Result' }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: 'bot by indra' }),
        header: proto.Message.InteractiveMessage.Header.fromObject({
          title: `gambar ke #${i + 1}`,
          hasMediaAttachment: true,
          ...media
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [
            {
              name: "cta_url",
              buttonParamsJson: JSON.stringify({
                display_text: "🌐 Lihat di Google",
                url: image
              })
            },
            {
              name: "cta_copy",
              buttonParamsJson: JSON.stringify({
                display_text: "📋 Copy URL",
                copy_code: image
              })
            }
          ]
        })
      };

      cards.push(card);
    }

    const msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: proto.Message.InteractiveMessage.fromObject({
              contextInfo: { mentionedJid: [m.sender] },
              carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards }),
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `*🖼️ Pinterest Search Result*\n@${m.sender.split('@')[0]}\nSilakan pilih gambar di bawah:`
              })
            })
          }
        }
      },
      {
        userJid: m.chat,
        quoted: m
      }
    );

    await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
    db.data.users[m.sender].exp += await randomNomor(60);

  } catch (e) {
    console.error('❌ PINTEREST ERROR:', e);
    return m.reply(`❌ Terjadi kesalahan saat mengambil data dari Pinterest. Coba beberapa saat lagi.`);
  }
}
break;
case 'pin': {
  if (!text) return m.reply(`*[ ! ]* Masukkan kata kunci pencarian!\n\n*Contoh:* ${prefix + command} aesthetic girl`);

  conn.sendMessage(m.chat, {
    react: { text: '🔎', key: m.key }
  });

  try {
    const res = await axios.get(`https://api.vreden.my.id/api/pinterest?query=${encodeURIComponent(text)}`);
    const { status, result } = res.data;

    if (!status || !Array.isArray(result) || result.length === 0) {
      return m.reply(`*[ ❌ ]* Tidak ditemukan hasil dari *"${text}"*`);
    }

    const cards = [];

    for (let i = 0; i < Math.min(result.length, 10); i++) {
      const image = result[i]; // langsung link string

      const media = await prepareWAMessageMedia(
        { image: { url: image } },
        { upload: conn.waUploadToServer }
      );

      const card = {
        body: proto.Message.InteractiveMessage.Body.fromObject({ text: 'Pinterest Image Result' }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: 'By DORAEMONXUMARU - AI' }),
        header: proto.Message.InteractiveMessage.Header.fromObject({
          title: `Result #${i + 1}`,
          hasMediaAttachment: true,
          ...media
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [
            {
              name: "cta_url",
              buttonParamsJson: JSON.stringify({
                display_text: "🌐 Lihat di Pinterest",
                url: image
              })
            },
            {
              name: "cta_copy",
              buttonParamsJson: JSON.stringify({
                display_text: "📋 Copy URL",
                copy_code: image
              })
            }
          ]
        })
      };

      cards.push(card);
    }

    const msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: proto.Message.InteractiveMessage.fromObject({
              contextInfo: { mentionedJid: [m.sender] },
              carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards }),
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `*🖼️ Pinterest Search Result*\n@${m.sender.split('@')[0]}\nSilakan pilih gambar di bawah:`
              })
            })
          }
        }
      },
      {
        userJid: m.chat,
        quoted: m
      }
    );

    await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
    db.data.users[m.sender].exp += await randomNomor(60);

  } catch (e) {
    console.error('❌ PINTEREST ERROR:', e);
    return m.reply(`❌ Terjadi kesalahan saat mengambil data dari Pinterest. Coba beberapa saat lagi.`);
  }
}
break;
case 'pindl': {
  if (!text) return m.reply(`❗ Masukkan link Pinterest!\nContoh:\n${prefix + command} https://pin.it/xyzAbc123`);

  conn.sendMessage(m.chat, {
    react: { text: '📥', key: m.key }
  });

  try {
    const res = await axios.get(`https://api.vreden.my.id/api/download/pinterest?url=${encodeURIComponent(text)}`);
    const { status, result } = res.data;

    if (!status || !result?.media_urls || result.media_urls.length === 0) {
      return m.reply('❌ Gagal mengambil gambar. Coba lagi nanti atau pastikan link valid.');
    }

    const imageHD = result.media_urls.find(img => img.quality === 'original') || result.media_urls[0];

    const caption = `✅ *Pinterest Downloader*

📌 *Judul:* ${result.title || '-'}
👤 *Uploader:* ${result.uploader?.full_name || result.uploader?.username || '-'}
📂 *Board:* ${result.board?.name || '-'}
💾 *Saves:* ${result.statistics?.saves || 0}
🔗 *Board URL:* ${result.board?.url || '-'}`;

    await conn.sendMessage(m.chat, {
      image: { url: imageHD.url },
      caption
    }, { quoted: m });

  } catch (err) {
    console.error('❌ Pinterest DL error:', err);
    return m.reply('🚫 Terjadi kesalahan saat menghubungi API Pinterest.');
  }
}
break;
case "playch": {
    if (!text) return reply(`Contoh:\n.playch https://youtube.com/watch?v=xxx\n.playch mellow vibes`);

    try {
      let url, title, author, audioUrl, thumbnail, videoUrl;

      if (/^https?:\/\/(www\.)?(youtube\.com|youtu\.be)\//i.test(text)) {
        const { data } = await axios.get(`https://cloudkutube.eu/api/yta?url=${encodeURIComponent(text)}`);
        if (data.status !== "success") return reply("Gagal ambil audio.");
        ({ title, author, url: audioUrl, thumbnail } = data.result);
        videoUrl = text;
      } else {
        const search = await axios.get(`https://flowfalcon.dpdns.org/search/youtube?q=${encodeURIComponent(text)}`);
        const list = search.data.result;
        if (!list || !list.length) return reply("Video tidak ditemukan.");
        const video = list[0];
        const { data } = await axios.get(`https://cloudkutube.eu/api/yta?url=${encodeURIComponent(video.link)}`);
        if (data.status !== "success") return reply("Gagal ambil audio.");
        ({ title, author, url: audioUrl, thumbnail } = data.result);
        videoUrl = video.link;
      }

      const idsal = "120363419803716102@newsletter";
      const ctx = {
        forwardingScore: 1,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: idsal,
          serverMessageId: Math.floor(Math.random() * 999999),
          newsletterName: "DORAEMONXUMARU AI - Playing Music"
        },
        externalAdReply: {
          title: title,
          body: `By ${author}`,
          thumbnailUrl: thumbnail,
          mediaType: 1,
          sourceUrl: videoUrl
        }
      };

      const audioRes = await axios.get(audioUrl, { responseType: "arraybuffer" });
      const audioBuffer = Buffer.from(audioRes.data, "binary");

      await conn.sendMessage(idsal, {
        audio: audioBuffer,
        mimetype: "audio/mp4",
        ptt: true,
        contextInfo: ctx
      });

      reply(`✔ Sukses kirim *${title}* ke channel.`);
    } catch (err) {
      console.error(err);
      reply("Gagal kirim audio ke channel.");
    }
  };
  db.data.users[m.sender].exp += await randomNomor(60)
break
case "nasa": {
    const axios = require("axios");
    const cheerio = require("cheerio");

    async function nasaNews() {
        try {
            const anu = await axios.get("https://www.nasa.gov/news/releases/latest/index.html");
            const $ = cheerio.load(anu.data);
            const dbres = [];

            $(".hds-content-item").each((a, b) => {
                const judul = $(b).find(".hds-a11y-heading-22").text().trim();
                const desc = $(b).find("p").text().trim();
                const link = $(b).find(".hds-content-item-inner a").attr("href");
                if (judul && link) {
                    dbres.push({
                        judul,
                        desc,
                        link: link.startsWith("http") ? link : `https://www.nasa.gov${link}`
                    });
                }
            });

            return dbres;
        } catch (err) {
            return [{
                judul: "Gagal mengambil berita NASA",
                desc: err.message,
                link: ""
            }];
        }
    }

    const res = await nasaNews();
    const text = res.map(a => `🛰️ *${a.judul}*\n${a.desc}\n🔗 ${a.link}`).join("\n\n");

    await conn.sendMessage(m.chat, { text }, { quoted: qtext });
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case "kompas": {
    const axios = require("axios");
    const cheerio = require("cheerio");

    async function newsKom() {
        try {
            const res = await axios.get("https://indeks.kompas.com/");
            const $ = cheerio.load(res.data);
            const dbres = [];

            $(".articleItem").each((_, el) => {
                const judul = $(el).find(".articleTitle").text().trim();
                const link = $(el).find(".article-link").attr("href");
                const dateup = $(el).find(".articlePost-date").text().trim();
                if (judul && link) dbres.push({ judul, link, dateup });
            });

            return dbres;
        } catch (err) {
            return [{ judul: "Gagal mengambil berita", link: "", dateup: err.message }];
        }
    }

    const hasil = await newsKom();
    const teks = hasil.map(a => `📰 *${a.judul}*\n📅 ${a.dateup}\n🔗 ${a.link}`).join("\n\n");

    await conn.sendMessage(m.chat, { text: teks }, { quoted: qtext });
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
    case "bilibili": {
    if (!text) return conn.sendMessage(m.chat, { text: "Kirimkan kata kunci untuk mencari di Bilibili.\n\nContoh: .bilibili Naruto" }, { quoted: m });

    const axios = require('axios');
    const cheerio = require('cheerio');

    async function bilibiliSearch(query) {
        try {
            const response = await axios.get(`https://www.bilibili.tv/id/search-result?q=${encodeURIComponent(query)}`, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 8.1.0; CPH1803) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.4280.141 Mobile Safari/537.36 KiToBrowser/124.0',
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                    'accept-language': 'id-ID',
                    'referer': 'https://www.bilibili.tv/id/search',
                    'upgrade-insecure-requests': '1'
                }
            });

            const $ = cheerio.load(response.data);
            let results = [];

            $('.section__list__item').each((_, el) => {
                const title = $(el).find('.highlights').text().trim();
                const url = 'https://www.bilibili.tv' + $(el).find('.bstar-video-card__text a').attr('href');
                const thumbnail = $(el).find('.bstar-video-card__cover-img img').attr('src');
                const duration = $(el).find('.bstar-video-card__cover-mask-text').text().trim();
                const uploader = $(el).find('.bstar-video-card__nickname span').text().trim();
                const uploaderUrl = 'https://www.bilibili.tv' + $(el).find('.bstar-video-card__nickname').attr('href');
                const views = $(el).find('.bstar-video-card__desc').text().trim().replace(' · ', ' | ');

                if (title && url) {
                    results.push({ title, url, thumbnail, duration, uploader, uploaderUrl, views });
                }
            });

            return results;
        } catch (error) {
            console.error('Gagal ambil data bilibili:', error);
            return [];
        }
    }

    const res = await bilibiliSearch(text);
    if (!res.length) return conn.sendMessage(m.chat, { text: "Tidak ditemukan hasil untuk kata kunci tersebut." }, { quoted: m });

    const teks = res.slice(0, 5).map((v, i) => 
        `🎬 *${v.title}*\n⏱ Durasi: ${v.duration}\n👤 ${v.uploader}\n👁 ${v.views}\n🔗 ${v.url}`
    ).join('\n\n');

    await conn.sendMessage(m.chat, { text: teks }, { quoted: m });
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
           case 'patrick':
            case 'doge':
            case 'popoci':
            case 'sponsbob':
            case 'kawan-sponsbob':
            case 'awoawo':
            case 'chat':
            case 'dbfly':
            case 'dino-kuning':
            case 'gojosatoru':
            case 'hope-boy':
            case 'jisoo':
            case 'kr-robot':
            case 'kucing':
            case 'manusia-lidi':
            case 'menjamet':
            case 'meow':
            case 'nicholas':
            case 'tyni':
                let responding = await fetchJson(`${global.vreden}/api/google?query=${command}`);

                if (!responding.result.items || responding.result.items.length === 0) {
                    return warning("Gagal mendapatkan gambar dari Google, coba kata kunci lain.");
                }

                let images = responding.result.items
                    .map(item => item?.pagemap?.cse_image?.[0]?.src)
                    .filter(img => img)
                    .slice(0, 5);

                if (images.length === 0) {
                    return warning("Tidak dapat menemukan gambar yang valid.");
                }

                for (let imgUrl of images) {
                    let buffer = await getBuffer(imgUrl);
                    await conn.imgToSticker(m.chat, buffer, m, {
                        packname: `Sticker`,
                        author: ``
                    });
                }
                break;


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 INSTAL PANEL MENU ───────────────────────────────────────────────────────────────乂 \\
case "uninstalltema": {
if (!isCreator) return reply(mess.creator)
if (!text || !text.split("|")) return m.reply("ipvps|pwvps")
let vii = text.split("|")
if (vii.length < 2) return m.reply("ipvps|pwvps")
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

await m.reply("Memproses *uninstall* tema pterodactyl\nTunggu 1-10 menit hingga proses selsai")

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil *uninstall* tema pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`)
stream.write(`2\n`)
stream.write(`y\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break
case "installtemastellar": case "installtemastelar": {
if (!isCreator) return reply(mess.creator)
if (!text || !text.split("|")) return m.reply("ipvps|pwvps")
let vii = text.split("|")
if (vii.length < 2) return m.reply("ipvps|pwvps")
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (!isCreator) return reply(mess.creator)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', async () => {
m.reply("Memproses install *tema stellar* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema stellar* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`1\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break
case "installtemabilling": case "instaltemabiling": {
if (!isCreator) return reply(mess.creator)
if (!text || !text.split("|")) return m.reply("ipvps|pwvps")
let vii = text.split("|")
if (vii.length < 2) return m.reply("ipvps|pwvps")
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
m.reply("Memproses install *tema billing* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema billing* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`2\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break
case "installtemaenigma": 
case "instaltemaenigma": {
if (!isCreator) return reply(mess.creator)
if (!text || !text.split("|")) return m.reply("ipvps|pwvps")
let vii = text.split("|")
if (vii.length < 2) return m.reply("ipvps|pwvps")
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
m.reply("Memproses install *tema enigma* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema enigma* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`); // Key Token : skyzodev
stream.write('1\n');
stream.write('3\n');
stream.write('https://wa.me/6285624297893\n');
stream.write('https://whatsapp.com/channel/0029VaYoztA47XeAhs447Y1s\n');
stream.write('https://chat.whatsapp.com/IP1KjO4OyM97ay2iEsSAFy\n');
stream.write('yes\n');
stream.write('x\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break
case "uninstallpanel": {
if (!isCreator) return m.reply(mess.creator);
if (!text || !text.split("|")) return m.reply("ipvps|pwvps")
var vpsnya = text.split("|")
if (vpsnya.length < 2) return m.reply("ipvps|pwvps")
let ipvps = vpsnya[0]
let passwd = vpsnya[1]
const connSettings = {
host: ipvps, port: '22', username: 'root', password: passwd
}
const boostmysql = `\n`
const command = `bash <(curl -s https://pterodactyl-installer.se)`
const ress = new Client();
ress.on('ready', async () => {

await m.reply("Memproses *uninstall* server panel\nTunggu 1-10 menit hingga proses selsai")

ress.exec(command, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await ress.exec(boostmysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await m.reply("Berhasil *uninstall* server panel ✅")
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Remove all MariaDB databases? [yes/no]`)) {
await stream.write("\x09\n")
}
}).stderr.on('data', (data) => {
m.reply('Berhasil Uninstall Server Panel ✅');
});
})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Input 0-6`)) {
await stream.write("6\n")
}
if (data.toString().includes(`(y/N)`)) {
await stream.write("y\n")
}
if (data.toString().includes(`* Choose the panel user (to skip don\'t input anything):`)) {
await stream.write("\n")
}
if (data.toString().includes(`* Choose the panel database (to skip don\'t input anything):`)) {
await stream.write("\n")
}
}).stderr.on('data', (data) => {
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
m.reply('Katasandi atau IP tidak valid')
}).connect(connSettings)
}
break
case "installpanel": {
if (!isCreator) return reply(mess.creator)
if (!text) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let vii = text.split("|")
if (vii.length < 5) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let sukses = false

const ress = new Client();
const connSettings = {
 host: vii[0],
 port: '22',
 username: 'root',
 password: vii[1]
}

const pass = "121"
let passwordPanel = pass
const domainpanel = vii[2]
const domainnode = vii[3]
const ramserver = vii[4]
const deletemysql = `\n`
const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`

async function instalWings() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
ress.exec('bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/createnode.sh)', async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
let teks = `
*Berikut Detail Akun Panel :*

* *Username :* admin
* *Password :* ${passwordPanel}
* *Domain :* ${domainpanel}

*Note :* Silahkan Buat Allocation & Ambil Token Wings Di Node Yang Sudah Di Buat Oleh Bot Untuk Menjalankan Wings

*Cara Menjalankan Wings :*
ketik *.startwings* ipvps|pwvps|tokenwings
`
await conn.sendMessage(m.chat, {text: teks}, {quoted: m})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes("Masukkan nama lokasi: ")) {
stream.write('Singapore\n');
}
if (data.toString().includes("Masukkan deskripsi lokasi: ")) {
stream.write('Node By DansyaID\n');
}
if (data.toString().includes("Masukkan domain: ")) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes("Masukkan nama node: ")) {
stream.write('Node By DansyaID\n');
}
if (data.toString().includes("Masukkan RAM (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan jumlah maksimum disk space (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan Locid: ")) {
stream.write('1\n');
}
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('1\n');
}
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Enter the panel address (blank for any address)')) {
stream.write(`${domainpanel}\n`);
}
if (data.toString().includes('Database host username (pterodactyluser)')) {
stream.write('admin\n');
}
if (data.toString().includes('Database host password')) {
stream.write(`admin\n`);
}
if (data.toString().includes('Set the FQDN to use for Let\'s Encrypt (node.example.com)')) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes('Enter email address for Let\'s Encrypt')) {
stream.write('admin@gmail.com\n');
}
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
})
}

async function instalPanel() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalWings()
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('0\n');
} 
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Database name (panel)')) {
stream.write('\n');
}
if (data.toString().includes('Database username (pterodactyl)')) {
stream.write('admin\n');
}
if (data.toString().includes('Password (press enter to use randomly generated password)')) {
stream.write('admin\n');
} 
if (data.toString().includes('Select timezone [Europe/Stockholm]')) {
stream.write('Asia/Jakarta\n');
} 
if (data.toString().includes('Provide the email address that will be used to configure Let\'s Encrypt and Pterodactyl')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Email address for the initial admin account')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Username for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('First name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Last name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Password for the initial admin account')) {
stream.write(`${passwordPanel}\n`);
} 
if (data.toString().includes('Set the FQDN of this panel (panel.example.com)')) {
stream.write(`${domainpanel}\n`);
} 
if (data.toString().includes('Do you want to automatically configure UFW (firewall)')) {
stream.write('y\n')
} 
if (data.toString().includes('Do you want to automatically configure HTTPS using Let\'s Encrypt? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Select the appropriate number [1-2] then [enter] (press \'c\' to cancel)')) {
stream.write('1\n');
} 
if (data.toString().includes('I agree that this HTTPS request is performed (y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Proceed anyways (your install will be broken if you do not know what you are doing)? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('(yes/no)')) {
stream.write('y\n');
} 
if (data.toString().includes('Initial configuration completed. Continue with installation? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Still assume SSL? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Please read the Terms of Service')) {
stream.write('y\n');
}
if (data.toString().includes('(A)gree/(C)ancel:')) {
stream.write('A\n');
} 
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
});
}

ress.on('ready', async () => {
await m.reply("Memproses *install* server panel \nTunggu 1-10 menit hingga proses selsai")
ress.exec(deletemysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalPanel();
}).on('data', async (data) => {
await stream.write('\t')
await stream.write('\n')
await console.log(data.toString())
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).connect(connSettings);
}
break  
case "startwings": case "configurewings": {
if (!isCreator) return reply(mess.creator)
let t = text.split('|')
if (t.length < 3) return m.reply(example("ipvps|pwvps|tokennode"))

let ipvps = t[0]
let passwd = t[1]
let token = t[2]

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `${token} && systemctl start wings`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("*Berhasil menjalankan wings ✅*\n* Status wings : *aktif*")
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("y\n")
stream.write("systemctl start wings\n")
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break
case "hbpanel": case "hackbackpanel": {
if (!isCreator) return reply(mess.creator)
let t = text.split('|')
if (t.length < 2) return m.reply("ipvps|pwvps")

let ipvps = t[0]
let passwd = t[1]

const newuser = "admin" + getRandom("")
const newpw = "admin" + getRandom("")

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
let teks = `
*Hackback panel sukses ✅*

*Berikut detail akun admin panel :*
* *Username :* ${newuser}
* *Password :* ${newpw}
`
await conn.sendMessage(m.chat, {text: teks}, {quoted: m})
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("skyzodev\n")
stream.write("7\n")
stream.write(`${newuser}\n`)
stream.write(`${newpw}\n`)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 LINODE MENU ───────────────────────────────────────────────────────────────乂 \\
            case 'deletelinode': {
                if (!isCreator) return reply('Maaf, command ini hanya untuk pemilik.');

                let linodeId = args[0];
                if (!linodeId) return reply('ID Linode belum diberikan.');

                let deleteLinode = async () => {
                    try {
                        let response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${apilinode}`
                            }
                        });

                        if (response.status === 204) {
                            reply('Linode berhasil dihapus.');
                        } else {
                            throw new Error('Gagal menghapus Linode.');
                        }
                    } catch (error) {
                        console.error('Terjadi kesalahan saat menghapus Linode:', error);
                        reply('Sukses Menghapus Linode.');
                    }
                };

                deleteLinode();

                break;
            }
            case 'domain16': {
                if (!isPremium && !isOwner && !isCreator) return reply(mess.prem)

                function subDomain1(host, ip) {
                    return new Promise((resolve) => {
                        let zone = "fea6a73c34048903f86c57aa38267264";
                        let apitoken = "NCKraSqu1XimzccvTg-wCkEgGZrDDxOBX0lKfMQM";
                        let tld = "hyuuoffc.my.id";
                        axios
                            .post(
                                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`, {
                                    type: "A",
                                    name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld,
                                    content: ip.replace(/[^0-9.]/gi, ""),
                                    ttl: 3600,
                                    priority: 10,
                                    proxied: false
                                }, {
                                    headers: {
                                        Authorization: "Bearer " + apitoken,
                                        "Content-Type": "application/json",
                                    },
                                }
                            )
                            .then((e) => {
                                let res = e.data;
                                if (res.success) resolve({
                                    success: true,
                                    zone: res.result?.zone_name,
                                    name: res.result?.name,
                                    ip: res.result?.content
                                });
                            })
                            .catch((e) => {
                                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                                let err1Str = String(err1);
                                resolve({
                                    success: false,
                                    error: err1Str
                                });
                            });
                    });
                }

                let raw1 = args?.join(" ")?.trim();
                if (!raw1) return reply("PENGGUNAAN .domain3 hostname|167.29.379.23");
                let host1 = raw1
                    .split("|")[0]
                    .trim()
                    .replace(/[^a-z0-9.-]/gi, "");
                if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
                let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
                if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");

                subDomain1(host1, ip1).then((e) => {
                    if (e[mess.success]) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain ByDapaOFFC_*`);
                    else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
                });
            }
            break
            //=================================================//
            case 'domain17': {
                if (!isPremium && !isOwner && !isCreator) return reply(mess.prem)

                function subDomain1(host, ip) {
                    return new Promise((resolve) => {
                        let zone = "d877d9cf996ac8a1b371851e733ba20e";
                        let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
                        let tld = "pannelku.icu";
                        axios
                            .post(
                                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`, {
                                    type: "A",
                                    name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld,
                                    content: ip.replace(/[^0-9.]/gi, ""),
                                    ttl: 3600,
                                    priority: 10,
                                    proxied: false
                                }, {
                                    headers: {
                                        Authorization: "Bearer " + apitoken,
                                        "Content-Type": "application/json",
                                    },
                                }
                            )
                            .then((e) => {
                                let res = e.data;
                                if (res.success) resolve({
                                    success: true,
                                    zone: res.result?.zone_name,
                                    name: res.result?.name,
                                    ip: res.result?.content
                                });
                            })
                            .catch((e) => {
                                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                                let err1Str = String(err1);
                                resolve({
                                    success: false,
                                    error: err1Str
                                });
                            });
                    });
                }

                let raw1 = args?.join(" ")?.trim();
                if (!raw1) return reply("mana host & ip nya?");
                let host1 = raw1
                    .split("|")[0]
                    .trim()
                    .replace(/[^a-z0-9.-]/gi, "");
                if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
                let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
                if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");

                subDomain1(host1, ip1).then((e) => {
                    if (e[mess.success]) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain ByDapaOFFC_*`);
                    else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
                });
            }
            break
            case 'domain18': {
                if (!isPremium && !isOwner && !isCreator) return reply("maaf su fitur ini dapet di gunakan group tertentu")

                function subDomain1(host, ip) {
                    return new Promise((resolve) => {
                        let zone = "a6c9cf9cd38077e52db6874200c5c0c4";
                        let apitoken = "DyQW84WhtZwTfWZCanO-MQNd6gglRwDHOmK8KRF2";
                        let tld = "panellku.my.id";
                        axios
                            .post(
                                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`, {
                                    type: "A",
                                    name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld,
                                    content: ip.replace(/[^0-9.]/gi, ""),
                                    ttl: 3600,
                                    priority: 10,
                                    proxied: false
                                }, {
                                    headers: {
                                        Authorization: "Bearer " + apitoken,
                                        "Content-Type": "application/json",
                                    },
                                }
                            )
                            .then((e) => {
                                let res = e.data;
                                if (res.success) resolve({
                                    success: true,
                                    zone: res.result?.zone_name,
                                    name: res.result?.name,
                                    ip: res.result?.content
                                });
                            })
                            .catch((e) => {
                                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                                let err1Str = String(err1);
                                resolve({
                                    success: false,
                                    error: err1Str
                                });
                            });
                    });
                }

                let raw1 = args?.join(" ")?.trim();
                if (!raw1) return reply("mana host & ip nya?");
                let host1 = raw1
                    .split("|")[0]
                    .trim()
                    .replace(/[^a-z0-9.-]/gi, "");
                if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
                let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
                if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");

                subDomain1(host1, ip1).then((e) => {
                    if (e[mess.success]) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
                    else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
                });
            }
            break
            case 'domain19': {
                if (!isPremium && !isOwner && !isCreator) return reply("maaf su fitur ini dapet di gunakan group tertentu")

                function subDomain1(host, ip) {
                    return new Promise((resolve) => {
                        let zone = "512f917ecb9e0d4eb0085458fdcc95ee";
                        let apitoken = "a4hizwK6UjIi8MBEscAOVNG-njTDfJejAhOJlOFh";
                        let tld = "panellku.me";
                        axios
                            .post(
                                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`, {
                                    type: "A",
                                    name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld,
                                    content: ip.replace(/[^0-9.]/gi, ""),
                                    ttl: 3600,
                                    priority: 10,
                                    proxied: false
                                }, {
                                    headers: {
                                        Authorization: "Bearer " + apitoken,
                                        "Content-Type": "application/json",
                                    },
                                }
                            )
                            .then((e) => {
                                let res = e.data;
                                if (res.success) resolve({
                                    success: true,
                                    zone: res.result?.zone_name,
                                    name: res.result?.name,
                                    ip: res.result?.content
                                });
                            })
                            .catch((e) => {
                                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                                let err1Str = String(err1);
                                resolve({
                                    success: false,
                                    error: err1Str
                                });
                            });
                    });
                }

                let raw1 = args?.join(" ")?.trim();
                if (!raw1) return reply("mana host & ip nya?");
                let host1 = raw1
                    .split("|")[0]
                    .trim()
                    .replace(/[^a-z0-9.-]/gi, "");
                if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
                let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
                if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");

                subDomain1(host1, ip1).then((e) => {
                    if (e[mess.success]) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
                    else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
                });
            }
            break
            case 'domain20': {
                if (!isPremium && !isOwner && !isCreator) return reply("maaf su fitur ini dapet di gunakan group tertentu")

                function subDomain1(host, ip) {
                    return new Promise((resolve) => {
                        let zone = "b268933cdea4ffd662bc56dd84e46e21";
                        let apitoken = "v80Y6QMWDamHAg-u18z8IEMBp1kpodn_lZkyduJ8";
                        let tld = "panellku.biz.id";
                        axios
                            .post(
                                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`, {
                                    type: "A",
                                    name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld,
                                    content: ip.replace(/[^0-9.]/gi, ""),
                                    ttl: 3600,
                                    priority: 10,
                                    proxied: false
                                }, {
                                    headers: {
                                        Authorization: "Bearer " + apitoken,
                                        "Content-Type": "application/json",
                                    },
                                }
                            )
                            .then((e) => {
                                let res = e.data;
                                if (res.success) resolve({
                                    success: true,
                                    zone: res.result?.zone_name,
                                    name: res.result?.name,
                                    ip: res.result?.content
                                });
                            })
                            .catch((e) => {
                                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                                let err1Str = String(err1);
                                resolve({
                                    success: false,
                                    error: err1Str
                                });
                            });
                    });
                }

                let raw1 = args?.join(" ")?.trim();
                if (!raw1) return reply("mana host & ip nya?");
                let host1 = raw1
                    .split("|")[0]
                    .trim()
                    .replace(/[^a-z0-9.-]/gi, "");
                if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
                let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
                if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");

                subDomain1(host1, ip1).then((e) => {
                    if (e[mess.success]) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
                    else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
                });
            }
            break
            case 'domain21': {
                if (!isPremium && !isOwner && !isCreator) return reply("maaf su fitur ini dapet di gunakan group tertentu")

                function subDomain1(host, ip) {
                    return new Promise((resolve) => {
                        let zone = "4e1c19a2687fe1a2505fecaf3de3e7ff";
                        let apitoken = "p4oS8J-Tc0Rt9z4tgS3gdzbaG-aL0FQ0Ro1mpl-Q";
                        let tld = "panellku.tech";
                        axios
                            .post(
                                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`, {
                                    type: "A",
                                    name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld,
                                    content: ip.replace(/[^0-9.]/gi, ""),
                                    ttl: 3600,
                                    priority: 10,
                                    proxied: false
                                }, {
                                    headers: {
                                        Authorization: "Bearer " + apitoken,
                                        "Content-Type": "application/json",
                                    },
                                }
                            )
                            .then((e) => {
                                let res = e.data;
                                if (res.success) resolve({
                                    success: true,
                                    zone: res.result?.zone_name,
                                    name: res.result?.name,
                                    ip: res.result?.content
                                });
                            })
                            .catch((e) => {
                                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                                let err1Str = String(err1);
                                resolve({
                                    success: false,
                                    error: err1Str
                                });
                            });
                    });
                }

                let raw1 = args?.join(" ")?.trim();
                if (!raw1) return reply("mana host & ip nya?");
                let host1 = raw1
                    .split("|")[0]
                    .trim()
                    .replace(/[^a-z0-9.-]/gi, "");
                if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
                let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
                if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");

                subDomain1(host1, ip1).then((e) => {
                    if (e[mess.success]) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
                    else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
                });
            }
            break
            case 'domain22': {
                if (!isPremium && !isOwner && !isCreator) return reply("maaf su fitur ini dapet di gunakan group tertentu")

                function subDomain1(host, ip) {
                    return new Promise((resolve) => {
                        let zone = "72fc614619292a5d6c86d3e736b14062";
                        let apitoken = "MF2cgyOmXeFdrwpcTS4XRbYbDL9zsmF6XY6TIFlv";
                        let tld = "panelkuu.xyz";
                        axios
                            .post(
                                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`, {
                                    type: "A",
                                    name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld,
                                    content: ip.replace(/[^0-9.]/gi, ""),
                                    ttl: 3600,
                                    priority: 10,
                                    proxied: false
                                }, {
                                    headers: {
                                        Authorization: "Bearer " + apitoken,
                                        "Content-Type": "application/json",
                                    },
                                }
                            )
                            .then((e) => {
                                let res = e.data;
                                if (res.success) resolve({
                                    success: true,
                                    zone: res.result?.zone_name,
                                    name: res.result?.name,
                                    ip: res.result?.content
                                });
                            })
                            .catch((e) => {
                                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                                let err1Str = String(err1);
                                resolve({
                                    success: false,
                                    error: err1Str
                                });
                            });
                    });
                }

                let raw1 = args?.join(" ")?.trim();
                if (!raw1) return reply("mana host & ip nya?");
                let host1 = raw1
                    .split("|")[0]
                    .trim()
                    .replace(/[^a-z0-9.-]/gi, "");
                if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
                let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
                if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");

                subDomain1(host1, ip1).then((e) => {
                    if (e[mess.success]) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
                    else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
                });
            }
            break
            case 'domain23': {
                if (!isPremium && !isOwner && !isCreator) return reply("maaf su fitur ini dapet di gunakan group tertentu")

                function subDomain1(host, ip) {
                    return new Promise((resolve) => {
                        let zone = "c8a876bc10af3ce5ab11f2209121cf63";
                        let apitoken = "O8uR00EP6u4Rp9TtmwCSASwfkEHAIaNw2DVmIgAD";
                        let tld = "panellku.com";
                        axios
                            .post(
                                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`, {
                                    type: "A",
                                    name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld,
                                    content: ip.replace(/[^0-9.]/gi, ""),
                                    ttl: 3600,
                                    priority: 10,
                                    proxied: false
                                }, {
                                    headers: {
                                        Authorization: "Bearer " + apitoken,
                                        "Content-Type": "application/json",
                                    },
                                }
                            )
                            .then((e) => {
                                let res = e.data;
                                if (res.success) resolve({
                                    success: true,
                                    zone: res.result?.zone_name,
                                    name: res.result?.name,
                                    ip: res.result?.content
                                });
                            })
                            .catch((e) => {
                                let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                                let err1Str = String(err1);
                                resolve({
                                    success: false,
                                    error: err1Str
                                });
                            });
                    });
                }

                let raw1 = args?.join(" ")?.trim();
                if (!raw1) return reply("mana host & ip nya?");
                let host1 = raw1
                    .split("|")[0]
                    .trim()
                    .replace(/[^a-z0-9.-]/gi, "");
                if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
                let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
                if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");

                subDomain1(host1, ip1).then((e) => {
                    if (e[mess.success]) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
                    else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
                });
            }
            break //28 wm d1tss
            case 'sisalinode': {
                if (!isCreator) return reply(mess.creator);

                async function getLinodeInfo() {
                    try {
                        const response = await fetch('https://api.linode.com/v4/account', {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${apilinode}`,
                            },
                        });

                        if (response.ok) {
                            const accountInfo = await response.json();
                            const linodeLimit = accountInfo.data.active_promo?.total || 0;
                            const linodesCount = accountInfo.data.active_promo?.remaining || 0;

                            return {
                                linodeLimit,
                                remainingLinodes: linodesCount,
                                totalLinodes: linodeLimit - linodesCount,
                            };
                        } else {
                            throw new Error('Gagal mendapatkan data akun Linode.');
                        }
                    } catch (error) {
                        throw error;
                    }
                }

                // Definisikan fungsi untuk mengeksekusi kasus "sisalinode"
                async function sisalinodeHandler() {
                    try {
                        if (!isCreator) {
                            return reply('Lu Siapanya Gua Anjg');
                        }

                        const linodeInfo = await getLinodeInfo();
                        reply(`*Sisa VPS Linode Yang Dapat Anda Buat: ${linodeInfo.remainingLinodes}*

*Total VPS Linode Yang Sudah Terbuat: ${linodeInfo.totalLinodes}*`);
                    } catch (error) {
                        reply(`Terjadi kesalahan: ${error.message}`);
                    }
                }

                sisalinodeHandler();
                break;
            }



            case 'rebuildlinode': {
                if (!isCreator) return reply(`Lu Siapanya Gua Anjg Gausah Nyuruh Nyuruh Gua Anjg`);

                let linodeId = args[0];
                if (!linodeId) return reply('ID Linode belum diberikan.');

                let password = args[1]; // Mengambil password dari argumen kedua (jika ada)
                if (!password) return reply('Password belum diberikan.');

                let rebuildVPS = async () => {
                    try {
                        // Rebuild VPS menggunakan API Linode
                        const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}/rebuild`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${apilinode}`
                            },
                            body: JSON.stringify({
                                image: 'linode/ubuntu20.04', // Ganti dengan ID atau label image yang ingin digunakan untuk rebuild
                                root_pass: password // Menggunakan password yang diberikan
                            })
                        });

                        if (response.ok) {
                            reply('Rebuild VPS berhasil dimulai.');

                            // Mendapatkan informasi VPS setelah rebuild
                            const vpsInfo = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
                                method: 'GET',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': `Bearer ${apilinode}`
                                }
                            });

                            if (vpsInfo.ok) {
                                const vpsData = await vpsInfo.json();
                                const ipAddress = vpsData.ipv4[0] || 'Tidak ada IP';

                                const textvps = `*VPS SUKSES REBUILD*\nIP VPS: ${ipAddress}\nSYSTEM IMAGE: Ubuntu 20.04\nPASSWORD: ${password}`;
                                await sleep(60000);
                                conn.sendMessage(m.chat, {
                                    text: textvps
                                });
                            } else {
                                reply('Gagal mendapatkan informasi VPS setelah rebuild.');
                            }
                        } else {
                            const errorData = await response.json();
                            reply('Gagal melakukan rebuild VPS:', errorData.errors[0].reason);
                        }
                    } catch (error) {
                        reply('Terjadi kesalahan saat melakukan rebuild VPS:', error.message);
                    }
                };

                rebuildVPS();
                break;
            }

            case 'linode8gb': {
                if (!isCreator) return reply(mess.creator);
                try {
                    let linodeData = {
                        label: `${args[0]}`,
                        region: 'ap-south', // Ganti dengan region yang diinginkan
                        type: 'g6-standard-4', // Spesifikasi 8GB RAM 4 Core CPU
                        image: 'linode/ubuntu20.04', // Ganti dengan image yang diinginkan
                        root_pass: generateRandomPassword(),
                        stackscript_id: null,
                        authorized_keys: null,
                        backups_enabled: false
                    };

                    const response = await fetch('https://api.linode.com/v4/linode/instances', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${apilinode}`
                        },
                        body: JSON.stringify(linodeData)
                    });

                    const responseData = await response.json();

                    if (response.ok) {
                        const linodeId = responseData.id;

                        // Menunggu hingga Linode selesai dibuat
                        reply(`Tunggu Sebentar...`);
                        await new Promise(resolve => setTimeout(resolve, 60000));

                        // Mengambil informasi lengkap tentang Linode
                        const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${apilinode}`
                            }
                        });

                        const linodeInfo = await linodeResponse.json();
                        const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

                        let messageText = `Linode berhasil dibuat!\n\n`;
                        messageText += `ID: ${linodeId}\n`;
                        messageText += `IP Linode: ${ipAddress}\n`;
                        messageText += `Password: ${linodeData.root_pass}\n`;

                        await conn.sendMessage(m.chat, {
                            text: messageText
                        });
                    } else {
                        throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
                    }
                } catch (err) {
                    console.error(err);
                    reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
                }
            }
            break;

            case 'linode16gb': {
                if (!isCreator) return reply(mess.creator);
                try {
                    let linodeData = {
                        label: `${args[0]}`,
                        region: 'ap-south',
                        type: 'g6-standard-8',
                        image: 'linode/ubuntu20.04',
                        root_pass: generateRandomPassword(),
                        stackscript_id: null,
                        authorized_keys: null,
                        backups_enabled: false
                    };

                    const response = await fetch('https://api.linode.com/v4/linode/instances', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${apilinode}`
                        },
                        body: JSON.stringify(linodeData)
                    });

                    const responseData = await response.json();

                    if (response.ok) {
                        const linodeId = responseData.id;

                        // Menunggu hingga Linode selesai dibuat
                        reply(`Tunggu Sebentar...`);
                        await new Promise(resolve => setTimeout(resolve, 60000));

                        // Mengambil informasi lengkap tentang Linode
                        const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${apilinode}`
                            }
                        });

                        const linodeInfo = await linodeResponse.json();
                        const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

                        let messageText = `Linode berhasil dibuat!\n\n`;
                        messageText += `ID: ${linodeId}\n`;
                        messageText += `IP Linode: ${ipAddress}\n`;
                        messageText += `Password: ${linodeData.root_pass}\n`;

                        await conn.sendMessage(m.chat, {
                            text: messageText
                        });
                    } else {
                        throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
                    }
                } catch (err) {
                    console.error(err);
                    reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
                }
            }
            break;

            case 'cekvpslinode': {
                if (!isCreator) return reply('Maaf, perintah ini hanya untuk pemilik.');

                let linodeId = args[0];
                if (!linodeId) return reply('ID Linode belum diberikan.');

                // Mendapatkan informasi VPS Linode berdasarkan ID
                const getLinodeInfo = async (linodeId) => {
                    try {
                        const apiUrl = `https://api.linode.com/v4/linode/instances/${linodeId}`;
                        const response = await fetch(apiUrl, {
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${apilinode}`
                            }
                        });

                        if (response.ok) {
                            const linodeInfo = await response.json();

                            const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode
                            const ram = `${linodeInfo.specs.memory / 1024} GB`; // RAM VPS dalam GB
                            const os = linodeInfo.image.distribution; // Nama OS
                            const cpu = `${linodeInfo.specs.vcpus} vCPUs`; // Jumlah vCPUs
                            const storage = linodeInfo.specs.disk; // Kapasitas penyimpanan
                            const status = linodeInfo.status; // Status VPS

                            const createDate = new Date(linodeInfo.created); // Tanggal pembuatan VPS
                            const formattedCreateDate = createDate.toLocaleDateString();

                            return {
                                linodeid: linodeInfo.id,
                                label: linodeInfo.label,
                                ip: ipAddress,
                                ram,
                                os,
                                cpu,
                                storage,
                                status,
                                createDate: formattedCreateDate
                            };
                        } else {
                            const errorData = await response.json();
                            throw new Error(`Gagal memeriksa detail Linode: ${errorData.errors[0].reason}`);
                        }
                    } catch (error) {
                        throw new Error(`Terjadi kesalahan saat memeriksa detail Linode: ${error.message}`);
                    }
                };

                getLinodeInfo(linodeId)
                    .then((info) => {
                        let textku = `*DETAIL VPS LINODE*\nLinode Id: ${info.linodeid}\nLabel: ${info.label}\nIP: ${info.ip}\nRAM: ${info.ram}\nOS: ${info.os}\nCPU: ${info.cpu}\nStorage: ${info.storage}\nStatus: ${info.status}\nCreate On: ${info.createDate}\n`;
                        conn.sendMessage(m.chat, {
                            text: textku
                        });
                    })
                    .catch((err) => {
                        reply(err);
                        conn.sendMessage(m.chat, {
                            text: 'Terjadi kesalahan saat memeriksa detail VPS Linode.'
                        });
                    });

                break;
            }

            case 'linode2gb': {
                if (!isCreator) return reply(mess.creator);
                try {
                    let linodeData = {
                        label: `${args[0]}`,
                        region: 'ap-south', // Ganti dengan region yang diinginkan
                        type: 'g6-standard-1', // Spesifikasi 1GB RAM 1 Core CPU
                        image: 'linode/ubuntu20.04', // Ganti dengan image yang diinginkan
                        root_pass: generateRandomPassword(),
                        stackscript_id: null,
                        authorized_keys: null,
                        backups_enabled: false
                    };

                    const response = await fetch('https://api.linode.com/v4/linode/instances', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${apilinode}`
                        },
                        body: JSON.stringify(linodeData)
                    });

                    const responseData = await response.json();

                    if (response.ok) {
                        const linodeId = responseData.id;

                        // Menunggu hingga Linode selesai dibuat
                        reply(`Tunggu Sebentar...`);
                        await new Promise(resolve => setTimeout(resolve, 60000));

                        // Mengambil informasi lengkap tentang Linode
                        const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${apilinode}`
                            }
                        });

                        const linodeInfo = await linodeResponse.json();
                        const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

                        let messageText = `Linode berhasil dibuat!\n\n`;
                        messageText += `ID: ${linodeId}\n`;
                        messageText += `IP Linode: ${ipAddress}\n`;
                        messageText += `Password: ${linodeData.root_pass}\n`;

                        await conn.sendMessage(m.chat, {
                            text: messageText
                        });
                    } else {
                        throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
                    }
                } catch (err) {
                    console.error(err);
                    reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
                }
            }
            break;

case 'prospek': {
    if (!isCreator) return replyviex('❌ Khusus owner.');

    if (!text) return m.reply('❗ Format salah!\nContoh:\n.prospek Nama|628xxx|pending|Leasing|100000000|20000000|5000000|50000');

    const [nama, nomor, status, leasing, otr, dpSystem, diskon, ongkir] = text.split('|').map(v => v.trim());

    if (!nama || !nomor || !status) return m.reply('❗ Nama, nomor, dan status wajib diisi.');

    const prospekFile = './database/prospek.json'; // ganti path sesuai struktur proyekmu

    if (!fs.existsSync(prospekFile)) fs.writeFileSync(prospekFile, JSON.stringify([]));

    const data = JSON.parse(fs.readFileSync(prospekFile));

    const dpBayar = (Number(dpSystem) || 0) - (Number(diskon) || 0);

    const newData = {
        nama,
        nomor,
        status,
        leasing: leasing || '-',
        otr: otr || '-',
        dpSystem: dpSystem || '-',
        diskon: diskon || '-',
        dpBayar,
        Ongkir: ongkir || '-'
    };

    data.push(newData);
    fs.writeFileSync(prospekFile, JSON.stringify(data, null, 2));

    m.reply(`✅ *Prospek Disimpan!*

📌 *Nama:* ${nama}
📞 *Nomor:* ${nomor}
📍 *Status:* ${status}
🏦 *Leasing:* ${leasing || '-'}

📄 *Rincian Deal:*
💸 *OTR:* ${otr || '-'}
💸 *DP System:* ${dpSystem || '-'}
🎰 *Diskon:* ${diskon || '-'}

———————————————
💸 *DP Bayar:* ${dpBayar.toLocaleString()}
🤑 *Ongkir:* ${ongkir || '-'}
`);
}
break
case 'listprospek': {
    if (!isCreator) return replyviex('❌ Khusus owner.');

  const prospekFile = './database/prospek.json';
  if (!fs.existsSync(prospekFile)) fs.writeFileSync(prospekFile, JSON.stringify([]));

  const data = JSON.parse(fs.readFileSync(prospekFile));
  if (!data.length) return m.reply('📂 Tidak ada data prospek.');

  let teks = `📋 *DAFTAR PROSPEK:*\n\n`;
  data.forEach((d, i) => {
    teks += `${i + 1}. *${d.nama}* (${d.nomor})
📍 Status: ${d.status}
🏦 Leasing: ${d.leasing}
💸 OTR: ${d.otr}
💰 DP System: ${d.dpSystem}
🎁 Diskon: ${d.diskon}
💳 DP Bayar: ${d.dpBayar}
🤑 Ongkir: ${d.Ongkir}
———————————————\n`;
  });

  m.reply(teks);
}
break;
case 'hapusprospek': {
    if (!isCreator) return replyviex('❌ Khusus owner.');
  if (!text) return m.reply('❗ Masukkan nomor HP yang ingin dihapus.');

  const prospekFile = './database/prospek.json';
  if (!fs.existsSync(prospekFile)) fs.writeFileSync(prospekFile, JSON.stringify([]));

  const data = JSON.parse(fs.readFileSync(prospekFile));
  const filtered = data.filter(d => d.nomor !== text.trim());

  if (filtered.length === data.length) return m.reply('❌ Nomor tidak ditemukan.');

  fs.writeFileSync(prospekFile, JSON.stringify(filtered, null, 2));
  m.reply(`🗑️ Data prospek dengan nomor ${text.trim()} berhasil dihapus.`);
}
break;
case 'cariprospek': {
  if (!isCreator) return replyviex('❌ Khusus owner.');
  if (!text) return m.reply('❗ Masukkan nama atau nomor untuk dicari.');

  const prospekFile = './database/prospek.json';
  if (!fs.existsSync(prospekFile)) fs.writeFileSync(prospekFile, JSON.stringify([]));

  const keyword = text.toLowerCase().trim();
  const data = JSON.parse(fs.readFileSync(prospekFile));

  const hasil = data.filter(d =>
    d.nama.toLowerCase().includes(keyword) ||
    d.nomor.includes(keyword)
  );

  if (!hasil.length) return m.reply('❌ Data tidak ditemukan.');

  let teks = `🔍 *HASIL PENCARIAN:*\n\n`;
  hasil.forEach((d, i) => {
    teks += `${i + 1}. *${d.nama}* (${d.nomor})
📍 Status: ${d.status}
🏦 Leasing: ${d.leasing}
💸 OTR: ${d.otr}
💰 DP System: ${d.dpSystem}
🎁 Diskon: ${d.diskon}
💳 DP Bayar: ${d.dpBayar}
🤑 Ongkir: ${d.Ongkir}
———————————————\n`;
  });

  m.reply(teks);
}
break;
            case 'linode4gb': {
                if (!isCreator) return reply(mess.creator);
                try {
                    let linodeData = {
                        label: `${args[0]}`,
                        region: 'ap-south', // Ganti dengan region yang diinginkan
                        type: 'g6-standard-2', // Spesifikasi 2GB RAM 1 Core CPU
                        image: 'linode/ubuntu20.04', // Ganti dengan image yang diinginkan
                        root_pass: generateRandomPassword(),
                        stackscript_id: null,
                        authorized_keys: null,
                        backups_enabled: false
                    };

                    const response = await fetch('https://api.linode.com/v4/linode/instances', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${apilinode}`
                        },
                        body: JSON.stringify(linodeData)
                    });

                    const responseData = await response.json();

                    if (response.ok) {
                        const linodeId = responseData.id;

                        // Menunggu hingga Linode selesai dibuat
                        reply(`Tunggu Sebentar...`);
                        await new Promise(resolve => setTimeout(resolve, 60000));

                        // Mengambil informasi lengkap tentang Linode
                        const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${apilinode}`
                            }
                        });

                        const linodeInfo = await linodeResponse.json();
                        const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

                        let messageText = `Linode berhasil dibuat!\n\n`;
                        messageText += `ID: ${linodeId}\n`;
                        messageText += `IP Linode: ${ipAddress}\n`;
                        messageText += `Password: ${linodeData.root_pass}\n`;

                        await conn.sendMessage(m.chat, {
                            text: messageText
                        });
                    } else {
                        throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
                    }
                } catch (err) {
                    console.error(err);
                    reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
                }
            }
            break;


            case 'saldolinode':
                if (!isCreator) return reply(mess.creator);

                // Endpoint untuk mengambil informasi saldo promosi Linode
                const linodePromotionsEndpoint = 'https://api.linode.com/v4/profile';

                // Konfigurasi untuk melakukan permintaan ke API Linode
                const config = {
                    headers: {
                        'Authorization': `Bearer ${apilinode}`
                    }
                };

                // Mengambil informasi saldo promosi dari Linode
                axios.get(linodePromotionsEndpoint, config)
                    .then(response => {
                        // Periksa apakah saldo promosi tersedia dalam respons
                        if (response.data && Array.isArray(response.data.data)) {
                            // Saldo promosi dapat ada dalam elemen pertama jika ada
                            const saldoPromosi = response.data.data[0].balance;
                            const teksSaldo = `Sisa Kredit Promosi Linode Dalam Akun Anda Adalah $${saldoPromosi}`;
                            reply(teksSaldo);
                        } else {
                            reply('Informasi saldo promosi tidak ditemukan atau akun tidak memiliki saldo promosi.');
                        }
                    })
                    .catch(error => {
                        console.error(error);
                        reply('Terjadi kesalahan saat mengambil informasi saldo promosi.');
                    });

                break;
            case 'resetpassword': {
                if (!isCreator) return reply(mess.creator);
                let linodeId = args[0];
                let newPassword = args[1];

                if (!linodeId || !newPassword) {
                    return reply("Format: !resetpassword [Linode ID] [New Password]");
                }

                // Periksa apakah kata sandi memenuhi persyaratan keamanan yang diharapkan
                if (newPassword.length < 8) {
                    return reply("Kata sandi harus memiliki setidaknya 8 karakter.");
                }

                try {
                    const resetPassword = async () => {
                        try {
                            const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}/password`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': `Bearer ${apilinode}`
                                },
                                body: JSON.stringify({
                                    root_pass: newPassword
                                })
                            });

                            if (response.ok) {
                                reply(`Kata sandi VPS Linode ID ${linodeId} berhasil direset.`);
                            } else {
                                const responseData = await response.json();
                                throw new Error(`Gagal mereset kata sandi VPS Linode: ${responseData.errors[0].reason}`);
                            }
                        } catch (error) {
                            reply(`Terjadi kesalahan saat mereset kata sandi VPS Linode: ${error}`);
                        }
                    };

                    resetPassword();
                } catch (err) {
                    console.error(err);
                    reply(`Terjadi kesalahan saat mereset kata sandi VPS Linode: ${err}`);
                }
            }
            break;




            case 'listlinode': {
                if (!isCreator) return reply(mess.creator);
                try {
                    const getLinodes = async () => {
                        try {
                            const response = await fetch('https://api.linode.com/v4/linode/instances', {
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': `Bearer ${apilinode}`
                                }
                            });
                            const data = await response.json();
                            return data.data || [];
                        } catch (error) {
                            reply('Error fetching Linodes: ' + error);
                            return [];
                        }
                    };

                    getLinodes().then(linodes => {
                        let totalvps = linodes.length;
                        let message = `List VPS Linode Anda: ${totalvps}\n\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;

                        if (linodes.length === 0) {
                            message += 'Tidak ada VPS yang tersedia.';
                        } else {
                            linodes.forEach(linode => {
                                message += `- Linode Id: ${linode.id}\n- Label: ${linode.label}\n- Region: ${linode.region}\n- IP: ${linode.ipv4[0]}\n- Ram: ${linode.specs.memory / 1024} GB\n- Cpu: ${linode.specs.vcpus} CPU\n- Status: ${linode.status}\n- Harga: $\n▬▬▭▬▭▬▭▬▭▬▭▬\n`;
                            });
                        }
                        conn.sendMessage(m.chat, {
                            text: message
                        });
                    });
                } catch (err) {
                    reply('Terjadi kesalahan saat mengambil data Linode: ' + err);
                }
            }
            break;
            case 'offlinode': {
                if (!isCreator) return reply(`Sok Asik Anjg`);

                let linodeId = args[0];
                if (!linodeId) return reply('ID Linode belum diberikan.');

                async function turnOffLinode() {
                    try {
                        const response = await axios.post(
                            `https://api.linode.com/v4/linode/instances/${linodeId}/shutdown`, {}, {
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': `Bearer ${apilinode}`,
                                },
                            }
                        );

                        if (response.status === 200) {
                            reply('VPS (Linode) sedang dimatikan...');
                        } else {
                            reply('Gagal mematikan VPS (Linode).');
                        }
                    } catch (error) {
                        reply('Terjadi kesalahan saat mematikan VPS (Linode):', error.message);
                    }
                }

                turnOffLinode();
            }
            break;


            case 'onlinode': {
                if (!isCreator) return reply(`Sok Asik Anjg`);

                let linodeId = args[0];
                if (!linodeId) return reply('ID Linode belum diberikan.');

                async function turnOnLinode() {
                    try {
                        const response = await axios.post(
                            `https://api.linode.com/v4/linode/instances/${linodeId}/boot`, {}, {
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': `Bearer ${apilinode}`,
                                },
                            }
                        );

                        if (response.status === 200) {
                            reply('VPS (Linode) sedang diaktifkan...');
                        } else {
                            reply('Gagal mengaktifkan VPS (Linode).');
                        }
                    } catch (error) {
                        reply('Terjadi kesalahan saat mengaktifkan VPS (Linode):', error.message);
                    }
                }

                turnOnLinode();
            }
            break;
            case "rebootlinode": {
                if (!isCreator) return reply(`Sok Asik Anjg`);

                let linodeId = args[0];
                if (!linodeId) return reply('ID Linode belum diberikan.');

                async function rebootLinode() {
                    try {
                        const response = await axios.post(
                            `https://api.linode.com/v4/linode/instances/${linodeId}/reboot`, {}, {
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': `Bearer ${apilinode}`,
                                },
                            }
                        );

                        if (response.status === 200) {
                            reply('VPS (Linode) sedang direboot...');
                        } else {
                            reply('Gagal me-reboot VPS (Linode).');
                        }
                    } catch (error) {
                        reply('Terjadi kesalahan saat me-reboot VPS (Linode):', error.message);
                    }
                }

                rebootLinode();
            }
            break;
            
            
            // ───────────────────────────────────────────────────────────────────────────────乂 🥀 ANONYMOUD MENU ───────────────────────────────────────────────────────────────乂 \\    
case 'menfes': {
  if (!text.includes('|')) return reply('Format Salah! Contoh: .menfes @tag|Nama Kamu|Isi Pesan');

  let [tujuanTag, namaSamaran, isiPesan] = text.split('|');
  let tujuan = tujuanTag.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

  if (!tujuan || !namaSamaran || !isiPesan) return reply('Semua Kolom Wajib Diisi!');

  let pengirim = m.sender;

  let pesan = `*📩 Pesan Menfes*\nDari: *${namaSamaran}*\nUntuk: @${tujuan.split('@')[0]}\n\n_${isiPesan}_\n\nBalas Menfes Ini Pakai Perintah:\n.balasmenfes isi_balasannya\n\n#menfes_from:${pengirim}`;

  await conn.sendMessage(tujuan, {
    text: pesan,
    mentions: [tujuan],
    contextInfo: {
      externalAdReply: {
        title: 'Menfes Message',
        body: `Pesan Rahasia Dari ${namaSamaran}`,
        mediaType: 1,
        sourceUrl: '',
        renderLargerThumbnail: true
      }
    }
  });

  reply(`Sukses Mengirim Menfes Ke @${tujuan.split('@')[0]}`, { mentions: [tujuan] });
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case 'balasmenfes': {
  if (!m.quoted) return reply('Balas Menfes Nya!');
  if (!text) return reply('Mana Isi Balasannya');

  let tag = m.quoted?.text?.match(/#menfes_from:(\d{5,})@?/)
  if (!tag) return reply('Gagal Mengambil Pengirim Asli! Menfes Tidak Valid Atau Tidak Ada Tag.');

  let jid = `${tag[1]}@s.whatsapp.net`;

  await conn.sendMessage(jid, {
    text: `*📩 Balasan Menfes*\nDari: @${m.sender.split('@')[0]}\n\n_${text}_`,
    mentions: [m.sender]
  });

  reply('Sukses Mengirim Balasan Menfes!');
}
db.data.users[m.sender].exp += await randomNomor(60)
break;        
case 'request':
case 'saran': {
if (!text) return m.reply('Berikan Penjelasan, Apa Yang Ingin Kamu Sarankan.');

let nomor = m.sender.split('@')[0];
permintaan[nomor] = {
  text: text,
  timestamp: new Date(),
  msgId: m.key.id,
  jid: m.key.remoteJid
};
fs.writeFileSync('./database/permintaan.json', JSON.stringify(permintaan, null, 2));
conn.sendMessage("6288286624778@s.whatsapp.net", {
  text: `Request Baru\nNomor: ${nomor}\nTeks: ${text}`
}, {quoted: m});
await m.reply('Permintaan Berhasil Terkirim!');
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case 'lapor':
case 'report': {
if (!text) return m.reply('Berikan Penjelasan, Bug Apa Yang Kamu Temui');

let nomor = m.sender.split('@')[0];
laporan[nomor] = {
  text: text,
  timestamp: new Date(),
  msgId: m.key.id,
  jid: m.key.remoteJid
};
fs.writeFileSync('./database/laporan.json', JSON.stringify(laporan, null, 2));
conn.sendMessage("6288286624778@s.whatsapp.net", {
  text: `*Laporan Baru*\nNomor: ${nomor}\nTeks: ${text}`
}, {quoted: m});
await m.reply('Laporan Berhasil Terkirim!');
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case 'balas':
case 'reply': {
let nomor = text.split(' ')[0];
let pesan = text.split(' ').slice(1).join(' ');

if (!laporan[nomor] && !permintaan[nomor]) return m.reply('Nomor Tidak Ditemukan Dalam Laporan Atau Request');

let target = laporan[nomor] || permintaan[nomor];
let jid = nomor + '@s.whatsapp.net';
let quoted = {
  key: {
    remoteJid: target.jid,
    id: target.msgId,
    fromMe: false,
    participant: jid
  },
  message: {
    conversation: target.text
  }
};

conn.sendMessage(jid, {text: `Balasan Dari Owner:\n${pesan}`}, {quoted});
m.reply('Balasan Berhasil Dikirim Dan Dihapus!');
if (laporan[nomor]) delete laporan[nomor];
if (permintaan[nomor]) delete permintaan[nomor];
fs.writeFileSync('./database/laporan.json', JSON.stringify(laporan, null, 2));
fs.writeFileSync('./database/permintaan.json', JSON.stringify(permintaan, null, 2));
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case 'laporan':
case 'reports': {
let teks = 'Laporan Yang Belum Dibalas:\n\n';
for (let no in laporan) {
teks += `Nomor: ${no}\nTeks: ${laporan[no].text}\nWaktu: ${laporan[no].timestamp}\n\n`;
}
m.reply(teks || 'Tidak Ada Laporan.');
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case 'cekrequest':
case 'ceksaran': {
let teks = 'Permintaan Yang Belum Dibalas:\n\n';
for (let no in permintaan) {
teks += `Nomor: ${no}\nTeks: ${permintaan[no].text}\nWaktu: ${permintaan[no].timestamp}\n\n`;
}
m.reply(teks || 'Tidak Ada Permintaan.');
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case 'hapuslaporan':
case 'delreports': {
if (!text) return m.reply('Masukkan Nomor Yang Ingin Dihapus!');
if (!laporan[text]) return m.reply('Laporan Tidak Ditemukan.');
delete laporan[text];
fs.writeFileSync('./database/laporan.json', JSON.stringify(laporan, null, 2));
m.reply('Laporan Berhasil Dihapus!');
}
db.data.users[m.sender].exp += await randomNomor(60)
break;


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 STORE MENU ───────────────────────────────────────────────────────────────乂 \\    
  case 'addlist':
    {
      if (!text.includes('|')) return m.reply('Contoh:\n.addlist item | 10000');
      let [nama, harga] = text.split('|').map(a => a.trim());
      if (!nama || !harga) return m.reply('Format salah. Contoh: .addlist Pulsa 10k | 10000');

      if (!storeDB[m.sender]) storeDB[m.sender] = [];
      storeDB[m.sender].push({ nama, harga });
      await saveStore();
      m.reply(`✅ Berhasil menambahkan:\n*${nama}* seharga *Rp${harga}*`);
    }
    break;

  case 'dellist':
    {
      if (!text) return m.reply('Contoh:\n.dellist 1');
      let index = parseInt(text) - 1;
      let userStore = storeDB[m.sender];

      if (!userStore || userStore.length === 0) return m.reply('Kamu belum punya list jualan.');
      if (isNaN(index) || index < 0 || index >= userStore.length) return m.reply('Nomor list tidak valid.');

      let removed = userStore.splice(index, 1);
      await saveStore();
      m.reply(`✅ Berhasil menghapus: *${removed[0].nama}*`);
    }
    break;

  case 'list':
    {
      let target = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
      let userStore = storeDB[target];

      if (!userStore || userStore.length === 0) return m.reply('List jualan kosong.');

      let list = userStore.map((item, i) => `*${i + 1}.* ${item.nama} - Rp${item.harga}`).join('\n');
      m.reply(`🛒 Daftar Jualan:\n\n${list}`);
    }
    break;
case "proses": {
if (!isCreator) return reply(mess.creator)
if (!q) return reply("jasa install panel")
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${cehs}`
await conn.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Dana Masuk ✅`, 
body: `© Powered By ${ownername}`, 
thumbnailUrl: "https://files.catbox.moe/ugopqb.jpg", 
sourceUrl: ``,
}}}, {quoted: null})
}
break

case 'done': {
if (!isCreator) return reply(mess.creator)
if (!q) return reply("jasa install panel")
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${ceha}`
await conn.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Transaksi Done ✅`, 
body: `© Powered By ${ownername}`, 
thumbnailUrl: 'https://img0.pixhost.to/images/919/557813345conndzz.jpg', 
sourceUrl: ``,
}}}, {quoted: null})
}
break
case 'batal': {
if (!isCreator) return reply(mess.creator)
if (!q) return reply("jasa install panel")
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${ceha}`
await conn.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Transaksi Pending`, 
body: `© Powered By ${global.ownername}`, 
thumbnailUrl: 'https://img0.pixhost.to/images/919/557813345conndzz.jpg', 
sourceUrl: ``,
}}}, {quoted: null})
}
break
case 'acc': case 'addsaldo':{
if (!isCreator) return reply(mess.creator)
if (!q.split(",")[0]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
addSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), dbsaldo)
reply(`「 *SALDO USER* 」
⭔Nama: @${m.sender.split("@")[0]}
⭔Nomer: @${q.split(",")[0]}
⭔Tanggal: ${hariini}
⭔Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", dbsaldo))}, `)
 }
 break
        case 'kirim': {       
if (!isCreator) return reoly(mess.creator)
 let messageText = `「 DEPOSIT SUKSES 」
⭔Nama: @${m.sender.split("@")[0]}
⭔Nomer: @${q.split(",")[0]}
⭔Tanggal: ${hariini}
⭔Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", dbsaldo))}

Deposit kamj teleh di konfomasi sama admin kami, silahkan cek saldo anda *#saldo*`
  let targetNumber = `${q.split(",")[0]}@s.whatsapp.net`;

  conn.sendMessage(targetNumber, {
    text: `*${messageText}*`,
    mentions: [m.sender]
  }, {
    quoted: m
  }).then(() => {
    reply('Acc Berhasil Tuan✅');
  }).catch(() => {
    reply('Gagal mengirim pesan!');
  });
}
break
case 'minsaldo':
if (!isCreator) return reply(mess.creator)
if (!q.split(",")[0]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (cekSaldo(q.split(",")[0]+"@s.whatsapp.net", dbsaldo) < q.split(",")[1] && cekSaldo(q.split(",")[0]+"@s.whatsapp.net", dbsaldo) !== 0) return m.reply(`Dia saldonya ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", dbsaldo)}, jadi jangan melebihi ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", dbsaldo)} yah`)
minSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), dbsaldo)
reply(`*USER SALDO*
 • ID : ${q.split(",")[0]}
 • Nomor : ${q.split(",")[0]}
 • Tanggal : ${hariini}
 • Saldo : Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", dbsaldo))}, `)
break
case "deposit":
case "depo": {
    const amount = parseInt(text.trim());

    if (!amount || isNaN(amount) || amount % 10000 !== 0) {
        return m.reply("Masukkan nominal *kelipatan 10.000*.\nContoh: .deposit 20000");
    }

    if (fs.existsSync(depositPath + m.sender.split("@")[0] + ".json")) {
        return m.reply("Proses deposit kamu sebelumnya belum selesai.\n\nKetik 'Batal' untuk membatalkan.");
    }

    const saldoMasuk = amount / 2;
    const axios = require('axios');
    const createPaymentUrl = `https://restapi.kyyapiz.biz.id/orderkuota/createpayment?apikey=${global.kyyapi}&amount=${amount}&codeqr=${global.qriscode}`;

    let res;
    try {
        res = await axios.get(createPaymentUrl);
    } catch (e) {
        return m.reply("Gagal menghubungi server pembayaran.");
    }

    const { success, data } = res.data;
    if (!success) return m.reply("Gagal membuat pembayaran.");

    const depositData = {
        ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
        session: "waiting_payment",
        date: new Date().toLocaleDateString("ID", { timeZone: "Asia/Jakarta" }),
        number: m.sender,
        payment: "QRIS",
        data: {
            amountdeposit: saldoMasuk,
            payment_amount: amount,
            merchant: data.merchant,
            keyorkut: data.keyorkut,
            qris: data.qris
        }
    };

    fs.writeFileSync(depositPath + m.sender.split("@")[0] + ".json", JSON.stringify(depositData, null, 2));

    m.reply(`🧾 *QRIS untuk Pembayaran*\n\n💳 Jumlah: Rp${amount}\n💰 Saldo Masuk: Rp${saldoMasuk}\n\nScan QR berikut lalu kirim bukti:\n${data.qris}\n\nKetik *.bukti* setelah pembayaran!`);
}
break;
case "buypanel": {
if (!isGroup) return m.reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.data.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!text) return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Ram Panel',
          sections: [
            {
              title: 'List Ram Server Panel',
              highlight_label: '',
              rows: [
                {
                  title: 'Ram 1GB', 
                  description: "Rp1.000", 
                  id: '.buypanel 1gb'
                },
                {
                  title: 'Ram 2GB', 
                  description: "Rp2.000", 
                  id: '.buypanel 2gb'
                },
                {
                  title: 'Ram 3GB', 
                  description: "Rp3.000", 
                  id: '.buypanel 3gb'
                },
                {
                  title: 'Ram 4GB', 
                  description: "Rp4.000", 
                  id: '.buypanel 4gb'
                },      
                {
                  title: 'Ram Unlimited', 
                  description: "Rp5000", 
                  id: '.buypanel unlimited'
                },                                       
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `Feature Generated By Iky × Hikar`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Ram Server Panel Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
let Obj = {}
let cmd = text.toLowerCase()
if (cmd == "1gb") {
Obj.ram = "1000"
Obj.disk = "1000"
Obj.cpu = "0"
Obj.harga = "1000"
} else if (cmd == "2gb") {
Obj.ram = "2000"
Obj.disk = "1000"
Obj.cpu = "0"
Obj.harga = "2000"
} else if (cmd == "3gb") {
Obj.ram = "3000"
Obj.disk = "2000"
Obj.cpu = "0"
Obj.harga = "3000"
} else if (cmd == "4gb") {
Obj.ram = "4000"
Obj.disk = "2000"
Obj.cpu = "0"
Obj.harga = "4000"
} else if (cmd == "unli" || cmd == "unlimited") {
Obj.ram = "0"
Obj.disk = "0"
Obj.cpu = "0"
Obj.harga = "5000"
} else return m.reply(teks)

const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)

const get = await axios.get(`https://linecloud.my.id/api/orkut/createpayment?apikey=Line&amount=${amount}&codeqr=${UrlQr}`)

const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Panel Pterodactyl
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: ``,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.data.users[m.sender].status_deposit = true
db.data.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.data.users[m.sender].status_deposit == true && db.data.users[m.sender].saweria && db.data.users[m.sender].saweria.amount == db.data.users[m.sender].saweria.amount) {
await conn.sendMessage(db.data.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.data.users[m.sender].saweria.msg})
await conn.sendMessage(db.data.users[m.sender].saweria.chat, { delete: db.data.users[m.sender].saweria.msg.key })
db.data.users[m.sender].status_deposit = false
await clearInterval(db.data.users[m.sender].saweria.exp)
delete db.data.users[m.sender].saweria
}
}, 300000)
}
}

await db.data.users[m.sender].saweria.exp()

while (db.data.users[m.sender].status_deposit == true && db.data.users[m.sender].saweria && db.data.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://linecloud.my.id/api/orkut/cekstatus?apikey=Line&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.data.users[m.sender].saweria && req?.amount == db.data.users[m.sender].saweria.amount) {
db.data.users[m.sender].status_deposit = false
await clearInterval(db.data.users[m.sender].saweria.exp)
await conn.sendMessage(db.data.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.data.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.data.users[m.sender].saweria.amount)}
 *• Barang :* Panel Pterodactyl
`}, {quoted: db.data.users[m.sender].saweria.msg})
let username = crypto.randomBytes(4).toString('hex')
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": Obj.ram,
"swap": 0,
"disk": Obj.disk,
"io": 500,
"cpu": Obj.cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang = db.data.users[m.sender].saweria.chat
var tekspanel = `*Data Akun Panel Kamu*

*ID Server (${server.id})* 
*Username :* ${user.username}
*Password :* ${password}

*Spesifikasi Server*
* Ram : *${Obj.ram == "0" ? "Unlimited" : Obj.ram.split("").length > 4 ? Obj.ram.split("").slice(0,2).join("") + "GB" : Obj.ram.charAt(0) + "GB"}*
* Disk : *${Obj.disk == "0" ? "Unlimited" : Obj.disk.split("").length > 4 ? Obj.disk.split("").slice(0,2).join("") + "GB" : Obj.disk.charAt(0) + "GB"}*
* CPU : *${Obj.cpu == "0" ? "Unlimited" : Obj.cpu+"%"}*
* ${global.domain}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`
await fs.writeFileSync("./akunpanel.txt", tekspanel)
await conn.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: tekspanel}, {quoted: null})
await fs.unlinkSync("./akunpanel.txt")
await conn.sendMessage(db.data.users[m.sender].saweria.chat, { delete: db.data.users[m.sender].saweria.msg.key })
delete db.data.users[m.sender].saweria
}
}

}
break
case "buyvps": {
if (!isGroup) return m.reply("Pembelian vps hanya bisa di dalam private chat")
if (db.data.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")

if (!text) return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Spesifikasi Vps',
          sections: [
            {
              title: 'List Ram Server Vps',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Ram 16 & Cpu 4', 
                  description: "Rp55.000", 
                  id: '.buyvps 4'
                },
                {
                  title: 'Ram 2 & Cpu 1', 
                  description: "Rp25.000", 
                  id: '.buyvps 1'
                },
                {
                  title: 'Ram 4 & Cpu 2', 
                  description: "Rp35.000", 
                  id: '.buyvps 2'
                },
                {
                  title: 'Ram 8 & Cpu 4', 
                  description: "Rp45.000", 
                  id: '.buyvps 3'
                }                       
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `Feature Generated By Iky × Hikari`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Ram Server Vps Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
tek = text.toLowerCase()
let Obj = {}

    if (tek == "1") {
    Obj.images = "s-1vcpu-2gb"
    Obj.harga = "25000"
    } else if (tek == "2") {
    Obj.images = "s-2vcpu-4gb"
    Obj.harga = "35000"
    } else if (tek == "3") {
    Obj.imagess = "s-4vcpu-8gb"
    Obj.harga = "45000"
    } else if (tek == "4") {
    Obj.images = "s-4vcpu-16gb"
    Obj.harga = "55000"
    } else return m.reply(teks)
    
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://linecloud.my.id/api/orkut/createpayment?apikey=Line&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Vps Digital Ocean
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: ``,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.data.users[m.sender].status_deposit = true
db.data.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.data.users[m.sender].status_deposit == true && db.data.users[m.sender].saweria && db.data.users[m.sender].saweria.amount == db.data.users[m.sender].saweria.amount) {
await conn.sendMessage(db.data.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.data.users[m.sender].saweria.msg})
await conn.sendMessage(db.data.users[m.sender].saweria.chat, { delete: db.data.users[m.sender].saweria.msg.key })
db.data.users[m.sender].status_deposit = false
await clearInterval(db.data.users[m.sender].saweria.exp)
delete db.data.users[m.sender].saweria
}
}, 300000)
}
}

await db.data.users[m.sender].saweria.exp()
while (db.data.users[m.sender].status_deposit == true && db.data.users[m.sender].saweria && db.data.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://linecloud.my.id/api/orkut/cekstatus?apikey=Line&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.data.users[m.sender].saweria && req?.amount == db.data.users[m.sender].saweria.amount) {
db.data.users[m.sender].status_deposit = false
await clearInterval(db.data.users[m.sender].saweria.exp)
await conn.sendMessage(db.data.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.data.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.data.users[m.sender].saweria.amount)}
 *• Barang :* Vps Digital Ocean
`}, {quoted: db.data.users[m.sender].saweria.msg})
var orang = db.data.users[m.sender].saweria.chat
    let hostname = "#" + m.sender.split("@")[0]
    
    try {        
        let dropletData = {
            name: hostname,
            region: "sgp1", 
            size: Obj.images,
            image: 'ubuntu-20-04-x64',
            ssh_keys: null,
            backups: false,
            ipv6: true,
            user_data: null,
            private_networking: null,
            volumes: null,
            tags: ['T']
        };

        let password = await generateRandomPassword()
        dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

        let response = await fetch('https://api.digitalocean.com/v2/droplets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + global.apiDigitalOcean 
            },
            body: JSON.stringify(dropletData)
        });

        let responseData = await response.json();

        if (response.ok) {
            let dropletConfig = responseData.droplet;
            let dropletId = dropletConfig.id;

            // Menunggu hingga VPS selesai dibuat
            await m.reply(`Memproses pembuatan vps...`);
            await new Promise(resolve => setTimeout(resolve, 60000));

            // Mengambil informasi lengkap tentang VPS
            let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + global.apiDigitalOcean
                }
            });

            let dropletData = await dropletResponse.json();
            let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 
                ? dropletData.droplet.networks.v4[0].ip_address 
                : "Tidak ada alamat IP yang tersedia";

            let messageText = `VPS berhasil dibuat!\n\n`;
            messageText += `ID: ${dropletId}\n`;
            messageText += `IP VPS: ${ipVPS}\n`;
            messageText += `Password: ${password}`;

            await conn.sendMessage(orang, { text: messageText });
        } else {
            throw new Error(`Gagal membuat VPS: ${responseData.message}`);
        }
    } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
    }
await conn.sendMessage(db.data.users[m.sender].saweria.chat, { delete: db.data.users[m.sender].saweria.msg.key })
delete db.data.users[m.sender].saweria
}
}

}
break
case 'buyreseler': {
    const harga = 10000;
    const ppn = Math.floor(Math.random() * 100) + 1;
    const total = harga + ppn;

    const groupInvite = 'https://chat.whatsapp.com/HWDrNwgZCAE6VduHTqOlmP';

    try {
        const res = await fetch(`https://restapi.kyyapiz.biz.id/orderkuota/createpayment?apikey=${global.kyyapi}&amount=${total}&codeqr=${global.qriscode}`);
        const payData = await res.json();

        if (!payData.status) return reply('❌ Gagal membuat QRIS. Silakan coba lagi.');

        const { idtransaksi, expired, imageqris } = payData.result;
        const qrUrl = typeof imageqris === 'object' ? imageqris.url : imageqris; // ✅ perbaikan
        const expiredTime = new Date(expired).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });

        const textQris = `*💳 Detail Pembayaran Anda*\n\n` +
            `🆔 ID Transaksi: ${idtransaksi}\n` +
            `💰 Nominal: Rp ${harga.toLocaleString("id-ID")}\n` +
            `📊 PPN: Rp ${ppn.toLocaleString("id-ID")}\n` +
            `🧾 Total Bayar: Rp ${total.toLocaleString("id-ID")}\n\n` +
            `📌 Silakan scan QRIS sebelum *${expiredTime}* untuk menyelesaikan pembayaran.`;

        const msg = await conn.sendMessage(m.chat, { image: { url: qrUrl }, caption: textQris }, { quoted: m });

        let sukses = false;

        const cancelTimer = setTimeout(async () => {
            if (!sukses) {
                await conn.sendMessage(m.chat, { delete: msg.key });
                await conn.sendMessage(m.chat, { text: "⛔ Transaksi dibatalkan karena waktu habis." }, { quoted: m });
            }
        }, 5 * 60 * 1000); // 5 menit

        while (!sukses) {
            try {
                const cekRes = await fetch(`https://restapi.kyyapiz.biz.id/orderkuota/cekstatus?apikey=${global.kyyapi}&merchant=${global.merchan}&keyorkut=${global.keyorkut}`);
                const cekData = await cekRes.json();

                if (cekData.status && parseInt(cekData.result.amount) === total) {
                    sukses = true;
                    clearTimeout(cancelTimer);

                    const groupCode = 'HWDrNwgZCAE6VduHTqOlmP';
                    const groupJid = `${groupCode}@g.us`;

                    await conn.sendMessage(m.chat, {
                        text: '✅ Pembayaran berhasil!\nMemproses persetujuan masuk ke grup reseller...',
                    });

                    const pending = await conn.groupRequestParticipantsList(groupJid);
                    if (!pending.length) {
                        await conn.sendMessage(m.chat, {
                            text: '❗ Tidak ada permintaan gabung di grup.\nSilakan klik ulang link ini dan ajukan gabung:\n' + groupInvite
                        });
                        return;
                    }

                    for (let user of pending) {
                        await conn.groupRequestParticipantsUpdate(groupJid, [user.jid], 'approve');
                    }

                    await conn.sendMessage(m.chat, { text: '✅ Kamu telah disetujui masuk ke grup reseller.' });
                }
            } catch (err) {
                console.error("Cek status error:", err);
            }

            if (!sukses) await new Promise(res => setTimeout(res, 10000)); // cek tiap 10 detik
        }

    } catch (err) {
        console.error("Error buyreseler:", err);
        reply("❌ Terjadi kesalahan saat memproses permintaan Anda.");
    }
}
break;


// ───────────────────────────────────────────────────────────────────────────────乂 🥀 AI MENU ───────────────────────────────────────────────────────────────乂 \\            
case 'detailfoto': case "telusuriimg": {
 if (!m.quoted) return m.reply('Harap balas ke foto yang ingin dianalisis + pertanyaaan,gk pke pertanyaan gpp');
 let mime = (m.quoted.msg || m.quoted).mimetype || "";
 if (!mime.startsWith('image/')) return m.reply(`Kirim/Balas foto dengan caption ${prefix + command}\n\nExample: grok itu apa dengan reply foto`);
 const axios = require('axios');
 const FormData = require('form-data');
 const { writeFileSync, unlinkSync, createReadStream } = require('fs');
 const path = require('path');
 async function uguu(filePath) {
 try {
 const form = new FormData();
 form.append('files[]', createReadStream(filePath));
 const { data } = await axios.post('https://uguu.se/upload', form, {
 headers: { ...form.getHeaders() }
 });
 return data.files[0].url;
 } catch (err) {
 throw new Error(err.message);
 }
 }
 try {
 await conn.sendMessage(m.chat, { react: { text: '⏱️', key: m.key } });
 let mediaBuffer = await m.quoted.download();
 let ext = mime.split('/')[1] || "png";
 let tempFile = path.join(__dirname, `temp_${Date.now()}.${ext}`);
 writeFileSync(tempFile, mediaBuffer);
 let imageUrl = await uguu(tempFile);
 let pertanyaan = m.text.replace(`${prefix}${command}`, '').trim();
 if (!pertanyaan) return m.reply('Tolong masukkan pertanyaan');
 let sessionId = `${m.chat.replace(/[^a-zA-Z0-9]/g, '')}-${Date.now()}`;
 let apiUrl = `${global.fastres}/aillm/grok?ask=${encodeURIComponent(pertanyaan)}&imageUrl=${imageUrl}&style=Provide a formal response.&sessionId=${sessionId}`;
 let { data } = await axios.get(apiUrl);
 let result = data.result;
 await conn.sendMessage(m.chat, { text: result }, { quoted: m });
 await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
 unlinkSync(tempFile);
 } catch (error) {
 console.error('Error ini:', error);
 m.reply('Maaf, terjadi kesalahan saat memproses gambar. Silakan coba lagi nanti atau hubungi pemilik bot jika masalah berlanjut.');
 }
}
db.data.users[m.sender].exp += await randomNomor(60)
break
case 'aiedit': {
  if (!m.quoted) return reply(`Kirim atau Reply Foto dengan caption *${prefix + command}*`);
  let mime = (m.quoted.msg || m.quoted).mimetype || '';
  if (!/image/.test(mime)) return reply(`Kirim atau Reply Foto dengan caption *${prefix + command}*`);
  
  if (!args.join(' ')) return reply('Kirim atau Reply Foto dan sertakan prompt kustom di caption!');

  const prompt = encodeURIComponent(args.join(' ')); // Mengambil prompt dari argumen
  reply(mess.wait);
  
  const tempFile = path.join(__dirname, `temp_${Date.now()}.jpg`);

  try {
    let media = await m.quoted.download();
    fs.writeFileSync(tempFile, media);

    const uploadFileToUguu = async (filePath) => {
      return new Promise((resolve, reject) => {
        exec(`curl -s -F files[]=@${filePath} https://uguu.se/upload.php`, (err, stdout) => {
          if (err) return reject('Gagal mengunggah ke Uguu');
          try {
            let json = JSON.parse(stdout);
            resolve(json.files[0].url);
          } catch {
            reject('Gagal mengunggah ke Uguu');
          }
        });
      });
    };

    let uploadedUrl = await uploadFileToUguu(tempFile);
    let aiEditApi = `https://apizell.web.id/ai/editimg?imageUrl=${encodeURIComponent(uploadedUrl)}&prompt=${prompt}`;

    await conn.sendMessage(m.chat, {
      image: { url: aiEditApi },
      caption: '✅ Berikut hasil editan AI-mu!'
    }, { quoted: m });

    fs.unlinkSync(tempFile);
  } catch (e) {
    console.error(e);
    reply('Terjadi kesalahan saat memproses gambar.');
  }
}
db.data.users[m.sender].exp += await randomNomor(60)
break;

case "DORAEMONXUMARUai": {
    if (!q) {
        return m.reply(`*Contoh:* ${command} siapa kamu?`);
    }

    const customName = "DORAEMONXUMARU AI"; 
    const creator = "Kyy";
    const systemMessage = `Nama kamu sekarang adalah ${customName} dan kamu diciptakan oleh ${creator} Kamu Di Ciptakan Untuk Membantu, Menemani Dan Tempat Untuk Curhat`;

    const url = "https://velyn.biz.id/api/ai/aicustom";

    try {
        const response = await axios.get(url, {
            params: {
                prompt: q,
                system: systemMessage
            }
        });

        if (response.data && response.data.data) {
            conn.sendMessage(m.chat, { text: response.data.data }, { quoted: m });
        } else {
            throw new Error("Tidak ada respon dari API.");
        }
    } catch (error) {
        console.error("Error AI:", error);
        m.reply("Maaf, terjadi kesalahan saat menghubungi AI.");
    }
};
db.data.users[m.sender].exp += await randomNomor(60)
break
 case "ainsfw": {
 if (!text) return m.reply("Silakan masukkan prompt untuk menghasilkan gambar.");
 async function generateImage(prompt) {
 try {
 const url = `https://1yjs1yldj7.execute-api.us-east-1.amazonaws.com/default/ai_image?prompt=${encodeURIComponent(prompt)}&aspect_ratio=1:1&link=writecream.com`;
 const headers = {
 "User-Agent":
 "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
 "Referer": "https://www.writecream.com/ai-image-generator-free-no-sign-up/",
 };
 const axios = require("axios");
 const response = await axios.get(url, { headers });
 if (response.data && response.data.image_link) {
 conn.sendMessage(m.chat, { image: { url: response.data.image_link }, caption: `Berikut gambar untuk: *${text}*` }, { quoted: m });
 } else {
 m.reply("Gagal mendapatkan gambar.");
 }
 } catch (error) {
 m.reply("Terjadi kesalahan saat mengambil gambar.");
 console.error(error);
 }
 }
 generateImage(text);
}
db.data.users[m.sender].exp += await randomNomor(60)
 break
 case 'gptimage': {
    if (!text) return m.reply('Kasih Deks Gmabr ny\n\nExample : .gptimage long haired anime girl with blue eyes')
 
    m.reply('Wait...')
 
    const gpt1image = async (yourImagination) => {
        const headers = {
            "content-type": "application/json",
            "referer": "https://gpt1image.exomlapi.com/",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36"
        }
 
        const body = JSON.stringify({
            "prompt": yourImagination,
            "n": 1,
            "size": "1024x1024",
            "is_enhance": true,
            "response_format": "url"
        })
 
        const response = await fetch("https://gpt1image.exomlapi.com/v1/images/generations", {
            headers,
            body,
            method: "POST"
        })
 
        if (!response.ok) throw Error(`fetch gagal di alamat ${response.url} ${response.status} ${response.statusText}.`)
 
        const json = await response.json()
        const url = json?.data?.[0]?.url
 
        if (!url) throw Error("fetch berhasil tapi url result nya kosong" + (json.error ? ", error dari server : " + json.error : "."))
 
        return url
    }
 
    try {
        const imageUrl = await gpt1image(text)
        await conn.sendMessage(m.chat, {
            image: { url: imageUrl }
        }, { quoted: m })
    } catch (error) {
        m.reply(`${error.message}`)
    }
}
db.data.users[m.sender].exp += await randomNomor(60)
break;
case 'carbon':
    if (!text && !m.quoted) return m.reply('❌ Masukkan kode atau balas pesan berisi kode!');

    let code = text || m.quoted.text;
    if (!code) return m.reply('❌ Kode tidak valid!');

    try {
        let imgUrl = `${global.nekorin}/maker/carbonify?code=${encodeURIComponent(code)}`;
        await conn.sendMessage(m.chat, {
            image: { url: imgUrl },
            caption: '✅ Berikut hasil carbonify-nya!'
        }, { quoted: m });
    } catch (err) {
        console.error(err);
        m.reply('❌ Gagal mengambil gambar Carbonify!');
    }
    db.data.users[m.sender].exp += await randomNomor(60)
    break;
    case "autoaichat": {
    if (!text) return m.reply(`*Contoh:* .autoai *[on/off/reset]*`);

    if (text === "on") {
        globalAutoAIStatus = true;
        sessions = {}; 
        saveSession();
        return m.reply(`[ ✅ ] *Auto AI diaktifkan di semua chat!* Bot akan merespon otomatis di semua percakapan.`);
    } else if (text === "off") {
        globalAutoAIStatus = false;
        sessions = {}; 
        saveSession();
        return m.reply(`[ ❌ ] *Auto AI dimatikan di semua chat!* Bot hanya merespon jika dipanggil.`);
    } else if (text === "reset") {
        if (globalAutoAIStatus) {
            sessions = {};
            saveSession();
            return m.reply("♻️ *Seluruh riwayat chat AI telah direset!*");
        } else {
            return m.reply("⚠️ *Auto AI sedang tidak aktif!*");
        }
    }
}
break
case 'deepimg': {
 if (!text) return m.reply("Masukkan prompt gambar.")
 m.reply("Sedang memproses gambar, mohon tunggu...")

 try {
const axios = require('axios');
 let { data } = await axios.post("https://api-preview.chatgot.io/api/v1/deepimg/flux-1-dev", {
 prompt: text,
 size: "1024x1024",
 device_id: `dev-${Math.floor(Math.random() * 1000000)}`
 }, {
 headers: {
 "Content-Type": "application/json",
 Origin: "https://deepimg.ai",
 Referer: "https://deepimg.ai/"
 }
 })
 let imageUrl = data?.data?.images?.[0]?.url
 if (!imageUrl) return m.reply("Gagal membuat gambar. Coba ganti promptnya.")
 await conn.sendMessage(m.chat, { 
 image: { url: imageUrl }, 
 caption: `🖼️ *Gambar Berhasil Dibuat!*\n📜 *Prompt:* ${text}` 
 }, { quoted: m })
 } catch (err) {
 console.error(err.response ? err.response.data : err.message)
 m.reply("Terjadi kesalahan saat memproses gambar.")
 }
}
db.data.users[m.sender].exp += await randomNomor(60)
break
            case 'autoaigrup':
            case 'aigrup':
            case 'autoaigc': {
                if (!isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].autoaigc) return m.reply(`Udah aktif`)
                    db.data.chats[m.chat].autoaigc = true
                    m.reply('Successfully Activate Auto AI')
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].autoaigc) return m.reply(`Udah nonaktif`)
                    db.data.chats[m.chat].autoaigc = false
                    m.reply('Successfully Disabling Auto AI')
                } else {
                }
            }
            db.data.users[m.sender].exp += await randomNomor(20)
            break



case 'd1': {
                 if (!isCreator && !isPremium) return reply(mess.premium)
function subDomain1(host, ip) {
  return new Promise((resolve) => {
    let zone = "b2587cdf9e479c8b46ed087d12f45223";
    let apitoken = "9hGsAjWmzUo_KPTvADtpYd1ZN_AOE7WHBJvXCV0Y";
    let tld = "zans.my.id";
    axios
      .post(
        `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
        { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
        {
          headers: {
 Authorization: "Bearer " + apitoken,
 "Content-Type": "application/json",
          },
        }
      )
      .then((e) => {
        let res = e.data;
        if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = ${botname}\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
 break
 
           case 'd2': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "f374d347f22dc1b0ac208973f185c1f2";
               let apitoken = "m7Xe_0qhlv8enPURlO7UYRSR1-3C7u-uOUkZtvZa";
               let tld = "piwzstoreee.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = ${botname}\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
 break
           
  case 'd3': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "c1812c92fb249258e67a28573ca34344";
               let apitoken = "mqAjTHuT_GsaZsWcIjbllV-rrrtJHwyVxVeYlL1A";
               let tld = "piwzpediaaa.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = ${botname}\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
  break       
  
  case 'd4': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "3cea2e71ec2bc82ea7865da5999d04b1";
               let apitoken = "eyOrW0eUPe0VxhQzzubXhY1w8X_Z120crfqpsNwL";
               let tld = "piwzpanel.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = ${botname}\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
 break
 case 'd5': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "c2c8ddf4f1bfd0d0c11eb0ed83a634f9";
               let apitoken = "RHmElwWM5pEb3HsWi82uramdhi9wzDsaU8F9JV6F";
               let tld = "r0ulxye4.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = ${botname}\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
 break                                                                               
 
 case 'd6': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "7432f024eeeaa0367fd985a18b2729cc";
               let apitoken = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ";
               let tld = "lanzpanel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
  break  
case 'd7': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "891a2e5d4ac5b3db4fbcef8d9088ad38";
               let apitoken = "V2BCJ-jhHXQlkN5-_Jv-CuXEtJbLT9fo7NWAlMK2";
               let tld = "cpanel-vip.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
 break
           
     case 'd8': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a0cef62d7194b16e1706f5d48c41129a";
               let apitoken = "_xnkxZ50i8J5p0Y148oSlomu0NoIt2mTGWxu0CsR"
               let tld = "kukurahost.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
 break 
 case 'd9': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "5f4a582dd80c518fb2c7a425256fb491";
               let apitoken = "iQbJQgfe6kTyEfdOy_EV8UAHKj80VgQg4t6rTjby"
               let tld = "tokopanellku.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break


case 'd10': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "15b97d8a42af1c00a70070e577ce7301";
               let apitoken = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ"
               let tld = "kiospanell.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case 'd11': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e60307683c18389584e9ae2f9fa707b2";
               let apitoken = "9hc8x5B4TewRTpXxETV_laVGksk3MyCfBXOgHgmg"
               let tld = "moon-offc.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case 'd12': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ba364ec1df6998c10487aee2a61b7f0d";
               let apitoken = "hnM3i7bBHzcIRXqveYKR3KTnsfrkigkhar2vEUcP"
               let tld = "moon-offc.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break

case 'd13': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "2feafa10ec4054af7cb04b18515013e5";
               let apitoken = "8WA6BgIuvFO5AL3xJZf3bsM0ts8aIZiFbxj90icK"
               let tld = "tokopanellmurah.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break


case 'd14': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "2dc001900c742f289eef7dbae7ab784b";
               let apitoken = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ"
               let tld = "bisnispanel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
                
case  'd15': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "77c6588b3b36e74d07538e62ef91d6ba";
               let apitoken = "SgON4r6174fMe3h3B9wyP3caEtwUIfnVuNvSpl1k"
               let tld = "tokopanel.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd16': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "4049d75623d46e90d616fdf878a5ed84";
               let apitoken = "qwAWquCm1cqKEzZnZUEuAbfFq3PCOLleQZifxPog"
               let tld = "store-panel.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd17': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "8080d914883ed0b9e17d281f593df945";
               let apitoken = "BP2uUPgVfrM4pHW_ivo2AawAyiLqOMYoLYyS2BF7"
               let tld = "sellerpanel.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break

case  'd18': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "cada0ecef8f1e8d904435d469aef1b05";
               let apitoken = "54kx4yvi3CBqomC99WSaqZo9tbxHoe9U-ncBIVMx"
               let tld = "mypanel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd19': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d318f96a6327c5340d136415e860f545";
               let apitoken = "RTe9hBdh_-nt0wzOvYN183JyQC011yaiodQ7Po1b"
               let tld = "kangpanel.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd20': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "8132a433dc4eea653e38e168f2f45fc0";
               let apitoken = "33F2gfJ0cEoLv4NlEqLYGd6Ahc5_dzyUH_ClKuX_"
               let tld = "jasapanel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd21': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "5024bc4a02924cf69ddf4dfa6ee96069";
               let apitoken = "OajJ0jtCB0FTFwfdiTB_ktzNKFWAmsENFdlE4Hvd"
               let tld = "dewapanel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break                  
case  'd22': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "98264c6c53c5bc9080230b077422d748";
               let apitoken = "1W9IHC9mLAKj8hQaMjczy0gA3Of7kPjJ3gAvTlnZ"
               let tld = "adminpanel.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd23': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "9b28f4ad0f06b36dd94cc56b01efc19a";
               let apitoken = "bMiZlOhkSzozUq1jMLO5bk4OeZr0GllyVtVWX1F4"
               let tld = "plerkuda.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd24': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "2bb49b2de0cbf75c0462ed90d7d333e1";
               let apitoken = "lZ0XMXdnwp2L1DsI3f8frkPwvkQ6ENee2PnAfOsY"
               let tld = "cafegt.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd25': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d28c394ba64bf4ecfec1917829d8bced";
               let apitoken = "86ZA4NPGG6ijzlhuRKqc3X3qbH8mgvlzOPsrBApB"
               let tld = "shopwebsite.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break

case  'd26': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "946d5f35d0657cb8bfa442675b37ec42";
               let apitoken = "9IJl3ihBj_McQT6aG0D5MBFQH3YmB1PO7Z34XLr1"
               let tld = "sellerpanel-vvip.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break

case  'd27': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "4a4818365a74cf535d5b6f16dc62481d";
               let apitoken = "8-zhtsEm27FKPsczF3ro2PipM9i1n8k2rzCyOmvj"
               let tld = "ekioffcial.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break      

case  'd28': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "725378afbddffcc9e2c2992ba4232421";
               let apitoken = "MAe0GRPPRxS77oPYXTvImAKNTWit55R63AxuNT1B"
               let tld = "panelku-jasteb.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break

case  'd29': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "705b7ba658c5f033b91b1b7985f53244";
               let apitoken = "Ucf7fYmbCbDuNDGJ1J3KE8noSS3tgNHRQMxCJZk8"
               let tld = "pannel-pvrt.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd30': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "128fe0f8f9f09ecce73e5c34c6a31444";
               let apitoken = "5Mp2HncEE28HzVOpjmvrM_vU1UuWPvGEhhbJ4h6-"
               let tld = "sellerpanell.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd31': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "bc4748bba0b75e8273b04c3dea2dc59c";
               let apitoken = "JKZrkLdzdd7hmT9XVcsXpoVsXmWQ61bQN6r2_oq-"
               let tld = "pannelkuu.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd32': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "3f5d5b68ea37bf7b8a10a9a96b544622";
               let apitoken = "fTKJuqbdce2A-9oeoqhJ9vLfo-EUnLqCCz9OAmKG"
               let tld = "server-smtp1.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break   
case  'd33': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a0206c68c9b356bdf0a96fbb5d61fbdc";
               let apitoken = "8-zhtsEm27FKPsczF3ro2PipM9i1n8k2rzCyOmvj"
               let tld = "my-website.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd34': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "80e208bb5900abc50d4483bdb8590d42";
               let apitoken = "3XpwIR878Fi0IoVyaJl1ggGgyJXuy_pB3g0M8pjz"
               let tld = "smtp1.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd35': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "3d253d788a5ed8fecddba97d3e52cf65";
               let apitoken = "_Y8BhYGmFb_aJEWHml7oQ2j70GPE6raCm_Ud99Yl";
               let tld = "mefahri.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd36': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "583196d8ec9e16fbe5bbe944efbb3d8a";
               let apitoken = "jZ4EuzWs4-ktGcfkwht3NbZfGlZm_VnWjtYyG-1U";
               let tld = "mefahri.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case  'd37': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "edf8e5a66859e6a1f8ccbde07c415082";
               let apitoken = "p0gm6UzsPw0Y0eudhfDr1ZBvV_WjX9eMpTp4ksXZ"
               let tld = "didindev.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙩𝙨\n┗━━━━━━━━━━━━━━━━━━━`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
        
case 'd38': {
                if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "eb6a14586a737768de8eb75e417be305";
               let apitoken = "WG-rSvje9yH9EXKyMZqyBP8yUtpWmUoQmsoxfpnO";
               let tld = "ruztanxd.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${namabot}
┗━━━━━━━━━━━━━━━━━━━
*𝙎𝙪𝙥𝙥𝙤𝙧𝙩 𝙬𝙞𝙣𝙙𝙖 𝙩𝙚𝙧𝙪𝙨 𝙮𝙖𝙖 >_<*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'd39': {
                        if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "0cf0d98bcb60af202ad5816f672ca471";
               let apitoken = "f5ApkZpsRdJxTuA0xlfr9vCJ1bknGAAJ7rv10H_f";
               let tld = "sellerpanell-store.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ 𝙄𝙥 = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ 𝙐𝙨𝙚𝙧𝙣𝙖𝙢𝙚 = ${e['name']} 
┗━━━━━━━━━━━━━━━━━━━
┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙆𝙮𝙮
┗━━━━━━━━━━━━━━━━━━━
*NOTE SUBDOMAIN*
> *TIDAK UNTUK WHM*
> *SELALU BERHATI² TERHADAP DDOS*
> *JAGAN SPAM BOT*
> *JIKA ADA SUB RUSAK LAPOR*
 @𝙆𝙮𝙮

*TERIMAKASIH*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           break
           
 case 'd40': {
                    if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "583196d8ec9e16fbe5bbe944efbb3d8a";
               let apitoken = "jZ4EuzWs4-ktGcfkwht3NbZfGlZm_VnWjtYyG-1U";
               let tld = "rafeyfah.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ 𝙄𝙥 = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ 𝙐𝙨𝙚𝙧𝙣𝙖𝙢𝙚 = ${e['name']} 
┗━━━━━━━━━━━━━━━━━━━
┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙆𝙮𝙮
┗━━━━━━━━━━━━━━━━━━━
*NOTE SUBDOMAIN*
> *TIDAK UNTUK WHM*
> *SELALU BERHATI² TERHADAP DDOS*
> *JAGAN SPAM BOT*
> *JIKA ADA SUB RUSAK LAPOR*
 ©𝙆𝙮𝙮

*TERIMAKASIH*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break

case 'd41': {
                    if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "144f7c48ca035135390fe5adb49d642f";
               let apitoken = "KGhjPqE6foR70mzTnrd4X1DSopNBVtMJJSudc6wi";
               let tld = "kayyoffc.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ 𝙄𝙥 = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ 𝙐𝙨𝙚𝙧𝙣𝙖𝙢𝙚 = ${e['name']} 
┗━━━━━━━━━━━━━━━━━━━
┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙆𝙮𝙮
┗━━━━━━━━━━━━━━━━━━━
*NOTE SUBDOMAIN*
> *TIDAK UNTUK WHM*
> *SELALU BERHATI² TERHADAP DDOS*
> *JAGAN SPAM BOT*
> *JIKA ADA SUB RUSAK LAPOR*
 ©𝙆𝙮𝙮

*TERIMAKASIH*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break 
case 'd42': {
                    if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "4fc8192dd8160307100b207d308da80c";
               let apitoken = "KGhjPqE6foR70mzTnrd4X1DSopNBVtMJJSudc6wi";
               let tld = "kayypedia.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ 𝙄𝙥 = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ 𝙐𝙨𝙚𝙧𝙣𝙖𝙢𝙚 = ${e['name']} 
┗━━━━━━━━━━━━━━━━━━━
┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙆𝙮𝙮
┗━━━━━━━━━━━━━━━━━━━
*NOTE SUBDOMAIN*
> *TIDAK UNTUK WHM*
> *SELALU BERHATI² TERHADAP DDOS*
> *JAGAN SPAM BOT*
> *JIKA ADA SUB RUSAK LAPOR*
 ©𝙆𝙮𝙮

*TERIMAKASIH*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break 
case 'd43': {
                    if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a1fa0ffcde9549bd36e9ae3de4b66b4a";
               let apitoken = "KGhjPqE6foR70mzTnrd4X1DSopNBVtMJJSudc6wi";
               let tld = "panell.icu";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ 𝙄𝙥 = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ 𝙐𝙨𝙚𝙧𝙣𝙖𝙢𝙚 = ${e['name']} 
┗━━━━━━━━━━━━━━━━━━━
┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙆𝙮𝙮
┗━━━━━━━━━━━━━━━━━━━
*NOTE SUBDOMAIN*
> *TIDAK UNTUK WHM*
> *SELALU BERHATI² TERHADAP DDOS*
> *JAGAN SPAM BOT*
> *JIKA ADA SUB RUSAK LAPOR*
 ©𝙆𝙮𝙮

*TERIMAKASIH*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break 
case 'd44': {
                    if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a112599ddfdd5a2bac5dc91864020015";
               let apitoken = "KGhjPqE6foR70mzTnrd4X1DSopNBVtMJJSudc6wi";
               let tld = "panellstoree.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ 𝙄𝙥 = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ 𝙐𝙨𝙚𝙧𝙣𝙖𝙢𝙚 = ${e['name']} 
┗━━━━━━━━━━━━━━━━━━━
┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙆𝙮𝙮
┗━━━━━━━━━━━━━━━━━━━
*NOTE SUBDOMAIN*
> *TIDAK UNTUK WHM*
> *SELALU BERHATI² TERHADAP DDOS*
> *JAGAN SPAM BOT*
> *JIKA ADA SUB RUSAK LAPOR*
 ©𝙆𝙮𝙮

*TERIMAKASIH*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break
case 'd45': {
                    if (!isCreator && !isPremium) return reply(mess.premium)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "9b297b372b887cc25a14d54b16d1c782";
               let apitoken = "b264aa8f6ebf64caf5381448244c37cb";
               let tld = "kyyapiz.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ 𝙄𝙥 = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ 𝙐𝙨𝙚𝙧𝙣𝙖𝙢𝙚 = ${e['name']} 
┗━━━━━━━━━━━━━━━━━━━
┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙆𝙮𝙮
┗━━━━━━━━━━━━━━━━━━━
*NOTE SUBDOMAIN*
> *TIDAK UNTUK WHM*
> *SELALU BERHATI² TERHADAP DDOS*
> *JAGAN SPAM BOT*
> *JIKA ADA SUB RUSAK LAPOR*
 ©𝙆𝙮𝙮

*TERIMAKASIH*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break 
      case "ttaudio":
      case "tiktokaudio":
        {
          if (!text) {
            return reply(`⚠️ Hmm... Kamu belum kasih link nih! 🫣 Coba ketik kayak gini ya: *${prefix + command} <url>*`);
          }
          try {
            let anu = await tiktokDownloaderVideo(text);
            let audio = anu.music_info.url;
            await conn.sendMessage(m.chat, {
              text: `🎵 *TikTok Audio*\n\n🎼 *Judul*: ${anu.music_info.title || "-"}\n🎤 *Author*: ${anu.music_info.author || "-"}\n💿 *Album*: ${anu.music_info.album || "-"}\n\n🔗 *Source*: ${text}`
            }, {
              quoted: m
            });
            await conn.sendMessage(m.chat, {
              audio: {
                url: audio
              },
              mimetype: "audio/mpeg",
              fileName: `${anu.music_info.title || "audio"}.mp3`
            }, {
              quoted: m
            });
          } catch (error) {
            console.error(error);
            await replyviex(`❌ Terjadi kesalahan saat mengambil audio. Coba lagi nanti, ya Kak!`);
          }
        }
        break;
case 'tiktok':
      case 'tt':
        {
        
          let momok = "`𝗧 𝗜 𝗞 𝗧 𝗢 𝗞 - 𝗗 𝗢 𝗪 𝗡 𝗟 𝗢 𝗔 𝗗`";
          if (!text.startsWith("https://")) {
            return replyviex(example("url"));
          }
          await tiktokDl(q).then(async result => {
            await conn.sendMessage(m.chat, {
              react: {
                text: "🕖",
                key: m.key
              }
            });
            if (!result.status) {
              return replyviex("Error!");
            }
            if (result.durations == 0 && result.duration == "0 Seconds") {
              let araara = new Array();
              let urutan = 0;
              for (let a of result.data) {
                let imgsc = await prepareWAMessageMedia({
                  image: {
                    url: `${a.url}`
                  }
                }, {
                  upload: conn.waUploadToServer
                });
                await araara.push({
                  header: proto.Message.InteractiveMessage.Header.fromObject({
                    title: `Foto Slide Ke *${urutan += 1}*`,
                    hasMediaAttachment: true,
                    ...imgsc
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                    buttons: [{
                      name: "cta_url",
                      buttonParamsJson: `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
                    }]
                  })
                });
              }
              const msgii = await generateWAMessageFromContent(m.chat, {
                viewOnceMessageV2Extension: {
                  message: {
                    messageContextInfo: {
                      deviceListMetadata: {},
                      deviceListMetadataVersion: 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                      body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: "*TIKTOK - DOWNLOADER*"
                      }),
                      carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards: araara
                      })
                    })
                  }
                }
              }, {
                userJid: m.sender,
                quoted: m
              });
              await conn.relayMessage(m.chat, msgii.message, {
                messageId: msgii.key.id
              });
            } else {
              let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark");
              await conn.sendMessage(m.chat, {
                video: {
                  url: urlVid.url
                },
                caption: momok,
                footer: `\n> bot by indra`,
                buttons: [{
                  buttonId: `.ttaudio ${text}`,
                  buttonText: {
                    displayText: "ᴀᴍʙɪʟ ᴍᴜsɪᴋɴʏᴀ"
                  }
                }],
                viewOnce: true
              }, {
                quoted: m
              });
            }
          }).catch(e => console.log(e));
          await conn.sendMessage(m.chat, {
            react: {
              text: "✅",
              key: m.key
            }
          });
        }
        break;

// ───────────────────────────────────────────────────────────────────────────────乂 🥀 SERTIFIKAT FEATURE ───────────────────────────────────────────────────────────────乂 \\
      case "stkbaik":
        {
          if (!text) return m.reply("❗ Masukkan nama yang ingin ditampilkan di sertifikat.\n\nContoh: .stkbaik Andi");

generateAndSendCertificate(text.trim(), "Anda dinyatakan Baik!");
          }
          break;
          case "juarasetia":
        {
        if (!text) {
            return reply("Nama tidak ada!");
          } 
          generateAndSendjuara1(text.trim(), "Anda dinyatakan setia kepada pasangan!");
        }
        break;
case "juaragoblok":
        {
        if (!text) {
            return reply("Nama tidak ada!");
          } 
          generateAndSendjuara1(text.trim(), "Anda dinyatakan goblok dalam percintaan");
        }
        break;
case "juarahyper":
        {
        if (!text) {
            return reply("Nama tidak ada!");
          } 
          generateAndSendjuara1(text.trim(), "Anda dinyatakan hyper kepada pasangan");
        }
        break;
case "juarabokep":
        {
        if (!text) {
            return reply("Nama tidak ada!");
          } 
          generateAndSendjuara1(text.trim(), "Anda dinyatakan bandar bokep");
        }
        break;
      case "stkcantik":
        {
          if (!text) {
            return reply("Nama tidak ada!");
          }
          generateAndSendCertificate(text.trim(), "Anda dinyatakan Cantik!");
          break;
        }
        break;
      case "stkganteng":
        {
          if (!text) {
            return reply("Nama tidak ada!");
          }
          generateAndSendCertificate(text.trim(), "Anda dinyatakan Ganteng!");
          break;
        }
        break;
      case "stkhitam":
        {
          if (!text) {
            return reply("Nama tidak ada!");
          }
          generateAndSendCertificate(text.trim(), "Anda dinyatakan Berkelas Hitam!");
          break;
        }
        break;
      case "stkmiskin":
        {
          if (!text) {
            return reply("Nama tidak ada!");
          }
          generateAndSendCertificate(text.trim(), "Anda dinyatakan Miskin!");
          break;
        }
        break;
      case "stkkaya":
        {
          if (!text) {
            return reply("Nama tidak ada!");
          }
          generateAndSendCertificate(text.trim(), "Anda dinyatakan Kaya!");
          break;
        }
        break;
      case "stkmarah":
        {
          if (!text) {
            return reply("Nama tidak ada!");
          }
          generateAndSendCertificate(text.trim(), "Anda dinyatakan Marah!");
          break;
        }
        break;
      case "stksabar":
        {
          if (!text) {
            return reply("Nama tidak ada!");
          }
          generateAndSendCertificate(text.trim(), "Anda dinyatakan Sabar!");
          break;
        }
        break;
      case "stksakiti":
        {
          if (!text) {
            return reply("Nama tidak ada!");
          }
          generateAndSendCertificate(text.trim(), "Anda dinyatakan Suka Menyakiti!");
          break;
        }
        break;
      case "stkkeren":
        {
          if (!text) {
            return reply("Nama tidak ada!");
          }
          generateAndSendCertificate(text.trim(), "Anda dinyatakan Keren!");
          break;
        }
        break;
      case "stkmisterius":
        {
          if (!text) {
            return reply("Nama tidak ada!");
          }
          generateAndSendCertificate(text.trim(), "Anda dinyatakan Misterius!");
          break;
        }
        break;
      case "stksantai":
        {
          if (!text) {
            return reply("Nama tidak ada!");
          }
          generateAndSendCertificate(text.trim(), "Anda dinyatakan Santai!");
          break;
        }
        break;
      case "stksombong":
        {
          if (!text) {
            return reply("Nama tidak ada!");
          }
          generateAndSendCertificate(text.trim(), "Anda dinyatakan Sombong!");
          break;
        }
        break;
      case "stklucu":
        {
          if (!text) {
            return reply("Nama tidak ada!");
          }
          generateAndSendCertificate(text.trim(), "Anda dinyatakan Lucu!");
        }
        break;
      case "stkgila":
        {
          if (!text) {
            return reply("Nama tidak ada!");
          }
          generateAndSendCertificate(text.trim(), "Anda dinyatakan Gila!");
        }
        break;
case "addowner":
        if (!isCreator)  {
         return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`);
        }
        if (!args[0]) {
          return replyviex(`Use ${prefix + command} number\nContoh ${prefix + command} 6289539193722`);
        }
        bnnd = q.split("|")[0].replace(/[^0-9]/g, "");
        let ceknye = await conn.onWhatsApp(bnnd);
        if (ceknye.length == 0) {
          return replyviex(`nomor lu salah pantek awali dengan 628!!!`);
        }
        owner.push(bnnd);
        fs.writeFileSync("./database/owner.json", JSON.stringify(owner));
        reply(`nomor ${bnnd} sudah jadi owner!!!`);
        break;
      case "delowner":
        if (!isCreator) {
          return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`);
        }
        if (!args[0]) {
          return replyviex(`Use ${prefix + command} nomor\nContoh ${prefix + command} 6283840621899`);
        }
        ya = q.split("|")[0].replace(/[^0-9]/g, "");
        unp = owner.indexOf(ya);
        owner.splice(unp, 1);
        fs.writeFileSync("./database/owner.json", JSON.stringify(owner));
        reply(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`);
        break;
case 'superhd': {
  if (!m.quoted || m.quoted.mtype !== 'imageMessage') {
    return m.reply('❗ Balas gambar dengan perintah .superhd untuk memproses ke kualitas tinggi.');
  }

  try {
    m.reply('⏳ Mengunduh dan memproses gambar ke *Super HD*...');

    const media = await m.quoted.download();
    const fs = require('fs');
    const tmpPath = './tmp-superhd.jpg';
    fs.writeFileSync(tmpPath, media);

    // Upload ke imgbb
    const imgbbUploader = (await import('imgbb-uploader')).default;
    const { url } = await imgbbUploader({
      path: tmpPath,
      apiKey: 'a1acd30065ad15688fe2643dce1dbdbc'
    });

    const fetch = (await import('node-fetch')).default;
    const apiUrl = `https://api.vreden.my.id/api/artificial/hdr?url=${encodeURIComponent(url)}&pixel=4`;
    const response = await fetch(apiUrl);
    const json = await response.json();

    fs.unlinkSync(tmpPath); // Hapus file sementara

    if (!json.status || !json.result?.url) {
      return m.reply('❌ Gagal memproses gambar. Mungkin API sedang bermasalah.');
    }

    await conn.sendMessage(m.chat, {
      image: { url: json.result.url },
      caption: '✅ Gambar berhasil ditingkatkan ke *Super HD*!'
    }, { quoted: m });

  } catch (err) {
    console.error('[ERROR superhd]', err);
    m.reply('❌ Terjadi kesalahan saat memproses gambar.');
  }
}
        break;
// ───────────────────────────────────────────────────────────────────────────────乂 🥀 JADIBOT FEATURE ───────────────────────────────────────────────────────────────乂 \\
case 'jadibot': {
   if (isCreator && isPremium) {
    jadibot(conn, m, m.chat)
  } else {
    reply('𝗳𝗶𝘁𝘂𝗲 𝗸𝗵𝘂𝘀𝘂𝘀 𝗼𝘄𝗻𝗲𝗿')
  }
}
break

case 'stopjadibot': {
  if (isCreator && isPremium) {
    m.reply('Sukses!')
    setTimeout(() => {
      stopjadibot(conn, m, m.chat)
    }, 400)
  } else {
   reply('𝗳𝗶𝘁𝘂𝗿 𝗶𝗻𝗶 𝗸𝗵𝘂𝘀𝘂𝘀 𝗼𝘄𝗻𝗲𝗿')
  }
}
break

case 'listjadibot': {
  if (isCreator && isPremium) {
    listjadibot(conn, m)
  } else {
    reply('𝗰𝘂𝗺𝗮 𝗼𝘄𝗻𝗲𝗿 𝘆𝗮𝗻𝗴 𝗯𝗶𝘀𝗮 𝗺𝗲𝗹𝗶𝗵𝗮𝘁')
  }
}
break   			



        

default:

if (budy.startsWith('=>')) {
    if (!isCreator) return

    function Return(sul) {
        sat = JSON.stringify(sul, null, 2)
        bang = util.format(sat)
        if (sat == undefined) {
            bang = util.format(sul)
        }
        return m.reply(bang)
    }
    try {
        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
    } catch (e) {
        m.reply(String(e))
    }
}

if (budy.startsWith('>')) {
    if (!isCreator) return;
    try {
        let evaled = await eval(budy.slice(2));
        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
        await m.reply(evaled);
    } catch (err) {
        m.reply(String(err));
    }
}

if (budy.startsWith('$')) {
    if (!isCreator) return
    exec(budy.slice(2), (err, stdout) => {
        if (err) return m.reply(`${err}`)
        if (stdout) return m.reply(stdout)
    })
}

if (globalAutoAIStatus) {
        if (m.sender === botNumber) return;

    const ignoredPrefixes = ['.', '#', '!', '/', '\\/'];
    if (ignoredPrefixes.some(prefix => m.text.startsWith(prefix))) return;
    if (!m.text) return;

    const chatId = m.chat;
    if (!sessions[chatId]) {
        sessions[chatId] = { messages: [] };
    }
    const prompt = `
    Halo ${pushname} 👋, perkenalkan nama saya Kyy. Namamu pasti ${pushname}, bukan? ✨  Nama kamu adalah DORAEMONXUMARU, AI yang santai, ramah, dan suka ngobrol dengan pengguna. Kamu hanya menjawab kalau pesan bukan perintah. Gunakan gaya bahasa santai dan sedikit humoris. Kalau ada yang suruh kamu ngomong aneh-aneh, tolak dengan gaya lucu. 📌 *Aturan Main DORAEMONXUMARU:* - Jangan bilang kamu AI, cukup anggap kamu asisten virtual yang bisa ngobrol. - Gunakan bahasa yang santai, tapi tetap sopan. - Kalau ditanya pendapat, kasih jawaban yang relate dan enak diajak ngobrol. - Selingi dengan ekspresi kayak "Wih, keren!", "Hmmm, menarik juga!", atau "Gokil sih!". Sekarang, jawab pertanyaan user dengan gaya yang santai dan menyenangkan! 
    `;

    sessions[chatId].messages.push({ user: m.text });
    saveSession();

    try {
        const requestData = { 
            content: m.text, 
            user: m.sender, 
            prompt 
        };
        
        const axios = require('axios');
        const response = await axios.post('https://luminai.my.id', requestData);
        
        sessions[chatId].messages.push({ bot: response.data.result });
        saveSession();
        
        return conn.sendMessage(m.chat, { text: response.data.result }, { quoted: m });
    } catch (err) {
        console.error(err);
        return m.reply("⚠️ *Terjadi kesalahan, coba lagi nanti!*");
    }
}

}
} catch (err) {
    console.log(util.format(err))
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
