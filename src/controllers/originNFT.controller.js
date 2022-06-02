const catchAsync = require("../utils/catchAsync");
const originService = require("../services");

//Import new origin NFT
const importONFT = catchAsync(async (req, res, next) => {
  if (!req.body.tokenId) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const oNFT = await originService.importONFT(req.body);
  res.status(httpStatus.CREADTED).send(oNFT);
  next();
});

//Find single origin NFT by id 
const getOriginById = catchAsync(async (req, res, next) => {
  const oNFT = await originService.getOriginById(req.params.id);
  if (!oNFT) {
    throw new ApiError(httpStatus.NOT_FOUND, "Origin NFT not found");
  }
  res.send(oNFT);
  next();
});

//Retrieve all origin NFT
const findAllOrigin = catchAsync(async (req, res, next) => {
  const listNFT = await originService.getAllONFT();
  if (listNFT === null) {
    throw new ApiError(httpStatus.NOT_FOUND, "List Origin NFTs is empty");
  }
  res.send(listNFT);
  next();
});

//Find single origin NFT by tokenId and smartcontract address 
const getOriginNFTByTokenInfo = catchAsync(async (req, res, next) => {
  const oNFT = await originService.getOriginNFTByTokenInfo(
    req.params.tokenId,
    req.params.contractAddress
  );
  if (!oNFT) {
    throw new ApiError(httpStatus.NOT_FOUND, "Origin NFT not found");
  }
  res.send(oNFT);
  next();
});

//Retrieve all origin NFT with the same smartcontract address
const getAllONFTByContractAddress = catchAsync(async (req, res, next) => {
  const listNFT = await originService.getAllONFTByContractAddress(
    req.params.contractAddress
  );
  if (listNFT === null) {
    throw new ApiError(httpStatus.NOT_FOUND, "List Origin NFTs is empty");
  }
  res.send(listNFT);
  next();
});

//Update origin NFT by id
const updateNft = catchAsync(async (req, res, next) => {
  const oNft = await originService.updateUserById(req.params.id, req.body);
  res.status(httpStatus.UPDATED).send(oNft);
});

//Delete origin NFT by id
const deleteOriginNFT = catchAsync(async (req, res, next) => {
  await originService.deleteOriginNFT(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  importONFT,
  getOriginById,
  findAllOrigin,
  getOriginNFTByTokenInfo,
  getAllONFTByContractAddress,
  updateNft,
  deleteOriginNFT,
};
