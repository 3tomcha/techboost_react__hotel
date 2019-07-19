'use strict';

jest.mock('fs');
describe('iistfilesInDirectorySync', () =>{
  const MOCK_FILE_INFO = {
    '/path/to/file1.js': 'console.log("file1 contents")',
    '/path/to/file2.txt': 'file2 contents',
  };

  beforeEach(()=>{
    require('fs').__setMockFiles(MOCK_FILE_INFO);
  });

  test('include all files in the directory in the summary', () => {
    const FileSummarizer = require('../src/js/FileSummarizer');
    // console.log(FileSummarizer);
    // const fileSummary = FileSummarizer.summarizeFilesInDirectorySync('src/js');
    const fileSummary = FileSummarizer.summarizeFilesInDirectorySync('path/to');

    console.log(fileSummary);

    expect(fileSummary.length).toBe(2);
  });
});
