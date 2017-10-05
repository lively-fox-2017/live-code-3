const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/data.db')

db.serialize(function(){
    db.run(`CREATE TABLE IF NOT EXISTS Students (id INTEGER PRIMARY KEY AUTOINCREMENT, first_name VARCHAR(255), last_name VARCHAR(255), gender VARCHAR(50))`,()=>{
        console.log('table Student telah dibuat')
    })

    db.run(`CREATE TABLE IF NOT EXISTS Subjects (id INTEGER PRIMARY KEY AUTOINCREMENT, subject_name VARCHAR(255), subject_code VARCHAR(255))`, ()=>{
        console.log('table Subjects telah dibuat');
    })

    db.run(`CREATE TABLE IF NOT EXISTS StudentSubjects (id INTEGER PRIMARY KEY AUTOINCREMENT, 
        studentid INTEGER,
        subjectid INTEGER,
        FOREIGN KEY (studentid) REFERENCES Students(id),
        FOREIGN KEY (subjectid) REFERENCES Subjects(id))`, ()=>{
            console.log('table StudentSubjects telah dibuat');
    })

    // db.run(`ALTER TABLE StudentSubjects ADD COLUMN score INTEGER`, ()=>{
    //     console.log('tambah kolom score di Student Subjects');
    // })
})