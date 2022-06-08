var mongoose = require("mongoose");
var schema = mongoose.Schema;

var UserSchema = new schema({
  address: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
});

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
UserSchema.statics.isEmailTaken = async function (email, excludeUserId) {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!user;
};

/**
 * @typedef User
 */
const User = mongoDashboardConnection.model("User", UserSchema);

module.exports = mongoose.model(User);
