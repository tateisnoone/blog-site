import img from "../../../../assets/placeholder.svg";
const Mission = () => {
  return (
    <>
      <div className="flex flex-col gap-5 items-center mt-9">
        <h1 className="text-black dark:text-white font-bold font-sans text-4xl">
          About BitBlogs
        </h1>
        <p className="text-xl font-sans text-gray-500">
          Empowering tech enthusiasts to share knowledge and inspire innovation.
        </p>
      </div>
      <div className="container sm:px-44 mx-auto h-[432px] flex flex-row items-center gap-10 mb-9">
        <div className="font-sans text-black dark:text-white">
          <h2 className="font-semibold text-3xl mb-3">Our Mission</h2>
          <p className="font-light leading-7">
            At bitBlogs, we believe in the power of shared knowledge. Our
            mission is to create a platform where tech enthusiasts, developers,
            and innovators can come together to share ideas, learn from each
            other, and push the boundaries of what's possible in the world of
            technology.
          </p>
        </div>
        <div>
          <img className="rounded-md" src={img} alt="About page pic" />
        </div>
      </div>
    </>
  );
};

export default Mission;
