//  Write a TypeScript class that defines a base class Car with properties
//   like make, model, and year, along with a start() method that prints a
//   starting message.Now create a class called Engine with the properties
//   horsepower and fuelType.Modify the Car class to include an instance of
//   the Engine class as a property.Implement a method printCarDetails() in
// the Car class that prints both car and engine details.
class Engine {
  horsepower: number;
  fuelType: string;
  constructor(horsepower: number, fuelType: string) {
    this.horsepower = horsepower;
    this.fuelType = fuelType;
  }
}
class Cars {
  make: string;
  model: string;
  year: number;
  engine: Engine;
  constructor(make: string, model: string, year: number, engine: Engine) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.engine = engine;
  }
  start(): void {
    console.log(
      `The ${this.make} ${this.model} (${this.year}) car is starting.`,
    );
  }
  printCarDetails(): void {
    console.log(`Car Details:
Make: ${this.make}
Model: ${this.model}
Year: ${this.year}
Engine Horsepower: ${this.engine.horsepower}
Fuel Type: ${this.engine.fuelType}`);
  }
}
const myEngine = new Engine(250, "Petrol");
const myCar = new Cars("Toyota", "RAV4", 2023, myEngine);
myCar.start();
myCar.printCarDetails();
