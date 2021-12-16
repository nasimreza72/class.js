///////////////// Exercise 1

let names = ["Nasim", "Lara", "Reza"]

function greetMessage(name) {
   console.log(`"Good Morning, ${name}"`); ;
}

function greetUsers(users, greetMessage){
    users.forEach(person => greetMessage(person))
}
greetUsers(names, greetMessage)

//////////////////////// Exercise 2


const array = [1, 2, 3, 4, 5, 6]

// const squareFunction = array.map((num)=> num*num)
// console.log(squareFunction);

function squareCalculator (num) {
    return num*num
}

function squareCalculator2 (array, squareCalculator){
   return  array.map(num => squareCalculator(num))
}
console.log(squareCalculator2(array, squareCalculator));



///////////// Recursive function 

function countNumbers (num) {
    console.log(num);
    // let newNum = num-1;
    if(num>1){
        countNumbers(num-1)
    }
}
countNumbers(5);

////////////////// factorial function

function factorial (number) {
    if (number ==0){
        return 1;
    } else {
        return number *factorial(number -1)
    }
}

let resultFactorial = factorial(5);
console.log(resultFactorial);


function fanc (numb){
    let result1 = [];
    let sum = 0;
    for(let i = 0; i<numb; i++){
      sum = i *(i-1); 
    
      result1.push(sum)
    }
    return result1
}
console.log(fanc(10));

// let experiment = [5, 6, 7, 8]

// let reExperiment = experiment.map(numb=> numb*(numb-1));
// console.log(reExperiment);


/////////////////// Fibonacci Experiment

function fibonacci (fnum) {
    if (fnum==0){
        return 0;
    }else if(fnum<=1){
        return 1;
    }else{
        return fibonacci(fnum-1)+fibonacci(fnum-2);
    }
}
console.log(fibonacci(6));



function reverse(str) {
	let reverseWord = str.split("").reverse().join("");
	return reverseWord;
}

console.log(reverse("hello"))