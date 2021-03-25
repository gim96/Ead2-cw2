import { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Signup1 from "./pages/Signup1";
import Signup2 from "./pages/Signup2";
import Success from "./pages/Success";
import Logout from "./pages/Logout";
import Dashboard from "./pages/Dashboard";
import CreateAd from "./pages/CreateAd";
import Myaccount from "./pages/Myaccount";
import Feed from "./pages/Feed";
import Navibar from "./components/Navibar";
import Signupb from "./pages/Signupb";
import Settings from "./pages/Settings";
import ViewAd from "./pages/ViewAd";
import Venders from "./pages/Venders";
import TestPage from "./TestPage";
import ImgSlider from "./components/ImgSlider";
import Photo from "./pages/Photo";
import ViewClient from "./pages/ViewClient";
import Payment from "./pages/Payment";
import Customers from "./pages/Customers";
import CustomerView from "./pages/CustomerView";
import cover from "./pages/com/img/cover.jpg";
import img1 from "./pages/com/img/img_1.jpg";
import img2 from "./pages/com/img/img_2.jpg";
import register from "./pages/com/img/register.png";
import create_order from "./pages/com/img/create-order.png";
import pay from "./pages/com/img/pay.png";
import withdraw from "./pages/com/img/withdraw.png";
import post from "./pages/com/img/post.png";
import getS from "./pages/com/img/get.png";
import service from "./pages/com/img/service.png";
import arr from "./pages/com/img/arr.png";
import "./components/styles/style.css";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route path="/" exact component={home} />
            <Route path="/pages/dashboard" component={Dashboard} />
            <Route path="/pages/login" component={Login} />
            <Route path="/testpage" component={TestPage} />
            <Route path="/pages/signup1" component={Signup1} />
            <Route path="/pages/signup2" component={Signup2} />
            <Route path="/pages/logout" component={Logout} />
            <Route path="/pages/success" component={Success} />
            <Route path="/pages/createad" component={CreateAd} />
            <Route path="/pages/myaccount" component={Myaccount} />
            <Route path="/pages/signupb" component={Signupb} />
            <Route path="/pages/settings" component={Settings} />
            <Route path="/pages/venders" component={Venders} />
            <Route path="/pages/feed" component={Feed} />
            <Route path="/pages/viewAd" component={ViewAd} />
            <Route path="/pages/viewclient" component={ViewClient} />
            <Route path="/pages/customers" component={Customers} />
            <Route path="/pages/customerview" component={CustomerView} />
          </div>
        </Router>
      </div>
    );
  }
}

