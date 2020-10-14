/**
 * 手动实现new 操作符
 */


function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Car(model) {
    this.model = mode;
}


function Create(name, age) {
    return myNew(Person,name, age);
}

Person.prototype.sayName = function() {
    console.log(`my name is: ${this.name}`);
}

 function myNew (constr, ...args) {
    var o = {};
    o.__proto__ = constr.prototype;
    var result = constr.apply(o, args);
    console.log(o.__proto__, constr, result instanceof Object)
    return result instanceof Object ? result : o;
 }

 function my_new () {
    var o = {};
    var self = [].shift.call(arguments);
    o.__proto__ = self.prototype;
    var result = self.apply(o, arguments);
    return result instanceof Object ? result : o;
 }

 var wangfpp = myNew(Create, "wangfpp", 30);
//  wangfpp.sayName();
 console.log(wangfpp)