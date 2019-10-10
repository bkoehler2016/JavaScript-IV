// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;

    }
    speak() {
        return `Hello my name is ${this.name}`;
    }
}