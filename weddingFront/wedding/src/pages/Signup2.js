import React, { Component } from "react";

import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_AfUY7TSRWvntsF4KXbZ8h");

class Signup2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //   username: localStorage.getItem("s_username"),
      user: [],
      random: Math.floor(100000 + Math.random() * 900000),
      massage: "",
      myEmail: "",
      otp: 0,
      //   user: [],
    };

    this.handleSubmit1 = this.handleSubmit1.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);

    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangeOTP = this.handleChangeOTP.bind(this);
  }

  componentDidMount() {
    const data = this.props.location.data;
    this.setState({ user: data });
    // console.log(data.email);
  }

  handleSubmit1(e) {
    alert("OTP send.!");

    if (
      this.state.name != "" &&
      this.state.email != "" &&
      this.state.subject != "" &&
      this.state.msg != ""
    ) {
      emailjs
        .sendForm(
          "nipunEN",
          "template_1lvwemr",
          e.target,
          "user_AfUY7TSRWvntsF4KXbZ8h",
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          },
        );
      e.target.reset();
    } else {
      alert("Empty");
    }

    e.preventDefault();
  }

  handleSubmit2(event) {
    if (this.state.random == this.state.otp) {
      this.props.history.push("/pages/success");
    } else {
      alert("Wrong");
      alert(this.state.otp + " " + this.state.random);
    }

    event.preventDefault();
  }

  handleChangeUser(evt) {
    this.setState({ username: evt.target.value });
  }
  handleChangeOTP(evt) {
    this.setState({ otp: evt.target.value });
  }

  render() {
    if (this.state.user.type === "V") {
      return (
        <div>
          <nav class="navbar navbar-light bg-light justify-content-between">
            <a class="navbar-brand" href="/">
              Double Hearts
            </a>
          </nav>
          <div>
            <div class="card">
              <div class="card-body">
                <center>
                  {" "}
                  <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label style={{ width: 150 }} class="btn btn-warning ">
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
                    <label style={{ width: 150 }} class="btn btn-success">
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
            <form onSubmit={this.handleSubmit1}>
              <br />
              <br />
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
                      type="hidden"
                      value={this.state.user.email}
                      onChange={(e) => {
                        this.setState({ myEmail: e.target.value });
                      }}
                      name="name"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="hidden"
                      value={this.state.random}
                      name="message"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      value={this.state.user.email}
                      onChange={this.handleChangeRePass}
                    />
                  </td>
                </tr>
                <tr>
                  <td align="right">
                    <button
                      variant="contained"
                      class="btn btn-info "
                      type="submit"
                      color="primary"
                    >
                      {" "}
                      Send OTP{" "}
                    </button>
                  </td>
                </tr>
              </table>
            </form>

            <form onSubmit={this.handleSubmit2}>
              <br />
              <br />

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
                      placeholder="enter OTP code here"
                      onChange={this.handleChangeOTP}
                    />
                  </td>
                </tr>
                <tr>
                  <td align="right">
                    <button
                      variant="contained"
                      class="btn btn-info "
                      type="submit"
                      color="primary"
                    >
                      {" "}
                      Vertify{" "}
                    </button>
                  </td>
                </tr>
              </table>
              <br />
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <nav class="navbar navbar-light bg-light justify-content-between">
            <a class="navbar-brand" href="/">
              Double Hearts
            </a>
          </nav>
          <div>
            <div class="card">
              <div class="card-body">
                <center>
                  {" "}
                  <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label style={{ width: 150 }} class="btn btn-warning ">
                      <input
                        type="radio"
                        name="options"
                        id="option1"
                        autocomplete="off"
                        checked
                      />{" "}
                      Sign up
                    </label>

                    <label style={{ width: 150 }} class="btn btn-success">
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
            <form onSubmit={this.handleSubmit1}>
              <br />
              <br />
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
                      type="hidden"
                      onChange={(e) => {
                        this.setState({ myEmail: e.target.value });
                      }}
                      value={this.state.user.email}
                      name="name"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="hidden"
                      value={this.state.random}
                      name="message"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      value={this.state.user.email}
                      onChange={this.handleChangeRePass}
                    />
                  </td>
                </tr>
                <tr>
                  <td align="right">
                    <button
                      variant="contained"
                      class="btn btn-info "
                      type="submit"
                      color="primary"
                    >
                      {" "}
                      Send OTP{" "}
                    </button>
                  </td>
                </tr>
              </table>
            </form>

            <form onSubmit={this.handleSubmit2}>
              <br />
              <br />

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
                      placeholder="enter OTP code here"
                      onChange={this.handleChangeOTP}
                    />
                  </td>
                </tr>
                <tr>
                  <td align="right">
                    <button
                      variant="contained"
                      class="btn btn-info "
                      type="submit"
                      color="primary"
                    >
                      {" "}
                      Vertify{" "}
                    </button>
                  </td>
                </tr>
              </table>
              <br />
            </form>
          </div>
        </div>
      );
    }
  }
}

export default Signup2;
