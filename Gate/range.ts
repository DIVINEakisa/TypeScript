// Practical question
// Solve all the typing issues in the code without changing the implementation

// const setRange = (range: number): number => {
//   const x = range[0];
//   const y = range[1];

//   return { x, y: y.age > 10 };
// };

// setRange([true, { name: "Patrick", age: 3 }]);
// x;
// Complete TypeScript solution

// Define the types
type Person = { name: string; age: number };
type Range = [boolean, Person];

// Fix the function signature
const setRange = (range: Range): { x: boolean; y: boolean } => {
  const x = range[0];
  const y = range[1];

  return { x, y: y.age > 10 };
};

// Call the function
const result = setRange([true, { name: "Patrick", age: 11 }]);

console.log(result); // Output: { x: true, y: false }
