import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  leftList: {
    display: "flex",
    flexDirection: "column",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  icon: {
    minWidth: 46,
  },
}));
