const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { extendDefaultPlugins } = require('svgo');

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/scripts/index.js'),
    error: path.resolve(__dirname, 'src/scripts/error.js'),
  },
  output: {
    filename: 'assets/js/[name].bundle.js',
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/error.ejs'),
      templateParameters: {
        code: 400,
        message: 'Bad Request',
      },
      filename: 'errors/400.html',
      chunks: ['error'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/error.ejs'),
      templateParameters: {
        code: 401,
        message: 'Unauthorized',
      },
      filename: 'errors/401.html',
      chunks: ['error'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/error.ejs'),
      templateParameters: {
        code: 403,
        message: 'Forbidden',
      },
      filename: 'errors/403.html',
      chunks: ['error'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/error.ejs'),
      templateParameters: {
        code: 404,
        message: 'Not Found',
      },
      filename: 'errors/404.html',
      chunks: ['error'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/error.ejs'),
      templateParameters: {
        code: 500,
        message: 'Internal Server Error',
      },
      filename: 'errors/500.html',
      chunks: ['error'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/error.ejs'),
      templateParameters: {
        code: 502,
        message: 'Bad Gateway',
      },
      filename: 'errors/502.html',
      chunks: ['error'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/error.ejs'),
      templateParameters: {
        code: 504,
        message: 'Gateway Timeout',
      },
      filename: 'errors/504.html',
      chunks: ['error'],
    }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/error/]),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ['optipng', { optimizationLevel: 5 }],
          [
            'svgo',
            {
              plugins: extendDefaultPlugins([
                {
                  name: 'removeViewBox',
                  active: false,
                },
                {
                  name: 'addAttributesToSVGElement',
                  params: {
                    attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
                  },
                },
              ]),
            },
          ],
        ],
      },
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
      },
    },
  },
};
