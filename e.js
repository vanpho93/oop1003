class Person {
    constructor(age) {
        this.age = age;
    }

    get birthYear() {
        return 2018 - this.age;
    }

    set birthYear(value) {
        this.age = 2018 - value;
    }
}

const teo = new Person(10);

// console.log(teo.getBirthYear());
console.log(teo.birthYear);
teo.birthYear = 2010;
console.log(teo.birthYear);