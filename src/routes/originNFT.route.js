const router = express.Router();
const express = require("express");
const originNFT = require("../controllers");

router.route("/").post(originNFT.importONFT).get(originNFT.findAllOrigin);

router
  .route("/:id")
  .get(originNFT.getOriginById)
  .patch(originNFT.updateNft)
  .delete(originNFT.deleteOriginNFT);

router
  .route("/:tokenId&:contractAddress")
  .get(originNFT.getOriginNFTByTokenInfo);

router.route("/:contractAddress").get(originNFT.getAllONFTByContractAddress);
