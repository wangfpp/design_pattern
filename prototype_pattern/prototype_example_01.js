// 创建构造函数
function Person() {

}
// 在构造函数的原型prototype上挂载属性和方法
Person.prototype.name = "wangfpp";
Person.prototype.age = 30;
Person.prototype.job = "Softwarw Enginner";
Person.prototype.sayName = function() {
    console.log(this.name);
}

var wangfpp = new Person();
var wangfpp2 = new Person();
wangfpp2.name = "MVP"

wangfpp.sayName(); // "wangfpp"
wangfpp2.sayName(); // MVP

console.log(wangfpp.sayName === wangfpp2.sayName) // true 