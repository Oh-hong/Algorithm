function solution(numbers) {
    var answer = '';
    let strNumbers = numbers.map(String);
    strNumbers.sort((a,b) => (b+a) - (a+b))
    answer = strNumbers.join('')
    console.log(answer[0])
    return answer[0] === '0' ? '0' : answer;
}