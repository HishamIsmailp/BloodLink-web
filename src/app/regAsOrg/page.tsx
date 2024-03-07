"use client";
import React, { useState } from "react";
import PageTitle from "../components/PageTitle";
import Submiticon from "@/utils/images/submiticon";
import Submiticonwhite from "@/utils/images/submiticonwhite";
import Style from "../../styles/RegAsOrg.module.css";

export default function RegAsDoner() {
  const [submitState, setSubmitState] = useState(false);

  const handleClickSubmit = () => {
    setSubmitState(true);
  };

  return (
    <div className={Style.mainContianer}>
      <PageTitle title="Register As Donor" />
      <div className={`shadow-lg mb-5  rounded p-4 ${Style.contianer}`}>
        <div className={Style.InputGroup}>
          <div className={Style.inputTitleContainer}>
            <span className={Style.inputTitle}>Organization Name</span>
          </div>
          <div className={Style.inputContainer}>
            <input
              type="text"
              aria-label="Name"
              placeholder="Fist name"
              className={Style.nameInputField}
            />
          </div>
          </div>
          {/* /////// */}
          <div className={Style.addressTitleContainer}>
            <span className={Style.inputTitle}>Address</span>
          </div>
          <div className={Style.inputContainer}>
            <input
              type="text"
              aria-label="address"
              placeholder="address"
              className={Style.addressInputField}
            />
          </div>
          {/* ////////// */}
          <div className={Style.InputGroup}>
            <div className={Style.inputTitleContainer}>
              <span className={Style.inputTitle}>Organization Name</span>
            </div>
            <div className={Style.inputContainer}>
              <input
                type="text"
                aria-label="Name"
                placeholder="Fist name"
                className={Style.nameInputField}
              />
            </div>
          </div>

          {/* /////// */}
          <div className={Style.InputGroup}>
            <div className={Style.inputTitleContainer}>
              <span className={Style.inputTitle}>Organization Name</span>
            </div>
            <div className={Style.inputContainer}>
              <input
                type="text"
                aria-label="Name"
                placeholder="Fist name"
                className={Style.nameInputField}
              />
            </div>
          </div>

          {/* ///////// */}
        
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
      </div>
    </div>
  );
}
