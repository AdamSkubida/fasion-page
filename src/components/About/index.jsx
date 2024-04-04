import css from "./About.module.css";
import portrait from "/portrait.jpg";

export const About = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.photo}>
        <img src={portrait} alt="my portrait" className={css.portrait} />
      </div>
      <div className={css.dsc}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ut
        dolorem reprehenderit aliquam neque, sit officiis tenetur! Recusandae
        ullam accusantium, repellendus et quam perferendis soluta aperiam
        voluptates, vitae quo voluptatem.
      </div>
    </div>
  );
};
