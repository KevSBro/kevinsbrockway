import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    marginBottom: 10,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    opacity: 0.5,
  },
  pos: {
    marginBottom: 12,
  },
  cardActions: {
    backgroundColor: "#f9f9f9",
  },
});

export const Project = ({ project }) => {
  const classes = useStyles();
  //const bull = <span className={classes.bullet}>•</span>;
  const gotoSite = (site) => {
    //console.log(site);
    window.open(site);
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {project.type}
        </Typography>
        <Typography color="textPrimary" variant="h5" component="h2">
          <a href={project.link_web}>{project.name}</a>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {project.purpose}
        </Typography>
        <Typography variant="body2" component="p" style={{ textAlign: "left" }}>
          {project.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {project.link_git && (
          <Button
            color="primary"
            size="small"
            onClick={() => {
              gotoSite(project.link_git);
            }}
          >
            <GitHubIcon />
          </Button>
        )}
        {project.link_web && (
          <Button
            color="primary"
            size="small"
            onClick={() => {
              gotoSite(project.link_web);
            }}
          >
            Website
            <LaunchIcon />
          </Button>
        )}
      </CardActions>
    </Card>
  );
};
