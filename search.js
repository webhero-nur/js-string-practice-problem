const lyrics = 'Tumi bondhu kala pakhi, ami jeno ki. bosonto kale tomai bolte pari ni. kala kala, sada sada.';

const searchString = 'PaKhi';
// const doesExist = lyrics.includes('pakhi');
// const doesExist = lyrics.includes('Pakhi');
// const doesExist = lyrics.includes(searchString);

const lyricsLowerCase = lyrics.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchString);
const searchLowerCase = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchLowerCase);

const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());

// console.log(doesExist);
// console.log(doesExistOneLine);

// ------------------------------------------
// indexOf

// console.log(lyrics.indexOf('kailla'));
// console.log(lyrics.indexOf('Tumi'));
// 

// if (lyrics.indexOf('sadada') !== -1) {
//     console.log('exist inside the string');
// }
// else {
//     console.log('cannot find it');
// }

// startsWith
// console.log(lyrics.startsWith('2mi'));

// endswith
const fileName = 'myBiodata.pdf';
const otherFile = 'myPic.pdf';

console.log(fileName.endsWith('.pdf'));