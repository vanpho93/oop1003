/*
function Person (ten, tuoi) {
    this.name = ten;
    this.age = tuoi;
    this.sayHello = function() {
        console.log('Hello, my name is ' + this.name);
    }
}
*/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log('Hello, my name is ' + this.name);
    }
}

const teo = new Person('Teo', 10);
const ti = new Person('Ti', 12);

console.log(teo);
console.log(ti);
teo.sayHello();
ti.sayHello();
