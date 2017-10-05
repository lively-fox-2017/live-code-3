var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./data.db');

class Teacher {
  constructor(id, first_name, last_name, email, gender) {
    this.id = id
    this.first_name = first_name
    this.last_name = last_name
    this.email = email
    this.gender = gender
  }

  static findAll() { //must to have
    return new Promise((resolve, reject) => {
			db.all('SELECT * FROM teachers', function(err, rows){
			let teachers = [];
			rows.forEach((row) => {
				let teacher = new Teacher(row.id, row.first_name, row.last_name, row.email, row.gender);
				teachers.push(teacher);
			});
				resolve(teachers);
  			});
		});
  }

  static findById(reqParams) {
    db.get(`SELECT * FROM teachers WHERE id = ${reqParams}`, function(err, rows){
      console.log(rows)
    });
  } //must to have

  static findWhere() {} //nice to have

  static create(first_name, last_name, email, gender) {
			db.run(`INSERT INTO teachers (first_name, last_name, email, gender) VALUES ('${first_name}', '${last_name}', '${email}', '${gender}')`);
  } //must to have

  static update() {} //must to have

  static destroy() {} //must to have

}

module.exports = Teacher
