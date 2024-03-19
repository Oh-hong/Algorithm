function solution(n) {
    var answer = 0;
    n = n.toString(3)
    n = n.split('')
    n = n.reverse()
    n = n.join('')
    n = parseInt(n,3)
   
    //answer = n.toString(10)
    return n;
}