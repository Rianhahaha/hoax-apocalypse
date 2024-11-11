import Marquee from "react-fast-marquee";

function Bg(props) {
  return (
    <>
      <Marquee autoFill direction={props.direction}>
        <div className="text-[7rem] mx-2">
        {props.name}
        </div>
        </Marquee>
        <Marquee autoFill direction={props.direction}>
        <div className="text-[7rem] mx-2">
        {props.name}
        </div>
        </Marquee>
        <Marquee autoFill direction={props.direction}>
        <div className="text-[7rem] mx-2">
        {props.name}
        </div>
        </Marquee>
    </>
  );
}
export default Bg;
