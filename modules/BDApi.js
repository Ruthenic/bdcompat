import { initAddonAPI } from './AddonAPI.js';

let _ThemeAPI =  initAddonAPI('theme')
let _PluginAPI = initAddonAPI('plugin')

let webpackUtils = window._BDCOMPATSHIT._DO_NOT_TOUCH_THIS_OR_I_WILL_TAKE_YOUR_BABIES.webpackUtils;
let storageWrapper = window._BDCOMPATSHIT._DO_NOT_TOUCH_THIS_OR_I_WILL_TAKE_YOUR_BABIES.storageWrapper;
let cumcord = {'modules': window._BDCOMPATSHIT._DO_NOT_TOUCH_THIS_OR_I_WILL_TAKE_YOUR_BABIES.modules}; // ehhh, I could directly provide these, but just wrapping cumcord is funnier

//I should probably separate this into it's own file but /shrug
//TODO: actually implement this
let settings = {
	enableSetting: (collections="settings", category, id) => {
		return null //stub
	},
	disableSetting: (collections="settings", category, id) => {
		return null //stub
	}
}

let BdApi = {
	React: cumcord.modules.common.React,
	ReactDOM: cumcord.modules.common.ReactDOM,
	Plugins: _PluginAPI,
	Themes: _ThemeAPI,
	settings: null,
	emotes: null,
	screenWidth: screen.width,
	screenHeight: screen.height,
	alert: (title, content) => {
		console.log(`BDCompat Toast\nTitle: ${title}\nContent:${content}`)
	},
	clearCSS: (id) => {
		//stub because i don't care about themes
	},
	deleteData: storageWrapper.deleteData,
	loadData:   storageWrapper.loadData,
	getData:    storageWrapper.loadData,
	saveData:   storageWrapper.saveData,
	setData:    storageWrapper.saveData,
	getCore: () => {return null},
	getInternalInstance: (node) => {
		return null
	},
	getPlugin: (name) => {
		//what does this do lmao
		return null
	},
	injectCSS: (id, css) => {
		//stub because i don't care about Themes
	},
	linkJS: async (id, url) => {
		let node = document.createElement('script');
		let code = await fetch(url)
		code = await code.text()
		node.text = code
		document.body.appendChild(node)
	},
	...webpackUtils,
	...settings
}


export { BdApi };
