import s from "./CheckBox.module.scss";
import {useState} from 'react';

function CheckBox({name, checked, isCheckedChanged}) {

  const [isChecked, setChecked] = useState(checked);

  const checkboxClicked = () => {
    const newValue = !isChecked;
    setChecked(newValue);
    isCheckedChanged(name, newValue)
  }

  const checkedMark = (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.6343 0.634339C14.9467 0.32192 15.4533 0.32192 15.7657 0.634339C16.0781 0.946758 16.0781 1.45329 15.7657 1.76571L6.16567 11.3657C5.85325 11.6781 5.34672 11.6781 5.0343 11.3657L1.0343 7.36571C0.721883 7.05329 0.721883 6.54676 1.0343 6.23434C1.34672 5.92192 1.85325 5.92192 2.16567 6.23434L5.59999 9.66865L14.6343 0.634339Z" fill="#0880ae" />
    </svg>
  );

  return (
    <div className={s.Check}>
      <label className={s.Check__label}>
        <input className={s.Check__input} type="checkbox" name={name} id={name} onChange={checkboxClicked} checked={isChecked} />
        <span className={s.Check__box}>
          {isChecked ? checkedMark : ""}
        </span>
        Принимаю <a className={s.Check__link} href="/">условия</a> использования
      </label>
    </div>
  );
}

export default CheckBox;