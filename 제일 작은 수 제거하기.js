function solution(arr) {
  var answer = [];
  let nono = [-1];
  let temp = arr[0];
  for(i = 0; i < arr.length; i++) {
      if(arr[i] < temp) {
          temp = arr[i]
      }
      
  }
  
  arr.splice(arr.indexOf(temp), 1)
  if(arr.length === 0) {
      return nono;
  }
  return arr;
}