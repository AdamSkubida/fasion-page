import css from "./Hero.module.css";

export const Hero = () => {
  return (
    <>
      <div className={css.hero}>
        <div className={css.sentence}>
          Anonimowe rozmowy na każdy temat – dostępne 24/7
        </div>
      </div>
    </>
  );
};
