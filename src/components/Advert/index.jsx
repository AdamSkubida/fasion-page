import css from "./Advert.module.css";
import { Link } from "react-router-dom";

export const Advert = () => {
  return (
    <>
      <div className={css.advert}>
        <div className={css.wrapper}>
          <div className={css.sentence}>
            JEŚLI SIĘ ZASTANAWIASZ TO ZNACZY, ŻE POWINIENEŚ DAĆ SOBIE SZANSĘ I
            ZADZWONIĆ
          </div>
          <Link to="/Offer" className={css.btn}>
            Umów rozmowę
          </Link>
        </div>
      </div>
    </>
  );
};
