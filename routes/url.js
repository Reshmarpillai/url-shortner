const express = require("express");
const { generateShortUrl,handleGetAnalytics } = require("../controllers/url");

const router = express.Router();

router.post("/", generateShortUrl);
router.get("/analytics/:shortID",handleGetAnalytics);

module.exports = router;
