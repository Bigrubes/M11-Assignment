//STEP 1
// function alphabetize() {
// let word = prompt('Enter a word')
// let newWord = word.split('')
// const result = newWord.sort().join('')
// console.log(result)
// }
// alphabetize()
//STEP 2
// function upperCase(string){
//     let words  = prompt("Enter some words")
//     const wordsArr = words.toLowerCase().split('')

//     for (i = 0; i < wordsArr.length; i++){
//         wordsArr[i] = wordsArr[i].toUpperCase() + wordsArr[i].slice(1)
//     }
//     const newWords = wordsArr.join('')
//     console.log(newWords)
// }
// upperCase()
//STEP 3
// function vowel(){
//     let word = prompt('Enter a word')
//     let count  = 0
//     const vowels = ['a','e','i','o','u']
//     for (let char of word){
//         if (vowels.includes(char)){
//             count++
//         }
//     }
//     console.log(count)
// }
// vowel()
//STEP 4
// function stringId(length){
//     let string = ''
//     let characters = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz0123456789'

//     for (i = 0;i<length;i++){
//         let index = Math.floor(Math.random() * characters.length)
//         string += characters.charAt(index)
//     }
//     return string
// }
// let lengthId = 8
// let result = stringId(lengthId)
// console.log(result)
//STEP 5
// function longestName(country){
//     return country.reduce(function(name, country){
//         return name.length> country.length ? name : country
//        })
// }
// let userCountry = prompt('Enter some country names and separate with commas')
// let countries = userCountry.split(', ')
// console.log(longestName(countries))