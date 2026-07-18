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
        console.log("sorted", sorted);
        const sliced = sorted.slice(0,k);
        return sliced.map(e=>e[0])
    }
}
