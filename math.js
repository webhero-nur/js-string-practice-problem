const result = Math.pow(3, 8);      // power using Math library in JS
// console.log(result);

const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2);      // absolute value using Math library in JS
// console.log(gap);
if (gap < 5) {
    console.log('you guys can be friends');
}
else {
    console.log('you guys stay apart');
}


// ---------------------------------------
// round, ceil, floor
// ---------------------------------------
const number = 2.4598;
const fullNumber = Math.round(number);      // converting a fractional number to a full number
// console.log(fullNumber);
const ceilNumber = Math.ceil(number);       // converting a fractional number to upper full number
// console.log(ceilNumber);
const floorNumber = Math.floor(number);     // converting a fractional number to lower full number
// console.log(floorNumber);

// ----------------------------
// Random value
const random = Math.random();     // generate a random number between 0 to 1
// console.log(random);

const random2 = Math.round(Math.random() * 100);    // generate a random number between 0 to 100
// console.log(random2);
for (let i = 0; i < 20; i++) {
    const random3 = Math.round(Math.random() * 6);    // generate a random number between 0 to 6
    console.log(random3);
}