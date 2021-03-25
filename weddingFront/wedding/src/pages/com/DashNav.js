import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import SettingsApplicationsOutlinedIcon from "@material-ui/icons/SettingsApplicationsOutlined";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";

import "./css/style.css";

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

export default function DashNav() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  //   const handleChange = (event) => {
  //     setAuth(event.target.checked);
  //   };
  let history = useHistory();
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    history.push("logout");
  };
  const handleSettings = () => {
    history.push("settings");
  };
  const handleDashboard = () => {
    history.push("dashboard");
  };
  return (
    <div>
      <div className={classes.root}>
        <FormGroup></FormGroup>
        <AppBar position="static">
          <Toolbar style={{ backgroundColor: "#1f1f1f" }}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            ></IconButton>
            <Typography variant="h6" className={classes.title}>
              Dashboard
            </Typography>
            {auth && (
              <div>
                <Link
                  to={{
                    pathname: "/pages/feed",
                  }}
                  style={{ color: "white", MozUserSelect: "-moz-initial" }}
                >
                  {" "}
                  <DynamicFeedIcon />
                </Link>
                &nbsp;&nbsp;
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleDashboard}>
                    <DashboardOutlinedIcon /> &nbsp; Dashboard
                  </MenuItem>
                  <MenuItem onClick={handleSettings}>
                    <SettingsApplicationsOutlinedIcon /> &nbsp; Setting
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <ExitToAppOutlinedIcon /> &nbsp; Logout
                  </MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
