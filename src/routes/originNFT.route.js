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
  .route("/originNft-by-token-info")
  .get(originNFT.getOriginNFTByTokenInfo);

router.route("/:contractAddress").get(originNFT.getAllONFTByContractAddress);

app.use("/api/oNft", router);

module.exports = router;
