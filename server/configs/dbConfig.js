const mongoose = require("mongoose");
const config = require("./index");
const { host, port, db_name } = config.database;
const pagesData = require('../controllers/pageController')

const mongodb_uri = "mongodb://" + host + ":" + port + "/" + db_name;

module.exports = mongoose.connect(
  mongodb_uri,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  },
  (error) => {
    if (error) {
      console.error(`🐞 🐛 Failed to connect to mongodb\n\n\n${error} 🐛 🐞`);
      process.exit(1);
    }
    console.log(`🙌 💾 ${mongodb_uri} connected successfully 💽 🙌`);
    pagesData.setDummyPages()
  }
);