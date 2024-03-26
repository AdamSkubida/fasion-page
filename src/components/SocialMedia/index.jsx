import css from "./SocialMedia.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { MdMailOutline } from "react-icons/md";

export const SocialMedia = () => {
  const [isHovered, setIsHovered] = useState(null);

  return (
    <div className={css.wrapper}>
      <div className={css.social}>
        <Link to="https://www.instagram.com/">
          <div
            className={`${css.box} ${isHovered === 1 && css.ig}`}
            onMouseEnter={() => setIsHovered(1)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <SlSocialInstagram className={css.icon} />
          </div>
        </Link>
        <div
          className={`${css.box} ${isHovered === 2 && css.fb}`}
          onMouseEnter={() => setIsHovered(2)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <SlSocialFacebook className={css.icon} />
        </div>
        <div
          className={`${css.box} ${isHovered === 3 && css.mail}`}
          onMouseEnter={() => setIsHovered(3)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <MdMailOutline className={css.icon} />
        </div>
      </div>
    </div>
  );
};
