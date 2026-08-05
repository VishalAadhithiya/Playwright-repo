function studentScore(score) {
    switch (true) {
        case (score >= 90):
            return "A";
            break
        case (score >= 80):
            return "B";
            break
        case (score >= 70):
            return "C";
            break
        case (score >= 60):
            return "D";
            break   
        default:
            return "F";
    }
    return score

}
console.log(studentScore(85))

console.log(studentScore(72))

console.log(studentScore(59))


