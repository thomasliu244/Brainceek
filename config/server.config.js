const path = require("path");

module.exports = {
  files: {
    entries: {
      html: path.resolve(__dirname,"../app/client/index.html"),
    },
    public: path.resolve(__dirname,"../app/client")
  },
  port: 8080
};
