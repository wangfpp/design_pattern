(() => {
    function Person(name) {
        this.name = name;
    }
    
    Person.prototype.sayName = function() {
        console.log(`my name is: ${this.name}`)
    }
    
    function Car(model) {
        this.model = model;
    }
    
    Car.prototype.getModel = function() {
        console.log(`车型:${this.model}`)
    }
    
    
    
    function Create (type, args) {
        console.log(type, args)
        return new this[type](args);
    }
    
    Create.prototype = {
        person: Person,
        car: Car
    }
    
    
    var wangfpp = new Create('person', 'wangfpp');
    console.log(wangfpp)
    wangfpp.sayName();

    console.log(Create.constructor)
    console.log(Create.prototype);
    console.log(Create.__proto__);
    console.log('*********-------------------------**********')
    console.log(wangfpp.constructor)
    console.log(wangfpp.prototype);
    console.log(wangfpp.__proto__)

    /**
     * new Create('person', "wangfpp") => {
     *  
     *  
     * 
     * }
     * 
     * 
     */
    
})()
