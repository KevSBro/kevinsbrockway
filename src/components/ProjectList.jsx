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
    purpose: "A fun way to practice using modern React code.",
    description:
      "This tool uses 3 lists (cameras, lenses, and teleconverters) and allows the users to combine them to get the effective focal length of the lenses using crop sensor cameras. The list items can be modified, although all changes are session based.",
    link_git: "https://github.com/KevSBro/camera-lens-combo",
    link_web: "https://cameralenscombo.s3.us-west-2.amazonaws.com/index.html",
    image: "",
  },
  {
    id: "p2",
    type: "Personal Project",
    name: "This Site",
    purpose: "My personal web site.",
    description:
      "Since most of the code that I've written was done for Vulcan, it is proprietary and not available to the public. So I decided to write some simple web tools using React for demonstration, and this is the index of all that work.",
    link_git: "https://github.com/KevSBro/kevinsbrockway",
    link_web: null,
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
