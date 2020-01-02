export const messages = (value: string | number) => {
  // x emoji is temporary
  return {
    isRequired: '✖︎ Required',
    isEmail: '✖︎ Invalid Email Address',
    minLength: `✖︎ Min length required ${value}`,
    maxLength: `✖︎ Max length required ${value}`,
    isNumeric: '✖︎ Invalid value. Numbers only.',
    isEqual: '✖︎ Value should be Equal',
    isFlexibleRequired: '✖︎ Flexible Required',
  };
};
