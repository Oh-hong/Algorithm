function solution(sizes) {
    var answer = 0;
    let length1 = 0;
    let length2 = 0;
    for(i = 0; i < sizes.length; i++) {
        sizes[i].sort((a,b) => a-b);
    }
    for(i = 0; i < sizes.length; i++) {
        if(sizes[i][0] > length1) {
            length1 = sizes[i][0]
        }
        if(sizes[i][1] > length2) {
            length2 = sizes[i][1]
        }
    }
    answer = length1 * length2
    return answer;
}