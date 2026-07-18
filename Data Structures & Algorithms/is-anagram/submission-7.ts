class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const anogram = new Map<string, number>();

        for (let i = 0; i < s.length; i++) {
            let count = anogram.get(s[i]) ?? 0;
            anogram.set(s[i], ++count);

            let count2 = anogram.get(t[i]) ?? 0;
            anogram.set(t[i], --count2);
        }

        for (let [_, v] of anogram) {
            if (v !== 0) return false;
        }

        return true;
    }
}
