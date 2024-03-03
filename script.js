class Telephone {
    constructor() {
        this.phoneBook = new Set();
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        const position = this.observers.indexOf(observer);
        if (position > -1) {
            this.observers.splice(position, 1);
        }
    }

    addPhoneNumber(number) {
        this.phoneBook.add(number);
    }

    removePhoneNumber(number) {
        this.phoneBook.delete(number);
    }

    dialPhoneNumber(number) {
        if (this.phoneBook.has(number)) {
            console.log(`Dialing ${number}...`);
            this.notifyObservers(number);
        } else {
            console.log(`Phone number ${number} not found.`);
        }
    }

    notifyObservers(number) {
        for (let observer of this.observers) {
            observer.update(number);
        }
    }
}

// Observer class
class Observer {
    constructor(name, message) {
        this.name = name;
        this.message = message;
    }

    update(number) {
        console.log(`${this.name} ${this.message} ${number}.`);
    }
}

// Usage
let telephone = new Telephone();
let observer1 = new Observer('Observer1', 'Phone number:');
let observer2 = new Observer('Observer2', 'Notified that we are now Dialling:');

telephone.addObserver(observer1);
telephone.addObserver(observer2);

telephone.addPhoneNumber('2347035007796');
telephone.dialPhoneNumber('2347035007796'); // Observer1 and Observer2 are notified
