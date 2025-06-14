interface Person{
     name:string;
     age:number;
     
}


class Manger implements Person{
 name :string;
 age: number;
 mobile: number;

 constructor(name:string, age: number, mobile:number){
     this.name = name;
     this.age = age;
     this.mobile = mobile;

 }
 }
 let user  = new Manger("annt",23,32456);
 console.log(user);