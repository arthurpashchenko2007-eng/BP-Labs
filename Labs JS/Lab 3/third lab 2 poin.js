function random(max) {
 return Math.floor(Math.random() * (max + 1));
}
function generateKey(length, characters) {
   let result = '';
     const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
    const randomIndex = random(charactersLength-1);
result += characters [randomIndex];
    }
 return result;
}
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';        
const key = generateKey(16, characters);
console.log(key);