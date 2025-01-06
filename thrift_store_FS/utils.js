const fs = require("fs");
const path = require("path");

const readJson = (fileName) => {
  const file = fs.readFileSync(path.join(__dirname, "site_data", fileName));
  return JSON.parse(file);
};

module.exports = {
  readJson: readJson,
};
