// 构造器
// 使用函数批量构造Object

/**
 * @description 批量构造学生类
 * @param {String} name 学生姓名
 * @param {Number} age 年龄
 * @param {String} grade 班级
 * @param {Number} gender 性别
 * @param { Array} scores 学科分数
 */
function Student (name, age, grade, gender, scores) {
    this.name = name;
    this.age = age;
    this.grade = grade;
    this.gender = gender === 0 ? "女" : "男";
    this.scores = scores || [];
    


    this.sumScore = _ => {
        let len = this.scores.length;
        if (len === 0) {
            return 0;
        } else if (len === 1) {
            return this.scores[0];
        } else {
            return eval( this.scores.join("+") );
        }
    }
}

let wangfpp = new Student("wangfpp", 30, "三年一班", 1, [1, 2, 3, 4]);
let fangxb = new Student ("fangxiangbin", 20, "青岛一班", 1, [100, 100, 100, 98, 96]);
// console.log(wangfpp)
// console.log(wangfpp.sumScore())

// console.log(fangxb)
// console.log(fangxb.sumScore())


// 实例的constructor(构造函数)属性 指向构造函数Student
console.log(wangfpp.constructor === Student)
console.log(fangxb.constructor === Student)
console.log(wangfpp.prototype)
console.log(wangfpp.__proto__)

// 
console.log(wangfpp instanceof Object)
console.log(wangfpp instanceof Student)


/**
* 每个实例的内部方法为单独的Function实例 
* 每次构造函数实例化会给每个实例的方法重新创建一遍
**/
console.log(wangfpp.sumScore === fangxb.sumScore)




