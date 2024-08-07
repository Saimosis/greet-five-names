// create a function called greet that
// take a name paremeter
// log a greeting to that name in the function

// function greet(name) {
//     console.log(`hello, ${name},`)
// }

// create a file called names.txt
// list 5 names (as strings) csv format
// in that file

// run the greet.js script so that a greeting is said to all five names

let names = ["bill", "bobby", "jim", "joe", "sheila"]
let names2 = ["chris", "johnny", "luis", "z", "Jaycee"]


function greetNames(array) {

    array.forEach(function greet(name) {
        console.log(`hello, ${name}`)
    })
}

greetNames(names2)