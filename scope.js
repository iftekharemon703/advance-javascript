// let and const don't goes to behind the scope. but if we want to var uses behind the scope.

// kono kichu decliare kore oitake uporer level-e niye jawa ke hoisting bole. example: var, amra caile var ke hoisting er bahire use korte parbo.

function sum(first, second){
    let result = first + second;
    // console.log(result);
    if(result > 9){
        const mood = "happy";
        console.log(mood);
    }
    console.log(mood);
    return result;
}

const output = sum(44, 55);
// console.log(output);