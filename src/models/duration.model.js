var mongoose = require("mongoose");
var schema = mongoose.Schema;

var DurationSchema = new schema({
  durationId: Number,
  start: Date,
  end: Date,
});

module.exports = mongoose.model("duration", DurationSchema);
