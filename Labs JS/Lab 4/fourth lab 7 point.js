const persons = {
lenin: { born: 1870, died: 1924 },
mao: { born: 1893, died: 1976 },
gandhi: { born: 1869, died: 1948 },
hirohito: { born: 1901, died: 1989 },
};

function ages(personsObject) {
    const Ages = {};
    for (const key in personsObject) {
    const person = personsObject[key];
    const age = person.died - person.born;

    Ages[key] = age;
    } 

    return Ages;
}

console.log(ages(persons));