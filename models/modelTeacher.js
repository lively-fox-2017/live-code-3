const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('db/data.db')
const body = require('body-parser')

class Teacher{
    constructor(id,first_name,last_name,email, gender, id_subject){
        this.id = id
        this.first_name = first_name
        this.last_name = last_name
        this.email = email
        this.gender = gender
        this.id_subject = id_subject 
    }

    static findAll(){
        let result =[]
        return new Promise((resolve, reject)=>{
            db.all('Select * from teachers', function(err, rows){
                if(err){
                    console.log(err)
                }else{
                    rows.forEach(function(teacher) {
                        result.push(new Teacher(teacher.id, teacher.first_name, teacher.last_name, teacher.email, teacher.gender, teacher.id_subject));
                    });
                   resolve(result)
                }
            })
        })
    }
}

module.exports = Teacher;