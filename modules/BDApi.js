import { initAddonAPI } from './AddonAPI.js';

let _ThemeAPI =  initAddonAPI('theme')
let _PluginAPI = initAddonAPI('plugin')

let webpackUtils = window._BDCOMPATSHIT._DO_NOT_TOUCH_THIS_OR_I_WILL_TAKE_YOUR_BABIES.webpackUtils;
let storageWrapper = window._BDCOMPATSHIT._DO_NOT_TOUCH_THIS_OR_I_WILL_TAKE_YOUR_BABIES.storageWrapper;
let commonModules = window._BDCOMPATSHIT._DO_NOT_TOUCH_THIS_OR_I_WILL_TAKE_YOUR_BABIES.modules;

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

//This is a patcher that will be used to patch target functions, utilizing a Proxy object to run the specified function after the original function has been called, before the original function has been called, and replacing the function entirely
let Patcher = {
	//This is the function that will be used to patch a target function
	//targetFunction: the function to be patched (string)
	//targetParent: the object that contains the targetFunction (object)
	//patchFunction: the function to be called after the target function has been called if defined (function or undefined)
	//beforeFunction: the function to be called before the target function has been called if defined (function or undefined)
	//replaceFunction: the function to be called instead of the target function if defined (function or undefined)
	patch: (targetFunction, targetParent, patchFunction, beforeFunction, replaceFunction) => {
		//If the target function is not defined, return
		if(!targetFunction) return;
		//If the target function is not a string, return
		if(typeof targetFunction !== 'string') return;
		
		//Create a proxy on the targetParent object
		let newProxy = new Proxy();
	}
}

let BdApi = {
	React: commonModules.React,
	ReactDOM: commonModules.ReactDOM,
	Plugins: _PluginAPI,
	Themes: _ThemeAPI,
	settings: null,
	emotes: null,
	screenWidth: screen.width,
	screenHeight: screen.height,
	alert: (title, content) => {
		window.alert(`BDCompat Toast\nTitle: ${title}\nContent:${content}`)
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
