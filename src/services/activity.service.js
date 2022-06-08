const httpStatus = require("http-status");
const { activity } = require("../models");
const ApiError = require("../util/ApiError");

const createActivity = async (activityBody) => {
  if (!activityBody) {
    return activity.create(activityBody);
  } else {
    throw new ApiError(httpStatus.NO_CONTENT, "No content");
  }
};

const getActivityById = async (id) => {
  return activity.findById(id);
};

const deleteActivityById = async (id) => {
  const Activity = await getActivityById(id);
  if (!Activity) {
    throw new ApiError(httpStatus.NOT_FOUND, "Activity not found");
  }
  await Activity.remove();
  return Activity;
};

/**
 * Query for activity
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryActivities = async (filter, options) => {
  const Activity = await activity.paginate(filter, options);
  return Activity;
};

module.exports = {
  createActivity,
  getActivityById,
  deleteActivityById,
  queryActivities,
};
