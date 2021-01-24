import s from "./CheckBox.module.scss";

function CheckBox({ name }) {
  return (
    <div>
      <input className={s.Form__checkbox} type="checkbox" name={name} id={name} />
      <label className={s.Form__label} htmlFor={name}>
        Принимаю <a className={s.Form__link} href="#">условия</a> использования
      </label>
    </div>
  );
}

export default CheckBox;