import React from "react";
import PageTitle from "../componets/pageTitle";
import Submiticon from "@/utils/images/submiticon";
import Style from "../../styles/regAsDoner.module.css";

export default function page() {
  return (
    <div className={Style.mainContianer}>
      <PageTitle title="Register As Donor" />
      <div className={`shadow  mb-5  rounded ${Style.contianer}`}>
        <div className={Style.InputGroup}>
          <div className={Style.inputTitleContainer}>
            <span style={{ marginRight: "40px" }} className={Style.inputTitle}>
              Full Name
            </span>
          </div>
          <div style={{ width: "80vw" }}>
            <input
              type="text"
              aria-label="First name"
              placeholder="Fist name"
              style={{ marginRight: "100px" }}
              className={Style.nameInputField}
            />
            <input
              type="text"
              aria-label="Last name"
              placeholder="Last name"
              style={{ marginRight: "40px" }}
              className={Style.nameInputField}
            />
          </div>
        </div>
        {/* /////////// */}
        <div className={Style.InputGroup}>
          <div className={Style.inputTitleContainer}>
            <span style={{ marginRight: "40px" }} className={Style.inputTitle}>
              Phone Number
            </span>
          </div>
          <div style={{ width: "80vw" }}>
            <input
              type="text"
              aria-label="Number"
              placeholder="Number"
              className={Style.phoneInputField}
            />
          </div>
        </div>
        {/* /////////// */}
        <div className={Style.InputGroup}>
          <div className={Style.inputTitleContainer}>
            <span style={{ marginRight: "40px" }} className={Style.inputTitle}>
              Email
            </span>
          </div>
          <div style={{ width: "80vw" }}>
            <input
              type="text"
              aria-label="Email"
              placeholder="Mail  Id "
              className={Style.phoneInputField}
            />
          </div>
        </div>
        {/* /////// */}
        <div className={Style.InputGroup}>
          <div className={Style.addressTitleContainer}>
            <span style={{ marginRight: "40px" }} className={Style.inputTitle}>
              Address
            </span>
          </div>
          <div style={{ width: "80vw", display: "flex", flexDirection: "row" }}>
            <input
              type="text"
              aria-label="address"
              placeholder="address"
              style={{ marginRight: "100px" }}
              className={Style.addressInputField}
            />
            <div className={Style.agebloodcontainer}>
              <div className={Style.agebloodSubcontainer}>
                <div className={Style.agebloodTitleContiner}>
                  <span className={Style.inputTitle}>Age</span>
                </div>
                <input
                  type="text"
                  aria-label="Last name"
                  placeholder="Last name"
                  className={Style.agebloodInputfield}
                />
              </div>
              <div className={Style.agebloodSubcontainer}>
                <div className={Style.agebloodTitleContiner}>
                  {" "}
                  <span className={Style.inputTitle}>Blood Group</span>
                </div>
                <input
                  type="text"
                  aria-label="Last name"
                  placeholder="Last name"
                  className={Style.agebloodInputfield}
                />
                <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown button
    </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
              </div>
            </div>
          </div>
        </div>
        {/* //////////// */}
        <div className={Style.InputGroup}>
          <div className={Style.inputTitleContainer}>
            <span style={{ marginRight: "40px" }} className={Style.inputTitle}>
            District
            </span>
          </div>
          <div style={{ width: "80vw" , display: "flex", flexDirection: "row" }}>
            <input
              type="text"
              aria-label="First name"
              style={{ marginRight: "98px" }}
              className={Style.nameInputField}
            />
           <div className={Style.stateContainer}>
                <div className={Style.agebloodTitleContiner}>
                  {" "}
                  <span className={Style.inputTitle}>State</span>
                </div>
                <input
                  type="text"
                  aria-label="state"
                  placeholder=""
                  className={Style.stateInputfield}
                />
              </div>
          </div>
        </div>
        {/* /////// */}
        <div className={Style.InputGroup}>
          <div className={Style.inputTitleContainer}>
            <span style={{ marginRight: "40px" }} className={Style.inputTitle}>
            pin code
            </span>
          </div>
          <div style={{ width: "80vw" , display: "flex", flexDirection: "row" }}>
            <input
              type="text"
              aria-label="pin code "
              style={{ marginRight: "98px" }}
              className={Style.nameInputField}
            />
          </div>
        </div>
        {/* ///// */}
        <div className={Style.InputGroup}>
          <div className={Style.inputTitleContainer}>
            <span style={{ marginRight: "40px" }} className={Style.inputTitle}>
            Last Donation
            </span>
          </div>
          <div style={{ width: "80vw" }}>
            <input
              type="text"
              aria-label="month"
              placeholder="Month"
              style={{ marginRight: "100px" }}
              className={Style.nameInputField}
            />
            <input
              type="text"
              aria-label="year"
              placeholder="Year"
              style={{ marginRight: "40px" }}
              className={Style.nameInputField}
            />
          </div>
        </div>
        {/* /////// */}
        <div className={Style.tickBoxContainer}>
        <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
      <label className="form-check-label" htmlFor="flexCheckDefault">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      </label>
    </div>
   
        </div>
        {/* //// */}
        
        <div className={Style.submitBoxContainer}>
        <button type="button" className={`shadow ${Style.subButton}`}>Submit <Submiticon/></button>

        </div>

        halo
      </div>
    </div>
  );
}
