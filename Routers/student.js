const express = require("express");
const router = express.Router();
const Student = require("../Models/student");

router.get("/student", (req, res) => {
  Student.findAll().then((arrStudent) => {
    res.render("student", {dataStudent: arrStudent});
  }).catch((err) => {
    console.log(err);
  })
})

router.post("/student/insert", (req, res) => {
  Student.create(req.body).then(() => {
    res.redirect("/student");
  })
})

router.get("/student/edit/:id", (req, res) => {
  Student.findById(req.params.id).then((objStudent) => {
    res.render("editstudent", {dataStudent: objStudent})
  }).catch((err) => {
    console.log(err);
  })
})

router.post("/student/edit/:id", (req, res) => {
  Student.update(req.body, req.params.id).then(() => {
    res.redirect("/student");
  })
})

router.get("/student/delete/:id", (req,res) => {
  Student.destroy(req.params.id).then(() => {
    res.redirect("/student");
  })
})

module.exports = router;
