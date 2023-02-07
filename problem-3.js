/*
তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।  

এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে absolute পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই ইনপুট এবং ৭ এর মধ্যে পার্থক্য। নাহলে তোমাকে return করতে হবে double of their absolute difference.
*/ 

// problem-3. input a number and chek it how much difference between this number and 7 .difference is less than 7 then output this result or greater than or equal to 7 then  output double input numbers

function isLGSeven(number) {
    let result = number-7;
    if(typeof(number) == 'string'){
        return "please input a valid number"
    }
    else if(result >= 7){
        result = number * 2;
        return result;
    }
    else{
        return result;
    }
}

const finalResult = isLGSeven(15);
console.log(finalResult);