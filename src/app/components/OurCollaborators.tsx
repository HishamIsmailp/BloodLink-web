"use client";
import React, { useState, useEffect } from "react";

import Style from "../../styles/OurCollaborators.module.css";

export default function OurCollaborators() {
  const [currentCollaborator, setCurrentCollaborator] = useState(0);

  useEffect(() => {
    const collaboratorTimeout = setTimeout(() => {
      setCurrentCollaborator((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearTimeout(collaboratorTimeout);
  }, [currentCollaborator]);
  useEffect(() => {
    if (currentCollaborator === 2) {
      setTimeout(() => {
        setCurrentCollaborator(0);
      }, 2500);
    }
  }, [currentCollaborator]);

  const collaborators = ["NSS", "NCC", "YMCA"];

  return (
    <div className={Style.ourCollaboratorsContainer}>
      <h1 className={Style.ourCollaboratorsTitle}>Our Collaborators </h1>
      <div className={Style.ourCollaboratorsContentContainer}>
        {collaborators.map((collaborator, index) => (
          <div
            key={index}
            className={`${Style.collaborator} ${
              currentCollaborator === index ? Style.activeCollaborator : ""
            }`}
          >
            <h1 className={Style.collaboratorTitle}>{collaborator}</h1>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center gap-3 mt-5 pt-3">
        <div
          className={Style.ourCollaboratorsDots}
          style={{
            backgroundColor: currentCollaborator === 0 ? "#000" : "#c4c4c4",
          }}
        ></div>
        <div
          className={Style.ourCollaboratorsDots}
          style={{
            backgroundColor: currentCollaborator === 1 ? "#000" : "#c4c4c4",
          }}
        ></div>
        <div
          className={Style.ourCollaboratorsDots}
          style={{
            backgroundColor: currentCollaborator === 2 ? "#000" : "#c4c4c4",
          }}
        ></div>
      </div>
    </div>
  );
}
