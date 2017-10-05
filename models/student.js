var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/database.db');

class Student {
    constructor(raw) {
        this.id = raw.id
        this.first_name = raw.first_name
        this.last_name = raw.last_name
        this.email = raw.email
        this.gender = raw.gender
    }
  
    static findAll() { //must to have
        let query = `SELECT * FROM student`
        return new Promise((resolve,reject) => {
            db.all(query, (err,rows) => {
                // console.log(rows, 'Halo')
                let result = rows.map(m => new Student(m))
                if(!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    //   let results = Subjects.map(m => new Subject(m))
    //   return results
    }
  
    static findById(id) {
        let query = `SELECT * FROM student WHERE id=${id}`
        return new Promise((resolve,reject) => {
            db.all(query, (err,rows) => {
                let result = rows.map(m => new Student(m))
                if(!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    } //must to have
  
    static findWhere() {} //nice to have
  
    static create(params) {
        console.log(params)
        let query = `INSERT INTO student(first_name, last_name, email, gender) VALUES('${params.first_name}', '${params.last_name}', '${params.email}', '${params.gender}')`
        return new Promise((resolve,reject) => {

            db.run(query, (err) => {
                if(!err) {
                    resolve()
                } else {
                    reject(err)
                }
            })
        })
    } //must to have
  
    static update(id,data) {
        console.log(id,data)
        let query = `UPDATE student SET first_name='${data.first_name}', last_name='${data.last_name}', email='${data.email}',gender='${data.gender}' WHERE id = ${id}`
        return new Promise((resolve,reject) => {
            db.run(query, (err) => {
                if(!err) {
                    resolve()
                } else {
                    reject(err)
                }
            })
        })
    } //must to have
  
    static destroy(id) {
        let query = `DELETE FROM student WHERE id=${id}`
        return new Promise((resolve,reject) => {

            db.run(query, (err) => {
                if(!err) {
                    resolve()
                } else {
                    reject(err)
                }
            })
        })
    } //must to have
  
  }

  module.exports = Student
  