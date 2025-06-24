/* 
    *gatau gw gabut whehehe
*/

process.on('unhandledRejection', console.error);
process.on('uncaughtException', console.error);
const { default: makeWASocket, DisconnectReason, makeInMemoryStore, jidDecode, proto, getContentType, useMultiFileAuthState, downloadContentFromMessage } = require("@whiskeysockets/baileys");

const pino = require('pino');
const chalk = require('chalk');
const fs = require('fs');
const readline = require("readline");
const PhoneNumber = require('awesome-phonenumber');
const { Boom } = require('@hapi/boom');
const yargs = require('yargs/yargs')
const _ = require('lodash')
const cfonts = require('cfonts');
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid, addExif } = require('./lib/exif')
const { smsg, sleep, getBuffer, botTerkoneksi } = require('./lib/func')
const customCode = 'dra20thn' 

var low
try {
low = require('lowdb')
} catch (e) {
low = require('./lib/lowdb')}
const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')

const store = makeInMemoryStore({
    logger: pino().child({
        level: 'silent',
        stream: 'store'
    })
});

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
/https?:\/\//.test(opts['db'] || '') ?
new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
new mongoDB(opts['db']) :
new JSONFile(`./src/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
...(global.db.data || {})}
  global.db.chain = _.chain(global.db.data)}
loadDatabase()

const question = (text) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question(text, resolve)
    })
};
//
async function startSesi() {
    const {
        state,
        saveCreds
    } = await useMultiFileAuthState("session")
    const conn = makeWASocket({
        logger: pino({
            level: "silent"
        }),
        printQRInTerminal: false,
        auth: state,
        connectTimeoutMs: 60000,
        defaultQueryTimeoutMs: 0,
        keepAliveIntervalMs: 10000,
        emitOwnEvents: true,
        fireInitQueries: true,
        generateHighQualityLinkPreview: true,
        syncFullHistory: true,
        markOnlineOnConnect: true,
        browser: ["Ubuntu", "Chrome", "20.0.04"],
    });


if (!conn.authState.creds.registered) {
    const phoneNumber = await question('Masukin nomor lu dengan awalan 628:\n');
    let code = await conn.requestPairingCode(phoneNumber, customCode)
    code = code?.match(/.{1,4}/g)?.join("-") || code;
    console.log(`CODE PAIRING LU NIH:`, code);
}
    store.bind(conn.ev)

    conn.ev.on('messages.upsert', async chatUpdate => {
        try {
            mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return
            if (!conn.public && mek.key.remoteJid !== global.owner + "@s.whatsapp.net" && !mek.key.fromMe && chatUpdate.type === 'notify') return
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
            m = smsg(conn, mek, store)
            require("./main")(conn, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })
        conn.public = true
        
        conn.ev.on('group-participants.update', async (anu) => {
  try {
    let metadata = await conn.groupMetadata(anu.id);
    let participants = anu.participants;

    for (let num of participants) {
      let ppuser;
      try {
        ppuser = await conn.profilePictureUrl(num, 'image');
      } catch {
        ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';
      }

      let nama = await conn.getName(num);
      let tag = `@${num.split("@")[0]}`;
      let desk = metadata.subject;
      let text;
      let title;
      
      if (anu.action === 'add') {
        text = `selamat datang kak *${tag}* di grup\n*${desk}*\n> bot by indra`;
        title = 'Selamat Datang';
      } else if (anu.action === 'remove') {
        text = `${tag} telah keluar dari grup\n*${desk}*`;
        title = 'Selamat Tinggal';
      } else if (anu.action === 'promote') {
        text = `Selamat ${tag}, sekarang kamu admin di\n*${desk}*`;
        title = 'Prmote Admin';
      } else if (anu.action === 'demote') {
        text = `${tag} tidak lagi jadi admin di\n*${desk}*`;
        title = 'Demote Admin';
      } else {
        continue;
      }

      await conn.sendMessage(anu.id, {
        text,
        contextInfo: {
          mentionedJid: [num],
          externalAdReply: {
            title: title,
            body: `${nama}`,
            thumbnailUrl: ppuser,
            sourceUrl: ``, // Atur link grup kamu di global
            mediaType: 1,
            renderLargerThumbnail: true,
            showAdAttribution: true
          }
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});

    conn.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }

    conn.getName = (jid, withoutContact = false) => {
        id = conn.decodeJid(jid)
        withoutContact = conn.withoutContact || withoutContact
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = conn.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
                id,
                name: 'WhatsApp'
            } : id === conn.decodeJid(conn.user.id) ?
            conn.user :
            (store.contacts[id] || {})
        return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }

    conn.serializeM = (m) => smsg(conn, m, store);
    conn.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
            if (reason === DisconnectReason.badSession || reason === DisconnectReason.connectionClosed || reason === DisconnectReason.connectionLost || reason === DisconnectReason.connectionReplaced || reason === DisconnectReason.restartRequired || reason === DisconnectReason.timedOut) {
                startSesi();
            } else if (reason === DisconnectReason.loggedOut) {} else {
                conn.end(`Unknown DisconnectReason: ${reason}|${connection}`);
            }
} else if (connection === 'open') {
    cfonts.say('EDISI ULTAH KE 20 THN', {
        font: 'block', // bisa juga 'simple', 'chrome', dll.
        align: 'center',
        colors: ['cyan', 'magenta'],
        background: 'transparent',
        letterSpacing: 1,
        lineHeight: 1,
        space: true,
        maxLength: '0'
    });

    console.log(chalk.green.bold('yeay sukses, beliin tahu bulat dong hehe'));

    conn.sendMessage(`@s.whatsapp.net`, {
        text: `Connect To Script New Update`,
    });

    try {
        conn.newsletterFollow("120363419884279670@newsletter")
conn.newsletterFollow("120363405649403674@newsletter")
conn.newsletterFollow("120363314571321104@newsletter")
        console.log(chalk.green.bold("yeay sukses follow channel owner"));
    } catch (error) {
        console.error(chalk.red("Failed to follow the WhatsApp Channel:"), error);
    }
}
});

    conn.ev.on('creds.update', saveCreds)

    conn.sendText = (jid, text, quoted = '', options) => conn.sendMessage(jid, {
        text: text,
        ...options
    }, {
        quoted
    })

    conn.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? 
            path : /^data:.*?\/.*?;base64,/i.test(path) ?
            Buffer.from(path.split`, `[1], 'base64') : /^https?:\/\//.test(path) ?
            await (await getBuffer(path)) : fs.existsSync(path) ? 
            fs.readFileSync(path) : Buffer.alloc(0);
        
        let buffer;
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options);
        } else {
            buffer = await addExif(buff);
        }
        
        await conn.sendMessage(jid, { 
            sticker: { url: buffer }, 
            ...options }, { quoted });
        return buffer;
    };

    conn.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? 
            path : /^data:.*?\/.*?;base64,/i.test(path) ?
            Buffer.from(path.split`, `[1], 'base64') : /^https?:\/\//.test(path) ?
            await (await getBuffer(path)) : fs.existsSync(path) ? 
            fs.readFileSync(path) : Buffer.alloc(0);

        let buffer;
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options);
        } else {
            buffer = await videoToWebp(buff);
        }

        await conn.sendMessage(jid, {
            sticker: { url: buffer }, 
            ...options }, { quoted });
        return buffer;
    };
    
    conn.imgToSticker = async(jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetchBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

  conn.sendPoll = (jid, name = '', values = [], selectableCount = global.select) => {
    return conn.sendMessage(jid, {
      poll: {
        name,
        values,
        selectableCount
      }
    })
  };
  
  conn.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await conn.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })}

    conn.getName = (jid, withoutContact = false) => {
      let id = conn.decodeJid(jid);
      withoutContact = conn.withoutContact || withoutContact;
      let v;
      if (id.endsWith("@g.us"))
        return new Promise(async (resolve) => {
          v = store.contacts[id] || {};
          if (!(v.name || v.subject)) v = conn.groupMetadata(id) || {};
          resolve(
            v.name ||
              v.subject ||
              PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber(
                "international",
              ),
          );
        });
      else
        v =
          id === "0@s.whatsapp.net"
            ? {
                id,
                name: "WhatsApp",
              }
            : id === conn.decodeJid(conn.user.id)
              ? conn.user
              : store.contacts[id] || {};
      return (
        (withoutContact ? "" : v.name) ||
        v.subject ||
        v.verifiedName ||
        PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber(
          "international",
        )
      );
    };
    
    conn.sendContact = async (jid, kon, quoted = '', opts = {}) => {
        let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await conn.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await conn.getName(i)}\nFN:${await conn.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:jangan spam bang`
	    })
	}
	conn.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
}

    conn.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        return buffer
    }

    return conn
}
// Anu
startSesi();

//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})