function solution(clothes) {
    var answer = 1;
  
    const map = {};
    for(let [name,type] of clothes) {
        map[type] = (map[type] || 0) + 1
    }  
    for(let type in map) {
        answer = answer * (map[type] + 1)
    }
    return answer-1;
}

