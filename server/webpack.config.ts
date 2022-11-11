import * as path from 'path';
import * as webpack from 'webpack';


const config: webpack.Configuration = {
  entry: "./src/app.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "api.bundle.js",
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader' },
    ],
  },
  target: "node",
};

export default config;