// Write a TypeScript program that creates a class
//     called Student with properties name and roll number.
// Add constructor overloading to support multiple ways of
// initializing a Student object.Implement one constructor that takes
// both name and roll number as parameters and another constructor that
// takes only name, assuming the roll number is unknown.
class Student {
  name: string;
  roll_number: number | undefined;

  constructor(name: string);
  constructor(name: string, roll_number: number);
  constructor(name: string, roll_number?: number) {
    this.name = name;
    if (roll_number !== undefined) {
      this.roll_number = roll_number;
    }
  }
}
let student = new Student("Divine");
console.log(student.name);
// console.log(student.roll_number);
