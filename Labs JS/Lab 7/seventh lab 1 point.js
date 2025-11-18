function removeElement(array,num){
    
    const index = array.indexOf(num);
    if (index > -1) {
        array.splice(index, 1);
    }
}

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);
