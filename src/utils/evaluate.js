const evaluateWord = (word) => {
    const last = (arr) => arr[arr.length - 1]
    const addDigits = (num) => {
        return (num.toString().split("").reduce((a, b) => parseInt(a) + parseInt(b))).toString()
    }
    const breakdown = []
    let score = ""
    
    for(let i = 0; i < word.length; i++) {
        if(word[i] === " ") continue;
        const value = word[i].toLowerCase().charCodeAt(0) - 96
        if(value.toString().length > 1) score += addDigits(value)
        else score += value.toString()
    }
    breakdown.push(score)
    let itterations = 0

    while(last(breakdown).length > 1) {
        itterations += 1
        if(itterations > 80) break;
        breakdown.push(addDigits(last(breakdown)))
    }
    return breakdown
}

export default evaluateWord