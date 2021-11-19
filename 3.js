function filterStrings(arr, num){
    return arr.filter(str => str.split(' ').join('').length <= num)
}