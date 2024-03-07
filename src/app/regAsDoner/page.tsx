"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import PageTitle from "../components/pageTitle";
import Submiticon from "@/utils/images/submiticon";
import Submiticonwhite from "@/utils/images/submiticonwhite";
import State from "../../utils/objects";
import { fromInputs } from "@/utils/types";
import Style from "../../styles/regAsDoner.module.css";

export default function page() {
  const [submitState, setSubmitState] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const stateInstance = new State();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<fromInputs>();
  const onSubmit: SubmitHandler<fromInputs> = (data) =>
    console.log("*fromInputs**", data);

  const handleCheckboxChange = () => {
    if (submitState == true) {
      setSubmitState(false);
    } else setSubmitState(true);
  };

  const handleClickSubmit = () => {
    if (submitState == true) {
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

      <form
        className={`shadow-lg mb-5  rounded ${Style.contianer}`}
        onSubmit={handleSubmit(onSubmit)}
      >
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
              {...register("firstName")}
            />
            <input
              type="text"
              aria-label="Last name"
              placeholder="Last name"
              style={{ marginRight: "40px" }}
              className={Style.nameInputField}
              {...register("lastname")}
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
              {...register("phoneNumber")}
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
              {...register("email")}
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
              {...register("address")}
            />
            <div className={Style.agebloodcontainer}>
              <div className={Style.agebloodSubcontainer}>
                <div className={Style.agebloodTitleContiner}>
                  <span className={Style.inputTitle}>Age</span>
                </div>
                <input
                  type="text"
                  aria-label="Last name"
                  placeholder="Age"
                  className={Style.agebloodInputfield}
                  {...register("age")}
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
                    <option selected {...register("BloodGroup")}></option>
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
            <span style={{ marginRight: "40px" }} className={Style.inputTitle}>
              District
            </span>
          </div>
          <div style={{ width: "80vw", display: "flex", flexDirection: "row" }}>
            <div className={`dropdown ${Style.dorpdownBtnContainer}`}>
              <select
                className={`form-select    ${Style.inputDistrictContainer}`}
                aria-label="Large select example"
                {...register("district")}
              >
                <option selected></option>
                {stateInstance.keralaDistricts.map((grp: any) => (
                  <option key={grp}>{grp}</option>
                ))}
              </select>
            </div>
            <div className={Style.stateContainer}>
              <div className={Style.agebloodTitleContiner}>
                {" "}
                <span className={Style.inputTitle}>State</span>
              </div>
              <div className={`dropdown ${Style.dorpdownBtnContainer}`}>
                <select
                  className={`form-select  ${Style.stateDorpdownBtn}`}
                  aria-label="Large select example"
                  {...register("state")}
                >
                  <option selected></option>
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
          <div className={Style.inputTitleContainer}>
            <span style={{ marginRight: "40px" }} className={Style.inputTitle}>
              pin code
            </span>
          </div>
          <div style={{ width: "80vw", display: "flex", flexDirection: "row" }}>
            <input
              type="text"
              aria-label="pin code "
              style={{ marginRight: "98px" }}
              className={Style.nameInputField}
              {...register("pinCode")}
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
              {...register("lastDonationMonth")}
            />
            <input
              type="text"
              aria-label="year"
              placeholder="Year"
              style={{ marginRight: "40px" }}
              className={Style.nameInputField}
              {...register("lastDonationYear")}
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
              type="submit"
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
      </form>
    </div>
  );
}
