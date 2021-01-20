import React, { Component } from "react";
import Axios from "axios";
import URL from "./Url";
import Avatar from "react-avatar";
import Header from "./Header";

import {
  EmailShareButton,
  FacebookMessengerShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
  FacebookIcon,
  WhatsappIcon,
  EmailIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
} from "react-share";
import Copy from "./Copy";

export default class Downlines extends Component {
  constructor() {
    super();
    this.state = {
      profile: [],
    };
  }

  async componentDidMount() {
    await Axios.get(`${URL}/downlines/${this.props.match.params.myref}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        auth: localStorage.getItem("auth"),
      },
    })
      .then((res) => {
        this.setState({ profile: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container emp-profile">
          <form method="post">
            {this.state.profile.map((item, index) => {
              return (
                <div key={index}>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="profile-img">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                          alt=""
                        />
                        {/* <div className="file btn btn-lg btn-primary">
                          Change Photo
                          <input type="file" name="file" />
                        </div> */}
                      </div>
                      {/* <Avatar size="200" facebook-id="invalidfacebookusername" src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" /><br/>
        <button>Update</button> */}
                    </div>

                    <div className="col-md-6">
                      <div className="profile-head">
                        <h5>{item.username}</h5>
                        <h6>{item.address}</h6>

                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              id="home-tab"
                              data-toggle="tab"
                              href="#home"
                              role="tab"
                              aria-controls="home"
                              aria-selected="true"
                            >
                              About
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4">
                      {/* <div className="profile-work">
                        <p>WORK LINK</p>
                        <a href>Website Link</a>
                        <br />
                        <a href>Bootsnipp Profile</a>
                        <br />
                        <a href>Bootply Profile</a>
                        <p>SKILLS</p>
                        <a href>Web Designer</a>
                        <br />
                        <a href>Web Developer</a>
                        <br />
                        <a href>WordPress</a>
                        <br />
                        <a href>WooCommerce</a>
                        <br />
                        <a href>PHP, .Net</a>
                        <br />
                      </div> */}
                    </div>
                    <div className="col-md-8">
                      <div
                        className="tab-content profile-tab"
                        id="myTabContent"
                      >
                        <div
                          className="tab-pane fade show active"
                          id="home"
                          role="tabpanel"
                          aria-labelledby="home-tab"
                        >
                          <div className="row">
                            <div className="col-md-6">
                              <label>User Role</label>
                            </div>
                            <div className="col-md-6">
                              <p>{item.role}</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <label>Name</label>
                            </div>
                            <div className="col-md-6">
                              <p>{item.fullname}</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <label>Email</label>
                            </div>
                            <div className="col-md-6">
                              <p>{item.email}</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <label>Phone</label>
                            </div>
                            <div className="col-md-6">
                              <p>{item.mobile}</p>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-6">
                              <label>Check Your Downline</label>
                            </div>
                            <div className="col-md-6">
                              You Add {item.myrefused}
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <label>My referel Id</label>
                            </div>
                            <div className="col-md-6">
                              <p>{item.myref}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                </div>
              );
            })}
          </form>
        </div>
      </div>
    );
  }
}
