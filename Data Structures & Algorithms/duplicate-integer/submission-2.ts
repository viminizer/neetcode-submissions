class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let map = new Set<number>();
        for (let e of nums) {
            let exists = map.has(e);
            if(map.has(e)) return true;
            map.add(e);
        }
        return false;
    }
}
