function solution(progresses, speeds) {
    var answer = [];
    let finish = [];
    for(i = 0; i < progresses.length; i++) {
        let work = 100 - progresses[i];
        let requireDays = Math.ceil(work / speeds[i])
        finish.push(requireDays)
    }
   let index = 0;
    while(index < finish.length) {
        let currentDay = finish[index];
        let count = 1;
        index++;
        while(index < finish.length && finish[index] <= currentDay) {
            count++
            index++
        }
        answer.push(count)
    }
    return answer;
}