;
function getFullName(person) {
    if (person.middleName) {
        return "my name is: ".concat(person.firstName, " ").concat(person.middleName, " ").concat(person.lastName);
    }
    return "my name is: ".concat(person.firstName, " ").concat(person.lastName);
}
var myName = {
    firstName: "Hari",
    // middleName: "Sankar",
    lastName: "Sahoo"
};
var fullName = getFullName(myName);
console.log(fullName);
