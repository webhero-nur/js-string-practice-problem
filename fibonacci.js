const fibo = [0, 1];
for (let i = 2; i < 13; i++) {
    const element = fibo[i - 1] + fibo[i - 2];
    fibo.push(element);
}
console.log(fibo);