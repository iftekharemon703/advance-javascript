const numbers = [4, 6, 23, 5, 7];

// Use map
const output = [];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);

function square(element){
    return element * elemnet;
}
const result = numbers.map(function(element){
    return element * element;
})
console.log(result);

const square = element => element * element;
const square = x => x * x;

const result = numbers.map(x => x * x);
console.log(result);


// Use Filter

const bigWord = numbers.filter( x => x < 5);
console.log(bigWord);


// Use Find

const isThere = numbers.find( x => x > 5);
console.log(isThere);