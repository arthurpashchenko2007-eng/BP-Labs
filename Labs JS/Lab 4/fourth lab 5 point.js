function sum(...args) {
    
    return args.reduce((total, num) => total + num, 0);
}

console.log (sum(10, -1, -1, -1));


    