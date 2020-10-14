// 创建Object

// 数据属性
// var person = {};
// Object.defineProperty(person, 'name', {
//     writable: true, // 能否修改属性值
//     configurable: false,　// 能否被delete删除
//     enumerable: true,　// 能否遍历
//     value: "wangfpp"
// })

// Object.defineProperty(person, 'age', {
//     writable: false,
//     configurable: false,
//     enumerable: true,
//     value: 30
// })

// // Configurable设置为false后后续无法修改
// // Object.defineProperty(person, 'age', {
// //     writable: true,
// //     configurable: true
// // })

// // Object.defineProperty(person, 'height', {
// //     writable: false,
// //     configurable: false,
// //     enumerable: true,
// //     value: 175
// // })

// person.age = 20
// // delete person.age
// console.log(person)




// 访问器属性
var book = {
    _year: 2020,
    edition: 1
}

Object.defineProperty(book, "year", {
    get: function() {
        return this._year
    },
    set: function(newValue) {
        let num = newValue - this._year;
        if (num > 0) {
            this._year = newValue;
            this.edition = num
        }
    }
})

console.log(book)
book.year = 2025
console.log(book)

book.age = 30

console.log(Object.getOwnPropertyNames(book))