class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let map = new Map<number, number>();
        let res = false;
        nums.forEach((e) => map.set(e, 0));
        for (let e of nums) {
            console.log("---e", e)
            let current = map.get(e);
            map.set(e, current + 1);
            if (map.get(e) > 1) {
                res= true;
                break;
            }
        }
        return res;
    }
}
