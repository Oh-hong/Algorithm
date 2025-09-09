//피자 1개에 7조각.
// 7/n >= 1
function solution(n) {
    var answer = 0;
    for(let i = 1; i <= n; i++) {
        if(i*7/n >= 1) {
            return i
        }
    }
}