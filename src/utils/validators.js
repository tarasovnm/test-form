export const validateEmail = (email) => {
  return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
}

export const validatePhone = (phone) => {
  const clearedPhone = phone.split(" ").join("")
    .split("+").join("")
    .split("-").join("")
    .split("(").join("")
    .split(")").join("");
  return clearedPhone.length === 11;
}