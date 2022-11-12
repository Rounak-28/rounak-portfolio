const Box = (props) => {
  return (
    <div className="w-16 h-16 lg:w-24 lg:h-20 bg-[#4c2c6b] flex flex-col justify-center items-center">
      {props.icon}
      <p className="text-sm lg:text-base">{props.name}</p>
    </div>
  );
};

export default Box;
