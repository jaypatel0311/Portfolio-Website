import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import GitHubIcon from "../../img/github-icon.svg";
import LinkedInIcon from "../../img/linkedin-icon.svg";
import "./ProjectCarousel.css";

import { useTheme } from "../../context/ThemeContext";

interface SocialMediaCarouselProps {}

export const ProjectCarousel = ({ ...props }: SocialMediaCarouselProps) => {
  const { activeTheme } = useTheme();

  return (
    <>
      <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        swipeable={true}
        emulateTouch={true}
        showStatus={false}
        showIndicators={false}
        thumbWidth={100}
        width={"100%"}
      >
        {/* Carousel Slide 1 */}
        <div
          className={
            activeTheme === "light"
              ? "social-media-carousel-slide-light-theme"
              : "social-media-carousel-slide-dark-theme"
          }
          style={{ padding: "5px", height: "auto" }}
        >
          <div className="projects-carousel-slide-content">
            <h1>B2B Finance Web based Application</h1>

            <ul>
              <li>
                <p>
                  <b>Description :</b> Built a specialized B2B finance
                  application aimed at streamlining financial operations between
                  businesses. The project demonstrates advanced knowledge of
                  financial systems and backend development.
                </p>
              </li>
              <li>
                <p>
                  <b>Technologies : </b> Next.js, NestJS, PostgreSQL,
                  MaterialUI, GraphQL
                </p>
              </li>
              <li>
                <p>
                  <b>Key Contributions :</b>
                  <ul>
                    <li>
                      Developed core financial transaction modules, improving
                      operational efficiency for B2B clients.
                    </li>
                    <li>
                      Built the backend architecture using NestJS and
                      PostgreSQL, ensuring high performance and scalability.
                    </li>
                    <li>
                      Collaborated closely with stakeholders to tailor the
                      platform to specific business needs.
                    </li>
                  </ul>
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* Carousel Slide 1 */}

        {/* Carousel Slide 2 */}
        <div
          className={
            activeTheme === "light"
              ? "social-media-carousel-slide-light-theme"
              : "social-media-carousel-slide-dark-theme"
          }
          style={{ padding: "5px", height: "auto" }}
        >
          <div className="projects-carousel-slide-content">
            <h1> Community Driven Domain Specific Job Portal</h1>

            <ul>
              <li>
                <p>
                  <b>Description :</b> Developed a platform offering job
                  listings, events, projects, and industry updates tailored to
                  user profiles. This project highlights skills in building
                  customizable user experiences and handling large-scale data.
                </p>
              </li>
              <li>
                <p>
                  <b>Technologies : </b> React.js, Bootstrap, .NET Core, MySQL
                </p>
              </li>
              <li>
                <p>
                  <b>Key Contributions :</b>
                  <ul>
                    <li>
                      Led the development of the job module, delivering
                      end-to-end functionalities for job postings and
                      applications.
                    </li>
                    <li>
                      Ensured a responsive and mobile-friendly design with
                      Bootstrap.
                    </li>
                    <li>
                      Implemented personalized content delivery based on user
                      profile data, improving user engagement.
                    </li>
                  </ul>
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* Carousel Slide 2 */}

        {/* Carousel Slide 3 */}
        <div
          className={
            activeTheme === "light"
              ? "social-media-carousel-slide-light-theme"
              : "social-media-carousel-slide-dark-theme"
          }
          style={{ padding: "5px", height: "auto" }}
        >
          <div className="projects-carousel-slide-content">
            <h1> Payment Solutions System</h1>

            <ul>
              <li>
                <p>
                  <b>Description :</b> Created an e-commerce payment solution
                  for platforms selling FSA/HSA eligible items. This system
                  allows merchants to offer refund capabilities and flexible
                  payment solutions to their customers.
                </p>
              </li>
              <li>
                <p>
                  <b>Technologies : </b> React.js, Material UI, .NET Core API,
                  MySQL
                </p>
              </li>
              <li>
                <p>
                  <b>Key Contributions :</b>
                  <ul>
                    <li>
                      Engineered refund functionalities for specific clients,
                      increasing merchant satisfaction.
                    </li>
                    <li>
                      Designed user interfaces with Material UI, making the
                      platform user-friendly and visually appealing.
                    </li>
                    <li>
                      Integrated the .NET Core API with MySQL to ensure
                      efficient and secure data handling.
                    </li>
                  </ul>
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* Carousel Slide 3 */}

        {/* Carousel Slide 3 */}
        <div
          className={
            activeTheme === "light"
              ? "social-media-carousel-slide-light-theme"
              : "social-media-carousel-slide-dark-theme"
          }
          style={{ padding: "5px", height: "auto" }}
        >
          <div className="projects-carousel-slide-content">
            <h1>QUIZEE Online Multiplayer Quiz Game</h1>

            <ul>
              <li>
                <p>
                  <b>Description :</b> Developed a web-based multiplayer quiz
                  game that allows users to compete in real-time. The game
                  includes a built-in chat function and a private room feature,
                  enabling friends to play together.
                </p>
              </li>
              <li>
                <p>
                  <b>Technologies : </b> React.js, Firebase, Ant Design
                </p>
              </li>
              <li>
                <p>
                  <b>Key Contributions :</b>
                  <ul>
                    <li>
                      Implemented real-time communication with Firebase,
                      improving player engagement.
                    </li>
                    <li>
                      Designed an intuitive user interface using Ant Design,
                      enhancing the overall user experience.
                    </li>
                    <li>
                      Developed private room functionality for custom games,
                      adding a personalized touch.
                    </li>
                  </ul>
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* Carousel Slide 3 */}
      </Carousel>
    </>
  );
};

export default ProjectCarousel;
