const Animal = function (species, birthYear, name) {
  this.species = species;
  this.birthYear = birthYear;
  this.name = name;
};

Animal.prototype.calcAge = function () {
  return 2024 - this.birthYear;
};

class Zookeeper {
  constructor(name, action) {
    this.name = name;
    this.action = action;
  }

  greetKong() {
    console.log(
      `Hi I'm ${this.name} the Zookeeper and I am ${this.action} ${
        gorilla.name
      } the ${gorilla.species}. He is ${gorilla.calcAge()} and eats ${
        gorilla.eats
      }. ${gorilla.says}!!`
    );
  }

  greetMooDeng() {
    console.log(
      `${hippo.says} Now, this is ${hippo.name}, our baby ${
        hippo.species
      }. He is only ${hippo.calcAge()} years old and likes to eat ${
        hippo.eats
      }. I think he is ready to eat.`
    );
  }
  greetIggy() {
    console.log(
      `Here we have ${lizard.name}, he likes to eat ${
        lizard.eats
      } and is ${lizard.calcAge()}. ${lizard.says}`
    );
  }
  greetBarry() {
    console.log(
      `Finally, we have ${alligator.name} our ${alligator.calcAge()} year old ${
        alligator.species
      }. He loves to eat ${alligator.eats}. ${alligator.says} `
    );
  }
}

const ape = function (species, birthYear, name, eats, says) {
  Animal.call(this, species, birthYear, name);
  this.eats = eats;
  this.says = says;
};

ape.prototype = Object.create(Animal.prototype);

const gorilla = new ape("Gorilla", "2012", "Kong", "bananas", "OOo-OOo");
console.log(gorilla);

ape.prototype.constructor = ape;
console.dir(ape.prototype.constructor);

const john = new Zookeeper("John", "Feeding");
john.greetKong();

const mammal = function (species, birthYear, name, eats, says) {
  Animal.call(this, species, birthYear, name);
  this.eats = eats;
  this.says = says;
};

mammal.prototype = Object.create(Animal.prototype);

const hippo = new mammal(
  "Hippo",
  "2023",
  "Moo Deng",
  "salad",
  "squeak-squeak!"
);

john.greetMooDeng();

const reptile = function (species, birthYear, name, eats, says) {
  Animal.call(this, species, birthYear, name);
  this.eats = eats;
  this.says = says;
};

reptile.prototype = Object.create(Animal.prototype);

const lizard = new reptile("Iguana", "2015", "Iggy", "Bugs", "Hisssss");

john.greetIggy();

const alligator = new reptile("Gator", "2004", "Barry", "fish", "Roarrrr");

john.greetBarry();
