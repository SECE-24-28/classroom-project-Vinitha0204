var a=11011
b=a;
var rev=0;
while(a!==0){
    var rem=Math.floor(a%10)
    rev =rev*10+a%10;
    a=Math.floor(a/10);
}
if(rev===b){
    console.log("palindrome");
}
else{
    console.log("not palindrome");
}