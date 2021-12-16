// 4. Counting Letters. Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.

// Example:

// countLetters("tree") ➞ {t: 1, r: 1, e: 2}

/////// reduce method

// function freeShipping (obj){
//     let orders = Object.values(obj);
//     let total = 0;
//     for (let i = 0 ; i<orders.length; i++){
//         total += orders[i];
//     }
//     return total>50;
// }

// console.log(freeShipping({"Surround Sound Equipement": 39.99, "mobile": 20}));
// const Object1 = {
//     "Sponge": 3.50,
//     "Soap": 5.99,
//     "shampoo": 400,
// }
// let sum = 0;
// function freeShipping(Object1) {
//     let ArrayOfObject1 = Object.values(Object1);
//     console.log(ArrayOfObject1)
//     sum = ArrayOfObject1.reduce((previouValue, currentValue) => {
//         return previouValue + currentValue
//     })
//     return sum
// }
// let callTheFunction = freeShipping(Object1);
// console.log(callTheFunction)




// const obj ={
//     a: 45,
//     b: 55,
//     c: 76,
//     g: [55, 66, 77],
//     e: 67,
//     f: 55,
//     d: 71
// }

// console.log(obj);

// let arr = Object.values(obj)
// // console.log(arr);

// let sum = 0;

// const freeShipping = arr.reduce((prev, curr, index, arr) => {
//    if(typeof(curr)==="number"){
//    return prev+curr  
//    }else{
//     let sum = 0;
//     for (let i = 0; i<curr.length; i++) {
//         sum+= curr[i];
//     }
//     return prev+sum
//     }
// }, 0);

// console.log(freeShipping);

////////////////////Exercise 3 , part 2

// books.forEach(book=>{
//     if(book.alreadyRead) console.log(`I already read ${book.title} by ${book.author}`);
//     else console.log(`I still need to read ${book.title} by ${book.author}`)
//     }); 


    ///////////////////// Exercise 4

    let board = [
        [1, 2, 3],
        ["quick", "brown", "fox", "jumped",["cow", "tiger"], "over", "lazy", "dog"],
        [true, false]
      ];

    board.forEach(item => {

        item.forEach(subItem => { 
            
            console.log(subItem);
            // subItem.forEach(sub2Item => {
            //     console.log(sub2Item);
            // }

        })
    })
    //   3

    const recipes = {
        ingredients : {
            ingredient1 : "butter",
            ingredient2 : "flour ",
            ingredient3 : "milk",
        },
         
    }

  

    ////////////////////////////   filter
 
        var voters = [
            {name:'Bob' , age: 30, voted: true},
            {name:'Jake' , age: 32, voted: true},
            {name:'Kate' , age: 25, voted: false},
            {name:'Sam', age: 30 , voted: true},
            {name:'Phil' , age: 21, voted: false},
            {name:'Ed' , age:55, voted:true},
            {name:'Tami' , age: 54, voted:true},
            {name: 'Mary', age: 31, voted: false},]

           
           const calcVoter = voters.filter((item) => item.voted == false); 
           const calcVoter1 = voters.filter((item) => typeof item.voted === "boolean"); 
           const calcVoter2 = voters.filter((item) => item.voted === false); 
           const calcVoter3 = voters.filter((item) => item.age >= 35); 
           const calcVoter4 = voters.filter((item) => item.name[3]); ///to check how many letters in the name and filter it from the number given on [here] .


           console.log(calcVoter.length, voters.length);
           console.log(calcVoter1);
           console.log(calcVoter2);
           console.log(calcVoter3);
           console.log(calcVoter4);
           console.log(voters[1]);


           //////////////////////////////////////  Reduce



           const people =[
            {id:"1", name:"Hallie", age:42}, 
            {id:"2", name:"Antonia", age:20},
            {id:"3", name:"Ronny", age:24}
        ];
        ​
        // Counting the number of people
        let numberPeople = people.reduce((acc)=>acc+1,0);
        console.log(numberPeople);
        ​
        // Sum of ages
        let sumAges= people.reduce((acc, person)=>acc + person.age, 0);
        console.log(sumAges);
        ​
        let nameOfPeople= people.reduce((acc, person)=>[...acc, person.age], []);
        console.log(nameOfPeople);
        // []
        // [42]
        // [42,20]
        // [42,20,24]
        ​
        let idLookup= people.reduce((acc,person)=>{
            return {...acc, [person.id]:person};
        },{})
        console.log(idLookup["1"]);
        ​
        ​
        const orders =[
            {id:"1", status:"pending"},
            {id:"2", status:"pending"}, 
            {id:"3", status:"shipped"},
            {id:"4", status:"cancelled"},
            {id:"5", status:"shipped"}
        ]
        ​
        let numOccurencies = orders.reduce((acc, order)=>{
            return {...acc, [order.status]:(acc[order.status]|| 0)+1}
        }, {});
        ​
        console.log(numOccurencies);