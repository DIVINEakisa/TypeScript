// Write a TypeScript class called SUV(Sports Utility Vehicle)
// that extends the Car class. Add a property to represent
// whether the SUV is suitable for off - road driving.Implement a method
// that toggles off - road capability and prints a message accordingly.
class Car {
  driver: string;
  model: string;
  year: number;
  constructor(driver: string, model: string, year: number) {
    this.driver = driver;
    this.model = model;
    this.year = year;
  }
  start(): void {
    console.log(`I am ${this.driver} with ${this.model} Car in ${this.year}`);
  }
}
class SUV extends Car {
  isOffRoadCapable: boolean = false;
  toggleOffRoad(): void {
    this.isOffRoadCapable = !this.isOffRoadCapable;
    if (this.isOffRoadCapable) {
      console.log(`This SUV can now go off road-road!`);
    } else {
      console.log(`This SUV is no longer off road capable`);
    }
  }
}
let mySUV = new SUV("Didier", "Toyota", 2023);
mySUV.toggleOffRoad();
mySUV.start();
