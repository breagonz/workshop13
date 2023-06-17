//           ------- IS TRUTHY ---------
// using if/else statements, create a JavaScript code in a script tag 

// input "I am a string" / expected print: true
if ('I am a string') {
    console.log('true')
} else {
    console.log('falsy')
}

// input: false / expected print: "The boolean value false is falsy"
if (false) {
    console.log('truthy')
} else { 
    console.log("The boolean value false is falsy")
}

// input: null / expected print: "The null value is falsy"
if (null) {
    console.log('truthy')
    } else {
        console.log('The null value is falsy')
    }

//input: undefined / expected print: "undefined is falsy"
if (undefined) {
    console.log('truthy')
    } else {
        console.log('Undefined is falsy')
}

// inout: 0 / expected print: "The number 0 is falsy (the only falsy number)"
if (0) {
    console.log('truthy')
} else {
    console.log("The number 0 is falsy (the only falsy number)")
}

// input: "" / expected print: "The empty string is falsy (the only falsy string)"
if ("") {
    console.log('truthy')
} else {
    console.log("The empty string is falsy (the only falsy string)")
}

//           ------- NUMBER LINE ---------
//Using if/else if/else statements
//JavaScript code in a script tag that takes the sum of two numbers 

// input: num1=50, num2=51 / expected print: "101 is greater than 100"
const num1 = 50
const num2 = 51
const sum = num1 + num2 
if (sum >100){
    console.log('101 is greater than 100')
} else {
    console.log('false')
}

// input: num3=99, num4= -2 / expected print: "97 is greater than 0"
const num3 = 99 
const num4 = -2
const sum2 = 99 - (-2)
if (sum > 0){
    console.log('97 is greater than 0')
} else {
    console.log('falsy')
}

// input num5=0, num6=101 / expected print: "101 is greater than 100"
const num5 = 0
const num6 = 101
const sum3 = num5 + num6 
if (sum3 > 100){
    console.log('101 is greater than 100')
} else {
    console.log('falsy')
}

// input num7=500 num8=(-500) / expected print: '0 is equal to zero'
 const num7 = 500
 const num8 = (-500)
 const sum4 = num7 + num8
 if (sum4 == 0){
    console.log('0 is equal to 0')
 } else {
    console.log('falsy')
 }

 // input num9=(-1000), num10=0 / expected print: '-1000 is a negative number'
 const num9 = (-1000)
 const num10 = 0
 const sum5 = num9 - num10
 if (sum5 == 5){
    console.log('falsy')
 } else {
    console.log('-1000 is a negative number')
 }

 // input num11=(-5) num12=0 / expected print: '-5 is a negative number'
 const num11 = (-5) 
 const num12 = 0 
 const sum6 = (-5) + 0
 if (sum6 >10){
    console.log('falsy')
 } else {
    console.log('-5 is a negative number')
 }


 //           ------- GREATER THAN OR EQUAL TO 5 ---------
 //Using if/else statements
 //JavaScript code in a script tag that prints true if both parameters are greater or equal to 5.

 // input vales (5 ,6) / expected print: true
 const sum7 = 5 + 6
 console.log(sum7 >= 5 ? 'true' : 'false') 

 // input values (10, 11) / expected print: true
 const sum8 = 10 +11
 console.log(sum8 >= 5 ? 'true' : 'false')

 // input values (0,0) / expected print: false
const sum9 = 0 - 0
console.log(sum9 >= 5 ? 'true' : 'false')

// input values (1000, -1000) / expected print: false
const sum10 = 1000 + (-1000)
console.log(sum10 >= 5 ? 'true' : 'false')

//input values (6, 4) / expected print: false
const sum11 = 6 - 4
console.log(sum11 >= 5 ? 'true' : 'false' )

// input values (5,5) / expected print: true
const sum12 = 5 * 5
console.log(sum12 >= 5 ? 'true': 'false')

//           ------- PAIR & COMPARE---------
// Using if/else statements and strict equality operators, 
// javaScript code in a script tag that compares two sets of two values. 
// Print true if at least one of the pairs is truthy.

// input values ('cat','cat') , (6,'6') / expected output: true

console.log('cat' == 'cat' || 6 == '6')

// input vales ('five', 5) , ('dog', 'dawg') / expected print: flase
console.log('five' == 5 || 'dog' == 'dawg')

// input values (0, false) , ('horse', 'horse') / expected print: true
console.log(0 == false || 'horse' == 'horse')

// input values ('eight', 'eight') , ('ate' , 'ate') / expected print: true
console.log('eight' == 'eight' || 'ate' == 'ate')

// input values (11,'eleven') , ('four','for) / expected print: false
console.log(11 == 'eleven' || 'four' == 'for')

// input values ('cake' , 'cake') , ('pie', 'pie') / expected print: true
console.log('cake' == 'cake' || 'pie' == 'pie')