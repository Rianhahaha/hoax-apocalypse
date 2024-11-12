import React from "react";
import Gap from "../components/gap";
import Bg from "../components/bg";
import KarakterCard from "../components/karakter/KarakterCard";
function Karakter() {
  return (
    <>
      <div className="mb-[2rem] mt-[6rem] min-h-dvh relative overflow-hidden">
      <div className="-rotate-3  absolute w-[calc(100%+5rem)]  min-h-dvh -top-[15rem]  z-[-100] text-gray-200">
          <Bg name="Game Hoax Apocalypse" direction="left" />
          <Bg name="Game Hoax Apocalypse" direction="right" />
          <Bg name="Game Hoax Apocalypse" direction="left" />
          <Bg name="Game Hoax Apocalypse" direction="right" />
          <Bg name="Game Hoax Apocalypse" direction="left" />
          <Bg name="Game Hoax Apocalypse" direction="right" />

        </div>
        <div className="min-h-dvh pt-[3rem] px-3 md:px-[12rem] ">
          <div className="-rotate-6 text-[3rem] md:text-[5rem] text-white leading-snug text-shadow">
            <p>Karakter</p>
          </div>
          <div className="mt-[10rem]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 justify-center">
              <KarakterCard
                name="Yuta"
                idle="/img/karakter/mc-idle.gif"
                action="/img/karakter/mc-action.gif"
                desc="Yuta adalah pemuda berani dan menjunjung tinggi kejujuran. Dia memiliki misi untuk menyadarkan warga dari pengaruh informasi palsu yang merusak pemahaman mereka."
              />
              <KarakterCard
                name="Karen"
                idle="/img/karakter/npc2-idle.gif"
                action="/img/karakter/npc2-enemy.gif"
                desc="Karakter Karen berperan sebagai warga yang terkena hoaks, NPC atau people ini akan bergerak bebas."
              />
              <KarakterCard
                name="Reno"
                idle="/img/karakter/npc3-idle.gif"
                action="/img/karakter/npc3-enemy.gif"
                desc="Karakter Reno berperan sebagai warga yang terkena hoaks, NPC atau people ini akan bergerak bebas."
              />
              <KarakterCard
                name="Pakum"
                idle="/img/karakter/npc1-idle.gif"
                action="/img/karakter/npc1-enemy.gif"
                desc="Karakter Pakum berperan sebagai warga yang terkena hoaks, NPC atau people ini akan bergerak bebas."
              />

            </div>      
          </div>
        </div>
      </div>
    </>
  );
}

export default Karakter;
