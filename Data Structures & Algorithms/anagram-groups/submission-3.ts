class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>();

        for (let word of strs) {
            const chars =  new Array(26).fill(0);

            for (let i = 0; i < word.length; i++) {

                let charCode = word.charCodeAt(i) - 97;
                chars[charCode] ++;
            }
            let key = chars.join("-");
            let val = map.get(key) ?? [];

            val.push(word);
            map.set(key, val);
        }

        
        return [...map.values()];
    }
}
