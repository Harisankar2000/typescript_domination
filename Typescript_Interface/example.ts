interface Person{
    firstName: string,
    middleName?: string,
    lastName: string
};

function getFullName(person: Person){
    if(person.middleName){
        return `my name is: ${person.firstName} ${person.middleName} ${person.lastName}`
    }
    return `my name is: ${person.firstName} ${person.lastName}`
}

const myName = {
    firstName: "Hari",
    // middleName: "Sankar",
    lastName: "Sahoo"
}

let fullName = getFullName(myName);
console.log(fullName);