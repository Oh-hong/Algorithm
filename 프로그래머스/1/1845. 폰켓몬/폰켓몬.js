function solution(nums) {
    var answer = 0;
    const total = nums.length;
    const map = {};
    for(let pocketmon of nums) {
     map[pocketmon] = (map[pocketmon] || 0) + 1;
    }
    const number = Object.keys(map)
    const maxSelect = total/2;
    
    answer = Math.min(number.length, maxSelect)
   
    return answer;
}