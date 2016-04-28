var Person = function (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype.getName = function () {
    console.log("Fristname: " + this.firstName + ", Lastname: " + this.lastName );
};

var Student = function (firstName, lastName, age, studies) {
    Person.call(this, firstName, lastName, age);
    this.studies = studies;
}

Student.prototype = new Person();
Student.prototype.getInfo = function () {
    console.log("Fristname: " + this.firstName + ", Lastname: " + this.lastName + ", Age: " + this.age + ", Studies: " + this.studies)
}

var nicolas = new Person("Nicolas","Almy",23)
var fiore = new Person("Fiore","Buettiker",21)
var guy = new Person("Guy","Luethi",21)
var studentNicolas = new Student("Nicolas","Almy",23,"computer science")

/* Console Output

nicolas.getName()
fiore.getName()
guy.getName()

*/