const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/data.db')

class Subject {
    constructor(raw) {
        this.subject_name = raw.subject_name
        this.subject_cod = raw.subject_code
    }

    static findAll(cb) { //must to have
        db.all(`SELECT * FROM Subjects`, function (err, rows) {
            if (!err) {
                // console.log(rows);
                // let results = rows.map(m => new Student(m))
                // return results
                cb(rows)
            } else {
                console.log(err);
            }
        })
    }

    static findById(param, cb) {
        db.get(`SELECT * FROM Subjects WHERE id = ${param.id}`, (err, subject) => {
            if (!err) {
                cb(subject)
            } else {
                cb(err)
            }
        })
    } //must to have

    static findWhere() { } //nice to have

    static create(body, cb) {
        db.run(`INSERT INTO Subjects (subject_name, subject_code) 
        VALUES ('${body.subject_name}','${body.subject_code}' )`, (err) => {
                if (!err) {
                    cb()
                } else {
                    cb(err)
                }
            })
    } //must to have

    static update(body, params, cb) {
        db.run(`UPDATE Subjects SET
            subject_name = '${body.subject_name}',
            subject_code = '${body.subject_code}'
            WHERE id = ${params}`, (err) => {
                if (!err) {
                    cb()
                } else {
                    cb(err)
                }
            })
    } //must to have

    static destroy(params, cb) {
        db.run(`DELETE FROM Subjects WHERE id = ${params.id}`, (err) => {
            if (!err) {
                cb()
            } else {
                cb(err)
            }
        })
    } //must to have

}

module.exports = Subject;
