//arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};

console.log(add(55, 1));


// this keyword - no longer bound

const user = {
    name: 'Lee',
    cities: ['Rochester', 'Maidstone', 'Chatham'],
    printPlacesLived() {  //this will not work with arrow function
        //const that = this; //work around to use this in the next function
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

//Challenge

const multiplier = {
    numbers: [1, 6, 4],
    multiplyBy: 4,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());