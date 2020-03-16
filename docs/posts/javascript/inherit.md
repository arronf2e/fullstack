###　ＪＳ实现继承的几种方式

- 原型链继承 将父实例设置为子原型

```js
function Parent(name) {
  this.name = name
}
Parent.prototype.sayName = function() {
  console.log(this.name)
}
function Child(name) {
  this.name = name
}
Child.prototype = new Parent()
```
优缺点：

- 构造函数继承
```js
function Parent(name) {
  this.name = name
}
Parent.prototype.sayName = function() {
  console.log(this.name)
}
function Child(name) {
  Parent.call(this, name)
}
var a = new Child('a')
```
优缺点：只继承了父类构造函数中的属性，没有继承原型上的属性

- 组合继承
```js
function Parent(name) {
  this.name = name
}
Parent.prototype.sayName = function() {
  console.log(this.name)
}
function Child(name) {
  Parent.call(this, name)
}
Child.prototype = new Parent()
````
优点：可以继承父类原型上的属性，可以传参，可复用
缺点：调用了两次构造函数

===
