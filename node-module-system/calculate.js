import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const [, , value1, operation, value2] = process.argv;

const num1 = parseInt(value1);
const num2 = parseInt(value2);

let result;

switch (operation) {
  case 'plus':
    result = add(num1, num2);
    break;
  case 'minus':
    result = subtract(num1, num2);
    break;
  case 'times':
    result = multiply(num1, num2);
    break;
  case 'over':
    result = divide(num1, num2);
    break;
  default:
    result = 'Invalid operation';
}

console.log('result:', result);
