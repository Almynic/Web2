function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype.toString = function() {
    return this.firstName + " " + this.lastName;
}

function Student(firstName, lastName, age, studies) {
    this.studies = studies;

    Person.call(this, firstName, lastName, age);
}

Student.prototype = new Person();


var chris_person = new Person("Chris", "Sandrini", 28);
var chris = new Student("Chris", "Sandrini", 28, "zhaw");

console.log(chris_person);
console.log(chris);
console.log(chris.toString());
