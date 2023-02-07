/*
তোমাকে একটা function দেওয়া হবে called “evenOdd()”. এটা ইনপুট হিসেবে একটা string নিবে। 

এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘Even’ অথবা ‘Odd’ ।
*/ 

// problem-2. input some string text and count this text how much character is this text. if total character are equal to odd number then output "Odd" or total character are equal even number output "Even"

function evenOdd(text) {
    let length = text.length;
    if(typeof(text) != 'string' || length == 0){
        return "please input some string text"
    }
    else if(length % 2 == 0){
        return "Even"
    }
    else{
        return "Odd"
    }
}

const result = evenOdd('bangladesh');
console.log(result);