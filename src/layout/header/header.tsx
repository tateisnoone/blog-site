import { NavLink } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { ModeToggle } from "../../components/mode-toggle";

const Header = () => {
  const { t } = useTranslation();
  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="border-solid border-b border-b-zinc-400">
      <div className="container lg mx-auto px-4 h-20 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <NavLink to="/">BitBlogs</NavLink>
        </div>
        <div className="flex w-40">
          <nav className="hidden md:flex space-x-4 font-sans text-base ">
            <a className="text-gray-500 hover:text-gray-800" href="/">
              {t("header-page.Home")}
            </a>
            <a className="text-gray-500 hover:text-gray-800" href="/write">
              {t("header-page.Write")}
            </a>
            <NavLink to="/about" className="text-gray-500 hover:text-gray-800">
              {t("header-page.About")}
            </NavLink>
          </nav>
        </div>
        <div className="w-72 flex justify-between">
          <NavLink to="sign-in">
            <Button className="bg-blue-500 hover:bg-blue-400 text-base font-sans">
              {t("header-page.SignIn")}
            </Button>
          </NavLink>
          <Button
            className="bg-white hover:bg-slate-300 text-black text-base font-sans"
            onClick={() => handleChangeLanguage("ge")}
          >
            GE
          </Button>
          <Button
            className="bg-white hover:bg-slate-300 text-black text-base font-sans"
            onClick={() => handleChangeLanguage("en")}
          >
            EN
          </Button>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
