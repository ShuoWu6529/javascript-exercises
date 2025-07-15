const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    let newPeople = people.sort((a,b) => {
        let aDeathYear = currentYear;
        if ("yearOfDeath" in a) {
            aDeathYear = a.yearOfDeath;
        }

        let bDeathYear = currentYear;
        if ("yearOfDeath" in b) {
            bDeathYear = b.yearOfDeath;
        }

        return ( (aDeathYear - a.yearOfBirth) - (bDeathYear - b.yearOfBirth) )
    })
    return newPeople[people.length-1];
};

// Do not edit below this line
module.exports = findTheOldest;
