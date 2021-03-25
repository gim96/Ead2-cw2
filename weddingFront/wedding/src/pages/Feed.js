import { Component } from "react";
import DashNav from "./com/DashNav";
import FeedSideBar from "./com/FeedSideBar";
import { BrowserRouter as Router, Link } from "react-router-dom";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

import axios from "axios";
//import avatar from "./img/avatar.png";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      isLoading: true,
      cat: "",
      photo: "",
      deco: "",
      catering: "",
      photography: "",
      enter: "",
      venue: "",
      dressing: "",
      cards: "",
      drinks: "",
      cake: "",
      trans: "",
    };
  }

  componentDidMount() {
    // const data = this.props.location.state;
    // console.log(data.data);
    if (this.state.cat === "") {
      axios.get("http://localhost:8080/posts").then((resp) => {
        if (resp.data != null) {
          // alert("File uploaded.!");
          // window.location.reload(false);
          this.setState({ post: resp.data, isLoading: false });
          console.log(resp.data);
        } else {
          alert("Error..!");
        }
      });
    }
  }

  category = (category) => {
    // alert(category);
    this.setState({ cat: "1" });
    if (category === "decoration") {
      axios.get("http://localhost:8080/posts/decoration").then((resp) => {
        if (resp.data != null) {
          // alert("File uploaded.!");
          // window.location.reload(false);
          this.setState({ post: resp.data, isLoading: false });
          // console.log(resp.data);
        } else {
          alert("Error..!");
        }
      });
    } else if (category === "catering") {
      axios.get("http://localhost:8080/posts/catering").then((resp) => {
        if (resp.data != null) {
          // alert("File uploaded.!");
          // window.location.reload(false);
          this.setState({ post: resp.data, isLoading: false });
          // console.log(resp.data);
        } else {
          alert("Error..!");
        }
      });
    } else if (category === "photography") {
      axios.get("http://localhost:8080/posts/photography").then((resp) => {
        if (resp.data != null) {
          // alert("File uploaded.!");
          // window.location.reload(false);
          this.setState({ post: resp.data, isLoading: false });
          // console.log(resp.data);
        } else {
          alert("Error..!");
        }
      });
    } else if (category === "entertaining") {
      axios.get("http://localhost:8080/posts/entertaining").then((resp) => {
        if (resp.data != null) {
          // alert("File uploaded.!");
          // window.location.reload(false);
          this.setState({ post: resp.data, isLoading: false });
          // console.log(resp.data);
        } else {
          alert("Error..!");
        }
      });
    } else if (category === "venue") {
      axios.get("http://localhost:8080/posts/venue").then((resp) => {
        if (resp.data != null) {
          // alert("File uploaded.!");
          // window.location.reload(false);
          this.setState({ post: resp.data, isLoading: false });
          // console.log(resp.data);
        } else {
          alert("Error..!");
        }
      });
    } else if (category === "dressing") {
      axios.get("http://localhost:8080/posts/dressing").then((resp) => {
        if (resp.data != null) {
          // alert("File uploaded.!");
          // window.location.reload(false);
          this.setState({ post: resp.data, isLoading: false });
          // console.log(resp.data);
        } else {
          alert("Error..!");
        }
      });
    } else if (category === "cards") {
      axios.get("http://localhost:8080/posts/cards").then((resp) => {
        if (resp.data != null) {
          // alert("File uploaded.!");
          // window.location.reload(false);
          this.setState({ post: resp.data, isLoading: false });
          // console.log(resp.data);
        } else {
          alert("Error..!");
        }
      });
    } else if (category === "drinks") {
      axios.get("http://localhost:8080/posts/drinks").then((resp) => {
        if (resp.data != null) {
          // alert("File uploaded.!");
          // window.location.reload(false);
          this.setState({ post: resp.data, isLoading: false });
          //console.log(resp.data);
        } else {
          alert("Error..!");
        }
      });
    } else if (category === "cakes") {
      axios.get("http://localhost:8080/posts/cakes").then((resp) => {
        if (resp.data != null) {
          // alert("File uploaded.!");
          // window.location.reload(false);
          this.setState({ post: resp.data, isLoading: false });
          // console.log(resp.data);
        } else {
          alert("Error..!");
        }
      });
    } else if (category === "transport") {
      axios.get("http://localhost:8080/posts/transport").then((resp) => {
        if (resp.data != null) {
          // alert("File uploaded.!");
          // window.location.reload(false);
          this.setState({ post: resp.data, isLoading: false });
          //console.log(resp.data);
        } else {
          alert("Error..!");
        }
      });
    }
  };

  render() {
    if (this.state.isLoading === true) {
      return <div>Loading .....</div>;
    } else {
      return (
        <div>
          <div>
            <table width="100%" border="0">
              <tr>
                <td colspan="2">
                  <DashNav />
                </td>
              </tr>
              <tr>
                <td width="25%" style={{ verticalAlign: "top" }}>
                  {/* <FeedSideBar /> */}

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
                            <button
                              type="button"
                              style={{
                                backgroundColor: "#17a2b8",
                                fontSize: 12,
                              }}
                              class="btn btn-primary"
                              onClick={() => this.category("decoration")}
                            >
                              Decoration
                            </button>
                          </center>
                        </MenuItem>

                        <MenuItem iconShape={AccountCircleIcon}>
                          <center>
                            <button
                              type="button"
                              style={{
                                backgroundColor: "#17a2b8",
                                fontSize: 12,
                              }}
                              class="btn btn-primary"
                              onClick={() => this.category("catering")}
                            >
                              Catering
                            </button>{" "}
                          </center>
                        </MenuItem>

                        <MenuItem iconShape={AccountCircleIcon}>
                          <center>
                            <button
                              type="button"
                              style={{
                                backgroundColor: "#17a2b8",
                                fontSize: 12,
                              }}
                              class="btn btn-primary"
                              onClick={() => this.category("photography")}
                            >
                              Photography
                            </button>
                          </center>
                        </MenuItem>
                        <MenuItem iconShape={AccountCircleIcon}>
                          <center>
                            <button
                              type="button"
                              style={{
                                backgroundColor: "#17a2b8",
                                fontSize: 12,
                              }}
                              class="btn btn-primary"
                              onClick={() => this.category("entertaining ")}
                            >
                              Entertaining
                            </button>
                          </center>
                        </MenuItem>

                        <MenuItem iconShape={AccountCircleIcon}>
                          <center>
                            <button
                              type="button"
                              style={{
                                backgroundColor: "#17a2b8",
                                fontSize: 12,
                              }}
                              class="btn btn-primary"
                              onClick={() => this.category("venue")}
                            >
                              Venue
                            </button>
                          </center>
                        </MenuItem>
                        <MenuItem iconShape={AccountCircleIcon}>
                          <center>
                            <button
                              type="button"
                              style={{
                                backgroundColor: "#17a2b8",
                                fontSize: 12,
                              }}
                              class="btn btn-primary"
                              onClick={() => this.category("dressing ")}
                            >
                              Dressing
                            </button>
                          </center>
                        </MenuItem>
                        <MenuItem iconShape={AccountCircleIcon}>
                          <center>
                            <button
                              type="button"
                              style={{
                                backgroundColor: "#17a2b8",
                                fontSize: 12,
                              }}
                              class="btn btn-primary"
                              onClick={() => this.category("cards ")}
                            >
                              Cards
                            </button>
                          </center>
                        </MenuItem>
                        <MenuItem iconShape={AccountCircleIcon}>
                          <center>
                            <button
                              type="button"
                              style={{
                                backgroundColor: "#17a2b8",
                                fontSize: 12,
                              }}
                              class="btn btn-primary"
                              onClick={() => this.category("drinks ")}
                            >
                              Drinks
                            </button>
                          </center>
                        </MenuItem>
                        <MenuItem iconShape={AccountCircleIcon}>
                          <center>
                            <button
                              type="button"
                              style={{
                                backgroundColor: "#17a2b8",
                                fontSize: 12,
                              }}
                              class="btn btn-primary"
                              onClick={() => this.category("cakes ")}
                            >
                              Cakes
                            </button>
                          </center>
                        </MenuItem>
                        <MenuItem iconShape={AccountCircleIcon}>
                          <center>
                            <button
                              type="button"
                              style={{
                                backgroundColor: "#17a2b8",
                                fontSize: 12,
                              }}
                              class="btn btn-primary"
                              onClick={() => this.category("transport ")}
                            >
                              Transport
                            </button>
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
                </td>
                <td align="center">
                  <div>
                    {this.state.post.map((items) => {
                      return (
                        <div>
                          <br></br>
                          <div class="card mb-3" style={{ maxWidth: 540 }}>
                            <div class="row no-gutters">
                              <div class="col-md-4">
                                <img
                                  src={items.photo}
                                  class="card-img"
                                  alt="..."
                                />
                              </div>
                              <div class="col-md-8">
                                <div class="card-body">
                                  <h5 align="left">{items.title}</h5>
                                  <h6 align="left">{items.business_name}</h6>
                                  <p align="left" class="card-text">
                                    <small class="text-muted">
                                      {items.category}
                                    </small>
                                  </p>
                                  <table width="100%">
                                    <tr>
                                      <td width="50%">Rs. {items.price}</td>
                                      <td width="50%">
                                        <Link
                                          to={{
                                            pathname: "/pages/viewAd",
                                            state: { data: items.id },
                                          }}
                                        >
                                          <button
                                            type="submit"
                                            class="btn btn-info"
                                          >
                                            View more
                                          </button>
                                        </Link>
                                      </td>
                                    </tr>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      );
    }
  }
}

export default Feed;
