function solution(price, money, count) {
    var answer = money;
    for(i = 1; i <= count; i++) {
        answer = answer - price * i
    }
    if(answer >= 0) {
        return 0;
    }
    return Math.abs(answer);
}