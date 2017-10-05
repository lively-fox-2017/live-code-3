"use strict"

var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('db/data.db')

class Teacher {
  constructor() {

  }


  static getAll(callback){
    let query = 'SELECT * FROM teachers';
    db.all(query, (err, rows)=>{
      if(err) {
        console.log(err);
      };
      callback(rows);
    });
  };

  static create(req, callback){
    let query = `INSERT INTO teachers (first_name, last_name, email, gender)
                VALUES('${req.body.first_name}', '${req.body.last_name}', '${req.body.email}',
                '${req.body.gender}')`;
    db.run(query, (err, rows)=>{
      if(err){
        console.log(err);
      };
      callback(rows);
    });
  };

  static getEdit(req, callback){
    let query = `SELECT * FROM teachers WHERE id = ${req.params.id}`;
    db.all(query, (err, rows)=>{
      if(err){
        console.log(err);
      };
      callback(rows);
    });
  };

  static postEdit(req, callback){
    let query = `UPDATE teachers SET
                first_name = ${req.body.first_name},
                last_name = ${req.body.last_name},
                email = ${req.body.email},
                gender = ${req.body.gender}
                WHERE id = ${req.params.id}`;
    db.run(query, (err, rows)=>{
      if(err){
        console.log(err);
      };
      callback(rows);
    });
  };

  static getDelete(req, callback){
    let query = `DELETE FROM teachers WHERE id = ${req.params.id}`;
    db.all(query, (err, rows)=>{
      if(err){
        console.log(err);
      };
      callback(rows);
    });
  };

}

module.exports = Teacher

//
