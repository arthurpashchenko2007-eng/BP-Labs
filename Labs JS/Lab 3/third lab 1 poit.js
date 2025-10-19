function random( min, max) {
   Math.random() * (max - min) + min;
if (max === undefined) {
max = min;
min = 0;
}
return Math.floor(Math.random() * (max - min) + min);
}
console.log(random(1, 20));