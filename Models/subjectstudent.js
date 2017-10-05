class SubjectStudent {
  constructor(id, idSubject, idStudent, score) {
    this.id = id;
    this.idSubject = idSubject
    this.idStudent = idStudent
    this.score = score
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

module.exports = SubjectStudent;
