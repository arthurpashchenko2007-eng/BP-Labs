const compose = (...fns) => {
    const errorHandlers = [];
const composedFn = (...args) => {

    try {
        let res = args;
        for (let i = fns.length - 1; i >= 0; i--) {
            const fn = fns[i];
            if (i === fns.length - 1) {
                res = fn(...res);

                }else{
        
            res = fn(res)
                }
            }

return res; 

    } catch (error) {

        errorHandlers.forEach(handler => handler(error));
        return undefined; 
    }
    };

    composedFn.on = (eventName, callback) => {
    if (eventName === 'error' && typeof callback === 'function') {
    errorHandlers.push(callback);
    }
    return composedFn; 
    };
return composedFn;
}

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => {
  if (typeof x !== 'number' || isNaN(x)) {
    throw new Error('Args is not num!');
  }
  return x ** 3;
};

const f = compose(inc, cube, twice);

f.on('error', e => { 

  console.error('Error', e.message);
});

const result1 = f(5);
console.log('result 1', result1);
