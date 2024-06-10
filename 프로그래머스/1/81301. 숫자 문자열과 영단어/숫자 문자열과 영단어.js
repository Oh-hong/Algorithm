function solution(s) {
    var answer = s;
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    for (i = 0; i < numbers.length; i++) {
       answer = answer.split(numbers[i]).join(i);
    }
    
    return Number(answer);
}