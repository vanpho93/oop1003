const person = {
    name: 'Teo',
    age: 10,
    school: {
        name: 'Khoa Pham'
    },
    sayHello: function() { console.log('Hello.'); }
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.school.name);
person.sayHello();