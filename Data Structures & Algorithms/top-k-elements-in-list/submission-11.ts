class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>();
        const buck = new Map<number, number[]>();

        for (let e of nums) {
            let val = map.get(e) ?? 0;
            map.set(e, ++val);
        }

        for (let [k, v] of map) {
            const val = buck.get(v) ?? [];
            val.push(k);
            buck.set(v, val);
        }

        let res = [];
        for (let i = nums.length; res.length < k; i--) {
            const val = buck.get(i);
            if (val && val.length > 0) {
                res.push(...val);
            }
        }
        return res.slice(0, k);
    }
}
