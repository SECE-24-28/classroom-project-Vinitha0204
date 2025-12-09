/*var p=20;
var q="hello world";
var bool=true;
var r;//undefined
var s=null;//null
*/
var arr=[1,2,3,4,5];
console.log(arr)
var object={
    name:"vinitha",
    age:19
}
//arithmatic operator
var a=10;
var b=20;
console.log(a+b) //-,*,/,%
console.log(a/b)
console.log(a%b)
//relational operator [>,<,>=,<=,==,!=]
console.log(a>b)
console.log(a==b)
console.log(a<=b)
console.log(a!=b)
c=10
d="20"
console.log(c==d)// 10 is not = to 20 so false
console.log(c!=d)
//to check with data type use ===,!==
console.log(c===d)//data type is not = so false
console.log(c!==d)
//assignment operations [=,+=,-=,*=,%=,/=]
a+=20
console.log(a)
a%=2
console.log(a)
a-=10
console.log(a)
//logical operator [&&,||,!]
e=true
f=false
console.log(e&&f)
console.log(e||f)
console.log(!e)

console.log("ternary operator")
//ternary operator
a=1
a==0?console.log("true"):console.log("false")

var marks=90
var result= marks>=90?"O grade":marks>=80?"A":marks>=70?"B":"C"
console.log(result)

//function
function add(){
    console.log(10+20);
}
add();

//function with parameter
function addParam(a,b){
    console.log(a+b);
}
add(10,20);

//arrow function
var addParam=(a,b)=>{
    console.log(a+b);
}
addParam(10,20);
console.log(typeof addParam);

//spread operator
const x=[1,2,3,4,5];
const y=[6,7,8,9,10];
console.log(x);
console.log(y);

//destructing operator
//array
/*const[name,age,marks]=["harini",19,90];
console.log(name);
console.log(age);
console.log(marks);*/

//object
const[name,id,marks]={
        name:"vini",
        id:101,
        marks:90
}
console.log(name);
console.log(id);
console.log(marks);

//for in(index values)
var arr=[1,2,3,4,51]
for(let i in arr){
    console.log(i);
}
//for of(values)
for(let j of arr){
    console.log(i);
}

//for each
arr.forEach((val,index)=>{
    console.log(val,index);
})

