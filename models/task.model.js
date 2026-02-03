const mongoose = require('mongoose')

const taskModel = mongoose.Schema({
    title : String,
    description : String,
    priorityLevel : {type:String, enum:["LOW","MEDIUM","HIGH"],default : "MEDIUM"},
    taskState : {type:String,enum:["TO_DO","IN_PROGRESS","BLOCKED","COMPLETED"],default: "TO_DO"}
},{timestamps : true});