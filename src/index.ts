import { Animal } from './animal';
import { Mammal } from './mammal';
import { Bird } from './bird';
  
  // Create mammal and bird objects
  const dog = new Mammal("Fido", 3, 4);
  const parrot = new Bird("Polly", 2, 1);
  
  // Print their information and sounds
  console.log(`${dog.name} is a ${'Mammal'} with ${dog.numLegs} legs. It makes this sound:`);
  dog.makeSound();
  
  console.log(
    `${parrot.name} is a ${'Bird'} with ${parrot.wingspan}cm wingspan. It makes this sound:`,
  );
  parrot.makeSound();
  