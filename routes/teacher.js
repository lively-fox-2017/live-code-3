var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/database.db');
const teacher=require('./models/teacher')

router.get('/',(req,res)=>{
  teacher.findAll()
  .then(teacher=>{
    res.render('teacher',{dataTeacher:dataTeacher})
  })
  .catch(err=>{
    res.send(err)
  })
})

router.post('/',req,res)=>{
  teacher
}
