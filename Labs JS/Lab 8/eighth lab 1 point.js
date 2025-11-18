const iterate = (obj, call) => {
    for (const [key, value] of Object.entries(obj)) {
    call(key, value, obj);
}
    } 
const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value) => {
console.log({ key, value });
});