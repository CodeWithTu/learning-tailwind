import Image from "next/image";
import { navLinks } from "@/constants";
import { headerLogo } from "../../public/assets/images";
import { hamburger } from "../../public/assets/icons";

const Nav = () => {
  return (
    <header className="padding-x p-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <Image src={headerLogo} alt={"Logo"} width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-monts errat leading-normal text-lg text-slate-gray">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <Image src={hamburger} alt={"Hamburger"} width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
