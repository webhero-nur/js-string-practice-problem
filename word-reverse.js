function reverseWords(myStr) {
    const words = myStr.split(' ');
    const result = [];
    for (let i = words.length - 1; i >= 0; i--) {
        const element = words[i];
        result.push(element);
        // console.log(element, result);
    }
    const wordReverse = result.join(' ');
    return wordReverse;
}

const myString = 'I will reverse the words position in this JS file.';
const reverseWord = reverseWords(myString);
console.log(reverseWord);