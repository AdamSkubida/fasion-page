import css from "./Gallery.module.css";
import img1 from "/elegant-shoes640.jpg";
import img2 from "/shoes640.jpg";
import img3 from "/nike640.jpg";
import img4 from "/jumper640.jpg";
import img5 from "/dress640.jpg";
import img6 from "/jeans640.jpg";

export const Gallery = () => {
  return (
    <>
      <div className={css.gallery}>
        <div className={css["img-wrapper"]}>
          <img src={img1} alt="elegant shoes" />
          <p className={css.price}>300$</p>
        </div>
        <div className={css["img-wrapper"]}>
          <img src={img2} alt="shoes" />
          <p className={css.price}>200$</p>
        </div>
        <div className={css["img-wrapper"]}>
          <img src={img5} alt="dress" />
          <p className={css.price}>180$</p>
        </div>
        <div className={css["img-wrapper"]}>
          <img src={img3} alt="nike" />
          <p className={css.price}>250$</p>
        </div>
        <div className={css["img-wrapper"]}>
          <img src={img6} alt="jeans" />
          <p className={css.price}>120$</p>
        </div>
        <div className={css["img-wrapper"]}>
          <img src={img4} alt="jumper" />
          <p className={css.price}>120$</p>
        </div>
      </div>
    </>
  );
};
