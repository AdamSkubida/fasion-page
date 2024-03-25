import css from "./SocialMedia.module.css";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { MdMailOutline } from "react-icons/md";

export const SocialMedia = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.social}>
        <div className={css["icon-wrapper"]}>
          <SlSocialInstagram className={css.icon} />
        </div>
        <div className={css["icon-wrapper"]}>
          <SlSocialFacebook className={css.icon} />
        </div>
        <div className={css["icon-wrapper"]}>
          <MdMailOutline className={css.icon} />
        </div>
      </div>
    </div>
  );
};
