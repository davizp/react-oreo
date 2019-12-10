export const messages = (value: string) => {
  return {
    isRequired: 'this is is required',
    isEmail: `this should ${value} be an email`,
    minLength: 'min length should be',
    maxLength: 'max length should be',
    isNumeric: 'Invalid value. Numbers only.',
    isEqual: 'value should be Equal',
    isFlexibleRequired: 'this field should be....'
  };
};
