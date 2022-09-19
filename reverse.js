function reverseString(text) {
    let reversed = '';
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        reversed += element;
        console.log(element, reversed);
    }
    return reversed;
}

const myStr = 'This is some random text string. I will be reversing this string in this JS file.'
const newStr = reverseString(myStr);
console.log(newStr);