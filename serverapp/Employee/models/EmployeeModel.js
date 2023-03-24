const mongoose = require("mongoose");

const EmployeeSchema  = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
  });
  
  const Employee = mongoose.model("Employee", EmployeeSchema);

  module.exports = {Employee};
  