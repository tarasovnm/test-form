export function phoneFilter(input) {
  const validChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '(', ')'];
  const lastChar = input[input.length - 1];
  if (validChars.includes(lastChar)) {
    return true;
  }
  return false;
}

export function nameFilter(input) {
  const invalidChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const lastChar = input[input.length - 1];
  if (invalidChars.includes(lastChar)) {
    return false;
  }
  return true;
}