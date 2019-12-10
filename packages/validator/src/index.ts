import { regex } from './regularExpressions';
import { messages } from './messages';

interface Rules {
  isRequired?: boolean;
  isEmail?: boolean;
  minLength?: number;
  maxLength?: number;
  isNumeric?: boolean;
  isEqual?: boolean;
  isFlexibleRequired?: boolean;
}

interface validationObject {
  valid: boolean;
  errorMessage: string;
}

const checkValidity = (value: string, rules: Rules): validationObject => {
  let isValid = true;
  if (!rules) {
    return {
      errorMessage: '',
      valid: true
    };
  }

  if (rules.isRequired) {
    isValid = value.trim() !== '' && isValid;

    return {
      errorMessage: !isValid ? messages(value).isRequired : '',
      valid: isValid
    };
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;

    return {
      errorMessage: !isValid ? messages(value).minLength : '',
      valid: isValid
    };
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;

    return {
      errorMessage: !isValid ? messages(value).maxLength : '',
      valid: isValid
    };
  }

  if (rules.isEmail) {
    isValid = regex.email.test(value) && isValid;

    return {
      errorMessage: !isValid ? messages(value).isEmail : '',
      valid: isValid
    };
  }

  if (rules.isNumeric) {
    isValid = regex.numeric.test(value) && isValid;

    return {
      errorMessage: !isValid ? messages(value).isNumeric : '',
      valid: isValid
    };
  }

  if (rules.isEqual) {
    isValid = rules.isEqual && isValid;

    return {
      errorMessage: !isValid ? messages(value).isEqual : '',
      valid: isValid
    };
  }

  if (rules.isFlexibleRequired) {
    const isRequired = rules.isFlexibleRequired && isValid;

    if (isRequired) {
      isValid = value.trim() !== '';

      return {
        errorMessage: !isValid ? messages(value).isFlexibleRequired : '',
        valid: isValid
      };
    }
  }

  if (rules.isFlexibleRequired && rules.isRequired) {
    console.warn('You should not use `required` with `isFlexibleRequired`.');
  }

  return {
    errorMessage: 'no error specified',
    valid: isValid
  };
};

module.exports = checkValidity;
