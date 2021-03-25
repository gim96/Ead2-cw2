import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import sha256 from "crypto-js/sha256";
import hmacSHA512 from "crypto-js/hmac-sha512";
import Base64 from "crypto-js/enc-base64";

class Signup1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      rePass: "",
      phone: "",
      type: this.props.location.state.data,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeRePass = this.handleChangeRePass.bind(this);
  }

  handleSubmit(event) {
    const hashDigest = sha256(this.state.password);

    const hmacDigest = Base64.stringify(hmacSHA512(hashDigest, "nibm"));

    const vender = {
      username: this.state.username,
      email: this.state.email,
      password: hmacDigest,
      phone: this.state.phone,
      type: this.state.type,
    };

    if (
      this.state.username !== "" &&
      this.state.emai !== "" &&
      this.state.password !== "" &&
      this.state.phone !== "" &&
      this.state.type !== "" &&
      this.state.rePass !== ""
    ) {
      if (this.state.password === this.state.rePass) {
        axios.post("http://localhost:8080/venders/", vender).then((resp) => {
          if (resp.data != null) {
            //this.setState(this.i)
            // alert("Data Saved..!");
            if (this.state.type === "V") {
              this.props.history.push({
                pathname: "/pages/signupb",
                data: {
                  username: this.state.username,
                  password: this.state.password,
                  email: this.state.email,
                  type: this.state.type,
                },
              });
            } else {
              this.props.history.push({
                pathname: "/pages/signup2",
                data: {
                  username: this.state.username,
                  password: this.state.password,
                  email: this.state.email,
                },
              });
            }

            if (
              localStorage.getItem("s_username") !== this.state.username &&
              localStorage.getItem("s_email") !== this.state.email
            ) {
              localStorage.setItem("s_username", this.state.username);
              localStorage.setItem("s_email", this.state.email);
              // localStorage.setItem("s_role", this.state.type);
            } else {
              localStorage.clear();
            }
          } else {
            alert("Error..!");
          }
        });
      } else {
        alert("Passwords did not mached.!");
      }
    } else {
      alert("required Field.!");
    }

    event.preventDefault();
  }

  handleChangeUser(evt) {
    this.setState({ username: evt.target.value });
  }
  handleChangeEmail(evt) {
    this.setState({ email: evt.target.value });
  }
  handleChangePass(evt) {
    this.setState({ password: evt.target.value });
  }
  handleChangePhone(evt) {
    this.setState({ phone: evt.target.value });
  }
  handleChangeRePass(evt) {
    this.setState({ rePass: evt.target.value });
  }

  render() {
    if (this.state.type === "C") {
      return (
        <div>
          <nav class="navbar navbar-light bg-light justify-content-between">
            <a class="navbar-brand" href="/">
              Double Hearts
            </a>
          </nav>

          <div class="card">
            <div class="card-body">
              <center>
                {" "}
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                  <label style={{ width: 150 }} class="btn btn-success ">
                    <input
                      type="radio"
                      name="options"
                      id="option1"
                      autocomplete="off"
                      checked
                    />{" "}
                    Sign up
                  </label>

                  <label style={{ width: 150 }} class="btn btn-warning">
                    <input
                      type="radio"
                      name="options"
                      id="option3"
                      autocomplete="off"
                    />{" "}
                    Vertify Email
                  </label>
                </div>
              </center>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <div>
                <form onSubmit={this.handleSubmit}>
                  <table
                    width="25%"
                    cellPadding="10"
                    align="center"
                    border="0"
                    class="signUp1"
                  >
                    <tr>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Userame"
                          onChange={this.handleChangeUser}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Email"
                          onChange={this.handleChangeEmail}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <input
                          type="password"
                          class="form-control"
                          placeholder="Password"
                          onChange={this.handleChangePass}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="password"
                          class="form-control"
                          placeholder="Re-enter Password"
                          onChange={this.handleChangeRePass}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Phone"
                          onChange={this.handleChangePhone}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td align="center">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="exampleCheck1"
                        />
                        I accept terms and conditions.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button
                          variant="contained"
                          class="btn btn-info btn-lg btn-block"
                          type="submit"
                          color="primary"
                        >
                          {" "}
                          Signup{" "}
                        </button>
                      </td>
                    </tr>
                  </table>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.type === "V") {
      return (
        <div>
          <nav class="navbar navbar-light bg-light justify-content-between">
            <a class="navbar-brand" href="/">
              Double Hearts
            </a>
          </nav>

          <div class="card">
            <div class="card-body">
              <center>
                {" "}
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                  <label style={{ width: 150 }} class="btn btn-success ">
                    <input
                      type="radio"
                      name="options"
                      id="option1"
                      autocomplete="off"
                      checked
                    />{" "}
                    Sign up
                  </label>
                  <label style={{ width: 150 }} class="btn btn-warning">
                    <input
                      type="radio"
                      name="options"
                      id="option3"
                      autocomplete="off"
                    />{" "}
                    Vertify Business
                  </label>
                  <label style={{ width: 150 }} class="btn btn-warning">
                    <input
                      type="radio"
                      name="options"
                      id="option3"
                      autocomplete="off"
                    />{" "}
                    Vertify Email
                  </label>
                </div>
              </center>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <div>
                <form onSubmit={this.handleSubmit}>
                  <table
                    width="25%"
                    cellPadding="10"
                    align="center"
                    border="0"
                    class="signUp1"
                  >
                    <tr>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Userame"
                          onChange={this.handleChangeUser}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Email"
                          onChange={this.handleChangeEmail}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Password"
                          onChange={this.handleChangePass}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Re-enter Password"
                          onChange={this.handleChangeRePass}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Phone"
                          onChange={this.handleChangePhone}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td align="center">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="exampleCheck1"
                        />
                        I accept terms and conditions.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button
                          variant="contained"
                          class="btn btn-info btn-lg btn-block"
                          type="submit"
                          color="primary"
                        >
                          {" "}
                          Signup{" "}
                        </button>
                      </td>
                    </tr>
                  </table>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
    }
  }
}

export default Signup1;
