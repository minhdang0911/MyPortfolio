import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
  BtnGroup,
} from "./ProjectCardElements";
import ScrollAnimation from "react-animate-on-scroll";
import { useLang } from "../../../context/LanguageContext";

function ProjectCard() {
  const { lang } = useLang(); // ✅ vi | en

  return (
    <>
      {ProjectList.map((item, index) => {
        // Ưu tiên Demo, không có thì dùng Github
        const primaryLink = item.demo_url || item.github_url;
        const isClickable = Boolean(primaryLink);

        // ✅ hỗ trợ cả string lẫn {vi, en}
        const title =
          typeof item.title === "object"
            ? item.title[lang] || item.title.vi
            : item.title;

        const description =
          typeof item.description === "object"
            ? item.description[lang] || item.description.vi
            : item.description;

        return (
          <ScrollAnimation animateIn="fadeInLeft" key={index}>
            {/* Nếu có link thì render Card dạng <a>, không thì render <div> */}
            <Card
              as={isClickable ? "a" : "div"}
              href={isClickable ? primaryLink : undefined}
              target={isClickable ? "_blank" : undefined}
              rel={isClickable ? "noopener noreferrer" : undefined}
              $clickable={isClickable}
            >
              <CardLeft>
                {/* frame scroll ảnh */}
                <div
                  className="img-frame"
                  onClick={(e) => e.preventDefault()}
                >
                  <img src={item.img} alt={title} />
                </div>
              </CardLeft>

              <CardRight>
                <h4>{title}</h4>
                <p>{description}</p>

                <TechCardContainer>
                  {(item.tech_stack || [])
                    .filter((t) => t && t.trim().length > 0)
                    .map((tech, i) => (
                      <TechCard key={i}>{tech}</TechCard>
                    ))}
                </TechCardContainer>

                <BtnGroup
                  // Nếu Card là <a> thì click nút đừng trigger click của Card nữa
                  onClick={(e) => e.stopPropagation()}
                >
                  {item.github_url && (
                    <a
                      className="btn SecondaryBtn btn-shadow"
                      href={item.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Github
                    </a>
                  )}

                  {item.demo_url && (
                    <a
                      className="btn PrimaryBtn btn-shadow"
                      href={item.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Demo ➜
                    </a>
                  )}
                </BtnGroup>
              </CardRight>
            </Card>
          </ScrollAnimation>
        );
      })}
    </>
  );
}

export default ProjectCard;
