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
let cash = 30
let price = 40
let balance = price - cash

if (cash > price) {
    console.log(`We are giving you $${(balance*-1)} dollars in change`)
}
else if (cash === price) {
    console.log(`You paid, have a nice day!`)
}
else {
    console.log(`You still owe $${balance} dollars`)
}