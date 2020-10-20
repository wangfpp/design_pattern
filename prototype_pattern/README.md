#### 原型模式


#### 我们创建的每个函数都有一个prototype(原型)属性,这个属性是一个指针,指向一个对象,而这个对象的用途就是包含可以由特定类型的所有实例共享的属性和方法
字面意思:
    prototype就是通过调用构造函数创建的那个对象的实例的原型对象

### 使用原型对象的优缺点
- 1.优点
    - 1.1 可以让所有对象实例共享它所包含的属性和方法
    - 1.1 换句话说就是不必在构造函数内定义对象实例的信息　而是可以将这些信息直接添加到原型对象中 
```javascript
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

console.log(wangfpp, wangfpp2)
wangfpp.sayName(); // "wangfpp"
wangfpp2.sayName(); // wangfpp

console.log(wangfpp.sayName === wangfpp2.sayName)

```
<hr/>

- 1. 理解原型对象

只要创建了一个新函数就会根据一组特定的对则为该函数创建一个prototype属性,这个属性指向函数的原型对象,默认情况下所有原型对象都会自动获取一个constructor的(构造函数)属性,这个属性是一个指向prototype属性所在的函数指针

- 2. 原型与in操作符


- 3. 更简单的原型语法


- 4. 原型的动态性


- 5. 原声对象的原型


<hr/>

### __prpto__ prototype constructor三者的关系

- 1. prototype

prototype是函数所独有的一个属性这个属性指向函数的原型对象
实例的原型对象和构造函数的原型一致
包含有由特定类型的所有实例共享的属性和方法
让函数实例化的所有对象共享它所包含的属性和方法
```javascript
function Person(){}
Person.prototype => Person.prototype
```

- 2. __proto__
构造函数的实例指向构造函数的原型对象,由一个对象指向另一个对象
当访问原型的属性和方法时优先从实例上搜索,实例上不存在则去实例的原型对象上搜索,直至搜索到null 再继续搜索就抛出错误　原型链

- 3. constructor
创建了构造函数后,其<strong style="color:tomato">原型对象</strong>会自动获得一个constructor的属性
```javascript
function Person() {}
var person1 = new Person()
/*
就是说function Person(){}创建时
Person.prototype会自动获取一个constructor的属性
Person.prototype.constructor === Person

既然constructor原型对象才拥有的属性 为什么实例会存在constructor属性?

因为实例初始化时或获得一个__proto__属性指向的时Person.prototype
所以实例根据原型链搜索constructor属性时　实例本身无此属性就顺着原型person1.__proto__ => Person.prototype
*/

```

### 查找的资料
[__proto__ prototype constructor的关系](https://blog.csdn.net/cc18868876837/article/details/81211729)