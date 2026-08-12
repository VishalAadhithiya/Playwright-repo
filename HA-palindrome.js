function palindrome(str) {
    let reverse =""

    for (let i=str.length - 1; i >=0; i--){
        reverse += str[i]
    }

    console.log("original string: " +str)
    console.log("reversed string: " +reverse)

    if (str === reverse){
        console.log("The string is a palindrome")
    }
    else{
        console.log("The string is not a palindrome")
    }

}
console.log(palindrome("mom"))
console.log(palindrome("hello"))
console.log(palindrome("racecar"))
console.log(palindrome("dad"))
