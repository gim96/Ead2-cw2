import { Component } from "react";
import { Link } from "react-router-dom";
import DashNav from "./com/DashNav";
import SideBar from "./com/SideBar";
import $ from "jquery";
import avatar from "./com/img/avatar.png";

import axios from "axios";
class ViewAd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      vender: [],
      image: [],
      business: [],
      isLoading: true,
      postId: 0,
      id: "",
      count: 0,
      statex: 0,
      stateMsg: "Hide",
      adState: 1,
    };

    this.imgClick1 = this.imgClick1.bind(this);
    this.imgClick2 = this.imgClick2.bind(this);
    this.imgClick3 = this.imgClick3.bind(this);
    this.imgClick4 = this.imgClick4.bind(this);
  }

  componentDidMount() {
    const data = this.props.location.state;
    this.setState({ postId: data.data });
    console.log(data.data);
    axios
      .get("http://localhost:8080/ad/" + data.data)
      .then((resp) => {
        if (resp.data != null) {
          this.setState({ post: resp.data, statex: resp.data.state });
          if (this.state.statex === 1) {
            this.setState({ stateMsg: "Show" });
          } else {
            this.setState({ stateMsg: "Hide" });
          }
        } else {
          alert("Error..!");
        }
      })
      .catch((err) => {
        this.setState({ adState: 0 });
      });
    axios.get("http://localhost:8080/venders/" + data.data).then((resp) => {
      if (resp.data != null) {
        this.setState({ vender: resp.data });
      } else {
        alert("Error..!");
      }
    });
    axios.get("http://localhost:8080/business/" + data.data).then((resp) => {
      if (resp.data != null) {
        this.setState({ business: resp.data });
        console.log(resp.data);
      } else {
        alert("Error..!");
      }
    });
    axios
      .post("http://localhost:8080/images/my/", { p_id: data.data })
      .then((resp) => {
        if (resp.data != null) {
          this.setState({ image: resp.data, isLoading: false });
          // console.log(this.state.image);
        } else {
          alert("Error..!");
        }
      });
  }

  imgClick1 = () => {
    this.setState({ count: 0 });
  };
  imgClick2 = () => {
    this.setState({ count: 1 });
  };
  imgClick3 = () => {
    this.setState({ count: 2 });
  };
  imgClick4 = () => {
    this.setState({ count: 3 });
  };

  deletePost = () => {
    const data = {
      id: this.state.postId,
      title: this.state.post.title,
      description: this.state.post.description,
      price: this.state.post.price,
      features: this.state.post.features,
      state: 0,
    };

    axios
      .put("http://localhost:8080/ad/" + this.state.postId, data)
      .then((resp) => {
        if (resp.data != null) {
          alert("Post will Desapire.");
          window.location.reload(false);
        } else {
          alert("Error..!");
        }
      });
  };

  showAd = () => {
    const data = {
      id: this.state.postId,
      title: this.state.post.title,
      description: this.state.post.description,
      price: this.state.post.price,
      features: this.state.post.features,
      state: 1,
    };

    axios
      .put("http://localhost:8080/ad/" + this.state.postId, data)
      .then((resp) => {
        if (resp.data != null) {
          alert("Post will Appire.");
          window.location.reload(false);
        } else {
          alert("Error..!");
        }
      });
  };

  render() {
    if (this.state.isLoading === true) {
      return <div>Loading .....</div>;
    } else {
      if (
        window.sessionStorage.getItem("role") == "V" ||
        window.sessionStorage.getItem("role") == "C"
      ) {
        return (
          <div>
            <DashNav />
            <br />
            <br />

            <table align="center" width="80%">
              <tr>
                <td colSpan="2">
                  <div class="card">
                    <div class="card-body">
                      <h3>{this.state.post.title}</h3>
                      <p>Brand - {this.state.business.business_name} </p>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ backgroundColor: "#e6e6e6" }}>
                  <div class="card" style={{ backgroundColor: "#e6e6e6" }}>
                    <div class="card-body">Phone {this.state.vender.phone}</div>
                    <hr />
                    <div class="card-body">
                      Address
                      <br />
                      &nbsp;&nbsp;{this.state.business.address_line1}
                      <br />
                      &nbsp;&nbsp;{this.state.business.address_line2}
                      <br />
                      &nbsp;&nbsp;{this.state.business.district}
                    </div>
                    <hr />
                    <div class="card-body">Phone {this.state.vender.phone}</div>
                    <hr />
                  </div>
                </td>
                <td>
                  <div class="card">
                    <div class="card-body">
                      <center>
                        {" "}
                        <img
                          src={this.state.image[this.state.count].photo}
                          width="750px"
                          height="550px"
                        />{" "}
                      </center>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-body">
                      <center>
                        {" "}
                        <img
                          id="img1"
                          src={this.state.image[0].photo}
                          width="75px"
                          height="50px"
                          onClick={this.imgClick1}
                        />
                        &nbsp; &nbsp;
                        <img
                          id="img2"
                          src={this.state.image[1].photo}
                          width="75px"
                          height="50px"
                          onClick={this.imgClick2}
                        />
                        &nbsp; &nbsp;
                        <img
                          id="img3"
                          src={this.state.image[2].photo}
                          width="75px"
                          height="50px"
                          onClick={this.imgClick3}
                        />
                        &nbsp; &nbsp;
                        <img
                          id="img4"
                          src={this.state.image[3].photo}
                          width="75px"
                          height="50px"
                          onClick={this.imgClick4}
                        />
                      </center>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-body">
                      <h5>Description :</h5>
                      <p>{this.state.post.description}</p>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-body">
                      <h5>Features :</h5>
                      <p>{this.state.post.features}</p>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-body">
                      <p>Rs.{this.state.post.price}.00 Per function</p>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
            <br />
          </div>
        );
      } else if (window.sessionStorage.getItem("role") == "A") {
        if (this.state.adState === 0) {
          return (
            <div>
              <h5>Ad unavailbale.! </h5>
            </div>
          );
        } else {
          return (
            <div>
              <DashNav />
              <br />
              <br />

              <table align="center" width="80%">
                <tr>
                  <td colSpan="2">
                    <div class="card">
                      <div class="card-body">
                        <h3>{this.state.post.title}</h3>
                        <p>Brand - {this.state.business.business_name} </p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: "#e6e6e6" }}>
                    <div class="card" style={{ backgroundColor: "#e6e6e6" }}>
                      <div class="card-body">
                        Phone {this.state.vender.phone}
                      </div>
                      <hr />
                      <div class="card-body">
                        Address
                        <br />
                        &nbsp;&nbsp;{this.state.business.address_line1}
                        <br />
                        &nbsp;&nbsp;{this.state.business.address_line2}
                        <br />
                        &nbsp;&nbsp;{this.state.business.district}
                      </div>
                      <hr />
                      <div class="card-body">
                        Phone {this.state.vender.phone}
                      </div>
                      <hr />
                    </div>
                  </td>
                  <td>
                    <div class="card">
                      <div class="card-body">
                        <center>
                          {" "}
                          <img
                            src={this.state.image[this.state.count].photo}
                            width="750px"
                            height="550px"
                          />{" "}
                        </center>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-body">
                        <center>
                          <img
                            id="img1"
                            src={this.state.image[0].photo}
                            width="75px"
                            height="50px"
                            onClick={this.imgClick1}
                          />
                          &nbsp; &nbsp;
                          <img
                            id="img2"
                            src={this.state.image[1].photo}
                            width="75px"
                            height="50px"
                            onClick={this.imgClick2}
                          />
                          &nbsp; &nbsp;
                          <img
                            id="img3"
                            src={this.state.image[2].photo}
                            width="75px"
                            height="50px"
                            onClick={this.imgClick3}
                          />
                          &nbsp; &nbsp;
                          <img
                            id="img4"
                            src={this.state.image[3].photo}
                            width="75px"
                            height="50px"
                            onClick={this.imgClick4}
                          />
                        </center>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-body">
                        <h5>Description :</h5>
                        <p>{this.state.post.description}</p>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-body">
                        <h5>Features :</h5>
                        <p>{this.state.post.features}</p>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-body">
                        <p>Rs.{this.state.post.price}.00 Per function</p>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
              <br />
              <table align="center" width="90%">
                <tr>
                  <td>
                    <div class="card">
                      <div class="card-body">
                        <table width="50%">
                          <tr>
                            <td
                              style={{
                                verticalAlign: "middle",
                                fontSize: 15,
                                fontWeight: "bold",
                              }}
                            >
                              Ad State : {this.state.stateMsg}
                            </td>
                            <td align="right">
                              <input
                                type="button"
                                class="btn btn-danger"
                                value="Hide Ad"
                                onClick={this.deletePost}
                              />
                            </td>
                            <td>
                              <input
                                type="button"
                                class="btn btn-success"
                                value="Show Ad"
                                onClick={this.showAd}
                              />
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>

              <br />
            </div>
          );
        }
      }
    }
  }
}

export default ViewAd;
