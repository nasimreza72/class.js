let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
//   let usersById = groupById(users);
  
  /*
  console.log(usersById)
  // after the call we should have:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
//   */
//   Such function is really handy when working with server data.
  
//   In this task we assume that id is unique. There may be no two array items with the same id.
  
//   Please use array .reduce method in the solution.

function reduceMethod (param) {
    return param.reduce((acc, user) => {
        return {...acc, [user.id]:user}
    }, {})
}
console.log(reduceMethod(users));


//Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
//1
let users1 = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];

  //////////////////////
// function groupById(array) {
//     return array.reduce((acc, object) => {
//       return {...acc, [object.id]: object};
//     }, {})
//   }
//   let usersById= groupById(users)
//   console.log(usersById)
/*output:
   { john: { id: 'john', name: 'John Smith', age: 20 },
  ann: { id: 'ann', name: 'Ann Smith', age: 24 },
  pete: { id: 'pete', name: 'Pete Peterson', age: 31 } } */
  function groupById2(array) {
    return array.reduce((acc,object) => {
     acc[object.id]= object;
      return acc;
    },  {})
  }
  let userById2 = groupById2(users1);
  console.log(userById2);



  //////////////////////////  EXERCISE 2 FOR REDUCE METHOD

  const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
  ];

  console.log(orders.reduce((acc, item) => acc+item.amount, 0));
////////////////// EXERCISE 2


  const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 

  const newArrayNumbers = arrayOfNumbers.map( num => num+1 , 0)

  console.log(newArrayNumbers);


  //////////////////////// EXERCISE 3

  filterEvens =[1,2,3,11,12,13,6]; //returns [2,12]
// filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]

const evenNumberCalc = filterEvens.filter((item) => item % 2=== 0, 0)
console.log(evenNumberCalc);


/////////////////////////////// EXERCISE 4

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

function letterFinder (func, arr) {
 return   func.filter((item) => item.includes(arr))
} 
    
console.log(letterFinder(friends, "e"));


//////////////////////////////////// Exercise 5

let array = [22,33,44,55,66]

function sum (addingNumber) {
    return addingNumber.reduce((acc, item) => acc+item, 0)
}
console.log(sum(array));

/////////////////////////////// Exercise 6



function square (array){
    return array.reduce((acc, item)=>{
    return [...acc, Math.sqrt(item)]
    },[])
    }
    console.log(square([9,7,7]));

    ////// Explanation about spread operator

    let arr1=[1,2,3]
let arr2=[...arr1,4,5];
console.log(arr2)