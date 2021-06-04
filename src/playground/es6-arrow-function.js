const square = function(x) {
    return x*x;
};

//const squareArrow = (x) => {
//    return x*x;
//};

const squareArrow = (x) => x * x;

console.log(square(8));
console.log(squareArrow(7));

//challenge
const fullName = "Mike Smith";

const getfirstName = (fullName) => {
    return fullName.split(" ")[0];
;}

const getName = (fullName) => fullName.split(" ")[0];

console.log(getName(fullName));
console.log(getfirstName(fullName));