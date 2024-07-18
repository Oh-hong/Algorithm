function solution(n) {
    
    var answer = 0;
    for(i = 1; i <= n; i++) {
        let correct = 0;
        for(j = i; j <= n; j++) {
            correct = correct + j;
            if(correct > n) {
                break;
            }
            else if(correct === n) {
                answer = answer + 1
            }
            continue;
        }
    }
    return answer;
}