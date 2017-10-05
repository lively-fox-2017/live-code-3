var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data/data.db');

class Subjects{
  constructor(raw) {
    this.subject_name = raw.subject_name
    this.subject_code = raw.subject_code
  }

  // static findAll() { //must to have
  //   let query = ('SELECT * FROM Subjects')
  //   let results = query.map(m => new Model(m))
  //   return results
  // }
  static findAll() { //must to have
    // return new Promise((resolve, rejects)=>{
      let query = ('SELECT * FROM Subjects', (err, dataSubjects)=>{
        if(!err){
          // let results = dataSubjects.map(m => new Subjects(m))
          console.log(dataSubjects)
          // resolve(dataSubjects)
        } else{
          // rejects
          console.log(err)
        }
      })
      
    // })
  }


  static findById() {} //must to have

  static findWhere() {} //nice to have

  static create() {
    let query = ('INSERT')
  } //must to have

  static update() {} //must to have

  static destroy() {} //must to have

}

module.exports = Subjects;