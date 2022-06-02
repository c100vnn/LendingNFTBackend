var mongoose = require("mongoose");
var schema = mongoose.Schema;

var UserSchema = new schema({
  address: String,
  name: String,
  email: String,
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
