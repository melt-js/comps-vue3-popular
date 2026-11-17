(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('hel-lib-proxy')) :
	typeof define === 'function' && define.amd ? define(['exports', 'hel-lib-proxy'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["comps-vue3-popular"] = {}, global.HelLibProxy));
})(this, (function (exports, helLibProxy) { 'use strict';

	const LIB_NAME = 'comps-vue3-popular';

	const dtlib = helLibProxy.exposeLib(LIB_NAME);
	const TierRanking = dtlib.TierRanking;

	exports.TierRanking = TierRanking;
	exports.default = dtlib;
	exports.dtlib = dtlib;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
