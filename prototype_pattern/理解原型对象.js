function Person () {

}


var person = new Person();

console.log(person)
// person 为Person的实例
console.log(person.__proto__.constructor.name)
console.log(person.__proto__.__proto__.constructor.name)
console.log(person.__proto__.__proto__.__proto__)

console.log(person.__proto__ === Person.prototype)
/**
 * 实例的原型 === 构造函数的原型
 * 构造函数也是一个对象实例　构造函数的原型指向Object的原型　Objact.prototype
 */



