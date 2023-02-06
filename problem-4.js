/*
তোমাকে একটা function দেওয়া হবে called findingBadData()”. এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।
*/ 

function findingBadData(arr) {
    console.log(typeof(arr));
    let badData = 0;
    if(typeof(arr) !== "object"){
        return "please input an array"
    }
    else for(let i = 0; i < arr.length; i++){
        let number = arr[i];
        if(number <0){
            badData++;
        }
    }
    return badData;
}
const input = [1, 2, -5, -67, 0];
const result = findingBadData(input);
console.log(result); 