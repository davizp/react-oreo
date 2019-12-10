// import { checkValidity } from 'validator';
const checkValidity = require('@react-oreo/validator');

console.log(checkValidity);

const { valid, errorMessage } = checkValidity('hola', { isRequired: true });

console.log(valid, errorMessage);
