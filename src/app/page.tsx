import Banner from "./components/Banner";

import GetBlood from "./components/GetBlood";
import OurCollaborators from "./components/OurCollaborators";
import OurMission from "./components/OurMission";

import Style from "./page.module.css";

export default function Home() {
  return (
    <>
    <Banner />
    <OurMission />
    <OurCollaborators />
    <GetBlood />
    </>
  );
}
