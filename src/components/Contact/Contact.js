import React, { useState } from "react";
import { ContactWrapper, Email } from "./ContactElements";
import { MdContentCopy } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import ScrollAnimation from "react-animate-on-scroll";

import { useLang } from "../../context/LanguageContext";

function Contact() {
  const { lang } = useLang();
  const isVI = lang === "vi";

  const EMAIL = "minhdang9a8@gmail.com";

  const [showTooltip, setShowTooltip] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 700);
    } catch (err) {
      // fallback nhẹ nếu clipboard bị chặn
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 700);
    }
  };

  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">
          {isVI ? "Liên hệ" : "Get In Touch"}
        </div>

        <ScrollAnimation animateIn="fadeIn">
          <div className="BigCard">
            <Email>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "20px",
                  rowGap: "10px",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <span>{EMAIL}</span>

                <Tooltip
                  PopperProps={{ disablePortal: true }}
                  open={showTooltip}
                  onClose={() => setShowTooltip(false)}
                  title={isVI ? "Đã copy!" : "Copied!"}
                  TransitionComponent={Zoom}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="bottom"
                >
                  <IconButton onClick={copyToClipboard}>
                    <MdContentCopy
                      size={25}
                      style={{ cursor: "pointer", color: "#151418" }}
                    />
                  </IconButton>
                </Tooltip>
              </div>

              <a
                className="btn PrimaryBtn btn-shadow"
                href={`mailto:${EMAIL}`}
                rel="noopener noreferrer"
              >
                {isVI ? "Gửi Email" : "Send Email"}
              </a>
            </Email>
          </div>
        </ScrollAnimation>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
