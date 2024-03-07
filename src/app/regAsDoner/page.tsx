"use client";
import React, { useState } from "react";
import PageTitle from "../components/PageTitle";
import Submiticon from "@/utils/images/submiticon";
import Submiticonwhite from "@/utils/images/submiticonwhite";
import State from "../../utils/objects";
import Style from "../../styles/RegAsDoner.module.css";

export default function RegAsDoner() {
  const [submitState, setSubmitState] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const stateInstance = new State();

  const handleCheckboxChange = () => {
    if (submitState) {
      setSubmitState(false);
    } else setSubmitState(true);
  };

  const handleClickSubmit = () => {
    if (submitState) {
      setAlertOpen(true);
      setAlertMessage("Done");
    } else {
      setAlertOpen(true);
      setAlertMessage("Click Agree");
    }
  };

  return (
    <div className={Style.mainContianer}>
      <PageTitle title="Register As Donor" />
      <div className={`shadow-lg mb-5  rounded p-4 ${Style.contianer}`}>
        <div className={Style.InputGroup}>
          <div className={Style.inputTitleContainer}>
            <span className={Style.inputTitle}>
              Full Name
            </span>
          </div>
          <div className={Style.inputContainer}>
            <input
              type="text"
              aria-label="First name"
              placeholder="Fist name"
              className={Style.nameInputField}
            />
            <input
              type="text"
              aria-label="Last name"
              placeholder="Last name"
              className={Style.nameInputField}
            />
            </div>
        </div>
        {/* /////////// */}
        <div className={Style.InputGroup}>
          <div className={Style.inputTitleContainer}>
            <span className={Style.inputTitle}>
              Phone Number
            </span>
          </div>
          <div className={Style.inputContainer}>
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
            <span className={Style.inputTitle}>
              Email
            </span>
          </div>
          <div className={Style.inputContainer}>
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
            <span className={Style.inputTitle}>
              Address
            </span>
          </div>
          <div className={Style.inputContainer}>
            <input
              type="text"
              aria-label="address"
              placeholder="address"
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
                <div className={`dropdown ${Style.dorpdownBtnContainer}`}>
                  <select
                    className={`form-select   ms-4 ${Style.dorpdownBtn}`}
                    aria-label="Large select example"
                  >
                    <option></option>
                    {stateInstance.bloodGroups.map((grp: any) => (
                      <option key={grp}>{grp}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //////////// */}
        <div className={Style.InputGroup}>
          <div className={Style.inputTitleContainer}>
            <span className={Style.inputTitle}>
              District
            </span>
          </div>
          <div className={Style.inputContainer}>
            <div className={`dropdown ${Style.dorpdownBtnContainerDist}`}>
              <select
                className={`form-select    ${Style.inputDistrictContainer}`}
                aria-label="Large select example"
              >
                <option></option>
                {stateInstance.keralaDistricts.map((grp: any) => (
                  <option key={grp}>{grp}</option>
                ))}
              </select>
            </div>
            <div className={Style.stateContainer}>
              <div className={Style.agebloodTitleContiner}>
                <span className={Style.inputTitle}>State</span>
              </div>
              <div className={`dropdown ${Style.dorpdownBtnContainerState}`}>
                <select
                  className={`form-select  ${Style.stateDorpdownBtn}`}
                  aria-label="Large select example"
                >
                  <option></option>
                  {stateInstance.indianStates.map((state: any) => (
                    <option key={state}>{state}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* /////// */}
        <div className={Style.InputGroup}>
          <div className={Style.inputTitleContainer} style={{margin: "0% 9% 0% 1.5%"}}>
            <span className={Style.inputTitle}>
              pin code
            </span>
          </div>
          <div className={Style.pinInputContainer} >
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
            <span className={Style.inputTitle}>
              Last Donation
            </span>
          </div>
          <div className={Style.inputContainer}>
            <input
              type="text"
              aria-label="month"
              placeholder="Month"
              className={Style.nameInputField}
            />
            <input
              type="text"
              aria-label="year"
              placeholder="Year"
              className={Style.nameInputField}
            />
            </div>
        </div>
        {/* /////// */}
        <div className={Style.tickBoxContainer}>
          <div className="form-check">
            <input
              className={Style.checkBox}
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onClick={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </label>
          </div>
        </div>
        {/* //// */}
        {submitState ? (
          <div className={Style.submitBoxContainer}>
            <button
              type="button"
              onClick={() => {
                handleClickSubmit();
              }}
              className={`shadow ${Style.subButtonWhite}`}
            >
              Submit <Submiticonwhite />
            </button>
          </div>
        ) : (
          <div className={Style.submitBoxContainer}>
            <button
              type="button"
              onClick={() => {
                handleClickSubmit();
              }}
              className={`shadow ${Style.subButton}`}
            >
              Submit <Submiticon />
            </button>
          </div>
        )}
        {alertOpen ? (
          <div className="alert alert-dark alert-dismissible" role="alert">
            {alertMessage}
            
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
