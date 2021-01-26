import { useState } from "react";
import s from "./TextInput.module.scss";

function TextInput({ name, label, placeholder, valid, onTextChanged, filter }) {

  const [text, setText] = useState("");

  const textChanged = (e) => {
    const newText = e.target.value;
    if (!filter || filter(newText)) {
      setText(newText);
      onTextChanged(name, newText);
    }
  }

  return (
    <div className={s.Field}>
      <label className={s.Field__label} htmlFor={name}>{label}</label>
      <input className={s.Field__input} type="text" name={name} id={name} placeholder={placeholder} onChange={textChanged} value={text} />
      {valid ? "" : <div className={s.Field__error}>Введено не корректное значение</div>}
    </div>
  );
}

export default TextInput;