const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('db/data.db')
const body = require('body-parser')

class Subject{
    constructor(id, subject, subject_code){
        this.id = id
        this.subject = subject
        this.subject_code = subject_code
    }

    static findAll(){
        let result =[]
        return new Promise((resolve, reject)=>{
            db.all('Select * from subjects', function(err, rows){
                if(err){
                    console.log(err)
                }else{
                    rows.forEach(function(subject) {
                        result.push(new Subject(subject.id, subject.subject_name, subject.subject_code));
                    });
                   resolve(result)
                }
            })
        })
    }

    static newData(data){
        return new Promise((resolve, reject)=>{
            db.run(`insert into subjects(subject_name, subject_code) values('${data.subject_name}','${data.subject_code}')`, function(err){
                if(err){
                   resolve('')
                }else{
                    resolve()
                }
            })
        })
    }

    static deleteData(data){
        return new Promise((resolve, reject)=>{
            db.run(`Delete from subjects where id = '${data}'`, function(err){
                if(err){
                    reject(err)
                }else{
                    resolve()
                }
            })
        })
    }
}

module.exports = Subject;