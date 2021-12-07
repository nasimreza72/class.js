function calcTip(bill) {
    if (50 <= bill && 300 >= bill) {
        return bill * .15
    } else {
        return bill * .2
    }
}

const bill = [125, 555, 44, 100]

const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[bill.length - 1])]

const total = [bill[0] + calcTip(bill[0]), bill[1] + calcTip(bill[1]), bill[bill.length - 1] + calcTip(bill[bill.length - 1])]

console.log(calcTip(bill[bill.length - 1]));


console.log(bill, tips, total);

console.log(bill + tips + total);

const allResult = bill + tips;
console.log(allResult);


// Exercise 2

familyMember = ["Father", "Mather", "Sisters", "Wife"];
familyMember.push("Nephew"),


    jonas = {
        firstName: "Jonas",
        LastName: "Schmedtman",
        date: new Date,
        friends: ["Asif", "Babu", "Ashiq"]
    }
jonas.friends2 = ["sumon", "samir", "saddam", familyMember]

jonas.friends2.push("sobuz");

jonas.friends.pop()

console.log(jonas);



console.log(familyMember);

const description = `${jonas.firstName} has ${jonas.friends2.length} friends,` +
    `and his best friend is called ${jonas.friends2[0]}`;


console.log(description);

const newLocal = `object`
//////////


const profile = {
    fName : ["Mark", "John"],
    lName : ["Miller", "Smith"],
    height : [1.69, 1.95],
    weight : [78, 92],

   calcBMI: function (weight, height){
    return  weight/(height*2);
    }
}

profile.markBMI = Math.round(profile.calcBMI(profile.weight[0], profile.height[0]));
profile.johnBMI = Math.round(profile.calcBMI(profile.weight[1], profile.height[1]));

let array = [23, 45, 67, 89]
console.log(Math.max(...array));

console.log (Math.max(profile.markBMI, profile.johnBMI));

console.log(profile);

if(profile.markBMI>profile.johnBMI){
    console.log(`Mark won`);
}else{
    console.log(`john won`);
}

