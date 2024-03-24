function solution(my_string) {
    var answer = '';
    let temp = [];
    for(i = 0; i < my_string.length; i++) {
        temp.push(my_string[i])
    }
    temp.reverse();
    for(i = 0; i < temp.length; i++) {
        answer = answer + temp[i]
    }
    return answer;
}