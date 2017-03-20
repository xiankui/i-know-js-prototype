/**
 * 对象和函数的原型链
 */

// obj => Object.prototype => null
var obj = {};

console.log( obj.__proto__ === Object.prototype && Object.prototype.__proto__ === null )


// fn => Function.prototype => Object.prototype => null
var fn = function () {};

console.log( fn.__proto__ === Function.prototype && Function.prototype.__proto__ === Object.prototype )


// arr => Array.prototype => Object.prototype => null
var arr = [];

console.log( arr.__proto__ === Array.prototype && Array.prototype.__proto__ === Object.prototype )