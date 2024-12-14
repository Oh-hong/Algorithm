function solution(s){
    var answer = true;
    let open = 0;
    let close = 0;
    if(s[0] === ')') {
        return false;
    }
    for(i = 0; i < s.length; i++) {
        if(open === close && s[i] === ')' ) {
            return false;
        }
        if(s[i] === '(') {
            open++;
        } else if(s[i] === ')') {
            close++;
        }
        
    }
    if(open === close) {
        return true;
    } else return false;
    
}