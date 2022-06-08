const catchAsync = require("../utils/catchAsync");
const retrieveNftService = require("../services");

const getListNfts = catchAsync(async (req, res, next) => {
  const listNfts = await retrieveNftService.renderTokensForOwner(
    req.params.accountAddress
  );
  res.send(listNfts);
  next();
});

module.exports = {
  getListNfts,
};
