import { watchFile, unwatchFile } from 'fs' 
 import chalk from 'chalk' 
 import fs from 'fs' 
 import cheerio from 'cheerio' 
 import fetch from 'node-fetch' 
 import axios from 'axios' 
 import path, { join } from 'path' 
 import { fileURLToPath, pathToFileURL } from 'url' 
 import moment from 'moment-timezone'  
 import { platform } from 'process' 
 global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.__dirname = function dirname(pathURL) { return path.dirname(global.__filename(pathURL, true)) }; global.__require = function require(dir = import.meta.url) { return createRequire(dir) } 
 const __dirname = global.__dirname(import.meta.url) 
  
 global.owner =
[['51907183648', '🍇creador🍇', true],
['51967647592', '🤙creadora2🤙, true],
['51907183648', '💖Ezequiel💖', true]],

 global.animxscans = ['51907183648'] 
 global.suittag = ['51907183648'] 
 global.mods = [] 
 global.prems = []
global.packname = '× Stickers V2\nEzequiel/TurboBot-MD\n\n× Script:\ngithub.com/Jxtxn17/TurboBot-MD'
global.author = ' T\n U\n R\n  B\n O\n '
global.wm = '𓆩𝐓𝐮𝐫𝐛𝐨𝐁𝐨𝐭-𝐌𝐃𓆪'
global.wm2 = '✦𝗧𝘂𝗿𝗯𝗼-𝗯𝗼𝘁-𝗠𝗗✦'
global.jxtxn = 'ezequiel'
global.cb = '⏤͟͟͞͞ＴｕｒｂｏＢｏｔ-ＭＤ'

global.vs = '1.0.2'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '51907183648'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
