var assert = require('assert');
var supermuch = require('../');

describe('Public functions', function() {
  describe('#add()', function () {
    it('should return the sum of two stringified integers', function () {
      assert.equal('0', supermuch.add('0', '0'));
      assert.equal('2', supermuch.add('1', '1'));

      assert.equal('0', supermuch.add('0', '0', 10));
      assert.equal('2', supermuch.add('1', '1', 10));

      assert.equal('10', supermuch.add('1', '1', 2));
      assert.equal('100', supermuch.add('99', '1'));
      assert.equal('1000', supermuch.add('zzz', '1', 36));
      assert.equal('1zzy', supermuch.add('zzz', 'zzz', 36));
    });
  });

  describe('#subtract()', function () {
    it('should return the difference between two stringified integers', function () {
      assert.equal('0', supermuch.subtract('0', '0'));
      assert.equal('0', supermuch.subtract('1', '1'));

      assert.equal('0', supermuch.subtract('0', '0', 10));
      assert.equal('0', supermuch.subtract('1', '1', 10));

      assert.equal('-1', supermuch.subtract('1', '10', 2));
      assert.equal('99', supermuch.subtract('100', '1'));
      assert.equal('-zzz', supermuch.subtract('1', '1000', 36));
      assert.equal('-1', supermuch.subtract('zzy', 'zzz', 36));
    });
  });
});
