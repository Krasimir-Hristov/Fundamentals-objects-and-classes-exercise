// function solve(input){

//     let listOfEmployees = {};

// for(let employee of input){
//  listOfEmployees.name = employee;
//  listOfEmployees.personalNumber = employee.length;
//  console.log(`Name: ${listOfEmployees.name} -- Personal Number: ${listOfEmployees.personalNumber}`)

// }


// }
function solve(input){

    let listOfEmployees = [];
    class Employees {
        constructor(name, lenght){
            this.name = name;
            this.length = lenght;
        }
    }
for(let employee of input){
 let currentEmployee = new Employees(employee, employee.length);
 listOfEmployees.push(currentEmployee)
  console.log(`Name: ${currentEmployee.name} -- Personal Number: ${currentEmployee.length}`)

}
listOfEmployees.forEach(x => console.log(`Name: ${x.name} -- Personal Number: ${x.length}`)
)


}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);