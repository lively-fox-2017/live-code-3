const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('school.db');

class Student {

  constructor(obj) {

    this.id = obj.id;
    this.first_name = obj.first_name;
    this.last_name = obj.last_name;
    this.email = obj.email;
    this.gender = obj.gender;

  }

  static fetchAll() {

    const fetchAllStudent = new Promise((resolve, reject) => {

      db.all(`SELECT * FROM students ORDER BY first_name ASC`, (err, students) => {
        resolve(students);
      });

    });

    return Promise.resolve(fetchAllStudent);

  }

  static fetchById(id) {

    const fetchStudentById = new Promise((resolve, reject) => {

      db.get(`SELECT * FROM students WHERE id = ${id}`, (err, student) => {

        resolve(student);

      });

    });

    return Promise.resolve(fetchStudentById);

  }

  static insert(input) {

    const insertStudent = new Promise((resolve, reject) => {

      db.exec(`INSERT INTO students (first_name, last_name, email, gender) VALUES ('${input.first_name}', '${input.last_name}', '${input.email}', '${input.gender}')`, (err) => {

        resolve();

      });

    });

    return Promise.resolve(insertStudent);

  }

  static update(input, id) {

    const updateStudent = new Promise((resolve, reject) => {

      db.exec(`UPDATE students SET first_name='${input.first_name}', last_name='${input.last_name}', email='${input.email}', gender='${input.gender}' WHERE id = ${id}`, (err) => {

        resolve();

      });

    });

    return Promise.resolve(updateStudent);

  }

  static delete(id) {

    const deleteStudent = new Promise((resolve, reject) => {

      db.exec(`DELETE FROM students WHERE id = ${id}`, (err) => {

        resolve();

      });

    });

    return Promise.resolve(deleteStudent);

  }

}

module.exports = Student;
