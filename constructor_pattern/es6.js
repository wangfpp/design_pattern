class Student{
    constructor(name, age, grade, gender, scores){
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.gender = gender === 0 ? "女" : "男";
        this.scores = scores || [0]; 
    }
    sumScore() {
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


let wangfpp = new Student("wangfpp", 30, "三年一班", 1)
console.log(wangfpp);
console.log(wangfpp.sumScore())