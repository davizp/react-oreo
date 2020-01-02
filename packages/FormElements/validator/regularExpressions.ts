export const regex = {
  alpha: /^[A-Za-z]*$/i,
  numeric: /(^$)|^[-+]?(?:\d*[.])?\d+$/,
  points: /(^$)|^\d+$/,
  phone: /(^$)|^\D*(\d\D*){7,}$/,
  zipCodeUS: /(^$)|(^[0-9]{5}$)|(^[0-9]{5}-[0-9]{4}$)/,
  zipCodeCA: /(^$)|(^[\w\d]{3} [\w\d]{3}$)|(^[\w\d]{6}$)/,
  alphaNumeric: /^[a-zA-Z0-9\s-]*$/i,
  address: /(^$)|^[^-\s][a-zA-ZÀ-ÿ0-9,-.'`~# \\/ʼ·\s-]+$/i,
  name: /(^$)|^[a-z\u00C0-\u02AB'~`-]+\s?([a-z\u00C0-\u02AB'~`-]+\s?)+$/i,
  middleName: /(^$)|^[a-z\u00C0-\u02AB'~`-]?\s?([a-z\u00C0-\u02AB'~`-]?\s?)+$/i,
  ccName: /(^$)|^[a-z\u00C0-\u02AB'~`-]+\.?\s?([a-z\u00C0-\u02AB'~`-]+\.?\s?)+$/i,
  email: /(^$)|(^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/i,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@!%*?&#_]).{8,16}$/,
  cvv: /(^$)|^[0-9]{3,4}$/,
  currency: /^(^$)|((\$)( )?)?((\d+)|(\d{1,3})(\d{3})*)(\.\d{1,2})?$/,
  ssgUsername: /(^[a-zA-Z0-9-_]*$)|(^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/i,
  promoCode: /^[a-zA-Z0-9_]*$/i,
  comments: /(^$)|^[\w\s,.]+$/i,

  // Backend Regex for Vacations
  groupCode: /(^$)|^([a-zA-Z]{2})+[0-9]{8}$/,
  alphaSpaces: /(^$)|[a-zA-Z ]+/,
  beEmail: /(^$)|^([A-Z0-9._%+-]+)@(([A-Z0-9.-]+)(\.[A-Z]{2,6}))$/i,
};
