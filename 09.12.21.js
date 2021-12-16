// const data = { a: 1 };


const objectChecker = [1,2];

 function objectFinder (obb) 
 {  return ( typeof objectChecker === "object"  && typeof objectChecker !== null && typeof objectChecker !== Array )? true : false ; }

console.log(objectFinder(objectChecker));


/////////////////////// Exercise 2

const data = { a: 1, b: 2 };
const dataToArray = Object.entries(data);
const makePairs = dataToArray.map((item)=> item)

console.log(makePairs);

//////////////////////// Exercise 3

const dataToArrayValue = Object.values(data);
console.log(dataToArrayValue);



