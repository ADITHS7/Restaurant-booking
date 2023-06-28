const mongoose = require ('mongoose')
const orderSchema = new mongoose.Schema({
oid:String,
qty:String,
name:String,
table:String,
tableNo:String,
address:String,
phone:String,
payment:String,
date:String,
cheTime:{type:String,default:"not cooked"},
mngTime:{type:String,default:"Not completed"},
status:{type:String,default:"pending"}
})

module.exports = mongoose.model("order",orderSchema);