const mongoose = require('mongoose');
const managerLoginSchema =new mongoose.Schema({
  name:String,
  managerId:String,
  password:String
})
module.exports = mongoose.model("managerLogin",managerLoginSchema);