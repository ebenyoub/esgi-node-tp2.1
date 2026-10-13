const generateEmail = (name) => `${name.toLowerCase()}@esgi.fr`;

const students = [
 { name: "Marie", level: 1, email: generateEmail("marie") },
 { name: "Jean", level: 2, email: generateEmail("jean") }
];

const addStudent = (name, level) => {
    if (!name || !level) {
        return {
            success: false,
            message: "paramètres manquants : name et level"
        }
    }

    students.push({ name, level, email: generateEmail(name) });
    return {
        success: true,
        data: students,
        message: `${name} à été ajouté.`
    }
}

const listStudents = () => {
    students.forEach(student => console.log(student));
}

const filterByLevel = (level) => {
    students
        .filter(student => student.level === level)
        .forEach(student => console.log(student));
}

const formatStudents = () => {
    const formatStudent = (stud) => `Nom: ${stud.name} | Niveau: ${stud.level}`;
    students
        .map(student => formatStudent(student))
        .forEach(student => console.log(student));
}

const removeStudent = (name) => {
    const filtered = students.filter(student => student.name.toLowerCase() === String(name).toLowerCase())
    students.splice(0, countStudents, ...filtered);
}

const countStudents = () => students.length;

const sortByLevel = (asc = true) => {
        students.sort((a, b) =>
            asc ? a.level - b.level : b.level - a.level); 
}

module.exports = {
    students,
    addStudent,
    listStudents,
    filterByLevel,
    formatStudents,
    countStudents,
    removeStudent,
    sortByLevel
}