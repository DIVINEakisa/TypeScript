class Animal {
  speak(): void {
    console.log("Animal makes sound");
  }
}

class Dog extends Animal {
  override speak(): void {
    console.log("Dog barks");
  }
}
let d = new Dog();
console.log(d);
