class Bus {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year?: number) {
    this.make = make;
    this.model = model;
    this.year = year || 0;
    console.log(
      `this is make ${this.make} and model is ${this.model} in ${this.year}`,
    );
  }
}

const car1 = new Bus("Toyota", "Hiace");
const car2 = new Bus("Mercedes", "Sprinter", 2022);
