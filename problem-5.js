/*
তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 

১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21

২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32

৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43

[ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]

এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।
*/ 

function gemsToDiamond(gems1, gems2, gems3) {
    if(gems1 == undefined || gems2 == undefined || gems3 == undefined){
        return "please input number and try again"
    }
    const friends1Diamond = 21 * gems1;
    const friends2Diamond = 32 * gems2;
    const friends3Diamond = 43 * gems3;

    let totalDiamond = friends1Diamond + friends2Diamond + friends3Diamond;
    if(totalDiamond > 2000){
        totalDiamond = totalDiamond - 2000;
    }
    return totalDiamond;
}

const result = gemsToDiamond(100,5,1);
console.log(result);