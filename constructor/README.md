### 构造函数模式
- 1. 构造函数的首字母大写 借鉴其他OO语言 区别与其他的JS函数

- 2. 没有显式的创建对象

- 3. 直接将属性和方法赋值给this对象

- 4. 没有return语句

- 5. 创建新实例时必须使用new操作符

### 构造函数的问题

- 1. 每个实例的方法被重复的创建









### new操作符做了什么?

- 1. 创建一个新对象Object

- 2. 将构造函数的作用域赋值给新对象 => this就指向了新的对象

- 3. 执行构造函数中的代码 => 为新对象添加属性和方法等

- 4. 返回新的对象
```javascript
// 1. 创建一个新对象
var o = {}

// 2. 将新对象的[[Prototype]]指向函数的prototype

o.__proto__ = Person.prototype


// 3. 执行构造函数中的代码 => 为新对象添加属性和方法等
var result = Person.apply(o, arguments)

// 4. 返回新对象
return result instanceof Object ? result : o

```
#### new 的理解
执行构造函数时加new 就会继承构造函数的原型 不加new只是执行了相关代码
```javascript
/************instanceof new ************/
 function FackNew() {
     if (this instanceof FackNew) {
        console.log(11111);
     } else {
        console.log(22222);
     }
 }

//  var str1 = FackNew(); 22222
//  var str2 = new FackNew(); 11111
```

### 手动实现new操作符
```javascript
funtion myNew() {
    let o = {}; // 创建新对象
    let self = [].shift.call(arguments); // 获取构造函数
    // shift删除数组中开头的一个元素 并返回该元素 会改变原数组
    let result = o.apply(self, arguments);
    return result instanceof Object ? result : o;
    // 改变this指向的方法
    /**
     * 一: 改变this同时执行代码
     * 1. obj.call(this, arg1, arg2) 第一位是原型 后续是参数
     * 
     * 2. obj.apply(this, [arg1, arg2, ....]) 第一位时原型 第二位时参数列表
     * 
     * 二: 改变this 返回函数
     * 
     * 1. obj.bind(this, arg1, arg2, ...)
     * 
     */
    

}

```


<hr/>

#### 将构造函数当作函数

构造函数和其他函数的唯一区别就是调用方式的不同, 加new就可以作为构造函数使用 不加new个普通函数没有是没区别 只是所有的属性和方法都被添加在window对象上了