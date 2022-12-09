const path = require("path");

module.exports = {
  // autres options ici...

  module: {
    rules: [
      // autres règles ici...
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "node_modules/@playwright"),
          path.resolve(__dirname, "node_modules/@fastify")
        ],
        use: {
          loader: "babel-loader",
          options: {
            // autres options ici...
            presets: [
              [
                "@babel/preset-env",
                {
                  modules: false,
                  targets: {
                    esmodules: true
                  }
                }
              ]
            ]
          }
        }
      }
    ]
  }
};