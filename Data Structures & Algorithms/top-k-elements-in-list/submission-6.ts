class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>();
        const buckets = [];
        for (let e of nums) {
            let val = map.get(e) ?? 0;
            map.set(e, ++val);
        }

        for (let [k, v] of map) {
            buckets.push([k, v]);
        }

        const sorted = buckets.sort((a,b)=>b[1]-a[1]);
        return sorted.slice(0,k).map(e=>e[0]);
    }
}
