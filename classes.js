/// Classes in Js

class Student{

   //COnstructor call automatically when Object is Create 
 constructor(dep){
    this.dep=dep;
    console.log( `Student Dept is ${this.dep}`)
 }
// Methon 
   Fname(sname){
      this.sname=sname;
    console.log(`Student name is ${this.sname}`)
   }

};

// Object Creation
// let s1=new Student("Computer System");
// s1.Fname("Mubasir");


// let s2=new Student("AI");
// s2.Fname("Rayyan");

/// ProtoType

//************* Inheritance in Js */

class Person{

   constructor(name){
      console.log("Living Thing....");
      this.name=name;
      console.log(`Name of Student is ${this.name}`);
   }

 eat(){
   console.log("Eating...");
 }

 sleep(){
   console.log("Sleeping.....");
 }


};


class Engineer extends Person{

   constructor(name,age){
      super(name);
      console.log("Machines.....");
      this.age=23;
      console.log(`Age of student is ${this.age}`);
   }
   
   work(){
      console.log("The Problem SOlver...");
   }

};

let e1=new Engineer("Mubasir Ali Khan",22);
e1.work();

// let e2=new Engineer;
// e2.eat();

// let e3=new Engineer;
// e3.sleep();
