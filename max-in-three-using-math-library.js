function maxInThree(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

const jim = 99;
const dela = 95;
const chinku = 100;

const maxNum = maxInThree(jim, dela, chinku);

if (maxNum === jim) {
    console.log('jim');
}
else if (maxNum === dela) {
    console.log('dela');
}
else {
    console.log('chinku');
}