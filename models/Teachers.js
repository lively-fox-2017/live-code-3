var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data/data.db');


class Teachers{
  
  // constructor(raw) {
  //   this.attribute1 = raw.attribute1
  //   this.attribute2 = raw.attribute2
  // }

  static findAll() { //must to have
    return new Promise((resolve, rejects)=>{
      let query = ('SELECT * FROM Teachers')
      db.all(query,(err, dataTeachers)=>{
        if(!err){
          resolve(dataTeachers)
        } else{
          rejects(err)
          // console.log(err)
        }
      })
    })
  }


  static findById(id) {
    return new Promise((resolve, rejects)=>{
      let query=`SELECT * FROM Teachers where id = ${id}`;
      db.get(query, (err, dataTeacher)=>{
        if(!err){
          resolve(dataTeacher);
        }
      })
    })
  } //must to have

  static findWhere() {} //nice to have

  static create(dataTeachers) {
    return new Promise((resolve, rejects)=>{
      let query = (`INSERT into Teachers(first_name, last_name, email, gender) VALUES ('${dataTeachers.first_name}','${dataTeachers.last_name}', '${dataTeachers.email}','${dataTeachers.gender}')`);
      db.run(query, (err)=>{
        if(!err){
          resolve(null);
        } else {
          rejects(err);
        }
      })
    })
    
  } //must to have

  static update(id, dataTeacher) {
    console.log('databos',id)
    return new Promise((resolve, rejects)=>{
      let query = `UPDATE Teachers SET first_name = '${dataTeacher.first_name}', last_name = '${dataTeacher.last_name}', email = '${dataTeacher.email}', gender = '${dataTeacher.gender}' WHERE id = ${id}`;
      db.all(query, (err, dataUpdateTeacher)=>{
        if(!err){
          console.log('hasil',dataUpdateTeacher)
          resolve(null);
        } else{
          console.log('ERRRR',err)
        }
      })
    })
  } //must to have

  static destroy(id) {
    return new Promise((resolve, rejects)=>{
      let query = `DELETE FROM Teachers WHERE id = ${id}`;
      db.all(query,(err, data)=>{
        if(!err){
          resolve(null);
        } else {
          rejects(err);
        }
      })
    })
    
  } //must to have
}

module.exports = Teachers;