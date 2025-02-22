/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {

    for (let word of words) {
        let reversed = word.split('').reverse().join('');

        if (reversed === word) {
            return word; 
        }
    }
    
    return ""; 
};

    