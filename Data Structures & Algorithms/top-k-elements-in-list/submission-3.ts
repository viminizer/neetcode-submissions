class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map();
        for (let e of nums) {
            let val = map.get(e) ?? 0;
            map.set(e, ++val);
        }

        const counts = Array.from(map.values())
            .sort((a, b) => b - a)
            .slice(0, k);

        const res = [];
        for (let k of map.keys()) {
            const val = map.get(k);
            if (counts.includes(val)) {
                res.push(k);
            }
        }

        return res;
    }
}
