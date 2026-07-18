class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let map = new Map<number, boolean>();
        let res = false;
        for (let e of nums) {
            let exists = map.get(e);
            if(exists){
                res = true;
                break;
            }
            map.set(e, true);
        }
        return res;
    }
}
