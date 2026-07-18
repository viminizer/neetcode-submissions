class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const anogram = new Map<string, number>();

        const arr1 = s.split(""); //racecar
        const arr2 = t.split(""); //carrace

        arr1.forEach((e, i) => {
            let count = anogram.get(e) ?? 0;
            anogram.set(e, ++count);
            
            let count2 = anogram.get(arr2[i]) ?? 0;
            anogram.set(arr2[i], --count2);
        });

        console.log(anogram);
        for (let [_, v] of anogram) {
            if (v !== 0) return false;
        }

        return true;
    }
}
