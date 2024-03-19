function solution(number) {
    var answer = 0;
    let count = 0;
    for(i = 0; i < number.length; i++) {
        for(j = i+1; j < number.length; j++) {
            for(h = j+1; h < number.length; h++) {
                if(number[i] + number[j] + number[h] === 0) {
                    answer++
                }
            }
        }
    }
    return answer;
}