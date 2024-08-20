import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MyResume from "../../Vivek_Venkateshprasad_Resume.pdf";
import { about } from "../../portfolio";
import "./About.css";

const About = () => {
  const { name, role, description, resume, social } = about;

  return (
    <>
      <div className="container">
        <div className="about text">
          {name && (
            <h1>
              Hi, I am <span className="about__name">{name}.</span>
            </h1>
          )}

          {role && (
            <h5 className="about__role">
              {role}, Expert <s>googler</s> Coder, Coffee Connoisseur{" "}
            </h5>
          )}
          <p className="about__desc">{description}</p>

          <div className="about__contact center">
            {resume && (
              <a href={MyResume} download="Vivek_V_Resume.pdf">
                <span type="button" className="btn btn--outline">
                  Resume
                </span>
              </a>
            )}

            {social && (
              <>
                {social.github && (
                  <a
                    href={social.github}
                    aria-label="github"
                    className="link link--icon"
                  >
                    <GitHubIcon />
                  </a>
                )}

                {social.linkedin && (
                  <a
                    href={social.linkedin}
                    aria-label="linkedin"
                    className="link link--icon"
                  >
                    <LinkedInIcon />
                  </a>
                )}
              </>
            )}
          </div>
        </div>
        <div className="image">
          <img src="..\src\assets\vivek.jpg"></img>
        </div>
      </div>
    </>
  );
};

export default About;
