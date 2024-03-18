function solution(n) {
    let blank = []
    var answer = 0;
    n = String(n)
    n = n.split('')
    n = n.sort((a,b) => b-a)
    n = n.join('')
   
    return +n;
}