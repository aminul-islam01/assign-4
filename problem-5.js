/*
তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 

১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21

২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32

৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43

[ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]

এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।
*/ 

// problem-5. input 3 peramiter gems there convert to diamond and then addition total diamond. now total diamond greater than or equal to 1000 double. then substraction 2000 from total diamond and output rest diamond

function gemsToDiamond(gems1, gems2, gems3) {
    if(gems3 == undefined || typeof(gems1) == "string" || typeof(gems2) == "string" || typeof(gems3) == "string"){
        return "please input number and try again"
    }
    const friends1Diamond = 21 * gems1;
    const friends2Diamond = 32 * gems2;
    const friends3Diamond = 43 * gems3;

    let totalDiamond = friends1Diamond + friends2Diamond + friends3Diamond;
    if(totalDiamond >= 2000){
        totalDiamond = totalDiamond - 2000;
    }
    return totalDiamond;
}

const result = gemsToDiamond(100,5,1);
console.log(result);