const { Telegraf } = require('telegraf')
const bot = new Telegraf('5643098241:AAGsoNLV2_hvqTidMTdcLDSpsRD4Jcskvjk')

bot.start((ctx) => {
    ctx.reply("Bot is running. I'll respond to your message with the same message, encrypted with Caesar Cipher.")
})

bot.on('message', (ctx) => {
    const message = ctx.message.text
    const shift = 3
    const encryptedMessage = encryptCaesarCipher(message, shift)
    ctx.reply(encryptedMessage)
})

function encryptCaesarCipher(message, shift) {
    let plaintext = message.split('')
    let ciphertext = plaintext.map(char => {
        let unicode = char.charCodeAt()
        let shiftedUnicode = unicode + shift
        let shiftedChar = String.fromCharCode(shiftedUnicode)
        return shiftedChar
    }).join('')
    return ciphertext
}

bot.launch()