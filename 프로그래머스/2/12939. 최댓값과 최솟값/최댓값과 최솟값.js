function solution(s) {
    var answer = '';
    const arr = s.split(/\s+/g)
    arr.sort((a,b) => a-b)
    answer = `${arr[0]} ${arr[arr.length-1]}`

    return answer;
}