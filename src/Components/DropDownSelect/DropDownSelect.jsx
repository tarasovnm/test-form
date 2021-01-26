import s from "./DropDownSelect.module.scss";
import { useState } from "react";

function DropDownSelect({ name, label, options, valueChanged }) {

  const [isOpened, setOpened] = useState(false);
  const [currentItem, setCurrent] = useState(options[0]);

  const isOpenedClass = isOpened ? s.opened : "";

  const toggleSelect = () => {
    setOpened(!isOpened);
  }

  const selectItem = (index) => {
    setCurrent(options[index]);
    valueChanged(name, options[index]);
    setOpened(false);
  }

  const onKeyDownSelect = (e) => {
    if (e.key === "Enter") {
      toggleSelect();
    }
  }

  const items = options.map((item, index) => <div className={s.Select__item} key={index} onClick={() => selectItem(index)}>{item}</div>)

  return (

    <div className={s.Select + " " + isOpenedClass}>
      <div className={s.Select__label}>{label}</div>
      <div className={s.Select__header} onClick={toggleSelect} tabIndex="0" onKeyDown={onKeyDownSelect}>
        <span className={s.Select__current}>{currentItem}</span>
        <div className={s.Select__icon}>
          <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 6.58579L14.2929 0.292893C14.6834 -0.0976311 15.3166 -0.0976311 15.7071 0.292893C16.0976 0.683418 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L8 6.58579Z" fill="#0880ae" />
          </svg>
        </div>
      </div>
      <div className={s.Select__body}>
        {items}
      </div>
    </div>
  );
}

export default DropDownSelect;