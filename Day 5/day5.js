//template literals

var age=19;
var name="Vinitha"
var str=`Vinitha her age is ${age}`
console.log(str);
console.log(`$(name) age is ${age}`)
console.log(name + ' age is ' + age)

//map

var arr=[1,2,3,4,5];
var double=arr.map((nums)=>(nums*2));
console.log(double)

//filter

var arr=[1,2,3,4,5];
var even=arr.filter((nums)=>(nums%2==0));
console.log(even)

//reduce

var total=arr.reduce((sum,nums)=>(sum=sum+nums),0) // 0 to initialize sum=0
console.log(total)

var totalNo=arr.reduce((sum,nums)=>(sum=sum+1),0) // 0 to initialize sum=0
console.log(totalNo)

var evencount= arr.map(nums=>nums**3).filter(nums=>nums%2==0).reduce((sum,nums)=>(sum+1),0)
console.log(evencount)

var student=[
   {name:'Harini',
    marks:95
   },
   {name:'vinitha',
    marks:90
   }]
var studentmarks=student.filter(s=>s.marks>91);
console.log(studentmarks)

var studentname=student.map(s=>s.name);
console.log(studentname)

var totalmarks=student.reduce((sum,s)=>(sum+s.marks),0)
console.log(totalmarks)
 var avgmarks=totalmarks/student.length;
 console.log(avgmarks)

 //promise
const promise = new Promise((resolve, reject) => {
    var success = true;
    if (success) {
        resolve('Success');
    } else {
        reject('Failed');
    }
});
promise.then((msg) => {
    console.log(msg);
}).catch((error) => {
    console.log(error);
});

//async to write API

const getData = async (req, response)=> {
    try{
        var response = await fetch('https://jsonplaceholder.typicode.com/posts');
        var data =  await response.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
}
getData();