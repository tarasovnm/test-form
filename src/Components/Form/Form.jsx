import s from "./Form.module.scss";
import TextInput from "../TextInput/TextInput";
import DropDownSelect from "../DropDownSelect/DropDownSelect";
import CheckBox from "../CheckBox/CheckBox";
import SubmitButton from "../SubmitButton/SubmitButton";

function Form() {

  const languages = ['Русский', 'Английский', 'Китайский', 'Испанский'];

  return (
    <div className={s.Form}>
      <h2 className={s.Form__title}>Регистрация</h2>
      <div className={s.Form__registered}>
        Уже есть аккаунт? <a className={s.Form__link} href="#">Войти</a>
      </div>

      <form>
        <TextInput name="username" label="Имя" placeholder="Введите Ваше имя" />
        <TextInput name="email" label="Email" placeholder="Введите Ваш email" />
        <TextInput name="phone" label="Номер телефона" placeholder="Введите номер телефона" />
        <DropDownSelect name="language" label="Язык" placeholder="Язык" options={languages} />
        <CheckBox name="accept-terms" />
        <SubmitButton text="Зарегистироваться" />
      </form>
    </div>
  );
}

export default Form;