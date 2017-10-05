const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('school.db');

class Subject {

  constructor(obj) {

    this.id = obj.id;
    this.subject_name = obj.subject_name;
    this.subject_code = obj.subject_code;

  }

  static fetchAll() {

    const fetchAllSubject = new Promise((resolve, reject) => {

      db.all(`SELECT * FROM subjects ORDER BY subject_name ASC`, (err, subjects) => {
        resolve(subjects);
      });

    });

    return Promise.resolve(fetchAllSubject);

  }

  static fetchById(id) {

    const fetchSubjectById = new Promise((resolve, reject) => {

      db.get(`SELECT * FROM subjects WHERE id = ${id}`, (err, subject) => {

        resolve(subject);

      });

    });

    return Promise.resolve(fetchSubjectById);

  }

  static insert(input) {

    const insertSubject = new Promise((resolve, reject) => {

      db.exec(`INSERT INTO subjects (subject_name, subject_code) VALUES ('${input.subject_name}', '${input.subject_code}')`, (err) => {

        resolve();

      });

    });

    return Promise.resolve(insertSubject);

  }

  static update(input, id) {

    const updateSubject = new Promise((resolve, reject) => {

      db.exec(`UPDATE subjects SET subject_name='${input.subject_name}', subject_code='${input.subject_code}'WHERE id = ${id}`, (err) => {

        resolve();

      });

    });

    return Promise.resolve(updateSubject);

  }

  static delete(id) {

    const deleteSubject = new Promise((resolve, reject) => {

      db.exec(`DELETE FROM subjects WHERE id = ${id}`, (err) => {

        resolve();

      });

    });

    return Promise.resolve(deleteSubject);

  }

}

module.exports = Subject;
