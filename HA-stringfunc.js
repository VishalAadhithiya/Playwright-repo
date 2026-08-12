function lastWord(s) {
    let words = s.split(" ")
    let last = words[words.length - 1]
    console.log(last.length)
}
lastWord("Hello World")

function lastWord(s) {
    s = s.trim()
    let words = s.split(" ")
    let last = words[words.length - 1]
    console.log(last.length)
}
lastWord("fly me to the moon")

function isAnagram(a, b) {
    a = a.toLowerCase().split("").sort().join("")
    b = b.toLowerCase().split("").sort().join("")
    return a === b
}

console.log(isAnagram("listen", "silent"))
console.log(isAnagram("hello", "world"))
