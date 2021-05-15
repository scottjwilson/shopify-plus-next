import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/components/Hero.module.scss";

const Hero = ({ slides }) => {
  const [isCurrent, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(isCurrent === length - 1 ? 0 : isCurrent + 1);
  };
  const prevSlide = () => {
    setCurrent(isCurrent === 0 ? length - 1 : isCurrent - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div>
      {" "}
      <div className={styles.hero__container}>
        {slides.map((slide, index) => {
          const { image, title, span, subtitle, button } = slide;
          return (
            <div
              className={
                index === isCurrent
                  ? `${styles.hero__slider}`
                  : `${styles.hero__slider.active}`
              }
            >
              <Image
                className={styles.hero__image}
                style
                src={image}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
              <div className={styles.hero__content}>
                <button onClick={prevSlide}>prev</button>
                <button onClick={nextSlide}>next</button>
                <h1>
                  {title} <span>{span}</span>
                </h1>
                <h2>{subtitle}</h2>
                <button>{button}</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
