/**
 * 手动实现new 操作符
 */


function Person(name, age) {
    this.name = name;
    this.age = age;
    // return new String(111)
    return {
        h: 1,
        s: 2
    }
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
    console.log(result, o);
    console.log(result instanceof Object)
    console.log(o instanceof Object)
    return result instanceof Object ? result : o;
 }

 function my_new () {
    var o = {};
    var self = [].shift.call(arguments);
    o.__proto__ = self.prototype;
    var result = self.apply(o, arguments);
    console.log(arguments)
    return result instanceof Object ? result : o;
 }

 var wangfpp = my_new(Person, "wangfpp", 30);
// var wangfpp2 = new Person("wangfpp", 30);
//  wangfpp.sayName();
 console.log(wangfpp)
//  console.log(wangfpp2)


/************instanceof new ************/
 function FackNew() {
     if (this instanceof FackNew) {
        console.log(11111);
     } else {
        console.log(22222);
     }
 }

//  var str1 = FackNew();
//  var str2 = new FackNew();