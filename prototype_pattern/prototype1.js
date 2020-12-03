function Person () {}


Person.prototype.name = "wangfpp";
Person.prototype.age = 20;
Person.prototype.sayName = _ => {
    console.log(this.name);
}

let person1 = new Person();
console.log(Person.prototype)
console.log(111, person1.__proto__)

Person.prototype = {
    name: '111',
    age: '222',
    sayName: function(){
        console.log(this.name)
    }
}








let person2 = new Person();
console.log(Person.prototype)
console.log(111, person2.__proto__)


console.log("----------------person1----------------")
for (const key in person1) {
    console.log("所有属性:", key, person1[key]);
    if (person1.hasOwnProperty(key)) {
        console.log("实例属性:", key, person1[key]);
    }
}

console.log("----------------person2----------------")
for (const key in person2) {
    console.log("所有属性:", key, person2[key]);
    if (person2.hasOwnProperty(key)) {
        console.log("实例属性:", key, person2[key]);
    }
}






// var obj = {name: "111"};
// var obj1 = obj;
// obj = {name: '2222'}
// console.log(obj);
// console.log(obj1);