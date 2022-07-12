import { AppBar, colors, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const links = [
  { to: "dev-tools", desc: "Dev Tools" },
  { to: "testing", desc: "Testing" },
  { to: "common-bugs", desc: "Common Bugs" },
  { to: "about", desc: "About" },
];

function Navbar() {
  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{
        flexDirection: "row",
        padding: 1,
        background: colors.blueGrey[600],
        color: colors.blueGrey[50],
      }}
    >
      <MenuItem
        component={Link}
        to="/"
        sx={{ fontFamily: "Apple Chancery, cursive", fontSize: "22px" }}
      >
        Debugging the Web
      </MenuItem>
      {links.map(({ to, desc }) => (
        <MenuItem component={Link} to={to}>
          {desc}
        </MenuItem>
      ))}
    </AppBar>
  );
}

export default Navbar;
