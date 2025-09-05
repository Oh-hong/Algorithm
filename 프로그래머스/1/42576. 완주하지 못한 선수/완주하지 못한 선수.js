// function solution(participant, completion) {
//     var answer = '';
//     const map = {};
//     for(let name of participant) {
//         map[name] = (map[name] || 0) + 1;
//         console.log(map)
//     }
//     for(let name of completion) {
//         map[name]--
//     }
//     for(let name in map) {
//         if(map[name] >= 1) {
//             return name
//         }
//     }
//     return answer;
// }


function solution(participant, completion) {
    var answer = ''
    const map = {};
    for(let name of participant) {
        map[name] = (map[name] || 0) + 1;
    }
    
    for (let name of completion) {
        map[name]--;
    }
    
    for (let name in map) {
        if(map[name] >= 1) {
            return name
        }
    }
}