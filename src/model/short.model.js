const mongoose = require("mongoose");
const ShortID = require("shortid");

const shortUrlSchema = new mongoose.Schema(
  {
    full: {
      type: "string",
      required: true,
    },
    short: { type: "string", required: true, default: ShortID.generate },
    clicks: { type: Number, required: true, default: 0 },
  },
  { versionKey: false, timestamps: true }
);
module.exports = mongoose.model("ShortID", shortUrlSchema);
