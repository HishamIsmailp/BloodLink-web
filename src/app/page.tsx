import Banner from "./components/Banner";
import Footer from "./components/Footer";
import GetBlood from "./components/GetBlood";
import NavBar from "./components/NavBar";
import OurCollaborators from "./components/OurCollaborators";
import OurMission from "./components/OurMission";

import Style from "./page.module.css";

export default function Home() {
  return (
    <>
    <div className="position-fixed top-0 w-100"><NavBar /></div>
    <Banner />
    <OurMission />
    <OurCollaborators />
    <GetBlood />
    <Footer />
    </>
  );
}
