import { batch, MoveOut, StickyIn } from "react-scroll-motion";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  Sticky,
  Fade,
  FadeIn,
  ZoomIn,
  Move,
  MoveIn,
} from "react-scroll-motion";
import css from "./Gallery.module.css";

// const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), MoveOut(0, -400), Sticky());

export const Gallery = () => {
  return (
    <>
      <div className={css.hero}>
        <ScrollContainer className={css["scroll-container"]}>
          <ScrollPage className={css["scroll-page"]}>
            <Animator
              animation={batch(
                Fade(),
                Sticky(),
                Move(-500, -100),
                MoveOut(0, -400)
              )}
            >
              <span style={{ fontSize: "40px", fontFamily: "Lexend" }}>
                Anonimowe rozmowy na każdy temat – dostępne 24/7. Rozmawiaj bez
                presji, bez oceniania 😀
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage className={css["scroll-page"]}>
            <Animator animation={FadeUp}>
              <span style={{ fontSize: "30px", fontFamily: "Lexend" }}>
                Zły humor? Chcesz pogadać? Zadzwoń do nas – po prostu ✨
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage className={css["scroll-page"]}>
            <Animator animation={FadeUp}>
              <span style={{ fontSize: "30px", fontFamily: "Lexend" }}>
                Naszą misją jest wspierać ludzi w codziennych trudnościach i
                dawać im możliwość wygadania się anonimowo ⛅️
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage className={css["scroll-page"]}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <span style={{ fontSize: "30px", fontFamily: "Lexend" }}>
                <Animator animation={FadeUp}>
                  <p>Cześć 👋🏻</p>
                  <p>Jestem Sylwia 🙋🏻‍♀️</p>
                  <p>Miło Cię poznać ✋🏻</p>
                  <p>Chętnie z Tobą poraozmawiam 💛</p>
                </Animator>
              </span>
            </div>
          </ScrollPage>
        </ScrollContainer>
      </div>
    </>
  );
};
