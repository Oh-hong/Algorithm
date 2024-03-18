function solution(x) {
    var answer = true;
    let sum = 0;
    let blank = x.toString();
    console.log(x)
    for (i = 0; i< blank.length; i++) {
        sum = sum + Number(blank[i])
    }
    if(x % sum === 0) {
        return true;
    }
    return false;
}



