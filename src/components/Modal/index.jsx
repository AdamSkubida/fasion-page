import css from "./Modal.module.css";

export const Modal = ({ onClose }) => {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <button className={css["modal-header"]} onClick={() => onClose()}>
          &times;
        </button>
        <div className={css["modal-content"]}>
          <ul className={css.list}>
            <li className={css["list-item"]}>
              <a href="">Home</a>
            </li>
            <li className={css["list-item"]}>
              <a href="">Me</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
