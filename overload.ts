function greet(name: string): string;
function greet(age: number): string;

function greet(value: any): string {
  if (typeof value === "string") {
    return "Hello " + value;
  } else {
    return "You are " + value + " years old";
  }
}

console.log(greet("Dede"));
console.log(greet(20));
