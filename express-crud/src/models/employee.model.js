"user strict";
var dbConn = require("./../../config/db.config");

//Employee object create
class Employee {
  constructor(employee) {
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.designation = employee.designation ? employee.designation : 1;
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  static create(newEmp, result) {
    dbConn.query("INSERT INTO employees set ?", newEmp, function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log(res.insertId);
        result(null, res.insertId);
      }
    });
  }

  static findById(id, result) {
    dbConn.query(
      "Select * from employees where id = ? ",
      id,
      function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
        } else {
          result(null, res);
        }
      }
    );
  }

  static findAll(result) {
    dbConn.query("Select * from employees", function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("employees : ", res);
        result(null, res);
      }
    });
  }

  static update(id, employee, result) {
    dbConn.query(
      "UPDATE employees SET first_name=?,last_name=?,designation=? WHERE id = ?",
      [employee.first_name, employee.last_name, employee.designation, id],
      function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(null, err);
        } else {
          result(null, res);
        }
      }
    );
  }

  static delete(id, result) {
    dbConn.query(
      "DELETE FROM employees WHERE id = ?",
      [id],
      function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(null, err);
        } else {
          result(null, res);
        }
      }
    );
  }
}
module.exports = Employee;
