function solution(num) {
    var answer = 0;
    for(i = 0; i <= 500; i++) {
        if(num !== 1) {
            if(num % 2 === 0) {
                num = num / 2;
            } else if(num % 2 !== 0) {
                num = num * 3 + 1;
            }
        } else if (num === 1) {
            return i;
        }
    }
    return -1;
}