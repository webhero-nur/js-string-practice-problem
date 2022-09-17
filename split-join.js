const lyrics = 'Tumi bondhu kala pakhi, ami jeno ki. bosonto kale tomai bolte pari ni. kala kala, sada sada.';
const parts = lyrics.split(' '); // spliting every words using <space>
// console.log(parts);
const sentences = lyrics.split('.'); // spliting every sentences using full stop (.)
// console.log(sentences);
const chars = lyrics.split(''); // spliting every character using empty string
// console.log(chars);

const partial = lyrics.slice(5, 11); // slicing a string using index
// console.log(partial);

const partial2 = lyrics.substring(12, 16); // making a sub string using index. almost same as slicing
// console.log(partial2);

const partialConcat = partial.concat(' ', partial2); // concat (joining multiple string)
// console.log(partialConcat);

const lines = [
    'Tumi bondhu kala pakhi, ami jeno ki',
    'Bosonto kale tomai bolte pari ni',
    'Kala kala, sada sada'
]

const newSong = lines.join('. '); // joining string with an extra character or characters between two string
console.log(newSong);