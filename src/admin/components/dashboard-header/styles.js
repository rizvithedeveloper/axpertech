import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `100%`,
      backgroundColor: `#212631`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  profileImg: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  Toolbar: {
    justifyContent: "space-between",
  },
  MenuBox: {
    top: 64,
  },
}));
