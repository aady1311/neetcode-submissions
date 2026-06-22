class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
         if (nums.length === 0) {
            return 0;
        }
        const numSet = new Set(nums);
        let longestStreak = 0;

        for(let i = 0; i < nums.length; i++) {
            if (!numSet.has(nums[i] - 1)) {
                let currentNum = nums[i];
                let currentStreak = 1;

                while (numSet.has(currentNum + 1)) {
                    currentNum += 1;
                    currentStreak += 1;
                }

                longestStreak = Math.max(longestStreak, currentStreak);
            }
        }
        return longestStreak;
    }
}
