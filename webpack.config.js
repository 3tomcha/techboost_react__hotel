require('@babel/register'); // development.jsでES6を使えるようにする
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: [
    './src/js/index.js',
    './src/css/style.scss',
  ],
  output: {
    filename: 'main.js',
    path: `${__dirname}/dist`
  },
  devServer:{
    contentBase: `./dist`,
    openPage: "",//自動で指定したページを開く
    historyApiFallback: true,
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader"
      ]
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: [
        'babel-loader',
      ]
    },
    {
       test: /\.(png|svg|jpg|gif)$/,
       use: [
         'file-loader'
       ]
    }
  ]
},
plugins: [
  new MiniCssExtractPlugin({
    // both options are optional
    // Options similar to the same options in webpackOptions.output
    filename: "style.css",
  })
],
// この設定はrequireパッケージのfsのエラーを防ぐ
node: {
  console: true,
  fs: 'empty',
  net: 'empty',
  tls: 'empty'
}
};
