import { Component } from "react";
import { Button } from "@material-ui/core";
import axios from "axios";
//import './css/style.css';
class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };

    window.sessionStorage.clear();

    this.props.history.push("/pages/login");
  }

  render() {
    return (
      <div>
        <div>Logout</div>
      </div>
    );
  }
}

export default Logout;
