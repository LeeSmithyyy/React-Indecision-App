var nameVar = 'Lee';
var nameVar = 'Bruce';
console.log('nameVar', nameVar);

let nameLet = 'Katie';
nameLet = 'Amanda';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block Scoping

const fullName = 'Lee Smith';
let firstName; //define before if statement

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log (firstName);
}

//Const and let will not work out of if statement unless firstName is defined out of if first.
console.log(firstName);
