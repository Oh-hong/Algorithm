function solution(s) {
    var answer = '';
    let test = s.split(" ")
    for(i=0; i < test.length; i++) {
        let word = ""
        for(j=0; j < test[i].length; j++) {
            if(j%2 === 0) {
                word = word + test[i][j].toUpperCase();
            } else if(j%2 !== 0) {
                word = word + test[i][j].toLowerCase();
            } 
        }
        if(i >= 1) {
            answer = answer + " "
        }
        answer = answer + word
    }
    return answer
}