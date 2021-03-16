import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Image
        src="https://kbldesigners.com/images/Shawn_profile.jpg"
        alt="User Avatar"
        className="mx-auto border rounded-full"
        height="256px"
        width="25px"
        layout="intrinsic"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Shawn </span>
        <span className="text-blue-500">Kebel </span>
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-300 rounded dark:bg-dark-200 dark:bg-black-500">
        Web & Mobile Developer
      </p>
      <a
        className="px-2 py-1 my-2 bg-gray-200 dark:bg-dark-300 dark:bg-black-500 rounded-full flex items-center
                            justify-center cursor-pointer transform active:scale-95 hover:shadow-custom-light
                             dark:shadow-custom-dark"
        href=""
        download="name"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>

      {/* //Social icon */}
      <div className="flex justify-around my-5 text-green w-9/12 md:w-full mx-auto">
        <a href="#">
          <AiFillGithub className="w-8 h-8 cursor-pointer transform hover:scale-125" />
        </a>
        <a href="#">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer transform hover:scale-125" />
        </a>
        <a href="#">
          <AiFillInstagram className="w-8 h-8 cursor-pointer transform hover:scale-125" />
        </a>
      </div>

      {/* address */}
      <div
        className="py-4 my-5 bg-gray-300 rounded dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>St. Louis, MO</span>
        </div>
        <p className="my-2">skebel@kblDesigners.com</p>
        <p className="my-2">618-960-8989</p>
      </div>

      {/*Email button */}
      <button
        className="bg-gradient-to-r from-green to-blue-500 w-8/12 rounded-full py-2 px-5 text-white my-2
                            focus:outline-none bg-black cursor-pointer transform hover:shadow-custom-light
                             dark:shadow-custom-dark active:scale-95"
        onClick={() => window.open("mailto:skebel@www.kblDevelopers.com")}
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className="bg-gradient-to-r from-green to-blue-500 w-8/12 rounded-full py-2 px-5 text-white my-1
                             transform cursor-pointer focus:outline-none hover:shadow-custom-light
                             dark:shadow-custom-dark active:scale-95"
      >
        Toggle Theme
      </button>
    </>
  );
};

export default Sidebar;
