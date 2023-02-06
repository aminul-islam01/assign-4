/*
তোমাকে একটা function দেওয়া হবে called “mindGame()” যা ইনপুট হিসেবে একটা positive number নিবে। 

এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে। 
*/ 

function mindGame(number) {
    if(typeof(number) == 'string' || number < 0){
        return "please input a valid number"
    }
    const result = ((number*3+10)/2)-5;
    return result;
}

const finalResult = mindGame(50);
console.log(finalResult);