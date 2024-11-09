import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
   let img = imagen1

  let chat = global.db.data.chats[m.chat]

  if (chat.welcome && m.messageStubType == 27) {
    let wel = ` ┌─★ 𝚅𝚒𝚕𝚕𝚑𝚊𝚣𝚎💙\n │「 𝗕𝗶𝗲𝗻𝘃𝗲𝗻𝗶𝗱𝗼/𝗮 」\n └┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │🙈  *Bienvenido*\n   │🌺  ${groupMetadata.subject}\n   └───────────────┈ ⳹`
await conn.sendMini(m.chat, packname, dev, wel, img, img, channel, fkontak)
  }

  if (chat.welcome && m.messageStubType == 28) {
   let bye = ` ┌─★ 𝚅𝚒𝚕𝚕𝚑𝚊𝚣𝚎💙\n │「 𝗔𝗱𝗶𝗼𝘀 」\n └┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │😿  𝗦𝗲 𝗙𝘂𝗲\n   │🥀 𝗡𝗼 𝗥𝗲𝗴𝗿𝗲𝘀𝗲𝘀 𝗗𝗲 𝗡𝘂𝗲𝘃𝗼!\n   └───────────────┈ ⳹`
await conn.sendMini(m.chat, packname, dev, bye, img, img, channel, fkontak)
  }

  if (chat.welcome && m.messageStubType == 32) {
    let kick = ` ┌─★ 𝚅𝚒𝚕𝚕𝚑𝚊𝚣𝚎💙\n │「 *Adios* 」\n └┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │😿 𝗦𝗲 𝗙𝘂𝗲\n   │🥀 𝗡𝗼 𝗥𝗲𝗴𝗿𝗲𝘀𝗲𝘀 𝗗𝗲 𝗡𝘂𝗲𝘃𝗼!\n   └───────────────┈ ⳹`
await conn.sendMini(m.chat, packname, dev, kick, img, img, channel, fkontak)
}}
