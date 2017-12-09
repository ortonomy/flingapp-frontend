export const validityTypes = [
  'customError',
  'patternMismatch',
  'rangeOverflow',
  'rangeUnderflow',
  'stepMismatch',
  'tooLong',
  'tooShort',
  'typeMismatch',
  'valid',
  'valueMissing'
];

export const validityList = [
  'tooShort',
  'patternMismatch',
  'typeMismatch',
  'tooLong'
];

export const email = {
  pattern: "^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",
  patternMismatch: 'Invalid email address',
  typeMismatch: 'Invalid email address.'
}

export const password = {
  pattern: "^[a-zA-Z0-9!#$%&*+/=?^_|~-]{8,}$",
  tooShort: 'Passwords must be at least 8 characters.',
  patternMismatch: "Should be letters, numbers or !#$%&*+/=?^_|~-"
}

export const text = {
  pattern: "^[a-zA-Z ]+$",
  patternMismatch: "Text fields must only use a-z or spaces."
}