/*    Return a new array of the names of people (not friends) who are at high risk of infection

    A person is at high risk of catching the virus if they meet all the below criteria:
    1. not practicing social distancing
    2. have a friend who is not practicing social distancing whom hasCovid

    Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
*/

const friend1 = {
    firstName: "Friend",
    lastName: "One",
    isSocialDistancing: false,
    hasCovid: true,
};

const friend2 = {
    firstName: "Friend",
    lastName: "Two",
    isSocialDistancing: false,
    hasCovid: true,
};

const friend3 = {
    firstName: "Friend",
    lastName: "Three",
    isSocialDistancing: false,
    hasCovid: false,
};

const people = [
    {
        firstName: "Person",
        lastName: "One",
        isSocialDistancing: false,
        friends: [friend2, friend3],
    },
    {
        firstName: "Person",
        lastName: "Two",
        isSocialDistancing: true,
        friends: [friend2, friend1],
    },
    {
        firstName: "Person",
        lastName: "Three",
        isSocialDistancing: false,
        friends: [friend2, friend1],
    },
];


const expected = ["Person One", "Person Three"];

/*
 *    are at risk. A Person is at risk if:
 *    1. not practicing social distancing.
 *    2. have a friend who is not practicing social distancing whom hasCovid.
*/
function coronaVirusAtRisk(persons) {

    let results = [];

    for(let i = 0; i < persons.length; i++){

        if(persons[i].isSocialDistancing == false){

            for(let j = 0; j < 2; j++){
                let currentFriend = persons[i].friends[j];
                let testFriend = Object.values(currentFriend);
                if(testFriend[3] == true){
                    results.push(persons[i].firstName + " " + persons[i].lastName)
                    break;
                }
            }
        }
    }
    return results;
}

console.log(coronaVirusAtRisk(people));

/**
 * - Time: O(2n * m) -> O(n * m)  from nested loop of .findIndex.
 *    .map is another loop but not nested.
 * - Space: O(n) linear.
 */
function coronaVirusAtRiskFunctional(persons) {}

/*****************************************************************************/