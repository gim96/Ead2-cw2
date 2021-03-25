import { Component } from "react";
import axios from "axios";
class CreateAd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: [],
      isLoading: true,
      img: "",
      base64TextString: "",
      first: [],
      last: [],
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this._handleReaderLoaded = this._handleReaderLoaded.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:8080/images/").then((resp) => {
      if (resp.data != null) {
        this.setState({ person: resp.data, isLoading: false });

        console.log(this.state.person);
      } else {
        alert("Error..!");
      }
    });
    this.setState({ isLoading: false });
  }

  handleSubmit2 = (e) => {
    // const preview = document.getElementById("profile-picture");
    // console.log("binary string", this.state.base64TextString);
    // console.log(this._base64ToArrayBuffer(this.state.base64TextString));
    // let base64ToString = Buffer.from(
    //   this.state.base64TextString,
    //   "base64",
    // ).toString();
    // console.log(base64ToString);
    let payload = {
      p_id: 1456,
      photo: this.state.base64TextString,
    };
    // const payload = { id: 1550, photo: "this.state.base64TextString" };
    // const img= {s
    //     id:'1547',
    //     photo:'testLag'
    // };
    axios.post("http://localhost:8080/images/", payload).then((resp) => {
      if (resp.data != null) {
        // this.setState({person:resp.data,isLoading:false});
        // console.log(resp.data);
        console.log("Success..!");
      } else {
        alert("Error..!");
      }
    });

    e.preventDefault();
  };

  //   handleChange = (e) => {
  //     // console.log("file to upload :", e.target.files[0]);
  //     let file = e.target.files[0];

  //     if (file) {
  //       const reader = new FileReader();
  //       reader.onload = this._handleReaderLoaded.bind(this);
  //       reader.readAsBinaryString(file);
  //     }
  //   };

  render() {
    const _handleReaderLoaded = async (event) => {
      console.log("file to upload :", event);

      const file = event;
      const base64 = await convertBase64(file);
      console.log(base64);
      this.setState({ base64TextString: base64 });
    };

    const convertBase64 = (file) => {
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
    };

    if (this.state.isLoading == true) {
      return (
        <div>
          {/* <img src="data:image/png;base64,`${}`" /> */}
          {/* <h3>{this.state.person[0].photo} </h3> */}
          heyy
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <form
              onSubmit={this.handleSubmit2}
              //   onChange={this.handleChange}
              enctype="multipart/form-data"
            >
              <table width="30%" cellpadding="5" align="center">
                <tr>
                  <td>Images</td>
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
                          id="file"
                          name="image"
                          accept=".jpeg, .png, .jpg"
                          onChange={(e) =>
                            _handleReaderLoaded(e.target.files[0])
                          }
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <img
                        src={this.state.person[0].photo}
                        width="250px"
                        height="250px"
                      />
                      <img
                        src={this.state.person[1].photo}
                        width="250px"
                        height="250px"
                      />
                    </div>
                  </td>
                </tr>
              </table>
            </form>
            <br />
          </div>
        </div>
      );
    }
  }
}

export default CreateAd;
