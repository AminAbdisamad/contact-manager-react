// SPREAD
// const person = {
//   id: 1,
//   name: 'Ali',
//   email: 'ali@gmail.com'
// };
// const person2 = {
//   ...person,
//   location: 'Istanbul'
// };

// // console.log(person2);

// // Filter

// const arr = [1, 2, 3];
// // const arrf = arr.filter(num => num !== 2);
// const fs = [...arr.filter(arr => arr !== 2)];
// // console.log(fs);

// // Destructuring
// const { name, email } = person;
// // console.log(name, email);

/**Classes */
class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }
  greeting() {
    return `Hi, My name's ${this.name}, I'm ${this.age} years old  from ${
      this.country
    }`;
  }
}

// Initiate object
const person1 = new Person('Geedi', 30, 'Somalia');
// console.log(person1.greeting());
/**Sub Classes */
class Customer extends Person {
  constructor(name, age, country, balance) {
    super(name, age, country);
    this.balance = balance;
  }
  customerInfo() {
    return `${this.name}, a ${this.age} years old from ${this.country}, owns $${
      this.balance
    }.00`;
  }
}
const customer = new Customer('Farah', 45, 'New Zealand', 3500);
console.log(customer.customerInfo());
