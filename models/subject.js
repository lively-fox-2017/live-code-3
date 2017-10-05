var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/database.db');

class Subject {
    constructor(raw) {
        this.id = raw.id
        this.subject_name = raw.subject_name
        this.subject_code = raw.subject_code
        this.students = []
    }
  
    static findAll() { //must to have
        let query = `SELECT * FROM subject`
        return new Promise((resolve,reject) => {
            db.all(query, (err,rows) => {
                // console.log(rows, 'Halo')
                let result = rows.map(m => new Subject(m))
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
        let query = `SELECT * FROM subject WHERE id=${id}`
        return new Promise((resolve,reject) => {
            db.all(query, (err,rows) => {
                let result = rows.map(m => new Subject(m))
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
        let query = `INSERT INTO subject(subject_name, subject_code) VALUES('${params.subject_name}', '${params.subject_code}')`
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
        let query = `UPDATE subject SET subject_name='${data.subject_name}', subject_code='${data.subject_code}' WHERE id = ${id}`
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
        let query = `DELETE FROM subject WHERE id=${id}`
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
  
    static assign(id, params) {
        console.log(params)
        let query = `INSERT INTO studentSubject(subjectId, studentId) VALUES('${id}', '${params}')`
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

    static getStudents(id) {
        let query = `SELECT * FROM studentSubject WHERE subjectId=${id}`
        return new Promise((resolve,reject) => {
            db.all(query, (err,rows) => {
                if(!err) {
                    resolve(rows)
                } else {
                    reject(err)
                }
            })
        })
    }

  }

  module.exports = Subject
  