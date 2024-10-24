//Muhammed Hassan

let students = require("./data.json");

let getAllStudents = () => {
  students.map((student1) => {
    console.log(student1);
    return student1;
  });
  return students;
};
// getAllStudents();

let getFirstStudent = () => {
  students.find((student1) => {
    console.log(student1);
    return student1;
  });

  return students[0];
};
// getFirstStudent()

let getLastStudent = () => {
  students.findLast((student1) => {
    console.log(student1);
    return student1;
  });
};
// getLastStudent();
let getStudentById = (id) => {
  return students.find((students) => students.id === id);
};
// let sid = getStudentById(5);
// console.log(sid);

let getStudentsByStage = (stage) => {
  return students.find((student) => (students.stage = "Grade 12"));
};
//  let sstage = getStudentsByStage();
// console.log(sstage);
let addStudent = (newStudent) => {
  students.push(newStudent);
  console.log(students);
};
// addStudent(
//   {
//     "id": 24,
//     "name": "Ahmed",
//     "stage": "gg",
//     "age": 56
//   }
// )

let removeStudentById = (id) => {
  students = students.filter((students) => students.id !== id);
  console.log(students);
};
// removeStudentById(6)

let updateStudentById = (id, updatedData) => {
  students = students.find((students) => students.id === id);
  students = updatedData;
  return students;
};
// console.log(updateStudentById(18,{"id": 899,
//   "name": "kknjb",
//   "stage": "jhggghhhhh",
//   "age": 788888
// }))
let getAverageAge = () => {
  let total = students.reduce((sum, student) => student.age + sum, 0);
  avg = total / students.length;
  console.log(avg);
};
// getAverageAge()
let getStudentsAboveAge = (age) => {
  return students.filter((students) => students.age > age);
};
// console.log(getStudentsAboveAge(15));
let getStudentsBelowAge = (age) => {
  return students.filter((students) => students.age < 16);
};
// console.log (getStudentsBelowAge())
let getStudentByName = (name) => {
  return students.find((students) => students.name === name);
};
// console.log(getStudentByName("Jane Smith"))

let sortStudentsByName = () => {
  return students.sort((a, b) => a.name.localeCompare(b.name));
};
// console.log(sortStudentsByName());

let sortStudentsByAge = () => {
  return students.sort((a, b) => a.age - b.age);
};
// console.log(sortStudentsByAge());
let filterStudentsByAge = (age) => {
  return students.filter((students) => students.age === age);
};
// console.log(filterStudentsByAge(15))
let filterStudentsByStage = (stage) => {
  return students.filter((students) => students.stage === stage);
};
// console.log(filterStudentsByStage("Grade 12"));
let countStudents = () => {
  let s = students.map((students) => students.id);
  return s.length;
};
// console.log(countStudents());
let countStudentsByStage = (stage) => {
  let s = students.filter((students) => students.stage === stage);
  return s;
};
// console.log(countStudentsByStage("Grade 12"));
let incrementStudentAgeById = (id) => {
  let s = students.find((students) => students.id === id);
  return s.age++;
};
// console.log(incrementStudentAgeById(6))
let decrementStudentAgeById = (id) => {
  let s = students.find((students) => students.id === id);
  return s.age--;
};
// console.log(decrementStudentAgeById(1))
let getStudentsWithIdGreaterThan = (id) => {
  let s = students.filter((students) => students.id > id);
  return s;
};
//  console.log(getStudentsWithIdGreaterThan(14));
let getStudentsWithIdLessThan = (id, age) => {
  return students.filter((students) => students.id < id);
};
// console.log(getStudentsWithIdLessThan(15));
let getStudentsInRangeOfIds = (startId, endId) => {
  let s1 = students.filter(
    (students) => students.id > startId && students.id < endId
  );
  console.log(s1);
};
// console.log(getStudentsInRangeOfIds(1, 7));
let getTotalAgeOfStudents = () => {
  let s = students.map((students) => students.age);
  return s;
};
// console.log(getTotalAgeOfStudents())
let getAverageAgeByStage = (stage) => {
  let filteredStudents = students.filter((student) => student.stage === stage);
  let totalAge = filteredStudents.reduce(
    (sum, student) => sum + student.age,
    0
  );
  let totalStudents = filteredStudents.length;
  let avg = totalStudents > 0 ? totalAge / totalStudents : 0;
  return avg;
};
// console.log(getAverageAgeByStage("Grade 10"));

let getYoungestStudent = () => {
  let youngestAge = Math.min(...students.map((student) => student.age));
  return students.find((student) => student.age === youngestAge);
};
// console.log(getYoungestStudent());

