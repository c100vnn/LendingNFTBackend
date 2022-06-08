const router = express.Router();
const express = require("express");
const activity = require("../controllers");

router.route("/").post(activity.create);

router.route("/id").get(activity.getActivity).delete(activity.deleteActivity);

router.route("/activity-by-query").get(activity.findActivityByQuery);

app.use("/api/activity", router);

module.exports = router;
