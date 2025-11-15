const m = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9] 
];

function findMaxElement (m) {
    
let maxElement = m [0][0];
    for(const row of m) {
    for(const element of row) {
        if (element > maxElement) {
            maxElement = element;
        }
    }
}
return maxElement;
}
const maxResult = findMaxElement(m);

console.log(maxResult)



