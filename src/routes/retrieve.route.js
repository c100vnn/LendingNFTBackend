const router = express.Router();
const express = require("express");
const retrieveNft = require("../controllers");

router.route("/:accountAddress").post(retrieveNft.getListNfts);

app.use("/api/retrieveNfts", router);

module.exports = router;
