////////////////////// Exercise 1

class Employs {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName () {
        return `${this.firstName} ${this.lastName}`
    }

    email () {
        return `${this.firstName}.${this.lastName}@company.com)`.toLowerCase();
    }

}

const employ1 = new Employs("Nasim", "Reza");
const employ2 = new Employs("Lara", "Cilia")

console.log(employ1.fullName(), employ1.email());

console.log(employ2.fullName(), employ2.email());

////////////////////// Exercise 2

class Person {
    constructor( name, age){
        this.name = name;
        this.age = age;
    }

    describe () {
        return `${this.name}, ${this.age} years old`
    }
}

const john = new Person ("john", 19);

console.log(john.describe());


////////////////////////////// Ashley's Solution

class TV {
    constructor(brand, channel = 1, volume = 50){
            // set default inside the constructor parameter
        this.brand = brand;
        this.channel = channel;
        this.volume = volume;
    }

    increaseVolume(){
        this.volume = this.volume + 1
        return (this.volume < 100) && (this.volume > 0) ? this.volume : 100

    }

    decreaseVolume(){
        this.volume = this.volume - 1
        return (this.volume < 100) && (this.volume > 0) ? this.volume : 0
    }

    setChannel(){
        const max = 50;
        this.channel = Math.floor(Math.random() * max)+1;
        return this.channel
    }

    reset(){
        this.channel = 1;
        this.volume = 50;
    }
    
    status(){
        return `${this.brand} at channel ${this.channel}, volume ${this.volume}`
    }
}

const firstTV = new TV ('Panasonic', 8, 75);
console.log(firstTV.decreaseVolume());



////////////////////////////////// Adrian's solution fo CoffeeShop

class CoffeeShop {
    constructor(name, menu, orders = []) {
        this.name = name;
        this.menu = menu;
        this.orders = orders;
    }
    addOrder(item) {
        let available = false;
        for (let product of this.menu) {
            if (product.name == item) {
                available = true
                this.orders.push(product)
                break
            }
        }
        if (!available) {
            return 'This item is currently unavailable!'
        }
    }
    fulfillOrder() {
        if (this.orders.length == 0) {
            return 'All orders have been fulfilled!'
        }
        return `The ${this.orders.shift().name} is ready!`
    }
    listOrders() {
        return 'Awaiting orders: ' + this.orders.map(item => item.name).join(' ')
    }
    dueAmount() {
        return 'Total amount: ' + this.orders.reduce((acc, curr) => {
            return acc + curr.price
        }, 0).toFixed(2) + '$'
    }
    cheapestItem() {
        return 'Cheapest item on the menu: ' + this.menu.reduce((acc, curr) => {
            if (curr.price < acc[acc.length - 1]) {
                acc.splice(0, 2)
                acc = [curr.name, curr.price]
                return acc
            }
            return acc
        }, [Number.MAX_VALUE])[0]
    }
    drinksOnly() {
        return 'Drinks on the menu: ' + this.menu.reduce((acc, curr) => {
            if (curr.type == 'drink') {
                acc.push(curr.name)
                return acc
            }
            return acc
        }, []).join(' ')
    }
    foodOnly() {
        return 'Food on the menu: ' + this.menu.reduce((acc, curr) => {
            if (curr.type == 'food') {
                acc.push(curr.name)
                return acc
            }
            return acc
        }, []).join(' ')
    }
}
const menu = [
    { 'name': 'tea', 'type': 'drink', 'price': 2.30 },
    { 'name': 'coffee', 'type': 'drink', 'price': 2.40 },
    { 'name': 'juice', 'type': 'drink', 'price': 1.00 },
    { 'name': 'pizza', 'type': 'food', 'price': 10.00 },
    { 'name': 'croissant', 'type': 'food', 'price': 3.50 }
]
let kafe = new CoffeeShop('Planet', menu)
kafe.addOrder('tea')
kafe.addOrder('coffee')
kafe.addOrder('juice')
kafe.addOrder('pizza')
kafe.addOrder('croissant')
console.log(kafe.orders)
console.log(kafe.addOrder('moka'))
console.log(kafe.fulfillOrder())
console.log(kafe.listOrders())
console.log(kafe.dueAmount())
console.log(kafe.cheapestItem())
console.log(kafe.drinksOnly())
console.log(kafe.foodOnly())