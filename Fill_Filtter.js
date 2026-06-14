var arr = [1,2,3,4,5,6,7];
arr.fill("M")
arr.fill("J",1)//koto num position ar por change hobe
arr.fill("M",1,5)//koto num ar por thake suru hobe ar koto num ar koto num porjonto change hobe 

console.log(arr);


var filterArray = [10,30,332,324,34,22,"Hello",233]
var New = filterArray.filter((varName)=> varName>10)
console.log(New);
