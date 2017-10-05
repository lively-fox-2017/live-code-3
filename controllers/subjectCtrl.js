const Subject = require('../models/subject');

class SubjectCtrl {
  static getSubjects(req, res) {
    Subject.findAll()
      .then(subjects => {
        res.send(subjects);
      })
      .catch(reason => {
        console.log(reason);
      })
  }
}

module.exports = SubjectCtrl;
