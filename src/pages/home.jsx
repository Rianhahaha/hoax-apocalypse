import React from "react";
import Button from "../components/Button";
import Gap from "../components/gap";
import HomeContent from "../components/home/homeContent";
import Bg from "../components/bg";

function Home() {
  return (
    <>
    <div className="overflow-hidden">
      <div className="mb-[-2rem] mt-1 md:mt-[6rem] min-h-dvh relative">
        <div className="h-dvh">
          <img
            className="m-auto w-full h-full object-cover md:object-contain"
            src="/img/home.png"
            alt=""
          />
        </div>
        <a
          className="w-full cursor-pointer" target="_blank"
          href="https://kubisgorengstudio.itch.io/hoax-apocalypse"
        >
          <img
            className=" hover:scale-95 hovered absolute top-[80%] -translate-x-1/2 lg:top-1/2 left-1/2 transform lg:translate-x-1/3 -translate-y-1/2 "
            src="/img/download.svg"
            alt=""
          />
        </a>
        <a
          className="w-full cursor-pointer" target="_blank"
          href="https://youtu.be/fQssynKO1lY"
        >
          <img
            className=" scale-50 hover:scale-[45%] hovered absolute top-[60%] -translate-x-[70%] lg:top-[70%] left-1/2 transform lg:translate-x-[50%] -translate-y-1/2 "
            src="/img/demo.svg"
            alt=""
          />
        </a>
        <Gap />

      </div>
      <div className="min-h-dvh relative overflow-hidden py-[7rem]">
        <div className="-rotate-3  absolute w-[calc(100%+5rem)]  h-full -top-[15rem] -left-10 z-[-100] text-gray-200">
          <Bg name="Sebarkan!!" direction="left" />
          <Bg name="Typing" direction="right" />
          <Bg name="Hindari!!" direction="left" />
          <Bg name="Kumpulkan Poin!!" direction="right" />
        </div>

        <HomeContent img="/img/home/sebarkan.svg" />
        <HomeContent img="/img/home/typing.svg" />
        <HomeContent img="/img/home/hindari.svg" />
        <HomeContent img="/img/home/poin.svg" />
      </div>
    </div>
    </>
  );
}

export default Home;
