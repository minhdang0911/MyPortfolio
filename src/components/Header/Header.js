import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
import { t } from "../../data/translations";
import { useLang } from "../../context/LanguageContext";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import { FaFilePdf } from "react-icons/fa";

const Header = ({ toggle }) => {
  const { lang } = useLang();
  const tt = t[lang];

  return (
    <div className="Container" style={{ padding: 0 }}>
      <Nav>
        <Logo to="/">
          <img src="/logo.png" alt="logo" />
        </Logo>

        <NavMenu>
          <NavLink className="menu-item" to="projects">
            {tt.nav.projects}
          </NavLink>
          <NavLink className="menu-item" to="about">
            {tt.nav.about}
          </NavLink>
          <NavLink className="menu-item" to="contact">
            {tt.nav.contact}
          </NavLink>
        </NavMenu>

        <NavBtn
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
          }}
        >
          {/* Language toggle */}
          <LanguageToggle />

          {/* CV button */}
          <a
            className="btn PrimaryBtn"
            href="https://www.linkedin.com/in/tran-minh-dang/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              height: 40,
              padding: "0 14px",
              display: "flex",
              alignItems: "center",
              gap: 8,
              borderRadius: 12,
            }}
          >
            {/* icon + text */}
            <span style={{ fontWeight: 700 }}>{tt.nav.resume}</span>
          </a>
        </NavBtn>

        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
