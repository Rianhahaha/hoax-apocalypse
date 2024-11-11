function KarakterCard(props) {
  return (
    <div className="relative group w-full bg-gradient-to-b from-yellowMain to-yellowMain2 border-[1rem] border-blueMain rounded-3xl p-6 hover:-translate-y-5 hovered">
      <img
        className="absolute group-hover:opacity-0 w-[20rem] -translate-y-[150px] -left-[50px]"
        src={props.idle}
        alt=""
      />
      <img
        className="absolute opacity-0 group-hover:opacity-100 w-[20rem] -translate-y-[150px] -left-[50px]"
        src={props.action}
        alt=""
      />
      <div className="-top-20 -rotate-6 text-[5rem] sm:text-[6rem] text-nowrap text-white leading-snug text-shadow text-right">
        <p>{props.name}</p>
      </div>
      <div className="mt-3 text-center md:text-left">
      {props.desc}
      </div>
    </div>
  );
}

export default KarakterCard;
