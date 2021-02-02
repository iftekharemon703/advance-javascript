const nums = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < nums.length; i++) {
    if(nums [i] > 5){
        break;
    }
    // console.log(nums[i]); 
}

const numbers = [3, -4, 6, -9, 33, -44];
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] <0){
        continue;
    }
    console.log(numbers[i]);
}