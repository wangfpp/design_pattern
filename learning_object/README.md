### 理解Javascript对象
ECMAScript-262中把对象定义为:"无序属性的集合,其属性可以包含基本值、对象或者函数"


#### 属性类型
ECMAScript中有两种属性: 数据属性和访问器属性

- 1. 数据属性
```javascript
/**数据属性包含一个数据值的位置,在这个位置可以读取和写入值,　数据属性有４个描述其行为的特性
1. [[Configurable]] 表示能否通过delete删除属性从而重新定义属性

2. [[Enumerable]] 　表示能否通过for-in循环返回属性

3. [[Ｗritable]]    表示能否修改属性的值

4. [[Value]]        包含这个属性的数据值
*/

var person = {}
Object.defineProperty(person, 'name', {
    writable: true, // 能否修改属性值
    configurable: false,　// 能否被delete删除 一旦设置为false后续不可修改
    enumerable: true,　// 能否遍历
    value: "wangfpp"
})
```

- 2. 访问器属性
```javascript
/**
 * 访问器属性不包含数据值　他们包含一对getter和setter函数
 * 在读取访问器属性时会调用getter函数　这个函数会负责返回有效的值
 * 
 * 在写入访问器属性时会调用setter函数并传入新值　这个函数会负责决定如何处理数据
 * 
 * 访问器属性的４个特性
 * 
 * 1. [[Configurable]] 表示能否通过delete删除属性、能否修改属性的特性或者能否把属性修改为数据属性
 * 
 * 2. [[Enumerable]]  表示能否通过for-in遍历
 * 
 * 3. [[Get]] 在读取属性时调用的函数
 * 
 * 4. [[Set]] 在写入属性时调用的函数
 * 
 * /

```