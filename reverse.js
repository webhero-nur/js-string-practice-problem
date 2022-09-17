function reverseString(text) {
    for (let i = text.length - 1; i >= 0; i--) {
        console.log(text[i]);

    }
}

const myStr = 'This is some random text string. I will be reversing this string in this JS file'
const newStr = reverseString(myStr);