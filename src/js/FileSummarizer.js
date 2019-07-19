'use strict'

const fs = require('fs');

function summarizeFilesInDirectorySync(directory){
  return fs.readdirSync(directory).map(fileName => ({
    directory,
    fileName,
  }));
}

// これでsrc/js配下にあるファイルの一覧が出力される
// console.log(summarizeFilesInDirectorySync('src/js'));

exports.summarizeFilesInDirectorySync = summarizeFilesInDirectorySync;
