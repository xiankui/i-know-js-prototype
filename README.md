# 原型链

## 原型链的精髓就是对象之间的委托关系，简单而直接。

```
var A = {
	methodA: function () { console.log('methodA from object A'); }
}

var B = {
	do: function () { this.methodA(); }
};

Object.setPrototypeOf(B, A);

var obj = Object.create(B);

// obj.__proto__.__proto__ === A
obj.do(); // methodA from object A
```

## 构造函数及构造函数的语法糖ES6 Class均是基于（Function.prototype）函数间的隐藏委托关系。

```
function A() {}

A.prototype.methodA = function () { console.log('methodA from object A'); }

function B() {};

B.prototype = Object.create(A.prototype);

B.prototype.methodA = function () { A.prototype.methodA(); }

var obj = new B();

// obj.__proto__.__proto__ === A.prototype
obj.methodA();  // methodA from object A
```

## 参考

* [你不知道的JS](https://github.com/xiankui/You-Dont-Know-JS)