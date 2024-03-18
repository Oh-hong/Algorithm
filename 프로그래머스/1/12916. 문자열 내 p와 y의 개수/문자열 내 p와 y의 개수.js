function solution(s){
    var answer = 0;
    let num1 = 0;
    let num2 = 0;
    for(i = 0; i < s.length; i++) {
        if(s[i] == 'p' || s[i] == 'P') {
            num1 = num1 + 1;
        } else if(s[i] == 'y' || s[i] == 'Y') {
            num2 = num2 + 1;
        }
    }
    if(num1 === num2) {
        return true;
    } else return false;
}