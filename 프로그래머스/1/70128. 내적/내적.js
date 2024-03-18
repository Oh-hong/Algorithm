function solution(a, b) {
    var answer = 0;
    
    for(i = 0; i <= a.length - 1; i++) {
       answer = answer + a[i] * b[i]
    }
    return answer;
}