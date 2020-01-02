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

export interface RuleSet {
  [key: string]: Rules;
}

export interface Errors {
  [key: string]: string;
}

interface validationObject {
  valid: boolean;
  errorMessage: string;
}

interface FormValues {
  [key: string]: string | boolean;
}

const checkValidity = (
  value: string | boolean,
  rules: Rules
): validationObject => {
  let isValid: boolean = true;
  if (!rules) {
    return {
      errorMessage: '',
      valid: true,
    };
  }

  if (rules.isRequired) {
    isValid =
      value.toString().trim() !== '' && value.toString() !== 'false' && isValid;

    if (!isValid) {
      return {
        errorMessage: !isValid ? messages(value.toString()).isRequired : '',
        valid: isValid,
      };
    }
  }

  if (rules.minLength) {
    isValid = value.toString().length >= rules.minLength && isValid;

    if (!isValid) {
      return {
        errorMessage: !isValid ? messages(value.toString()).minLength : '',
        valid: isValid,
      };
    }
  }

  if (rules.maxLength) {
    const size: number = rules.maxLength;
    isValid = value.toString().length <= rules.maxLength && isValid;

    if (!isValid) {
      return {
        errorMessage: !isValid ? messages(size).maxLength : '',
        valid: isValid,
      };
    }
  }

  if (rules.isEmail) {
    isValid = regex.email.test(value.toString()) && isValid;

    if (!isValid) {
      return {
        errorMessage: !isValid ? messages(value.toString()).isEmail : '',
        valid: isValid,
      };
    }
  }

  if (rules.isNumeric) {
    isValid = regex.numeric.test(value.toString()) && isValid;

    if (!isValid) {
      return {
        errorMessage: !isValid ? messages(value.toString()).isNumeric : '',
        valid: isValid,
      };
    }
  }

  if (rules.isEqual) {
    isValid = rules.isEqual && isValid;

    if (!isValid) {
      return {
        errorMessage: !isValid ? messages(value.toString()).isEqual : '',
        valid: isValid,
      };
    }
  }

  if (rules.isFlexibleRequired) {
    const isRequired = rules.isFlexibleRequired && isValid;

    if (isRequired) {
      isValid = value.toString().trim() !== '';

      if (!isValid) {
        return {
          errorMessage: !isValid
            ? messages(value.toString()).isFlexibleRequired
            : '',
          valid: isValid,
        };
      }
    }
  }

  if (rules.isFlexibleRequired && rules.isRequired) {
    console.warn('You should not use `required` with `isFlexibleRequired`.');
  }

  return {
    errorMessage: '',
    valid: isValid,
  };
};

export const validate = (values: FormValues, rules: RuleSet) => {
  const inputNames: string[] = Object.keys(values);
  const errors: Errors = {};

  inputNames.forEach((inputName: string) => {
    const { errorMessage }: { errorMessage: string } = checkValidity(
      values[inputName],
      rules[inputName]
    );

    if (!errorMessage) {
      delete errors[inputName];
    } else {
      errors[inputName] = errorMessage;
    }
  });

  return errors;
};
