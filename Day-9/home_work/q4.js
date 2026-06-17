const employees = [
  { name: "A", salary: 50000 },
  { name: "B", salary: 40000 },
  { name: "C", salary: 60000 }
];

// Extract only salaries
const salaries = employees.map(emp => emp.salary);

// Find total salary
const totalSalary = salaries.reduce((sum, sal) => sum + sal, 0);

console.log("Salaries:", salaries);
console.log("Total Salary:", totalSalary);
