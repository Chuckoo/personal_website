import uniqid from "uniqid";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import "./ProjectContainer.css";

const ProjectContainer = ({ project }) => (
  <div className="project">
    <h2 className="project__name">{project.name}</h2>
    <hr className="project__divider" />
    <p className="project__description">{project.description}</p>
    <hr className="project__divider" />
    {project.stack && (
      <ul className="project__stack">
        {project.stack.map((item) => (
          <li
            key={uniqid()}
            className="project__stack-item stack__btn stack__btn--plain "
          >
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label="source code"
        className="link link--icon"
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label="live preview"
        className="link link--icon"
      >
        <LaunchIcon />
      </a>
    )}
  </div>
);

export default ProjectContainer;
