import { Animal } from './animal';
import { Mammal } from './mammal';
import { Bird } from './bird';
  
  
  const dog = new Mammal("Fido", 3, 4);
  const parrot = new Bird("Polly", 2, 1);
  
  
  console.log(`${dog.name} is a ${`Mammal`} with ${dog.numLegs} legs. It makes this sound:`);
  dog.makeSound();
  
  console.log(
    `${parrot.name} is a ${`Bird`} with ${parrot.wingspan}cm wingspan. It makes this sound:`,
  );
  parrot.makeSound();
  