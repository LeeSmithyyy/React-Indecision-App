class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        //return 'Hi. I am '+ this.name + '!';
        return `Hi. I am ${this.name}!`;   //ES6 template strings
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;  //not flipped twice
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}


//const me = new Student('Lee Smith', 24, 'Computing');
const me = new Traveler('Lee Smith', 24, 'Maidstone');
console.log(me.getGreeting());


const other = new Student();
console.log(other.getGreeting());