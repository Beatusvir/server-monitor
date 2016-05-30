'use strict';

describe('server-monitor.version module', function() {
  beforeEach(module('server-monitor.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
