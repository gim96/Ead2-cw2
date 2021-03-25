import { Component } from "react";
import axios from "axios";
import DashNav from "./com/DashNav";
import SideBar from "./com/SideBar";
class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
      currentPassword: "",
      newPassword: "",
      password: "",
    };

    if (!window.sessionStorage.getItem("user")) {
      this.props.history.push("/pages/login");
    } else {
      this.props.history.push("/pages/dashboard");
    }
  }

  render() {
    return (
      <div>
        <table width="100%">
          <tr>
            <td rowSpan="2" style={{ verticalAlign: "top" }} width="20%">
              <SideBar />
            </td>
            <td colSpan="2">
              <DashNav />
            </td>
          </tr>
          <tr>
            <td align="center">
              <div style={{ paddingTop: "5%" }}>
                <table width="70%">
                  <tr>
                    <td>
                      Welcome Back , <b>{localStorage.getItem("user")}</b>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4 style={{ color: "gray" }}>
                        EXPLORE FOR GET MORE BEST SERVICE.
                      </h4>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
        </table>
        <br />
      </div>
    );
  }
}

export default Dashboard;
