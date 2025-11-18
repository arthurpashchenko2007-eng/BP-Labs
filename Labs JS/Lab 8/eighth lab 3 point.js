const contract = (fn, ...types) => (...args) => {
  
    for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    const def = types[i];
    const expected = typeof def === 'string' ? def.toLowerCase()
  : def && def.name ? def.name.toLowerCase(): String(def);
    if (typeof arg !== expected) {
      throw new TypeError(`Arg type ${expected} expected`);
    }
  }
  const res = fn(...args);
  
  const def = types[types.length - 1];
 const expected = typeof def === 'string' ? def.toLowerCase() 
 : def && def.name ? def.name.toLowerCase(): String(def);
  if (typeof res !== expected) {
    throw new TypeError(`Res type ${expected} expected`);
  }
      return res;
};
const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);
console.log(res1); 

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.log(res2); 

