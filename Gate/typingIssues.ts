// Solve all the typing issues in the code without changing the implementation

// ```jsx
// function format(value: string): string;
// function format(value: number): string;
// function format<T>(value: T): string {
//   if (typeof value === "string") {
//     return value.toUpperCase();
//   } else if (typeof value === "number") {
//     return value.toFixed(2);
//   } else {
//     return "";
//   }
// }

// format(true);
// ```
function format<T>(value: T): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value.toFixed(2);
  } else {
    return "";
  }
}

console.log(format("fre"));
