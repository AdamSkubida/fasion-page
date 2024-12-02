import css from "./Advert.module.css";

export const Advert = () => {
  return (
    <>
      <div className={css.advert}>
        <div className={css.wrapper}>
          <div className={css.sentence}>
            Jesli się zastanawiasz to znaczy, że powinieneś dać sobie szanse i
            zadzwonić
          </div>
          <button className={css.btn}>Umów rozmowę</button>
        </div>
      </div>
    </>
  );
};
