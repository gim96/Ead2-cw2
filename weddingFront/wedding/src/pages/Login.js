import { Component } from "react";
import { Button } from "@material-ui/core";
import axios from "axios";

import sha256 from "crypto-js/sha256";
import hmacSHA512 from "crypto-js/hmac-sha512";
import Base64 from "crypto-js/enc-base64";

//import './css/style.css';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      username: "",
      password: "",
      user: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);

    if (window.sessionStorage.getItem("user")) {
      this.props.history.push("/pages/dashboard");
    } else {
      this.props.history.push("/pages/login");
    }
  }

  handleChangeUser = (evt) => {
    this.setState({ username: evt.target.value });
  };
  handleChangePass = (evt) => {
    this.setState({ password: evt.target.value });
  };

  handleSubmit = (event) => {
    // cons;

    const hashDigest = sha256(this.state.password);
    const hmacDigest = Base64.stringify(hmacSHA512(hashDigest, "nibm"));
    // console.log(hmacDigest);
    const user = {
      username: this.state.username,
      password: hmacDigest,
    };
    const header = {
      "Content-Type": "application/json",
    };

    if (this.state.username != null && this.state.password) {
      axios.post("http://localhost:8080/auth/", user).then((resp) => {
        if (resp.data.length > 0) {
          window.sessionStorage.setItem("id", resp.data[0][0]);
          window.sessionStorage.setItem("user", resp.data[0][1]);
          window.sessionStorage.setItem("role", resp.data[0][2]);
          this.props.history.push("/pages/dashboard");
        } else {
          alert("Username or password is wrong.!");
        }
      });
    } else {
      alert("required fields.!");
    }
    // console.log(jsonData);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-light justify-content-between">
          <a class="navbar-brand" href="/">
            Double Hearts
          </a>
        </nav>
        <form onSubmit={this.handleSubmit} style={{ backgroundColor: "#fff" }}>
          <center>
            <div
              class="loginTable"
              style={{ color: "gray", width: "40%", backgroundColor: "silver" }}
            >
              <h5 align="center"> LOGIN</h5>
              <hr />
              <table width="50%" cellpadding="5" align="center">
                <tr>
                  <td
                    style={{
                      color: "gray",
                      // fontWeight: "bold",
                      fontFamily: "monospace",
                      fontSize: 18,
                    }}
                  >
                    Username
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      onChange={this.handleChangeUser}
                      placeholder="Userame"
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      color: "gray",
                      // fontWeight: "bold",
                      fontFamily: "monospace",
                      fontSize: 18,
                    }}
                  >
                    Password
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="password"
                      class="form-control"
                      onChange={this.handleChangePass}
                      //placeholder="Password"
                    />
                  </td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                </tr>

                <tr>
                  <td>
                    <button type="submit" class="btn btn-dark btn-lg btn-block">
                      {" "}
                      Login
                    </button>
                  </td>
                </tr>
              </table>

              <br />
              <br />
            </div>
          </center>
        </form>
      </div>
    );
  }
}

export default Login;