let getOldestStudent = () => {
  let youngestAge = Math.max(...students.map((student) => student.age));
  return students.find((student) => student.age === youngestAge);
};
// console.log(getOldestStudent());
let hasStudentWithName = (name) => {
  let s = students.find((students) => students.name === name);
  return s;
};
// console.log(hasStudentWithName("Ava King"))
let getNamesOfAllStudents = () => {
  let s = students.map((students) => students.name);
  return s;
};
// console.log(getNamesOfAllStudents())
let getAllStudentIds = () => {
  let s = students.map((students) => students.id);
  return s;
};
// console.log(getAllStudentIds());
let getAllStudentStages = () => {
  let s = students.map((students) => students.stage);
  return s;
};
// console.log(getAllStudentStages())
let getStudentsWithNamesStartingWith = (letter) => {
  let s = students.filter(
    (students) => students.name[0].toLowerCase() === letter.toLowerCase()
  );
  return s;
};
// console.log(getStudentsWithNamesStartingWith("M"));
let getStudentsWithNamesEndingWith = (letter) => {
  let s = students.filter(
    (students) => students.name[students.name.length - 1] === letter
  );
  return s;
};
let getStudentsWithNameLengthGreaterThan = (length) => {
  return students.filter((student) => student.name.length > length);
};
// console.log(getStudentsWithNameLengthGreaterThan(12));
let getStudentsWithNameLengthLessThan = (length) => {
  return students.filter((student) => student.name.length < length);
};
// console.log(getStudentsWithNameLengthLessThan(12))
let getAllStudentsSortedById = () => {
  return students.sort((a, b) => a.id - b.id);
};
// console.log(getAllStudentsSortedById());
let reverseStudentList = () => {
  let s = students.sort((a, b) => a.id - b.id);
  return s.reverse();
};
// console.log(reverseStudentList());
let getRandomStudent = () => {
  let student = students[Math.floor(Math.random() * students.length)];
  return student;
};
// console.log(getRandomStudent());
let removeStudentsAboveAge = (age) => {
  let s = students.filter((students) => students.age !== age);
  return s;
};
// console.log(removeStudentsAboveAge(15))
let removeStudentsBelowAge = (age) => {
  return students.filter((students) => students.age > age);
};
// console.log(removeStudentsBelowAge(16))

let getStudentsBetweenAges = (minAge, maxAge) => {
  let s1 = students.filter(
    (students) => students.age > minAge && students.age < maxAge
  );
  return s1;
};
// console.log(getStudentsBetweenAges(13, 16));
let countStudentsAboveAge = (age) => {
  let s = students.filter((students) => students.age === age);
  return s.length;
};
// console.log(countStudentsAboveAge(16))
let countStudentsBelowAge = (age) => {
  return students.filter((students) => students.age < age);
};
// console.log(countStudentsBelowAge(15))
let addMultipleStudents = (newStudents, newStudents2) => {
  students.push(newStudents, newStudents2);
  console.log(students);
};
// addMultipleStudents(
//   {
//     "id": 24,
//     "name": "Ahmed",
//     "stage": "gg",
//     "age": 56
//   }
//   , {
//     "id": 26,
//     "name": "Mustafa",
//     "stage": "mm",
//     "age": 57
//   }
// )
let removeMultipleStudentsById = (ids, ids2) => {
  return students.filter(
    (students) => students.id !== ids && students.id !== ids2
  );
};
// console.log(removeMultipleStudentsById(5, 4));

let updateMultipleStudentsById = (ids, updatedData) => {
  students = students.map((student) => {
    if (ids.includes(student.id)) {
      const updatedInfo = updatedData.find((data) => data.id === student.id);
      return { ...student, ...updatedInfo };
    }
    return student;
  });
  return students;
};

// console.log(
//   updateMultipleStudentsById(
//     [12, 14],
//     [
//       {
//         id: 12,
//         name: "kknjb",
//         stage: "jhggghhhhh",
//         age: 788888,
//       },
//       {
//         id: 14,
//         name: "meow",
//         stage: "up",
//         age: 45,
//       },
//     ]
//   )
// );

let isAllStudentsAboveAge = (age) => {
  return students.every((students) => students.age > age);
};
// console.log(isAllStudentsAboveAge(14))
let isAllStudentsBelowAge = (age) => {
  return students.every((students) => students.age < age);
};
// console.log(isAllStudentsBelowAge(18))
let hasStudentsInStage = (id, stage) => {
  return students.some(
    (students) => students.id === id && students.stage === stage
  );
};
// console.log(hasStudentsInStage(17,"Grade 12"));
let getStudentNamesWithIds = (ids) => {
  let s = students.find((students) => students.id === ids);
  return s.name;
};
// console.log(getStudentNamesWithIds(19));
