import css from "./Header.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

export const Header = ({ onClick }) => {
  return (
    <>
      <div className={css.container}>
        <div className={css.logo}>
          <Link to="/fasion-page/">SiWear</Link>
        </div>
        <nav className={css.nav}>
          <ul className={css.list}>
            <li className={css["list-item"]}>
              <Link to="/fasion-page/">Home</Link>
            </li>
            <li className={css["list-item"]}>
              <a href="/fasion-page/Me">Me</a>
            </li>
          </ul>
        </nav>
        <button className={css["open-button"]} onClick={() => onClick()}>
          <RxHamburgerMenu className={css.burger} />
        </button>
      </div>
    </>
  );
};
