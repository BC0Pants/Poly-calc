const path = require("path");

module.exports = {
  entry: "./scripts/script.js", // Path to your main JS file
  output: {
    filename: "bundle.js", // Output file
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  mode: "production", // Or 'development' for testing
};
