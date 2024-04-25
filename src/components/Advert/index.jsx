import css from "./Advert.module.css";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

export const Advert = ({ onClose }) => {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <button className={css["close-button"]} onClick={() => onClose()}>
          <IoMdClose className={css.close} />
        </button>
        <div className={css["modal-content"]}>
          <div className={css.info}>
            <span className={css.text}>
              <b>Hi!</b> If something <b>caught</b> your eye , please{" "}
              <b>contact</b> me via my:
            </span>
            <Link to="https://www.instagram.com/">
              <p className={css.ig}>Instagram</p>
            </Link>
            <Link to="https://www.facebook.com/">
              <p className={css.fb}>Facebook</p>
            </Link>
            <Link to="mailto:siwear@gmail.com">
              <p className={css.email}>email</p>
            </Link>
            <Link to="tel:123-456-789">
              <p className={css.phone}>phone number</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
