class Solution {
    /**
     * Encodes a list of strings to a single string.
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for (let s of strs) {
            // Add length + delimiter + the string
            result += s.length + "#" + s;
        }
        return result;
    }

    /**
     * Decodes a single string back to a list of strings.
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;
        
        while (i < str.length) {
            // Find where the delimiter symbol is
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            
            // Read the length of the upcoming word
            let length = parseInt(str.substring(i, j));
            
            // Move pointer past the "#" symbol
            i = j + 1;
            
            // Extract the exact word using the length
            let word = str.substring(i, i + length);
            result.push(word);
            
            // Move pointer to the start of the next item
            i += length;
        }
        
        return result;
    }
}
