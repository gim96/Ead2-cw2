import { Component } from "react";
import axios from "axios";
import DashNav from "./com/DashNav";
import SideBar from "./com/SideBar";
class Payment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
      currentPassword: "",
      newPassword: "",
      password: "",
    };

    this.handleSubmitChangePass = this.handleSubmitChangePass.bind(this);
    this.handleSubmitDelete = this.handleSubmitDelete.bind(this);

    this.handleChangeCurrent = this.handleChangeCurrent.bind(this);
    this.handleChangeNew = this.handleChangeNew.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/venders/" + localStorage.getItem("id"))
      .then((resp) => {
        if (resp.data != null) {
          this.setState({ user: resp.data });
          console.log(this.state.user);
        } else {
          this.setState({ isLoading: false });
          console.log(resp.data);
        }
      });

    // axios.get("http://localhost:8080/images").then((resp) => {
    //   if (resp.data != null) {
    //     this.setState({
    //       image: resp.data,
    //       isLoading: false,
    //     });
    //     console.log(resp.data);
    //   } else {
    //     this.setState({ isLoading: false });
    //     console.log(resp.data);
    //   }
    // });
  }

  handleSubmitChangePass = (event) => {
    if (this.state.currentPassword !== "" && this.state.newPassword !== "") {
      if (this.state.currentPassword === this.state.user.password) {
        const data = {
          username: this.state.user.username,
          email: this.state.user.email,
          password: this.state.newPassword,
          phone: this.state.user.phone,
          type: this.state.user.type,
        };

        axios
          .put(
            "http://localhost:8080/venders/" + localStorage.getItem("id"),
            data,
          )
          .then((resp) => {
            if (resp.data != null) {
              // console.log(resp.data);
              alert("Password successfuly changed.!");
            } else {
              alert("Error..!");
            }
          });
      } else {
        alert("Password did not matched.!");
      }
    } else {
      alert("Required fields.!");
    }

    // console.log(this.state.title);
    event.preventDefault();
  };
  handleSubmitDelete = (event) => {
    if (this.state.password !== "") {
      const data = {
        ad_id: 1500,
        title: this.state.title,
        description: this.state.description,
        price: this.state.price,
        features: this.state.features,
      };

      axios.post("http://localhost:8080/ads/", data).then((resp) => {
        if (resp.data != null) {
          // console.log(resp.data);
          console.log("Success..!");
        } else {
          alert("Error..!");
        }
      });
    } else {
      alert("Required fields.!");
    }

    // console.log(this.state.title);
    event.preventDefault();
  };

  handleChangeCurrent = (evt) => {
    this.setState({ currentPassword: evt.target.value });
  };
  handleChangeNew = (evt) => {
    this.setState({ newPassword: evt.target.value });
  };
  handleChangePassword = (evt) => {
    this.setState({ password: evt.target.value });
  };
  // handleChangeFeatures = (evt) => {
  //   this.setState({ features: evt.target.value });
  // };

  render() {
    if (this.state.isLoading == true) {
      return (
        <div>
          <div>loading..</div>
        </div>
      );
    } else {
      return (
        <div>
          <table width="100%">
            <tr>
              <td colSpan="2">
                <DashNav />
              </td>
            </tr>
            <tr>
              <td style={{ verticalAlign: "top" }} width="25%">
                <SideBar />
              </td>

              <td align="center">
                <div
                  align="right"
                  style={{
                    backgroundColor: "E2E5DE",
                    width: "70%",
                    paddingTop: "10%",
                  }}
                >
                  <table align="center" width="100%">
                    <tr>
                      <td>
                        <hr />
                      </td>
                    </tr>
                    <tr>
                      <td align="left">
                        <h6>Total</h6>
                      </td>
                      <td align="right">
                        <h6>Rs.1500.00</h6>{" "}
                      </td>
                    </tr>
                  </table>
                  <br></br>
                  <h5 align="left" style={{ color: "gray" }}>
                    Payment
                  </h5>
                  <hr />
                  <form
                    onSubmit={this.handleSubmitChangePass}
                    style={{ backgroundColor: "#E2E5DE" }}
                  >
                    <br />
                    <table width="60%" cellpadding="5" align="center">
                      <tr>
                        <td>Card Number</td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            placeholder="4XXXX 2XXXX 3XXXX"
                            value={this.state.title}
                            class="form-control"
                            onChange={this.handleChangeCurrent}
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>Expire Date</td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            placeholder="DD/MM"
                            value={this.state.price}
                            class="form-control"
                            onChange={this.handleChangeNew}
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>CV Code</td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            placeholder="XXX"
                            value={this.state.price}
                            class="form-control"
                            onChange={this.handleChangeNew}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                      </tr>
                      <tr>
                        <td align="right">
                          <button type="submit" class="btn btn-info ">
                            {" "}
                            Submit
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                      </tr>
                    </table>
                  </form>
                </div>
                <br />
                <br />
              </td>
            </tr>
          </table>
          <br />
        </div>
      );
    }
  }
}

export default Payment;
