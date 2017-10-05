class Student {
  constructor(id, first_name, last_name, email, gender) {
    this.id = id;
    this.first_name = first_name
    this.last_name = last_name
    this.email = email
    this.gender = gender
  }

  static findAll() { //must to have
    let results = models.map(m => new Model(m))
    return results
  }

  static findById() {} //must to have

  static findWhere() {} //nice to have

  static create() {} //must to have

  static update() {} //must to have

  static destroy() {} //must to have

}

module.exports = Student;
