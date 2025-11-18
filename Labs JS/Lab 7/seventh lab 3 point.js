function unique(array) {

    const newArrray = [];
for (const item of array ) {
if (!newArrray.includes(item)) {
newArrray.push(item);
    }
        }
return newArrray;
} 

const result = unique(['top', 'bottom', 'top', 'left']);
console.log(result);


