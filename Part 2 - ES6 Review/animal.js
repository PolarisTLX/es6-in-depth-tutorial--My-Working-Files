class Animal {
  constructor(name1, height1) {
    this.name = name1;
    this.height = height1;
  }

  hello() {
    console.log(`Hi! I'm ${this.name} from the Animal kingdon.`);
  }
}

export default Animal;
