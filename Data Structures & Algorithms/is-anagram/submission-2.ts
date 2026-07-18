class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        const map1 = new Map<string, number>();
        const map2 = new Map<string, number>();
        const arr1 = s.split("");
        const arr2 = t.split("");
        for (let i = 0; i < s.length; i++) {
            let count1 = map1.get(arr1[i]) ?? 0;
            let count2 = map2.get(arr2[i]) ?? 0;
            map1.set(arr1[i], ++count1);
            map2.set(arr2[i], ++count2);
        }

        for (let [k] of map1) {
            if (!map2.has(k)) return false;
            if (map1.get(k) !== map2.get(k)) return false;
        }
        return true;
    }
}
