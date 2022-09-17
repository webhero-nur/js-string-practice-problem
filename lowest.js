function minInArray(numbers) {
    console.log('Inside the function: ');
    let lowest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (lowest > numbers[i]) {
            lowest = numbers[i];
        }
    }
    return lowest;
}

const weights = [65, 41, 96, 87, 46, 84, 65, 84, 16, 84, 16, 58, 45, 87, 32, 45, 68, 45];
const lightest = minInArray(weights);
console.log('Lightest weight is:', lightest);