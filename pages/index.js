import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <div className="bg-black bg-opacity-85">
      <Head>
        <title>Bravont - Next Gen Shooter</title>
        <meta
          name="description"
          content="Bravont is a next generation shooter. Manipulate gravity to destroy your foes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <SectionTitle
        pretitle="What"
        title="Bravont is a Next Gen Multiplayer Tactical Shooter where players can manipulate gravity to gain new advantages on their opponents"
      ></SectionTitle>
      <SectionTitle pretitle="Watch" title="Gameplay"></SectionTitle>
      <Video />

      <SectionTitle
        pretitle="Testimonials"
        title="Here's what others are saying"
      ></SectionTitle>
      <Testimonials />
      <SectionTitle
        pretitle="FAQ"
        title="Frequently Asked Questions"
      ></SectionTitle>
      <Faq />
      <Cta />
    </div>
  );
};

export default Home;
