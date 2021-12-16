const toDosStore = [];

function addItemToArray (obj, item) {
    return obj.push(item);
}
addItemToArray(toDosStore, "Shopping");

const dairyStuffs = ["Home Work", "Go to the gym"]

addItemToArray(toDosStore, dairyStuffs );

addItemToArray(toDosStore, "cook Dinner" );

console.log(toDosStore);

let itemAfterRemoved = (obj, index) => {
    return obj.filter((item)=> {
        return item != obj[index]
    })
}

let finaleArray = itemAfterRemoved(toDosStore, 0);

console.log(finaleArray);


let arrayAfterPush = finaleArray.splice(1,0, "go to swim");

console.log(finaleArray);


/////////////////////////

const editItemByOrderNumber = (array,orderNumber,itemValue) => {
    array[orderNumber] = itemValue; //OrderNumber is the index position.
    //toDosStore[orderNumber] = itemValue;
    return array;
    
    }
    
    console.log(editItemByOrderNumber(toDosStore,1,'Revision Study')); 



/////////////////////////////

function isEmpty (obj) {
    for (let key in obj) {
    if (obj[key] !== undefined) {
    return false;
    }
    }
    return true;
    } 


    //////////////////////////

    const isEmpty = obj => {
        let values = Object.values(obj)
        let newValues = values.every(value => value === undefined)
        return newValues
        } 



