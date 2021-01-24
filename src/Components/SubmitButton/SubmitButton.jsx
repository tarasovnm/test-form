import s from "./SubmitButton.module.scss";

function SubmitButton({ text }) {
  return (
    <button className={s.Form__button}>{text}</button>
  );
}

export default SubmitButton;