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
  'valueMissing',
  'tooShort',
  'patternMismatch',
  'typeMismatch',
  'tooLong', 
];

export const email = {
  typeMismatch: 'Invalid email address.',
  valueMissing: 'This field is required.'
}

export const password = {
  pattern: "^[a-zA-Z0-9!#$%&*+/=?^_|~-]{8,}$",
  tooShort: 'Passwords must be at least 8 characters.',
  patternMismatch: "Should be letters, numbers or !#$%&*+/=?^_|~-",
  valueMissing: 'This field is required.'
}

export const text = {
  pattern: "^[a-zA-Z\-\. ]+$",
  patternMismatch: "Text fields must only use a-z, -, periods, or spaces.",
  valueMissing: 'This field is required.'
}