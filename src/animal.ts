export class Animal {
    static species = "Animalia"; 
  
    constructor(public name: string, public age: number) {}
  
    makeSound(): void {
      console.log("Generic animal sound");
    }
  }