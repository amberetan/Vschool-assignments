const employees = []
function Employee(name, jobTitle, salary, status = "Full-Time"){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
    employees.push(this)
}

Employee.prototype.printEmployee = function(){
    console.log(this)
}

var joe = new Employee("Joe", "Supervisor", "$45,000")
var emily = new Employee("Emily", "Engineer", "$65,000")
var dave = new Employee("Dave", "Grill-Cook", "20,000", "Part-Time")


joe.printEmployee()
emily.printEmployee()
dave.printEmployee()

console.log(employees)