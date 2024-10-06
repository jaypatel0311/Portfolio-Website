import Typewriter from "typewriter-effect";
import profilePictureHero from "../../img/profile-picture.jpeg";
import "./HeroProfile.css";

import { useTheme } from "../../context/ThemeContext";

interface HeroProfileprops {}

export const HeroProfile = ({ ...props }: HeroProfileprops) => {
  const { activeTheme } = useTheme();
  return (
    <>
      <div className="hero-profile-container">
        <div className="hero-profile">
          <img src={profilePictureHero} alt="Jay Patel Profile" />
          <p>Hey there I'm,</p>
          <h1>Jay Patel</h1>
          <Typewriter
            options={{
              strings: [
                "Software Developer",
                "Tech Artisan",
                "Full-Stack Innovator",
                "Dev Maestro",
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <p className="hero-profile-tagline">
            What I excel at is creating software, websites and applications.
          </p>
          {/* <a
            href="https://limey.io/andrewbaisden"
            target="_blank"
            rel="noopener noreferrer"
            className={
              activeTheme === 'light'
                ? 'hero-profile-button-light-theme'
                : 'hero-profile-button-dark-theme'
            }
          >
            Find me on social media
          </a> */}
        </div>
      </div>
    </>
  );
};

export default HeroProfile;
