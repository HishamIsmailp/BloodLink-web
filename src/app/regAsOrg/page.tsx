"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import PageTitle from "../components/pageTitle";
import { OrgFromInputs } from "@/utils/types";
import FormInputText from "../components/formComponet/formtext";
import FormTextAreInput from "../components/formComponet/formtextarea";
import SubButton from "../components/buttons/submitbutton";
import Submiticonwhite from "@/utils/images/submiticonwhite";
import Style from "../../styles/RegAsOrg.module.css";

export default function RegAsDoner() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrgFromInputs>();
  const onSubmit: SubmitHandler<OrgFromInputs> = (data) =>
    console.log("*fromInputs**", data);
  console.log("erorr data:::", errors);

  return (
    <div className={Style.mainContianer}>
      <PageTitle title="Register As Organization" />
      <form
        className={`shadow-lg   rounded p-4 ${Style.contianer}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={Style.inputContainer}>
          <div className={Style.inputTitleContainer}>
            <span>Organization Name</span>
          </div>
          <div className="ms-4">
            <FormInputText
              type="text"
              placeholder="Name"
              css={Style.nameInputField}
              takeValue={{ ...register("orgname") }}
            />
          </div>
        </div>
        <div className={Style.inputContainer}>
          <div className={Style.inputTitleContainer}>
            <span>Address</span>
          </div>
          <div className="ms-4">
            <FormTextAreInput
              placeholder="Type Here"
              css={Style.addressInputField}
              takeValue={{ ...register("address") }}
            />
          </div>
        </div>
        <div className={Style.inputContainer}>
          <div>
            <span className={Style.inputTitleContainer}>
              Head of Organization
            </span>
          </div>
          <div className="ms-4">
            <FormInputText
              css={Style.nameInputField}
              placeholder="Name"
              type="text"
              takeValue={{ ...register("headOfOrg") }}
            />
          </div>
        </div>
        <div className={Style.inputContainer}>
          <div>
            <span className={Style.inputTitleContainer}>Phone Number</span>
          </div>
          <div className="ms-4">
            <FormInputText
              css={Style.nameInputField}
              placeholder="Number"
              type="text"
              takeValue={{ ...register("phoneNumber") }}
            />
          </div>
        </div>
        <div className={Style.submitBoxContainer}>
          <SubButton
            name="Submit"
            type="submit"
            css={Style.subButtonWhite}
            icon={<Submiticonwhite />}
          />
        </div>
      </form>
    </div>
  );
}
