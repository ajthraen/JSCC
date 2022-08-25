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

// let users = [
// {
//     userName: 'Andrew',
//     userEmail: 'ajtrain@gmail.com',
//     password: 'test123',
//     subStatus: 'VIP',
//     lessonsComp: [0, 1],
// },
// {
//     userName: 'Andy',
//     userEmail: 'train@gmail.com',
//     password: 'test1',
//     subStatus: 'Pro',
//     lessonsComp: [1, 1],
// },
// {
//     userName: 'AJ',
//     userEmail: 'AJ@gmail.com',
//     password: 'test',
//     subStatus: 'None',
//     lessonsComp: [0, 0],
// },
// ];
// //console.log(users.userEmail);
// //console.log(users[0].subStatus);
// //console.log(users.lessonsComp[1]);

// function login(userEmail, password) {
//     for (let i = 0; i < users.length; i++) {
//         // console.log(users[i].userEmail, users[i].password);
//         if (users[i].userEmail == userEmail){
//             //console.log(users[i].userEmail);
//             if (users[i].password == password){
//                 console.log('You are logged in')
//                 return;
//             }
//             else {
//                 console.log('Password Incorrect') 
//                 return;
//             }
//         }
//         else if (i == (users.length - 1)) {
//             console.log('User Not Found')
//         }
//         //return;
//     }
// }
// login ('AJ@gmail.com', 'test');

// //New User push

// function newUser(user){   
//     users.push(user)
//     //console.log(user)
    
// }

// newUser({
//     userName:'B1', 
//     userEmail:'c1@aol.com', 
//     password:'test12', 
//     subStatus:'VIP', 
//     lessonsComp: 2,
// });
// console.log(users);

//DOM 'DOM DOM'
//First Way: Use if element does not have an id 
//(use . instead of # if no id)
//console.log(document.querySelector('.title'));

//Second Way: Use if element does have an id
//console.log(document.getElementById('title'))

//Changes the displayed html value to something else (inner html)
//console.log(document.querySelector('.title').innerHTML = "New Title");


// //Change CSS
// document.querySelector('.title').style.color = 'blue'

// //
// function changeTitleColor() {
//     console.log('clicked')
//     document.querySelector('.title').style.color = 'red'
// }

//BEGINNER CHALLENGE
//#1
// function addition1(num1, num2) {
//     sum1 = num1 + num2 
// }

// addition1(3, 2); {
//     console.log(sum1)
// }

//#2
// function hoursintoSeconds(hours1) {
//     return hours1 * 3600;
// }
// console.log(hoursintoSeconds(10))

//#3
// function perimeter(width1, height1) {
//     return (2*width1) + (2*height1)
// }
// console.log(perimeter(6,7))

//#5
// function twoWords(word1) {
//     return word1 + 'Frontend'
// }
// console.log(twoWords('Orange'))

//#6
//Long Way
// function greaterThan(num1, num2) {
//     if ((num1 + num2) > 100) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
//console.log(greaterThan(50,60))
//Short Way
// function greaterThan(num1, num2) {
//     return (num1 + num2) > 100
// }
// console.log(greaterThan(50,40))

//#7
// function lessThanEq0(num1) {return num1 <= 0}
// console.log(lessThanEq0(-20))

//#8
// function oppBool(input1) {return input1 != true}
// console.log(oppBool(false))

//#13
// function loggedAndSubbed (logged_in, subbed) {
//     if (logged_in == 'Logged In' && subbed == 'Subscribed') {
//         return true
//     }
//     return false
// }
// console.log(loggedAndSubbed('Logged Out', 'Subscribed'))

// function loggedAndSubbed (logged_in, subbed) {
//     if (logged_in == 'Logged In' || subbed == 'Subscribed') {
//         return true
//     }
//     return false
// }
// console.log(loggedAndSubbed('Logged Out', 'Not Subscribed'))

//MEDIUM CHALLENGES
//#1
// function filterFalsy (obj1, obj2) {
//     if (!obj1) {return obj1}
//     return obj2
// }
// console.log(filterFalsy(false,'Dog'))

//#2
// function arrLength(array1) {
//     console.log(array1.length)
// }
// arrLength([1,2,3,6,7])

//#3
// function arrLength(array1) {
//     console.log(array1[(array1.length - 1)])
// }
// arrLength([1,2,3,6,7,9])

//#4

