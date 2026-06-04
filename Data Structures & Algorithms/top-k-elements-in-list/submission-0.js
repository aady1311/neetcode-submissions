class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {}
        for(let i = 0 ; i < nums.length; i++){
            map[nums[i]] = (map[nums[i]] || 0) + 1;
            
        }
       let arr = Object.entries(map);

arr.sort((a, b) => b[1] - a[1]);

arr.slice(0, k).map(item => Number(item[0]))
 return arr.slice(0, k).map(item => Number(item[0]));

    }
}
