import css from "./Header.module.css";

export const Header = () => {
  return (
    <>
      <div className={css.container}>
        <div className={css.logo}>
          <a href="https://adamskubida.github.io/fasion-page/">SiWear</a>
        </div>
        <nav className={css.nav}>
          <ul className={css.list}>
            <li className={css["list-item"]}>
              <a href="https://adamskubida.github.io/fasion-page/">Home</a>
            </li>
            <li className={css["list-item"]}>
              <a href="">Me</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
