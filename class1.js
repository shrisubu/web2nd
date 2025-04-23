class classA
{
    constructor(name,age,city,course){
        this.name=name;
        this.age=age;
        this.city=city;
        this.course=course;

    }
    display()
    {
        console.log(`person name is ${this.name} and age is ${this.age} and live in ${this.city} and study a course ${this.course}`);
    }
}
let myInfo=new classA("Ajay",23,"sitamarhi","btech");
myInfo.display();