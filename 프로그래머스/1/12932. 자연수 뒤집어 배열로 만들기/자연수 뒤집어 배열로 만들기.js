function solution(n) {
    var answer = [];
    n = String(n);
    n = n.split('')
    n = n.reverse();
    for(i = 0; i < n.length; i++) {
        n[i] = +n[i]
    }
    return n;
}