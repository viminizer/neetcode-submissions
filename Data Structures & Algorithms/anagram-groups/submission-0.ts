class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>();

        for (let str of strs) {
            const key = str.split("").sort().join("");
            console.log("--key", key)
            const val = map.get(key) ?? [];
            val.push(str);
            map.set(key, val);
        }
        console.log(map)
        const res = [];
        for(let[_, v] of map){
            res.push(v);
        }
        return res;
    }
}
