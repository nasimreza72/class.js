const array = ["apple", "zoo", "aeiou are vowels", "0i07", "javaScript", "Fox is a cunning animal"];

const vowelsList = "aeiou";

// function vowels(vowelsList) {

//     for (let v = 0; v < vowelsList.length; v++) {
//         //console.log(vowelsList.split("")[v]);
//     }
//     return  vowelsList.split("")[v];
// }

// console.log(vowels(vowelsList));

function vowelIdentifier(array) {
    let positiveResult;

    for (let i = 0; i < array.length; i++) {
        if (array[i].toLowerCase().includes(vowelsList.split("")[0]  && vowelsList.split("")[0])) {
            positiveResult = console.log(array[i], array.indexOf(array[i]));
        }
        
        else if (array[i].toLowerCase().includes(vowelsList.split("")[1])) {
            positiveResult = console.log(array[i], array.indexOf(array[i]));
        }

        else if (array[i].toLowerCase().includes(vowelsList.split("")[2])) {
            positiveResult = console.log(array[i], array.indexOf(array[i]));
        }

        else if (array[i].toLowerCase().includes(vowelsList.split("")[3])) {
            positiveResult = console.log(array[i], array.indexOf(array[i]));
        }

        else if (array[i].toLowerCase().includes(vowelsList.split("")[4])) {
            positiveResult = console.log(array[i], array.indexOf(array[i]));
        }

        else {
            console.log(`no vowels contain in the word`, array.indexOf(array[i]));
        }
    }
    return positiveResult
}

console.log(vowelIdentifier(array));



/////////////////////////////////////// Henrik solution for exercise 4 (ON mentoring time)

// function allSameVowels (input) {
//     return input.every(num => num.split('').every(num => num === 'a' || num === 'e' || num === 'i' || num === 'o' || num === 'u'));
//     };
// const testArray = ["INIT","ZOOM","SEVEN"];
// function itemIsAString(item){
// return typeof item === 'string'
// }
// function stringContainsJustOneVowel(string){
//   const arrayOfChar = string.split('')
//   const vowels=arrayOfChar.filter(isAVowel).filter(isUnique)
//   console.log(vowels)
//   return vowels.length === 1
// }
// function isAVowel(single){
//     const vowels ="aeiou"
//     single = single.toLowerCase()
//     return vowels.includes(single)
// }
// function isUnique(item, index, array) {
//     return array.indexOf(item) === index;
// }
// function allSameVowels(array){
//     const allItemsAreStrings = array.every(itemIsAString)
//     // console.log(allItemsAreStrings)
//     if (!allItemsAreStrings){
//         return false
//     }
//     const allContainOneVowel =  array.every(stringContainsJustOneVowel)
//     console.log(allContainOneVowel)
// }
// const isOnlyStrings = testArray.every(itemIsAString)
// // console.log(isOnlyStrings)
// // console.log(isAVowel("b"))
// // console.log(stringContainsJustOneVowel("Henrik"))
// allSameVowels(testArray)