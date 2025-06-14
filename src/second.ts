interface User {
    name: string;
    age: number;
    firstName: string;
    lastName: string;
}
function sumofAge(user1: User, user2: User) {
const age = sumofAge(
    { name: 'anant', age: 21, firstName: 'Anant', lastName: 'Sharma' },
    { name: 'rohan', age: 24, firstName: 'Rohan', lastName: 'Verma' }
);
}
const age = sumofAge(
    { name: 'anant', age: 21, firstName: 'Anant', lastName: 'Sharma' },
    { name: 'rohan', age: 24, firstName: 'Rohan', lastName: 'Verma' }
);
console.log(age);