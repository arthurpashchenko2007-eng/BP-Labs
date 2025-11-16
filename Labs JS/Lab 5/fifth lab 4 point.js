const Array = () => {
    const data  = [];
    const a = (i) => data [i];
    
    a.push = (x) => data.push(x);
    a.pop = () => data.pop();
    return a;
}

moduleExport = {Array};
const Arr = Array();

Arr.push('first');
Arr.push('second');
Arr.push('third');

console.log(Arr(0));
console.log(Arr(1)); 
console.log(Arr(2)); 

console.log(Arr.pop()); 
console.log(Arr.pop()); 
console.log(Arr.pop()); 

console.log(Arr.pop());