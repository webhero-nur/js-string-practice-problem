function minInThree(num1, num2, num3) {
    return Math.min(num1, num2, num3);
}

const jim = 90;
const dela = 95;
const chinku = 89;

const maxNum = minInThree(jim, dela, chinku);

if (maxNum === jim) {
    console.log('jim');
}
else if (maxNum === dela) {
    console.log('dela');
}
else {
    console.log('chinku');
}