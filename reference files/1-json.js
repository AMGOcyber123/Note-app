const  fs = require('fs')

// const book = {
//     title : "Kashi Yatra",
//     author : "Sudha Murty"
// }

// const bookJSON = JSON.stringify(book) // takes the object and return in the form of string  (morre like a dictionary)
// // const book_auth = JSON.parse(bookJSON)
// // console.log(bookJSON);
// // console.log(book_auth.author);

// fs.writeFileSync("1-json.json" , bookJSON)

// fs.readFileSync('1-json.json')

// const databuffer = fs.readFileSync('1-json.json')
// const dataJson = databuffer.toString()
// const data = JSON.parse(dataJson)
// console.log(data.title);


// challenge  time //

fs.readFileSync("1-json.json")
const databuffer = fs.readFileSync('1-json.json')
const dataJson = databuffer.toString()
const user = JSON.parse(dataJson)

user.name = "Aayu"
user.age = "18"

const userjson = JSON.stringify(user)
fs.writeFileSync("1-json.json",userjson)

console.log(user);