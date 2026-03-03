// Write a TypeScript class called Student with properties name and age.
// Implement a constructor that initializes these properties
// when a Student object is created.Additionally, add validation to ensure that the age provided is a positive number.
// If the age is not positive, set it to a default value of 0.
class Student {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    if (age > 0) {
      this.age = age;
    } else {
      this.age = 0;
    }
  }
}
let student = new Student("Divine", -12);
console.log(student.name);
console.log(student.age);
