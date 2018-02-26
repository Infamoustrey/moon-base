
// Entry file
const sc = require('./scaffold');

sc.scaffold(
  {
    test: 'test1.txt',
    dir1: {
      test: 'test2.txt'
    }
  }
);
