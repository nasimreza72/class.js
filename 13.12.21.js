//////////// E1

let arr = [1, 2];
console.log((Array.isArray(arr)));

const isObject = (arg) => {
    if (typeof arg === "object" && arg !== null && !Array.isArray(arg)) {
        return true
    } else {
        return false
    }
}

console.log(isObject(arr));

///////// E2

const data = {
    a: 1,
    b: 2
};
const getArray = Object.entries(data);
console.log(getArray);

// const data2 = {a:1, b:2};  //it's a way how object entries work 
// console.log(data2["b"]);

// const makePairs = (obj) => {
// const arr = []
// for (let key in obj) {
// // console.log(key);
// arr.push([key, obj[key]]);
// // console.log(obj[key]);
// }
// return arr;
// }

// console.log(makePairs(data2)); 

//////////////// E3  //we can solve it with delete operator
let obj = {
    a: 1,
    b: 2
}

const withOut = (obj, oneKey) => {
    let newObj = {};

    for (key in obj) {
        if (key != oneKey) {
            // console.log(`this is the key` + newObj[key]);
            newObj[key] = obj[key]
        }
    }
    return newObj
}
console.log(withOut(obj, "a"));

///////// array method combining with others. 

let array = [400, 200, -20, 241, -300, -250]

const arrReturn = array.filter((item) => (item > 0)).reduce((acc, item) => acc + item)
console.log(arrReturn);

///////////////////  E4


const data11 = {
    a: 1,
    b: undefined
};
const data22 = {
    a: undefined
};

const definedObject = (object) => {
    let arr = Object.values(object)
    console.log(arr);
    return arr.every((item => item === undefined))

    // return arr.includes(undefined) && arr.length==1 || arr.length==0 ? true : false ;
}

console.log(definedObject({}));


///////////////////////////// E5


const data111 = {
    a: 1,
    b: "3 euro each",
    c: 1
};
const data222 = {
    a: 1,
    b: "3 euro each",
    c: 1
};
const data333 = {
    a: 1,
    b: 2
};

const objectValueChecker = (obj1, obj2) => {
    let objectValues1 = Object.values(obj1);
    let objectValues2 = Object.values(obj2);
    let result = 0;

    if (objectValues1.length === objectValues2.length) {
        // for (let i = 0; i < objectValues1.length; i++) 
        objectValues1.forEach((item,index) => {
            if ((objectValues1[index]) === (objectValues2[index])) {
                result++
            }
        })
    }
    return result == objectValues1.length ? true : false;
}
console.log(objectValueChecker(data111, data222));

//////////////////// E6

// const data10 = { a: { b: [1, 2, 3] } }
// console.log(invoke(data, 'a.b', 
// 'splice', [1, 2]));







/////////////////////  E8

const data10 = { a: 1, b: { c: 1 } };  
const data20 = { a: 1, b: { d: 1 } };  
const data30 = {a:3, b: { c: 2} };


const objectValueChecker1 = (obj1, obj2) => {
    let objectValues1 = Object.entries(obj1);
    let objectValues2 = Object.entries(obj2);
    let result1 = 0;
    console.log(objectValues1, objectValues2);
    if (objectValues1.length === objectValues2.length) {
        // for (let i = 0; i < objectValues1.length; i++) 
        objectValues1.forEach((item,index,array) => {
            if ((objectValues1[item]) === (objectValues2[item])) {
                result1++
            }
        })
    }
    return result1 == objectValues1.length ? true : false;
}
console.log(objectValueChecker1(data10, data20));
