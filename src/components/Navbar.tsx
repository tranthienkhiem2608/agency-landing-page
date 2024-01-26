import { useState } from "react";
import hamburger from "../assets/images/icon-hamburger.svg";

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);

    const handleClick = () => {
        setMenuClicked((prevClick) => !prevClick)
    }

  return (
    <nav className="font-Barlow">
      <ul
        className={`${menuClicked ? 'flex' : 'hidden'} bg-white w-[329px] h-[305px] absolute top-[106px] left-0 right-0 mx-auto z-10 flex-col place-content-between py-[40px] items-center text-Dark-grayish-blue text-xl after:content-[""] after:absolute after:top-[-24px] after:border-[12px] after:right-0 after:border-white after:border-t-transparent after:border-l-transparent 
        tablet:after:hidden tablet:bg-transparent tablet:relative tablet:flex-row tablet:h-full tablet:top-0 tablet:w-[400px] tablet:py-0
        sm:text-White 
        lg:w-[490px]`}
      >
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Services</li>
        <li className="cursor-pointer">Projects</li>
        <li className="cursor-pointer bg-Yellow w-[140px] h-[56px] grid place-content-center rounded-full text-Very-dark-desaturated-blue uppercase font-Fraunces tablet:bg-White tablet:hover:text-white tablet:hover:bg-opacity-25">
          Contact
        </li>
      </ul>
      <div className="cursor-pointer tablet:hidden">
        <img src={hamburger} alt="hamburger icon" onClick={handleClick} />
      </div>
    </nav>
  );
};

export default Navbar;
