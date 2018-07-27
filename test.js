const { methods, properties } = require('.');

console.log(methods);
console.log(methods('string'));
console.log(properties('string'));

// console.log(methods(['string']));
// console.log(properties(['string']));
//
// console.log(methods({ string: 'string' }));
// console.log(properties({ string: 'string' }));
//
// console.log(methods({ string: 'string' }));
// console.log(properties({ string: 'string' }));
