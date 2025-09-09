function solution(n) {
    var answer = 0;
    n = String(n)
    let arr = n.split('')
    console.log(arr)
    for(i = 0; i < arr.length; i++) {
        answer = answer + Number(arr[i])
    }
    return answer;
}