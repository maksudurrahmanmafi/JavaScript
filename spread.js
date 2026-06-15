//... spread or rest operator 

var a = [1,2,3]
function sum(...a) {

    var summation =0;
    for (const x of a) {
        summation+=x        
    }
    console.table(summation)
    
}

sum(...a)//this is spread operator


var a = [1, 2, 3];

function sum(...a) {
    var summation = 0;

    for (const x of a) {
        summation += x;
    }

    console.log(summation);
}

sum(1, 2, 3,4); //this is rest operator
