import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";
import "./css/style.css";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { render } from "@testing-library/react";
import axios from "axios";
import avatar from "./img/avatar.png";
import vender from "./img/vender.png";
import customer from "./img/customer.png";
import account from "./img/account.png";
import settings from "./img/settings.png";

export default function SideBar() {
  const [image, setImage] = useState(avatar);
  const [isLoding, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  useEffect(() => {
    function getImage() {
      axios
        .get(
          "http://localhost:8080/venders/" +
            window.sessionStorage.getItem("id"),
        )
        .then((resp) => {
          if (resp.data != null) {
            setName(resp.data.username);
          } else {
            alert("Error..!");
          }
        });

      axios
        .get(
          "http://localhost:8080/profiles/" +
            window.sessionStorage.getItem("id"),
        )
        .then((resp) => {
          if (resp.data != null) {
            setImage(resp.data.photo);
            setIsLoading(false);
          } else {
            alert("Error..!");
          }
        })
        .catch((err) => {
          setImage(avatar);
          setIsLoading(false);
        });
    }
    //  console.log(image);
    getImage();
  }, []);

  if (isLoding === true) {
    return <div>Loading...</div>;
  } else {
    if (window.sessionStorage.getItem("role") === "A") {
      return (
        <div style={{ height: "100%", position: "fixed" }}>
          <ProSidebar>
            <Menu
              iconShape="square"
              style={{
                paddingLeft: "10%",
                backgroundColor: "#17a2b8",
              }}
            >
              <br />
              <br />
              <img
                src={image}
                style={{ width: 150, height: 150, borderRadius: "50%" }}
              />
              <br />
              <br />
              <p style={{ color: "black", paddingLeft: "20%", fontSize: 22 }}>
                {name}
              </p>
              <img src="" />
              <MenuItem iconShape={AccountCircleIcon}>
                <a class="text-light" href="venders">
                  <img src={vender} /> Vender Panel
                </a>
              </MenuItem>
              <MenuItem iconShape={AccountCircleIcon}>
                <a class="text-light" href="customers">
                  <img src={customer} /> Customer Panel
                </a>
              </MenuItem>
              <MenuItem iconShape={AccountCircleIcon}>
                <a class="text-light" href="myaccount">
                  <img src={account} /> My Account
                </a>
              </MenuItem>

              <MenuItem iconShape={AccountCircleIcon}>
                <a class="text-light" href="settings">
                  <img src={settings} /> Settings
                </a>
              </MenuItem>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Menu>
          </ProSidebar>
        </div>
      );
    } else if (window.sessionStorage.getItem("role") === "V") {
      return (
        <div
          style={{
            position: "fixed",
            height: "100%",
            width: "20%",
            backgroundColor: "#17a2b8",
          }}
        >
          <ProSidebar>
            <Menu
              iconShape="square"
              style={{
                paddingLeft: "10%",
                backgroundColor: "#17a2b8",
              }}
            >
              <br />
              <img
                src={image}
                style={{ width: 150, height: 150, borderRadius: "50%" }}
              />
              <br />
              <br />
              <p style={{ color: "black", paddingLeft: "20%", fontSize: 22 }}>
                {name}
              </p>

              <MenuItem iconShape={AccountCircleIcon}>
                <a class="text-light" href="createad">
                  <img src={vender} /> Create ad
                </a>
              </MenuItem>

              <MenuItem iconShape={AccountCircleIcon}>
                <a class="text-light" href="myaccount">
                  <img src={account} /> My Account
                </a>
              </MenuItem>

              <MenuItem iconShape={AccountCircleIcon}>
                <a class="text-light" href="settings">
                  <img src={settings} /> Settings
                </a>
              </MenuItem>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Menu>
          </ProSidebar>
        </div>
      );
    } else if (window.sessionStorage.getItem("role") === "C") {
      return (
        <div style={{ height: "100%", width: "20%", position: "fixed" }}>
          <ProSidebar>
            <Menu
              iconShape="square"
              style={{
                paddingLeft: "10%",
                backgroundColor: "#17a2b8",
              }}
            >
              <br />
              <br />
              <img
                src={image}
                style={{ width: 150, height: 150, borderRadius: "50%" }}
              />
              <br />
              <br />
              <p style={{ color: "black", paddingLeft: "20%", fontSize: 22 }}>
                {name}
              </p>

              <MenuItem iconShape={AccountCircleIcon}>
                <a class="text-light" href="myaccount">
                  <img src={account} /> My Account
                </a>
              </MenuItem>

              <MenuItem iconShape={AccountCircleIcon}>
                <a class="text-light" href="settings">
                  <img src={settings} /> Settings
                </a>
              </MenuItem>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Menu>
          </ProSidebar>
        </div>
      );
    } else {
    }
  }
}
