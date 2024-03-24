function solution(n, k) {
    var answer = 0;
    let sheep = 0;
    let can = 0;
    let free = 0;
    for(i = 1; i <= n; i++) {
        sheep = sheep + 12000
        if(i % 10 === 0) {
            k = k-1;
        }
    }
    can = 2000 * k
    answer = sheep + can
    return answer;
}