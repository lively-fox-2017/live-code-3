const Subject = require('../models/subject');

class SubjectCtrl {
  static getSubjects() {
    Subject.findAll()
      .then(subjects => {
        console.log(subjects);
      })
      .catch(reason => {
        console.log(reason);
      })
  }
}

module.exports = SubjectCtrl;
