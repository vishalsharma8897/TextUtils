function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log(`Hello, my name is ${
            this.name
        } and I'm ${
            this.age
        } years old.`);
    }
}
