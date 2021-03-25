import { Component } from "react";
import "./styles/style.css";

class ImgSlider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-light justify-content-between">
          <a class="navbar-brand" href="/">
            Double Hearts
          </a>
          <table width="25%">
            <tr>
              <td>
                <a
                  href="#about"
                  style={{
                    color: "#555",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  About
                </a>
              </td>
              <td>
                <a
                  href="#proccess"
                  style={{
                    color: "#555",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Process
                </a>{" "}
              </td>

              <td>
                <a
                  href="/pages/login"
                  style={{
                    color: "#555",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Login
                </a>
              </td>
            </tr>
          </table>
        </nav>
      </div>
    );
  }
}

export default ImgSlider;
