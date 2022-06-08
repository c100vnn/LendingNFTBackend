const catchAsync = require("../utils/catchAsync");
const activityService = require("../services");
const ApiError = require("../utils/ApiError");

const create = catchAsync(async (req, res, next) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const activity = await activityService.createActivity(req.body);
  res.status(httpStatus.CREATED).send(activity);
  next();
});

const getActivity = catchAsync(async (req, res, next) => {
  const activity = await activityService.getActivityById(req.params.id);
  if (!activity) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  res.send(activity);
  next();
});

const deleteActivity = catchAsync(async (req, res, next) => {
  await activityService.deleteActivityById(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
  next();
});

const findActivityByQuery = catchAsync(async (req, res, next) => {
  const filter = pick(req.query, ["userId", "rentId"]);
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const activity = await activityService.queryActivities(filter, options);
  res.send(activity);
  next();
});

module.exports = {
  create,
  getActivity,
  deleteActivity,
  findActivityByQuery,
};
