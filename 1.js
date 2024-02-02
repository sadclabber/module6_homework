function countNumbers() {
    let arr = [1, 2, 3, 0, 'Hello', null, 1.2, true];
    let even = 0;
    let odd = 0;
    let zero = 0;
    for (let i = 0; i < arr.length; i = i + 1) {
        if (typeof arr[i] === 'number' && Number.isInteger(arr[i])) {
            if (arr[i] != 0) {
                if (arr[i] % 2 === 0) {
                    even++;
                } else {
                    odd++;
                };
            } else {
                zero++;
            }
        }
    }
    console.log(even, 'четных, ', odd, 'нечетных, ', zero, 'нулей');
}

countNumbers();

