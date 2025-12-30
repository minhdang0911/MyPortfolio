import React from "react";
import { stackList } from "../../data/ProjectData";
import { Image, Technologies, Tech, TechImg, TechName, ContactWrapper } from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
import { useLang } from "../../context/LanguageContext";
import { t } from "../../data/translations";

function About() {
  const { lang } = useLang();
  const tt = t[lang];

  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">{tt.about.title}</div>

        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="/man-svgrepo-com.svg" alt="man-svgrepo" />
          </ScrollAnimation>

          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">{tt.about.p1}</ScrollAnimation>
            <br /><br />
            <ScrollAnimation animateIn="fadeInLeft">{tt.about.p2}</ScrollAnimation>
            <br /><br />
            <ScrollAnimation animateIn="fadeInLeft">
              {tt.about.p3}
              <div className="tagline2">{tt.about.tagline}</div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
