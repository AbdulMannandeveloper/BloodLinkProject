const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const requestSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
 // username: {
   // type: String,
    //required: true,
  //},
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    required: true,
  },
  hospitalName: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pintsRequired: {
    type: Number,
    required: true,
  },
  //caselocked: {
  //type: Boolean,
  //default: false
  //}
});

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;
