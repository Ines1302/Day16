const firstName = (firstName) => {
  return firstName.toUpperCase();
};

const lastName = (lastName) => {
  return lastName.toLowerCase();
};

exports.firstName = firstName;
exports.lastName = lastName;

console.log(firstName("alagic"));
console.log(lastName("ines"));
