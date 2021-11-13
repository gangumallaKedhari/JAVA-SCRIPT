
// console.log('Hello World'); 

// console.error('this is an error');

// console.warn('this is a warning');

// var, let, const 

// let age = 30;
// age = 31;

// console.log(age);

// let score;
 
// score = 10;

// console.log(score);

// const pinNo = 20;

// console.log(pinNo);


// Strings, Number, Boolean, null, undefine

// const name = 'john';
// const years = 30;
// const rating = 4.5;
// const iscool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof name);
// console.log(typeof years);
// console.log(typeof rating);
// console.log(typeof iscool);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);

// const name = 'john';
// const age = 30;
// // concatenation
// console.log('My name is ' + name + ' and I am age ' + age );
// //Template String
// console.log(`My name is ${name} and I am age ${age}`);


// const hello = `My name is ${name} and I am age ${age}`;
// console.log(hello);

// const s = 'hello World';
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0, 5).toUpperCase());
// console.log(s.split(''));
// const s = "technology, compputer, it, code";
// console.log(s.split(", "));

//Arrays - variables that hold multipule value

// const numbers = new Array(1,2,3,4,5,6,7);
// console.log(numbers);
// const fruits = ['apples', 'oranges', 'pears']
// fruits[3] = 'grapes';
// fruits.push('mangos');
// fruits.unshift('strawberries');
// fruits.pop();
// console.log(Array.isArray(fruits));
// console.log(fruits.indexOf('oranges'));

// console.log(fruits);


// const person = {
//     firstName: 'john',
//     lastName: 'Doe',
//     age:30,
//     hobbies:['playing', 'movies', 'music'],
//     address:{
//         street: '50 main st',
//         city:'Boston',
//     state:'MA'  
//   }

// }

// console.log(person);
// console.log(person.firstName);
// console.log(person.address.city);

// const {firstName, lastName, address:{city}} = person;
// console.log(lastName, city);

// const todos = [
//     {
//         id:1,
//         text:'Take Out trash',
//         iscompleted:true
//     },
//     {
//         id:2,
//         text:'Meeting with boss',
//         iscompleted:true
//     },
//     {
//         id:3,
//         text:'Dentist appt',
//         iscompleted:false
//     }
    

// ];
// console.log(todos[1].text);

 
//  //For
//  for(let i=0; i<=10; i++) {
//      console.log(`for Loop Numbers: ${i}`);
//  }
//  //While
//  let i=0;
//  while(i<10){
//      console.log(`while Loop Number: ${i}`);
//      i++;
//  }

// for(let i=0; i<todos.length; i++){
//     console.log(todos[i].text);
// }

//forEach, map, filter
//  todos.forEach(function(todo)
//  {
//      console.log(todo.text);
//  })

// const todoText = todos.map(function(todo)
// {return todo.id;

// })

// console.log(todoText);

// const todoCompleted = todos.filter(function(todo){
// return todo.iscompleted === true;
// }).map(function(todo){
//     return todo.text; }

// )
// console.log(todoCompleted);

// const x = 10;
 
// if(x === 10) {
//     console.log('x is 10')
// }

// const x = 8;
 
//  if(x === 10) {
//      console.log('x is 10')
// } else if(x >10) {
//     console.log('x is grater then 10');
// }



// else{
//     console.log('x is less then 10');
// }

// const x = 6;
// const y = 11;

// if (x>5 || y>10) {
//     console.log('x is greater then 5 or y is grater then 10 ');
// }
// const x = 6;
// const y = 11;

// if (x>5 && y>10) {
//     console.log('x is grater then 5 and y is grater then 10');
// }


// const x = 10;

// const color = x > 10 ? 'red' : 'blue';
// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//         case 'blue':
//         console.log('color is blue');
//         break;
//         default:
//             console.log('color is NOT red and blue');
//             break;
// } 


// function addNums(num1 = 4, num2 = 3) {
//     console.log(num1 + num2);
// }
// addNums(); 
// function addNums(num1, num2) {
//     return num1 + num2;
//  }
// console.log(addNums(3,4));

//  function person(firstName, lastName, dob) {
//      this.firstName = firstName;
//      this.lastName = lastName;
//      this.dob = new Date(dob);
//      this.getBirthYear = function() {
//          return this.dob.getFullYear();
//      }
//      this.getfullName = function (){
//          return `${this.firstName} ${this.lastName}`;

//      }



//  }
//  const person1 = new person('john', 'doe', '4-3-1980');  
//  const person2 = new person('mery', 'thing', '6-7-1975');  

//  console.log(person1.getBirthYear());
//  console.log(person1.getfullName());


// //class
// class person{
// constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
 
// }
// getBirthYear(){
//     return this.dob.getFullYear();
// }

// getfullname(){
//     return `${this.firstName} ${this.lastName}`;
// }

// }

// const person1 = new person('john', 'doe', '4-3-1980');  
// const person2 = new person('mery', 'thing', '6-7-1975');  

//  console.log(person1.getBirthYear());
//  console.log(person2);






