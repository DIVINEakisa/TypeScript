class Bus {
  make: string;
  model: string;
  year: number;
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  start(): void {
    console.log(`i am ${this.make} with ${this.model} Car in ${this.year}`);
  }
}
let car = new Bus("divine", "toyota", 2026);
car.start();
