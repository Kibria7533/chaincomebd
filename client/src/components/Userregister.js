import React, { Component } from "react";
import nogodlogo from "../assets/logo/nogodlogo.png";
import bikashlogo from "../assets/logo/bikashlogo.jfif";
import roketlogo from "../assets/logo/roketlogo.png";
import logo200Image from "../assets/logo/1.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Myloader from "./Myloader";
import "react-toastify/dist/ReactToastify.css";
import URL from "./Url";
import DatePicker from "react-datepicker";
import { withRouter } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

class Userregister extends Component {
  constructor(props) {
    super();
    this.state = {
      fullname: "",
      username: "",
      mobile: "",
      email: "",
      dateofbirth: "",
      gender: "",
      postcode: "",
      paymenttype: "",
      transactionid: "",
      myparentref: "",
      password: "",
      password_confirmation: "",
      redirect: false,
      redirecttocheck: false,
      error: "",
      loding: false,
      isPasswordShown: false,
    };
  }

  notify = () => toast.error(this.state.error);
  savetostate = async (data) => {
    const name = data.target.name;
    const value = data.target.value;
    this.setState({ [name]: value });
  };

  formsubmit = async (e) => {
    e.preventDefault();
    this.setState({ loding: true });
    await axios
      .post(
        `${URL}/register`,
        {
          fullname: this.state.fullname,
          username: this.state.username,
          mobile: this.state.mobile,
          email: this.state.email,
          dateofbirth: this.state.dateofbirth,
          gender: this.state.gender,
          postcode: this.state.postcode,
          paymenttype: this.state.paymenttype,
          transactionid: this.state.transactionid,
          myparentref: this.state.myparentref,
          password: this.state.password,
          password_confirmation: this.state.password_confirmation,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((re) => {
        if (re.data.messege.success) {
          this.setState({ loding: false, redirect: true });
          this.setState({ error: "Please check Your Gmail To activate" });
          this.notify();
          this.props.history.push("/userregistermesege");
        }

        if (!re.data.messege.success) {
          this.setState({ loding: false, error: re.data.messege.msg });
          this.notify();
        }
      })
      .catch((err) => {
        // // console.log(err.response.data.message.msg)
        this.setState({ loding: false });
        //  this.notify();

        // // console.log(err)

        console.log("eee", err);
      });
  };

  togglePasswordVisiblity = () => {
    const { isPasswordShown } = this.state;
    this.setState({ isPasswordShown: !isPasswordShown });
  };
  render() {
    return (
      <div className="container register">
        {this.state.loding ? (
          <Myloader />
        ) : (
          <div className="row">
            <div className="text-center pb-4">
              <img
                src={logo200Image}
                className="rounded"
                style={{ width: 60, height: 60, cursor: "pointer" }}
                alt="logo"
              />
            </div>
            <form className="col-md-12 register-right">
              <div className="col-md-12 register-right">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <h3 className="register-heading">Apply as a Partner</h3>
                    <div className="row register-form">
                      <div className="col-md-10">
                        <div className="form-group">
                          <input
                            type="text"
                            name="fullname"
                            value={this.fullname}
                            onChange={this.savetostate}
                            className="form-control"
                            placeholder="Your Full Name *"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.savetostate}
                            className="form-control"
                            placeholder="Your Username *"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            name="mobile"
                            value={this.state.mobile}
                            onChange={this.savetostate}
                            className="form-control"
                            placeholder="Your Mobile Number"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.savetostate}
                            className="form-control"
                            placeholder="Your email*"
                          />
                        </div>
                        <div className="form-group">
                          <label>Please select your Date of birth</label>
                          <DatePicker
                            selected={this.state.dateofbirth}
                            onChange={(date) =>
                              this.setState({ dateofbirth: date })
                            }
                          />
                        </div>
                        <div className="form-group">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="exampleRadios1"
                              value="male"
                              name="gender"
                              onChange={this.savetostate}
                            />
                            <label
                              className="form-check-label"
                              for="exampleRadios1"
                            >
                              Male
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="exampleRadios2"
                              value="female"
                              name="gender"
                              onChange={this.savetostate}
                            />
                            <label
                              className="form-check-label"
                              for="exampleRadios2"
                            >
                              Female
                            </label>
                          </div>
                          <div className="form-check disabled">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="exampleRadios3"
                              value="others"
                              name="gender"
                              onChange={this.savetostate}
                            />
                            <label
                              className="form-check-label"
                              for="exampleRadios3"
                            >
                              Others
                            </label>
                          </div>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            name="postcode"
                            value={this.state.postcode}
                            onChange={this.savetostate}
                            className="form-control"
                            placeholder="Your Postcode*"
                          />
                        </div>
                        <div className="form-group">
                          <div>
                            <input
                              type="radio"
                              name="emotion"
                              id="sad"
                              className="input-hidden"
                              name="paymenttype"
                              onChange={this.savetostate}
                              value="nogod"
                            />
                            <label for="sad">
                              <img
                                style={{ width: "151px" }}
                                src={nogodlogo}
                                alt="I'm sad"
                              />
                            </label>

                            <input
                              type="radio"
                              name="emotion"
                              id="happy"
                              className="input-hidden"
                              name="paymenttype"
                              onChange={this.savetostate}
                              value="roket"
                            />
                            <label for="happy" style={{ marginLeft: "15px" }}>
                              <img
                                style={{ width: "151px" }}
                                src={roketlogo}
                                alt="I'm happy"
                              />
                            </label>
                            <input
                              type="radio"
                              name="emotion"
                              id="good"
                              className="input-hidden"
                              name="paymenttype"
                              onChange={this.savetostate}
                              value="bikash"
                            />
                            <label for="good" style={{ marginLeft: "15px" }}>
                              <img
                                style={{ width: "151px" }}
                                src={bikashlogo}
                                alt="I'm good"
                              />
                            </label>
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Payment Number</label>
                          <h4 style={{ marginLeft: "20px" }}>: 01854563442</h4>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            name="transactionid"
                            onChange={this.savetostate}
                            value={this.state.transactionid}
                            className="form-control"
                            placeholder="Your Transaction Id"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            name="myparentref"
                            value={this.state.myparentref}
                            onChange={this.savetostate}
                            className="form-control"
                            placeholder="Refarel Id"
                          />
                        </div>
                        <div
                          className="form-group"
                          style={{ display: "flex", flexDirection: "row" }}
                        >
                          <input
                            type={
                              this.state.isPasswordShown ? "text" : "password"
                            }
                            name="password"
                            value={this.state.password}
                            onChange={this.savetostate}
                            className="form-control"
                            placeholder="Password *"
                          />{" "}
                          <i
                            style={{ marginLeft: "12px", marginTop: "15px" }}
                            className="fa fa-eye password-icon"
                            onClick={this.togglePasswordVisiblity}
                          />
                        </div>
                        <div
                          className="form-group"
                          style={{ display: "flex", flexDirection: "row" }}
                        >
                          <input
                            type={
                              this.state.isPasswordShown ? "text" : "password"
                            }
                            name="password_confirmation"
                            value={this.state.password_confirmation}
                            onChange={this.savetostate}
                            className="form-control"
                            placeholder="Confirm Password *"
                          />
                          <i
                            style={{ marginLeft: "12px", marginTop: "15px" }}
                            className="fa fa-eye password-icon"
                            onClick={this.togglePasswordVisiblity}
                          />
                        </div>
                      </div>

                      <input
                        type="submit"
                        onClick={this.formsubmit}
                        className="btnRegister"
                        defaultValue="Register"
                      />
                    </div>
                    <div className="d-flex justify-content-center links">
                      <a href="/userlogin">Already have account?</a>
                    </div>
                    <div className="d-flex justify-content-center links">
                      <a href="/">Go Back</a>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Userregister);
