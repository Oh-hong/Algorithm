function solution(n) {
    const MOD = 1234567;
    if (n === 1) return 1;
    if (n === 2) return 2;

    let a = 1, b = 2;
    for (let i = 3; i <= n; i++) {
        const temp = (a + b) % MOD;
        a = b;
        b = temp;
    }
    return b;
}

// 예제 테스트
console.log(solution(4));