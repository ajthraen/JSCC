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
//let arr = [10, 20, 30, 40, 10]
// let numargs = arr.length - 1
// console.log(arr[0])
// console.log(arr[numargs])
//arr.push(200) //.push adds the element to the end of the array

//callback function: the filter element loops over every 
//element in the array until it sees a return true
//then pushes the current value to the newArr
// let newArr = arr.filter((element) => { 
//     // if (element <= 20){
//     //     return true
//     // }
//     return element <= 20
// }) 
// let newArr = arr.filter((element) => element <= 20) 
// console.log(newArr)

//this only returns the values != to FAIL
// let gradeArry = ['A+', 'A', 'FAIL']
// let newArr = gradeArry.filter((element) => element != 'FAIL')
// console.log(newArr)

// let gradeArry = ['FAIL']
// let newArr = gradeArry.filter((element) => element != 'FAIL')
// console.log(newArr)

// let grades = ['A+', 'A', 'FAIL']

// //create new empty array
// let goodGrades = []
// for (let i = 0; i < grades.length; i++) {
//     if (grades[i] != 'FAIL') {
//         goodGrades.push(grades[i])
//     } 
// }
// console.log(goodGrades)

//map function as used below allows you to turn values
//in an array into a new value
// let arr = [1, 5, 10, 3]

// let newArray = arr.map((element) => {
//     console.log(element)
//     return element * 100;
// })
// console.log(newArray)

//same result as above
// let arr = [1, 5, 10, 3]
// let newArray = arr.map((element) => element * 100)
// console.log(newArray)

//OBJECTS
//Login Function Using Objects
let userFName = "Andrew"
let userLName = "Train"
let loggedIn = false

let user = [
{
    userName: 'Andrew',
    userEmail: 'ajtrain@gmail.com',
    password: 'test123',
    subStatus: 'VIP',
    lessonsComp: [0, 1],
},
{
    userName: 'Andy',
    userEmail: 'train@gmail.com',
    password: 'test1',
    subStatus: 'Pro',
    lessonsComp: [1, 1],
},
{
    userName: 'AJ',
    userEmail: 'AJ@gmail.com',
    password: 'test',
    subStatus: 'None',
    lessonsComp: [0, 0],
},
];
//console.log(user.userEmail);
//console.log(user[0].subStatus);
//console.log(user.lessonsComp[1]);

function login(userEmail, password) {
    for (let i = 0; i < user.length; i++) {
        //console.log(user[i].userEmail, user[i].password);
        if (user[i].userEmail == userEmail){
            console.log(user[i].userEmail);
            if (user[i].password == password){
                console.log('You are logged in')
                return true
            }
            else {console.log('Password Incorrect')}
        }
        else if (i == (user.length - 1)){
            console.log('User Not Found')
        }
    }
}
login ('AJT@gmail.com', 'test1');
