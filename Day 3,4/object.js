//object and class

class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    display(){
        console.log(this.name);
        console.log(this.age);
    }
}
var p1=new person("vinitha",19);
p1.display();