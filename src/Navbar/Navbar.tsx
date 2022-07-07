import { AppBar, colors, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const links = [
  { to: "/", desc: "Debugging" },
  { to: "console", desc: "Console" },
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
      {links.map(({ to, desc }) => (
        <MenuItem component={Link} to={to}>
          {desc}
        </MenuItem>
      ))}
    </AppBar>
  );
}

export default Navbar;
