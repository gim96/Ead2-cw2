import { Component } from "react";
import { Link } from "react-router-dom";
import DashNav from "./com/DashNav";
import SideBar from "./com/SideBar";
import axios from "axios";

class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      venders: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8080/clients/customers").then((resp) => {
      if (resp.data != null) {
        this.setState({ venders: resp.data, isLoading: false });
      } else {
        alert("Error..!");
      }
    });
  }

  handleView = () => {};

  render() {
    return (
      <div>
        <div>
          <table width="100%" border="0">
            <tr>
              <td width="20%" rowSpan="2" style={{ verticalAlign: "top" }}>
                <SideBar />
              </td>
              <td colspan="2">
                <DashNav />
              </td>
            </tr>
            <tr>
              <td>
                <br />
                <br />
                <h5 align="left" style={{ color: "gray", paddingLeft: "12%" }}>
                  Customers Informations
                </h5>
                <hr />
                <center>
                  {" "}
                  <div style={{ width: "80%" }} class="card-body">
                    {this.state.venders.map((data) => {
                      return (
                        <div
                          style={{
                            borderRadius: "5%",
                            paddingTop: "2%",
                            paddingBottom: "2%",
                          }}
                          class="card"
                        >
                          <table width="100%" border="0">
                            <tr>
                              <td width="15%">&nbsp; {data[0]}</td>
                              <td width="30%"> {data[1]}</td>
                              <td width="30%"> {data[2]}</td>

                              <td align="center">
                                <Link
                                  to={{
                                    pathname: "/pages/customerview",
                                    state: { data: data[0] },
                                  }}
                                >
                                  {" "}
                                  <input
                                    type="button"
                                    class="btn btn-success"
                                    value="View"
                                  />
                                </Link>
                              </td>
                            </tr>
                          </table>
                        </div>
                      );
                    })}
                  </div>
                </center>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Customers;
