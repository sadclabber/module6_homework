const raiseToThePower = (x, n) => {
  let result; 
  if (Number.isInteger(x) && Number.isInteger(n)) {
    result = Math.pow(x, n);
  } else {
    result = 'Данные неверны';
  };
  return result;  
};

const answer = raiseToThePower(5, 5);
console.log(answer);