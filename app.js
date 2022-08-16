//DATA TYPES
// console.log('Test'[0])
// console.log('Test' + ' 3')
// console.log('Test'[0] + ' 3'[1])
// console.log('Test'.length)
// let str = 'Andrew'
// console.log(str)
// console.log(str[0])
// let str_length = str.length
// console.log(str_length - 1)
// let celsius = 10
// let fdeg = (celsius * 1.8) + 32
// console.log(fdeg)
// let name = "Andrew"
// let name2 = "Andy"
// let bool = 'Andy' === name2
// console.log(bool)

//CONDITIONALS
// let subscribed = false
// let loggedin = true
// if (subscribed === true) {
//     console.log('Show the Video')
// }
// else if (loggedin === true){
//     console.log('Enroll Today')
// }
// else{
//     console.log('Sign In')
// }
// let cash = 30
// let price = 40
// let balance = price - cash

// if (cash > price) {
//     console.log(`We are giving you $${(balance*-1)} dollars in change`)
// }
// else if (cash === price) {
//     console.log(`You paid, have a nice day!`)
// }
// else {
//     console.log(`You still owe $${balance} dollars`)
// }
// let hasCC = false
// let hasCash = true

// if (hasCC || hasCash) {
//     console.log('they can pay')
// }
// else {
//     console.log('they broke')
// }

// let hot = false
// hot ? console.log("its hot") : console.log("its cold")

//LOOPS
// let count = 1
// while (count <= 5) {
//     console.log(count)
//     count = count + 1
// }

// for (let i = 1; i <= 5; i++){
//     console.log(i)
// }

// for (let i = 1; i <= 20; i++) {
//     if ((i % 3) == 0 && (i % 5) == 0) {console.log('Frontend Simplified')}
//     else if ((i % 3) == 0) {console.log('Frontend')}
//     else if ((i % 5) == 0) {console.log('Simplified')}
//     else {console.log(i)}
// }

// let str = 'FrontEnd'
// let charCount = str.length
// for (let i = 0; i < charCount; i++) {
//     console.log(str[i])
// }

//FUNCTIONS
//function definition
//name2 = 'Andy'
// function welcometoFES(name2) {
//     console.log(`Welcome ${name2}`)
// }

// //call function
// welcometoFES('Andrew');
// welcometoFES('Andy');

// function welcometoFES(firstName, lastName) {
//     console.log(`Welcome ${firstName} ${lastName}`)
// }

// //call function
// welcometoFES('Andrew', 'Thraen');
// welcometoFES('Andy', 'Train');

//a return statement in a function ends the function
//at the line its placed on

// function sumofnums(num1, num2) {
//     return num1 + num2
// }

// console.log(sumofnums(10, 20));

// function convertTemp(celsius) {
//     return (celsius * 1.8) + 32
// }

// console.log(convertTemp(10));

// const convertTemp = (celsius) => {
//     return (celsius * 1.8) + 32 
// }

// console.log(convertTemp(10));

//ARRAYS
let arr = [10, 20, 30, 40, 10]
// let numargs = arr.length - 1
// console.log(arr[0])
// console.log(arr[numargs])
//arr.push(200) //.push adds the element to the end of the array

//callback function, the filter element loops over every 
//element in the array until it sees a return true
//then pushes the current value to the newArr
// let newArr = arr.filter((element) => { 
//     // if (element <= 20){
//     //     return true
//     // }
//     return element <= 20
// }) 
let newArr = arr.filter((element) => element <= 20) 
console.log(newArr)
