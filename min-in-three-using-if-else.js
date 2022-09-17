function minInThree(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    }
    else if (num2 < num1 && num2 < num3) {
        return num2;
    }
    return num3;
}

const jim = 100;
const dela = 95;
const chinku = 99;

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