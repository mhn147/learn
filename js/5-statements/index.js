const arr = [1, 2, 3, 4];

console.log("for/of: ");

for(const elm of arr) {
    console.log(elm);
}

console.log("***************");

console.log("for/in: ");

for(const elm in arr) {
    console.log(elm);
}

let o = { x: 1, y: 2, z: 3};
let a = [], i = 0;
for (a[i++] in o);
console.log(a);