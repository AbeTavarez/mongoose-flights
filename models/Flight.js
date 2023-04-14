const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United"],
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 999,
  },
  departs: {
    type: Date,
    default: Date.now
  }
});

const Flight = mongoose.model('Flight', flightSchema)
module.exports = Flight;
