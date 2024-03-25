import css from "./Modal.module.css";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

export const Modal = ({ onClose }) => {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <button className={css["close-button"]} onClick={() => onClose()}>
          <IoMdClose className={css.close} />
        </button>
        <div className={css["modal-content"]}>
          <ul className={css.list}>
            <li className={css["list-item"]}>
              <Link to="/fasion-page/">Home</Link>
            </li>
            <li className={css["list-item"]}>
              <Link to="/fasion-page/Me">Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
