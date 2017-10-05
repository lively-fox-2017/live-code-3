const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/data.db')

class Student {
    constructor(raw) {
        this.first_name = raw.first_name
        this.last_name = raw.last_name
        this.gender = raw.gender
    }

    static findAll(cb) { //must to have
        db.all(`SELECT * FROM Students`, function(err, rows){
            if(!err){
                console.log(rows);
                cb(rows)
            } else {
                console.log(err);
            }
        })
        // let results = students.map(m => new Student(m))
        // return results
    }

    static findById(param, cb) { 
        db.run(`SELECT * FROM Students WHERE id = ${param}`, (err, students)=>{
            if(!err){
                cb(students)
            } else {
                cb(err)
            }
        })
    } //must to have

    static findWhere() { } //nice to have

    static create() { } //must to have

    static update() { } //must to have

    static destroy() { } //must to have

}

module.exports = Student;
