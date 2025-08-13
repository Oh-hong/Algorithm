function solution(answers) {
    var answer = [];
    let one = [1,2,3,4,5];
    let two = [2,1,2,3,2,4,2,5]
    let three = [3,3,1,1,2,2,4,4,5,5]
    let oneCount = 0;
    let twoCount = 0;
    let threeCount = 0;
    for(i = 0; i < answers.length; i++) {
        if(one[i % one.length] === answers[i]) {
            oneCount++;
        }
        if(two[i % two.length] === answers[i]) {
            twoCount++;
        }
        if(three[i % three.length] === answers[i]) {
            threeCount++;
        }
    }
    let maxScore = Math.max(oneCount, twoCount, threeCount)
    if(oneCount === maxScore) {
        answer.push(1)
    }
    if(twoCount === maxScore) {
        answer.push(2)
    }
    if(threeCount === maxScore) {
        answer.push(3)
    }
    
    
    return answer;
}