/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: https://github.com/AndriiZahumnyi/a-tiny-js-world-post-oop/
   Web app: https://andriizahumnyi.github.io/a-tiny-js-world-post-oop/
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

class Inhabitant {
   constructor(species, name, gender, legs, saying, friendlyTo) {
      this.species = species;
      this.name = name;
      this.gender = gender;
      this.legs = legs;
      this.saying = saying;
      this.friendlyTo = friendlyTo;
   }

   inhabitantInfo() {
      return `<h2>General:</h2><strong>Species: </strong>${this.species}<strong> Name: </strong>${this.name}<strong> Gender: </strong>${this.gender}<strong> Saying: </strong>${this.saying}<strong> friendlyTo: </strong>${this.friendlyTo}<h2>Physiology:</h2><strong> legs: </strong>${this.legs}`;
   }
}

class Human extends Inhabitant {
   constructor(species, name, gender, legs, hands, saying, friendlyTo) {
      super(species, name, gender, legs, saying, friendlyTo);
      //hands are specific to Human
      this.hands = hands;
   }
   inhabitantInfo() {
      return `${super.inhabitantInfo()}<strong> hands: </strong> ${this.hands}`;
   }
}

class Dog extends Inhabitant {
   constructor(species, name, gender, legs, tail, saying, friendlyTo) {
      super(species, name, gender, legs, saying, friendlyTo);
      this.tail = tail;
   }

   inhabitantInfo() {
      return `${super.inhabitantInfo()}<strong> Tail: </strong> ${this.tail}`;
   }
}

class Cat extends Inhabitant {
   constructor(species, name, gender, legs, tail, saying = 'meow-meow', friendlyTo) {
      super(species, name, gender, legs, saying, friendlyTo);
      this.tail = tail;
      this.saying = saying;
   }

   inhabitantInfo() {
      return `${super.inhabitantInfo()}<strong> Tail: </strong>${this.tail}`;
   }
}

class CatWoman extends Inhabitant {
   constructor(species, name, gender, legs, hands, tail, saying, friendlyTo) {
      super(species, name, gender, legs, saying, friendlyTo);
      this.hands = hands;
      this.tail = tail;
   }

   inhabitantInfo() {

      return `${super.inhabitantInfo()}<strong> Hands: </strong>${this.hands}<strong> Tail: </strong>${this.tail}`;
   }
}

const man = new Human('human', 'John', 'male', 2, 2, 'Hi! How are you?', ['Toby', 'Tereza', 'Tom']);

const woman = new Human('human','Tereza','female', 2, 2, 'I`m fine, thanks!', ['Tom']);

const dog = new Dog('dog', 'Toby', 'male', 4, 1, 'woof-woof!', ['John', 'Tereza']);

const cat = new Cat('cat', 'Tom', 'male', 4, 1, 'meow-meow!', ['Tereza']);

const catWoman = new CatWoman('catWoman', 'Kitty', 'female', 2, 2, 1, cat.saying, ['Tom']);

const world = [man, woman, catWoman, dog, cat];

world.forEach(inhabitant => print(inhabitant.inhabitantInfo()));



// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */


/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
*/
