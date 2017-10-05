"use strict"

var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('db/data.db')

class Teacher {
  constructor() {

  }

  static getAll(callback){
    let query = `SELECT * FROM teacher`
    db.all(query, function(err, rows) {
      if(err){
        console.log(err);
      }
      callback(rows)
    });
  }
}

module.exports = Teacher
