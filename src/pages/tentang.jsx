import React from "react";
import Button from "../components/Button";
import Gap from "../components/gap";
import Bg from "../components/bg";
import TentangCard from "../components/tentang/tentangCard";
function Tentang() {
  return (
    <>
      <div className="overflow-hidden">
        <div className="pb-[2rem] pt-[6rem] min-h-dvh relative bg-blueMain text-white">
          <div className="min-h-dvh pt-[3rem] px-3 md:px-[12rem] ">
            <div className="-rotate-6 text-[3rem] lg:text-[5rem] text-center text-white leading-snug text-shadow">
              <p>
                Tentang <br /> Hoax Apocalypse
              </p>
            </div>
            <div className="mt-[5rem] text-sm lg:text-2xl text-center">
              Selamat datang di{" "}
              <span className="text-yellowMain"> "Hoax Apocalypse," </span>{" "}
              sebuah game edukatif yang mengajak Anda untuk berpetualang di
              dunia yang terancam oleh penyebaran hoaks! Dalam permainan ini, 
              Mainkan peran sebagai Yuta, seorang pemuda berani dan menjunjung
              tinggi kejujuran, Yuta memiliki misi untuk menyadarkan warga dari
              pengaruh informasi palsu yang merusak pemahaman mereka. Dengan
              gameplay yang cepat dan penuh tantangan, Anda akan mengetik
              kata-kata acak yang muncul di layar dalam waktu terbatas untuk
              membantu warga yang terjebak dalam gelembung hoaks. Setiap kata
              yang Anda ketik bukan hanya sekadar tantangan, tetapi juga
              merupakan langkah untuk meningkatkan literasi digital dan
              kemampuan berpikir kritis Anda.
            </div>
          </div>

          <Gap />
        </div>
        <div className="py-[6rem] min-h-dvh relative overflow-hidden">
          <div className="-rotate-3  absolute w-[calc(100%+5rem)]  min-h-dvh -top-[15rem] -left-10 md:-left-20 z-[-100] text-gray-200">
            <Bg name="Game Hoax Apocalypse" direction="left" />
            <Bg name="Game Designer" direction="left" />
            <Bg name="Game Artist" direction="right" />
            <Bg name="Game Programmer" direction="left" />
            <Bg name="Game Programmer" direction="right" />
            <Bg name="Game Programmer" direction="left" />
          </div>
          <div className="min-h-dvh mt-[3rem] px-3 lg:px-[12rem] ">
            <div className="-rotate-6 text-[3rem] md:text-[5rem] text-white leading-snug text-shadow">
              <p>
                Profil <br /> Pengembang
              </p>
            </div>
            <div className="mt-[5rem]">
              <TentangCard card="img/profil/1.svg" foto="img/profil/1.png" />
              <TentangCard card="img/profil/2.svg" foto="img/profil/2.png" />
              <TentangCard card="img/profil/3.svg" foto="img/profil/3.png" />
              <TentangCard card="img/profil/4.svg" foto="img/profil/4.png" />
              {/* <TentangCard/> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tentang;
