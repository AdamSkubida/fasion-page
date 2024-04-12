import css from "./Advert.module.css";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

export const Advert = () => {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <button className={css["close-button"]}>
          <IoMdClose className={css.close} />
        </button>
        <div className={css["modal-content"]}>
          <div className={css.info}>
            Hi! If something caught your eye , please contact me via my
            Instagram, Facebook, email, or phone number
          </div>
        </div>
      </div>
    </div>
  );
};
