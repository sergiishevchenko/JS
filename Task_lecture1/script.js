function simple_numbers(limit) {
    let arr = [],
        result = [];
    for (let i = 2; i <= limit; i++) {
        if (!arr[i]) {
            result.push(i);
            for (let j = i << 1; j <= limit; j += i) {
                arr[j] = true;
            }
        }
    }
    for (let k = 0; k < result.length; k++){
        console.log(result[k] + ' Делители этого числа: 1 и ' + result[k]);
    }
    
}
simple_numbers(100);
// simple_numbers(10);
// simple_numbers(5);