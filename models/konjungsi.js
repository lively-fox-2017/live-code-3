var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('./data.db');

class Konjungsi {
  constructor() {
    // this.attribute1 = raw.attribute1
    // this.attribute2 = raw.attribute2
  }

  static findAll() { //must to have
    return new Promise((resolve, reject) => {
      db.all('select * from Konjungsi;', (err, konjungsi) =>{
        resolve(konjungsi)
      })
    });
  }

  static findById() {} //must to have

  static findWhere() {} //nice to have

  static create() {} //must to have

  static update() {} //must to have

  static destroy() {} //must to have

}

module.exports = Konjungsi