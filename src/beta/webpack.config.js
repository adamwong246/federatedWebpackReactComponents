const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const {
  ModuleFederationPlugin
} = require("webpack").container;

const isEnvProduction = process.env.NODE_ENV === 'production';
const isEnvDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  devtool: isEnvDevelopment ? 'source-map' : false,
  mode: isEnvProduction ? 'production' : 'development',
  entry: "./Chunk.js",
  output: {
    filename: "beta.bundle.js"
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app1",
      library: {
        type: "var",
        name: "app1"
      },
      filename: "remoteEntry.js",
      exposes: {
        // expose each component
        "./Chunk.js": "./Chunk.js",
      },
      shared: ["react", "react-dom"],
    })
  ]
};
