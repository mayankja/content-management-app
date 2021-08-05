const express = require("express");
const pageController = require("../controllers/pageController");

const router = express.Router();

router.get("/fetch_pages", pageController.fetchPages);
router.get("/get_page/:id", pageController.getPageData);
router.post("/add_page", pageController.addPage);
router.put("/update_page", pageController.updatePage);
router.delete("/delete_page", pageController.deletePage);

module.exports = router;
