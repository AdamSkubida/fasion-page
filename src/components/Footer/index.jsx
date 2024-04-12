import css from "./Footer.module.css";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { MdMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className={css.footer}>
        <div className={css["contact-wrapper"]}>
          <div className={css.social}>
            <Link to="https://www.instagram.com/">
              <p className={css["social-icon"]}>
                <SlSocialInstagram />
              </p>
            </Link>
            <Link to="https://www.facebook.com/">
              <p className={css["social-icon"]}>
                <SlSocialFacebook />
              </p>
            </Link>
            <Link to="mailto:siwear@gmail.com">
              <p className={css["social-icon"]}>
                <MdMailOutline />
              </p>
            </Link>
          </div>
          <div>
            <Link to="tel:123-456-789">
              <p className={css.phone}>+48 123 456 789</p>
            </Link>
          </div>
        </div>
        <p>SiWear fasion company &copy;</p>
      </div>
    </>
  );
};
