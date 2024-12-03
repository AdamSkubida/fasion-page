import css from "./Advert.module.css";

export const Advert = () => {
  return (
    <>
      <div className={css.advert}>
        <div className={css.wrapper}>
          <div className={css.sentence}>
            JEŚLI SIĘ ZASTANAWIASZ TO ZNACZY, ŻE POWINIENEŚ DAĆ SOBIE SZANSĘ I
            ZADZWONIĆ
          </div>
          <button className={css.btn}>Umów rozmowę</button>
        </div>
      </div>
    </>
  );
};
