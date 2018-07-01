// school queries
const returnAllSchools = "SELECT * FROM schools";

const returnSchoolWithId = "SELECT * FROM schools WHERE id = ?";

const insertSchoolInDB = "INSERT INTO schools SET ?";

const updateSchoolInDB =
  "UPDATE schools SET name = ?, address = ?, city = ?, phone = ?, site = ?, type_of_institution = ?, email = ?, payable_institution = ?, id_administrator = ?, password = ? WHERE id = ?";

const deleteSchoolFromDB = "DELETE FROM schools WHERE id = ?";

// teacher queries
const returnAllTeachers = "SELECT * FROM teachers";

const returnTeacherWithId = "SELECT * FROM teachers WHERE id = ?";

const insertTeacherInDB = "INSERT INTO teachers SET ?";

const updateTeacherInDB =
  "UPDATE teachers SET name = ?, surname = ?, subject = ?, id_school = ?, address = ?, city = ?, phone = ?, email = ?, site = ?, payed = ?, password = ?, classess = ?, id_background = ? WHERE id = ?";

const deleteTeacherFromDB = "DELETE FROM teachers WHERE id = ?";

// class queries
const returnAllClasses = "SELECT * FROM classes";

const returnClassWithId = "SELECT * FROM classes WHERE id = ?";

const insertClassInDB = "INSERT INTO classes SET ?";

const updateClassInDB =
  "UPDATE classes SET id_school = ?, id_teachers = ?, year = ?, time = ?, homework = ? WHERE id = ?";

const deleteClassFromDB = "DELETE FROM classes WHERE id = ?";

// student queries
const returnAllStudents = "SELECT * FROM students";

const returnStudentWithId = "SELECT * FROM students WHERE id = ?";

const insertStudentInDB = "INSERT INTO students SET ?";

const updateStudentInDB =
  "UPDATE students SET id_school = ?, id_teachers = ?, id_class = ?, id_background = ?, name = ?, surname = ?, sex = ?, fathers_name = ?, mothers_name = ?, address = ?, phone = ?, fathers_phone = ?, mothers_phone = ?, payed = ?, password = ?, email = ?, attendances = ?, city = ? WHERE id = ?";

const deleteStudentFromDB = "DELETE FROM students WHERE id = ?";

module.exports = {
  returnAllSchools,
  returnSchoolWithId,
  insertSchoolInDB,
  updateSchoolInDB,
  deleteSchoolFromDB,
  returnAllTeachers,
  returnTeacherWithId,
  insertTeacherInDB,
  updateTeacherInDB,
  deleteTeacherFromDB,
  returnAllClasses,
  returnClassWithId,
  insertClassInDB,
  updateClassInDB,
  deleteClassFromDB,
  returnAllStudents,
  returnStudentWithId,
  insertStudentInDB,
  updateStudentInDB,
  deleteStudentFromDB
};
