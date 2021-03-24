class Person {
  constructor() {}
  static display() {
    let message = "Static method is invoked from Person class";
    return message;
  }

  show() {
    console.log(Person.display(message));
  }
}

var message = new Person();
message.show();
module.exports = Person;
