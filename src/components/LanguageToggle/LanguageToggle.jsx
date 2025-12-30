import React from "react";
import styled from "@emotion/styled";
import { useLang } from "../../context/LanguageContext";
import VNFlag from "../../assets/img/vietnam.png";
import UKFlag from "../../assets/img/united-kingdom.png";

const Toggle = styled.button`
  height: 40px;
  padding: 6px 10px;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 12px;
  background: rgba(17, 24, 39, 0.65);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: rgba(255,255,255,0.9);
  transition: 0.2s ease;
  box-shadow: 0 6px 18px rgba(0,0,0,0.28);

  &:hover {
    border-color: rgba(255,255,255,0.22);
    transform: translateY(-1px);
  }
`;

const Pill = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255,255,255,0.06);
  border-radius: 999px;
  padding: 6px 8px;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  border-radius: 999px;
  opacity: ${({ active }) => (active ? 1 : 0.45)};
  background: ${({ active }) => (active ? "rgba(255,255,255,0.10)" : "transparent")};
  transition: 0.2s ease;
`;

const Flag = styled.img`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
`;

const Text = styled.span`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.3px;
`;

function LanguageToggle() {
  const { lang, toggleLang } = useLang();
  const isVI = lang === "vi";

  return (
    <Toggle type="button" onClick={toggleLang} aria-label="Toggle language" title="Switch language">
      <Pill>
        <Option active={isVI}>
          <Flag src={VNFlag} alt="VI" />
          <Text>VI</Text>
        </Option>

        <Option active={!isVI}>
          <Flag src={UKFlag} alt="EN" />
          <Text>EN</Text>
        </Option>
      </Pill>
    </Toggle>
  );
}

export default LanguageToggle;
