/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

     let cleanedStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
      return cleanedStr === cleanedStr.split("").reverse().join("");

    
};