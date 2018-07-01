const express = require("express");
const mysql = require("mysql");
const queries = require("./db_queries");
const bodyparser = require("body-parser");

// creating connection
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ediary"
});

con.connect(err => {
  if (!err) console.log("DB connection succeded.");
  else
    console.log(
      "DB connection failed \n Error : " + JSON.stringify(err, undefined, 2)
    );
});

// Config
const APP_PORT = 3000;

// Start
const app = express();
app.use(bodyparser.json());

app.listen(APP_PORT, () => {
  console.log(`App listening on port ${APP_PORT}`);
});

/* !--- QUERIES FOR SCHOOL ---! */

// gets all schools
app.get("/allSchools", (req, res) => {
  con.query(queries.returnAllSchools, (err, rows) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});
// gets single school
app.get("/school/:id", (req, res) => {
  con.query(queries.returnSchoolWithId, [req.params.id], (err, rows) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});
// puts new school in db
app.post("/school", (req, res) => {
  let schoolData = req.body;
  con.query(queries.insertSchoolInDB, schoolData, (err, rows, fields) => {
    if (!err) {
      res.send("Inserted school id : " + rows.insertId);
    } else console.log(err);
  });
});

// updates existing school in db
app.put("/school", (req, res) => {
  let schoolData = req.body;
  con.query(
    queries.updateSchoolInDB,
    [
      schoolData.name,
      schoolData.address,
      schoolData.city,
      schoolData.phone,
      schoolData.site,
      schoolData.type_of_institution,
      schoolData.email,
      schoolData.payable_institution,
      schoolData.id_administrator,
      schoolData.password,
      schoolData.id
    ],
    (err, rows, fields) => {
      if (!err) {
        res.send("Updated school : " + rows);
      } else console.log(err);
    }
  );
});
// deletes school from db
app.delete("/school", (req, res) => {
  let schoolData = req.body;
  con.query(
    queries.deleteSchoolFromDB,
    [schoolData.id],
    (err, rows, fields) => {
      if (!err) {
        res.send("Deleted School: " + rows);
      } else console.log(err);
    }
  );
});

/* !--- END OF SCHOOL QUEIES --! */

/* !--- START OF TEACHER QUERIES --! */

// gets all schools
app.get("/allTeachers", (req, res) => {
  con.query(queries.returnAllTeachers, (err, rows) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});
// gets single teacher
app.get("/teacher/:id", (req, res) => {
  con.query(queries.returnTeacherWithId, [req.params.id], (err, rows) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});
// puts new teacher in db
app.post("/teacher", (req, res) => {
  let schoolData = req.body;
  con.query(queries.insertTeacherInDB, schoolData, (err, rows) => {
    if (!err) {
      res.send("Inserted school id : " + rows.insertId);
    } else console.log(err);
  });
});

// updates existing teacher in db
app.put("/teacher", (req, res) => {
  let teacherData = req.body;
  con.query(
    queries.updateTeacherInDB,
    [
      teacherData.name,
      teacherData.surname,
      teacherData.subject,
      teacherData.id_school,
      teacherData.address,
      teacherData.city,
      teacherData.phone,
      teacherData.email,
      teacherData.site,
      teacherData.payed,
      teacherData.password,
      teacherData.classess,
      teacherData.id_background,
      teacherData.id
    ],
    (err, rows, fields) => {
      if (!err) {
        res.send("Updated teacher : " + rows);
      } else console.log(err);
    }
  );
});
// deletes school from db
app.delete("/teacher", (req, res) => {
  let teacherData = req.body;
  con.query(
    queries.deleteTeacherFromDB,
    [teacherData.id],
    (err, rows, fields) => {
      if (!err) {
        res.send("Deleted teacher: " + rows);
      } else console.log(err);
    }
  );
});

/* !--- END OF TEACHER QUERIES --! */
