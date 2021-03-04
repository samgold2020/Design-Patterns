//Pattern #1 - Factory Pattern
  //A creational pattern which allows us to easily create objects in Javascript
  //Factories allow you to handle your object creation in a centralized location and helps keep your code clean & concise 

//Example: We have developers and testers at a company. We want a database set up to keep track of all employees:

//Developer object constructor 
 //the "this" keyword will always refer to an object and will be "binded" to the new object
function Developer (name) {
 this.name = name
 this.type = "Developer"
}

//Tester object constructor
function Tester (name) {
  this.name = name
  this.type = "Tester"
}

//responsible for creating the different objects
function employeeFactory() {
  //this.create creates a new employee factory object 
  this.create = (name, type) => {
   //switch statement will select the code block to be executed based on the type from the above object constructors
   switch(type)
   {
      case 1:
       return new Developer(name)
       //break statement jumps out of a switch statement when a condition is met
       break;
      case 2:
        return new Tester(name)
        break;
   }
 }
}

//Function to print out the information of whatever employee is passed in
function say(){
  console.log("Hi, I am " + this.name + " and I am " + this.type);
}

const allEmployees = new employeeFactory();
console.log(allEmployees)
const employees = []

//insert employees into employee array
employees.push(allEmployees.create("Patrick", 1))
employees.push(allEmployees.create("John", 2))

//loop through employees and call say()
//the forEach() method calls a function once for each element in an array, in order
employees.forEach( emp => {
  //the call method is used to call say on each element of the employees array
  say.call(emp)
})