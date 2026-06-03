// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different (i.e., "cba" and "abc" are anagrams).
class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};  // Create an empty object to store the groups of anagrams
      for(let i = 0; i < strs.length; i++){   // Iterate through each string in the input array
         let sorted = strs[i].split('').sort().join('');  // Sort the characters in the string and join them into a string
         if(!map[sorted]){  // If the sorted string is not in the map, create a new entry with the original string as the first element in the array 
             map[sorted] = [strs[i]]; // Create a new entry in the map with the sorted string as the key and an array containing the original string as the value
         }else{
             map[sorted].push(strs[i]); // If the sorted string is already in the map, push the original string into the existing array for that key
         }
      }
      return Object.values(map); // Return the values of the map, which are the groups of anagrams as arrays
    }
}

let strs = ["eat","tea","tan","ate","nat","bat"]; // Output: [["bat"],["nat","tan"],["ate","eat","tea"]];

let solution = new Solution(); // Create an instance of the Solution class
console.log(solution.groupAnagrams(strs));  // Output: [["eat","tea","ate"],["tan","nat"],["bat"]]