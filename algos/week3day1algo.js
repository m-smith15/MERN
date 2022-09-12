const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };

const expected1 = "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    is_admin: false,
    };
const expected2 =
    "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
// Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.


function insert(tableName, columnValuePairs) {
    let extraStuff = "";
    let whatamisupposedtodowhoami = "";
    if(columnValuePairs.age != null && columnValuePairs.is_admin != null){
        extraStuff = ", " + columnValuePairs.age + ", " + columnValuePairs.is_admin
        whatamisupposedtodowhoami = ", age, is_admin";
    }
    return "INSERT INTO " + tableName + "(first_name, last_name" + whatamisupposedtodowhoami + ") VALUES ('" + columnValuePairs.first_name + "', '" + columnValuePairs.last_name + "'" + extraStuff + ")";
}
console.log(insert(table, insertData1));
console.log(insert(table, insertData2));


function insertFunctional(tableName, columnValuePairs) {
    //worked on this /w Noah
}
// console.log(insertFunctional(table, insertData1));
// console.log(insertFunctional(table, insertData2));


/*****************************************************************************/