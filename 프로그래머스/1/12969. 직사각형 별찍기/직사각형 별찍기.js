process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    // console.log(a) = 5;
    // console.log(b) = 3;
    let star = ''
    for(i = 1; i <= a; i++) {
        star = star + '*'
    }
    for(i = 1; i <= b; i++) {
        console.log(star)
    }
});