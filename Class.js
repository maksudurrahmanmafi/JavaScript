class Student {
    constructor(name ,email ,roll) {

        this.name=name;
        this.email=email;
        this.roll=roll;

        
    }
    getInfo(){
        
        console.log(this.name);
        console.log(this.email);
        console.log(this.roll);

    }

    subject =[];
    scienceDept(subName){
        this.subject.push(subName);
    }
}

var user =new Student("mafi","mafi@gamil.com",12);
user.getInfo();

user.scienceDept("Bangla");
user.scienceDept("English");
user.scienceDept(
    "Math"
);

console.log(user.subject);

var subList = user.subject
subList.forEach ((sub) => console.log(sub));
