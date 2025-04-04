const path = require("path");

module.exports = {
  mode: "production",
  entry: "main.js",  // 시작점 설정
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")  // 번들 파일이 생성될 위치
  }
};