function solution(n)
{
   
    var answer = 0;
    let blank = n.toString();
    for(i = 0; i < blank.length; i++) {
        answer = answer + +blank[i];
    }

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    //console.log('Hello Javascript')

    return answer;
}