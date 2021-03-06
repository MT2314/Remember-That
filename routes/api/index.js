const router = require("express").Router();
const path = require("path");

const mainRoutes = require("./main");

// journal routes
router.use("/main", mainRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });


module.exports = router;
