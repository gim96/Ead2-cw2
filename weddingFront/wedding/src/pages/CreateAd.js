import { Component } from "react";
import axios from "axios";
import DashNav from "./com/DashNav";
import SideBar from "./com/SideBar";
class CreateAd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: [],
      isLoading: true,
      image: [],
      title: "",
      description: "",
      price: "",
      features: "",
      base64TextString: "",
      photoCount: 0,
      profile: 0,
    };

    //  this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDes = this.handleChangeDes.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleChangeFeatures = this.handleChangeFeatures.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/ad/" + window.sessionStorage.getItem("id"))
      .then((resp) => {
        if (resp.data != null) {
          // if (resp.data.length > 0) {
          this.setState({
            title: resp.data.title,
            description: resp.data.description,
            price: resp.data.price,
            features: resp.data.features,
          });

          console.log(resp.data);
        } else {
          this.setState({ isLoading: false });
          console.log(resp.data);
        }
      });

    axios
      .get(
        "http://localhost:8080/profiles/" + window.sessionStorage.getItem("id"),
      )
      .then((resp) => {
        if (resp.data != null) {
          this.setState({
            profile: 1,
          });
        } else {
          this.setState({
            profile: 0,
            isLoading: false,
          });
          console.log(resp.data);
        }
      });

    const pId = {
      p_id: window.sessionStorage.getItem("id"),
    };

    axios.post("http://localhost:8080/images/my/", pId).then((resp) => {
      if (resp.data != null) {
        this.setState({
          image: resp.data,
          isLoading: false,
          photoCount: resp.data.length,
        });
        console.log(this.state.image);
      } else {
        // console.log(resp.data);
      }
    });
    // this.setState({ isLoading: false });
    console.log(this.state.image);
  }

  handleUpdate = (event) => {
    if (
      this.state.title !== "" &&
      this.state.description != "" &&
      this.state.price !== "" &&
      this.state.features !== ""
    ) {
      const data = {
        id: localStorage.getItem("id"),
        title: this.state.title,
        description: this.state.description,
        price: this.state.price,
        features: this.state.features,
        state: 1,
      };

      axios
        .put(
          "http://localhost:8080/ad/" + window.sessionStorage.getItem("id"),
          data,
        )
        .then((resp) => {
          if (resp.data != null) {
            alert("Your Ad succefully Updated.!");
            window.location.reload(false);
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

  handlePhoto = (event) => {
    if (this.state.base64TextString !== "") {
      const data = {
        p_id: window.sessionStorage.getItem("id"),
        photo: this.state.base64TextString,
      };

      if (this.state.photoCount > 3) {
        alert("Maximum upload Count exceded.!");
      } else {
        axios.post("http://localhost:8080/images/", data).then((resp) => {
          if (resp.data != null) {
            alert("File uploaded.!");
            window.location.reload(false);
          } else {
            alert("File Size is too larger.!");
            alert("Error..!");
          }
        });
      }
    } else {
      alert("Required fields.!");
    }

    event.preventDefault();
  };
  handleDelete = (img_id) => {
    axios.delete("http://localhost:8080/images/" + img_id).then((resp) => {
      if (resp.data != null) {
        alert("File Deleted.!");
        window.location.reload(false);
      } else {
        alert("Error..!");
      }
    });
    // console.log("hyy");
    // console.log("Image " + img_id);
  };

  handleChangeTitle = (evt) => {
    this.setState({ title: evt.target.value });
  };
  handleChangeDes = (evt) => {
    this.setState({ description: evt.target.value });
  };
  handleChangePrice = (evt) => {
    this.setState({ price: evt.target.value });
  };
  handleChangeFeatures = (evt) => {
    this.setState({ features: evt.target.value });
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

  postAd = (event) => {
    if (this.state.profile === 1) {
      if (
        this.state.title !== "" &&
        this.state.description != "" &&
        this.state.price !== "" &&
        this.state.features !== ""
      ) {
        if (this.state.photoCount === 4) {
          const data = {
            id: localStorage.getItem("id"),
            title: this.state.title,
            description: this.state.description,
            price: this.state.price,
            features: this.state.features,
            state: 1,
          };

          axios.post("http://localhost:8080/ad/", data).then((resp) => {
            if (resp.data != null) {
              alert("Your Ad succefully Created.!");
              window.location.reload(false);
            } else {
              alert("Error..!");
            }
          });
        } else {
          alert("You need upload 4 Images.!");
        }
      } else {
        alert("Required fields.!");
      }
    } else {
      alert("Pofile picture Should be update before post ad .!");
    }

    // console.log(this.state.title);
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
      return (
        <div>
          <table width="100%" border="0">
            <tr>
              <td rowspan="2" style={{ verticalAlign: "top" }} width="20%">
                <SideBar />
              </td>
              <td width="80%">
                <DashNav />
              </td>
            </tr>
            <tr>
              <td align="center">
                <div style={{ paddingTop: "5%", alignSelf: "center" }}>
                  <h5
                    align="left"
                    style={{ color: "gray", paddingLeft: "10%" }}
                  >
                    Create Ad
                  </h5>
                  <hr />

                  <form style={{ backgroundColor: "silver", width: "80%" }}>
                    <br />
                    <table
                      width="60%"
                      cellpadding="5"
                      align="center"
                      style={{ backgroundColor: "silver" }}
                    >
                      <tr>
                        <td>Title</td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            value={this.state.title}
                            class="form-control"
                            onChange={this.handleChangeTitle}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Description</td>
                      </tr>
                      <tr>
                        <td>
                          <textarea
                            style={{ height: 120 }}
                            value={this.state.description}
                            class="form-control"
                            onChange={this.handleChangeDes}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Price</td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            value={this.state.price}
                            class="form-control"
                            onChange={this.handleChangePrice}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Features</td>
                      </tr>
                      <tr>
                        <td>
                          <textarea
                            style={{ height: 140 }}
                            value={this.state.features}
                            class="form-control"
                            onChange={this.handleChangeFeatures}
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>&nbsp;</td>
                      </tr>
                      <tr>
                        <td align="right">&nbsp;&nbsp;</td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                      </tr>
                    </table>
                  </form>
                  <form
                    onSubmit={this.handlePhoto}
                    enctype="multipart/form-data"
                    style={{ backgroundColor: "silver", width: "80%" }}
                  >
                    <table
                      width="60%"
                      cellpadding="5"
                      align="center"
                      style={{ backgroundColor: "silver" }}
                    >
                      <tr>
                        <td>
                          Images |{" "}
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
                          {/* <input type="file"  class="form-control" name="fileToUpload" id="fileToUpload" /> */}
                        </td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                      </tr>
                      <tr>
                        <td align="right">
                          {/* <button
                            type="button"
                            class="btn btn-danger"
                            onClick={this.handleDelete}
                          >
                            {" "}
                            Delete
                          </button> */}
                          &nbsp;&nbsp;
                          <button type="submit" class="btn btn-info">
                            {" "}
                            Upload
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                      </tr>

                      <tr>
                        <td>
                          <div style={{ width: "100%" }} class="card-body">
                            {this.state.image.map((data, index) => {
                              return (
                                <div
                                  // style={{
                                  //   background: "#CCCCCC",
                                  //   borderRadius: "5%",
                                  // }}
                                  class="card"
                                >
                                  <table width="100%">
                                    <tr>
                                      <td>
                                        <img
                                          style={{
                                            // borderRadius: "10%",

                                            paddingLeft: "10%",
                                            paddingTop: "5%",
                                            paddingBottom: "5%",

                                            width: 50,
                                            height: 50,
                                          }}
                                          key={data.id}
                                          src={data.photo}
                                        />
                                      </td>
                                      <td align="center">
                                        <input
                                          type="button"
                                          class="btn btn-danger"
                                          value="Delete"
                                          onClick={() =>
                                            this.handleDelete(data.id)
                                          }
                                        />
                                      </td>
                                    </tr>
                                  </table>
                                </div>
                              );
                            })}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </form>
                </div>
                <br />
                <button
                  type="submit"
                  class="btn btn-warning "
                  onClick={this.handleUpdate}
                >
                  Update Ad
                </button>
                &nbsp;
                <button
                  type="submit"
                  class="btn btn-success "
                  onClick={this.postAd}
                >
                  Post Ad
                </button>
                <br />
                <br />
                <br />
              </td>
            </tr>
          </table>
        </div>
      );
    }
  }
}

export default CreateAd;
