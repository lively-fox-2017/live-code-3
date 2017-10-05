var express = require('express')
var app = express()

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./data.db');

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var ejs = require('ejs')
app.set('view engine','ejs')

class Subjects {
  constructor(data){
    this.id=data.id
    this.subject_name    =  data.subject_name
    this.subject_code    =  data.subject_code
  }

  static selectAll(){
    return new Promise(function(resolve, reject) {
      db.all('select * from Subjects', (err,rows)=>{
        // console.log(rows);
        let data = []
        rows.forEach(row=>{
          let dataRow = new Subjects (row)
          data.push(dataRow)
        })
        resolve(data)
      })
    });
  }

  static selectID(id){
    return new Promise(function(resolve, reject) {
      db.all(`select * from Subjects where id='${id}'`, (err,rows)=>{
        // console.log(rows);
        let data = []
        rows.forEach(row=>{
          let dataRow = new Subjects (row)
          data.push(dataRow)
        })
        resolve(data)
      })
    });
  }


  static insert(subject_name,subject_code){
    return new Promise(function(resolve, reject) {
      db.run(`insert into Subjects values(null , '${subject_name}','${subject_code}')`, function (err){
        resolve(this.lastID)
      })
    });
  }

  static edit(subject_name,subject_code){
    return new Promise(function(resolve, reject) {
      db.run(`update Subjects  set subject_name='${subject_name}',subject_code='${subject_code}')`, function (err){
        resolve(this.lastID)
      })
    });
  }

  static deleteID(id){
    return new Promise(function(resolve, reject) {
      db.run(`delete from Subjects where id = '${id}'`, function (err){
        resolve(this.lastID)
      })
    });
  }

}



module.exports = Subjects;
