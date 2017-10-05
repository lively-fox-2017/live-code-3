// var express = require('express')
// var app = express()

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./data.db');


function createTables(){
  let sqlq1 = 'create table  IF NOT EXISTS Subjects ( id integer primary key autoincrement, subject_name string , subject_code string  )'
  db.run(sqlq1,(err)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log('table subject ceated');
    }
  })

  let sqlq2 = 'create table IF NOT EXISTS Students ( id integer primary key autoincrement, first_name string , last_name string , email string , genderID integer references Genders(id)   )'
  db.run(sqlq2,(err)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log('table student ceated');
    }
  })

  let sqlq3 = 'create table IF NOT EXISTS Genders ( id integer primary key autoincrement, gender string   )'
  db.run(sqlq3,(err)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log('table gender ceated');
    }
  })
}

function alterTables(){
  let sqlq = 'create unique index IX_subjects_code on Subjects(subject_code)'
  db.run(sqlq,(err)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log('unique index created');
    }
  })
}

function createConjunction(){
  let sqlq = 'create table IF NOT EXISTS Students_Subjects ( id integer primary key autoincrement, studentsID integer references Students(id) ,  subjectsID integer references Subjects(id)  )'
  db.run(sqlq,(err)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log('table conjunct ceated');
    }
  })
}


createTables()
alterTables()
createConjunction()
