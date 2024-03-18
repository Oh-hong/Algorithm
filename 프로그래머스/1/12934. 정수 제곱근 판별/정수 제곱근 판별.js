function solution(n) {
    var answer = -1;
    for (i = 1; i <= n; i++) {
        if (n / i === i) {
            return (i + 1) * (i + 1)
        } 
    } 
    return answer;
}