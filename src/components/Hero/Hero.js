import React, { useEffect, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import { HeroContainer, HeroWrapper, HeroLeft, HeroRight, Image, ScrollDown, ScrollLink } from "./HeroElements";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";
import { useLang } from "../../context/LanguageContext";
import { t } from "../../data/translations";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const { lang } = useLang();
  const tt = t[lang];

  // ✅ đổi ngôn ngữ thì reset animation state
  useEffect(() => {
    setShowSubtitle(false);
    setShowScrollDown(false);
  }, [lang]);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />

      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn">
              <TypeAnimation
                key={`hi-${lang}`} // ✅ reset
                cursor={false}
                sequence={[tt.hero.hi, () => setShowSubtitle(true)]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />

              {showSubtitle && (
                <TypeAnimation
                  key={`seq-${lang}`} // ✅ reset
                  cursor={true}
                  sequence={[
                    500,
                    ...tt.hero.seq.flatMap((s) => [s, 1000]),
                    300,
                    () => setShowScrollDown(true),
                    500,
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              )}
            </ScrollAnimation>
          </HeroLeft>

          <HeroRight>
            <ScrollAnimation animateIn="fadeIn">
              <Image src="/man-svgrepo-com.svg" alt="man-svgrepo" />
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>

        {showScrollDown && (
          <ScrollAnimation animateIn="flipInX" offset={0}>
            <ScrollDown to="projects" id="scrollDown">
              <ScrollLink>
                {tt.hero.scrollDown}
                <img src="/scroll-down.svg" alt="scroll-down" />
              </ScrollLink>
            </ScrollDown>
          </ScrollAnimation>
        )}
      </HeroContainer>
    </main>
  );
}

export default Hero;
