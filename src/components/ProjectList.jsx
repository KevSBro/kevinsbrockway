import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Project } from "./Project";

const useStyles = makeStyles((theme) => ({
  roota: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const projects = [
  {
    id: "p1",
    type: "Personal Project",
    name: "Camera/Lens Combinations",
    purpose: "Sensor size changes effective focal length",
    description: (
      <div>
        <p>
          This tool uses 3 lists (cameras, lenses, and teleconverters) and
          allows the users to combine them to get the effective focal length of
          the lenses using crop sensor cameras. The list items can be modified,
          although, right now, all changes are session based. This project is
          still being developed.
        </p>
        <ul>
          <li>React</li>
          <li>Material UI</li>
          <li>Hosted on AWS S3</li>
        </ul>
      </div>
    ),
    link_git: "https://github.com/KevSBro/camera-lens-combo",
    link_web: "https://cameralenscombo.s3.us-west-2.amazonaws.com/index.html",
    image: "",
  },
  {
    id: "p2",
    type: "Personal Project",
    name: "This Site",
    purpose: "My personal web site.",
    description: (
      <div>
        <p>
          Since most of the code that I've written was done for Vulcan, it is
          proprietary and not publicly available. So I decided to develop some
          basic web sites (using React with Material Design) for demonstration,
          and this is the index of all that work.
        </p>
        <ul>
          <li>React</li>
          <li>Material UI</li>
          <li>Hosted on AWS S3</li>
        </ul>
      </div>
    ),
    link_git: "https://github.com/KevSBro/kevinsbrockway",
    link_web: null,
    image: "",
  },
  {
    id: "p2",
    type: "Professional Project",
    name: "Allen Coral Atlas",
    purpose: "A publicly available website that I helped develop.",
    description: (
      <div style={{ textAlign: "left" }}>
        I was one of several developers working on the Allen Coral Atlas, so not
        everything that you see there was developed by me, but I did contribute
        some significant features for the (React) project:
        <ul>
          <li>
            Developed several new components, including the new
            registration/sign-in forms which users will use to create an
            account, then save AOI in a private, sharable list (a key product
            requirement).
          </li>
          <li>
            Improved the Atlas’ drawing tools using the MapBox API, including
            cursors, tooltips and other visual cues, which enabled easier AOI
            creation, the main product feature.
          </li>
          <li>Designed and developed the Mapbox search tool.</li>
        </ul>
      </div>
    ),
    link_git: null,
    link_web: "https://allencoralatlas.org",
    image: "",
  },
];

export const ProjectList = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Projects</h1>
      <div>
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </div>
  );
};
