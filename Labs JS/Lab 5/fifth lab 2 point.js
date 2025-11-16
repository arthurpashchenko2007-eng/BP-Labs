const seq = (f = x => x) => (g) => {
    if (typeof g === 'number') {
    return f(g);
    } else {
    return seq((x) => f(g(x)));
    }
}
console.log(seq(x => x * 2)(x => x + 7)(5));