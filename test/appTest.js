const assert = require('chai').assert;
const app = require('../app');

describe('App', function(){
  it('app harus mengeluarkan Hello', function(){
   assert.equal(app(), 'hello');
  });
});
