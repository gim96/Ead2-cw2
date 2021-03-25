import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./css/style.css";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

import axios from "axios";
import avatar from "./img/avatar.png";

export default function FeedSideBar() {
  const [image, setImage] = useState(avatar);
  const [isLoding, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  useEffect(() => {
    function getImage() {
      axios
        .get("http://localhost:8080/venders/" + localStorage.getItem("id"))
        .then((resp) => {
          if (resp.data != null) {
            setName(resp.data.username);
          } else {
            alert("Error..!");
          }
        });

      axios
        .get("http://localhost:8080/profiles/" + localStorage.getItem("id"))
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

  const category = (cat) => {
    window.location.reload(true);
  };

  if (isLoding === true) {
    return <div>Loading...</div>;
  } else {
    return (
      <div style={{ position: "fixed" }}>
        <ProSidebar>
          <Menu
            iconShape="square"
            style={{
              backgroundColor: "#17a2b8",
            }}
          >
            <br />
            <p
              style={{
                color: "black",

                fontSize: 22,
                textAlign: "center",
              }}
            >
              Categories
            </p>

            <MenuItem iconShape={AccountCircleIcon}>
              <center>
                <Link
                  to={{
                    pathname: "/pages/feed",
                    state: { data: "decoration" },
                  }}
                >
                  <button
                    type="button"
                    style={{ backgroundColor: "#17a2b8", fontSize: 12 }}
                    class="btn btn-primary"
                    onClick={() => category("decoration")}
                  >
                    Decoration
                  </button>
                </Link>
              </center>
            </MenuItem>

            <MenuItem iconShape={AccountCircleIcon}>
              <center>
                <Link
                  to={{
                    pathname: "/pages/feed",
                    state: { data: "catering" },
                  }}
                >
                  <button
                    type="button"
                    style={{ backgroundColor: "#17a2b8", fontSize: 12 }}
                    class="btn btn-primary"
                    //   onClick={() => category("catering")}
                  >
                    Catering
                  </button>{" "}
                </Link>
              </center>
            </MenuItem>

            <MenuItem iconShape={AccountCircleIcon}>
              <center>
                <Link
                  to={{
                    pathname: "/pages/feed",
                    state: { data: "photography" },
                  }}
                >
                  <button
                    type="button"
                    style={{ backgroundColor: "#17a2b8", fontSize: 12 }}
                    class="btn btn-primary"
                    //   onClick={() => category("photography")}
                  >
                    Photography
                  </button>
                </Link>
              </center>
            </MenuItem>
            <MenuItem iconShape={AccountCircleIcon}>
              <center>
                <Link
                  to={{
                    pathname: "/pages/feed",
                    state: { data: "entertaining" },
                  }}
                >
                  <button
                    type="button"
                    style={{ backgroundColor: "#17a2b8", fontSize: 12 }}
                    class="btn btn-primary"
                    //   onClick={() => category("entertaining ")}
                  >
                    Entertaining
                  </button>
                </Link>
              </center>
            </MenuItem>

            <MenuItem iconShape={AccountCircleIcon}>
              <center>
                <Link
                  to={{
                    pathname: "/pages/feed",
                    state: { data: "venue" },
                  }}
                >
                  <button
                    type="button"
                    style={{ backgroundColor: "#17a2b8", fontSize: 12 }}
                    class="btn btn-primary"
                    //   onClick={() => category("venue")}
                  >
                    Venue
                  </button>
                </Link>
              </center>
            </MenuItem>
            <MenuItem iconShape={AccountCircleIcon}>
              <center>
                <Link
                  to={{
                    pathname: "/pages/feed",
                    state: { data: "dressing" },
                  }}
                >
                  <button
                    type="button"
                    style={{ backgroundColor: "#17a2b8", fontSize: 12 }}
                    class="btn btn-primary"
                    onClick={() => category("dressing ")}
                  >
                    Dressing
                  </button>
                </Link>
              </center>
            </MenuItem>
            <MenuItem iconShape={AccountCircleIcon}>
              <center>
                <Link
                  to={{
                    pathname: "/pages/feed",
                    state: { data: "cards" },
                  }}
                >
                  <button
                    type="button"
                    style={{ backgroundColor: "#17a2b8", fontSize: 12 }}
                    class="btn btn-primary"
                    //   onClick={() => category("cards ")}
                  >
                    Cards
                  </button>
                </Link>
              </center>
            </MenuItem>
            <MenuItem iconShape={AccountCircleIcon}>
              <center>
                <Link
                  to={{
                    pathname: "/pages/feed",
                    state: { data: "drinks" },
                  }}
                >
                  <button
                    type="button"
                    style={{ backgroundColor: "#17a2b8", fontSize: 12 }}
                    class="btn btn-primary"
                    //   onClick={() => category("drinks ")}
                  >
                    Drinks
                  </button>
                </Link>
              </center>
            </MenuItem>
            <MenuItem iconShape={AccountCircleIcon}>
              <center>
                <Link
                  to={{
                    pathname: "/pages/feed",
                    state: { data: "cakes" },
                  }}
                >
                  <button
                    type="button"
                    style={{ backgroundColor: "#17a2b8", fontSize: 12 }}
                    class="btn btn-primary"
                    //   onClick={() => category("cakes ")}
                  >
                    Cakes
                  </button>
                </Link>
              </center>
            </MenuItem>
            <MenuItem iconShape={AccountCircleIcon}>
              <center>
                <Link
                  to={{
                    pathname: "/pages/feed",
                    state: { data: "transport" },
                  }}
                >
                  <button
                    type="button"
                    style={{ backgroundColor: "#17a2b8", fontSize: 12 }}
                    class="btn btn-primary"
                    //   onClick={() => category("transport ")}
                  >
                    Transport
                  </button>
                </Link>
              </center>
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
  }
}
