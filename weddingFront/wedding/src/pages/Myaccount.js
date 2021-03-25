import { Component } from "react";
import DashNav from "./com/DashNav";
import SideBar from "./com/SideBar";
import axios from "axios";

class Myaccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: [],
      isLoading: true,

      accountNo: "",
      username: "",
      email: "",
      psw: "",
      phone: "",

      b_name: "",
      register_no: "",
      category: "",
      add1: "",
      add2: "",
      add3: "",

      image: [],
      imgCount: 0,
      base64TextString: "",
    };

    this.handleSubmitBasic = this.handleSubmitBasic.bind(this);
    this.handleSubmitBusiness = this.handleSubmitBusiness.bind(this);
    this.handleChangeId = this.handleChangeId.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeBname = this.handleChangeBname.bind(this);
    this.handleChangeRegNo = this.handleChangeRegNo.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangeAdd1 = this.handleChangeAdd1.bind(this);
    this.handleChangeAdd2 = this.handleChangeAdd2.bind(this);
    this.handleChangeAdd3 = this.handleChangeAdd3.bind(this);

    // this.handlePhoto = this.handlePhoto.bind();
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // const my_id = ;
    axios
      .get(
        "http://localhost:8080/venders/" + window.sessionStorage.getItem("id"),
      )
      .then((resp) => {
        if (resp.data != null) {
          this.setState({
            accountNo: resp.data.id,
            username: resp.data.username,
            email: resp.data.email,
            psw: resp.data.password,
            phone: resp.data.phone,
            isLoading: false,
          });
          console.log(resp.data.id);
        } else {
          this.setState({ isLoading: false });
          console.log(resp.data);
        }
      });

    axios
      .get(
        "http://localhost:8080/business/" + window.sessionStorage.getItem("id"),
      )
      .then((resp) => {
        if (resp.data != null) {
          this.setState({
            b_name: resp.data.business_name,
            register_no: resp.data.registration_no,
            category: resp.data.category,
            add1: resp.data.address_line1,
            add2: resp.data.address_line2,
            add3: resp.data.district,
            isLoading: false,
          });
          // console.log(resp.data);
        } else {
          this.setState({ isLoading: false });
          // console.log(resp.data);
        }
      });

    axios
      .get(
        "http://localhost:8080/profiles/" + window.sessionStorage.getItem("id"),
      )
      .then((resp) => {
        if (resp.data != null) {
          this.setState({ imgCount: 1, isLoading: false });
          // console.log(resp.data);
        }
      })
      .catch((err) => {
        this.setState({ imgCount: 0, isLoading: false });
      });
  }

  handleSubmitBasic = (event) => {
    if (
      this.state.username != "" &&
      this.state.email !== "" &&
      this.state.phone !== ""
    ) {
      const data = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.psw,
        phone: this.state.phone,
        type: window.sessionStorage.getItem("role"),
      };

      axios
        .put(
          "http://localhost:8080/venders/" +
            window.sessionStorage.getItem("id"),
          data,
        )
        .then((resp) => {
          if (resp.data != null) {
            // console.log(resp.data);
            window.location.reload(false);
          } else {
            alert("Error..!");
          }
        });
    } else {
      alert("Required fields.!");
    }

    event.preventDefault();
  };

  handleSubmitBusiness = (event) => {
    if (
      this.state.accountNo != "" &&
      this.state.b_name !== "" &&
      this.state.category !== "" &&
      this.state.add1 !== "" &&
      this.state.add2 !== "" &&
      this.state.add3 !== ""
    ) {
      const data = {
        business_name: this.state.b_name,
        registration_no: this.state.register_no,
        category: this.state.category,
        address_line1: this.state.add1,
        address_line2: this.state.add2,
        district: this.state.add3,
      };

      axios
        .put(
          "http://localhost:8080/business/" +
            window.sessionStorage.getItem("id"),
          data,
        )
        .then((resp) => {
          if (resp.data != null) {
            // console.log(resp.data);
            window.location.reload(false);
          } else {
            alert("Error..!");
          }
        });
    } else {
      alert("Required fields.!");
    }

    event.preventDefault();
  };

  handleChangeId = (evt) => {
    this.setState({ accountNo: evt.target.value });
  };
  handleChangeUsername = (evt) => {
    this.setState({ username: evt.target.value });
  };
  handleChangeEmail = (evt) => {
    this.setState({ email: evt.target.value });
  };
  handleChangePhone = (evt) => {
    this.setState({ phone: evt.target.value });
  };

  handleChangeBname = (evt) => {
    this.setState({ b_name: evt.target.value });
  };
  handleChangeRegNo = (evt) => {
    this.setState({ register_no: evt.target.value });
  };
  handleChangeCategory = (evt) => {
    this.setState({ category: evt.target.value });
  };
  handleChangeAdd1 = (evt) => {
    this.setState({ add1: evt.target.value });
  };
  handleChangeAdd2 = (evt) => {
    this.setState({ add2: evt.target.value });
  };
  handleChangeAdd3 = (evt) => {
    this.setState({ add3: evt.target.value });
  };

  async handleChange(event) {
    console.log("file to upload :", event);

    const file = event;
    const base64 = await this.convertBase64(file);
    console.log(base64);
    this.setState({ base64TextString: base64 });
  }

  convertBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (err) => {
        reject(err);
      };
    });
  }

  handlePhoto = (event) => {
    if (this.state.base64TextString !== "") {
      const data = {
        id: window.sessionStorage.getItem("id"),
        photo: this.state.base64TextString,
      };

      if (this.state.imgCount === 1) {
        axios
          .put(
            "http://localhost:8080/profiles/" +
              window.sessionStorage.getItem("id"),
            {
              photo: this.state.base64TextString,
            },
          )
          .then((resp) => {
            if (resp.data != null) {
              alert("File uploaded.!");
              window.location.reload(false);
            } else {
              alert("Error..!");
            }
          });
      } else {
        axios.post("http://localhost:8080/profiles/", data).then((resp) => {
          if (resp.data != null) {
            alert("File uploaded.!");
            window.location.reload(false);
          } else {
            alert("Error..!");
          }
        });
      }
    } else {
      alert("Required fields.!");
    }

    event.preventDefault();
  };

  render() {
    if (this.state.isLoading == true) {
      return (
        <div>
          <div>loading..</div>
        </div>
      );
    } else {
      if (window.sessionStorage.getItem("role") == "A") {
        return (
          <div>
            <table width="100%" border="1">
              <tr>
                <td rowspan="2" style={{ verticalAlign: "top" }} width="20%">
                  {" "}
                  <SideBar />
                </td>
                <td width="80%">
                  <DashNav />
                </td>
              </tr>
              <tr>
                <td>
                  <div align="center" style={{ paddingTop: "5%" }}>
                    <h5
                      align="left"
                      style={{ color: "gray", paddingLeft: "15%" }}
                    >
                      Basic Details
                    </h5>
                    <hr />
                    <form
                      onSubmit={this.handleSubmitBasic}
                      style={{ backgroundColor: "#E2E5DE", width: "70%" }}
                    >
                      <br />
                      <table width="70%" cellpadding="5" align="center">
                        <tr>
                          <td>Account Id</td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="text"
                              value={this.state.accountNo}
                              class="form-control"
                              onChange={this.handleChangeId}
                              disabled
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Username</td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="text"
                              value={this.state.username}
                              class="form-control"
                              onChange={this.handleChangeUsername}
                              disabled
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Email</td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="text"
                              value={this.state.email}
                              class="form-control"
                              onChange={this.handleChangeEmail}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Phone </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="text"
                              value={this.state.phone}
                              class="form-control"
                              onChange={this.handleChangePhone}
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
                              Save
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                        </tr>
                      </table>
                    </form>

                    <br />
                  </div>

                  <div align="center" style={{ paddingTop: "5%" }}>
                    <h5
                      align="left"
                      style={{ color: "gray", paddingLeft: "15%" }}
                    >
                      Profile Photo
                    </h5>
                    <hr />
                    <form
                      onSubmit={this.handlePhoto}
                      style={{ backgroundColor: "#E2E5DE", width: "70%" }}
                    >
                      <br />
                      <table width="70%" cellpadding="5" align="center">
                        <tr>
                          <td>Profile</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <span
                                  class="input-group-text"
                                  id="inputGroupFileAddon01"
                                >
                                  Upload
                                </span>
                              </div>
                              <div class="custom-file">
                                <input
                                  type="file"
                                  class="custom-file-input"
                                  id="inputGroupFile01"
                                  onChange={(e) =>
                                    this.handleChange(e.target.files[0])
                                  }
                                  aria-describedby="inputGroupFileAddon01"
                                />
                                <label
                                  class="custom-file-label"
                                  for="inputGroupFile01"
                                >
                                  Choose file
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>&nbsp;</td>
                        </tr>
                        <tr>
                          <td align="right">
                            <button type="submit" class="btn btn-info ">
                              {" "}
                              Save
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                        </tr>
                      </table>
                    </form>

                    <br />
                  </div>
                </td>
              </tr>
            </table>
          </div>
        );
      } else if (window.sessionStorage.getItem("role") == "V") {
        return (
          <div>
            <table width="100%" border="1">
              <tr>
                <td style={{ verticalAlign: "top" }} width="20%" rowSpan="2">
                  <SideBar />
                </td>
                <td width="80%">
                  <DashNav />
                </td>
              </tr>
              <tr>
                <td>
                  <div align="center" style={{ paddingTop: "5%" }}>
                    <h5
                      align="left"
                      style={{ color: "gray", paddingLeft: "10%" }}
                    >
                      Basic Details
                    </h5>
                    <hr />
                    <form
                      onSubmit={this.handleSubmitBasic}
                      style={{ backgroundColor: "#E2E5DE", width: "70%" }}
                    >
                      <br />
                      <table width="70%" cellpadding="5" align="center">
                        <tr>
                          <td>Account Id</td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="text"
                              value={this.state.accountNo}
                              class="form-control"
                              onChange={this.handleChangeId}
                              disabled
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Username</td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="text"
                              value={this.state.username}
                              class="form-control"
                              onChange={this.handleChangeUsername}
                              disabled
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Email</td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="text"
                              value={this.state.email}
                              class="form-control"
                              onChange={this.handleChangeEmail}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Phone </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="text"
                              value={this.state.phone}
                              class="form-control"
                              onChange={this.handleChangePhone}
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
                              Save
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                        </tr>
                      </table>
                    </form>

                    <br />
                  </div>
                  <div align="center" style={{ paddingTop: "5%" }}>
                    <h5
                      align="left"
                      style={{ color: "gray", paddingLeft: "10%" }}
                    >
                      Business Details
                    </h5>
                    <hr />
                    <form
                      onSubmit={this.handleSubmitBusiness}
                      style={{ backgroundColor: "#E2E5DE", width: "70%" }}
                    >
                      <br />
                      <table width="70%" cellpadding="5" align="center">
                        <tr>
                          <td>Business Name</td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="text"
                              value={this.state.b_name}
                              class="form-control"
                              onChange={this.handleChangeBname}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Register No</td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="text"
                              value={this.state.register_no}
                              class="form-control"
                              onChange={this.handleChangeRegNo}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Category</td>
                        </tr>
                        <tr>
                          <td>
                            <select class="form-control">
                              <option>{this.state.category}</option>
                              <option>decoration</option>
                              <option>catering</option>
                              <option>photography</option>
                              <option>entertaining</option>
                              <option>venue</option>
                              <option>dressing</option>
                              <option>cards</option>
                              <option>drinks</option>
                              <option>cakes</option>
                              <option>transport</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>Address Line 1 </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="text"
                              value={this.state.add1}
                              class="form-control"
                              onChange={this.handleChangeAdd1}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Address Line 2 </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="text"
                              value={this.state.add2}
                              class="form-control"
                              onChange={this.handleChangeAdd2}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Address Line 3 </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="text"
                              value={this.state.add3}
                              class="form-control"
                              onChange={this.handleChangeAdd3}
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
                              Save
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                        </tr>
                      </table>
                    </form>

                    <br />
                  </div>

                  <div align="center" style={{ paddingTop: "5%" }}>
                    <h5
                      align="left"
                      style={{ color: "gray", paddingLeft: "10%" }}
                    >
                      Business Details
                    </h5>
                    <hr />
                    <form
                      onSubmit={this.handlePhoto}
                      style={{ backgroundColor: "#E2E5DE", width: "70%" }}
                    >
                      <br />
                      <table width="70%" cellpadding="5" align="center">
                        <tr>
                          <td>Profile</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <span
                                  class="input-group-text"
                                  id="inputGroupFileAddon01"
                                >
                                  Upload
                                </span>
                              </div>
                              <div class="custom-file">
                                <input
                                  type="file"
                                  class="custom-file-input"
                                  id="inputGroupFile01"
                                  onChange={(e) =>
                                    this.handleChange(e.target.files[0])
                                  }
                                  aria-describedby="inputGroupFileAddon01"
                                />
                                <label
                                  class="custom-file-label"
                                  for="inputGroupFile01"
                                >
                                  Choose file
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>&nbsp;</td>
                        </tr>
                        <tr>
                          <td align="right">
                            <button type="submit" class="btn btn-info ">
                              {" "}
                              Save
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                        </tr>
                      </table>
                    </form>

                    <br />
                  </div>
                </td>
              </tr>

              <tr>
                <td> </td>
                <td></td>
              </tr>
            </table>
          </div>
        );
      } else if (window.sessionStorage.getItem("role") == "C") {
        return (
          <div>
            <table width="100%" border="0">
              <tr>
                <td rowspan="2" style={{ verticalAlign: "top" }} width="20%">
                  {" "}
                  <SideBar />
                </td>
                <td width="100%" colspan="2">
                  <DashNav />
                </td>
              </tr>
              <tr>
                <td>
                  <div align="center" style={{ paddingTop: "5%" }}>
                    <h5
                      align="left"
                      style={{ color: "gray", paddingLeft: "15%" }}
                    >
                      Basic Details
                    </h5>
                    <hr />
                    <form
                      onSubmit={this.handleSubmitBasic}
                      style={{ backgroundColor: "#E2E5DE", width: "70%" }}
                    >
                      <br />
                      <table width="70%" cellpadding="5" align="center">
                        <tr>
                          <td>Account Id</td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="text"
                              value={this.state.accountNo}
                              class="form-control"
                              onChange={this.handleChangeId}
                              disabled
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Username</td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="text"
                              value={this.state.username}
                              class="form-control"
                              onChange={this.handleChangeUsername}
                              disabled
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Email</td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="text"
                              value={this.state.email}
                              class="form-control"
                              onChange={this.handleChangeEmail}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Phone </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="text"
                              value={this.state.phone}
                              class="form-control"
                              onChange={this.handleChangePhone}
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
                              Save
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                        </tr>
                      </table>
                    </form>

                    <br />
                  </div>

                  <div align="center" style={{ paddingTop: "5%" }}>
                    <h5
                      align="left"
                      style={{ color: "gray", paddingLeft: "15%" }}
                    >
                      Profile photo
                    </h5>
                    <hr />
                    <form
                      onSubmit={this.handlePhoto}
                      style={{ backgroundColor: "#E2E5DE", width: "70%" }}
                    >
                      <br />
                      <table width="70%" cellpadding="5" align="center">
                        <tr>
                          <td>
                            Profile |{" "}
                            <h9 style={{ fontSize: 10, color: "black" }}>
                              Maximum file size is 500KB
                            </h9>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <span
                                  class="input-group-text"
                                  id="inputGroupFileAddon01"
                                >
                                  Upload
                                </span>
                              </div>
                              <div class="custom-file">
                                <input
                                  type="file"
                                  class="custom-file-input"
                                  id="inputGroupFile01"
                                  onChange={(e) =>
                                    this.handleChange(e.target.files[0])
                                  }
                                  aria-describedby="inputGroupFileAddon01"
                                />
                                <label
                                  class="custom-file-label"
                                  for="inputGroupFile01"
                                >
                                  Choose file
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>&nbsp;</td>
                        </tr>
                        <tr>
                          <td align="right">
                            <button type="submit" class="btn btn-info ">
                              {" "}
                              Save
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                        </tr>
                      </table>
                    </form>

                    <br />
                  </div>
                </td>
              </tr>
            </table>
          </div>
        );
      }
    }
  }
}

export default Myaccount;
