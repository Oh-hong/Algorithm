function solution(s, n) {
    
    let answer = ''
    let lowLetters = "abcdefghijklmnopqrstuvwxyz";
    let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    for(i = 0; i < s.length; i++) {
        if(s[i] == false) {
            answer = answer + " "
        }
        for(j = 0; j < 26; j++) {
            if(s[i] === lowLetters[j]) {
                if(j + n > 25) {
                    answer += lowLetters[(j+n)%26]
                } else {
                    answer += lowLetters[j+n]
                }
            } else if(s[i] === upperLetters[j]) {
                if(j + n > 25) {
                    answer += upperLetters[(j+n)%26]
                } else {
                    answer += upperLetters[j+n]
                }
            } 
        }
    
    } 
   
    
    
    
    return answer;
}