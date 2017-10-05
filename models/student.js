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
        db.get(`SELECT * FROM Students WHERE id = ${param.id}`, (err, students)=>{
            if(!err){
                cb(students)
            } else {
                cb(err)
            }
        })
    } //must to have

    static findWhere() { } //nice to have

    static create(body, cb) { 
        db.run(`INSERT INTO Students (first_name, last_name, gender) 
        VALUES ('${body.first_name}','${body.last_name}', '${body.gender}' )`, (err)=>{
            if(!err){
                cb()
            } else {
                cb(err)
            }
        })
    } //must to have

    static update(body, params, cb) { 
        db.run(`UPDATE Students SET
            first_name = '${body.first_name}',
            last_name = '${body.last_name}',
            gender = '${body.gender}'
            WHERE id = ${params}`, (err)=>{
                if(!err){
                    cb()
                } else {
                    cb(err)
                }
            })
    } //must to have

    static destroy() { } //must to have

}

module.exports = Student;
