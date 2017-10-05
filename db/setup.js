var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('data.db')

function createTeacher(){
    let qCreateTeacher = 'CREATE table IF NOT EXISTS teachers (id integer primary key autoincrement, first_name text, last_name text, email text, gender text)'
    db.run(qCreateTeacher, function(err){
        if(err){
            console.log(err)
        }else{
            console.log('Database teacher berhasils dibuat')
        }
    })
}


function createSubject(){
    let qCreateTeacher = 'CREATE table IF NOT EXISTS subjects (id integer primary key autoincrement, subject_name text, subject_code varchar)'
    db.run(qCreateTeacher, function(err){
        if(err){
            console.log(err)
        }else{
            console.log('Database subject berhasil dibuat')
        }
    })
}

function createUnique(){
    let querycreateunique = 'create unique index unique_column on subjects(subject_code)'
    
        db.run(querycreateunique, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('Table subjects altered');
            }
        })
}

function alterTableTeachers(){
    let queryalteraddress = 'ALTER TABLE teachers ADD id_subject INTEGER REFERENCES subjects (id)'

    db.run(queryalteraddress, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Table teachers altered');
        }
    })
}


createTeacher()
createSubject()
createUnique()
alterTableTeachers()