function solution(phone_number) {
    var answer = '';
    answer = phone_number.slice(phone_number.length - 4, phone_number.length)
    for(i = 1; i <= phone_number.length - 4; i++) {
        answer = '*' + answer
    }
    
    return answer;
}