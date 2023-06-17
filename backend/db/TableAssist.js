const mongoose = require('mongoose');
const TableAssistanceSchema =new mongoose.Schema({
  tableNo:String,
  time:String
})
module.exports = mongoose.model("TableAssistance",TableAssistanceSchema);