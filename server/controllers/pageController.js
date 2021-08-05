const Pages = require("../models/pageModel");
const data = require("../configs/seed");

const fetchPages = async (req, res) => {
  try {
    const pages = await Pages.find({});
    return res.send({ pages: pages, success: true });
  } catch (error) {
    console.error(error);
    return res.send({ success: false });
  }
};

const getPageData = async (req, res) => {
  try {
    const page = await Pages.findOne({ id: req.params.id });
    return res.send({ page: page, success: true });
  } catch (error) {
    console.error(error);
    return res.send({ success: false });
  }
};

const deletePage = async (req, res) => {
  try {
    const page = await Pages.findOneAndRemove({ id: req.body.id });
    return res.send({ page: page, success: true });
  } catch (error) {
    console.error(error);
    return res.send({ success: false });
  }
};

const updatePage = async (req, res) => {
  try {
    const page = await Pages.findOneAndUpdate({ id: req.body.id }, req.body);
    return res.send({ page: page, success: true });
  } catch (error) {
    console.error(error);
    return res.send({ success: false });
  }
};

const addPage = async (req, res) => {
  const {
    id,
    pageName,
    pageUrl,
    pageDesc,
    pageScreenShot,
    textResources } = req.body
  const createdPage = new Pages({
    id,
    pageName,
    pageUrl,
    pageDesc,
    pageScreenShot,
    textResources
  });

  try {
    const page = await createdPage.save();
    res.send({ page: page, success: true });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ response: err });
  }
}

const setDummyPages = async (req, res) => {
  try {
    var pagesData = await Pages.find({});
    if (pagesData.length === 0) {
      await Pages.insertMany(data.pages);
      console.log("pages feeded");
    }
  } catch (err) {
    return res.status(500).json({ response: error });
  }
};

exports.addPage = addPage;
exports.fetchPages = fetchPages;
exports.getPageData = getPageData;
exports.deletePage = deletePage;
exports.updatePage = updatePage;
exports.setDummyPages = setDummyPages;
