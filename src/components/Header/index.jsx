import css from "./Header.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

export const Header = ({ onClick }) => {
  return (
    <>
      <div className={css.container}>
        <div className={css.wrapper}>
          <nav className={css.nav}>
            <ul className={css.list}>
              <li className={css["list-item"]}>
                <Link to="/">Home</Link>
              </li>
              <li className={css["list-item"]}>
                <Link to="/Me">Me</Link>
              </li>
            </ul>
          </nav>
          <div className={css.logo}>
            <Link to="/">Pogadajmy</Link>
          </div>
          <div className={css.contact}>
            <ul className={css["contact-list"]}>
              <li className={css["contact-item"]}>
                <a href="tel:+48123456789">+48 123 456 789</a>
              </li>
              <li className={css["contact-item"]}>
                <a href="mailto:pogadajmy@gmail.com">pogadajmy@gmail.com</a>
              </li>
            </ul>
          </div>

          <button className={css["open-button"]} onClick={() => onClick()}>
            <RxHamburgerMenu className={css.burger} />
          </button>
        </div>
      </div>
    </>
  );
};
