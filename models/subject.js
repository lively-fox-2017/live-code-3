"use strict"

var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('db/data.db')

class Subject {
  constructor() {

  }

  static getAll(callback){
    let query = 'SELECT * FROM subjects';
    db.all(query, (err, rows)=>{
      if(err) {
        console.log(err);
      };
      callback(rows);
    });
  };

}

module.exports = Subject
