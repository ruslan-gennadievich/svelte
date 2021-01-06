import App from './App.svelte';

import session from 'telegraf/session'

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});


export default app;
