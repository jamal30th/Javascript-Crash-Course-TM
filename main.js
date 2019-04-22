class Person{
    constructor(firstname, lastname, dob) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = dob;
    }
    getBirthYear() {
        return this.dob.getFullYear;
    }
    getFullName() {
        return `${this.firstname} ${this.lastname}`
    }
}
const person1 = new Person('john', 'Doe', '4-3-1980')
const person2 = new Person('Arohee', 'Jamal', '3-3-2014')
console.log(person2.getFullName());
console.log(person1.getBirthYear());