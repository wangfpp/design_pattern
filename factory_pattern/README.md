### 工厂模式

工厂模式是软件工程领域一种广为人之的设计模式,这种模式抽象了创建具体对象的过程
ECMAScript中无法传教类,开发人员就发明了一种函数,用函数来封装特定接口创建对象的细节

##### 批量生产对象
```javascript
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
console.log(wangfpp) // {name: "wangfpp", age: 30, hobby: Array(3), sayName: ƒ}
console.log(fangxb)// {name: "fangxb", age: 20, hobby: Array(1), sayName: ƒ}
wangfpp.sayName(); // 我的名字是:wangfpp
fangxb.sayName(); // 我的名字是:fangxb

```


#### 优点
- 1. 解决了创建多个相似对象的问题


### 缺点
- 1. 对象的函数重复声明

- 2. 无法指导一个对象的类型/对象识别　p144