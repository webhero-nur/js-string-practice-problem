const jim = 100;
const dela = 95;
const chinku = 99;

// if (jim > dela && jim > chinku) {
//     console.log('jim');
// }
// else if (dela > jim && dela > chinku) {
//     console.log('dela');
// }
// else {
//     console.log('chinku');
// }

const maxNum = Math.max(jim, dela, chinku);

if (maxNum === jim) {
    console.log('jim');
}
else if (maxNum === dela) {
    console.log('dela');
}
else {
    console.log('chinku');
}