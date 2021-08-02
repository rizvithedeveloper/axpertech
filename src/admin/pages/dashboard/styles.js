import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 240;

export default makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    height: `calc(100% - 64px)`,
    marginTop: 64,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
