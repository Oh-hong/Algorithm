function solution(brown, yellow) {
    var answer = [];
    //가로는 w, 세로는 h라고 한다면..
    //w >= h
    //w * h === brown + yellow
    //노란색 블록 = (w-2) * (h-2)
    let total = brown+yellow;
    for(let h = 1; h <= total; h++) {
        if(total % h === 0) {
            const w = total / h;
            
            if(w >= h) {
                if((w-2) * (h-2) === yellow) {
                    return [w,h]
                }
            }
        }
    }
}