export function phoneFilter(input) {
  // Фильтр должен допускать ввод только цифр, (, ), +, -
  return input.match(/^[0-9()\-+ ]*$/i);
}

export function nameFilter(input) {
  // Фильтр должен допускать ввод только букв и пробелов
  return input.match(/^[a-zA-Zа-яА-я\- ]*$/i);
}