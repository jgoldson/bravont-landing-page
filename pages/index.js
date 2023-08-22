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
    <>
      <Head>
        <title>Bravont - Next Gen Shooter</title>
        <meta
          name="description"
          content="Bravont is a next generation shooter. Manipulate gravity to destroy your foes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <SectionTitle pretitle="Watch" title="Gameplay">
        {" "}
      </SectionTitle>
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
    </>
  );
};

export default Home;
