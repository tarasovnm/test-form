import s from "./TextInput.module.scss";

function TextInput({ name, label, placeholder }) {
  return (
    <div className={s.Form__item}>
      <label className={s.Form__label} htmlFor={name}>{label}</label>
      <input className={s.Form__input} type="text" name={name} id={name} placeholder={placeholder} />
    </div>
  );
}

export default TextInput;