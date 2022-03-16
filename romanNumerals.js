//Assignment: cap number at 999:
// const romanize = (num) => {
//     if(num===1000){
//         return "M"
//     }else{
//         let numerals = []
//         let onesNums = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
//         let tensNums = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
//         let hunsNums = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
//         let digits = String(num).split("")
//         let last = +digits.pop()
//         let mid = +digits.pop()
//         let first = +digits.pop()
//         numerals.push(hunsNums[first-1])
//         numerals.push(tensNums[mid-1])
//         numerals.push(onesNums[last-1])
//         return numerals.join('')
//     }
// }

// console.log(romanize(978))


//Seems that RN's cap at 3999 so i tried:
const romanize = (num) => {
    if(num>3999){
        return "Roman Numerals cap at 3999"
    }else{
        let numerals = []
        let onesNums = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
        let tensNums = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
        let hunsNums = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
        let thousNums = ["M", "MM", "MMM"]
        if(num>999){
            let digits = String(num).split("")
            let last = +digits.pop()
            let mid = +digits.pop()
            let first = +digits.pop()
            let thous = +digits.pop()
            numerals.push(thousNums[thous-1])
            numerals.push(hunsNums[first-1])
            numerals.push(tensNums[mid-1])
            numerals.push(onesNums[last-1])
            return numerals.join('')
        }else{
            let numerals = []
            let onesNums = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
            let tensNums = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
            let hunsNums = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
            let digits = String(num).split("")
            let last = +digits.pop()
            let mid = +digits.pop()
            let first = +digits.pop()
            numerals.push(hunsNums[first-1])
            numerals.push(tensNums[mid-1])
            numerals.push(onesNums[last-1])
            return numerals.join('')
        }
    }
}

console.log(romanize(1776))