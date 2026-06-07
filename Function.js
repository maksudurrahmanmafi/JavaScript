var a = 20;
var b = 5;
function TwoSum(a,b){//parametar and return type
    return a+b;
}
function TwoSub(){//no parametar and retrn type
    return a-b;
}
function TwoMul(a,b){//parametar and no return type
    console.log(a*b);
    
}
function TwoDiv(){//no parametar and no return type

     console.log(a/b);
     
}
var sum = function(){
    console.log("This is variable function");
    
}
var sub = ()=>{
    console.log("This is arrow function");
    

}
console.log(TwoSum(7,10));
console.log(TwoSub());
console.log(TwoMul(7,10));
console.log(TwoDiv());
sum();
console.log(sum);
;
sub();
sub;