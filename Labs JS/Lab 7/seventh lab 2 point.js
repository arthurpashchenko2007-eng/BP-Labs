function removeElements(array, ...capitalsToRemove) {
   
    for (const capital of capitalsToRemove) {
    const index = array.indexOf(capital);
    if (index > -1) {
    
    array.splice(index, 1);
        }
    }
        }

        const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array, 'Lima', 'Berlin', 'Kiev');
console.log(array);
