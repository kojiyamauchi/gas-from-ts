/*
webpack for GAS.
*/
import webpack from 'webpack'
import path from 'path'
import glob from 'glob'
import GasPlugin from 'gas-webpack-plugin'
import WebpackBuildNotifierPlugin from 'webpack-build-notifier'

const baseDir = './base/'
const entries = {}
glob.sync('*.ts', { cwd: baseDir }).map(info => entries[ info.replace('.ts','') ] = baseDir + info)

module.exports = {

  // When in Dev Mode, 'gas-webpack-plugin' Don't Work.
  mode: 'production',
  entry: entries,
  output: {
    path: `${__dirname}/deploy/`,
    filename: '[name].gs'
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: ['ts-loader']
      }
    ]
  },

  plugins: [
    new GasPlugin(),
    new WebpackBuildNotifierPlugin({ suppressSuccess: 'initial' })
  ]

}


