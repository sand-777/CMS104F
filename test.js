const numbers = [1,2,3,4,5]
console.log(numbers,"Numbers")

const smallWords = ["manish","hello","world"]

//map

// const doublednumbers = numbers.map((number)=>{
//     return number*2
// })

//for Each

numbers.forEach((number)=>{
    console.log(number*2);
})
// console.log(doubledNumbers)

words = smallWords.map((word)=>{
   return word.toUpperCase();
})

console.log(words)

