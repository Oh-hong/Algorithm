function solution(pb) {
    var answer = true;
    pb.sort();
    for(i = 0; i < pb.length-1; i++) {
        if(pb[i+1].startsWith(pb[i])) {
            answer = false;
        }
    }
    return answer;
}