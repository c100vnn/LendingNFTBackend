var mongoose = require("mongoose");
var schema = mongoose.Schema;

var DurationSchema = new schema({
  durationId: { type: Number, required: true },
  start: { type: Date, required: true },
  end: { type: Date, required: true },
});

module.exports = mongoose.model("duration", DurationSchema);
