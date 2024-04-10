import css from "./About.module.css";
import portrait from "/portrait.jpg";

export const About = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.photo}>
        <img src={portrait} alt="my portrait" className={css.portrait} />
      </div>
      <div className={css.dsc}>
        Mam na imię <b>Sylwia</b>, i modę kocham z całego serca. To dla mnie
        więcej niż <b>ubrania</b> - to sposób wyrażania siebie i spełniania{" "}
        <b>pasji</b>. Staram się tworzyć coś wyjątkowego, zawsze w poszukiwaniu
        nowych inspiracji i trendów. Dla mnie
        <b> moda</b> to historia, osobowość i sposób wyrażania samej siebie.
      </div>
    </div>
  );
};
