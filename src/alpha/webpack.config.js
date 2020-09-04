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
  entry: "./index.js",
  output: {
    filename: "alpha.bundle.js"
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
      name: "app2",
      library: {
        type: "var",
        name: "app2"
      },
      remotes: {
        app1: "app1",
      },
      shared: ["react", "react-dom"],
    }),
  ],
};
