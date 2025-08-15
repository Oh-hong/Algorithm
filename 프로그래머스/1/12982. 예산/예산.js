function solution(d, budget) {
    var answer = 0;
    let count = 0;
    d.sort((a,b) => a-b);
    console.log(d)
    for(i = 0; i < d.length; i++) {
        if(count + d[i]> budget) {
            break;
        }
        count = count + d[i]
        answer++;

    }
    console.log(answer)
    return answer;
}