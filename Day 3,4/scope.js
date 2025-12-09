//global scope
let a=10;
if(true){
    let b=20;// block scope
    console.log(a);
}
console.log(a,b)

//hoisting

console.log(c);//output will be undefined becoz it will declare the variable automatically so we wont get error 
var c=10; //for let and const hoisting wont happen ,we will get error

//for..in(object)
var obj = {
    name:"Raj",
    age:20,
    marks:90,
};
for(let i in obj){
    console.log(i,obj[i]);
}

//callback function
var demo=()=>{
    console.log("Hello World");
}

var main=(callback)=>{
    console.log("Main Called");
    callback();
}

main(demo);