const home = () => {
  return (
    <div>
      {/* <div class="row"> */}
      <a href="#home">
        <div
          class="arrow"
          style={{
            position: "fixed",
            top: "90%",
            left: "95%",
            width: 38,
            height: 36,
            backgroundColor: "silver",
            borderRadius: "5%",
          }}
        >
          <center>
            <img src={arr} style={{ verticalAlign: "middle" }} />
          </center>
        </div>
      </a>
      <div id="home">
        <Navibar />
        <img
          src={cover}
          width="100%"
          height="750px"
          alt="test"
          class="img-responsive"
        />
        <div style={{ alignItems: "flex-start" }} class="carousel-caption">
          <center>
            {" "}
            <div
              style={{
                backgroundColor: "gray",
                opacity: "75%",
                width: "75%",
                height: "250px",

                paddingTop: "5%",
              }}
            >
              <h1 style={{ color: "white" }}> Double Hearts</h1>
              <h6 style={{ color: "white" }}>Your dream Wedding planner</h6>
              <br />
              <center>
                <Link
                  to={{
                    pathname: "/pages/signup1",
                    state: { data: "C" },
                  }}
                >
                  <button type="button" class="btn btn-warning btn-lg">
                    {" "}
                    Be a customer
                  </button>
                </Link>
                &nbsp; &nbsp; &nbsp;
                <Link
                  to={{
                    pathname: "/pages/signup1",
                    state: { data: "V" },
                  }}
                >
                  <button type="button" class="btn btn-primary btn-lg">
                    {" "}
                    Be a Vender
                  </button>
                </Link>
              </center>
            </div>
          </center>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

      <div class="main" id="about">
        <table align="center" width="85%" cellPadding="10" border="0">
          <tr>
            <td>
              <img
                src={img1}
                width="250px"
                height="250px"
                style={{ borderRadius: "50%" }}
                alt="test"
              />
            </td>
            <td>
              <h6>Why Double hearts?</h6>
              <br></br>
              Basically Double hearts is a wedding event planner company.When
              considering wedding planning in Sri lanka it is so difficult.the
              reason is there is no proper managemnt between customers and
              service providers.So Double hearts give a solution for it
              connecting with Ecommerce digitalization.Using our new platform
              you can plan your wedding or venders can provide thier service
              better than earlier.
            </td>
          </tr>
          <tr>
            <td colSpan="2">&nbsp;</td>
          </tr>
          <tr>
            <td>
              <img
                src={img2}
                width="250px"
                height="250px"
                style={{ borderRadius: "50%" }}
                alt="test"
              />
            </td>

            <td>
              <h6>How to work with?</h6>
              <br></br>
              In here first you need to register with Double hearts before
              work.There is two different register methods .Method one is
              register as customer and second method is you can register as a
              Vender (service provider).
            </td>
          </tr>
        </table>
      </div>
      <br />
      <br></br>
      <br></br>

      <div
        class="main"
        id="proccess"
        style={{ width: "100%", backgroundColor: "#ddd", height: "25%" }}
      >
        <br></br>
        <br></br>
        <br></br>
        <h3 align="center">Customer's Role</h3>
        <br></br>
        <table align="center" width="75%" cellPadding="20">
          <tr>
            <td width="32%" align="center">
              <img src={register} width="150px" height="150px" alt="test" />
              <br />
              <h6>CREATE ACCOUNT</h6>
              <br />
              Before get all the services you should register Double hearts. For
              register select be a customer mode and submit the application. And
              vertify your email .Now you have successfully registered.
            </td>
            <td width="32%" align="center">
              <img src={create_order} width="150px" height="150px" alt="test" />
              <br />
              <h6>SEARCH ADS</h6>
              <br />
              After registration you can access your own account and if need
              some profile changes you can do it easily.Now you can select your
              venders according your satisfaction.
            </td>
            <td width="32%" align="center">
              <img src={getS} width="150px" height="150px" alt="test" />
              <br />
              <h6>GET THE SERVICE </h6>
              <br />
              After creating order we made response quickly and collect the more
              requirements that you need.And we make confirm with vender's
              acceptance.Then you can get the service as you wish.
            </td>
          </tr>
        </table>

        <br />
        <br />
        <br />
        <br></br>
        <h3 align="center">Vender's Role</h3>
        <br />
        <br />

        <table align="center" width="75%" cellPadding="20">
          <tr>
            <td width="32%" align="center">
              <img src={register} width="150px" height="150px" alt="test" />
              <br />
              <h6>CREATE ACCOUNT</h6>
              <br />
              Before get all the services you should register Double hearts. For
              register select be a customer mode and submit the application. And
              vertify your email and business.Now you have successfully
              registered.
            </td>
            <td width="32%" align="center">
              <img src={post} width="150px" height="150px" alt="test" />
              <br />
              <h6>POST AD</h6>
              <br />
              After the registration you can create only one ad.when create the
              ad you need to consider it make with a better attraction.Becouese
              it will helps grow up your business.
            </td>
            <td width="32%" align="center">
              <img src={service} width="150px" height="150px" alt="test" />
              <br />
              <br />
              <h6>PROVIDE THE SERVICE </h6>
              <br />
              In here you can widraw your money according to your customer
              accepeted service.
            </td>
          </tr>
        </table>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <div
        style={{
          width: "100%",
          height: "25%",
          backgroundColor: "#555",
          color: "white",
        }}
      >
        <br />
        <table align="center" cellPadding="10">
          <tr>
            <td align="center"> &#169; Double Hearts</td>
          </tr>
          <tr>
            <td align="center">Developer - KAHDSE201F-017 | W.M.GIM KELUM</td>
          </tr>
        </table>
        <br />
      </div>
    </div>
  );
};

export default App;
