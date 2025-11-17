const pipe = (...fns) => {
    for (const fn of fns) {
    if (typeof fn !== 'function') {
        throw new Error ('All pipe args must be fns');
    }
}
    return (intValue) => {
        return fns.reduce((value, fn) => fn(value), intValue);
    };
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
const fn = pipe(inc, inc);
const x = fn(7);

console.log(x);