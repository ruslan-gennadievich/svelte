import { Context, Telegraf } from 'telegraf'
const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome2'))
bot.help((ctx) => ctx.reply('Send me a sticker!'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Aee Hey there'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

module.exports = (req, res) => {
  const date = new Date().toString();
  res.status(200).send(date);
};
