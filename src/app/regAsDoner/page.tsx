"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import FormInputText from "../components/formComponet/formtext";
import FormTextAreInput from "../components/formComponet/formtextarea";
import FormSelectInput from "../components/formComponet/formselect";
import SubButton from "../components/buttons/submitbutton";
import Alert from "../components/alert";
import PageTitle from "../components/pageTitle";
import Submiticon from "@/utils/images/submiticon";
import Submiticonwhite from "@/utils/images/submiticonwhite";
import State from "../../utils/objects";
import { fromInputs } from "@/utils/types";
import Style from "../../styles/regAsDoner.module.css";

export default function RegAsDoner() {
  const [submitState, setSubmitState] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const stateInstance = new State();

  const validationSchema = yup.object().shape({
    firstName: yup.string().required().label("First name"),
    phoneNumber: yup.string().required().label("Number"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<fromInputs>();
  const onSubmit: SubmitHandler<fromInputs> = (data) =>
    console.log("*fromInputs**", data);
    console.log("erorr data:::",errors);
    

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

      <form
        className={`shadow-lg mb-5  rounded ${Style.contianer}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={Style.InputGroup}>
          <div className={Style.inputTitleContainer}>
            <span className={Style.inputTitle}>Full Name</span>
          </div>
          <div className={Style.inputContainer}>
            <FormInputText
              css={Style.nameInputField}
              takeValue={{ ...register("firstName") }}
              label="First name"
              placeholder="Fist name"
              type="text"
            />
            <FormInputText
              css={Style.nameInputField}
              label="Last Name"
              placeholder="Last Name"
              takeValue={{ ...register("lastname") }}
              type="text"
            />
          </div>
        </div>
        {/* /////////// */}
        <div className={Style.InputGroup}>
          <div className={Style.inputTitleContainer}>
            <span className={Style.inputTitle}>Phone Number</span>
          </div>
          <div className={Style.inputContainer}>
            <FormInputText
              type="text"
              label="Number"
              placeholder="Number"
              css={Style.phoneInputField}
              takeValue={{ ...register("phoneNumber") }}
            />
          </div>
        </div>
        {/* /////////// */}
        <div className={Style.InputGroup}>
          <div className={Style.inputTitleContainer}>
            <span className={Style.inputTitle}>Email</span>
          </div>
          <div className={Style.inputContainer}>
            <FormInputText
              type="text"
              label="Email"
              placeholder="Mail Id"
              css={Style.phoneInputField}
              takeValue={{ ...register("email") }}
            />
          </div>
        </div>
        {/* /////// */}
        <div className={Style.InputGroup}>
          <div className={Style.addressTitleContainer}>
            <span className={Style.inputTitle}>Address</span>
          </div>
          <div className={Style.inputContainer}>
            <FormTextAreInput
              label="address"
              placeholder="address"
              css={Style.addressInputField}
              takeValue={{ ...register("address") }}
            />
            <div className={Style.agebloodcontainer}>
              <div className={Style.agebloodSubcontainer}>
                <div className={Style.agebloodTitleContiner}>
                  <span className={Style.inputTitle}>Age</span>
                </div>
                <FormInputText
                  type="text"
                  label="Last Name"
                  placeholder="Age"
                  css={Style.agebloodInputfield}
                  takeValue={{ ...register("age") }}
                />
              </div>
              <div className={Style.agebloodSubcontainer}>
                <div className={Style.agebloodTitleContiner}>
                  {" "}
                  <span className={Style.inputTitle}>Blood Group</span>
                </div>
                <div className={`dropdown ${Style.dorpdownBtnContainer}`}>
                  <FormSelectInput
                    css={`form-select  ms-4 ${Style.dorpdownBtn}`}
                    label="Large select example"
                    takeValue={{ ...register("BloodGroup") }}
                    options={stateInstance.bloodGroups}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //////////// */}
        <div className={Style.InputGroup}>
          <div className={Style.inputTitleContainer}>
            <span className={Style.inputTitle}>District</span>
          </div>
          <div className={Style.inputContainer}>
            <div className={`dropdown ${Style.dorpdownBtnContainerDist}`}>
              <FormSelectInput
                css={`form-select    ${Style.inputDistrictContainer}`}
                label="Large select example"
                takeValue={{ ...register("district") }}
                options={stateInstance.keralaDistricts}
              />
            </div>
            <div className={Style.stateContainer}>
              <div className={Style.agebloodTitleContiner}>
                <span className={Style.inputTitle}>State</span>
              </div>
              <div className={`dropdown ${Style.dorpdownBtnContainerState}`}>
                <FormSelectInput
                  css={Style.stateDorpdownBtn}
                  label="large select example"
                  takeValue={{ ...register("state") }}
                  options={stateInstance.indianStates}
                />
              </div>
            </div>
          </div>
        </div>
        {/* /////// */}
        <div className={Style.InputGroup}>
          <div
            className={Style.inputTitleContainer}
            style={{ marginRight: "51px" }}
          >
            <span className={Style.inputTitle}>pin code</span>
          </div>
          <div className={Style.pinInputContainer}>
            <FormInputText
              type="text"
              label="Pin Code"
              placeholder="Pin Code"
              css={Style.nameInputField}
              takeValue={{ ...register("pinCode") }}
            />
          </div>
        </div>
        {/* ///// */}
        <div className={Style.InputGroup}>
          <div
            className={Style.inputTitleContainer}
            style={{ marginRight: "51px" }}
          >
            <span className={Style.inputTitle}>Last Donation</span>
          </div>
          <div className={Style.pinInputContainer}>
            <FormInputText
              type="month"
              label="month"
              css={Style.nameInputField}
              takeValue={{ ...register("lastDonationdate") }}
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
            <SubButton
              name="Submit"
              type="submit"
              css={`shadow ${Style.subButtonWhite}`}
              onClick={handleClickSubmit}
              icon={<Submiticonwhite />}
            />
          </div>
        ) : (
          <div className={Style.submitBoxContainer}>
            <SubButton
              name="Submit"
              type="button"
              css={`shadow ${Style.subButton}`}
              onClick={handleClickSubmit}
              icon={<Submiticon />}
            />
          </div>
        )}
        {alertOpen ? (
          <Alert
            alertMessage={alertMessage}
            css="alert alert-dark alert-dismissible"
          />
        ) : (
          <></>
        )}
      </form>
    </div>
  );
}
