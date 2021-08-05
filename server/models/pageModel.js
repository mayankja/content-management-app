const mongoose = require("mongoose")

const Schema = mongoose.Schema

const pageSchema = new Schema({
  id: { type: String },
  pageName: { type: String },
  pageUrl: { type: String },
  pageDesc: { type: String },
  pageScreenShot: { type: String },
  textResources: { type: Array }
}, {
  timestamps: [{ createdAt: 'created_at', updatedAt: 'updated_at' }],
})

module.exports = mongoose.model('Page', pageSchema)
