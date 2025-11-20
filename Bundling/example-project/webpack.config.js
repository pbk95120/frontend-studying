const path = require("path");

module.exports = {
  mode: "development",
  entry: "./main.tsx", // 웹팩이 읽기 시작할 파일을 .ts로 변경했어요.
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // .ts와 .tsx 파일을 대상으로
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env", // 최신 JS 문법을 변환해요
                "@babel/preset-react", // JSX를 변환해요
                "@babel/preset-typescript", // 타입스크립트를 변환해요
              ],
            },
          },
        ],
        exclude: /node_modules/, // 외부 모듈은 제외해요.
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // .tsx 확장자도 처리할 수 있게 해요
  },
};
