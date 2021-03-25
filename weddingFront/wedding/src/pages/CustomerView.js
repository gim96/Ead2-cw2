import { Component } from "react";
import { Link } from "react-router-dom";
import DashNav from "./com/DashNav";
import SideBar from "./com/SideBar";
import $ from "jquery";
import ava from "./com/img/ava.png";

import axios from "axios";
import { render } from "@testing-library/react";
class ViewClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      vender: [],
      image: [],
      business: [],
      isLoading: true,
      id: "",
      count: 0,
      cusId: "",
      photo: "",
    };
  }

  componentDidMount() {
    const data = this.props.location.state;
    console.log(data.data);
    this.setState({ cusId: data.data });
    const ddata = {
      id: data.data,
    };

    axios.get("http://localhost:8080/venders/" + data.data).then((resp) => {
      if (resp.data != null) {
        this.setState({
          vender: resp.data,
        });
      } else {
        alert("Error..!");
      }
    });

    axios
      .get("http://localhost:8080/profiles/" + data.data)
      .then((resp) => {
        if (resp.data != null) {
          this.setState({
            image: resp.data.photo,
            isLoading: false,
          });
          console.log("test");
        }
      })
      .catch((err) => {
        this.setState({
          image: ava,
          isLoading: false,
        });
      });
  }

  deleteCustomer = () => {
    axios
      .delete("http://localhost:8080/venders/" + this.state.cusId)
      .then((resp) => {
        if (resp.data != null) {
          alert("Customer Deleted.!");
          this.props.history.push("/pages/customers");
        } else {
          alert("Error..!");
        }
      });
  };

  render() {
    if (this.state.isLoading === true) {
      return <div>Loading .....</div>;
    } else {
      return (
        <div>
          <DashNav />
          <br />
          <br />
          <center>
            <div class="card" style={{ width: "80%" }}>
              <div class="card-body">
                <table width="90%" border="0">
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td colspan="3" align="center">
                      <h5>Basic Details</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width="50%">
                      <img
                        src={this.state.image}
                        width="275px"
                        height="250px"
                      />
                    </td>
                    <td>&nbsp;</td>
                    <td align="center">
                      <table
                        width="100%"
                        border="0"
                        align="center"
                        class="table"
                      >
                        <tr>
                          <td>
                            <h6>Id </h6>
                          </td>
                          <td align="right">
                            <h6>{this.state.vender.id}</h6>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h6>Username </h6>
                          </td>
                          <td align="right">
                            <h6>{this.state.vender.username}</h6>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h6>Email </h6>
                          </td>
                          <td align="right">
                            <h6>{this.state.vender.email}</h6>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h6>Phone </h6>
                          </td>
                          <td align="right">
                            <h6>{this.state.vender.phone}</h6>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td colSpan="3">
                      <hr></hr>
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>

                  <tr>
                    <td colspan="3" align="center">
                      <input
                        type="button"
                        class="btn btn-danger"
                        onClick={this.deleteCustomer}
                        value="Delete Customer"
                      />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </center>

          <br />
        </div>
      );
    }
  }
}

export default ViewClient;
