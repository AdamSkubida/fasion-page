import css from "./Footer.module.css";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { MdMailOutline } from "react-icons/md";

export const Footer = () => {
  return (
    <>
      <div className={css.footer}>
        <p>SiWear fasion company &copy;</p>
        <div className={css.social}>
          <p className={css["social-icon"]}>
            <SlSocialInstagram />
          </p>
          <p className={css["social-icon"]}>
            <SlSocialFacebook />
          </p>
          <p className={css["social-icon"]}>
            <MdMailOutline />
          </p>
        </div>
      </div>
    </>
  );
};
