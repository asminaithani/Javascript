// Primitive

// 7 types 
//String
//Number
//Boolean
//null, undefined,symbol, bigint

// Reference - non primitive
// array, object, functions

const arr = ["asmi", "shubh", "ekanshu"];

let myObj = {
    name: "asmi",
    course: "btech",
    age: 19,
}

const myFunction = function(){
    console.log("hello")
}

console.log(typeof myFunction);


// Number => number
// String  => string
// Boolean  => boolean
// null  => object
// undefined  =>  undefined
// Symbol  =>  symbol
// BigInt  =>  bigint

// Arrays  =>  object
// Function  =>  function
// Object  =>  object



// stack(primitive), memory(non-primitive)
//stack
let ogName = "asminaithani";
let otherName = ogName;
otherName="naithaniasmi";
console.log(ogName);
console.log(otherName);


//he
let user1 = {
    id: asmi@naithani,
    upiId: asminaithani4,
}