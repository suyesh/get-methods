'use strict';

function methods(obj) {
	return Object.getOwnPropertyNames(Object.getPrototypeOf(obj));
}

function properties(obj) {
	return Object.getOwnPropertyNames(obj);
}

module.exports = {
	methods: methods,
	properties: properties
};
