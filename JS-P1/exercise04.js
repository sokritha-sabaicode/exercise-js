let employee = ["emmi", "dara", "sothea"];
let salary = [1000, 2000, 1200];
let employeeSalary = {};

if (employee.length === salary.length) {
  for (i = 0; i < employee.length; i++){
    employeeSalary[employee[i]] = salary[i];
  }  
} else {
  console.log('Employee and Salary are mismatch...')
}

console.log(employeeSalary);
