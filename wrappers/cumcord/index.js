import { get, set } from '@cumcord/modules/internal/idbKeyval';
// Wrapper around idb-keyval for use with BdApi
let _idbStorageWrapper = {
	deleteData: async (pluginName, key) => {
		let pluginData = await get(pluginName);
		if (await pluginData[key] !== undefined) {
			pluginData[key] = undefined;
		}
		await set(pluginName, pluginData);
	},
	saveData: async (pluginName, key, data) => {
		let pluginData = await get(pluginName);
		if (pluginData === undefined) {
			pluginData = {};
		}
		pluginData[key] = data;
		await set(pluginName, pluginData);
	},
	loadData: async (pluginName, key) => {
		return get(pluginName).then((pluginData) => {
			if (pluginData === undefined) {
				return null;
			} else {
				return pluginData[key]
			}
		})
	}
}

let webpackUtils = {
	findModule: cumcord.modules.webpack.find,
	findAllModules: cumcord.modules.webpack.findAll,
	findModuleByProps: cumcord.modules.webpack.findByProps,
	findModuleByPrototypes: cumcord.modules.webpack.findByPrototypes,
	findModuleByDisplayName: cumcord.modules.webpack.findByDisplayName
}

window._BDCOMPATSHIT = {};
window._BDCOMPATSHIT._DO_NOT_TOUCH_THIS_OR_I_WILL_TAKE_YOUR_BABIES = {
	"webpackUtils": webpackUtils,
	"storageWrapper": _idbStorageWrapper,
	"modules": cumcord.modules.common
}
