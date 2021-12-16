// A - Object

const activities = {
    Monday: "swimming",
    Tuesday: "Book Club",
    Wednesday: "Gymnastic",
    Thursday: "Babysitting",
    Friday: "Debating Society",
    WeeksPlan: function () {
        return `${ this.Monday[0].toUpperCase()+ 
            
            this.Monday.substring(1, this.Monday.length-1).split(``).reverse().join("")
            
            +this.Monday[this.Monday.length-1].toUpperCase()} > ${this.Tuesday} > ${this.Wednesday} `
    }
}

// console.log(activities.WeeksPlan());

console.log(Object.entries(activities));

////////////////// B - Arrays

// let word;
// let sentence = '';

// function scrambleWord(arr) {

//     for (let ii = 0; ii < arr.split(" ").length; ii++)  {

//         word = (arr.split(" ")[ii])[0]+
//             arr.split(" ")[ii].substring(1, arr.split(" ")[ii].length - 1).split("").reverse().join("") +
//             arr.split(" ")[ii][arr.split(" ")[ii].length - 1];

//         sentence += " "+ word;
//     }

//     return sentence
// }

// console.log(scrambleWord("Amanda says thank you for your help"));

//////////////////////////////////

// Murad solution B-1 */
// const scrambleWords = (str) => {
// let punctuation ='';
// let newStr = '';
// let scrambled;

//   if(str.includes(".") || str.includes("!") || str.includes("?")){
//     punctuation = str.substr(-1);
//     newStr = str.slice(0, -1);
//   }

//   let words = newStr.split(" ");
//   scrambled = words.map(word => {
//     if(word.length < 3) {
//       return word
//     }else{
//       return word.substring(0,1) + word.substring(1, word.length-1).split('').reverse().join('')+ word.substring(word.length-1)
//     }
//   });
//   return scrambled.join(" ")+ punctuation
// }

// console.log('solution :', scrambleWords('Longer words are probably harder to i read.'));

//////////////// other solution

function scrambleWords(str) {
    let sentence
    let word = str.split(" ");
    return word.map((subWord) => {
        subWord[0] + subWord.substring(1, subWord.length - 1).split("").reverse().join("") + subWord[subWord.length - 1]

    }).join(" ")
}
console.log(scrambleWords("javascript is super hard but i love it"))


///////////////////// Exercise B-2 ////////////// ivo's solution

let array = [
    ["Peter", "Paul", "Mary", "Helena", 'Ivo'],
    ["Tennis", "Swimming", "Football", "Dance"],
]

const convertNestedArrayToObject = arr => {

    let obj = {}

    for (let i = 0; i < arr[0].length; i++) {

        obj[arr[0][i]] = arr[1][i]
    }
    return obj
}

console.log(convertNestedArrayToObject(array))


/////////////////////// B 3 grid 
///////// Murat's solution

let newObj = {
    rows: 7,
    columns: 5
};
const makeGameGrid = (obj) => {
    let newArray = [];
    for (let i = 0; i < obj.rows; i++) {
        newArray.push([]);
        for (let j = 0; j < obj.columns; j++) {
            newArray[i].push(`r${i+1}c${j+1}`);
        }
    }
    return newArray;
}
console.log(makeGameGrid(newObj));

///////////////////  B4 Darren solution

const experimental_data = {
    "Day 1": [12, 14, 52, 37, 5], // the key is the name of the day // the element is the value
    "Day 2": [15, 17, 50, 40, 35, 11],
    "Day 3": [10, 24, 42, 17]
}
const generateAverages = (experimental_data) => {
    let result = {} // {} is an empty object
    let total = 0; // total is a variable that will hold the total of all the values
    let dataCount = 0; // dataCount is a variable that will hold the number of array items
    for (element in experimental_data) { //element is /at this point is targeting the key
        let item = experimental_data[element]; //item is the value and experimental_data[element] is the key
        result[element] = item.reduce((prev, curr) => prev + curr) / item.length; // from reduce is the sum of the array and divided by the length of the array
        total += item.reduce((prev, curr) => prev + curr); //total is the sum of all the values in the array
        dataCount += item.length; //dataCount is the length of the array
    }
    result.Overall = total / dataCount; // total / datacount is the average of all the values in ALL of the array
    return result; //returns the object
}
console.log(generateAverages(experimental_data));


/////////////////////  Ashliys Solution

function validateName(name){
    const numbers = "0123456789";
    function initials(arg){  
        if(arg.length == 2){
            if(!numbers.includes(arg[0])){
                if(arg[1] == '.'){
                    return arg[0] == arg[0].toUpperCase()
                }
                return false
            }
            return false
        }
        return false;
    }

    function words(arg){
        if(!numbers.includes(arg.split(''))){
            if(arg.length > 2){
                if(arg[arg.length-1] != '.'){
                    return (arg[0] == arg[0].toUpperCase()) && (arg.slice(1) == arg.slice(1).toLowerCase()) 
                }
                return false
            }
            return false
        }
        return false
    }

    const nameArray = name.split(' ');
    if(!nameArray.every(word => word.includes('-'))){

        if(nameArray.length == 3){
            if(initials(nameArray[0])){
                return initials(nameArray[1]) && words(nameArray[2])
            } 
            if(words(nameArray[0])){
                if(initials(nameArray[1]) || words(nameArray[1])){
                    return words(nameArray[2])
                }
                return false
            }
            return false
        }
        if(nameArray.length == 2){
            if(initials(nameArray[0])){
                if(words(nameArray[1])){
                    return true
                }
                return nameArray.every(item => words(item));
            }
        }

    }

    return false

};
console.log(validateName('Herb. George Wells'));