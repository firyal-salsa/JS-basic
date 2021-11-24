let reverse = (string) => {
    let split = string.split("")
    let reverse = split.reverse()
    let result = reverse.join("")
    return result;
}
console.log(reverse('NEGIE1'))