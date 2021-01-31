import React, { PropsWithChildren } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

export default BottomAppBar;

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    padding: theme.spacing(1),
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
}));

export interface BottomAppBarProps {}

export function BottomAppBar(props: PropsWithChildren<BottomAppBarProps>) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.paper}>
        {props.children}
      </Paper>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          {/* <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton> */}
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <VpnKeyIcon />
          </IconButton>
          {/* <Fab color="secondary" aria-label="add" className={classes.fabButton}>
            <AddIcon />
          </Fab> */}
          <div className={classes.grow} />
          {/* <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <MoreIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
