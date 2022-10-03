//q1
let name ="harr\""
console.log(name.length)

//
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'shefox';
console.log(sentence.includes(word))

// console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`)

//q2
const str1 = 'Catsarethebest!';

console.log(str1.endsWith('best!'));

console.log(str1.endsWith('best', 14))

const str2 = 'Is this a question?'

console.log(str2.endsWith('question?'))

//q3
let lc ="HELLO BUDDY , I AM CHANGEING THIS LINE IN LOWERCASE"
console.log(lc.toLowerCase()) 

//q4
let alpha = "please give me 1000 rupees"
let amnt= Number.parseInt(alpha.slice(14))
console.log(amnt)
console.log(typeof amnt)

//q4
let names = "nikhil"
// names = "niki"
name[0]="s"

console.log(names)