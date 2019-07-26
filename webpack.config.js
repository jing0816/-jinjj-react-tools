const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js',
    demo: './test/index.js',
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist"
  },
  // devtool: 'source-map',
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(css|less)$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                // minimize: true //压缩css
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [
                  autoprefixer({
                    browsers: [
                      'defaults',
                      'not ie < 11',
                      'last 2 versions',
                      '> 1%',
                      'iOS 7',
                      'last 3 iOS versions',
                    ],
                  }),
                ],
                sourceMap: true,
              },
            },
            {
              loader: 'less-loader',
            },
          ],
        }),
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,    // 小于8k的图片自动转成base64格式，并且不会存在实体图片
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.(eot|ttf|woff|svg)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './test/index.html',
      filename: './demo.html',
      chunks: ['vendor', 'index', 'demo'],
    }),
    // new ExtractTextWebpackPlugin('[name].css'),
    new ExtractTextWebpackPlugin('index.css'),
    // new UglifyJSPlugin({
    //   sourceMap: true
    // }),
    // new ParallelUglifyPlugin({
    //   // 传递给 UglifyJS 的参数
    //   uglifyJS: {
    //     output: {
    //       // 最紧凑的输出
    //       beautify: true,
    //       // 删除所有的注释
    //       comments: false,
    //     },
    //     compress: {
    //       // 删除所有的 `console` 语句，可以兼容ie浏览器
    //       drop_console: true,
    //       // 内嵌定义了但是只用到一次的变量
    //       collapse_vars: true,
    //       // 提取出出现多次但是没有定义成变量去引用的静态值
    //       reduce_vars: true,
    //     },
    //   },
    // }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {   // 抽离第三方插件
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',  // 打包后的文件名，任意命名
          priority: 10
        },
      }
    }
  },
  // mode: "production", //压缩输出
};