const ProjectCard = (props) => {
  return (
    <div className="w-[80%] max-w-[500px] md:w-[70%] min-h-[450px] bg-[#452a64] my-4 p-3 rounded-lg">
      <div className="img w-[90%] max-w-[300px] mx-auto relative">
        <img src="/laptop.png" alt="" />
        <img src="/twitter.jpg" className="w-[69%] h-[85%] absolute top-[5.4%] left-[15.4%]" alt="" />
      </div>
      <div className="mt-12">
        <p className="text-center text-xl font-bold">{props.title}</p>
        <p className="">{props.description}</p>
        <div className="buttons flex justify-center space-x-8 mt-12">
          <button className="py-2 w-24 bg-red-400 rounded-lg">Code</button>
          <button className="py-2 w-24 bg-red-400 rounded-lg">Live</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
