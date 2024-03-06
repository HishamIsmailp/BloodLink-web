import React from "react";

import Style from "../../styles/OurMission.module.css";

export default function OurMission() {
  return (
    <div className={Style.container}>
      <div className={Style.missionBox}>
        <h1 className={Style.ourMissionTitle}>Our Mission</h1>
        <p className="fs-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
    </div>
  );
}
