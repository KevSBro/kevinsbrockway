import React, { useState } from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Fade from "@material-ui/core/Fade";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
  },
}));

// , { useContext }
// import { GlobalContext } from "../context/GlobalState";
//<img src="./favicon.ico" width="24" height="24" alt="ksb" />

export const Navbar = () => {
  // const { titles } = useContext(GlobalContext);
  // {titles.currentPageTitle}
  const classes = useStyles();
  const mailTo = () => {
    window.location = "mailto:gkevinb@gmail.com";
  };
  const goToResume = () => {
    window.open("KevinBrockwayResume.pdf");
  };
  // The menu for selecting actions uses a local state
  const [anchorEl, setAnchorEl] = useState(null);
  // handleClick_openActions is used to open the list of actions
  const handleClick_openActions = (event) => {
    setAnchorEl(event.currentTarget);
  };
  // handleClick_closeActions is used to close the list of actions
  const handleClick_closeActions = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick_openActions}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClick_closeActions}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={goToResume}>R&eacute;sum&eacute;</MenuItem>
            <MenuItem onClick={mailTo}>Contact Me</MenuItem>
          </Menu>
          <Typography variant="h6" className={classes.title}>
            Kevin S. Brockway
          </Typography>
          <Button onClick={mailTo} color="inherit">
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
