import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 bg-trueGray-800 text-white">
            <p className="text-2xl text-white leading-normal ">
              This is the game I've been waiting for.
            </p>

            <Avatar image={userOneImg} name="Sarah" title="Gamer" />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 bg-trueGray-800">
            <p className="text-2xl text-white leading-normal ">
              Crazy impressive graphics coming out of an indie studio.
            </p>

            <Avatar image={userTwoImg} name="Ryan" title="Gamer" />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 bg-trueGray-800">
            <p className="text-2xl text-white leading-normal ">
              This game looks awesome and I can't wait for multiplayer.
            </p>

            <Avatar image={userThreeImg} name="Gabrielle" title="Gamer" />
          </div>
        </div>
      </div>
    </Container>
  );
};

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium text-white">{props.name}</div>
        <div className="text-white text-white">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 :ring-indigo-900 bg-indigo-900 text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;
