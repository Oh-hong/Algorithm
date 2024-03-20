function solution(s) {
    var answer = '';
    let temp = []
    for(i = 0; i < s.length; i++) {
        temp.push(s[i])
    }
    temp = temp.sort()
    temp = temp.reverse();
    
    for(i = 0; i < temp.length; i++) {
        answer = answer + temp[i]
    }
    
    
    return answer;
}