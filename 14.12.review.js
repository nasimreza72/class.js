/////// Challenge 3

let integer = 521;
let integerReverse = Number(integer.toString().split("").reverse().join(""))
console.log(integerReverse, integer);

///////////////// Challenge 4

let sentence = "i love javascript, html and css."
let capitalizedLetter = sentence.split(" ");

function letterTransformer (str) {
 return str.map((item)=>item[0].toUpperCase()+item.substring(1))
}
let newSentence = letterTransformer(capitalizedLetter).join(" ");
console.log(newSentence);

