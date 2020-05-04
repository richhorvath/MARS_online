import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar({
  onBuild,
  onExecute,
  onNext,
  onBack,
  onRestart,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Pluto Online
          </Typography>
          <Button onClick={onBuild}>Build</Button>
          <Button onClick={onExecute}>Execute</Button>
          <Button onClick={onNext}>Next</Button>
          <Button onClick={onBack}>Back</Button>
          <Button onClick={onRestart}>Restart</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
