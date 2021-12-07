
// let word;
// let sentence = '';

// function scrambleWord(arr) {

//     for ( let ii=0; ii<arr.split(" ").length; ii++){
    
//         word = (arr.split(" ")[ii])[0].toUpperCase() +
//         arr.split(" ")[ii].substring(1, arr.split(" ")[ii].length-1).split("").reverse().join("") +
//         arr.split(" ")[ii][arr.split(" ")[ii].length-1].toUpperCase();

//         sentence += " "+word;
//     }

// return sentence
// }

// console.log(scrambleWord("swimming and running iss good exercise"));


let word;
let sentence = '';

function scrambleWord(arr) {

    for ( let ii=0; ii<arr.length; ii++){
        let singleWord = arr[ii];

        if(typeof singleWord === "string"){

            word = singleWord[0].toUpperCase() +
            singleWord.substring(1, singleWord.length-1).split("").reverse().join("") +
            singleWord[singleWord.length-1] .toUpperCase();
     
            sentence += " "+word;
        } else{
            console.log(`it's a number`);
        }
    }
    return sentence.trimStart()
    }

console.log(scrambleWord(["autumn", "summer",777, "winter"]));


//console.log(scrambleWord(["swimming and running iss good exercise"]));
