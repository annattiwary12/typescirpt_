type Employee = {
    name:string,
    startDate: string;
};
type Manager = {
    name: string;
   department: string

};
type TeamLead  = Employee  & Manager;

let e: Employee  ={
     name: "anna",
     startDate:"01-02-2004",

};
let m: Manager ={
     name: "Anant",
     department :"computer",

};
let r : TeamLead = {
    name :"Anant",
    startDate:"01-02-2004",
  department:"computer",

};

















