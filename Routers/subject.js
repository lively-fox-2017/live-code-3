const express = require("express");
const router = express.Router();
const Subject = require("../Models/subject");

router.get("/subject", (req, res) => {
  Subject.findAll().then((arrSubject) => {
    res.render("subject", {dataSubject: arrSubject});
  }).catch((err) => {
    console.log(err);
  })
})

router.post("/subject/insert", (req, res) => {
  Subject.create(req.body).then(() => {
    res.redirect("/subject");
  })
})

router.get("/subject/edit/:id", (req, res) => {
  Subject.findById(req.params.id).then((objSubject) => {
    res.render("editsubject", {dataSubject: objSubject})
  }).catch((err) => {
    console.log(err);
  })
})

router.post("/subject/edit/:id", (req, res) => {
  Subject.update(req.body, req.params.id).then(() => {
    res.redirect("/subject");
  })
})

router.get("/subject/delete/:id", (req,res) => {
  Subject.destroy(req.params.id).then(() => {
    res.redirect("/subject");
  })
})

module.exports = router;
