function HomeContent(props) {
  return (
    <>
      <div className="relative w-full flex odd:justify-end items-center text-right ">
        <div className=" w-full md:w-[80%]">
          <img className="hover:scale-95 hovered w-full object-contain" src={props.img} alt="" />
        </div>
      </div>
    </>
  );
}

export default HomeContent;
