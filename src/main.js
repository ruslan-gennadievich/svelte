import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

import { Context, Telegraf } from 'telegraf'
import session from 'telegraf/session'

interface SessionData {
  lastMessageId?: number
  photoCount?: number
  // ... more session data go here
}

// Define your own context type
interface MyContext extends Context {
  session?: SessionData
  // ... more props go here
}

// Create your bot and tell it about your context type
const bot = new Telegraf<MyContext>(process.env.BOT_TOKEN)

// Make session data available
bot.use(session())
// Register middleware and launch your bot as usual
bot.use((ctx, next) => {
  // Yay, `session` is now available here as `SessionData`!
  if (ctx.message !== undefined)
    ctx.session.lastMessageId = ctx.message.message_id
  return next()
})
bot.on('photo', (ctx, next) => {
  ctx.session.photoCount = 1 + (ctx.session.photoCount ?? 0)
  return next()
})

export default app;
