function TentangCard(props) {
  return (
    <div className="flex w-full items-center odd:justify-end my-[15rem] ">
      <div className="w-fit relative group">
        <img className="w-[50rem] group-hover:-translate-y-4 hovered" src={props.card} alt="" />
        <div className="group-hover:-translate-y-5 delay-75  hovered absolute shrink max-w-[20rem] max-h-[20rem] -[20rem] -top-[9rem] right-9 p-[1rem] bg-white group-hover:bg-blueMain rounded-full border-[1rem] border-blueMain  overflow-hidden">
          <img className=" w-full object-bottom" src={props.foto} alt="" />
        </div>
      </div>
    </div>
  );
}

export default TentangCard;
