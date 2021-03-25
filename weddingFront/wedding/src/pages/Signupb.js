import React, { Component } from "react";
import axios from "axios";

class Signupb extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      regNo: "",
      category: "",
      add1: "",
      add2: "",
      dis: "V",
      user: [],
      // type: this.props.location.state.data,
    };

    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeRegNo = this.handleChangeRegNo.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangeAdd1 = this.handleChangeAdd1.bind(this);
    this.handleChangeAdd2 = this.handleChangeAdd2.bind(this);
    this.handleChangeDis = this.handleChangeDis.bind(this);
  }

  componentDidMount() {
    const data = this.props.location.data;
    this.setState({ user: data });
    console.log(data);
  }

  handleSubmit(event) {
    if (
      this.state.name !== "" &&
      this.state.regNo !== "" &&
      this.state.category !== "" &&
      this.state.add1 !== "" &&
      this.state.add2 !== "" &&
      this.state.dis !== ""
    ) {
      const user = {
        username: this.state.user.username,
        password: this.state.user.password,
      };

      axios.post("http://localhost:8080/auth/", user).then((resp) => {
        if (resp.data.length > 0) {
          //   localStorage.setItem("id", resp.data[0][0]);
          console.log(resp.data);
          const business = {
            id: resp.data[0][0],
            business_name: this.state.name,
            registration_no: this.state.regNo,
            category: this.state.category,
            address_line1: this.state.add1,
            address_line2: this.state.add2,
            district: this.state.dis,
          };

          axios
            .post("http://localhost:8080/business/", business)
            .then((res) => {
              if (res.data != null) {
                this.props.history.push({
                  pathname: "/pages/signup2",
                  data: {
                    email: this.state.user.email,
                    type: this.state.user.type,
                  },
                });
              } else {
                alert("Error..!");
              }
            });
        } else {
          //   alert("Username or password is wrong.!");
        }
      });
    } else {
      alert("required Field.!");
    }

    event.preventDefault();
  }
  handleChangeName(evt) {
    this.setState({ name: evt.target.value });
  }
  handleChangeRegNo(evt) {
    this.setState({ regNo: evt.target.value });
  }
  handleChangeCategory(evt) {
    this.setState({ category: evt.target.value });
  }
  handleChangeAdd1(evt) {
    this.setState({ add1: evt.target.value });
  }
  handleChangeAdd2(evt) {
    this.setState({ add2: evt.target.value });
  }
  handleChangeDis(evt) {
    this.setState({ dis: evt.target.value });
  }

  render() {
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
        <form onSubmit={this.handleSubmit}>
          <div class="loginTable">
            <table width="20%" cellpadding="10" align="center">
              <tr>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    onChange={this.handleChangeName}
                    placeholder="Business name"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    onChange={this.handleChangeRegNo}
                    placeholder="Registrastion No"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <select
                    class="form-control"
                    onChange={this.handleChangeCategory}
                  >
                    <option>--- Select ---</option>
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
                <td>
                  <input
                    type="text"
                    class="form-control"
                    onChange={this.handleChangeAdd1}
                    placeholder="Address line 1"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    onChange={this.handleChangeAdd2}
                    placeholder="Address line 2"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    onChange={this.handleChangeDis}
                    placeholder="District"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <button type="submit" class="btn btn-info btn-lg btn-block">
                    {" "}
                    Next
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </form>
      </div>
    );
  }
}

export default Signupb;
