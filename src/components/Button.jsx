function Button(props) {
  return (
    <>
      <a target="_blank" href={props.link} className="group relative w-full">
        <img
          className="absolute-center w-[20rem]"
          src="./img/button-shadow.svg"
          alt=""
        />
        <div className="absolute w-full group-hover:-translate-x-2 group-hover:-translate-y-3  hovered">
          <div className="relative">
            <img
              className="absolute-center w-[20rem]"
              src="./img/button.svg"
              alt=""
            />
            <div className="absolute-center text-3xl">{props.name}</div>
          </div>
        </div>
      </a>
    </>
  );
}
export default Button;
