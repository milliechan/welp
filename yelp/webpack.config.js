const webpack = require('webpack');
const fs = require('fs');
cosnt path = require('path'),
      join = path.join, 
      resolve = path.resolve; 
const getConfig = require('hjs-webpack'); 


const NODE_ENV = process.env.NODE_ENV; 
const isDev = NODE_ENV === 'development'; 
// alternatively, we can use process.argv[1]
// const isDev = (process.argv[1] || '')
//                .indexOf('hjs-dev-server') !== -1; 

var config = getConfig({
  is_Dev: isDev,
  in: join(__dirname, 'src/app.js'), 
  out: join(__dirname, 'dist'), 
  clearBeforeBuild: true
})

module.exports = config;