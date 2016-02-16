describe('PalindromeCheck', function() {
  describe('function', function () {
    it('should be a function', function(){
      assert.isFunction(is_palindrome);
    });
    it('should return a boolean value', function () {
      expect(is_palindrome("abc")).to.be.a('boolean');
    });
  });
  describe('is not a palindrome', function () {
    it('should return false if not a palindrome - even', function () {
      assert.equal(false, is_palindrome("abcb"));
    });
    it('should return false if not a palindrome - odd', function () {
      assert.equal(false, is_palindrome("abcdc"));
    });
  });
  describe('is a palindrome', function () {
    it('should return true if palindrome - even', function () {
      assert.equal(true, is_palindrome("abba"));
    });
    it('should return true if palindrome - odd', function () {
      assert.equal(true, is_palindrome("abcba"));
    });
  });
});