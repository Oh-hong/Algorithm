function solution(a, b) {
    var answer = 0;
    if(a === b) {
        answer = a;
    } else if(a < b) {
        for(i = a; i <= b; i++) {
            answer = answer + i;
        }
    } else if(a > b) {
        for(j = b; j <= a; j++) {
            answer = answer + j;
        }
    }
    return answer;
}