class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const anogram = new Map<string, number>();

        const arr1 = s.split("");
        const arr2 = t.split("");

        arr1.forEach((e) => {
            let count = anogram.get(e) ?? 0;
            anogram.set(e, ++count);
        });
        
        for (const e of arr2) {
            if (!anogram.has(e)) return false;
            else {
                anogram.set(e, anogram.get(e) - 1);
            }
        }

        for (let [_, v] of anogram) {
            if (v !== 0) return false;
        }

        return true;
    }
}
