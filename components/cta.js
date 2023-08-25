import React from "react";
import Container from "./container";
import MailingList from "./MailingList";

const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl mx-auto text-white bg-indigo-600 py-4 lg:flex-nowrap rounded-xl">
        <div className="flex-shrink-0 mx-auto w-full text-center lg:w-auto">
          <h2 className="text-2xl font-medium lg:text-3xl">Beta Coming Soon</h2>
          <MailingList bgColor="white" textColor="indigo-600" />
        </div>
      </div>
    </Container>
  );
};

export default Cta;
