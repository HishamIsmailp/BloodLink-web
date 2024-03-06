import React from "react";

import Style from "../../styles/OurCollaborators.module.css";

export default function OurCollaborators() {
  return (
    <div className={Style.ourCollaboratorsContainer}>
      <h1 className={Style.ourCollaboratorsTitle}>Our Collaborators </h1>
      <div className={Style.ourCollaboratorsContentContainer}>
        <div className={`${Style.collaborator} ${Style.collaboratorItem1}`}>
          <h1 className={Style.collaboratorTitle}>{"NSS"}</h1>
        </div>
        <div className={`${Style.collaborator} ${Style.collaboratorItem2}`}>
          <h1 className={Style.collaboratorTitle}>{"NCC"}</h1>
        </div>
        <div className={`${Style.collaborator} ${Style.collaboratorItem3}`}>
          <h1 className={Style.collaboratorTitle}>{"YMCA"}</h1>
        </div>
      </div>
      <div className="d-flex justify-content-center gap-3 mt-5 pt-3">
        <div className={Style.ourCollaboratorsDots}></div>
        <div className={Style.ourCollaboratorsDots} style={{backgroundColor: "#000"}}></div>
        <div className={Style.ourCollaboratorsDots}></div>
      </div>
    </div>
  );
}
