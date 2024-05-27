function solution(num_list) {
    var answer = 0;
    let sum = 0;
    let sumsum = 0;
    let multiply = 1;
    for (i = 0; i < num_list.length; i++) {
        sum += num_list[i]
        multiply = multiply * num_list[i]
    }
    if(multiply < sum * sum) {
        answer = 1;
    } else if (multiply > sum * sum) {
        answer = 0;
    }
    return answer;
}