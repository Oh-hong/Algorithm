function solution(price, money, count) {
    var answer = 0;
    let totalPrice = 0;
    for (i=1; i <= count; i++) {
        totalPrice = totalPrice + price * i
    }
    
    if(money > totalPrice) {
        return 0;
    }
    answer = totalPrice-money
    return answer;
}