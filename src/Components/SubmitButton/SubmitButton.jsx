import s from "./SubmitButton.module.scss";

function SubmitButton({ text, disabled }) {
  return (
    <button className={s.Button} disabled={disabled}>{text}</button>
  );
}

export default SubmitButton;