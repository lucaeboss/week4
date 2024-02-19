import{ Animal } from './animal'

export class Bird extends Animal {
    static feathers = true; // Class variable
  
    constructor(public override name: string, public override age: number, public wingspan: number) {
      super(name, age);
    }
  
    override makeSound(): void {
      console.log("Chirp!");
    }
  }