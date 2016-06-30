var car = {
   color: 'red',  // the 'color' property is a string
   numTires: 4,   // the 'numTires' property is a number
   make: 'Hyundai',
   model: 'Sonata',
   year: 2007
}
 if (car.color === 'red') {
   //do stuff
 }

 //longish way
 var computer = new Object()
 computer.brand = 'Apple'
 computer.type = 'laptop'
 computer.beautiful = true

 function Person (name, age) {
   this.name = name
   this.age = age

  //  this.self = function() {
  //    console.log(this)
  //  }
   this.whatsYourAge = function() {
     return this.age
     //returns age
   }
 }



// for (var i = 1; i < 50 ; i ++) {
//
//   if (i % 3 === 0 & i % 5 === 0 ) {
//     console.log(i,'fizzbuzz')
//   }
//   else if (i % 3 === 0 & i % 5 !== 0) {
//     console.log(i,'fizz')
//   }
//   else if (i % 5 === 0 & i % 3 !== 0) {
//     console.log(i,'buzz')
//   }
//   else {
//     console.log(i,'.')
//   }
// }

// function FizzBuzz(n) {
//   var fizzBuzz = ''
//   for (var i = 1; i <= n; i ++) {
//
//     if (i % 3 === 0 & i % 5 === 0 ) {
//       fizzBuzz += 'fizzbuzz'
//     }
//     else if (i % 3 === 0 & i % 5 !== 0) {
//       fizzBuzz += 'fizz'
//     }
//     else if (i % 5 === 0 & i % 3 !== 0) {
//       fizzBuzz += 'buzz'
//     }
//     else {
//       fizzBuzz += '.'
//     }
//   }
//   return fizzBuzz
// }
//
// console.assert(FizzBuzz(1) === ".")
// console.assert(FizzBuzz(2) === "..")
// console.assert(FizzBuzz(3) === "..fizz")
// console.assert(FizzBuzz(5) === "..fizz.buzz")
// console.assert(FizzBuzz(10) === "..fizz.buzzfizz..fizzbuzz")
