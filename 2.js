function isPrime(inputValue) {
    if (typeof inputValue === 'number' && Number.isInteger(inputValue) && inputValue <= 1000 && inputValue != 0 && inputValue != 1) {
        for (let i = 2; i < inputValue; i++) {
            if (inputValue % i === 0) {
                inputValue = false;
                break;
            }
        }
        if (inputValue === false) {
            console.log('Составное');
        } else {
            console.log('Простое');
        }

    } else if (inputValue === 1 || inputValue === 0) {
        console.log('Не является ни простым, ни составным');

    } else {
        console.log('Данные неверны');
    }
};

let a = 1.5;
isPrime(a);