import css from "./About.module.css";

export const About = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.section}>
        <div className={css["first-photo"]}>
          <img
            className={css.photo}
            alt="Happy gay has a call"
            src="/images/call1920.jpg"
            srcset="/images/call1920.jpg 1200w, /images/call640.jpg 600w"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 1200px"
          />
        </div>
        <div className={css.dsc}>
          Naszą misją jest <b>wspierać</b> ludzi w codziennych trudnościach i
          dawać im możliwość wygadania się anonimowo.
        </div>
      </div>
      <div className={css.section}>
        <div className={css.dsc}>
          <ul className={css.list}>
            <li className={css["list-item"]}>Rozmowy na poprawę humoru</li>
            <li className={css["list-item"]}>
              Rozmowy o codziennych problemach
            </li>
            <li className={css["list-item"]}>Wsparcie emocjonalne</li>
          </ul>
        </div>
        <div className={css["first-photo"]}>
          <img
            className={css.photo}
            alt="Happy gay has a call"
            src="/images/smile1920.jpg"
            srcset="/images/smile1920.jpg 1200w, /images/smile640.jpg 600w"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 1200px"
          />
        </div>
      </div>
    </div>
  );
};
