const students = [
    {
        firstName: "Alex",
        lastName: "Miller",
        habits: ["doesn't wash dishes","falls asleep in lecture","shows up early"],
    },
    {
        firstName: "Martha",
        lastName: "Smith",
        habits: ["shows up late", "washes dishes", "helps peers"],
    },
    {
        firstName: "Roger",
        lastName: "Anderson",
        habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
    },
    {
        firstName: "Rick",
        lastName: "James",
        habits: ["shows up early", "helps peers", "washes dishes"],
    },
];

const badHabit1 = "doesn't wash dishes";
const expected1 = ["Alex Miller", "Roger Anderson"];

const badHabit2 = "shows up late";
const expected2 = ["Martha Smith", "Roger Anderson"];

const badHabit3 = "vapes too much";
const expected3 = [];


function santasNaughtyList(persons, badHabit) {
    let results = [];

    for(let i = 0; i < persons.length; i++){
        //let test = persons[i].habits;
        for(let x = 0; x < persons[i].habits.length; x++){
            if(persons[i].habits[x] == badHabit) {
                results.push(persons[i].firstName + " " + persons[i].lastName)
                break;
            }
        }
    }
    return results;
}

console.log(santasNaughtyList(students, "doesn't wash dishes"));
console.log(santasNaughtyList(students, "shows up late"));
console.log(santasNaughtyList(students, "vapes too much"));

function santasNaughtyListFunctional(persons, badHabit) {
    const hasBadHabit = persons.filter(person => person.habits.includes(badHabit))
    return hasBadHabit.map(person => `${person.firstName} ${person.lastName}`)
}

console.log(santasNaughtyListFunctional(students, "doesn't wash dishes"))
console.log(santasNaughtyListFunctional(students, "shows up late"))
console.log(santasNaughtyListFunctional(students, "vapes too much"))

/*****************************************************************************/
