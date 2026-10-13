const db = require("./schoolDatabase.js");

const {
    students,
    addStudent,
    listStudents,
    filterByLevel,
    formatStudents,
    countStudents,
    removeStudent,
    sortByLevel
} = db;

console.log("\n__filename : ", __filename);
console.log("__dirname : ", __dirname);

console.log("\n" + db.addStudent("Elyas", 4).message);
console.log(db.addStudent("Delphine", 4).message);


console.log("\n-- LISTE --");
db.listStudents();

sortByLevel(false);

console.log("\n-- LISTE TRIEE DESC --");
db.listStudents();

console.log("\n-- LISTE FILTREE --");
db.filterByLevel(4);

console.log("\n-- LISTE FORMATEE --");
db.formatStudents();