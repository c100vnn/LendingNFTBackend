const catchAsync = require("../utils/catchAsync");
const userService = require("../services");

// Create and Save a new user
const create = catchAsync(async (req, res) => {
  // Validate request
  if (!req.body.address) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a user
  const user = await userService.createUser(req.body);
  res.status(httpStatus.CREATED).send(user);
});

// Retrieve all users from the database.
const findAll = catchAsync(async (req, res) => {
  const listUsers = userService.getAllUsers();
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "Users not found");
  }
  res.send(listUsers);
});

// Find a single user with an id
const findUserById = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  res.send(user);
});

// Find a single user with an email
const findUserByEmail = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.email);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  res.send(user);
});

// Delete a user with the specified id in the request
const deleteById = catchAsync(async (req, res) => {
  await userService.deleteUserById(req.params.userId);
  res.status(httpStatus.NO_CONTENT).send();
});

//Query for users by conditions
const findUsersByQuery = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const users = await userService.queryUsers(filter, options);
  res.send(users);
});

//Update user by id
const updateUser = catchAsync(async (req, res) => {
  const user = await userService.updateUserById(req.params.userId, req.body);
  res.status(httpStatus.UPDATED).send(user);
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
