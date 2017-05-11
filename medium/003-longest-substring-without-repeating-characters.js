/**
 * @description
 * Given a string, find the length of the longest substring without repeating characters.
 * Given "pwwkew", the answer is "wke", with the length of 3.
 * Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 * 
 * @param {string} s
 * @return {number}
 *
 * @example
 * lengthOfLongestSubstring('abcabcbb');	// -> 3
 * lengthOfLongestSubstring('abba');	// -> 2
 */
var lengthOfLongestSubstring = function(s) {
	let start = 0,end = 0; // start and end position of the substring
	let abcMap = {}; // key: alphabet, value: latest position
	let maxSubLen = 0;  // length of the longest substring

	while (end < s.length) {
		if (abcMap[s[end]] >= start) {
			start = abcMap[s[end]] + 1;
		}
		maxSubLen = maxSubLen > end - start + 1 ? maxSubLen : end - start + 1;
		abcMap[s[end]] = end;
		end++;
	}
	return maxSubLen;
};