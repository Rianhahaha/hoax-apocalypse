import Gap from "./gap";

function Footer() {
  return (
    <>
    <div className="overflow-hidden">

      <div className="bg-blueMain w-full min-h-dvh relative ">
        <div className="bg-blueMain hidden md:block absolute bottom-0 md:-bottom-12 w-full  overflow-hidden h-[12rem]">
          <img className="w-full" src="./img/gap.svg" alt="" />
        </div>
        <div className="absolute top-2 md:-top-[7rem] w-full md:scale-100 scale-[250%] ">
          <img className="w-full" src="./img/gap.svg" alt="" />
        </div>
        <div className="container pt-[10rem]">
          <div className="w-full flex justify-center gap-10 items-center text-white px-3 md:px-[12rem]">
            <div className="-rotate-6 text-[2rem] md:text-[5rem] w-1/2 text-center">Play Now!! <br/> on PC</div>
            <div className="w-1/2 ">
            <a className="" target="_blank" href="https://kubisgorengstudio.itch.io/hoax-apocalypse">
              <img className="w-[15rem] m-auto hover:scale-90 hovered" src="./img/itchio.png" alt="" />
            </a>
            </div>
          </div>
          <div className="w-full mt-[3rem] flex justify-center">
            <img className="w-[15rem] m-auto hover:scale-90 hovered" src="./img/studio.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer;
