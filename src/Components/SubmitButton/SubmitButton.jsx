import s from "./SubmitButton.module.scss";

function SubmitButton({ text, disabled }) {
  return (
    <button className={s.Form__button} disabled={disabled}>{text}</button>
  );
}

export default SubmitButton;