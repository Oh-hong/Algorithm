function solution(absolutes, signs) {
    var answer = 123456789;
    let sum = 0;
    for(i = 0; i < absolutes.length; i++) {
        if(signs[i] === true) {
            sum = sum + absolutes[i]
        } else {
            sum = sum + absolutes[i] * -1
        }
    }
    return sum;
}