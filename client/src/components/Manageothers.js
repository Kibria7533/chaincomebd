import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dropzone from "react-dropzone";
import axios from "axios";
import URL from "./Url";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import Dropdown from "react-bootstrap/Dropdown";
class Manageothers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldcommission: "",
      commission: "",
      scommission: "",
      scommissionholder: "",
      tcommission: "",
      tcommissionholder: "",
      loding: false,
    };
  }

  Change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const { commission } = this.state;

    // if (!title) {
    //   return alert("Give a title of the product!");
    // }

    if (!commission) {
      return alert("Give a commission price");
    }

    const variables = {
      commission,
    };

    await axios.post(`${URL}/commissionsetting`, variables).then((response) => {
      console.log(response);
      if (response.data.success) {
        this.componentDidMount();
        this.setState({ commission: "" });
        alert("commission Succesfully added");
      } else {
        alert("Failed to add commission");
      }
    });
  };
  onsSubmit = async (event) => {
    event.preventDefault();
    const { scommission } = this.state;

    // if (!title) {
    //   return alert("Give a title of the product!");
    // }

    if (!scommission) {
      return alert("Give a commission price");
    }

    const variables = {
      scommission,
    };

    await axios
      .post(`${URL}/scommissionsetting`, variables)
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          this.componentDidMount();
          this.setState({ scommissionholder: "" });
          alert("Second generation commission Succesfully added");
        } else {
          alert("Failed to add commission");
        }
      });
  };
  ontSubmit = async (event) => {
    event.preventDefault();
    const { tcommission } = this.state;

    // if (!title) {
    //   return alert("Give a title of the product!");
    // }

    if (!tcommission) {
      return alert("Give a commission price");
    }

    const variables = {
      tcommission,
    };

    await axios
      .post(`${URL}/tcommissionsetting`, variables)
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          this.componentDidMount();
          this.setState({ tcommissionholder: "" });
          alert("Third generation commission Succesfully added");
        } else {
          alert("Failed to add commission");
        }
      });
  };
  fetchcommission = async () => {
    this.setState({ loding: false });
    await axios
      .get(`${URL}/fetchcommission`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((data) => {
        console.log("uuu", data.data[0].commission);
        if (data.data[0].commission.length) {
          this.setState({
            oldcommission: data.data[0].commission,
            scommissionholder: data.data[0].scommission,
            tcommissionholder: data.data[0].tcommission,
            loding: false,
          });
        } else {
          this.setState({
            oldcommission: "",
            scommissionholder: "",
            tcommissionholder: "",
            loding: false,
          });
        }
      })
      .catch((err) => {
        console.log("ffff", err);
      });
  };

  componentDidMount() {
    this.fetchcommission();
  }
  render() {
    return (
      <div className="d-flex" id="wrapper">
        <div className="bg-light border-right" id="sidebar-wrapper">
          <div className="sidebar-heading">
            {" "}
            <a href="/">Chaincome</a>{" "}
          </div>
          <br />
          <br />
          <div className="list-group list-group-flush">
            <Link
              to="/dashboard"
              className="list-group-item list-group-item-action bg-light"
            >
              Dashboard
            </Link>
            <Dropdown>
              <Dropdown.Toggle
                style={{ fontSize: "0px", width: "0px", height: "0px" }}
                id="dropdown-basic"
              ></Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-2">
                  <Link to="/alluser" className="dropdown-item">
                    All User
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <Link to="/userrequest" className="dropdown-item">
                    User Requests
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle
                style={{ fontSize: "0px", width: "0px", height: "0px" }}
                id="dropdown-basic"
              ></Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-2">
                  <Link to="/allwithdraw" className="dropdown-item">
                    All Withdraws
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <Link to="/withdrawrequest" className="dropdown-item">
                    Withdraw Requests
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle
                style={{ fontSize: "0px", width: "0px", height: "0px" }}
                id="dropdown-basic"
              ></Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-2">
                  <Link to="/manageslider" className="dropdown-item">
                    Manage Slider
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <Link to="/managegreeting" className="dropdown-item">
                    Manage Gretting
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <Link to="/manageservices" className="dropdown-item">
                    Manage Services
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <Link to="manageportfolio" className="dropdown-item">
                    Manage Portfolio
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <Link to="/managebussiness" className="dropdown-item">
                    Manage Business
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <Link to="/managemission" className="dropdown-item">
                    Manage Mission
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <Link to="/managevission" className="dropdown-item">
                    Manage Vission
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <Link to="/manageteam" className="dropdown-item">
                    Manage Team
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <Link to="/managefaq" className="dropdown-item">
                    Manage Faq
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <Link to="/manageothers" className="dropdown-item">
                    Others
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <div id="page-content-wrapper">
          <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Super Admin ?
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-caret-down"></i>
                  </Link>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" to="/">
                      Logout
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container-fluid">
            <div className="row">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">
                    First genaration parent commission =
                    {this.state.oldcommission}
                  </label>
                  <input
                    type="text"
                    name="commission"
                    onChange={this.Change}
                    value={this.state.commission}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter First genaration parent commission"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="row">
              <form onSubmit={this.onsSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">
                    Second genaration parent commission =
                    {this.state.scommissionholder}
                  </label>
                  <input
                    type="text"
                    name="scommission"
                    onChange={this.Change}
                    value={this.state.scommission}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter second genaration parent commission"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="row">
              <form onSubmit={this.ontSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">
                    Third genaration parent commission =
                    {this.state.tcommissionholder}
                  </label>
                  <input
                    type="text"
                    name="tcommission"
                    onChange={this.Change}
                    value={this.state.tcommission}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Third genaration parent commission"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Manageothers;
