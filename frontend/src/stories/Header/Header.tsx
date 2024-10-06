import React from "react";
import Logo from "../../img/profile-picture.jpeg";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Header.css";

interface Headerprops {
  homeRef: any;
  aboutRef: any;
  scoialMediaRef: any;
  skillsRef: any;
  contactRef: any;
  activeTheme: any;
}

export const Header = ({
  activeTheme,
  aboutRef,
  scoialMediaRef,
  skillsRef,
  contactRef,
  homeRef,
  ...props
}: Headerprops) => {
  const handleScroll = (ref: any): void => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
    console.log("change page");
  };

  return (
    <>
      <div className="header-desktop">
        <section>
          <div>
            {/* <a
              href="#home"
              rel="noopener noreferrer"
              onClick={() => {
                handleScroll(homeRef.current);
              }}
            >
              <img src={Logo} alt="Jay Patel Logo" />
            </a> */}
          </div>
          <div className="navigation">
            <nav>
              <a
                href="#home"
                rel="noopener noreferrer"
                onClick={() => {
                  handleScroll(homeRef.current);
                }}
              >
                Home
              </a>
              <a
                href="#about"
                rel="noopener noreferrer"
                onClick={() => {
                  handleScroll(aboutRef.current);
                }}
              >
                About
              </a>
              <a
                href="#socialmedia"
                rel="noopener noreferrer"
                onClick={() => {
                  handleScroll(scoialMediaRef.current);
                }}
              >
                Social Media
              </a>
              <a
                href="#skills"
                rel="noopener noreferrer"
                onClick={() => {
                  handleScroll(skillsRef.current);
                }}
              >
                Skills
              </a>
              <a
                href="#contact"
                rel="noopener noreferrer"
                onClick={() => {
                  handleScroll(contactRef.current);
                }}
              >
                Contact
              </a>
            </nav>
            <div>
              <ThemeToggle />
            </div>
          </div>
        </section>
      </div>
      <div
        className={` ${
          activeTheme === "light" ? "header-title-light " : "header-title-dark"
        } header-mobile-no-menu`}
        style={{ background: activeTheme === "light" ? "#22aae7" : "" }}
      >
        <div className="logo-theme-toggle">
          <a
            href="#home"
            rel="noopener noreferrer"
            onClick={() => {
              handleScroll(homeRef.current);
            }}
          >
            <svg
              stroke="#ffffff"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212"
              ></path>
              <path
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M480 256 266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"
              ></path>
            </svg>
            {/* <img src={Logo} alt="Jay Patel Logo" /> */}
          </a>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </>
  );
};

export default Header;
