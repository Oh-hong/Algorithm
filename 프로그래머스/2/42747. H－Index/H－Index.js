function solution(citations) {
    //n은 citations.length
    var answer = 0;
    let arr = []
    citations.sort((a,b) => b-a)
    //[0,1,3,5,6] 길이는 5..
    for(i = 0; i < citations.length; i++) {
        arr.push(citations[i])
        if(citations[i] < arr.length) {
            break
        } 
        answer++
    }
    return answer;
}

