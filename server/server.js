require('./configs/dbConfig')
require("path")
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors");
const pageRoutes = require("./routes/pageRoute")
const app = express()

const port = 5000

app.use(cors())
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());

app.use("/api", pageRoutes)

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  )
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE")
  next()
})

app.listen(port, () => {
  console.log("Server listening on port " + port);
});