import css from "./Main.module.css";

export const Main = () => {
  return (
    <>
      <div className={css.main}>
        <ul className={css["box-list"]}>
          <li className={css.box}>
            <figure className={css["content-box"]}>
              <div className={css["image-box"]}>
                <img
                  className={css.photo}
                  alt="Hand with a piece of paper says phone a friend"
                  src="/fasion-page/images/MainFirst1920.jpg"
                />
                <div className={css.overlay}>
                  <span className={css["overlay-content"]}>
                    Jeżeli potrzebujesz - <b>przyjacielskiej</b> rozmowy,{" "}
                    <b>pomocy</b> przy złym samopoczuciu, wyrzuceniu z siebie{" "}
                    <b>ciężkiej myśli</b>
                  </span>
                </div>
              </div>
              <figcaption className={css.caption}>
                <h3>Rozmowa jak z przyjacielem</h3>
                <p>Pogadamy?</p>
              </figcaption>
            </figure>
          </li>
          <li className={css.box}>
            <figure className={css["content-box"]}>
              <div className={css["image-box"]}>
                <img
                  className={css.photo}
                  alt="Hand with a piece of paper says phone a friend"
                  src="/fasion-page/images/MainQuestion.jpg"
                />
                <div className={css.overlay}>
                  <span className={css["overlay-content"]}>
                    Masz pytanie, może <b>ciekawy pomysł</b>. Chesz poznać{" "}
                    <b>odpowiedź</b> na nurtujące Cię <b>pytanie</b>? Chętnie Ci
                    pomożemy
                  </span>
                </div>
              </div>
              <figcaption className={css.caption}>
                <h3>Masz jakieś pytanie?</h3>
                <p>Zapytaj nas</p>
              </figcaption>
            </figure>
          </li>
          <li className={css.box}>
            <figure className={css["content-box"]}>
              <div className={css["image-box"]}>
                <img
                  className={css.photo}
                  alt="Hand with a piece of paper says phone a friend"
                  src="/fasion-page/images/MainConv1920.jpg"
                />
                <div className={css.overlay}>
                  <span className={css["overlay-content"]}>
                    Chcesz poprostu <b>porozmawiać</b>, poplotkować lub
                    wyciągnąć <b>ciekawe wnioski</b>? Nasz sztab to{" "}
                    <b>wykształceni</b>
                    ludzie, każda rozmowa napewno będzie <b>interesująca</b>
                  </span>
                </div>
              </div>
              <figcaption className={css.caption}>
                <h3>Nieoceniająca konwersacja</h3>
                <p>Ciekawie myślimy</p>
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </>
  );
};
