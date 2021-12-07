const drinks = {
    drinks1 : "tea",
    drinks2 : "coffee",
    drinks3 : "milk"
}

drinks.drinks4 = "juice";

function getObjectValues () {
  return  Object.keys(drinks)   
}
console.log(getObjectValues());

//////////////////////////////////////////////
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



function getObjectValues2(obj) {
    let result = [];
    for (let [key, value] of Object.entries(obj)) {
    
    result.push([key,value])
    }
    return result
    }
    
    console.log(getObjectValues2(activities));


    /////////////////////////////////////////////

    let arr=Object.values(getObjectValues);
    return arr; 


    //////////////////////////////

    // 3. Merge. Create a function that takes two objects as its parameters and merges them together into a new object.


const first = {firstName: "John"};
const last = {lastName: "Smith"};


function merge(obj1,obj2){

return {...obj1,...obj2};
}

// ////////////////////////////////

function checkObject(object) {
    return Object.keys(object).length === 0? true : false;
}

console.log(checkObject({a:1}));
////////////////

// we really need to understand how array and object methods works. if you know more of them you can easily solve the very difficult problem. Some of us maybe really know how this methods work but as team we need to discuss together and solve all algorithm's together. our main problem what i can see is 

