function solution(k, tangerine) {
    var answer = 0;
    let arr = [];
    let count = 1;
    tangerine.sort((a,b) => a-b);
    for(i = 0; i < tangerine.length; i++){
        if(tangerine[i] === tangerine[i+1]) {
            count++
        } else if(tangerine[i] !== tangerine[i+1]) {
            arr.push(count)
            count = 1
        }
    }
    arr.sort((a,b) => b-a)
    console.log(arr)
    let sum = 0;
    for(j=0;j < arr.length; j++) {
        sum = sum + arr[j]
        if(sum < k) {
            answer++;
        } else if(sum >= k) {
            answer++
            break
        }
    }
    return answer;
}