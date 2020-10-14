function createPerson(name, age, hobby) {
    var p = {};
    p.name = name;
    p.age = age;
    p.hobby = hobby;
    p.sayName = function() {
        console.log(`我的名字是:${this.name}`);
    }
    return p;
}

let wangfpp = createPerson('wangfpp', 30, ["game", "coding", "life"])
let fangxb = createPerson('fangxb', 20, ["cat"])
console.log(wangfpp)
console.log(fangxb)
wangfpp.sayName();
fangxb.sayName();

// console.log(createPerson)