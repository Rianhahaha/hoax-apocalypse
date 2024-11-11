function TentangCard(props) {
  return (
    <div className="flex w-full items-center odd:justify-end my-[15rem] ">
      <div className="w-fit relative group">
        <img className="w-[50rem] group-hover:-translate-y-4 hovered" src={props.card} alt="" />
        <div className="group-hover:-translate-y-5 delay-75  hovered absolute max-w-[15rem] max-h-[15rem] md:max-w-[20rem] md:max-h-[20rem] -top-[7rem] md:-top-[9rem] right-9 p-[1rem] bg-white group-hover:bg-blueMain rounded-full border-[1rem] border-blueMain  overflow-hidden">
          <img className="w-full object-bottom" src={props.foto} alt="" />
        </div>
      </div>
    </div>
  );
}

export default TentangCard;
