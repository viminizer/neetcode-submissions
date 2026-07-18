class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        if (strs.length === 1) {
            return [strs];
        }
        const map = new Map<string, string[]>();

        for (let word of strs) {
            const chars =  new Array(26).fill(0);

            console.log("--chars", chars)

            for (let i = 0; i < word.length; i++) {
                let charCode = word.charCodeAt(i) - 97;
                chars[charCode] = chars[charCode] + 1;
            }
            let key = chars.join("-");
            let val = map.get(key) ?? [];
            val.push(word);
            map.set(key, val);
        }
        const res = [];
        for (let [_, v] of map) {
            res.push(v);
        }

        return res;
    }
}
