import React, { useState, useEffect } from "react";
import axios from "axios";
import { Camera, Plus } from "lucide-react";
import "./SignUp.scss";
import Banner from "../../commonComponents/Banner/Banner";
import Footer from "../../commonComponents/Footer/Footer";
import { register, verifyOTP, resend } from "../../features/authSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [profileImage, setProfileImage] = useState(
    "https://wallpapercave.com/wp/wp14232509.jpg"
  );
  const dispatch = useDispatch();
  const { status, error, verify } = useSelector((state) => state.auth);
  const [uploading, setUploading] = useState(false);
  const [otpTimer, setOtpTimer] = useState(60);
  const [otp, setOtp] = useState("");
  const [showResendButton, setShowResendButton] = useState(false);

  const [userName, setUserName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [department, setDepartment] = useState("");
  const [userAddress, setAddress] = useState("");
  const [fb, setFb] = useState("");
  const [linkedin, setIn] = useState("");
  const [twitter, setTwit] = useState("");
  const [userBio, setUserBio] = useState("");
  const [profile, setProfile] = useState([]);
  const [err, SetErr] = useState(false);
  const [show, setShow] = useState(false);

  console.log("Status", status);

  const history = useNavigate();

  useEffect(() => {
    if (status === "200" && otpTimer >= 0) {
      const timer = setInterval(() => {
        setOtpTimer((prev) => prev - 1);
      }, 1000);

      if (otpTimer === 0) {
        setShowResendButton(true);
      }
      return () => clearInterval(timer);
    }
  }, [status, otpTimer]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
      setProfile([file]);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (profile.length === 0) {
      alert("Please select an image before submitting.");
      return;
    }

    const body = {
      userName,
      userEmail,
      userAddress,
      userBio,
      userPassword,
      confirm,
      department,
      linkedin,
      fb,
      twitter,
    };
    console.log(body);

    if (userPassword != confirm) {
      SetErr(true);
    } else {
      SetErr(false);
      dispatch(register(body));
      setShow(true);
    }
  };

  const handleResendOtp = () => {
    setOtpTimer(60);
    setShowResendButton(false);
    dispatch(resend());
  };

  const handleOtpVerification = async () => {
    const info = await uploadImg();
    info.OTP = otp;
    dispatch(verifyOTP(info));
  };

  useEffect(() => {
    if (verify) {
      history("/");
    }
  }, [verify]);

  const uploadImg = async () => {
    const file = profile[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "letswork");
    formData.append("api_key", "999429283794872");
    try {
      setUploading(true);
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/deqnxyzio/image/upload`,
        formData
      );
      setUploading(false);
      const { secure_url, public_id, url } = response.data;
      return { secure_url, public_id, url };
    } catch (error) {
      setUploading(false);
      console.error("Upload failed:", error);
      alert("Failed to upload the image.");
    }
  };

  return (
    <div className="our-SignUp vh-100 overflow-y-auto register_container">
      <Banner
        image={"https://wallpapercave.com/wp/wp14232509.jpg"}
        title={"Create Your Free Account!!!!"}
        lead={"Empowering Your Digital Journey with Cutting-Edge Solutions"}
      />

      <div className="container mt-5 mb-4">
        <div className="row">
          <div className="col-md-4 mb-4 p-2">
            <div className="card reg_left custome_radius box_shadow">
              <div className="card-body text-center">
                <div className="position-relative mb-4 d-inline-block">
                  <div
                    className="rounded-circle box_shadow m-1 custome_border d-flex align-items-center justify-content-center"
                    style={{ width: "200px", height: "200px" }}
                  >
                    <img
                      src={profileImage}
                      alt="Employee"
                      className="profile_img"
                      style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                    <Camera size={48} className="text-secondary" />
                  </div>
                  <div className="position-absolute bottom-0 end-0">
                    <label className="btn btn-sm rounded-circle custome_border">
                      <Plus />
                      <input
                        type="file"
                        className="d-none"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </label>
                  </div>
                </div>

                <div className="social-links mt-4 reg_lef">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control reg_left custome_border"
                      placeholder="LinkedIn URL"
                      name="linkedin"
                      value={linkedin}
                      onChange={(e) => setIn(e.target.value)}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control reg_left"
                      placeholder="Twitter URL"
                      name="twitter"
                      value={twitter}
                      onChange={(e) => setTwit(e.target.value)}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control reg_left"
                      placeholder="Facebook URL"
                      name="fb"
                      value={fb}
                      onChange={(e) => setFb(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="card bg-transparent border-0 p-2">
              <div className="card-body reg_right custome_radius box_shadow">
                <h3 className="card-title mb-4">Employee Registration</h3>
                <form onSubmit={handleFormSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="userName"
                        placeholder="First Name"
                        required
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        placeholder="Bio"
                        className="form-control"
                        name="bio"
                        required
                        value={userBio}
                        onChange={(e) => setUserBio(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      name="email"
                      required
                      value={userEmail}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control"
                      name="password"
                      required
                      value={userPassword}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className={`mb-3 ${err ? "error" : ""}`}>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="form-control m-0"
                      name="confirmPassword"
                      required
                      value={confirm}
                      onChange={(e) => {
                        setConfirm(e.target.value);
                      }}
                    />
                    <p
                      className={`${
                        err ? "d-flex" : "d-none"
                      } justify-content-start f11 px-1`}
                    >
                      Password Not Matched
                    </p>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <select
                        className="form-select"
                        name="department"
                        required
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                      >
                        <option value="">Select Department</option>
                        <option value="IT">IT</option>
                        <option value="HR">HR</option>
                        <option value="Finance">Finance</option>
                        <option value="Marketing">Marketing</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-3">
                    <textarea
                      placeholder="Address..."
                      className="form-control area"
                      rows="7"
                      name="address"
                      required
                      value={userAddress}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>

                  <div className="text-end mt-4">
                    <button
                      type="submit"
                      className={`btn btn-danger ${show ? "disabled" : ""}`}
                    >
                      {uploading ? "Uploading..." : "Register Employee"}
                    </button>
                  </div>

                  <div
                    className={`otp-section mt-4 ${
                      show ? "d-block" : "d-none"
                    }`}
                  >
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter OTP"
                        aria-label="Enter OTP"
                        aria-describedby="basic-addon2"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                      />
                      {showResendButton ? (
                        <button
                          className={`btn text-light`}
                          type="button"
                          onClick={handleResendOtp}
                          style={{
                            height: "50px",
                            background: "rgb(164, 161, 161)",
                          }}
                        >
                          resend
                        </button>
                      ) : (
                        <button
                          className={`btn text-light ${
                            status === "loading" ? "disabled" : ""
                          }`}
                          id="submit"
                          type="button"
                          onClick={handleOtpVerification}
                          style={{
                            height: "50px",
                            background: "rgb(164, 161, 161)",
                          }}
                        >
                          Submit
                        </button>
                      )}
                    </div>
                    <div
                      className={`text-muted ${
                        !showResendButton ? "d-block" : "d-none"
                      }`}
                    >
                      Time left: {otpTimer}s
                    </div>
                  </div>

                  {error !== null ? <p>{error}</p> : null}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignUp;
