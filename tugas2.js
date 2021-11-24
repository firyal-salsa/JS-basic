let longestWord = (string) => {
    let split = string.split(" ")
    let max = split[0].length
    split.map(value => max = Math.max(max, value.length))
    let arr = split.filter(value => value.length == max)
    let result = arr.toString().length
    return `Mengerjakan : ${result} character`
}
console.log(longestWord('Saya sangat senang mengerjakan soal algoritma'))