/** React */
import React from "react";
import PropTypes from "prop-types";

/** MUI */
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import LabelIcon from "@material-ui/icons/Label";

/** Local */
import "../styles.css";
import ListaCards from "./ListaCards";

/** Styles */
const drawerWidth = 240;
const styles = theme => ({
  root: {
    display: "flex"
  },
  menuButton: {
    marginRight: 10
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  toolbar: theme.mixins.toolbar,
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  card: {
    marginTop: 15
  }
});

function ClippedDrawer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />

      {/* AppBar */}
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            APP
          </Typography>

          <IconButton color="inherit" className={classes.user}>
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />

        {/* List */}
        <ListSubheader>Processos</ListSubheader>
        <List>
          <ListItem button>
            <ListItemIcon>
              <BookmarksIcon />
            </ListItemIcon>
            <ListItemText primary="Todos Processos" />
            <Badge badgeContent={5} />
          </ListItem>
        </List>

        <ListSubheader>Etiquetas</ListSubheader>
        <List>
          <ListItem button>
            <ListItemIcon>
              <LabelIcon style={{ color: "#FF7537" }} />
            </ListItemIcon>
            <ListItemText primary="Energia Elétrica" />
            <Badge badgeContent={1} />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <LabelIcon style={{ color: "#20BBD3" }} />
            </ListItemIcon>
            <ListItemText primary="Possessória" />
            <Badge badgeContent={1} />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <LabelIcon />
            </ListItemIcon>
            <ListItemText primary="Criar Etiqueta" />
          </ListItem>
        </List>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.card}>
          <ListaCards />
        </div>
      </main>
    </div>
  );
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ClippedDrawer);
