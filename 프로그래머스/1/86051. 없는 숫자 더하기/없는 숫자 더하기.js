function solution(numbers) {
    var answer = 0;
    for(i = 0; i <= 9; i++) {
        if (numbers.indexOf(i) === -1) {
            answer = answer + i;
        }
        }
    return answer;
}