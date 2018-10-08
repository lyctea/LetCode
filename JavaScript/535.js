/*

TinyURL是一种URL简化服务， 比如：当你输入一个URL https://leetcode.com/problems/design-tinyurl 时，
它将返回一个简化的URL http://tinyurl.com/4e9iAk.

要求：设计一个 TinyURL 的加密 encode 和解密 decode 的方法。
你的加密和解密算法如何设计和运作是没有限制的，
你只需要保证一个URL可以被加密成一个TinyURL，并且这个TinyURL可以用解密方法恢复成原本的URL。

* */

let urls = {};

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
  // 利用时间戳生成key， toString 方法接收一个参数，进制
  const uniqueKey = Date.now().toString(36);
  urls[uniqueKey] = longUrl;
  return 'http://tinyurl.com/' + uniqueKey;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  const uniqueKey = shortUrl.split('.com/')[1];
  return urls[uniqueKey];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
