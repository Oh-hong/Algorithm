function solution(arr) {
    var answer = 0;
    let num1 = 0;
    for (i = 0; i <= arr.length - 1; i++) {
        num1 = num1 + arr[i];
        
        
    } answer = num1 / arr.length;
    return answer;
}