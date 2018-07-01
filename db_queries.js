const returnAllSchools = "SELECT * FROM institucije";

const returnSchoolWithId = "SELECT * FROM institucije WHERE id = ?";

const insertSchoolInDB = "INSERT INTO institucije SET ?";

const updateSchoolInDB =
  "UPDATE institucije SET name = ?, address = ?, city = ?, phone = ?, site = ?, type_of_institution = ?, email = ?, payable_institution = ?, id_administrator = ?, password = ? WHERE id = ?";

const deleteSchoolFromDB = "DELETE FROM institucije WHERE id = ?";

module.exports = {
  returnAllSchools,
  returnSchoolWithId,
  insertSchoolInDB,
  updateSchoolInDB,
  deleteSchoolFromDB
};
