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

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

export const Gallery = () => {
  return (
    <>
      <div className={css.hero}>
        <ScrollContainer>
          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <span style={{ fontSize: "30px" }}>
                Let me show you scroll animation 😀
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={ZoomInScrollOut}>
              <span style={{ fontSize: "40px" }}>I'm FadeUpScrollOut ✨</span>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={FadeUp}>
              <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <span style={{ fontSize: "40px" }}>
                <Animator animation={MoveIn(-10, 0)}>Hello Guys 👋🏻</Animator>
                <Animator animation={MoveIn(10, 0)}>
                  Nice to meet you 🙋🏻‍♀️
                </Animator>
                - I'm Dante Chun -
                <Animator animation={MoveOut(10, 0)}>Good bye ✋🏻</Animator>
                <Animator animation={MoveOut(-10, 0)}>See you 💛</Animator>
              </span>
            </div>
          </ScrollPage>
        </ScrollContainer>
      </div>
    </>
  );
};
