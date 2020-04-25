import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
//import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  rootq: {
    display: "inline",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  bio: {
    textAlign: "left",
  },
}));

export const Biography = () => {
  const classes = useStyles();
  const [moreRevealed, setMoreRevealed] = useState(false);
  return (
    <div className={classes.root}>
      <h1>Biography</h1>
      <p className={classes.bio}>
        I've been a Front-end Web Developer for{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="KevinBrockwayResume.pdf"
        >
          many years
        </a>
        , and I enjoy creating clean, beautiful web applications that perform
        well, and provide a satisfying user experience. HTML, JavaScript, and
        CSS are the basic ingredients of what I work with, although I've done a
        lot of work with jQuery and Angular. In the past couple of years,
        though, I've been using React, and in my opinion, modern React (with
        hooks) is brilliant, so that's what I am using for these personal
        projects.{" "}
        {!moreRevealed && (
          <span className="linkSpan" onClick={() => setMoreRevealed(true)}>
            (more...)
          </span>
        )}
      </p>
      {moreRevealed && (
        <p className={classes.bio}>
          Also, if you're interested in photography, I've got a SquareSpace site
          that I use to manage{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://kevinbrockwayphotography.com"
          >
            my photography portfolio
          </a>
          . I didn't write the web code for that, obviously.
        </p>
      )}
    </div>
  );
};
