
let a = [1, 3, 2, 6, 1, 2];
let k = 3;

for (let i = 0; i < a.length - 1; i++) {
    for (let j = i + 1; j < a.length; j++) {
        if ((a[i] + a[j]) % k == 0) {
            console.log(`(${i}, ${j}) `);
        }
    }
}
