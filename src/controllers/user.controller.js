const catchAsync = require("../utils/catchAsync");
const userService = require("../services");
const ApiError = require("../utils/ApiError");

// Create and Save a new user
const create = catchAsync(async (req, res, next) => {
  // Validate request
  if (!req.body.address) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a user
  const user = await userService.createUser(req.body);
  res.status(httpStatus.CREATED).send(user);
  next();
});

// Retrieve all users from the database.
const findAll = catchAsync(async (req, res, next) => {
  const listUsers = userService.getAllUsers();
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "Users not found");
  }
  res.send(listUsers);
  next();
});

// Find a single user with an id
const findUserById = catchAsync(async (req, res, next) => {
  const user = await userService.getUserById(req.params.id);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  res.send(user);
  next();
});

// Find a single user with an email
const findUserByEmail = catchAsync(async (req, res, next) => {
  const user = await userService.getUserById(req.params.email);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  res.send(user);
  next();
});

// Delete a user with the specified id in the request
const deleteById = catchAsync(async (req, res, next) => {
  await userService.deleteUserById(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
  next();
});

//Query for users by conditions
const findUsersByQuery = catchAsync(async (req, res, next) => {
  const filter = pick(req.query, ["name", "role"]);
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const users = await userService.queryUsers(filter, options);
  res.send(users);
  next();
});

//Update user by id
const updateUser = catchAsync(async (req, res, next) => {
  const user = await userService.updateUserById(req.params.id, req.body);
  res.status(httpStatus.UPDATED).send(user);
  next();
});

module.exports = {
  findAll,
  findUserById,
  deleteById,
  create,
  findUserByEmail,
  findUsersByQuery,
  updateUser,
};
