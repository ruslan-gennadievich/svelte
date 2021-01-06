import App from './App.svelte';
import { Context, Telegraf } from 'telegraf'
import session from 'telegraf/session'

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome2'))
bot.help((ctx) => ctx.reply('Send me a sticker!'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Aee Hey there'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

export default app;
