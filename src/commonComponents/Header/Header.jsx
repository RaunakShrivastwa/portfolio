import React, { useEffect, useState } from "react";
import "./Header.scss";
import {
  AlignCenter,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Moon,
  Phone,
  Sun,
  X,
} from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import SignIn from "../../authComponent/SignIn/SignIn";
import { useDispatch, useSelector } from "react-redux";
import { LogOut } from "lucide-react";
import { logout, performLogout } from "../../features/authSlice.js";

const Header = ({ setTheme, theme }) => {
  const [toggle, setToggle] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useNavigate();
  const Toggle = () => {
    setToggle(!toggle);
    toggle ? setTheme("light_theme") : setTheme("dark_theme");
  };

  const { serverStatus } = useSelector((state) => state.server);

  const handleLogout = async () => {
    try {
      await dispatch(performLogout()).unwrap();
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      dispatch(logout());
      history("/");
    }
  };
  return (
    <>
      <header
        className={`box_shadow parent position-fixed overflow-hidden  ${theme}`}
      >
        <div className="header container-lg">
          <Link to="/">
            <img
              className="logo"
              src="https://cdn-icons-png.flaticon.com/256/8904/8904881.png"
              alt=""
            />
          </Link>
          <div className="header_items_container">
            <span className="icons box_shadow phone">
              <Phone className="i24" />
            </span>
            <span className="icons box_shadow mail">
              <Mail className="i24 mail" />
            </span>
            <span className="icons box_shadow instagram">
              {" "}
              <Instagram className="i24" />
            </span>
            <span className="icons box_shadow facebook">
              {" "}
              <Facebook className="i24" />
            </span>
            <span className="icons box_shadow linkedin">
              <Linkedin className="i24" />
            </span>
            <button className="quotes get_quotes btn custome_radius f19">
              Get Quotes
            </button>
            <button className="quotes hire btn custome_radius f19">
              Hire Us
            </button>

            {serverStatus === "failed" ? (
              <img
                className={`logo box_shadow p-1`}
                src={
                  "http://res.cloudinary.com/deqnxyzio/image/upload/v1735400227/IMG20241130205144_ex6rsd.jpg"
                }
                alt="https://cdn-icons-png.flaticon.com/128/16683/16683419.png"
              />
            ) : (
              <div>
                <p className={`gap-3 ${user ? "d-none" : "d-flex"}`}>
                  <span
                    className="span signin"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    SignIn
                  </span>
                  <SignIn />
                  <Link
                    to="/api/letswork/register/account"
                    className="span signup me-5"
                  >
                    SignUp
                  </Link>
                </p>
                <img
                  className={`logo box_shadow p-1 ${
                    user ? "d-block" : "d-none"
                  }`}
                  src={user?.profile}
                  alt="https://cdn-icons-png.flaticon.com/128/16683/16683419.png"
                />
              </div>
            )}
            <p
              className="toggle_icon"
              title={`${
                toggle ? "You are In Night Mode" : "You are In Day Mode"
              }`}
              onClick={Toggle}
            >
              {toggle ? <Sun /> : <Moon />}
            </p>

            <p
              className="menus"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling"
            >
              <span className="span">Menu</span>
              <AlignCenter className="i24" />
            </p>
          </div>
        </div>
      </header>

      {/* for the menubar */}
      <div
        class={`offcanvas offcanvas_sidebar box_shadow custome_border offcanvas-end m-3 custome_radius ${theme}`}
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div class="offcanvas-body d-flex flex-column p-0">
          <div className="header_parent p-3">
            <div className="side_header box_shadow  custome_radius mb-4 d-flex gap-2 p-2 h-auto flex-wrap">
              <span className="icons box_shadow phone">
                <Phone className="i24" />
              </span>
              <span className="icons box_shadow mail">
                <Mail className="i24 mail" />
              </span>
              <span className="icons box_shadow instagram">
                {" "}
                <Instagram className="i24" />
              </span>
              <span
                className="icons box_shadow facebook text-danger"
                data-bs-dismiss="offcanvas"
              >
                {" "}
                <X className="i24" />
              </span>
            </div>
          </div>

          <div className="sidebar_container w-100 d-flex flex-column ">
            <div>
              <Link
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={`span signin ${user ? "d-none" : "d-block"}`}
              >
                SignIn
              </Link>
              <Link
                to="/api/letswork/register/account"
                className={`span signup me-5 ${user ? "d-none" : "d-block"}`}
              >
                SignUp
              </Link>
            </div>
            <Link to={"/api/letswork/about"} className="span signup me-5">
              About Us
            </Link>
            <Link to="/api/letswork/services" className="span signup me-5">
              Our Services
            </Link>
            <div className="mt-3 d-flex w-100 q_btn gap-4 justify-content-center">
              <button className="quotes get_quotes btn custome_radius f19">
                Get Quotes
              </button>
              <button className="quotes hire btn custome_radius f19">
                Hire Us
              </button>
            </div>

            <Link className="span signup me-5" to={"/api/letswork/our/work"}>
              Our Work
            </Link>
            <Link className="span signup me-5" to={"/api/letswork/career"}>
              Career
            </Link>
            <Link className="span signup me-5" to={"/api/letswork/blog"}>
              Blogs
            </Link>
            <Link className="span signup me-5">Project Live Status</Link>
            <Link className="span signup me-5" to={"/api/letswork/contact/us"}>
              Contacts
            </Link>
            <Link className="span signup me-5">Free API</Link>
            <Link className="span signup me-5">Articles</Link>
            <Link className="span signup me-5">Courses</Link>
            <Link className="span signup me-5">Session</Link>
            <Link className="span signup me-5">Advices- $</Link>
            <Link className="span signup me-5 d-none">Free API</Link>
            <Link className="span signup me-5 d-none">
              Free APffffffffffffffffffI
            </Link>
            <Link to="/api/letswork/dashboard" className="span signup me-5">
              Dashboard
            </Link>
            <Link to="/api/letswork/project" className="span signup me-5">
              Project
            </Link>
            <Link to="/api/letswork/clients" className="span signup me-5">
              Clients
            </Link>

            <p
              className="span signup me-5 mb-3 d-flex gap-2"
              onClick={handleLogout}
            >
              <LogOut />
              <span>Logout</span>
            </p>
          </div>

          <div className="footer_container w-100 p-3">
            <div className="footer p-2 box_shadow mb-3 custome_radius d-flex gap-4  align-items-center">
              <img
                className="logo custome_border"
                src={
                  user
                    ? user?.profile
                    : "https://cdn-icons-png.flaticon.com/128/16683/16683419.png"
                }
                alt=""
              />
              <span className="name fw-bold f20">
                {user ? user?.userName : "Guest"}
              </span>
              <p
                className="toggle_icon1 d-none"
                title={`${
                  toggle ? "You are In Night Mode" : "You are In Day Mode"
                }`}
                onClick={Toggle}
              >
                {toggle ? <Sun /> : <Moon />}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
