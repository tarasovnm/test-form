import s from "./Form.module.scss";
import TextInput from "../TextInput/TextInput";
import DropDownSelect from "../DropDownSelect/DropDownSelect";
import CheckBox from "../CheckBox/CheckBox";
import SubmitButton from "../SubmitButton/SubmitButton";
import { nameFilter, phoneFilter } from "../../utils/filters";
import { useState } from "react";
import { validateEmail, validatePhone } from "../../utils/validators";

function Form() {

  const languages = ["Русский", "Английский", "Китайский", "Испанский"];

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    isEmailValid: false,
    phone: "",
    isPhoneValid: false,
    language: languages[0],
    isTermsAccepted: false,
    isFormValid: false
  });

  const validateForm = (formData) => {
    const { username, email, phone, isTermsAccepted } = formData;
    setFormData({
      ...formData,
      isEmailValid: validateEmail(email),
      isPhoneValid: validatePhone(phone)
    });
    return username && validateEmail(email) && validatePhone(phone) && isTermsAccepted;
  }

  const fieldChanged = (fieldName, fieldValue) => {
    setFormData({ ...formData, [fieldName]: fieldValue });
    setFormData((formData) => {
      formData.isFormValid = validateForm(formData);
      return formData;
    })
  }

  return (
    <div className={s.Form}>
      <h2 className={s.Form__title}>Регистрация</h2>
      <div className={s.Form__registered}>
        Уже есть аккаунт? <a className={s.Form__link} href="#">Войти</a>
      </div>

      <form>
        <TextInput name="username"
          label="Имя"
          placeholder="Введите Ваше имя"
          valid={true}
          onTextChanged={fieldChanged}
          filter={nameFilter} />
        <TextInput name="email"
          label="Email"
          placeholder="Введите Ваш email"
          valid={!((formData.email !== "") && !formData.isEmailValid)}
          onTextChanged={fieldChanged} />
        <TextInput name="phone"
          label="Номер телефона"
          placeholder="Введите номер телефона"
          valid={!((formData.phone !== "") && !formData.isPhoneValid)}
          onTextChanged={fieldChanged}
          filter={phoneFilter} />
        <DropDownSelect name="language"
          label="Язык"
          valueChanged={fieldChanged}
          options={languages} />
        <CheckBox name="isTermsAccepted" checked={false} isCheckedChanged={fieldChanged} />
        <SubmitButton text="Зарегистироваться" disabled={!formData.isFormValid} />
      </form>
    </div>
  );
}

export default Form;