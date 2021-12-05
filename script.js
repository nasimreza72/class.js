// A - Object

const activities = {
    Monday : "swimming",
    Tuesday : "Book Club",
    Wednesday : "Gymnastic",
    Thursday : "Babysitting",
    Friday : "Debating Society",
    WeeksPlan : function () {
        return `${ this.Monday[0].toUpperCase()+ 
            
            this.Monday.substring(1, this.Monday.length-1).split(``).reverse().join("")
            
            +this.Monday[this.Monday.length-1].toUpperCase()} > ${this.Tuesday} > ${this.Wednesday} `
    }
}

console.log(activities.WeeksPlan());


let word;
let sentence = '';

function scrambleWord(arr) {

    for ( let ii=0; ii<arr.split(" ").length; ii++){
    
        word = (arr.split(" ")[ii])[0].toUpperCase() +
        arr.split(" ")[ii].substring(1, arr.split(" ")[ii].length-1).split("").reverse().join("") +
        arr.split(" ")[ii][arr.split(" ")[ii].length-1].toUpperCase();

        sentence += " "+word;
    }

return sentence
}

console.log(scrambleWord("Amanda says thank you for your help!"));