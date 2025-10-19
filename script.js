// Person class
class Person {
    constructor(name, age) {
        this._name = name; // use underscore to indicate private property
        this._age = age;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for age
    set age(age) {
        this._age = age;
    }

    // Optional getter for age if needed
    get age() {
        return this._age;
    }
}

// Student class inherits from Person
class Student extends Person {
    study() {
        console.log(`${this._name} is studying`);
    }
}

// Teacher class inherits from Person
class Teacher extends Person {
    teach() {
        console.log(`${this._name} is teaching`);
    }
}

// Example usage
const person = new Person("John", 25);
console.log(person.name); // John
person.age = 30;
console.log(person.age); // 30

const student = new Student("Alice", 22);
student.study(); // Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach(); // Bob is teaching

module.exports = { Person, Student, Teacher };
