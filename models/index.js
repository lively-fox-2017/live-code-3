const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('data/data.db')

class Index{
  constructor(){

  }

  static read(){

    return new Promise((resolve,reject)=>{

      db.all(`select * from Subject`,(err,row_Subject)=>{
        if(err){
          console.log('error load from Subject')
        }else{
          resolve(row_Subject)
        }
      })

    })

  }



  // static delete(reqParams){
  //   return new Promise((resolve,reject)=>{
  //
  //     db.run(`delete from Subject where id = "${reqParam}"`,(err,row_Subject)=>{
  //       if(err){
  //         console.log('error delete from Subject')
  //       }else{
  //         resolve(row_Subject)
  //       }
  //     })
  //
  //   })
  // }
}

module.exports = Index
